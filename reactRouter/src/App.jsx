import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Header from "./Header.jsx";
import Error from "./Error.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
            </>
          }
        />

        <Route path="*" element=<Error /> />
      </Routes>
    </>
  );
}

export default App;
