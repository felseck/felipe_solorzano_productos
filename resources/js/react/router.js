import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./pages/page.products";
import ProductDetails from "./pages/page.product.details";
import ProductCreate from "./pages/page.product.create";
import ProductUpdate from "./pages/page.product.update";

import Categories from "./pages/page.categories";
import CategoryCreate from "./pages/page.category.create";
import CategoryUpdate from "./pages/page.category.update";

import Specs from "./pages/page.specs";
import SpecCreate from "./pages/page.spec.create";
import SpecUpdate from "./pages/page.spec.update";

import Attributes from "./pages/page.attributes";
import AttributeCreate from "./pages/page.attribute.create";
import AttributeUpdate from "./pages/page.attribute.update";

function Router() { 

  return (


    <div className="card border-primary mb-3">
      <div className="card-header">Router</div>
      <div className="card-body text-primary">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/products">Productos</Link></li>
            <li className="breadcrumb-item"><Link to="/categories">Categorias</Link></li>
            <li className="breadcrumb-item"><Link to="/specs">Especificaciones</Link></li>
            <li className="breadcrumb-item"><Link to="/attributes">Atributos</Link></li>
          </ol>
        </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="products" element={<Products />} />
          <Route path="product/details/:id" element={<ProductDetails />} />
          <Route path="product/create" element={<ProductCreate />} />
          <Route path="product/update/:id" element={<ProductUpdate />} />

          <Route path="categories" element={<Categories />} />
          <Route path="category/create" element={<CategoryCreate />} />
          <Route path="category/update/:id" element={<CategoryUpdate />} />

          <Route path="specs" element={<Specs />} />
          <Route path="spec/create" element={<SpecCreate />} />
          <Route path="spec/update/:id" element={<SpecUpdate />} />

          <Route path="attributes" element={<Attributes />} />
          <Route path="attribute/create" element={<AttributeCreate />} />
          <Route path="attribute/update/:id" element={<AttributeUpdate />} />

        </Routes>
      </div>
    </div>



  );
}


function Home() {

  

  
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>

        

      </main>

    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>

    </>
  );
}

export default Router;
