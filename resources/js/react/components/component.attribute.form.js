import { indexOf } from "lodash";
import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import {
  useParams
} from "react-router-dom";


const API_URL = "http://127.0.0.1:8000/api";

function AttributeForm(props) { 

    let navigate = useNavigate();
    const {id, action} = props;
    
    //iniciamos estados
    const [error, setError] = useState(null);

    const [atributes, setAttributes] = useState([]);

    const [name, setName] = useState('');



    //si existe id obtenemos el los datos y configuramos estados para editar
    const getAttribute = ()=>{

        if(!id) return;

        axios.get(
          `${API_URL}/attributes/${id}`,{})
          .then(response => {

            let attribute = response.data;

            setName(attribute.name);

            
          })
          .catch(error => {
            setError(error);
          });
      
    }


    //configuramos los parametros
    var params = {
      name:name
    }

     //creamos el atributo
      const createAttribute = ()=>{

          axios.post(
            `${API_URL}/attributes/`,params)
            .then(response => {

              navigate(`/attributes`);
              
            })
            .catch(error => {
              setError(error);
            });
        
      }


     //actualizamos el atributo
      const updateAttribute = ()=>{
          
       
          axios.put(
            `${API_URL}/attributes/${id}`,params)
            .then(response => {

              navigate(`/attributes`);
              
            })
            .catch(error => {
              setError(error);
            });
        
      }

      //realizamos la accion de guardar , al crear o editar
      const saveAttribute= ()=>{

        if(params.name == '') {
            alert('Ingresa el nombre');
            return;
        }



        if(action == 'update'){
          updateAttribute();
        }else if(action == 'create'){
          createAttribute();
        }
      
      }



      //obtenemos los atributos
      const getAttributes = ()=>{

        const params = {
        }
      
          axios.get(
            `${API_URL}/attributes`,params)
            .then(response => {

              setAttributes(response.data);
              
            })
            .catch(error => {
              setError(error);
            });
        
      }

    


      //obtenemos datos al inicar el componente
      useEffect(()=>{

        getAttribute();

      },[])

     
     
      //mostramos un error en caso de que suceda
      if(error){
        alert(error);
        setError(null);
      }


    return (
        <div>
        <h1>{action=='update'?'Editar':'Crear'} Atributo</h1>
        <form>
           <div className="form-group">
              <label htmlFor="create-name">Nombre</label>
              <input type="text" required defaultValue={name} onBlur={(e)=>{setName(e.target.value)}} className="form-control" id="create-name" placeholder="nombre" />
           </div>
           

           <button type="button" className="mt-5 btn btn-primary" onClick={saveAttribute}>Guardar</button>
        </form>
     </div>
    )

}

export default AttributeForm;

