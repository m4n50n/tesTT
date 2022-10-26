// import react into the bundle
// import React from "react";
// import { StrictMode } from "react";
// import { createRoot } from "react-dom";
// import "../styles/index.css";
// import Layout from "./layout";

// const rootElement = document.getElementById("app");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <Layout />
//   </StrictMode>
// );
//import react into the bundle
import React from "react";
import { StrictMode, useRef, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";

//import your own components
import Layout from "./layout";
import "mapbox-gl/dist/mapbox-gl.css";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
