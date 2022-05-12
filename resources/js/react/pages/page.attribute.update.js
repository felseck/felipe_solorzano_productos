import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import AttributeForm from "../components/component.attribute.form";

function AttributeCreate(props) { 

    let { id } = useParams();

    return <AttributeForm action="update" id={id} />

}

export default AttributeCreate;

