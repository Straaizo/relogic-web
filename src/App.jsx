import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Noticias from './components/Noticias'
import QuienesSomos from './components/QuienesSomos'
import Impacto from './components/Impacto'
import Servicios from './components/Servicios'
import ComoTrabajamos from './components/ComoTrabajamos'
import Materiales from './components/Materiales'
import Infraestructura from './components/Infraestructura'
import NoticiasDetalle from './components/NoticiasDetalle'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  useEffect(() => {
    // Fix iOS Safari: window.innerHeight da el alto visible real
    // 100vh en Safari incluye la barra del browser y produce el gap blanco
    const setVH = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
    }
    setVH()
    window.addEventListener('resize', setVH)
    return () => window.removeEventListener('resize', setVH)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Noticias />
        <QuienesSomos />
        <Impacto />
        <Servicios />
        <ComoTrabajamos />
        <Materiales />
        <Infraestructura />
        <NoticiasDetalle />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
