import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import { EMAILJS_CONFIG } from '../emailjs.config'
import '../styles/contacto.css'

/* Estado posible del envío */
const STATUS = { IDLE: 'idle', SENDING: 'sending', SUCCESS: 'success', ERROR: 'error' }

export default function Contacto() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [sendStatus, setSendStatus] = useState(STATUS.IDLE)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onBlur' })

  const onSubmit = async (data) => {
    setSendStatus(STATUS.SENDING)

    /* Fecha y hora en formato chileno */
    const ahora = new Date()
    const fecha_hora = ahora.toLocaleString('es-CL', {
      weekday: 'long',
      year:    'numeric',
      month:   'long',
      day:     'numeric',
      hour:    '2-digit',
      minute:  '2-digit',
      timeZone: 'America/Santiago',
    })

    /* Teléfono limpio para el link de WhatsApp (solo dígitos) */
    const telefono_limpio = (data.telefono || '').replace(/\D/g, '')

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name:        data.nombre,
          from_email:       data.email,
          empresa:          data.empresa  || '—',
          telefono:         data.telefono || '—',
          telefono_limpio,
          mensaje:          data.mensaje,
          reply_to:         data.email,
          fecha_hora,
        },
        EMAILJS_CONFIG.PUBLIC_KEY,
      )
      setSendStatus(STATUS.SUCCESS)
      reset()
      setTimeout(() => setSendStatus(STATUS.IDLE), 6000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setSendStatus(STATUS.ERROR)
      setTimeout(() => setSendStatus(STATUS.IDLE), 5000)
    }
  }

  const isSending = sendStatus === STATUS.SENDING

  return (
    <section id="contacto" className="contacto" ref={ref}>
      <div className="contacto__inner">
        <motion.div
          className="contacto__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="contacto__header-label">Contacto</span>
          <h2>¿Listo para gestionar tus residuos?</h2>
          <p>Contáctanos y te entregamos una solución a medida para tu empresa.</p>
        </motion.div>

        <div className="contacto__grid">
          {/* Formulario */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="contacto__form-card"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            noValidate
          >
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="nombre">Nombre *</label>
                <input
                  id="nombre"
                  {...register('nombre', { required: 'El nombre es obligatorio' })}
                  className={`form-input ${errors.nombre ? 'error' : ''}`}
                  placeholder="Tu nombre"
                  autoComplete="name"
                  disabled={isSending}
                />
                {errors.nombre && (
                  <span className="form-error-msg">{errors.nombre.message}</span>
                )}
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="empresa">Empresa</label>
                <input
                  id="empresa"
                  {...register('empresa')}
                  className="form-input"
                  placeholder="Nombre de empresa"
                  autoComplete="organization"
                  disabled={isSending}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email *</label>
                <input
                  id="email"
                  {...register('email', {
                    required: 'El email es obligatorio',
                    pattern: { value: /^\S+@\S+\.\S+$/i, message: 'Email inválido' },
                  })}
                  type="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="correo@empresa.cl"
                  autoComplete="email"
                  disabled={isSending}
                />
                {errors.email && (
                  <span className="form-error-msg">{errors.email.message}</span>
                )}
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="telefono">Teléfono</label>
                <input
                  id="telefono"
                  {...register('telefono', {
                    pattern: { value: /^[+\d\s()-]{7,20}$/, message: 'Teléfono inválido' },
                  })}
                  type="tel"
                  className={`form-input ${errors.telefono ? 'error' : ''}`}
                  placeholder="+56 9 XXXX XXXX"
                  autoComplete="tel"
                  disabled={isSending}
                />
                {errors.telefono && (
                  <span className="form-error-msg">{errors.telefono.message}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="mensaje">Mensaje *</label>
              <textarea
                id="mensaje"
                {...register('mensaje', {
                  required: 'El mensaje es obligatorio',
                  minLength: { value: 10, message: 'Mínimo 10 caracteres' },
                })}
                className={`form-textarea ${errors.mensaje ? 'error' : ''}`}
                rows={4}
                placeholder="¿En qué podemos ayudarte?"
                disabled={isSending}
              />
              {errors.mensaje && (
                <span className="form-error-msg">{errors.mensaje.message}</span>
              )}
            </div>

            {/* Feedback de envío */}
            {sendStatus === STATUS.SUCCESS && (
              <motion.div
                className="form-feedback form-feedback--success"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaCheckCircle />
                <span>Mensaje enviado correctamente. ¡Te contactaremos pronto!</span>
              </motion.div>
            )}

            {sendStatus === STATUS.ERROR && (
              <motion.div
                className="form-feedback form-feedback--error"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaExclamationCircle />
                <span>No se pudo enviar el mensaje. Inténtalo nuevamente o escríbenos directamente.</span>
              </motion.div>
            )}

            <button type="submit" disabled={isSending} className="form-submit">
              {isSending ? (
                <>
                  <span className="form-submit__spinner" />
                  Enviando…
                </>
              ) : (
                'Enviar mensaje'
              )}
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            className="contacto__info"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div>
              <h3>Información de contacto</h3>
              <div className="contacto__info-list">
                {[
                  { icon: FaPhone,         label: 'Teléfono',   value: '+569-72444019',          href: 'tel:+56972444019' },
                  { icon: FaEnvelope,      label: 'Email',      value: 'gerencia@relogic.cl', href: 'mailto:gerencia@relogic.cl' },
                  { icon: FaMapMarkerAlt,  label: 'Ubicación',  value: 'Chile — Región Metropolitana', href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="contacto__info-item">
                    <div className="contacto__info-icon-wrap">
                      <Icon className="contacto__info-icon" />
                    </div>
                    <div>
                      <p className="contacto__info-item-label">{label}</p>
                      {href ? (
                        <a href={href} className="contacto__info-item-value">{value}</a>
                      ) : (
                        <p className="contacto__info-item-value">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contacto__schedule">
              <h4>Horario de atención</h4>
              {[
                { day: 'Lunes — Viernes', time: '08:00 — 18:00' },
                { day: 'Sábado',          time: '09:00 — 14:00' },
                { day: 'Domingo',         time: 'Cerrado' },
              ].map(({ day, time }) => (
                <div key={day} className="schedule-row">
                  <span className="schedule-day">{day}</span>
                  <span className="schedule-time">{time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
