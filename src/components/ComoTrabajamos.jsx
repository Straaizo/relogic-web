import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaTruck, FaSortAmountDown, FaRecycle, FaFileAlt } from 'react-icons/fa'
import '../styles/como-trabajamos.css'

const pasos = [
  {
    num: '01',
    icon: FaTruck,
    titulo: 'Retiro',
    desc: 'Coordinamos el retiro de residuos directamente en tus instalaciones con nuestra flota de camiones.',
  },
  {
    num: '02',
    icon: FaSortAmountDown,
    titulo: 'Clasificación',
    desc: 'Separamos y clasificamos los materiales en nuestra planta para optimizar la valorización.',
  },
  {
    num: '03',
    icon: FaRecycle,
    titulo: 'Valorización',
    desc: 'Procesamos cada material para convertirlo en insumo reutilizable o enviarlo a reciclaje especializado.',
  },
  {
    num: '04',
    icon: FaFileAlt,
    titulo: 'Certificación',
    desc: 'Emitimos el certificado de disposición final que acredita el correcto tratamiento de tus residuos.',
  },
]

export default function ComoTrabajamos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="como" ref={ref}>
      <div className="como__inner">
        <motion.div
          className="como__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-subtitle">Proceso</span>
          <h2 className="section-title" style={{ marginTop: '0.75rem' }}>Cómo trabajamos</h2>
          <p className="section-desc" style={{ marginTop: '0.75rem' }}>
            Un proceso claro, trazable y eficiente en cada etapa.
          </p>
        </motion.div>

        <div className="como__timeline">
          {pasos.map((paso, i) => (
            <motion.div
              key={paso.num}
              className="como__step"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="como__step-circle">
                <paso.icon className="como__step-icon" />
              </div>
              <span className="como__step-num">{paso.num}</span>
              <h3 className="como__step-title">{paso.titulo}</h3>
              <p className="como__step-desc">{paso.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
