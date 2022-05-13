
export const add = (item,qty) => {
  
    return {
      'type': "ADD",
      'item':item,
      'qty':qty
    };
    
  };


  export const clear = () => {
  
    return {
      'type': "CLEAR",
    };
    
  };
  
 
 