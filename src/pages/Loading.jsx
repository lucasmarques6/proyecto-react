import React from 'react'
import loading from '../assets/loading.gif'
import './loadingStyle.css'

const LoadingScreen = () => {
  return (
    <div className='loading-screen'>
      <img src={loading} alt='Cargando...' />
      <div className='loading-text'>Cargando...</div>
    </div>
  )
}

export default LoadingScreen
