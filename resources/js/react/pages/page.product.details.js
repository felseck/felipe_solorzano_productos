import React, {useState,useEffect} from "react";
import AddToCart from "../components/component.cart.add";

import {
  useParams
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {add} from "../actions/actions.cart.js";


const API_URL = "http://127.0.0.1:8000/api";

function ProductDetails(props) { 

    let { id } = useParams();

    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const [product, setProduct] = useState({});
    const [error, setError] = useState(null);




      const getProduct = ()=>{
      
          axios.get(
            `${API_URL}/products/${id}`,{
                params: {
                 
                }
              })
            .then(response => {
              setProduct(response.data);
            })
            .catch(error => {
              setError(error);
            });
        
      }

      useEffect(()=>{

        getProduct();

      },[])


      if(error){
        alert(error);
        setError(null);
    }


    return (
      <div>
   <h1>Detalles</h1>
   <div className="card">
      <div className="card-body">
         <h5 className="card-title">{product.name}</h5>
         <h6 className="card-subtitle mb-2 text-muted">${product.price}</h6>
         <p className="card-text">
            Categoria:{product.category?product.category.name:''}
         </p>
         <div className="">
         <h3>Especificaciones:</h3>
         <ul>
            {product.specs?product.specs.map((spec,index)=>{
            return(
            <li key={`specs_${index}`}>
               {spec.spec.name}
               <ul>
                  {spec.attributes?spec.attributes.map((attribute,index_)=>{
                  return(
                  <li key={`attributes_${index_}`}>
                     {attribute.attribute.name}
                  </li>
                  )
                  }):''}
               </ul>
            </li>
            )
            }):''}
         </ul>
         </div>
         
         {/* add(product,3)  argumentos 1 = objeto del producto, argumento 2 = cantidad de productos */}
         <button className="btn btn-success" onClick={() => dispatch(add(product,2))}>Agregar al carrito {cart.length}</button>
           
      </div>
   </div>
</div>
    )

}

export default ProductDetails;

