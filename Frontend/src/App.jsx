import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPackages from "./components/AllPackages";
import SpecificPackage from "./components/SpecificPackage";

import Home from "./pages/Home";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<AllPackages />} />

        <Route path="/package/:id" element={<SpecificPackage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
