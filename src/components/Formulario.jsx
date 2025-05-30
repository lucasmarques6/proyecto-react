import React, { useState } from 'react'
import './formularioStyle.css'

const ContactForm = () => {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validación básica
    if (!form.nombre || !form.email || !form.mensaje) {
      alert('Por favor completá todos los campos.')
      return
    }
    // Acción con los datos (ej. enviar a backend)
    console.log('Formulario enviado:', form)
    alert('Gracias por contactarnos!')
    setForm({ nombre: '', email: '', mensaje: '' })
  }

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <h2>Contacto</h2>

      <label>Nombre:</label>
      <input
        type='text'
        name='nombre'
        value={form.nombre}
        onChange={handleChange}
        required
      />

      <label>Email:</label>
      <input
        type='email'
        name='email'
        value={form.email}
        onChange={handleChange}
        required
      />

      <label>Mensaje:</label>
      <textarea
        name='mensaje'
        rows='4'
        value={form.mensaje}
        onChange={handleChange}
        required
      ></textarea>

      <button type='submit'>Enviar</button>
    </form>
  )
}

export default ContactForm
