import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaBoxOpen, FaFlask, FaIndustry, FaWineGlass,
  FaTree, FaLaptop, FaTshirt, FaRecycle,
} from 'react-icons/fa'
import '../styles/materiales.css'

const materiales = [
  { icon: FaBoxOpen,  nombre: 'Cartón y papel' },
  { icon: FaFlask,    nombre: 'Plásticos' },
  { icon: FaIndustry, nombre: 'Fierro y viruta' },
  { icon: FaRecycle,  nombre: 'Aluminio' },
  { icon: FaWineGlass,nombre: 'Vidrio' },
  { icon: FaTree,     nombre: 'Madera' },
  { icon: FaLaptop,   nombre: 'Residuos electrónicos' },
  { icon: FaTshirt,   nombre: 'Textiles' },
]

export default function Materiales() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="materiales" className="materiales" ref={ref}>
      <div className="materiales__inner">
        <motion.div
          className="materiales__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-subtitle">Materiales</span>
          <h2 className="section-title" style={{ marginTop: '0.75rem' }}>¿Qué reciclamos?</h2>
          <p className="section-desc" style={{ marginTop: '0.75rem' }}>
            Gestionamos una amplia variedad de materiales industriales y comerciales.
          </p>
        </motion.div>

        <div className="materiales__grid">
          {materiales.map((m, i) => (
            <motion.div
              key={m.nombre}
              className="material-card"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <m.icon className="material-card__icon" />
              <span className="material-card__name">{m.nombre}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="materiales__rep-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <span className="rep-badge">✓ Gestión alineada con Ley REP (Ley 20.920)</span>
        </motion.div>
      </div>
    </section>
  )
}
