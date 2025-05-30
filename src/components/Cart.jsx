import React from 'react'
import './cartStyle.css'

const Cart = ({ cartItems, isOpen, onClose, borrarProducto }) => {

    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h2 style={{color:'black'}}>Carrito de Compras</h2>
                <button onClick={onClose} className='close-button'><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div className='cart-content'>
                {cartItems.length === 0 ? (<p style={{ color: '#d9344adb' }}>El carrito esta vacío</p>) : (<ul className='cart-item'>
                    {cartItems.map((item,index)=>(
                        <>
                        <li key={item.id} style={{color:'black'}}>
                            {item.nombre} - {item.precio}
                            <button onClick={()=> borrarProducto(item)}><i className="fa-solid fa-trash"></i></button>
                        </li>
                        </>
                    ))}
                </ul>)}

            </div>

        </div>
    )
}

export default Cart
