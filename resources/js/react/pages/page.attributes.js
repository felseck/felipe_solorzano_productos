import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";

const API_URL = "https://gila-software-test.herokuapp.com/api";

function Attributes() { 

    const [attributes, setAttributes] = useState([]);
    const [error, setError] = useState(null);




      const getAttributes= ()=>{
      
          axios.get(
            `${API_URL}/attributes`,{
                params: {
                }
              })
            .then(response => {
              setAttributes(response.data);
            })
            .catch(error => {
              setError(error);
            });
        
      }

      useEffect(()=>{

        getAttributes();

      },[])




      const deleteAttribute = ($id)=>{ 
          if(!confirm('¿Desea eliminar esta atributo?')) return;

          axios.delete(
            `${API_URL}/attributes/${$id}`,{
                params: {
                }
              })
            .then(response => {
                getAttributes();
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
             <h1>Attributos</h1>
             
             <Link to={`/attribute/create`} className="btn btn-success" >Agregar nuevo atributo</Link>

             
             <div className="table-responsive">
  
             <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>

  {attributes.map((attribute,index)=>{
    return (
    <tr key={`${index}_${attribute.id}`}>
      <th scope="row">{attribute.id}</th>
      <td>{attribute.name}</td>
      <td>

      <div className="btn-group" role="group" aria-label="Acciones">
      <Link to={`/attribute/update/${attribute.id}`} className="btn btn-primary" >Editar</Link>
      <button type="button" className="btn btn-danger" onClick={(e)=> deleteAttribute(attribute.id)}>Eliminar</button>
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

export default Attributes;

