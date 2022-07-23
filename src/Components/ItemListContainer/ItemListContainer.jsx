
import React from "react";
import "./ItemListContainer.css"
import { array } from "../../data/data.js";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom"
import getArray from "../helpers/getArray";

export default function ItemListContainer(){

    

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([true])
    
    const {categoryId} = useParams()

    useEffect(() => {
        getArray(array)
            .then(res=>{
                categoryId?
                    setProducts(res.filter((item) => item.category === categoryId))
                :
                setProducts(res)
            })
            .catch(err=>console.log(err))
            .finally(()=> setLoading(false))
    }, [categoryId])

    return(
        <div> 
            {
                loading?
                    <p id="itemLoading">Cargando, Por Favor Espere...</p>
                :
                    <ItemList items={products}/>
            }            
        </div>
    );
}