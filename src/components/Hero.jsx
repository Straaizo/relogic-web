import { motion } from 'framer-motion'
import '../styles/hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      {/* Fondo */}
      <div
        className="hero__bg"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1600&q=80)',
        }}
      />
      <div className="hero__overlay" />

      {/* Contenido */}
      <div className="hero__content">
        <motion.span
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Gestión y transporte de residuos industriales · Chile
        </motion.span>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Transformamos tus{' '}
          <span className="hero__title-accent">residuos</span> en valor
        </motion.h1>

        <motion.p
          className="hero__desc"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Soluciones integrales de transporte, gestión y reciclaje industrial en Chile
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <a href="#servicios" className="hero__btn-primary">Ver nuestros servicios</a>
          <a href="#contacto" className="hero__btn-secondary">Contáctanos</a>
        </motion.div>
      </div>

      {/* Flecha scroll */}
      <motion.div
        className="hero__scroll-arrow"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
