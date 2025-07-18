import React, {useContext} from 'react'
import Productos from './Productos'
import { CartContext } from '../context/CartContext'

const ProductList = () => {

    const { productosFiltrados, busqueda, setBusqueda } = useContext(CartContext)
    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center mb-4" style={{color: 'var(--azul-violeta)'}}>
                        Galería de productos
                    </h2>
                </div>
            </div>
            
            <div className="row justify-content-center mb-4">
                <div className="col-md-6 col-lg-4">
                    <div className="input-group">
                        <input 
                            className="form-control custom-search"
                            type='text'
                            placeholder='Buscar productos...'
                            value={busqueda}
                            onChange={(e)=> setBusqueda(e.target.value)}
                            style={{
                                border: '2px solid var(--beige-claro)',
                                borderRadius: '25px',
                                backgroundColor: 'var(--blanco-gris)',
                                padding: '12px 20px'
                            }}
                        />
                        <span className="input-group-text bg-transparent border-0">
                            <i className="fa-solid fa-search" style={{color: 'var(--azul-violeta)'}}></i>
                        </span>
                    </div>
                </div>
            </div>

            <div className="row g-4">
                {
                    productosFiltrados.map(producto => (
                        <div key={producto.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <Productos producto={producto}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList
