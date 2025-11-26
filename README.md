# Data Telemetry

## Angular Version
This project was generated using Angular CLI version `19.2.17`
## Node Version
This project was generated using Node version `20.19.5`

## Development server

To start a local development server, run:

```bash
ng serve
```
```bash
ng serve -o
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

# File Tree: Data Telemetry


```
├── public
│   ├── icons
│   │   ├── icon-128x128.png
│   │   ├── icon-144x144.png
│   │   ├── icon-152x152.png
│   │   ├── icon-192x192.png
│   │   ├── icon-384x384.png
│   │   ├── icon-512x512.png
│   │   ├── icon-72x72.png
│   │   └── icon-96x96.png
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
│   │   │   |
│   │   │   └── graphs
│   │   │       ├── telemetry
│   │   │       │   ├── telemetry.component.css
│   │   │       │   ├── telemetry.component.html
│   │   │       │   ├── telemetry.component.spec.ts
│   │   │       │   └── telemetry.component.ts
│   │   │       └── weather
│   │   │           ├── weather.component.css
│   │   │           ├── weather.component.html
│   │   │           ├── weather.component.spec.ts
│   │   │           └── weather.component.ts
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
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── .editorconfig
├── .firebaserc
├── .gitignore
├── README.md
├── angular.json
├── firebase.json
├── ngsw-config.json
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```