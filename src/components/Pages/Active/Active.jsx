import React, { useState, useEffect } from 'react';
import './Active.css'

export const Active = () => {

  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const usuariosValidos = [
    { id: 1, usuario: 'user1', contrasena: 'password1' },
    { id: 2, usuario: 'user2', contrasena: 'password2' },
    { id: 3, usuario: 'user3', contrasena: 'password3' }

  ];

  const [mensajeBienvenida, setMensajeBienvenida] = useState('');

  useEffect(() => {
   
    const verificarCredenciales = () => {
      const usuarioValido = usuariosValidos.find(
        u => u.usuario === usuario && u.contrasena === contrasena
      );
      if (usuarioValido) {
        setMensajeBienvenida(`Bienvenido, ${usuarioValido.usuario}!`);
      } else {
        setMensajeBienvenida('Usuario o contraseña incorrectos.');
      }
    };

    verificarCredenciales();
  }, [usuario, contrasena]);

  return (
    <div className='active'>
      <h1 className='title-active'>Active</h1>
      <form>
        <label className='label'>
          Usuario:
          <input
            className='user'
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </label>
        <br />
        <label className='label'>
          Contraseña:
          <input
            className='password'
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </label>
      </form>
      <h2 className='message' >{mensajeBienvenida}</h2>
    </div>
  );
};

export default Active;