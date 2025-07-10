## vitexperiments

This repository contains a simple React frontend application built with [⚡Vite](https://vite.dev/). It serves as a personal reference for client-side React coding patterns and conventions, particularly for projects that use **React Router**.

The folder structure, setup, and general coding style reflect how I like to [organize TypeScript React apps](/docs/CODING_STYLE.md) built with Vite, or for any React projects that use **React Router** for routing (including the retired [🪦Create-React-App](https://create-react-app.dev/docs/getting-started/) (CRA)).

### Live Demos

- **Production:** https://weaponsforge.github.io/vitexperiments/
- **Development:** https://vitexperiments.web.app/

### Table of Contents

<details>
<summary>Click to expand the table of contents</summary>

- [Requirements](#-requirements)
- [Installation](#️-installation)
- [Usage](#-usage)
- [Alternate Usage (Docker)](#alternate-usage)
- [Core Libraries](#-core-librariesframeworks)
- [Available Scripts](#-available-scripts)
- [Docker Scripts](#-docker-scripts)
- [Deployment](#-deployment)
- [Usage with GitHub Actions](#-usage-with-github-actions)

</details>

## 📋 Requirements

1. NodeJS LTS v20 or higher
   ```
   Recommended:
   node: v20.15.0
   npm: v10.7.0
   ```

2. (Optional) Docker

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](/CONTRIBUTING.md) and the [CODING STYLE](/docs/CODING_STYLE.md) for guidelines.

## 📦 Core Libraries/Frameworks

<details>

<summary>This sample app uses the following libraries and frameworks.</summary>

#### Core Libraries

| Library | Version | Description |
| --- | --- | --- |
| [Vite](https://www.npmjs.com/package/vite) | `v6.3.1` | Frontend build tool for scaffolding the React app, running it in development mode and bundling the static website output |
| [React](https://www.npmjs.com/package/react) | `v19` | Library for creating reusable/composable and interactive components |
| [react-router-dom](https://www.npmjs.com/package/react-router-dom) | `v7.6.3` | Manages client-side routing for general React apps |
| [TypeScript](https://www.npmjs.com/package/typescript) | `v5.7.2` | For creating type definitions |
| [Tailwind CSS](https://www.npmjs.com/package/tailwindcss) | `v4.1.1` | Generic, composable utility classes for CSS styling |

#### CSS Styling

Styling with Tailwind CSS

| Library | Version | Description |
| --- | --- | --- |
| [clsx](https://www.npmjs.com/package/clsx) | `v2.1.1` | Utility for constructing class name strings conditionally
| [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) | `v3.3.1` | Utility function to efficiently merge Tailwind CSS classes in JS without style conflicts.
| [tw-animate-css](https://www.npmjs.com/package/tw-animate-css) | `v1.3.5` | A pure CSS solution for adding animation capabilities using the new Tailwind v4 CSS-first approach

#### Code Linting

| Library | Version | Description |
| --- | --- | --- |
| [ESlint](https://www.npmjs.com/package/eslint) | `v9.22.0` | Enforces coding formats, rules and preferences

#### Data Fetching

| Library | Version | Description |
| --- | --- | --- |
| [SWR](https://www.npmjs.com/package/swr) | `v2.3.4` | React hooks library for data fetching that provides `isLoading`, `error` and fetched data states
| [Axios](https://www.npmjs.com/package/axios) | `v1.10.0` | Promise-based HTTP data fetching library

#### State and Data Management

| Library | Version | Description |
| --- | --- | --- |
| [Zustand](https://www.npmjs.com/package/zustand) | `v5.0.6` | Minimal (no boilerplates), fast, scalable and reactive state management library that uses a pub/sub mechanism instead of React context to manage state and trigger re-renders.
| [Zod](https://www.npmjs.com/package/zod) | `v3.25.75` | Scalable Typescript-first data validation using schemas
| [React Hook Form](https://www.npmjs.com/package/react-hook-form) | `v7.60.0` | React hooks for managing form submission data validation


</details>

## 🛠️ Installation

1. Clone the repository.<br>
   ```sh
   git clone https://github.com/weaponsforge/vitexperiments.git
   ```

2. Install dependencies.<br>
   ```sh
   npm install
   ```

3. **When using Docker on a `Windows OS` host**: (Optional) Create a `.env` file from the `.env.example` file and uncomment/enable the `CHOKIDAR_USEPOLLING` and `CHOKIDAR_INTERVAL` variables to enable hot reload.

   | Variable Name | Description |
   | --- | --- |
   | VITE_PUBLIC_BASE_PATH | Root directory path name that Vite uses for assets, media and client-side routing for the app.<br>**Exclude** this in the `.env` file when **working on development mode in localhost**.<br>Set its value to the sub-directory name where the exported Vite app is to be deployed, i.e. `/<YOUR_REPOSITORY_NAME>/` when deploying on a repository (sub-directory) of a root GitHub Pages site, i.e, on<br>`https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>` |
   | CHOKIDAR_USEPOLLING | Enables hot reload on `nodemon` running inside Docker containers on a Windows host. Set it to true if running Docker Desktop with WSL2 on a Windows OS. |
   | CHOKIDAR_INTERVAL | Chokidar polling interval. Set it along with `CHOKIDAR_USEPOLLING=true` if running Docker Desktop with WSL2 on a Windows OS. The default value is `1000`. |

## 📖 Usage

Using Node

1. Run the React app for local development.<br>
   ```sh
   npm run dev
   ```

2. Launch the local app website in a web browser at:<br>
   ```
   http://localhost:3000
   ```

3. Edit the source code and wait for changes to display in the web browser.

4. To build the React app, run:<br>
   ```sh
   npm run build
   ```

   This command exports the build artifacts to the `/app/dist` directory.

5. Run the lint and build scripts to ensure new code updates follow this repository's coding conventions.<br>
   Lint
   ```sh
   # Checks and fixes lint errors
   npm run lint:fix
   ```

   Build
   ```sh
   # Runs tsc for checking type errors before building the app
   npm run build
   ```

   > **INFO:** This project uses **ESLint** for code linting and formatting. Rules are defined in `eslint.config.js`.

## ⚡Alternate Usage

<details>
<summary>Using Docker</summary>
<br>

Usage with Docker is an alternate option to using Node directly from the [Usage](#-usage) section.

> **IMPORTANT**
> Ensure that port `3000` is free before proceeding.

### Build the Development Docker Image

1. Set up the environment variables for the `/app` directory. Refer to the [Installation](#️-installation) section **# 3** for more information.

2. Build the image for local development.<br>
   ```sh
   docker compose build --no-cache
   ```

   > **INFO:** Do this step only once during initial installation. Re-run this step if there will be changes to the Dockerfile or after installing new Node libraries.

3. Run the container for local development.<br>
   ```sh
   docker compose up
   ```

4. Launch the local app website in a web browser at:<br>
   ```
   http://localhost:3000
   ```

5. Edit the source code and wait for changes to display in the web browser.

6. To build the React app:<br>
   - Ensure the container is running.
   - Open another command terminal and run:<br>
      ```sh
      docker run exec -it weaponsforge-vitexperiments npm run docker:build
      ```

      This command exports the build artifacts to the `/app/dist` directory.

7. To run tyests:<br>
   ```sh
   # More Docker NPM scripts are available
   docker run exec -it weaponsforge-vitexperiments npm test
   ```

8. (Alternate) build command without using Docker compose:<br>
   ```
   # Using PowerShell
   docker run -it -v ${pwd}/app:/opt/app -v /opt/app/node_modules --env-file ./app/.env --rm weaponsforge/vitexperiments npm run docker:build
   ```

9. To stop the Docker container:<br>
   ```sh
   docker compose down
   ```

### Use Pre-Built Development Docker Image

This project deploys the latest **development** Docker image to Docker Hub on the creation of new Release/Tags. It is available at:

https://hub.docker.com/r/weaponsforge/vitexperiments

1. Pull the pre-built development Docker image using any of the two (2) options:
   - Open a terminal and run:<br>
      ```sh
      docker pull weaponsforge/vitexperiments
      ```

   - Navigate to the `/vitexperiments` root project directory, then run:<br>
      ```sh
      docker compose pull
      ```

2. Run the development image. Follow the steps under [Build the Development Docker Image](#build-the-development-docker-image) starting from **step #3**.

</details>
<br>

## 📜 Available Scripts

These Node scripts, compatible with running in Node and Docker, run Vite React processes for local development.

### `npm run dev`

- Runs the app for local development.
- This script has a counterpart in the [🐳 Docker Scripts](#-docker-scripts) section (`npm run docker:dev`) for running in a Docker container.

### `npm run build`

- Runs type-checking with `tsc` then proceeds to build or bundle the React app into optimized static assets for deployment into the `/app/dist` directory.
- This script has a counterpart in the [🐳 Docker Scripts](#-docker-scripts) section (`npm run docker:build`) for optimally building the app from a Docker container.

### `npm run lint`

Lints TypeScript source codes and checks for linting errors.

### `npm run lint:fix`

Fixes lint errors.

### `npm run preview`

- Displays the React app build output at `http://localhost:4173/`
- It requires running `npm run build` first
- (Currently not supported with the Docker setup)

### `npm test`

- Runs test scripts defined in `*.test.ts` files with coverage.
- Generates a vitest test report into the `/html` directory.
- Run npm `run report:view` to preview the generated report.

### `npm run test:watch`

Runs vitest in watch mode, watching file changes and errors to files linked with `*.test.ts` files.

### `npm run test:ui`

- Runs test scripts defined in `*.test.ts` files with coverage.
- Spawns a local report-like website showing each test's real-time status and coverage using vitest-ui accessible at `http://localhost:4173/`
- This script is similar to the vitest `npm run test:watch` script that watches for changes in the `*.test.ts` files but displays the result logs and coverage details in the local website rather than the command line.

### `npm run report:view`

> **NOTE:** This script requires running `npm test` first to generate a test report into the `/html` directory

- Spins up a local web server accessible at `http://localhost:4174/`
- Serves the website contents of a test report from the **/html** directory

<br>

## 🐳 Docker Scripts

These scripts allow optional Docker-related processes, such as enabling file watching in Docker containers running in Windows WSL2 and others.

> [!TIP]
> Scripts with a `":win"` suffix indicate compatibility for Windows Docker running in WSL2.

<details>
<summary>Click to expand the list of available Docker-compatible Node scripts.</summary>

<br>

> 💡 **INFO:** Ensure the Docker container is running (refer to "Running the container" in [Alternate Usage](#alternate-usage)).

- **Run an NPM script using Docker compose**<br>
   `docker exec -it weaponsforge-vitexperiments <AVAILABLE_SCRIPT_OR_DOCKER_SCRIPT>`

- **Run an NPM script using only Docker**<br>
```sh
docker run -it -v ${pwd}/app:/opt/app -v /opt/app/node_modules --rm weaponsforge/vitexperiments <AVAILABLE_SCRIPT_OR_DOCKER_SCRIPT>
```

### `npm run docker:dev`

Runs the React app for local development within a Docker container by making the container's Vite dev server accessible to the host using the `--host` flag.

### `npm run docker:build`

Builds the React app within a Docker container into the `/app/dist` directory after setting the `NODE_ENV=production` environment variable.

```sh
docker run -it -v ${pwd}/app:/opt/app -v /opt/app/node_modules --env-file ./app/.env --rm weaponsforge/vitexperiments npm run docker:build
```

### `npm run docker:test:ui`

- Docker command counterpart of the `npm run test:ui` script, compatible with containers running in **Linux OS**.
- Runs test scripts defined in `*.test.ts` files in watch mode with coverage from a container.
- Spawns a local report-like website showing each test's real-time status and coverage using vitest-ui accessible at `http://localhost:51204/__vitest__/`.

### `npm run docker:report:view`

> **NOTE:** This script requires running `npm test` first to generate a test report into the `/html` directory

- Docker command counterpart of the `npm run report:view` script.
- Spins up a local web server accessible at `http://localhost:4174/`
- Serves the website contents of a test report from the host's **/html** directory

### `npm run docker:test:watch:win`

- Docker counterpart of the `npm test:watch` script for running in **Windows OS** hosts.
- Sets the `--no-open` flag when running vitest in watch mode inside Docker containers running in **Windows WSL2**, preventing the `"Error: spawn xdg-open ENOENT"` terminal error.
- Watches file changes and errors to files linked with `*.test.ts` files.

### `npm run docker:test:ui:win`

- Docker counterpart of the `npm run test:ui` script for running in **Windows OS** hosts.
- Sets the `--no-open` flag when running vitest in watch mode inside Docker containers running in **Windows WSL2**, preventing the `"Error: spawn xdg-open ENOENT"` terminal error.
- Runs test scripts defined in `*.test.ts` files in watch mode with coverage
- Spawns a local report-like website showing each test's real-time status and coverage using vitest-ui accessible at `http://localhost:51204/__vitest__/`.

</details>
<br>

## 🛫 Deployment

### Firebase Hosting

<details>
<summary>Follow these steps for manually deploying the static site to Firebase Hosting.</summary>

#### Requirements

1. Firebase project with Firebase Hosting pre-configured and set-up.
2. Firebase CLI (Firebase Admin)
   - Installed preferrably using the `"npm install -g firebase-tools"` command.

#### Steps

1. Open the `.firebaserc` file in the client directory.
2. Replace the `"<FIREBASE_PROJECT>"` key with a target Firebase project.
3. Replace the `"<FIREBASE_HOSTING>"` key with a target Firebase Hosting name under the `"<FIREBASE_PROJECT>"`.
4. Build the static site.<br>
`npm run build`
5. Login to your Firebase account using the Firebase CLI.<br>
`firebase login`
6. Deploy the static site.<br>
`firebase deploy --only hosting`

</details>
<br>

## 🚀 Usage with GitHub Actions

### A. Development Deployment

#### Deployment to Firebase Hosting

This repository deploys the latest **development** website to the Firebase Hosting website at https://vitexperiments.web.app/ **on changes to the `dev` branch** (from push or PR merges). Supply the following **Firebase-related GitHub Secrets** to enable deployment to Firebase Hosting. It requires a Firebase Account and an activated Firebase Hosting target website.

### B. Production Deployment

#### Deployment to GitHub Pages

This repository deploys the latest website to the GitHub Pages website of this repository at https://weaponsforge.github.io/vitexperiments/ **on the creation of new Tags/Releases from the `main` branch** with GitHub Actions. Supply the `VITE_PUBLIC_BASE_PATH` GitHub Secret to enable deployment to GitHub Pages. It also requires **GitHub Pages enabled** for this repository and a **`gh-pages` branch**.

> [!IMPORTANT]
> Add the `VITE_PUBLIC_BASE_PATH` environment variable described in the [Installation - step # 3](#️-installation) section to GitHub Secrets.

#### Deployment to Docker Hub

This repository deploys the latest development Docker image `weaponsforge/vitexperiments` to Docker Hub on the **creation of new Tags/Releases from the `main` branch** with GitHub Actions. Supply the following GitHub Secrets and Variable to enable deployment to Docker Hub. It requires a Docker Hub account.

The Docker Hub image is available at:

https://hub.docker.com/r/weaponsforge/vitexperiments

### GitHub Secrets and Variables

#### GitHub Secrets

| GitHub Secret Name | Description |
| --- | --- |
| DOCKERHUB_USERNAME | Docker Hub username |
| DOCKERHUB_TOKEN | Deploy token for the Docker Hub account |
| FIREBASE_PROJECT | Firebase project ID |
| FIREBASE_HOSTING | Firebase Hosting name under the `FIREBASE_PROJECT` |
| FIREBASE_TOKEN | Firebase CI token used for deploying the React `/app` to Firebase Hosting. This is obtained by signing-in to the Firebase CLI with `"firebase login:ci"`. |
| VITE_PUBLIC_BASE_PATH | Root directory path name that Vite uses for assets, media and client-side routing for the app.<br>eg., `/<YOUR_REPOSITORY_NAME>/` |

#### GitHub Variables

| GitHub Variable Name | Description |
| --- | --- |
| DOCKERHUB_USERNAME | Docker Hub username |

<br>

@weaponsforge<br>
20250430<br>
20250708
