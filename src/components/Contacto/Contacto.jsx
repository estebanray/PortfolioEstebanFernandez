import styles from './Contacto.css'
import React, { useState } from 'react';

const Contacto = () => {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar la recarga de la página
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor o procesarlos de otra manera.
    console.log('Datos del formulario:', { nombre, correo, mensaje });
    // Luego puedes enviar los datos al servidor si es necesario.
  };

  return (
    <section className="style-contacto" id='contacto'>
      <hr className='style-linea'/>
      <h2>CONTACTO</h2>

      <div className='style-icono-info'>
        <div className="icono-contacto">
            <img src="linkedin.png" alt="LinkedIn" />
        </div>
        <a href="https://www.linkedin.com/in/ramon-esteban-fernandez/" target='_blank'>www.linkedin.com/in/ramon-esteban-fernandez</a>
        </div>

        <div className='style-icono-info'>
        <div className="icono-contacto">
            <img src="telefono.png" alt="Teléfono" />
        </div>
        <a href="tel:+541171625906">+54 1171625906</a>
         </div>

    <div className='style-icono-info'>
        <div className="icono-contacto">
            <img src="gmail.png" alt="Gmail" />
        </div>
        <a href="mailto:ramonfer290102@gmail.com">ramonfer290102@gmail.com</a>
    </div>

      <form onSubmit={handleSubmit} className='style-formulario'>
        <label htmlFor="nombre">Nombre:</label>
        <input className="style-label" type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

        <label htmlFor="correo">Correo Electrónico:</label>
        <input className="style-label" type="email" id="correo" name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="4" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required></textarea>

        <button type="submit">Enviar</button>
      </form>

      <div className='firma'>
        <h2>EstebanFernandez</h2>
      </div>
    </section>
  );
};

export default Contacto;
