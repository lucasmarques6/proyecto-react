import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import loading from '../assets/loading.gif'
import './notFoundStyle.css'

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Página No Encontrada - Error 404"
        description="La página que buscas no existe o ha sido movida. Regresa al inicio para encontrar lo que necesitas."
        keywords="404, página no encontrada, error, inicio, navegación"
      />
      <div className='not-found-container'>
        <h1>404</h1>
        <img src={loading} alt='Página no encontrada' />
        <Link to='/' style={{ textDecoration: 'none' }}>
          <button>Volver al inicio</button>
        </Link>
      </div>
    </>
  )
}

export default NotFound
