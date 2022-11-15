import React from "react";
import { StrictMode, useRef, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import Layout from "./layout";
import "mapbox-gl/dist/mapbox-gl.css";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

//render your react application
root.render(
  <StrictMode>
    <Layout />
  </StrictMode>
);
// ReactDOM.render(<Layout />, document.querySelector("#app"));
