# AWS User Group Website

Sitio web para la comunidad de AWS User Group.

## Estructura del Proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Navegación principal
│   │   ├── Footer.tsx       # Pie de página
│   │   └── index.ts         # Exports del layout
│   └── sections/
│       ├── Hero.tsx         # Banner principal
│       ├── UpcomingEvents.tsx  # Eventos próximos
│       ├── CommunityDay.tsx    # AWS Community Day
│       ├── Gallery.tsx         # Galería de fotos
│       ├── Partners.tsx        # Logos de partners
│       ├── Sponsors.tsx        # Logos de sponsors
│       ├── FAQ.tsx            # Preguntas frecuentes
│       ├── AboutGroup.tsx     # Acerca del grupo
│       ├── GetInvolved.tsx    # Cómo involucrarse
│       └── index.ts           # Exports de secciones
├── App.tsx              # Componente principal
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales con Tailwind
```

## Tecnologías

- **React 19** - Framework de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS v4** - Estilos
- **Vite** - Build tool

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Características

- ✅ Estructura modular de componentes
- ✅ Componentes separados por secciones
- ✅ Layout reutilizable (Header/Footer)
- ✅ Configuración simple de Tailwind CSS
- ✅ TypeScript para type safety
- ✅ Diseño responsive
