import { useState } from 'react';
import styles from '../styles/login.module.css'; // Importa el archivo de estilos como módulo

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de inicio de sesión
    console.log('Inicio de sesión con:', username, password);
  };

  return (
    <div className={styles['login-container']}>
      <div className={styles['login-card']}>
        <h2 className={styles['login-title']}>Menú digital</h2>
        <form onSubmit={handleSubmit} className={styles['login-form']}>
          <div className={styles['form-group']}>
            <label htmlFor="username" className={styles['form-label']}>
              Usuario
            </label>
            <input
              id="username"
              type="text"
              placeholder="Ingrese su usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className={styles['form-input']}
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="password" className={styles['form-label']}>
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles['form-input']}
            />
          </div>
          <button type="submit" className={styles['login-button']}>
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
