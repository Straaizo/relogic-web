import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaTruck, FaSortAmountDown, FaCogs,
  FaFileAlt, FaBalanceScale, FaBoxOpen,
} from 'react-icons/fa'
import '../styles/servicios.css'

const servicios = [
  {
    icon: FaTruck,
    titulo: 'Transporte de residuos industriales',
    desc: 'Flota propia de camiones ampliroll para retiro eficiente y seguro de tus residuos en toda la región.',
  },
  {
    icon: FaSortAmountDown,
    titulo: 'Retiro y clasificación de materiales',
    desc: 'Separación y clasificación profesional de residuos para maximizar su valorización y reciclaje.',
  },
  {
    icon: FaCogs,
    titulo: 'Gestión integral de residuos',
    desc: 'Solución completa desde el retiro hasta la disposición final, con seguimiento en cada etapa.',
  },
  {
    icon: FaFileAlt,
    titulo: 'Certificados de disposición final',
    desc: 'Documentación oficial que acredita el correcto tratamiento y destino de tus residuos industriales.',
  },
  {
    icon: FaBalanceScale,
    titulo: 'Asesoría Ley REP',
    desc: 'Orientación experta para cumplir con la Ley de Responsabilidad Extendida del Productor en Chile.',
  },
  {
    icon: FaBoxOpen,
    titulo: 'Contenedores para residuos',
    desc: 'Suministro y gestión de contenedores industriales adaptados al volumen y tipo de tus residuos.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function Servicios() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" className="servicios" ref={ref}>
      <div className="servicios__inner">
        <motion.div
          className="servicios__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-subtitle">Lo que hacemos</span>
          <h2 className="section-title" style={{ marginTop: '0.75rem' }}>Nuestros servicios</h2>
          <p className="section-desc" style={{ marginTop: '0.75rem' }}>
            Ofrecemos soluciones completas para empresas que buscan gestionar sus residuos
            de forma responsable y eficiente.
          </p>
        </motion.div>

        <motion.div
          className="servicios__grid"
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          {servicios.map((s) => (
            <motion.div key={s.titulo} variants={item} className="servicio-card">
              <div className="servicio-card__icon-wrap">
                <s.icon className="servicio-card__icon" />
              </div>
              <h3 className="servicio-card__title">{s.titulo}</h3>
              <p className="servicio-card__desc">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
