# AWS User Groups Website 🌐

[English](#english) | [Español](#español)

---

## English

### 🎯 About

Official website for the AWS User Groups community. A modern, responsive platform built to connect AWS enthusiasts, share knowledge, and promote upcoming events and community activities.

**Live Site:** [awsusergroups.com](https://awsusergroups.com)

### ✨ Features

- ✅ Modern and responsive design
- ✅ Event calendar and upcoming meetups
- ✅ AWS Community Day information
- ✅ Photo gallery from past events
- ✅ Partner and sponsor showcases
- ✅ FAQ section
- ✅ Community involvement opportunities
- ✅ Modular component architecture
- ✅ TypeScript for type safety
- ✅ Optimized performance with Vite

### 🛠️ Technologies

- **React 19** - Modern UI framework
- **TypeScript** - Static typing
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vite** - Next generation build tool
- **Lucide React** - Beautiful icon library
- **React Lightbox** - Image gallery viewer

### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/CanadianCloud/awsusergroups.github.io.git

# Navigate to project directory
cd awsusergroups.github.io

# Install dependencies
npm install
```

### 🚀 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### 🌐 Deployment (GitHub Pages)

This project is configured to deploy automatically to GitHub Pages using the `gh-pages` package.

#### How it works:

The deployment process uses an isolated `gh-pages` branch that contains only the built production files, keeping your source code separate in the `main` branch.

#### Deploy to GitHub Pages:

```bash
# Deploy to GitHub Pages (one command does it all)
npm run deploy
```

This command will:
1. ✅ Compile TypeScript files
2. ✅ Build the production bundle (creates `dist/` folder)
3. ✅ Copy the `CNAME` file for custom domain
4. ✅ Push the `dist/` folder to the `gh-pages` branch
5. ✅ Your site goes live automatically at [awsusergroups.com](https://awsusergroups.com)

#### Branch Structure:

- **`main`** - Source code (development)
- **`draft`** - Backup branch
- **`gh-pages`** - Production build (auto-generated, do not edit manually)

#### First-time Setup:

If this is a fresh clone, make sure GitHub Pages is configured:

1. Go to your repository settings on GitHub
2. Navigate to **Pages** section
3. Set source to **`gh-pages`** branch
4. Set folder to **`/ (root)`**
5. Save changes

The site will be available at your custom domain or `https://username.github.io/repository-name/`

### 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Main navigation
│   │   ├── Footer.tsx         # Footer component
│   │   ├── ScrollToTop.tsx    # Scroll to top button
│   │   └── index.ts           # Layout exports
│   └── sections/
│       ├── Hero.tsx           # Hero banner
│       ├── UpcomingEvents.tsx # Event calendar
│       ├── CommunityDay.tsx   # AWS Community Day
│       ├── GetInvolved.tsx    # Get involved section
│       ├── Gallery.tsx        # Photo gallery
│       ├── Slider.tsx         # Image slider
│       ├── Partners.tsx       # Partner logos
│       ├── Sponsors.tsx       # Sponsor logos
│       ├── FAQ.tsx            # FAQ section
│       ├── CTA.tsx            # Call to action
│       └── index.ts           # Section exports
├── assets/                    # Images and media files
├── lib/
│   └── utils.ts              # Utility functions
├── App.tsx                   # Main app component
├── main.tsx                  # App entry point
└── index.css                 # Global styles with Tailwind
```

### 🤝 Volunteers

This project is maintained by our amazing volunteers:

- **[Daniela Perez](https://www.linkedin.com/in/danielaperezr/)** - Community Organizer & Developer
- **[Xaca Rana](https://www.xacarana.com)** - Developer & Project Lead

### 🌟 Contributing

We welcome contributions! If you'd like to help improve the website:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 📝 License

This project is open source and available for the AWS community.

### 📧 Contact

For questions or suggestions, reach out through:
- Our community meetups
- GitHub issues
- Visit [awsusergroups.com](https://awsusergroups.com)

---

## Español

### 🎯 Acerca del Proyecto

Sitio web oficial para la comunidad de AWS User Groups. Una plataforma moderna y responsiva construida para conectar entusiastas de AWS, compartir conocimiento y promover eventos y actividades comunitarias.

**Sitio en vivo:** [awsusergroups.com](https://awsusergroups.com)

### ✨ Características

- ✅ Diseño moderno y responsivo
- ✅ Calendario de eventos y próximos meetups
- ✅ Información de AWS Community Day
- ✅ Galería de fotos de eventos pasados
- ✅ Exhibición de partners y sponsors
- ✅ Sección de preguntas frecuentes
- ✅ Oportunidades de participación comunitaria
- ✅ Arquitectura modular de componentes
- ✅ TypeScript para seguridad de tipos
- ✅ Rendimiento optimizado con Vite

### 🛠️ Tecnologías

- **React 19** - Framework moderno de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS v4** - Framework CSS utility-first
- **Vite** - Build tool de próxima generación
- **Lucide React** - Librería de iconos
- **React Lightbox** - Visor de galería de imágenes

### 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/CanadianCloud/awsusergroups.github.io.git

# Navegar al directorio del proyecto
cd awsusergroups.github.io

# Instalar dependencias
npm install
```

### 🚀 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

### 🌐 Despliegue (GitHub Pages)

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages usando el paquete `gh-pages`.

#### Cómo funciona:

El proceso de despliegue utiliza una rama aislada `gh-pages` que contiene solo los archivos de producción compilados, manteniendo tu código fuente separado en la rama `main`.

#### Desplegar a GitHub Pages:

```bash
# Desplegar a GitHub Pages (un solo comando lo hace todo)
npm run deploy
```

Este comando hará:
1. ✅ Compilar archivos TypeScript
2. ✅ Construir el bundle de producción (crea la carpeta `dist/`)
3. ✅ Copiar el archivo `CNAME` para el dominio personalizado
4. ✅ Enviar la carpeta `dist/` a la rama `gh-pages`
5. ✅ Tu sitio se publica automáticamente en [awsusergroups.com](https://awsusergroups.com)

#### Estructura de Ramas:

- **`main`** - Código fuente (desarrollo)
- **`draft`** - Rama de respaldo
- **`gh-pages`** - Build de producción (auto-generado, no editar manualmente)

#### Configuración Inicial:

Si es un clon nuevo, asegúrate de que GitHub Pages esté configurado:

1. Ve a la configuración de tu repositorio en GitHub
2. Navega a la sección **Pages**
3. Establece la fuente como rama **`gh-pages`**
4. Establece la carpeta como **`/ (root)`**
5. Guarda los cambios

El sitio estará disponible en tu dominio personalizado o `https://username.github.io/nombre-repositorio/`

### 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Navegación principal
│   │   ├── Footer.tsx         # Componente pie de página
│   │   ├── ScrollToTop.tsx    # Botón scroll al inicio
│   │   └── index.ts           # Exports del layout
│   └── sections/
│       ├── Hero.tsx           # Banner principal
│       ├── UpcomingEvents.tsx # Calendario de eventos
│       ├── CommunityDay.tsx   # AWS Community Day
│       ├── GetInvolved.tsx    # Sección de participación
│       ├── Gallery.tsx        # Galería de fotos
│       ├── Slider.tsx         # Carrusel de imágenes
│       ├── Partners.tsx       # Logos de partners
│       ├── Sponsors.tsx       # Logos de sponsors
│       ├── FAQ.tsx            # Preguntas frecuentes
│       ├── CTA.tsx            # Llamada a la acción
│       └── index.ts           # Exports de secciones
├── assets/                    # Imágenes y archivos multimedia
├── lib/
│   └── utils.ts              # Funciones utilitarias
├── App.tsx                   # Componente principal
├── main.tsx                  # Punto de entrada
└── index.css                 # Estilos globales con Tailwind
```

### 🤝 Voluntarios

Este proyecto es mantenido por nuestros increíbles voluntarios:

- **[Daniela Perez](https://www.linkedin.com/in/danielaperezr/)** - Organizadora de Comunidad & Desarrolladora
- **[Xaca Rana](https://www.xacarana.com)** - Desarrollador & Líder del Proyecto

### 🌟 Contribuir

¡Damos la bienvenida a contribuciones! Si te gustaría ayudar a mejorar el sitio web:

1. Haz fork del repositorio
2. Crea tu rama de feature (`git checkout -b feature/CaracteristicaIncreible`)
3. Haz commit de tus cambios (`git commit -m 'Agregar CaracteristicaIncreible'`)
4. Haz push a la rama (`git push origin feature/CaracteristicaIncreible`)
5. Abre un Pull Request

### 📝 Licencia

Este proyecto es de código abierto y está disponible para la comunidad AWS.

### 📧 Contacto

Para preguntas o sugerencias, contáctanos a través de:
- Nuestros meetups comunitarios
- GitHub issues
- Visita [awsusergroups.com](https://awsusergroups.com)

---

Made with ❤️ by the AWS User Groups Community
