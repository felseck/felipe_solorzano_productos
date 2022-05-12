import { indexOf } from "lodash";
import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import {
  useParams
} from "react-router-dom";


const API_URL = "http://127.0.0.1:8000/api";

function ProductForm(props) { 

    let navigate = useNavigate();
    const {product_id, action} = props;
    
    //iniciamos estados
    const [product, setProduct] = useState({});
    const [error, setError] = useState(null);

    const [categories, setCategories] = useState([]);
    const [specs, setSpecs] = useState([]);
    const [attributes, setAttributes] = useState([]);

    const [name, setName] = useState('');
    const [sku, setSku] = useState('');
    const [brand, setBrand] = useState('');
    const [cost, setCost] = useState(null);
    const [category_id, setCategoryId] = useState(undefined);

    const [selectedSpecs, setSelectedSpecs] = useState([]);
    const [selectedAttributes, setSelectedAttributes] = useState([]);



    //si existe product_id obtenemos el producto y configuramos estados para editar
    const getProduct = ()=>{

        if(!product_id) return;

        axios.get(
          `${API_URL}/products/${product_id}`,{})
          .then(response => {

            let product = response.data;

            setName(product.name);
            setBrand(product.brand);
            setCost(product.cost);
            setSku(product.sku);
            setCategoryId(product.category_id);

            
            //configuramos las especificaciones y atributos
            let specs = [];
            var attributes = [];

            product.specs.map((spec,index)=>{
                specs.push(spec.spec_id);
                
                var spec_attributes = [];

                

               spec.attributes.map((spec_attribute)=>{
                    spec_attributes.push(spec_attribute.attribute_id);
                    
                })

                attributes[index] = {
                    'spec_id':spec.spec_id,
                    'attributes':spec_attributes
                };

            })

            setSelectedSpecs(specs);
            setSelectedAttributes(attributes);

            
            


            
            
          })
          .catch(error => {
            setError(error);
          });
      
    }


    //configuramos los parametros
    var params = {
      name:name,
      sku:sku,
      brand:brand,
      cost:cost,
      category_id:category_id,
      specs:selectedSpecs,
      specs_attributes:selectedAttributes
    }

     //creamos el producto
      const createProduct = ()=>{

          axios.post(
            `${API_URL}/products`,params)
            .then(response => {

              navigate(`/products`);
              
            })
            .catch(error => {
              setError(error);
            });
        
      }


     //actualizamos el producto
      const updateProduct = ()=>{
          
       
          axios.put(
            `${API_URL}/products/${product_id}`,params)
            .then(response => {

              navigate(`/products`);
              
            })
            .catch(error => {
              setError(error);
            });
        
      }

      //realizamos la accion de guardar , al crear o editar
      const saveProduct = ()=>{

        if(params.name == '') {
            alert('Ingresa el nombre');
            return;
        }

        if(!params.cost) {
            alert('Ingresa el costo');
            return;
        }

        

        if(params.brand == '') {
            alert('Ingresa la marca');
            return;
        }

        if(params.sku == '') {
            alert('Ingresa un código sku');
            return;
        }
        

        if(!params.category_id) {
            alert('Selecciona una categoria');
            return;
        }

        if(action == 'update'){
          updateProduct();
        }else if(action == 'create'){
          createProduct();
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

    
      //obtenemos ls especificaciones
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

        getProduct();
        getCategories();
        getSpecs();
        getAttributes();

      },[])

      
      //configuramos atributos al seleccionar las especificaciones
      const selectSpecs = (e)=>{

        let specs = Array.from(e.target.selectedOptions, option => Number(option.value));

        setSelectedSpecs(specs);

        var attributes = [];

        specs.map((spec)=>{

          selectedAttributes.map((spec_attributes)=>{
               if(spec_attributes){
                 if(spec_attributes.spec_id == spec){
                  attributes.push(spec_attributes);
                 }
               }
          })

        })

        setSelectedAttributes(attributes);

      }
      
      //Seleccionamo los atributos y lo configuramos
      const selectAttributes = (e,spec,index)=>{

        selectedAttributes[index] = {
          'spec_id':spec.id,
          'spec_name':spec.name,
          'attributes':Array.from(e.target.selectedOptions, option => Number(option.value))
        }

        setSelectedAttributes([...selectedAttributes])

      }

     
      //mostramos un error en caso de que suceda
      if(error){
        alert(error);
        setError(null);
      }


    return (
        <div>
        <h1>{action=='update'?'Editar':'Crear'} Producto</h1>
        <form>
           <div className="form-group">
              <label htmlFor="create-name">Nombre</label>
              <input type="text" required defaultValue={name} onBlur={(e)=>{setName(e.target.value)}} className="form-control" id="create-name" placeholder="nombre" />
           </div>
           <div className="form-group">
              <label htmlFor="create-cost">Costo</label>
              <input type="number" required defaultValue={cost} onBlur={(e)=>{setCost(e.target.value)}}  className="form-control" id="create-cost" placeholder="costo" />
           </div>
           <div className="form-group">
              <label htmlFor="create-brand">Marca</label>
              <input type="text" required defaultValue={brand} onBlur={(e)=>{setBrand(e.target.value)}}  className="form-control" id="create-brand" placeholder="marca" />
           </div>
           <div className="form-group">
              <label htmlFor="create-sku">Sku</label>
              <input type="text" required defaultValue={sku} onBlur={(e)=>{setSku(e.target.value)}}  className="form-control" id="create-sku" placeholder="sku" />
           </div>
           <div className="form-group">
              <label htmlFor="create-category">Categoria</label>
              <select className="form-control" value={category_id} onChange={(e)=>
                 {setCategoryId(e.target.value)}}  id="create-category"> 
                 <option value >Selccionar</option>
                 {categories.map((category,index)=>{
                 return(
                 <option key={`category_${index}_${category.id}`} value={category.id} >{category.name}</option>
                 )
                 })}
              </select>
           </div>
           <div className="form-group">
              <label htmlFor="create-specs">Especificaciones</label>
              <select multiple value={selectedSpecs} className="form-control" id="create-specs" onChange={(e)=>
                 selectSpecs(e)}>
                 {specs.map((spec,index)=>{
                 return(
                 <option key={`specs_${index}_${spec.id}`} value={spec.id} >{spec.name}</option>
                 )
                 })}
              </select>
           </div>
           {specs.map((spec,index)=>{
            
            var specAttributes = selectedAttributes.find((specAttr)=>{

                  if(specAttr)
                   return specAttr.spec_id == spec.id;
                 //  else null;
            });

            specAttributes = specAttributes?specAttributes.attributes:[];


           if(selectedSpecs.indexOf(spec.id) != -1)
           return(
           <div key={`specs_${index}_${spec.id}_2`} className="form-group mt-3">
              <label htmlFor="create-specs">Attributos para {spec.name}</label>
              
              <select multiple value={specAttributes} className="form-control" id="create-specs" onChange={(e)=>
                 selectAttributes(e,spec,index)}>
                 {attributes.map((attribute,index)=>{
                 return(
                 <option key={`attributes_${index}_${spec.id}_${attribute.id}`} value={attribute.id} >{attribute.name}</option>
                 )
                 })}
              </select>
           </div>
           )
           })}
           <button type="button" className="mt-5 btn btn-primary" onClick={saveProduct}>Guardar</button>
        </form>
     </div>
    )

}

export default ProductForm;

