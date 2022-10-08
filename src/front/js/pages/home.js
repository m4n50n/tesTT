import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { Footer } from "../component/footer";

import "../../styles/index.css";

export const Home = () => {
  return (
    <>
      <div>
       <nav className="navbar navbar-light bg-warning">
   
          
    </nav>

        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <img
                className="logo"
                src="https://www.creativefabrica.com/wp-content/uploads/2021/04/29/Dog-line-outline-monoline-logo-Graphics-11485513-1-580x386.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />;
      </div>
    </>
  );
};
