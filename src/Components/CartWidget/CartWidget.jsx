import React from "react";
import cartImg from "../images/cart.png";
import "./CartWidget.css"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function CartWidget(){

    const { cart } = useContext(CartContext)

    const [total, setTotal] = useState(0)


    useEffect(() => {
        setTotal(cart.reduce((acumulador, obj) => acumulador + obj.quantity, 0))
    }, [cart])
    
    
    return(
        <>
            {
                cart == 0 ?
                    null
                :
                <section className="icon">
                    <img src={cartImg} className="imageIcon"/>
                    <span className="iconCounter"><Link to={"/cart"}>{total}</Link></span>
                </section>
            }
        </>
    );
}