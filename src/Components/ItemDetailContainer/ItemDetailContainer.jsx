
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import getArray from "../helpers/getArray";
import { array } from "../../data/data";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"

export default function ItemDetailContainer(){
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(() => {
        getArray(array)
            .then(res=>{
                const item = res.find((item)=>item.id==itemId)
                setProduct(item)
            })
            .catch((err)=>{console.log(err)})
            .finally(()=> setLoading(false))
    }, [itemId])

    return(
        <div>
            {
                loading?
                    <div>Cargando...</div>
                :
                    <ItemDetail {...product} />
            }
        </div>
    );
}