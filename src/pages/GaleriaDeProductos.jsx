import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import ProductList from "../components/ProductList";
import Loading from "./Loading";
import SEO from "../components/SEO";

const GaleriaDeProductos = ({
  cart,
  productos,
  cargando,
  agregarCarrito,
  borrarProducto,
}) => {
  return (
    <>
      <SEO 
        title="Productos - Galería Completa"
        description="Explora nuestra galería completa de productos. Encuentra exactamente lo que buscas con filtros inteligentes y descripciones detalladas."
        keywords="galería productos, catálogo, búsqueda productos, filtros, ecommerce"
      />
      <Header borrarProducto={borrarProducto} cartItems={cart} />
      <main className="container-fluid py-4">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h1 className="display-5" style={{color: 'var(--azul-violeta)'}}>
              Galería de productos
            </h1>
            <p className="text-muted">
              Descubre toda nuestra colección de productos
            </p>
          </div>
        </div>
        {cargando ? (
          <Loading />
        ) : (
          <ProductList agregarCarrito={agregarCarrito} productos={productos} />
        )}
      </main>

      <Footer />
    </>
  );
};

export default GaleriaDeProductos;
