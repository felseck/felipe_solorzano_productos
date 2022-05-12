import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import CategoryForm from "../components/component.category.form";

function CategoryCreate(props) { 

    let { id } = useParams();

    return <CategoryForm action="update" id={id} />

}

export default CategoryCreate;

