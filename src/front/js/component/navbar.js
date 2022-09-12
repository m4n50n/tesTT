import React, { Component } from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
	return (
	    
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center">
                <img className="logo" src="https://www.creativefabrica.com/wp-content/uploads/2021/04/29/Dog-line-outline-monoline-logo-Graphics-11485513-1-580x386.png" alt="logo" />
              </div>
              
            </div>
          </div>
          <div className="row menu pt-2 pb-2">

            <div className="col-4 text-center"><Link to="/login"> <a className="link-dark text-decoration-none" href="">INICIO</a></Link></div>
            <div className="col-4 text-center"><a className="link-dark text-decoration-none" href=""></a></div>
            <div className="col-4 text-center"><Link to="/register"><a className="link-dark text-decoration-none" href="">REGISTRATE</a></Link></div>

          </div>

        </div>
		
	);
};