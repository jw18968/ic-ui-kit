/**
 * To investigate:
 * IcColorRGBA works via @ukic/web-components but IcThemeForeground does not even though they are exported
 * from @ukic/web-components in the same file. Why?
 */
import {
  IcCallbackFunctionNoReturn,
  IcInformationStatusOrEmpty,
  IcNavParentDetails,
  IcPropObject,
  IcSearchMatchPositions,
  IcColorRGBA,
} from "@ukic/web-components";
import {
  IC_BLOCK_COLOR_COMPONENTS,
  IC_BLOCK_COLOR_EXCEPTIONS,
  IC_FIXED_COLOR_COMPONENTS,
} from "./constants"; // Using @ukic/web-components/dist/types/utils/constants does not work so duplicated constants into canary package
import {
  IcMenuOption,
  IcThemeForeground,
  IcThemeForegroundEnum,
} from "./types"; // Using @ukic/web-components/dist/types/utils/types does not work so duplicated constants into canary package
import { EventEmitter } from "@stencil/core";
import { IcDataTableDataType } from "../interface";

const DARK_MODE_THRESHOLD = 133.3505;

/**
 * converts an enum of strings into an array of strings
 */
export const stringEnumToArray = (
  theEnum: Record<string, string | number>
): string[] => {
  const arr: string[] = [];
  Object.values(theEnum).forEach((val) => {
    if (isNaN(Number(val))) {
      const str = val as string;
      arr.push(str);
    }
  });
  return arr;
};

/**
 * Used to inherit global attributes set on the host. Called in componentWillLoad and assigned
 * to a variable that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */
export const inheritAttributes = (
  element: HTMLElement,
  attributes: string[] = []
): { [key: string]: unknown } => {
  const attributeObject: { [key: string]: unknown } = {};

  attributes.forEach((attr) => {
    if (element.hasAttribute(attr)) {
      const value = element.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = element.getAttribute(attr);
      }
      element.removeAttribute(attr);
    }
  });

  return attributeObject;
};

export const debounceEvent = (
  event: EventEmitter,
  wait: number
): EventEmitter => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const original = (event as any)._original || event;
  return {
    _original: event,
    emit: debounce(original.emit.bind(original), wait),
  } as EventEmitter;
};

export const debounce = (
  func: (...args: unknown[]) => void,
  wait = 0
): unknown => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(func, wait, ...args);
  };
};

/**
 * This method is used to add a hidden input to a host element that contains
 * a Shadow DOM. It does not add the input inside of the Shadow root which
 * allows it to be picked up inside of forms. It should contain the same
 * values as the host element.
 *
 * @param always Add a hidden input even if the container does not use Shadow
 * @param container The element where the input will be added
 * @param name The name of the input
 * @param value The value of the input
 * @param disabled If true, the input is disabled
 */
export const renderHiddenInput = (
  always: boolean,
  container: HTMLElement,
  name: string,
  value: string | Date | undefined | null,
  disabled: boolean
): void => {
  if (name !== undefined && (always || hasShadowDom(container))) {
    const inputs = container.querySelectorAll("input.ic-input");
    const inputEls = Array.from(inputs);
    const filtered = inputEls.filter((el) => container === el.parentElement);

    let input = filtered[0] as HTMLInputElement;
    if (input === null || input === undefined) {
      input = container.ownerDocument.createElement("input");
      input.type = "hidden";
      input.classList.add("ic-input");
      container.appendChild(input);
    }
    input.disabled = disabled;
    input.name = name;

    if (value instanceof Date) {
      input.value = value ? value.toISOString() : null;
    } else {
      input.value = value || "";
    }
  }
};

export const removeHiddenInput = (container: HTMLElement): void => {
  const inputs = container.querySelectorAll("input.ic-input");
  const inputEls = Array.from(inputs);
  const filtered = inputEls.filter((el) => container === el.parentElement);
  const input = filtered[0] as HTMLInputElement;
  input?.remove();
};

/**
 * This method helps to understand the context in which a component exists,
 * to assist with choosing appropriate foreground colours to use. For example,
 * this method will help you use the 'white' version of a button if it's within
 * a block colour element using white foreground text.
 *
 * This only works for components/elements passed via <slot> and not if they
 * are part of an IC component.
 *
 * ""
 * @returns IcThemeForeground depending on the context
 */
export const getThemeFromContext = (
  el: Element,
  themeFromEvent: IcThemeForeground = null
): IcThemeForeground => {
  const parentElement =
    el.parentElement || (<ShadowRoot>el.getRootNode()).host.parentElement;
  const blockColorParent = parentElement.closest(
    IC_BLOCK_COLOR_COMPONENTS.join(",")
  );

  // If within a block color component
  if (blockColorParent !== null) {
    const parentTag = blockColorParent.tagName.toLowerCase();
    const currentTag = el.tagName.toLowerCase();

    if (IC_BLOCK_COLOR_EXCEPTIONS[parentTag]?.includes(currentTag)) {
      return IcThemeForegroundEnum.Default;
    } else if (
      themeFromEvent !== null &&
      !IC_FIXED_COLOR_COMPONENTS.includes(parentTag)
    ) {
      return themeFromEvent;
    } else if (
      blockColorParent.classList.contains(IcThemeForegroundEnum.Dark)
    ) {
      return IcThemeForegroundEnum.Dark;
    }

    return IcThemeForegroundEnum.Light;
  }

  return IcThemeForegroundEnum.Default;
};

/**
 * Will create a button within the lightDOM which interacts with the parent form.
 * This is required as buttons within the shadowDOM will not invoke a submit or reset
 *
 * @param form - parent form element which contains shadowDom button
 * @param button - shadowDOM button
 */
export const handleHiddenFormButtonClick = (
  form: HTMLFormElement,
  button: HTMLIcButtonElement | HTMLButtonElement
): void => {
  const hiddenFormButton = document.createElement("button");

  hiddenFormButton.setAttribute("type", button.type);
  hiddenFormButton.style.display = "none";

  form.appendChild(hiddenFormButton);

  hiddenFormButton.click();
  hiddenFormButton.remove();
};

export const isEmptyString = (value: string): boolean =>
  value ? value.trim().length === 0 : true;

// A helper function that checks if a prop has been defined
export const isPropDefined = (prop: string): string | null =>
  prop !== undefined ? prop : null;

export const deviceSizeMatches = (size: number): boolean =>
  window.matchMedia(`(max-width: ${size}px)`).matches;

export const getCurrentDeviceSize = (): number => {
  if (deviceSizeMatches(DEVICE_SIZES.S)) {
    return DEVICE_SIZES.S;
  }
  if (deviceSizeMatches(DEVICE_SIZES.M)) {
    return DEVICE_SIZES.M;
  }
  if (deviceSizeMatches(DEVICE_SIZES.L)) {
    return DEVICE_SIZES.L;
  }
  if (deviceSizeMatches(DEVICE_SIZES.XL)) {
    return DEVICE_SIZES.XL;
  }
  //fallback needed as all of above get initialised to 0 in jest tests
  return DEVICE_SIZES.UNDEFINED;
};

export const getCssProperty = (cssVar: string): string =>
  getComputedStyle(document.documentElement).getPropertyValue(cssVar);

/**
 * Returns the brightness of the theme colour, calculated by using the theme RGB CSS values by:
 * - Multiplying each RGB value by a set number: https://www.w3.org/TR/AERT/#color-contrast
 * - Adding them together and dividing by 1000
 * This is a similar calculation to its CSS counterpart: "--ic-theme-text"
 * @returns number representing the brightness of the theme colour
 */
export const getThemeColorBrightness = (): number => {
  const themeRed = getCssProperty("--ic-theme-primary-r");
  const themeGreen = getCssProperty("--ic-theme-primary-g");
  const themeBlue = getCssProperty("--ic-theme-primary-b");
  return (
    (parseInt(themeRed) * 299 +
      parseInt(themeGreen) * 587 +
      parseInt(themeBlue) * 114) /
    1000
  );
};

/**
 * Returns if dark or light foreground colors should be used for color contrast reasons
 * @returns "dark" or "light"
 */
export const getThemeForegroundColor = (): IcThemeForeground =>
  getThemeColorBrightness() > DARK_MODE_THRESHOLD
    ? IcThemeForegroundEnum.Dark
    : IcThemeForegroundEnum.Light;

export const getSlot = (element: HTMLElement, name: string): Element | null => {
  if (element && element.querySelector) {
    return element.querySelector(`[slot="${name}"]`);
  }
  return null;
};

export const slotHasContent = (element: HTMLElement, name: string): boolean =>
  getSlot(element, name) !== null;

export const getSlotContent = (
  element: HTMLElement,
  name: string
): Element[] | NodeListOf<ChildNode> | null => {
  const slot = getSlot(element, name);
  if (slot) {
    return getSlotElements(slot);
  }

  return null;
};

export const getSlotElements = (
  slot: Element
): NodeListOf<ChildNode> | Element[] => {
  const slotContent = slot.firstElementChild as HTMLSlotElement;

  if (slotContent !== null) {
    const elements = slotContent.assignedElements
      ? slotContent.assignedElements()
      : slotContent.childNodes;
    return elements.length ? elements : slot.tagName ? [slot] : null;
  } else {
    //check for single element
    return slot === null ? null : [slot];
  }
};

export const getNavItemParentDetails = (
  el: HTMLElement
): IcNavParentDetails => {
  let navType: IcNavParentDetails = { navType: "", parent: null };
  switch (getParentElementType(el)) {
    case "IC-NAVIGATION-GROUP":
      navType = getNavItemParentDetails(el.parentElement);
      break;
    case "IC-TOP-NAVIGATION":
      navType = { navType: "top", parent: getParentElement(el) };
      break;
    case "IC-SIDE-NAVIGATION":
      navType = { navType: "side", parent: getParentElement(el) };
      break;
    case "IC-PAGE-HEADER":
      navType = { navType: "page-header", parent: null };
      break;
  }
  return navType;
};

export const DEVICE_SIZES = {
  XS: Number(getCssProperty("--ic-breakpoint-xs").replace("px", "")), // 0
  S: Number(getCssProperty("--ic-breakpoint-sm").replace("px", "")), // 576
  M: Number(getCssProperty("--ic-breakpoint-md").replace("px", "")), // 768
  L: Number(getCssProperty("--ic-breakpoint-lg").replace("px", "")), // 992
  XL: Number(getCssProperty("--ic-breakpoint-xl").replace("px", "")), // 1200
  UNDEFINED: 1200,
};

export const isSlotUsed = (element: HTMLElement, slotName: string): boolean =>
  Array.from(element.children).some(
    (child) => child.getAttribute("slot") === slotName
  );

// added as a common method to allow detection of gatsby hydration issue, where (camelCase) props are initially undefined & then update
// with a value. Allows a callback function to be executed when this is the case
export const onComponentPropUndefinedChange = (
  oldValue: string | undefined,
  newValue: string | undefined,
  callback: IcCallbackFunctionNoReturn
): void => {
  if (oldValue === undefined && newValue !== oldValue) {
    callback();
  }
};

export const hasShadowDom = (el: HTMLElement): boolean =>
  !!el.shadowRoot && !!el.attachShadow;

export const getInputHelperTextID = (id: string): string => id + "-helper-text";

export const getInputValidationTextID = (id: string): string =>
  id + "-validation-text";

export const getInputDescribedByText = (
  inputId: string,
  helperText: boolean,
  validationText: boolean
): string =>
  `${helperText ? getInputHelperTextID(inputId) : ""} ${
    validationText ? getInputValidationTextID(inputId) : ""
  }`.trim();

export const isMobileOrTablet = (): boolean =>
  "maxTouchPoints" in navigator ? navigator.maxTouchPoints > 0 : false;

/**
 * Extracts the label using the value from an object. Requires the object to have a label and value property.
 * @param value - value from object
 * @param options - list of menu items
 * @returns - label corresponding to value
 */
export const getLabelFromValue = (
  value: string,
  options: IcMenuOption[],
  valueField = "value",
  labelField = "label"
): string | undefined => {
  const ungroupedOptions: IcMenuOption[] = [];
  if (options.length > 0 && options.map) {
    options.map((option) => {
      if (option.children) {
        option.children.map((option: IcMenuOption) =>
          ungroupedOptions.push(option)
        );
      } else {
        ungroupedOptions.push(option);
      }
    });
    const matchingValue = ungroupedOptions.find(
      (option) => option[valueField] === value
    );
    if (matchingValue !== undefined) return matchingValue[labelField];
  }

  return undefined;
};

/**
 * Filters the options based on the search string.
 * @param options - array of options
 * @param includeDescriptions - determines whether option descriptions are included when filtering options
 * @param searchString - string used to filter the options
 * @param position - whether the search string matches the start of or anywhere in the options
 * @returns filtered array of options
 */
export const getFilteredMenuOptions = (
  options: IcMenuOption[],
  includeDescriptions: boolean,
  searchString: string,
  position: IcSearchMatchPositions,
  labelField = "label"
): IcMenuOption[] =>
  options.filter((option) => {
    const label: string = option[labelField].toLowerCase();
    const description = option.description?.toLowerCase();
    const lowerSearchString = searchString.toLowerCase();

    return position === "anywhere"
      ? includeDescriptions
        ? label.includes(lowerSearchString) ||
          description?.includes(lowerSearchString)
        : label.includes(lowerSearchString)
      : includeDescriptions
      ? label.startsWith(lowerSearchString) ||
        description?.startsWith(lowerSearchString)
      : label.startsWith(lowerSearchString);
  });

/**
 * Gets count of options where only group title "parent" options have been removed.
 * Disabled options are included in the count.
 * @param options - array of options
 * @returns number of options not including group titles
 */
export const getOptionsWithoutGroupTitlesCount = (
  options: IcMenuOption[]
): number => {
  const optionsWithoutGroupTitles: IcMenuOption[] = [];

  if (options.length > 0 && options.map) {
    options.map((option) => {
      if (option.children) {
        option.children.map((option) => optionsWithoutGroupTitles.push(option));
      } else {
        optionsWithoutGroupTitles.push(option);
      }
    });
  }

  return optionsWithoutGroupTitles.length;
};

const hex2dec = function (v: string) {
  return parseInt(v, 16);
};

export const hexToRgba = (hex: string): IcColorRGBA => {
  let c;
  if (hex.length === 4) {
    c = hex.replace("#", "").split("");
    return {
      r: hex2dec(c[0] + c[0]),
      g: hex2dec(c[1] + c[1]),
      b: hex2dec(c[2] + c[2]),
      a: 1,
    };
  } else {
    return {
      r: hex2dec(hex.slice(1, 3)),
      g: hex2dec(hex.slice(3, 5)),
      b: hex2dec(hex.slice(5)),
      a: 1,
    };
  }
};

export const rgbaStrToObj = (rgbaStr: string): IcColorRGBA => {
  const fourthChar = rgbaStr.slice(3, 4);
  let colorRGBA: IcColorRGBA;
  if (fourthChar.toLowerCase() === "a") {
    colorRGBA = { r: null, g: null, b: null, a: null };
    const rgba = rgbaStr
      .substring(5, rgbaStr.length - 1)
      .replace(/ /g, "")
      .split(",");
    colorRGBA.r = Number(rgba[0]);
    colorRGBA.g = Number(rgba[1]);
    colorRGBA.b = Number(rgba[2]);
    colorRGBA.a = Number(rgba[3]);
  } else {
    colorRGBA = { r: null, g: null, b: null, a: 1 };
    const rgb = rgbaStr
      .substring(4, rgbaStr.length - 1)
      .replace(/ /g, "")
      .split(",");
    colorRGBA.r = Number(rgb[0]);
    colorRGBA.g = Number(rgb[1]);
    colorRGBA.b = Number(rgb[2]);
  }

  return colorRGBA;
};

export const elementOverflowsX = (element: HTMLElement): boolean =>
  element.scrollWidth > element.clientWidth;

/**
 *
 * @param child - The child element
 * @returns string
 */
export const getParentElementType = (child: HTMLElement): string =>
  child.parentElement.tagName;

export const getParentElement = (child: HTMLElement): HTMLElement =>
  child.parentElement;

export const hasClassificationBanner = (): boolean =>
  !!document.querySelector("ic-classification-banner:not([inline='true'])");

export const pxToRem = (px: string, base = 16): string =>
  `${(1 / base) * parseInt(px)}rem`;

export const isNumeric = (value: string): boolean => {
  return /^-?\d+$/.test(value);
};

export const hasValidationStatus = (
  status: IcInformationStatusOrEmpty,
  disabled: boolean
): boolean => {
  return status !== "" && !disabled;
};

export const onComponentRequiredPropUndefined = (
  props: IcPropObject[],
  component: string
): void => {
  for (let i = 0; i < props.length; i++) {
    const { prop, propName } = props[i];
    if (prop === null || prop === undefined) {
      console.error(
        `No ${propName} specified for ${component} component - prop '${propName}' (web components) / '${kebabToCamelCase(
          propName
        )}' (react) required`
      );
    }
  }
};

export const kebabToCamelCase = (kebabCase: string): string => {
  kebabCase = kebabCase.toLowerCase();
  const individualWords: string[] = kebabCase.split("-");
  let camelCase = individualWords[0];
  for (let i = 1; i < individualWords.length; i++) {
    camelCase +=
      individualWords[i].substring(0, 1).toUpperCase() +
      individualWords[i].substring(1);
  }
  return camelCase;
};

export const checkResizeObserver = (
  callbackFn: IcCallbackFunctionNoReturn
): void => {
  if (
    typeof window !== "undefined" &&
    typeof window.ResizeObserver !== "undefined"
  ) {
    callbackFn();
  }
};

export const getForm = (el: HTMLElement): HTMLFormElement => el.closest("FORM");

export const addFormResetListener = (
  el: HTMLElement,
  callbackFn: IcCallbackFunctionNoReturn
): void => {
  const form = getForm(el);
  if (form !== null) {
    form.addEventListener("reset", callbackFn);
  }
};

export const removeFormResetListener = (
  el: HTMLElement,
  callbackFn: IcCallbackFunctionNoReturn
): void => {
  const form = getForm(el);
  if (form !== null) {
    form.removeEventListener("reset", callbackFn);
  }
};

export const removeDisabledFalse = (
  disabled: boolean,
  element: HTMLElement
): void => {
  if (!disabled) {
    element.removeAttribute("disabled");
  }
};

export const isMacDevice = (): boolean => {
  return window.navigator.userAgent.toUpperCase().indexOf("MAC") >= 0;
};

export async function waitForHydration(): Promise<boolean> {
  const elements = document.getElementsByTagName("*");

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].tagName.startsWith("IC-")) {
      if (elements[i].classList.contains("hydrated")) {
        return true;
      }
    } else {
      return false;
    }
  }

  return false;
}

export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const checkSlotInChildMutations = (
  addedNodes: NodeList,
  removedNodes: NodeList,
  slotName: string
): boolean => {
  const hasSlot = (nodeList: NodeList) =>
    Array.from(nodeList).some((node) => (node as Element).slot === slotName);
  return hasSlot(addedNodes) || hasSlot(removedNodes);
};

export const addDataToPosition = (
  dataObject: IcDataTableDataType,
  newKeys: { key: string; index: number }[],
  newValue: unknown
): IcDataTableDataType => {
  const newData: IcDataTableDataType = {};
  const newIndexes = newKeys.map((key) => key.index);
  let controlledIndex = 0; // When a new key is added to the data, need to increment the index to account for this new object value

  Object.keys(dataObject).forEach((dataKey) => {
    if (newIndexes.includes(controlledIndex)) {
      newData[newKeys[newIndexes.indexOf(controlledIndex)].key] = newValue;
      controlledIndex++;
    }
    newData[dataKey] = dataObject[dataKey];
    controlledIndex++;
  });
  return newData;
};
