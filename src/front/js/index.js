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
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));