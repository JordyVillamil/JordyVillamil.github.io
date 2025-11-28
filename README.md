# 🌟 Portfolio Jordy Villamil

![Portfolio Preview](https://img.shields.io/badge/Status-Active-success)
![Version](https://img.shields.io/badge/Version-0.0.0-blue)
![React](https://img.shields.io/badge/React-18.2.0-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.1.6-646cff?logo=vite)

Portfolio personal interactivo desarrollado con React, TypeScript y Vite. Presenta una experiencia de usuario moderna con animaciones fluidas, efectos visuales avanzados y diseño responsive.

🌐 **Demo en vivo:** [https://JordyVillamil.github.io/portfolio-Jordy-Villamil](https://JordyVillamil.github.io/portfolio-Jordy-Villamil)

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Secciones del Portfolio](#-secciones-del-portfolio)
- [Instalación](#-instalación)
- [Scripts Disponibles](#-scripts-disponibles)
- [Configuración](#-configuración)
- [Despliegue](#-despliegue)
- [Desarrollo](#-desarrollo)
- [Características Técnicas](#-características-técnicas)
- [Contribución](#-contribución)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## ✨ Características

### 🎨 Diseño y UI/UX
- **Diseño Responsive**: Adaptado a todos los dispositivos (móvil, tablet, desktop)
- **Navegación SPA**: Single Page Application con scroll suave entre secciones
- **Navbar Fijo**: Barra de navegación siempre visible con links a las secciones
- **Animaciones Fluidas**: Implementadas con Framer Motion para transiciones elegantes
- **Video Hero Background**: Fondo con video animado en la sección Home
- **Tipografía Animada**: Efecto de escritura automática con React Type Animation
- **Diseño Minimalista**: Interfaz limpia y moderna con gradientes suaves

### 🚀 Funcionalidades
- **Sección Inicio (Home)**: Presentación con video hero y animación de texto dinámico
- **Sobre Mí (About)**: Información personal, profesional con tarjetas interactivas
- **Habilidades (Skills)**: Showcase de tecnologías con filtros por categoría
- **Portafolio**: Galería de proyectos con filtros y vista previa
- **Contacto**: Formulario funcional y enlaces a redes sociales
- **Iconos Modernos**: Integración con React Icons (5000+ iconos disponibles)
- **Botones CTA**: Call-to-action para navegación rápida

### ⚡ Performance
- **Fast Refresh**: Desarrollo rápido con Hot Module Replacement (HMR)
- **Optimización de Build**: Compilación optimizada con Vite (hasta 10x más rápido)
- **TypeScript**: Tipado estático para código más robusto y mantenible
- **Code Splitting**: División automática del código para carga optimizada
- **Lazy Loading**: Carga eficiente de recursos y componentes
- **Tree Shaking**: Eliminación de código no utilizado en producción

---

## 🛠 Tecnologías

### Core
- **React** (v18.2.0) - Biblioteca principal para la UI
- **TypeScript** (v5.9.3) - Superset de JavaScript con tipado estático
- **Vite** (v5.1.6) - Build tool y dev server de nueva generación

### Librerías de UI y Animación
- **Framer Motion** (v12.23.24) - Librería de animaciones para React
- **React Type Animation** (v3.2.0) - Efectos de texto animado
- **React Icons** (v5.5.0) - Colección de iconos populares
- **Tailwind CSS** (v4.1.17) - Framework CSS utility-first

### Routing
- **React Router DOM** (v7.9.4) - Navegación y routing

### Herramientas de Desarrollo
- **ESLint** - Linter para mantener código consistente
- **TypeScript ESLint** - Parser y plugins para TypeScript
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Añade prefijos CSS automáticamente

### Despliegue
- **gh-pages** (v6.3.0) - Despliegue automático en GitHub Pages
- **rimraf** (v6.0.1) - Limpieza de directorios multiplataforma

---

## 📁 Estructura del Proyecto

```
portfolio-Jordy-Villamil/
│
├── public/                          # Recursos públicos estáticos
│
├── src/                             # Código fuente
│   ├── assets/                      # Assets del proyecto
│   │   ├── logos/                   # Logotipos de tecnologías
│   │   └── previews/                # Capturas de proyectos
│   │
│   ├── components/                  # Componentes reutilizables
│   │   ├── background/
│   │   │   └── StarryBackground.tsx # Fondo animado con estrellas
│   │   ├── layout/
│   │   │   ├── Footer.tsx           # Pie de página
│   │   │   └── Navbar.tsx           # Barra de navegación
│   │   └── UI/
│   │       └── Card.tsx             # Componente de tarjeta
│   │
│   ├── sections/                    # Secciones del portfolio
│   │   ├── HomeSection.tsx          # Sección de inicio
│   │   ├── AboutSection.tsx         # Sección sobre mí
│   │   ├── SkillsSection.tsx        # Sección de habilidades
│   │   ├── PortfolioSection.tsx     # Sección de proyectos
│   │   └── ContactSection.tsx       # Sección de contacto
│   │
│   ├── styles/                      # Estilos CSS
│   │   ├── global.css               # Estilos globales
│   │   ├── Navbar.css               # Estilos del navbar
│   │   ├── HomeSection.css          # Estilos de Home
│   │   ├── AboutSection.css         # Estilos de About
│   │   ├── SkillsSection.css        # Estilos de Skills
│   │   ├── PortfolioSection.css     # Estilos de Portfolio
│   │   └── ContactSection.css       # Estilos de Contacto
│   │
│   ├── App.tsx                      # Componente principal
│   └── main.tsx                     # Punto de entrada
│
├── eslint.config.js                 # Configuración de ESLint
├── tsconfig.json                    # Configuración base de TypeScript
├── tsconfig.app.json                # Config TypeScript para la app
├── tsconfig.node.json               # Config TypeScript para Node
├── vite.config.ts                   # Configuración de Vite
├── package.json                     # Dependencias y scripts
├── index.html                       # HTML principal
└── README.md                        # Este archivo
```

---

## 📄 Secciones del Portfolio

### 🏠 Home (Inicio)
- Presentación con nombre completo: **JORDY FABIAN VILLAMIL LETRADO**
- Video hero background con overlay personalizado
- Animación de texto con roles: "Full-Stack Developer", "Ethical Hacker" y "Tech Enthusiast"
- Botones CTA: "View My Work" y "Get In Touch"
- Scroll indicator animado
- Animaciones de entrada escalonadas con Framer Motion
- Diseño totalmente responsive (desktop, tablet, móvil)

### 👤 About (Acerca de Mí)
- Presentación personal con imagen profesional
- Biografía detallada y trayectoria profesional
- Certificaciones y logros destacados (Google, Universidad de los Andes, IBM)
- Botón de descarga de CV
- Tarjetas de capacidades: Fullstack Development, Cybersecurity, DevOps
- Stack tecnológico por área (Python, JavaScript, React, Django, Docker)
- Efectos hover interactivos en cada tarjeta

### 💻 Skills (Habilidades)
- Sistema de filtros por categoría (All, Frontend, Backend, DevOps, Tools)
- Grid responsive de habilidades con logos
- Indicadores de nivel de experiencia (dots)
- Efectos hover con transformaciones y glow
- Logos de tecnologías en escala de grises que cobran color al hover
- Sección de estadísticas con contadores animados
- Tags por categoría para cada habilidad

### 🎨 Portfolio (Proyectos)
- Galería de proyectos con diseño tipo Pinterest
- Sistema de filtros: All Projects, Web Apps, Mobile Apps, APIs
- Badges de "Featured" para proyectos destacados
- Previews con GIFs animados
- **Vista previa en ventana emergente**: Los GIFs se abren en una ventana popup estilizada
- Overlay con botones de acción: "View Demo" y "GitHub"
- Tags de tecnologías utilizadas
- Año de desarrollo visible
- Efectos hover con elevación 3D
- Vista responsive con grid adaptativo

### 📬 Contact (Contacto)
- Layout de dos columnas: Info panel + Formulario
- Panel de información con gradiente personalizado
- Información de contacto: Teléfono, Email, Ubicación
- Enlaces a redes sociales: GitHub, LinkedIn
- Formulario funcional con validación
- Estados del botón: Idle, Sending, Success, Error
- Spinner animado durante envío
- Mensaje de confirmación
- Diseño responsive con stack vertical en móviles
- Optimización especial para pantallas pequeñas (360px-400px)

---

## 🚀 Instalación

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/JordyVillamil/JordyVillamil.github.io.git
cd portfolio-Jordy-Villamil
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

---

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila el proyecto para producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Ejecuta ESLint para verificar el código |
| `npm run clean` | Limpia el directorio `dist` |
| `npm run deploy` | Compila y despliega en GitHub Pages |
| `npm run init-tailwind` | Inicializa configuración de Tailwind CSS |

---

## ⚙️ Configuración

### Vite Configuration (`vite.config.ts`)
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
})
```

### TypeScript Configuration
El proyecto utiliza tres archivos de configuración de TypeScript:
- `tsconfig.json` - Configuración base
- `tsconfig.app.json` - Para código de la aplicación
- `tsconfig.node.json` - Para código de Node.js

### ESLint
Configurado con reglas para React, TypeScript y mejores prácticas.

---

## 🌐 Despliegue

### GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

**Despliegue manual:**
```bash
npm run deploy
```

Este comando:
1. Compila el proyecto (`npm run build`)
2. Despliega el directorio `dist` en la rama `gh-pages`

**URL del sitio desplegado:**
```
https://JordyVillamil.github.io/portfolio-Jordy-Villamil
```

### Otras Plataformas

El proyecto también puede desplegarse en:
- **Vercel**: `vercel --prod`
- **Netlify**: Conecta el repositorio y configura el comando `npm run build`
- **Render**: Similar a Netlify

---

## 🔧 Desarrollo

### Agregar una Nueva Sección

1. Crea el componente en `src/sections/`:
```tsx
// src/sections/NuevaSeccion.tsx
import React from 'react';

interface SectionProps {
  id: string;
}

const NuevaSeccion: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id}>
      {/* Contenido */}
    </section>
  );
};

export default NuevaSeccion;
```

2. Importa y añade en `App.tsx`:
```tsx
import NuevaSeccion from './sections/NuevaSeccion';

// Dentro del return:
<NuevaSeccion id="nueva-seccion" />
```

3. Actualiza el `Navbar.tsx` con el nuevo enlace.

### Personalizar Estilos

Los estilos están modularizados por sección en el directorio `src/styles/`:
- Edita el archivo CSS correspondiente a la sección
- Los estilos globales están en `global.css`
- Puedes usar Tailwind CSS para utilidades rápidas

### Modificar Animaciones

Las animaciones usan **Framer Motion**. Ejemplo:
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Contenido */}
</motion.div>
```

---

## 🎯 Características Técnicas

### Video Hero Background
Fondo de video dinámico en HomeSection:
- **Formatos múltiples**: Soporte para MP4 y WebM
- **object-fit: cover**: Ajuste perfecto en cualquier resolución
- **Overlay con gradiente**: Mejora la legibilidad del texto
- **Responsive**: Técnicas especiales de centrado para móviles
- **Fallback**: Gradiente de fondo si el video no carga
- **Performance**: Optimizado con `playsInline` y `muted`

### Framer Motion Animations
Sistema completo de animaciones:
- **Container variants**: Animaciones escalonadas para listas
- **Scroll-triggered animations**: Animaciones al hacer scroll
- **Hover effects**: Transformaciones suaves en hover
- **Spring physics**: Animaciones con física realista
- **Exit animations**: Transiciones suaves al salir
- **Gesture animations**: Respuesta a gestos del usuario

### TypeAnimation Component
Efecto de máquina de escribir en el Home:
- Secuencias personalizables con delays
- Loop infinito con transiciones suaves
- Velocidad ajustable (50 WPM)
- Múltiples textos: "Full-Stack Developer", "Ethical Hacker", "Tech Enthusiast"

### GIF Preview Popup System
Sistema de vista previa de proyectos:
- **Ventana emergente personalizada**: Popup centrado de 1000x700px
- **Diseño estilizado**: Header con gradiente y contenedor oscuro
- **Visualización de GIFs**: Imágenes animadas a tamaño completo
- **Botón de cierre**: Interfaz intuitiva para cerrar la ventana
- **Responsive**: Ajuste automático al tamaño de pantalla
- **Cross-browser**: Compatible con navegadores modernos

### Responsive Design System
Sistema de breakpoints completo:
- **1200px**: Ajustes para laptops pequeñas
- **992px**: Tablets landscape
- **768px**: Tablets portrait y móviles grandes
- **480px**: Móviles estándar
- **400px**: Móviles pequeños (optimización especial)
- **Media queries especiales**: Landscape/Portrait específicos

### CSS Architecture
Organización modular de estilos:
- **CSS por sección**: Cada componente tiene su archivo CSS
- **Variables CSS**: Sistema de colores y espaciado consistente
- **Gradientes**: Linear gradients para fondos dinámicos
- **Grid y Flexbox**: Layouts modernos y flexibles
- **Animations**: Keyframes personalizados para efectos especiales
- **Z-index system**: Jerarquía clara de capas (1-10)

### Form Handling
Sistema de formulario interactivo:
- **Estados controlados**: useState para cada campo
- **Validación**: Required fields con feedback visual
- **Estados del botón**: Idle → Sending → Success/Error
- **Spinner animado**: Indicador visual de carga
- **Mensajes de confirmación**: Feedback inmediato al usuario
- **Disabled states**: Prevención de múltiples envíos

### Scroll Behavior
Navegación suave:
- **scroll-behavior: smooth**: Scroll suave nativo
- **Anchor links**: Enlaces directos a secciones por ID
- **Offset handling**: Compensación para navbar fijo
- **Scroll indicator**: Animación de mouse para indicar scroll

### Performance Optimizations
Optimizaciones aplicadas:
- **Code splitting**: Carga bajo demanda de componentes
- **Tree shaking**: Eliminación de código no usado
- **Asset optimization**: Imágenes y videos optimizados
- **CSS minification**: Compresión de estilos en producción
- **JS minification**: Reducción del tamaño del bundle
- **Gzip/Brotli ready**: Preparado para compresión del servidor

---

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📝 Licencia

Este proyecto es de uso personal. Todos los derechos reservados © 2025 Jordy Fabián Villamil Letrado.

---

## 📧 Contacto

**Jordy Fabián Villamil Letrado**

- 🌐 Portfolio: [https://JordyVillamil.github.io](https://JordyVillamil.github.io)
- 💼 GitHub: [@JordyVillamil](https://github.com/JordyVillamil)
- 📫 Email: jordyvillamilletras@gmail.com
- 💼 LinkedIn: [Jordy Villamil](https://www.linkedin.com/in/jordy-fabian-villamil-letrado-32378b232/)
- 📱 WhatsApp: +57 320 425 4287
- 📍 Ubicación: Tocancipá, Colombia

---

## 🙏 Agradecimientos

- **React Team** por la excelente librería
- **Framer Motion** por las animaciones fluidas y documentación clara
- **Vite** por la herramienta de build ultrarrápida
- **TypeScript** por hacer el código más robusto
- **Tailwind CSS** por el sistema de utilidades
- **React Icons** por la extensa colección de iconos
- La comunidad **open source** por las innumerables contribuciones

---

## 📊 Estadísticas del Proyecto

- **Lenguaje principal**: TypeScript (85%)
- **Componentes**: 15+ componentes reutilizables
- **Secciones**: 5 secciones principales
- **Líneas de código**: ~3,500+
- **Dependencias**: 6 principales, 14 de desarrollo
- **Build time**: ~5-10 segundos
- **Bundle size**: Optimizado y minificado
- **Lighthouse Score**: 90+ en todas las métricas

---

## 🔄 Actualizaciones Recientes

### v0.0.0 (Noviembre 2025)
- ✅ Implementación del video hero background
- ✅ Optimización responsive para móviles (360px-400px)
- ✅ Corrección de z-index y superposiciones
- ✅ Mejora del sistema de espaciado entre secciones
- ✅ Implementación de formulario de contacto funcional
- ✅ Sistema de filtros en Skills y Portfolio
- ✅ Animaciones Framer Motion en todas las secciones
- ✅ Optimización de performance y carga
- ✅ **Sistema de vista previa de GIFs en ventana emergente**
- ✅ **Popup estilizado para demos de proyectos**

---

<div align="center">

### ⭐ Si te gusta este proyecto, considera darle una estrella!

**Desarrollado con ❤️ y ☕ por Jordy Villamil**

![Made with Love](https://img.shields.io/badge/Made%20with-Love-red?style=for-the-badge)
![Made with TypeScript](https://img.shields.io/badge/Made%20with-TypeScript-blue?style=for-the-badge&logo=typescript)
![Made with React](https://img.shields.io/badge/Made%20with-React-61dafb?style=for-the-badge&logo=react)

**© 2025 Jordy Fabián Villamil Letrado. Todos los derechos reservados.**

</div>
