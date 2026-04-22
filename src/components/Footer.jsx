import { FaRecycle, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import '../styles/footer.css'

const links = [
  { label: 'Inicio',          href: '#inicio' },
  { label: 'Quiénes somos',   href: '#quienes-somos' },
  { label: 'Servicios',       href: '#servicios' },
  { label: 'Infraestructura', href: '#infraestructura' },
  { label: 'Materiales',      href: '#materiales' },
  { label: 'Contacto',        href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          {/* Marca */}
          <div>
            <a href="#inicio" className="footer__logo">
              <span className="footer__logo-icon">
                <FaRecycle color="#fff" size={17} />
              </span>
              <span className="footer__logo-text">RELOGIC</span>
            </a>
            <p className="footer__brand-desc">
              Soluciones integrales de transporte, gestión y reciclaje industrial
              en Chile. Transformamos tus residuos en valor.
            </p>
            <div className="footer__social">
              {[FaFacebook, FaInstagram, FaLinkedin].map((Icon, i) => (
                <a key={i} href="#" className="footer__social-link" aria-label="Red social">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="footer__col-title">Links rápidos</h4>
            <ul className="footer__links">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="footer__link">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="footer__col-title">Contacto</h4>
            <p className="footer__contact-item">
              <strong>Tel: </strong>
              <a href="tel:+56972444019" className="footer__contact-link">+569-72444019</a>
            </p>
            <p className="footer__contact-item">
              <strong>Email: </strong>
              <a href="mailto:gerencia@relogic.cl" className="footer__contact-link">
                gerencia@relogic.cl
              </a>
            </p>
            <p className="footer__contact-item">
              <strong>Región: </strong>Metropolitana, Chile
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2025 RELOGIC. Todos los derechos reservados.</p>
          <p>Gestión responsable de residuos industriales</p>
        </div>
      </div>
    </footer>
  )
}
