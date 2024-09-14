// Lighthouse thresholds
const thresholds = {
  performance: "83",
};

// Cypress tests
describe("Button performance", () => {
  it("should run perf test", () => {
    cy.visit("http://localhost:3001/#/buttons");
    cy.lighthouse(thresholds);
  });

  it("should run perf test", () => {
    cy.visit("http://localhost:3001/#/more-buttons");
    cy.lighthouse(thresholds);
  });
});
