import React from "react";
import {Link} from "react-router-dom";
import logo from "../img/logo/logo.png";

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>

const Navbar =()=>{
    return(
       <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav  justify-content-between">
            <Link to="Home" ><img src={logo} alt="logo" width="270" height="50" className="d-inline-block align-center"/></Link>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="d-flex justify-content-end">
                <Link to="Login" className="nav-link justify-content-right" >Login</Link>
                <Link to="Cart" className="nav-link ">{cartIcon}  Cart</Link>
            </div>
            
       </nav>   
       </>
    )
}
export default Navbar;