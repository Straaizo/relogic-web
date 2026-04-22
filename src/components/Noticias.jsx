import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaArrowRight, FaChartLine, FaHandshake, FaAward } from 'react-icons/fa'
import '../styles/noticias.css'

export const noticias = [
  {
    id: 1,
    categoria: 'Operaciones',
    fecha: 'Abril 2025',
    icon: FaChartLine,
    stat: '+38%',
    statLabel: 'vs año anterior',
    titulo: 'Récord histórico: gestión de más de 500 toneladas en 2024',
    resumen:
      'Durante 2024 alcanzamos un hito histórico al superar las 500 toneladas de residuos industriales gestionadas, consolidando nuestro crecimiento en la Región Metropolitana.',
    imagen: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1600&q=80',
    color: '#16a34a',
    colorLight: '#4ade80',
  },
  {
    id: 2,
    categoria: 'Alianzas',
    fecha: 'Marzo 2025',
    icon: FaHandshake,
    stat: '120 ton',
    statLabel: 'mensuales comprometidas',
    titulo: 'Nuevo convenio con empresa líder del sector construcción',
    resumen:
      'Firmamos un acuerdo estratégico para la gestión mensual de residuos de obra, reforzando nuestra presencia en el sector y ampliando la flota de camiones ampliroll.',
    imagen: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80',
    color: '#0369a1',
    colorLight: '#7dd3fc',
  },
  {
    id: 3,
    categoria: 'Certificación',
    fecha: 'Febrero 2025',
    icon: FaAward,
    stat: '100%',
    statLabel: 'trazabilidad garantizada',
    titulo: 'Cero residuos sin certificado: trazabilidad total en todos nuestros procesos',
    resumen:
      'Todos nuestros procesos cuentan ahora con certificación completa de disposición final, cumpliendo la normativa vigente y la Ley REP.',
    imagen: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=1600&q=80',
    color: '#7c3aed',
    colorLight: '#d8b4fe',
  },
]

const INTERVAL = 4500

export default function Noticias() {
  const [[current], setPage] = useState([0, 0])

  const paginate = useCallback((dir) => {
    setPage(([prev]) => [(prev + dir + noticias.length) % noticias.length, dir])
  }, [])

  useEffect(() => {
    const id = setInterval(() => paginate(1), INTERVAL)
    return () => clearInterval(id)
  }, [paginate, current])

  const n = noticias[current]

  return (
    <section id="noticias" className="nhero">
      <span id="inicio" style={{ position: 'absolute', top: 0 }} />

      {/* Fondo con crossfade */}
      <AnimatePresence>
        <motion.div
          key={`bg-${current}`}
          className="nhero__bg"
          style={{ backgroundImage: `url(${n.imagen})` }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      <div className="nhero__overlay" />

      {/* Flechas — visibles solo en hover via CSS */}
      <button
        className="nhero__arrow nhero__arrow--prev"
        onClick={() => paginate(-1)}
        aria-label="Noticia anterior"
      >
        <FaChevronLeft />
      </button>
      <button
        className="nhero__arrow nhero__arrow--next"
        onClick={() => paginate(1)}
        aria-label="Siguiente noticia"
      >
        <FaChevronRight />
      </button>

      {/* Contenido */}
      <div className="nhero__inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            className="nhero__content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.48, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="nhero__meta">
              <span className="nhero__badge" style={{ backgroundColor: n.color }}>
                <n.icon style={{ marginRight: '0.35rem', fontSize: '0.65rem' }} />
                {n.categoria}
              </span>
              <span className="nhero__fecha">{n.fecha}</span>
            </div>

            <div className="nhero__stat">
              <span className="nhero__stat-num" style={{ color: n.colorLight }}>{n.stat}</span>
              <span className="nhero__stat-label">{n.statLabel}</span>
            </div>

            <h2 className="nhero__title">{n.titulo}</h2>
            <p className="nhero__resumen">{n.resumen}</p>

            <a href="#noticias-detalle" className="nhero__cta">
              Ver noticia completa
              <FaArrowRight className="nhero__cta-icon" />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots simples en la parte inferior */}
      <div className="nhero__dots">
        {noticias.map((_, i) => (
          <button
            key={i}
            className={`nhero__dot ${i === current ? 'nhero__dot--active' : ''}`}
            style={i === current ? { backgroundColor: n.colorLight } : {}}
            onClick={() => setPage(([prev]) => [i, i > prev ? 1 : -1])}
            aria-label={`Noticia ${i + 1}`}
          />
        ))}
      </div>

      {/* Flecha scroll */}
      <motion.div
        className="nhero__scroll"
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
