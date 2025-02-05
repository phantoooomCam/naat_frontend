import { useEffect } from 'react';
import './registro.css';
import NAATLogo from './assets/NAAT_1.png'; // Asegúrate de tener la imagen en esta ruta

const Register = () => {
  useEffect(() => {
    // Efecto de lluvia binaria
    const binaryContainer = document.getElementById('binaryContainer');
    const characters = '01';
    
    const createBinaryStream = () => {
      const element = document.createElement('div');
      element.className = 'binary-line';
      element.style.left = `${Math.random() * 100}%`;
      element.style.animationDuration = `${15 + Math.random() * 10}s`;
      element.textContent = Array(50).fill(0).map(() => characters[Math.floor(Math.random() * characters.length)]).join(' ');
      return element;
    };

    const interval = setInterval(() => {
      if (binaryContainer.children.length < 20) {
        binaryContainer.appendChild(createBinaryStream());
      }
    }, 1000);

    // Limpiar intervalos al desmontar
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="left" style={{ background: 'linear-gradient(135deg, #000000, #1a1a1a)' }}>
        <div className="binary-rain" id="binaryContainer"></div>
        <div className="decorative-content">
          <h1>Crea tu cuenta</h1>
          <p>Únete a nuestra comunidad tecnológica.</p>
        </div>
      </div>

      <div className="right">
        <div className="form-container">
          <a href="/">
            <img src={NAATLogo} alt="Logo de NA'AT" />
          </a>
          <h2>Registro</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre(s)</label>
              <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="apellidos">Apellidos</label>
              <input type="text" id="apellidos" name="apellidos" placeholder="Tus Apellidos" required />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input type="number" id="telefono" name="telefono" placeholder="Tu telefono" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" placeholder="Password" required />
            </div>
            <button type="submit">Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;