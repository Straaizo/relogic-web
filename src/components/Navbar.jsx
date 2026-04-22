import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaRecycle, FaBars, FaTimes } from 'react-icons/fa'
import '../styles/navbar.css'

const links = [
  { label: 'Inicio',          href: '#inicio' },
  { label: 'Quiénes somos',   href: '#quienes-somos' },
  { label: 'Servicios',       href: '#servicios' },
  { label: 'Infraestructura', href: '#infraestructura' },
  { label: 'Materiales',      href: '#materiales' },
  { label: 'Noticias',        href: '#noticias-detalle' },
]

/* Variantes del contenedor del menú */
const menuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
  },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.32,
      ease: [0.4, 0, 0.2, 1],
      when: 'beforeChildren',
      staggerChildren: 0.055,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.24,
      ease: [0.4, 0, 1, 1],
      when: 'afterChildren',
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
}

/* Variantes de cada ítem del menú */
const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.22, ease: 'easeOut' } },
  exit:    { opacity: 0, x: -10, transition: { duration: 0.15, ease: 'easeIn' } },
}

/* Variante del botón CTA al final */
const ctaVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: 'easeOut' } },
  exit:    { opacity: 0, y: 6, scale: 0.97, transition: { duration: 0.15 } },
}

/* Icono hamburger ↔ X con animación */
const iconVariants = {
  open:   { rotate: 90,  opacity: 1, transition: { duration: 0.22 } },
  closed: { rotate: 0,   opacity: 1, transition: { duration: 0.22 } },
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Bloquear scroll del body cuando el menú está abierto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const colorSuffix = scrolled ? 'dark' : 'light'

  return (
    <nav className={`navbar ${scrolled || menuOpen ? 'navbar--solid' : 'navbar--transparent'}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#inicio" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <span className="navbar__logo-icon">
            <FaRecycle color="#fff" size={18} />
          </span>
          <span className={`navbar__logo-text ${menuOpen ? 'navbar__logo-text--dark' : `navbar__logo-text--${colorSuffix}`}`}>
            RELOGIC
          </span>
        </a>

        {/* Links desktop */}
        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={`navbar__link navbar__link--${colorSuffix}`}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contacto" className="navbar__cta">Contáctanos</a>
          </li>
        </ul>

        {/* Hamburger animado */}
        <motion.button
          className="navbar__hamburger"
          style={{ color: scrolled || menuOpen ? '#1f2937' : '#fff' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          animate={menuOpen ? 'open' : 'closed'}
          variants={iconVariants}
          whileTap={{ scale: 0.88 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.18 }}
                style={{ display: 'flex' }}
              >
                <FaTimes size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -45 }}
                transition={{ duration: 0.18 }}
                style={{ display: 'flex' }}
              >
                <FaBars size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu con AnimatePresence */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ overflow: 'hidden' }}
          >
            <nav className="navbar__mobile-inner">
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="navbar__mobile-link"
                  onClick={() => setMenuOpen(false)}
                  variants={itemVariants}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contacto"
                className="navbar__mobile-cta"
                onClick={() => setMenuOpen(false)}
                variants={ctaVariants}
              >
                Contáctanos
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
