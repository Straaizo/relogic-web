import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaArrowLeft, FaChartLine, FaHandshake, FaAward, FaCalendarAlt, FaTag } from 'react-icons/fa'
import { noticias } from './Noticias'
import '../styles/noticias-detalle.css'

const contenidos = [
  {
    id: 1,
    cuerpo: [
      'El año 2024 marcó un punto de inflexión para RELOGIC. Con una operación fortalecida, flota renovada y nuevos clientes incorporados a lo largo de la Región Metropolitana, la empresa superó por primera vez la barrera de las 500 toneladas de residuos industriales gestionadas en un solo período anual.',
      'Este crecimiento del 38% respecto a 2023 se sustenta en la incorporación de tres nuevos camiones ampliroll a la flota, la ampliación de la planta de clasificación en un 40%, y la firma de contratos de servicio continuo con empresas del sector manufactura, construcción y retail.',
      'La trazabilidad fue clave: el 100% de los residuos gestionados cuenta con certificado de disposición final, garantizando a cada cliente el cumplimiento normativo exigido por la Ley REP y los organismos reguladores.',
    ],
    destacado: 'Más de 50 empresas confían en RELOGIC para la gestión responsable de sus residuos industriales.',
  },
  {
    id: 2,
    cuerpo: [
      'En marzo de 2025, RELOGIC formalizó un convenio de servicio continuo con una de las principales empresas de construcción de la Región Metropolitana. El acuerdo contempla el retiro, clasificación y disposición final de 120 toneladas mensuales de residuos de obra, incluyendo metales, hormigón triturado, maderas y plásticos industriales.',
      'Este tipo de alianzas estratégicas permite a RELOGIC planificar con mayor eficiencia la logística de retiro y maximizar el porcentaje de valorización de los materiales, reduciendo el volumen destinado a rellenos sanitarios.',
      'El convenio incluye un sistema de reporte mensual para el cliente con detalle de cada residuo gestionado, su categoría, peso, destino final y certificado de disposición. Una solución completa que les permite cumplir con sus compromisos ambientales corporativos.',
    ],
    destacado: '120 toneladas mensuales comprometidas bajo contrato de servicio continuo.',
  },
  {
    id: 3,
    cuerpo: [
      'Desde febrero de 2025, RELOGIC opera con un sistema de trazabilidad total: cada kilogramo de residuo retirado genera un registro digital que acompaña el material desde su origen hasta su destino final, con emisión automática del certificado de disposición al cierre de cada proceso.',
      'Este logro responde a una inversión sostenida en tecnología de gestión interna y capacitación del equipo operativo. El sistema permite a cada cliente acceder en tiempo real al estado de sus residuos, con historial descargable y respaldo documental para auditorías ambientales.',
      'El cumplimiento del 100% de trazabilidad posiciona a RELOGIC como una empresa referente en la industria, alineada con los más altos estándares de la normativa chilena y preparada para el escenario regulatorio exigente que plantea la Ley REP en sus próximas fases.',
    ],
    destacado: 'Sistema de trazabilidad digital implementado en el 100% de los procesos operativos.',
  },
]

export default function NoticiasDetalle() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="noticias-detalle" className="ndet" ref={ref}>
      <div className="ndet__inner">
        {/* Header */}
        <motion.div
          className="ndet__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <a href="#noticias" className="ndet__back">
            <FaArrowLeft style={{ marginRight: '0.4rem' }} />
            Volver al resumen
          </a>
          <span className="section-subtitle" style={{ marginTop: '1.5rem', display: 'block' }}>Noticias completas</span>
          <h2 className="section-title" style={{ marginTop: '0.75rem' }}>Lo que está pasando en RELOGIC</h2>
        </motion.div>

        {/* Artículos */}
        <div className="ndet__list">
          {noticias.map((n, i) => {
            const extra = contenidos.find((c) => c.id === n.id)
            return (
              <motion.article
                key={n.id}
                id={`noticia-${n.id}`}
                className="ndet__article"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.15 }}
              >
                {/* Barra lateral de color */}
                <div className="ndet__article-accent" style={{ backgroundColor: n.categoriaColor }} />

                <div className="ndet__article-body">
                  {/* Meta */}
                  <div className="ndet__meta">
                    <span className="ndet__badge" style={{ backgroundColor: `${n.categoriaColor}18`, color: n.categoriaColor }}>
                      <FaTag style={{ marginRight: '0.3rem', fontSize: '0.6rem' }} />
                      {n.categoria}
                    </span>
                    <span className="ndet__fecha">
                      <FaCalendarAlt style={{ marginRight: '0.35rem' }} />
                      {n.fecha}
                    </span>
                  </div>

                  {/* Stat + Título */}
                  <div className="ndet__title-row">
                    <div className="ndet__stat-block" style={{ borderColor: `${n.categoriaColor}40` }}>
                      <p className="ndet__stat-num" style={{ color: n.categoriaColor }}>{n.stat}</p>
                      <p className="ndet__stat-label">{n.statLabel}</p>
                    </div>
                    <h3 className="ndet__title">{n.titulo}</h3>
                  </div>

                  {/* Cuerpo */}
                  <div className="ndet__content">
                    {extra?.cuerpo.map((parrafo, j) => (
                      <p key={j} className="ndet__parrafo">{parrafo}</p>
                    ))}
                  </div>

                  {/* Destacado */}
                  {extra?.destacado && (
                    <blockquote className="ndet__destacado" style={{ borderColor: n.categoriaColor }}>
                      <n.icon className="ndet__destacado-icon" style={{ color: n.categoriaColor }} />
                      <p>{extra.destacado}</p>
                    </blockquote>
                  )}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
