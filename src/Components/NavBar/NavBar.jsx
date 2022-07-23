import React from "react";
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"
import { useState } from "react";

export default function NavBar(){

    const [dropdown, setDropdown] = useState([false])
    return (
        <nav className="navBar">
            <Link className="navLogo" to={"/"}> LimitGains™ </Link>

            <article className="navList">
                <div> 
                    <span className="dropdownBtn" onClick={()=> setDropdown(!dropdown)}> Productos </span>
                    {
                        dropdown?
                        <div className="dropdownList">
                            <p className="dropdownItems"> <Link to={"/category/suplementos"}> Suplementos </Link> </p>
                            <p className="dropdownItems"> <Link to={"/category/equipamiento"}> Equipamiento </Link> </p>
                            <p className="dropdownItems"> <Link to={"/category/vestimenta"}> Vestimenta </Link> </p>
                        </div>
                        :
                        <div className="dropdownList displayIf">
                        </div>
                    }
                    
                </div>
                <Link to={""}> Sedes </Link>
                <Link to={""}> Programas </Link>
            </article>

            <article> <CartWidget/> </article>

        </nav>
    );
}