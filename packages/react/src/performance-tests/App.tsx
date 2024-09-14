import React from "react";
import IcButtonPage from "./pages/IcButton";
import { Routes, Route } from "react-router-dom";
import MoreIcButtonPage from "./pages/MoreIcButtons";

// Using React router to create pages
// HashRouter (https://reactrouter.com/en/main/router-components/hash-router) is used so reloading the page doesn't re-direct to 404
const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/">
            <Route path="buttons" element={<IcButtonPage />} />
            <Route path="more-buttons" element={<MoreIcButtonPage />} />
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
