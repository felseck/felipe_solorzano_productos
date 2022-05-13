import React, {useState,useEffect} from "react";


function AddToCart(props) { 

     const {product} = props;

    // console.log(item.price);

    //iniciamos estados
    const [error, setError] = useState(null);
    const [item, setItem] = useState({});


      //inicia componente
      useEffect(()=>{
        setItem(product);
      },[])


      const addToCart = ()=>{

        console.log('item',item)

        const qty = 1;

        const total = qty*item.price;

        //configuramos item
        let item = {
          'id':item.id,
          'name':item.name,
          'price':item.price,
          'total':total,
          'qty':qty
        }
        
        //obtenemos el valor actual de cart almacenado
        var cart = localStorage.getItem('cart');

        //si esta definido cart en localstorage
        if(cart){
          //hacemos un json parse para convertir de json a objeto de js;
          cart = JSON.parse(cart);
        }else{
           //si no esta definido, iniciamos el cart vacio
           cart = [];
        }

        //agregamos el item a cart
        cart.push(item);
        
        //almacenamos en localstorage en formato json
        localStorage.setItem('cart', JSON.stringify(cart));

      }

     
      //mostramos un error en caso de que suceda
      if(error){
        alert(error);
        setError(null);
      }


    return (
       <div>
        <button type="button" className="btn btn-success" onClick={addToCart} >Agregar al carrito</button>
       </div>
    )

}

export default AddToCart;

