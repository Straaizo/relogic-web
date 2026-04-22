import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import '../styles/quienes-somos.css'

const valores = [
  'Trazabilidad completa en cada proceso',
  'Certificados de disposición final',
  'Cumplimiento normativo vigente',
  'Compromiso con el medio ambiente',
]

export default function QuienesSomos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="quienes-somos" className="quienes" ref={ref}>
      <div className="quienes__inner">
        <div className="quienes__grid">
          {/* Imagen */}
          <motion.div
            className="quienes__img-wrap"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&q=80"
              alt="Planta de reciclaje RELOGIC"
              className="quienes__img"
            />
            <div className="quienes__badge">
              <p className="quienes__badge-num">+10</p>
              <p className="quienes__badge-label">Años de experiencia</p>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            className="quienes__text"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="section-subtitle">Quiénes somos</span>
            <h2>
              Valoramos tus residuos,{' '}
              <span>cuidamos el planeta</span>
            </h2>
            <p className="quienes__tagline">Una empresa comprometida con la gestión sustentable</p>
            <p className="quienes__body">
              En <strong>RELOGIC</strong> transformamos los residuos industriales en activos
              valiosos. Ofrecemos servicios integrales de recolección, transporte, clasificación
              y valorización de residuos para empresas que buscan cumplir con la normativa
              ambiental vigente y contribuir a una economía circular.
            </p>
            <p className="quienes__body">
              Contamos con una flota propia de camiones ampliroll, planta de clasificación
              equipada y personal altamente capacitado para entregar soluciones a medida,
              respaldadas por certificados de disposición final en cada proceso.
            </p>

            <ul className="quienes__list">
              {valores.map((v) => (
                <li key={v} className="quienes__list-item">
                  <FaCheckCircle className="quienes__list-icon" />
                  {v}
                </li>
              ))}
            </ul>

            <a href="#contacto" className="quienes__cta">Habla con nosotros</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
