import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";

const API_URL = "https://gila-software-test.herokuapp.com/api";

function Categories() { 

    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);




      const getCategories = ()=>{
      
          axios.get(
            `${API_URL}/categories`,{
                params: {
                }
              })
            .then(response => {
              setCategories(response.data);
            })
            .catch(error => {
              setError(error);
            });
        
      }

      useEffect(()=>{

        getCategories();

      },[])




      const deleteCategory = ($id)=>{ 
          if(!confirm('¿Desea eliminar esta categoria?')) return;

          axios.delete(
            `${API_URL}/categories/${$id}`,{
                params: {
                }
              })
            .then(response => {
                getCategories();
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
             <h1>Categorias</h1>
             
             <Link to={`/category/create`} className="btn btn-success" >Agregar nueva categoria</Link>

             
             <div className="table-responsive">
  
             <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">% Utilidad</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>

  {categories.map((category,index)=>{
    return (
    <tr key={`${index}_${category.id}`}>
      <th scope="row">{category.id}</th>
      <td>{category.name}</td>
      <td>{category.profit_margin_percent}%</td>
      <td>

      <div className="btn-group" role="group" aria-label="Acciones">
      <Link to={`/category/update/${category.id}`} className="btn btn-primary" >Editar</Link>
      <button type="button" className="btn btn-danger" onClick={(e)=> deleteCategory(category.id)}>Eliminar</button>
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

export default Categories;

