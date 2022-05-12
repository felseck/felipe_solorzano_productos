import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../components/component.product.form";

function ProductCreate(props) { 

    let { id } = useParams();

    return <ProductForm action="update" product_id={id} />

}

export default ProductCreate;

