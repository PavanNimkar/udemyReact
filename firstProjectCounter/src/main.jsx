import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Counter from "./Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Counter />
  </StrictMode>
);
