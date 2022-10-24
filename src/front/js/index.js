//import react into the bundle
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import Layout from "./layout";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Layout />
  </StrictMode>
);
