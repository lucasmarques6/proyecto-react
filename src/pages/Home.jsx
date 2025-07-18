import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import Loading from './Loading'
import { CartContext }  from '../context/CartContext'

const Home = () => {

  const { cargando } = useContext(CartContext)
  return (
    <>
      <Header/>
      <main>
        <h1>Bienvenidos a mi Tienda</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptate illum molestias, voluptates dolorem rerum. Alias tempore ut nisi eum, harum natus velit veritatis ea iste illum facere, ipsam modi!</p>
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
