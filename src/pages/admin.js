'use client'

import { useState } from 'react'
import { Home, Menu, LogOut, Users, FileText, Layout, ClipboardList } from 'lucide-react'
import styles from '../styles/navbar.module.css'
export default function ProfessionalDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isMenuOpen ? '' : styles.hidden}`}>
  <div className="p-4">
    <h2 className={styles.title}>Tu Menú Digital</h2>
    <nav>
      <ul>
        {[
          { name: 'Crear menú', icon: <FileText size={20} /> },
          { name: 'Crear usuario', icon: <Users size={20} /> },
          { name: 'Seleccionar Templates', icon: <Layout size={20} /> },
          { name: 'Responder encuesta', icon: <ClipboardList size={20} /> },
        ].map((item, index) => (
          <li key={index}>
            <button className={styles.button}>
              {item.icon}
              <span>{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </div>
</aside>


      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className={styles.header}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center space-x-4">
            <button aria-label="Ir al inicio" className="text-gray-500 hover:text-gray-700">
              <Home size={24} />
            </button>
            <button
              aria-label="Cerrar sesión"
              className={`${styles.logout} text-gray-500 hover:text-gray-700`}
            >
              <span className="mr-2">Cerrar sesión</span>
              <LogOut size={20} />
            </button>
          </div>
        </header>

        <main className={styles.mainContent}>
          <div className={styles.card}>
            <h2 className="text-2xl font-semibold mb-4">Vista previa del menú</h2>
            <div className={styles.preview}>
              <div className={styles.overlay}>
                <h3 className="text-xl font-semibold mb-2">Sección: Pastas</h3>
                <div className="mb-2">
                  <span className="font-medium">Nombre del plato:</span> Fetuccini alfredo
                </div>
                <div>
                  <span className="font-medium">Precio:</span> $8500
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}