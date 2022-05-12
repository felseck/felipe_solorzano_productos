import React, {useState,useEffect} from "react";

import {
  useParams
} from "react-router-dom";


const API_URL = "http://127.0.0.1:8000/api";

function ProductDetails(props) { 

    let { id } = useParams();

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

    console.log('product.category',product.category);

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


    <p className="card-text">
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
    </p>

  </div>
</div>

</div>
    )

}

export default ProductDetails;

