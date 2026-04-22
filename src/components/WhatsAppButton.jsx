import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import '../styles/whatsapp.css'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/56972444019?text=Hola%20RELOGIC%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20sus%20servicios."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, delay: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title="Contactar por WhatsApp"
    >
      <FaWhatsapp className="whatsapp-btn__icon" />
    </motion.a>
  )
}
