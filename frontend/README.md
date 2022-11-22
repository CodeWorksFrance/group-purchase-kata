# Frontend

Front part of group-purchase-kata

This project use :
* Vue 3 as front framework
* Vuetify as UI framework
* Vitest as unit test framework
* Vite to set up a development environment

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


## Configuration développement

### variables d'env

En mode developpement ```Vite``` charge automatique le fichier ```.env.development```
Copier le fichier de configuration ```.env.development``` en ```.env.development.local```
afin de pouvoir modifier les variables sans que cela ne soit versionné