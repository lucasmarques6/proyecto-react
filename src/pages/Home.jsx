import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import Loading from './Loading'
import SEO from '../components/SEO'
import { CartContext }  from '../context/CartContext'

const Home = () => {

  const { cargando } = useContext(CartContext)
  return (
    <>
      <SEO 
        title="Inicio - Mi Tienda"
        description="Bienvenido a Mi Tienda. Descubre productos increíbles con la mejor calidad y precios competitivos. Compra online con envío rápido."
        keywords="tienda online, productos, inicio, ecommerce, compras online, ofertas"
      />
      <Header/>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center py-4">
              <h1 className="display-4" style={{color: 'var(--azul-violeta)'}}>
                Bienvenidos a mi Tienda
              </h1>
              <p className="lead text-muted mt-3">
                Descubre nuestra increíble selección de productos de alta calidad. 
                Ofrecemos la mejor experiencia de compra online con envío rápido y seguro.
              </p>
            </div>
          </div>
        </div>
        
         {
          cargando ? (
            <Loading />
          ) : (
            <ProductList/>
          )
        }
      </main>

      <Footer />
    </>
  )
}

export default Home
