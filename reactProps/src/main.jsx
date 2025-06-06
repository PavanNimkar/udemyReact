import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import User from "./User.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />

    <User name="Pavan Nimkar" expert="Full Stack" />
    <User name="Nilesh Koigade" expert="Python" />
  </StrictMode>
);
