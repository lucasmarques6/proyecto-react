import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import SEO from '../components/SEO'
import Formulario from '../components/Formulario'

const Contactos = ({cart, borrarProducto}) => {
  return (
    <>
      <SEO 
        title="Contacto - Ponte en Contacto con Nosotros"
        description="¿Tienes alguna pregunta o comentario? Contáctanos a través de nuestro formulario de contacto. Estaremos encantados de ayudarte."
        keywords="contacto, formulario, consultas, ayuda, soporte, comunicación"
      />
      <Header borrarProducto={borrarProducto} cartItems={cart}/>
      <div className="container mt-4 mb-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-4">Contactos</h1>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <Formulario/> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contactos
