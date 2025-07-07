## vitexperiments

This repository contains a simple React frontend application built with [⚡Vite](https://vite.dev/). It serves as a personal reference for client-side React coding patterns and conventions, particularly for projects that use **React Router**.

The folder structure, setup, and general coding style reflect how I like to [organize TypeScript React apps](/docs/CODING_STYLE.md) built with Vite, or for any React projects that use **React Router** for routing (including the retired [🪦Create-React-App](https://create-react-app.dev/docs/getting-started/) (CRA)).

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

## ⚡Alternate Usage

<details>
<summary>Using Docker</summary>
<br>

> **IMPORTANT**
> Ensure that port `3000` is free before proceeding.

1. Build the image for local development.<br>
   ```sh
   docker compose build --no-cache
   ```

   > **INFO:** Re-run this step if there will be changes to the Dockerfile or after installing new Node libraries.

2. Run the container for local development.<br>
   ```sh
   docker compose up
   ```

3. Launch the local app website in a web browser at:<br>
   ```
   http://localhost:3000
   ```

4. Edit the source code and wait for changes to display in the web browser.

5. To build the React app:<br>
   - Ensure the container is running.
   - Open another command terminal and run:<br>
      ```sh
      docker run exec -it weaponsforge-vitexperiments npm run docker:build
      ```

      This command exports the build artifacts to the `/app/dist` directory.

6. (Alternate) build command without using Docker compose:<br>
   ```sh
   docker run -it -v ${pwd}/app:/opt/app -v /opt/app/node_modules --rm weaponsforge/vitexperiments npm run docker:build
   ```

6. To stop the Docker container:<br>
   ```sh
   docker compose down
   ```

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

<br>

## 🐳 Docker Scripts

These Node scripts enable processing the local development Vite-React app inside a Docker container.

<details>
<summary>Click to expand the list of available Docker-compatible Node scripts.</summary>

### `npm run docker:dev`

Runs the React app for local development within a Docker container by making the container's Vite dev server accessible to the host using the `--host` flag.

### `npm run docker:build`

Builds the React app within a Docker container into the `/app/dist` directory after setting the `NODE_ENV=production` environment variable.

```sh
docker run -it -v ${pwd}/app:/opt/app -v /opt/app/node_modules --rm weaponsforge/vitexperiments npm run build
```

</details>
<br>

## Deployment

### Firebase Hosting

Follow these steps for manually deploying the static site to Firebase Hosting.

#### Requirements

1. Firebase project with Firebase Hosting pre-configured and set-up.
2. Firebase CLI (Firebase Admin)
   - Installed preferrably using the "npm install -g firebase-tools" command.

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

## Usage with GitHub Actions

Add the following GitHub Actions "Secrets" for deploying the React app to the development environment (Firebase Hosting) on push or merge of PRs to the `dev` branch.

| Secret Name | Description |
| --- | --- |
| FIREBASE_PROJECT | Firebase project ID |
| FIREBASE_HOSTING | Firebase Hosting name under the `FIREBASE_PROJECT` |
| FIREBASE_TOKEN | Firebase CI token used for deploying the React `/app` to Firebase Hosting. This is obtained by signing-in to the Firebase CLI with `"firebase login:ci"`. |

@weaponsforge<br>
20250430
20250708
