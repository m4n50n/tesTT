import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        
        
         <div>
         <button onclick="location.href='aquiponemoselenlace'"  type="button" className="buttonacess" class="btn btn-warning">Incio</button>

         </div>

      </div>
    </nav>
  );
};
