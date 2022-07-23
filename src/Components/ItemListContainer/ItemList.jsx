//@ts-check
import React from "react";
import Item from "./Item.jsx";
import "./ItemListContainer.css"

export default function ItemList({items}){
    return(


        <article className="itemList">
            {
                items.map((item) => {
                    return <Item id={item.id} title={item.title} description={item.description} price={item.price} imageUrl={item.imageUrl}/>
                })
            }

            
        </article>
    );
}