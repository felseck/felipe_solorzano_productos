import { indexOf } from "lodash";
import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import {
  useParams
} from "react-router-dom";


const API_URL = "http://127.0.0.1:8000/api";

function SpecForm(props) { 

    let navigate = useNavigate();
    const {id, action} = props;
    
    //iniciamos estados
    const [error, setError] = useState(null);

    const [specs, setSpecs] = useState([]);

    const [name, setName] = useState('');



    //si existe id obtenemos el los datos y configuramos estados para editar
    const getSpec = ()=>{

        if(!id) return;

        axios.get(
          `${API_URL}/specs/${id}`,{})
          .then(response => {

            let spec = response.data;

            setName(spec.name);

            
          })
          .catch(error => {
            setError(error);
          });
      
    }


    //configuramos los parametros
    var params = {
      name:name
    }

     //creamos la especificacion
      const createSpec = ()=>{

          axios.post(
            `${API_URL}/specs/`,params)
            .then(response => {

              navigate(`/specs`);
              
            })
            .catch(error => {
              setError(error);
            });
        
      }


     //actualizamos la especificacion
      const updateSpec = ()=>{
          
       
          axios.put(
            `${API_URL}/specs/${id}`,params)
            .then(response => {

              navigate(`/specs`);
              
            })
            .catch(error => {
              setError(error);
            });
        
      }

      //realizamos la accion de guardar , al crear o editar
      const saveSpec= ()=>{

        if(params.name == '') {
            alert('Ingresa el nombre');
            return;
        }



        if(action == 'update'){
          updateSpec();
        }else if(action == 'create'){
          createSpec();
        }
      
      }



      //obtenemos las categorias
      const getSpecs = ()=>{

        const params = {
        }
      
          axios.get(
            `${API_URL}/specs`,params)
            .then(response => {

              setSpecs(response.data);
              
            })
            .catch(error => {
              setError(error);
            });
        
      }

    


      //obtenemos datos al inicar el componente
      useEffect(()=>{

        getSpec();

      },[])

     
     
      //mostramos un error en caso de que suceda
      if(error){
        alert(error);
        setError(null);
      }


    return (
        <div>
        <h1>{action=='update'?'Editar':'Crear'} Especificacion</h1>
        <form>
           <div className="form-group">
              <label htmlFor="create-name">Nombre</label>
              <input type="text" required defaultValue={name} onBlur={(e)=>{setName(e.target.value)}} className="form-control" id="create-name" placeholder="nombre" />
           </div>
           

           <button type="button" className="mt-5 btn btn-primary" onClick={saveSpec}>Guardar</button>
        </form>
     </div>
    )

}

export default SpecForm;

