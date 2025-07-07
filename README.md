## vitexperiments

This repository, featuring a simple app that has a sticky **Navigation Menu Bar** and three (3) empty pages (**Home**, **About**, **Login**, and **Contact**) contains random Frontend, CSS, and React experiments using [Vite](https://vite.dev/).

Its folder structure setup and organization will serve as a go-to reference for similar TypeScript React apps created with Vite, or general React apps that use the **React Router** for routing.

### Table of Contents

<details>
<summary>Click to expand the table of contents</summary>

- [Requirements](#-requirements)
- [Installation](#️-installation)
- [Usage](#-usage)
- [Alternate Usage (Docker)](#alternate-usage)
- [Core Libraries](#-core-librariesframeworks)
   - [CSS Styling](#css-styling)
   - [Code Linting](#code-linting)
   - [Data Fetching](#data-fetching)
   - [State and Data Management](#state-and-data-management)
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
| [Zod](https://www.npmjs.com/package/zod) | `v3.25.75` | scalable Typescript-first data validation using schemas
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

</details>
<br>

## 📜 Available Scripts

These Node scripts, compatible with running in Node and Docker, run Vite React processes for local development.

<details>
<summary>Click to expand the list of available Node scripts</summary>

### `npm run dev`

- Runs the app for local development.
- This script has a counterpart in the [🐳 Docker Scripts](#-docker-scripts) section (`npm run docker:dev`) for running in a Docker container.

### `npm run build`

- Builds or bundles the React app into optimized static assets for deployment into the `/app/dist` directory.
- This script has a counterpart in the [🐳 Docker Scripts](#-docker-scripts) section (`npm run docker:build`) for optimally building the app from a Docker container.

### `npm run lint`

Lints TypeScript source codes and checks for linting errors.

### `npm run lint:fix`

Fixes lint errors.

### `npm run preview`

- Displays the React app build output at `http://localhost:4173/`
- It requires running `npm run build` first
- (Currently not supported with the Docker setup)

</details>

## 🐳 Docker Scripts

These Node scripts enable processing the local development Vite-React app inside a Docker container.

<details>
<summary>Click to expand the list of available Docker-compatible Node scripts.</summary>

### `npm run docker:dev`

Runs the React app for local development within a Docker container by making the container's Vite dev server accessible to the host using the `--host` flag.

### `npm run docker:build`

Builds the React app within a Docker container into the `/app/dist` directory after setting the `NODE_ENV=production` environment variable.

</details>
<br>

@weaponsforge<br>
20250430
