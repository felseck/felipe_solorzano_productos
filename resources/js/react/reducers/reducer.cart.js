
const clearCart = ()=>{
  //obtenemos el valor actual de cart almacenado
  localStorage.removeItem('cart');
  return [];

}

const getCart = ()=>{
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

  return cart;
}

const addToCart = (item,qty)=>{

  const total = qty*item.price;

  //configuramos item
  var item = {
    'id':item.id,
    'name':item.name,
    'price':item.price,
    'total':total,
    'qty':qty
  }
  
  //obtenemos el valor actual de cart almacenado
  var cart = getCart()

  //agregamos el item a cart
  cart.push(item);
  
  //almacenamos en localstorage en formato json
  localStorage.setItem('cart', JSON.stringify(cart));

  return cart;

}

const cart = (item = [], action) => {

   if(action.type == 'ADD'){
      return addToCart(action.item, action.qty); 
   }

   if(action.type == 'CLEAR'){
    return clearCart(); 
  }

   return getCart();


  };
  export default cart;