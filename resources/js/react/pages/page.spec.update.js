import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import SpecForm from "../components/component.spec.form";

function SpecCreate(props) { 

    let { id } = useParams();

    return <SpecForm action="update" id={id} />

}

export default SpecCreate;

