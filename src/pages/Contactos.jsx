import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import Formulario from '../components/Formulario'

const Contactos = ({cart, borrarProducto}) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart}/>
      <h1>Contactos</h1>
      <div> <Formulario/> </div>
      <Footer/>
    </>
  )
}

export default Contactos
