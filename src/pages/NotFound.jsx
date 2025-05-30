import React from 'react'
import { Link } from 'react-router-dom'
import loading from '../assets/loading.gif'
import './notFoundStyle.css'

const NotFound = () => {
  return (
    <div className='not-found-container'>
      <h1>404</h1>
      <img src={loading} alt='loading' />
      <Link to='/' style={{ textDecoration: 'none' }}>
        <button>Volver al inicio</button>
      </Link>
    </div>
  )
}

export default NotFound
