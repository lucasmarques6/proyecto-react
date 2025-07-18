import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import SEO from "../components/SEO";
import loading from "../assets/loading.gif";

const AcercaDe = () => {
  return (
    <>
      <SEO 
        title="Acerca de Nosotros - Conoce Nuestro Trabajo"
        description="Conoce más sobre nuestro equipo y el trabajo que realizamos. Descubre la historia detrás de nuestra empresa y nuestros valores."
        keywords="acerca de, nosotros, empresa, equipo, historia, valores, trabajo"
      />
      <Header />
      <div className="container mt-4 mb-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-4">Nuestro trabajo</h1>
            <p className="lead text-center mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iure
              incidunt aliquid assumenda cum placeat inventore, ab nisi laboriosam a
              illum animi quasi repellendus ut vitae necessitatibus tempore earum
              rerum!
            </p>
            <div className="text-center">
              <img
                src={loading}
                alt="Nuestro trabajo en acción"
                className="img-fluid rounded"
                style={{ maxWidth: "400px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AcercaDe;
