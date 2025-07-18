import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './cartStyle.css';

const Cart = ({ isOpen, onClose }) => {
  // Calcular total general
  const { cart, handleDeleteFromCart } = useContext(CartContext);


  const totalGeneral = cart.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  );

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className='cart-header'>
        <h2 style={{ color: 'black' }}>Carrito de Compras</h2>
        <button onClick={onClose} className='close-button'>
          <i className='fa-solid fa-xmark'></i>
        </button>
      </div>

      <div className='cart-content'>
        {cart.length === 0 ? (
          <p style={{ color: '#d9344adb' }}>El carrito está vacío</p>
        ) : (
          <ul className='cart-item'>
            {cart.map((item) => (
              <li key={item.id} style={{ color: 'black', marginBottom: '1rem' }}>
                <strong>{item.nombre}</strong><br />
                Precio: ${item.precio}<br />
                Cantidad: {item.quantity}<br />
                Total: ${item.precio * item.quantity}
                <button onClick={() => handleDeleteFromCart (item)} className='delete-button'>
                  <i className='fa-solid fa-trash'></i>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {cart.length > 0 && (
        <div className='cart-total' style={{ color: 'black', padding: '1rem' }}>
          <hr />
          <h3>Total general: ${totalGeneral}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
