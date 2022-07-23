import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])

    useEffect(()=>{
        console.log(cart)
    }, [cart])

    function isInCart(id){
        return cart.some((item) => item.id === id)
    }

    function onAddCart(product, count){
        if(isInCart(product.id)){
            setCart(cart.map(item => {
                return item.id === product.id ? {...item, quantity: item.quantity + count} : item
            }))
        }else{
            setCart([...cart, {...product, quantity: count}])
        }
    }

    function deleteItem(id){
        let cartIndex = cart.map(object => object.id).indexOf(id);
        setCart(current => current.filter(item => {
            return item.id !== id
        }))
    }


    return(
        <CartContext.Provider value={{cart, setCart, onAddCart, deleteItem}}>
            {children}
        </CartContext.Provider>
    )
}