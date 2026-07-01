# Wanderlust Explorer

Aplicacion academica construida con Next.js (App Router), TypeScript y TailwindCSS.

## Setup del proyecto

1. Instalar dependencias:

```bash
npm install
```

2. Levantar servidor de desarrollo:

```bash
npm run dev
```

3. Abrir en navegador:

http://localhost:3000

## Scripts

- `npm run dev`: ejecuta la app en desarrollo.
- `npm run build`: genera build de produccion.
- `npm run start`: ejecuta el build.
- `npm run lint`: corre ESLint.

## Funcionalidades implementadas

- Home con hero principal y CTA a experiencias.
- Listado de experiencias con busqueda y filtros.
- Sincronizacion de filtros con query params.
- Detalle de experiencia por ruta dinamica `/experiences/[id]`.
- Favoritos con toggle en tarjeta usando `useState` de nivel superior.
- Perfil con informacion ficticia y contador de favoritos.

## Design References

Inspiracion visual utilizada (sin copiar layout exacto):

- https://www.despegar.com.uy/
- https://www.airbnb.com/
- https://www.booking.com/

## Stack tecnico

- Next.js 16
- React 19
- TypeScript
- TailwindCSS 4
