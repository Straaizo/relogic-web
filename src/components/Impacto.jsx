import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import '../styles/impacto.css'

const stats = [
  { value: 500, suffix: '+', label: 'Toneladas gestionadas' },
  { value: 50,  suffix: '+', label: 'Clientes satisfechos' },
  { value: 10,  suffix: '+', label: 'Años de experiencia' },
  { value: 100, suffix: '%', label: 'Compromiso ambiental' },
]

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let current = 0
    const step = Math.ceil(value / (1800 / 16))
    const timer = setInterval(() => {
      current += step
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="impacto__number">
      {count}{suffix}
    </span>
  )
}

export default function Impacto() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="impacto" ref={ref}>
      <div className="impacto__inner">
        <motion.div
          className="impacto__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="impacto__title">Nuestro impacto en números</h2>
          <p className="impacto__subtitle">Resultados que hablan por nosotros</p>
        </motion.div>

        <div className="impacto__grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="impacto__stat"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="impacto__label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
