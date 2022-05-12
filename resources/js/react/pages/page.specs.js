import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";

const API_URL = "http://127.0.0.1:8000/api";


function Specs() { 

    const [specs, setSpecs] = useState([]);
    const [error, setError] = useState(null);




      const getSpecs = ()=>{
      
          axios.get(
            `${API_URL}/specs`,{
                params: {
                }
              })
            .then(response => {
              setSpecs(response.data);
            })
            .catch(error => {
              setError(error);
            });
        
      }

      useEffect(()=>{

        getSpecs();

      },[])




      const deleteSpec = ($id)=>{ 
          if(!confirm('¿Desea eliminar esta especificacion?')) return;

          axios.delete(
            `${API_URL}/specs/${$id}`,{
                params: {
                }
              })
            .then(response => {
                getSpecs();
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
             <h1>Especificciones</h1>
             
             <Link to={`/spec/create`} className="btn btn-success" >Agregar nueva especificacion</Link>

             
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

  {specs.map((spec,index)=>{
    return (
    <tr key={`${index}_${spec.id}`}>
      <th scope="row">{spec.id}</th>
      <td>{spec.name}</td>
      <td>

      <div className="btn-group" role="group" aria-label="Acciones">
      <Link to={`/spec/update/${spec.id}`} className="btn btn-primary" >Editar</Link>
      <button type="button" className="btn btn-danger" onClick={(e)=> deleteSpec(spec.id)}>Eliminar</button>
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

export default Specs;

