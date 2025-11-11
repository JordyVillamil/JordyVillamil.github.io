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
- **Efectos Visuales**: Fondo animado con estrellas generadas dinámicamente
- **Tipografía Animada**: Efecto de escritura automática con React Type Animation

### 🚀 Funcionalidades
- **Sección Inicio (Home)**: Presentación con animación de texto dinámico
- **Sobre Mí (About)**: Información personal y profesional
- **Habilidades (Skills)**: Showcase de tecnologías y competencias
- **Portafolio**: Galería de proyectos realizados
- **Contacto**: Formulario y enlaces a redes sociales
- **Iconos Modernos**: Integración con React Icons para iconografía consistente

### ⚡ Performance
- **Fast Refresh**: Desarrollo rápido con Hot Module Replacement (HMR)
- **Optimización de Build**: Compilación optimizada con Vite
- **TypeScript**: Tipado estático para código más robusto y mantenible
- **Lazy Loading**: Carga eficiente de recursos

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
- Animación de texto con roles: "Full-Stack Developer" y "Ethical Hacker"
- Fondo animado con efecto de estrellas en movimiento
- Animaciones de entrada con Framer Motion
- Enlaces a redes sociales

### 👤 About (Acerca de Mí)
- Información personal y profesional
- Biografía y trayectoria
- Intereses y valores

### 💻 Skills (Habilidades)
- Tecnologías de desarrollo web
- Herramientas y frameworks
- Competencias técnicas

### 🎨 Portfolio (Proyectos)
- Galería de proyectos destacados
- Descripciones y tecnologías utilizadas
- Enlaces a demos y repositorios

### 📬 Contact (Contacto)
- Formulario de contacto
- Información de contacto directo
- Enlaces a redes sociales y perfiles profesionales

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

### StarryBackground Component
Genera un fondo animado con estrellas:
- **3 capas de estrellas** con diferentes velocidades de animación
- **Tamaños aleatorios** (1-3px) para profundidad visual
- **Generación dinámica** de 1000 estrellas totales (700 + 200 + 100)
- **Efecto parallax** con animaciones CSS keyframes
- **Optimizado** con `useEffect` para generar una sola vez

### TypeAnimation Component
Efecto de máquina de escribir en el Home:
- Alterna entre "Full-Stack Developer" y "Ethical Hacker"
- Velocidad personalizable
- Repetición infinita
- Transiciones suaves entre textos

### Navegación con Scroll Suave
- Links del navbar apuntan a IDs de secciones
- Scroll automático suave con CSS (`scroll-behavior: smooth`)
- Navbar fijo con `position: sticky` o `fixed`

### Arquitectura de Componentes
- **Componentes funcionales** con TypeScript
- **Props tipadas** para seguridad de tipos
- **Separación de responsabilidades** (UI, layout, secciones)
- **Reutilización** mediante componentes modulares

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
- 📫 Email: [jordyvillamilletras@gmail.com]
- 💼 LinkedIn: [Jordy-Villamil](https://www.linkedin.com/in/jordy-fabian-villamil-letrado-32378b232/)

---

## 🙏 Agradecimientos

- React Team por la excelente librería
- Framer Motion por las animaciones fluidas
- Vite por la herramienta de build ultrarrápida
- La comunidad open source

---

<div align="center">

### ⭐ Si te gusta este proyecto, considera darle una estrella!

**Desarrollado con ❤️ por Jordy Villamil**

![Made with Love](https://img.shields.io/badge/Made%20with-Love-red?style=for-the-badge)

</div>
