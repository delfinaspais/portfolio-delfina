# Portfolio - Delfina Spais

Portfolio personal minimalista y profesional.

## Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Imagen de fondo

Para usar tu imagen de fondo con textura crema/beige, colócala en:

```
public/background.png
```

El fondo tiene un gradiente de respaldo si no hay imagen.

## Imágenes de proyectos

**Foto de portada (tarjeta):** El campo `image` en cada proyecto define la imagen que se muestra en la tarjeta.

**Múltiples fotos en el modal:** Usa el campo `images` para mostrar varias imágenes al abrir el detalle.

**Ejemplo - AMC Amoblamientos con 3 fotos:**
1. Coloca tus 3 fotos en `public/projects/`:
   - `amc.jpg` → foto de portada (la que se ve en la tarjeta)
   - `amc-2.jpg` → segunda foto en el modal
   - `amc-3.jpg` → tercera foto en el modal

2. En `src/data/projects.ts` ya está configurado:
```ts
{
  image: '/projects/msc-3.png',  // portada de la tarjeta
  images: ['/projects/msc.png', '/projects/msc-2.png', '/projects/msc-3.png'],  // todas en el modal
  // ...
}
```

La primera imagen de `images` (o `image` si no hay `images`) es la principal en el modal.
