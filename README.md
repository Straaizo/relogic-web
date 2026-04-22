# RELOGIC — Sitio Web Corporativo

Sitio web institucional para **RELOGIC**, empresa de gestión y transporte de residuos industriales en Chile. Desarrollado con React + Vite y Tailwind CSS.

---

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS 4**
- **Framer Motion** — animaciones de entrada y scroll
- **React Hook Form** — validación del formulario de contacto
- **EmailJS** — envío de emails desde el frontend sin backend
- **React Icons**

---

## Secciones

| Componente | Descripción |
|---|---|
| `Navbar` | Navegación fija con scroll-aware y menú mobile animado |
| `Hero` | Banner principal con CTA |
| `QuienesSomos` | Descripción de la empresa y valores |
| `Impacto` | Contadores animados con estadísticas clave |
| `Servicios` | Grid de 6 servicios ofrecidos |
| `ComoTrabajamos` | Proceso de trabajo paso a paso |
| `Materiales` | Tipos de residuos gestionados |
| `Infraestructura` | Presentación de equipamiento y flota |
| `Contacto` | Formulario con envío vía EmailJS |
| `Footer` | Links, contacto y redes sociales |
| `WhatsAppButton` | Botón flotante de WhatsApp |

---

## Instalación

```bash
npm install
npm run dev
```

---

## Configuración EmailJS

El formulario de contacto usa [EmailJS](https://www.emailjs.com). Para configurarlo:

1. Crear cuenta en emailjs.com (plan gratuito disponible)
2. Crear un **Email Service** conectado a Gmail u otro proveedor
3. Crear un **Email Template** usando el archivo `EMAIL_TEMPLATE.html` como referencia (no está en el repo, pedírselo al equipo)
4. Copiar las claves en `src/emailjs.config.js`:

```js
export const EMAILJS_CONFIG = {
  SERVICE_ID:  'service_xxxxxxx',
  TEMPLATE_ID: 'template_xxxxxxx',
  PUBLIC_KEY:  'xxxxxxxxxxxxxxxxx',
}
```

> `EMAIL_TEMPLATE.html` está excluido del repositorio — cada colaborador debe configurar su propia plantilla en EmailJS.

---

## Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # ESLint
```

---

## Estructura

```
relogic-web/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/     # Un archivo por sección
│   ├── styles/         # CSS modular por componente
│   ├── emailjs.config.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── vite.config.js
```
