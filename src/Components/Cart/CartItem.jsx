import React from "react";
import "./Cart.css"
import { useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { useEffect } from "react";

export default function CartItem( {id, title, quantity, price, imageUrl}){

    const {cart, deleteItem} = useContext(CartContext)

    const [empty, setEmpty] = useState(false)

    useEffect(()=>{
        if(cart.length == 0){
            setEmpty(true)
        }
    }, [])


    return(
        <>
            {
            empty?
                console.log("xd")
            :
                <section className="cartItem">
                <div>
                    <img src={imageUrl}/>
                </div>

                <div>
                    <h3> {title} </h3>
                    <p> ${price} </p>
                    <article>Unidades: {quantity} </article>
                    <button onClick={() => deleteItem(id)}>Eliminar Item</button>
                </div>
                </section>
            }
        </>
    );
}

