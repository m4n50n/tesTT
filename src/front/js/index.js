//import react into the bundle
import React from "react";
import { StrictMode, useRef, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import Layout from "./layout";
import "mapbox-gl/dist/mapbox-gl.css";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Layout />
  </StrictMode>
);
