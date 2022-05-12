import { indexOf } from "lodash";
import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import {
  useParams
} from "react-router-dom";


const API_URL = "http://127.0.0.1:8000/api";

function CategoryForm(props) { 

    let navigate = useNavigate();
    const {id, action} = props;
    
    //iniciamos estados
    const [error, setError] = useState(null);

    const [categories, setCategories] = useState([]);

    const [name, setName] = useState('');
    const [profit, setProfit] = useState(null);



    //si existe id obtenemos el los datos y configuramos estados para editar
    const getCategory = ()=>{

        if(!id) return;

        axios.get(
          `${API_URL}/categories/${id}`,{})
          .then(response => {

            let category = response.data;

            setName(category.name);
            setProfit(category.profit_margin_percent);

            
          })
          .catch(error => {
            setError(error);
          });
      
    }


    //configuramos los parametros
    var params = {
      name:name,
      profit_margin_percent:profit
    }

     //creamos el producto
      const createCategory = ()=>{

          axios.post(
            `${API_URL}/categories`,params)
            .then(response => {

              navigate(`/categories`);
              
            })
            .catch(error => {
              setError(error);
            });
        
      }


     //actualizamos la categoria
      const updateCategory = ()=>{
          
       
          axios.put(
            `${API_URL}/categories/${id}`,params)
            .then(response => {

              navigate(`/categories`);
              
            })
            .catch(error => {
              setError(error);
            });
        
      }

      //realizamos la accion de guardar , al crear o editar
      const saveCategory= ()=>{

        if(params.name == '') {
            alert('Ingresa el nombre');
            return;
        }

        if(!params.profit_margin_percent) {
            alert('Ingresa la utilidad');
            return;
        }

        

        


        if(action == 'update'){
          updateCategory();
        }else if(action == 'create'){
          createCategory();
        }
      
      }



      //obtenemos las categorias
      const getCategories = ()=>{

        const params = {
        }
      
          axios.get(
            `${API_URL}/categories`,params)
            .then(response => {

              setCategories(response.data);
              
            })
            .catch(error => {
              setError(error);
            });
        
      }

    


      //obtenemos datos al inicar el componente
      useEffect(()=>{

        getCategory();

      },[])

     
     
      //mostramos un error en caso de que suceda
      if(error){
        alert(error);
        setError(null);
      }


    return (
        <div>
        <h1>{action=='update'?'Editar':'Crear'} Categoria</h1>
        <form>
           <div className="form-group">
              <label htmlFor="create-name">Nombre</label>
              <input type="text" required defaultValue={name} onBlur={(e)=>{setName(e.target.value)}} className="form-control" id="create-name" placeholder="nombre" />
           </div>
           <div className="form-group">
              <label htmlFor="create-profit">% utilidad</label>
              <input type="number" required defaultValue={profit} onBlur={(e)=>{setProfit(e.target.value)}}  className="form-control" id="create-profit" placeholder="utilidad" />
           </div>
           
         
           
          

           <button type="button" className="mt-5 btn btn-primary" onClick={saveCategory}>Guardar</button>
        </form>
     </div>
    )

}
 
export default CategoryForm;

