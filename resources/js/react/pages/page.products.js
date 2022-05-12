import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";

const API_URL = "https://gila-software-test.herokuapp.com/api";

function Products() { 

    const [Products, setProducts] = useState([]);
    const [error, setError] = useState(null);




      const getProducts = ()=>{
      
          axios.get(
            `${API_URL}/products`,{
                params: {
                 //id : 12345
                }
              })
            .then(response => {
              setProducts(response.data);
            })
            .catch(error => {
              setError(error);
            });
        
      }

      useEffect(()=>{

        getProducts();

      },[])




      const deleteProduct = ($id)=>{ 
          if(!confirm('¿Desea eliminar este producto?')) return;

          axios.delete(
            `${API_URL}/products/${$id}`,{
                params: {
                 //id : 12345
                }
              })
            .then(response => {
                getProducts();
            })
            .catch(error => {
              setError(error);
            });

          
      }

      if(error){
          alert(error);
          setError(null);
      }

    return (
         <div>
             <h1>Productos</h1>
             
             <Link to={`/product/create`} className="btn btn-success" >Agregar nuevo producto</Link>

             
             <div className="table-responsive">
  
             <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Costo</th>
      <th scope="col">Precio</th>
      <th scope="col">Sku</th>
      <th scope="col">Categoria</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>

  {Products.map((product,index)=>{
    return (
    <tr key={`${index}_${product.id}`}>
      <th scope="row">{product.id}</th>
      <td>{product.name}</td>
      <td>${product.cost}</td>
      <td>${product.price}</td> 
      <td>{product.sku}</td>
      <td>{product.category?product.category.name:''}</td>
      <td>

      <div className="btn-group" role="group" aria-label="Acciones">
      <Link to={`/product/details/${product.id}`} className="btn btn-info" >Detalles</Link>
      <Link to={`/product/update/${product.id}`} className="btn btn-primary" >Editar</Link>
      <button type="button" className="btn btn-danger" onClick={(e)=> deleteProduct(product.id)}>Eliminar</button>
      </div>

      </td>
    </tr>
    )
    })}
    
  </tbody>
</table>

</div>
</div>
    )

}

export default Products;

