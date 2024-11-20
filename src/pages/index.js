import React from 'react';
import styles from '../styles/home.module.css';
import  { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const handleLogin=()=>{
    router.push('/login');
  }
  const handleAdminNavBar = ()=>{
    router.push('/admin')
  }
  return (
    <div className={styles.container}>
      <header   
        className={styles.header}>
        <div className={styles.headerContent}>   
          <button className={styles.loginButton} onClick={handleLogin}>Iniciar Sesión</button>
          <button className={styles.loginButton} onClick={handleAdminNavBar}>Panel de administrador</button>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Tu Menú Digital</h1>
          <img src="/menu.png" alt="Menú Digital" className={styles.heroIcon} />
          <p className={styles.heroDescription}>
            Crea tu menú digital de forma sencilla y asigna un QR único para tu negocio.
          </p>
        </section>
        <section className={styles.steps}>
          <h2 className={styles.stepsTitle}>Pasos para crear tu menú:</h2>
          <ol className={styles.stepsList}>
          {[
              "Regístrate con nosotros para obtener tu acceso.",
              "Abona el software.",
              "Accede a tu cuenta y diseña tu menú digital.",
              "Añade secciones, descripciones y precios.",
              "Selecciona un diseño personalizado.",
              "Genera tu código QR único.",
              "Publica tu menú en minutos.",
            ].map((step, index) => (
              <li key={index} className="step">
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.benefits}>
          <h2 className={styles.benefitsTitle}>Beneficios</h2>
          <div className={styles.benefitsGrid}>
          {[
              { title: "Fácil de usar", description: "Interfaz intuitiva para diseñar tu menú." },
              { title: "QR único", description: "Genera un código QR exclusivo para tu negocio." },
              { title: "Sin contacto", description: "Minimiza riesgos con menús digitales." },
              { title: "Personalizable", description: "Adapta el diseño a la imagen de tu marca." },
              { title: "Ahorra tiempo", description: "Crea tu menú en cuestión de minutos." },
              { title: "Accesible", description: "Disponible en cualquier dispositivo móvil." },
            ].map((benefit, index) => (
              <div key={index} className={styles.benefitItem}>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>P.S.R</p>
        <a href="https://wa.me/123456789" className={styles.supportLink}>
           Contacto soporte técnico
        </a>
      </footer>
    </div>
  );
}