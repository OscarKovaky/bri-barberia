# Black Steel Barber Studio (Angular)

Aplicación front-only de una barbería premium, construida con Angular standalone, TypeScript estricto, SCSS y Angular Router.

## Stack
- Angular 19 (standalone components)
- TypeScript strict
- SCSS
- Angular Router
- Signals para estado local (carrito)

## Estructura
```
src/app/
  core/
    models/
    services/
    constants/
  shared/
    components/
    ui/
  features/
    home/ services/ team/ booking/ shop/ cart/ checkout/ contact/ faq/ policies/
  layouts/
```

## Ejecutar local
```bash
npm install
npm start
```

## Build de producción
```bash
npm run build:prod
```

## Deploy en GitHub Pages (repo actual)
Este proyecto está configurado para el repo:

- `https://github.com/OscarKovaky/bri-barberia`
- URL esperada en Pages: `https://oscarkovaky.github.io/bri-barberia/`

Configuración ya aplicada:
- `baseHref: /bri-barberia/` en `angular.json`.
- Workflow de Pages en `.github/workflows/deploy-pages.yml`.

Pasos:
1. Haz push a la rama principal (`main` o `master`).
2. En GitHub, ve a **Settings → Pages**.
3. En **Build and deployment**, selecciona **Source: GitHub Actions**.
4. Espera a que termine el workflow **Deploy Angular to GitHub Pages**.

## SPA routing en hosting estático
- Se incluye `src/404.html` para redireccionar rutas profundas a la raíz de la app en Pages.
- El workflow también copia `index.html` como `404.html` en la salida final para reforzar fallback.

## Features implementadas
- Landing premium con hero, promociones, equipo, reseñas, galería, FAQ y contacto
- Catálogo de servicios con filtros
- Página de equipo
- Reserva dummy con validaciones + folio ficticio
- Tienda dummy con búsqueda/filtros + detalle de producto
- Carrito dummy con persistencia en localStorage
- Checkout dummy con formulario y confirmación
- Contacto, FAQ y políticas

## Escalabilidad a backend real
- Modelos tipados en `core/models`
- Servicios desacoplados por dominio (`services-data`, `products-data`, `cart`, `booking`)
- Fácil sustitución de mocks por API calls
