
import React from "react";
import "./ItemListContainer.css"
import {Link} from "react-router-dom"

export default function Item( {id, title, description, price, imageUrl}){
    return(
        <section className="itemEach">
            <div>
                <img src={imageUrl}/>
            </div>

            <div>
                <h3> {title} </h3>
                <p> ${price} </p>
                <article> {description} </article>
                <button> 
                    <Link to={`item/${id}`}>
                    Ver más...
                    </Link>
                </button>
            </div>
        </section>
    );
}