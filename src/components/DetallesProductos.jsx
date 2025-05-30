import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const DetallesProductos = ({productos}) => {
    
    const {id} = useParams()

    const product = productos.find(producto => producto.id == id)

  return (
  <div>
    <h1>Detalle del producto: {id}</h1>

    {product ? (
      <div>
        <h2> {product.nombre} </h2>
        <h3> Precio: ${product.precio} </h3>
        <p> Stock: {product.stock} </p>
      </div>
    ) : (
      <p>Producto no encontrado</p>
    )}

    <Link to='/' style={{ textDecoration: 'none' }}>
      <button>Volver al inicio</button>
    </Link>
  </div>
)


}

export default DetallesProductos
