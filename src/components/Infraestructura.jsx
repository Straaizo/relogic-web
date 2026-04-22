import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import '../styles/infraestructura.css'

const capacidades = [
  'Flota propia de camiones ampliroll de última generación',
  'Planta de clasificación y procesamiento de residuos',
  'Tecnología de enfardado para optimización de volúmenes',
  'Personal capacitado y certificado en gestión de residuos',
  'Sistema de trazabilidad y documentación digital',
  'Cobertura en toda la región metropolitana y alrededores',
]

export default function Infraestructura() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="infraestructura" className="infra" ref={ref}>
      <div className="infra__inner">
        <div className="infra__grid">
          {/* Texto */}
          <motion.div
            className="infra__text"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Infraestructura</span>
            <h2>
              Capacidad para manejar{' '}
              <span>grandes volúmenes</span>
            </h2>

            <ul className="infra__list">
              {capacidades.map((c, i) => (
                <motion.li
                  key={c}
                  className="infra__list-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.09 }}
                >
                  <FaCheckCircle className="infra__list-icon" />
                  {c}
                </motion.li>
              ))}
            </ul>

            <div className="infra__rep-badge">
              <FaCheckCircle className="infra__rep-badge-icon" />
              Cumplimiento Ley REP — Ley 20.920
            </div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="infra__img-wrap"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Infraestructura RELOGIC"
              className="infra__img"
            />
            <div className="infra__img-overlay" />
            <div className="infra__img-stat">
              <p className="infra__img-stat-num">+500 ton</p>
              <p className="infra__img-stat-label">gestionadas al año</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
