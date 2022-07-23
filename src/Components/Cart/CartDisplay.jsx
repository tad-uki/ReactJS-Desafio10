import React from "react";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";

export default function CartDisplay(){
    const {cart} = useContext(CartContext)
    console.log(cart)

    return(
        <main>
            {cart.map((item) => {
               return <CartItem key={item.id} id={item.id} title={item.title} quantity={item.quantity} price={item.price} imageUrl={item.imageUrl}/>
            })}
        </main>
    )
}