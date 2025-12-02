# ESP32 - APP FRONTEND 

## Angular Version
19.2.17

### Descripción del Proyecto
Este proyecto esta hecho para poder mostrar los datos de la API antes realizada del proyecto **Rest Telemetry** que es realizo
con servidor en **Node js** y tambien con **C** para poder enviar y guardar datos de lecturas del sensor **DHT22**.


### Instalación

1. Clona el repositorio:
```bash
git clone "Link del este repositorio"
```

2. Instala dependencias
```bash
npm install
```

3. Inicia el servidor
```bash
ng serve -o
```

## Tecnologías utilizadas

### Frontend
- Angular
- TypeScript
- PrimeNG
- Bootstrap
- CSS

### Backend (API)
- Node.js + Express
- MongoDB + Mongoose

### Dispositivo
- ESP32
- Lenguaje C
- Sensor DHT22

## Estructura del Proyecto
```
├── public
│   ├── icons
│   ├── favicon.ico
│   └── manifest.webmanifest
├── src
│   ├── app
│   │   ├── core
│   │   │   ├── auth
│   │   │   │   ├── auth.guard.spec.ts
│   │   │   │   ├── auth.guard.ts
│   │   │   │   ├── auth.interceptor.ts
│   │   │   │   ├── auth.service.spec.ts
│   │   │   │   └── auth.service.ts
│   │   │   └── graph
│   │   │       ├── graphs.service.spec.ts
│   │   │       └── graphs.service.ts
│   │   ├── pages
│   │   │   ├── auth
│   │   │   │   ├── login
│   │   │   │   │   ├── login.component.css
│   │   │   │   │   ├── login.component.html
│   │   │   │   │   ├── login.component.spec.ts
│   │   │   │   │   └── login.component.ts
│   │   │   │   ├── register
│   │   │   │   │   ├── register.component.css
│   │   │   │   │   ├── register.component.html
│   │   │   │   │   ├── register.component.spec.ts
│   │   │   │   │   └── register.component.ts
│   │   │   │   └── auth.routes.ts
│   │   │   └── graphs
│   │   │       ├── home
│   │   │       │   ├── home.component.css
│   │   │       │   ├── home.component.html
│   │   │       │   ├── home.component.spec.ts
│   │   │       │   └── home.component.ts
│   │   │       ├── telemetry
│   │   │       │   ├── telemetry.component.css
│   │   │       │   ├── telemetry.component.html
│   │   │       │   ├── telemetry.component.spec.ts
│   │   │       │   └── telemetry.component.ts
│   │   │       ├── weather
│   │   │       │   ├── weather.component.css
│   │   │       │   ├── weather.component.html
│   │   │       │   ├── weather.component.spec.ts
│   │   │       │   └── weather.component.ts
│   │   │       └── graphs.routes.ts
│   │   ├── shared
│   │   │   ├── components
│   │   │   │   ├── footer
│   │   │   │   │   ├── footer.component.css
│   │   │   │   │   ├── footer.component.html
│   │   │   │   │   ├── footer.component.spec.ts
│   │   │   │   │   └── footer.component.ts
│   │   │   │   └── sidebar
│   │   │   │       ├── sidebar.component.css
│   │   │   │       ├── sidebar.component.html
│   │   │   │       ├── sidebar.component.spec.ts
│   │   │   │       └── sidebar.component.ts
│   │   │   └── shared.module.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── .editorconfig
├── .gitignore
├── README.md
├── angular.json
├── ngsw-config.json
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```