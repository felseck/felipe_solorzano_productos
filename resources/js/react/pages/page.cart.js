import React, {useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {clear} from "../actions/actions.cart.js";



function Cart(props) { 

    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    //iniciamos estados
    const [error, setError] = useState(null);
    
      
     
      //mostramos un error en caso de que suceda
      if(error){
        alert(error);
        setError(null);
      }


    return (
      <div>

<button className="btn btn-success" onClick={() => dispatch(clear())}>Vaciar carrito</button>
           
    <div className="pt-3 pb-3"><h5>Hay {cart.length} productos en el carrito</h5></div>  
      {cart.map((item,index)=>{

      
   return(
        <div key={index} className="list-group">
  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{item.name}</h5>
      <small>total:<b> ${item.total}</b></small>
    </div>
    <p className="mb-1">Precio: ${item.price}</p>
    <small>Cantidad:{item.qty}</small>
  </a>
  
</div>
   )
   
})}

</div>

    )

}

export default Cart;

