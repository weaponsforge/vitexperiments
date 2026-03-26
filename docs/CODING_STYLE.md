## Coding Style

This document outlines the general React coding styles and guidelines for this repository, specifically geared towards Vite, React, and Tailwind CSS.

### Table of Contents

- [Project Folder Structure](#-project-folder-structure)
- [Coding Practices and Guidelines](#-coding-practices-and-guidelines)
   - [General Coding Guidelines](#-general-coding-guidelines)
   - [React Components](#️-react-components)
   - [Rendering Optimization](#-rendering-optimization)
   - [Code Documentation](#-code-documentation)
   - [Linting and Formatting](#-linting-and-formatting)
   - [Use of External Libraries](#-use-of-external-libraries)
   - [Testing](#-testing)

## 📚 Project Folder Structure

It follows the directory structure within the `/app` directory:

> [!NOTE]
> 📂 dist<br>
> 📂 public<br>
> └─ 📂 images<br>
> └─ 📂 icons<br>
> └─ 📂 data<br>
> └─── 📄 someData.json<br>
> └─── 📄 otherData.txt<br>
> └─── ...<br>
> └─ 📄 favicon.ico<br>
> └─ ...<br>
> 📂 src<br>
> └─ 📂 assets<br>
> └─── 📂 fonts<br>
> └─── 📂 images<br>
> └─── 📂 data<br>
> └───── 📄 menuItems.json<br>
> └───── ...<br>
> └─ 📂 components<br>
> └─── 📂 layout<br>
> └─── 📂 ui<br>
> └─ 📂 features<br>
> └─── 📂 FeatureOne<br>
> └───── 📂 hooks<br>
> └───── 📄 FeatureOne.tsx<br>
> └───── 📄 SubComponent.tsx<br>
> └─── 📂 FeatureTwo<br>
> └───── 📄 FeatureTwo.tsx<br>
> └─── 📄 FeatureThree.tsx<br>
> └─── ...<br>
> └─── 📄 index.ts<br>
> └─ 📂 lib<br>
> └─── 📂 config<br>
> └───── 📄 setupTests.ts<br>
> └─── 📂 hooks<br>
> └─── 📂 schemas<br>
> └───── 📄 User.schema.ts<br>
> └─── 📂 services<br>
> └───── 📄 apiRoutes.tsx<br>
> └───── 📄 discussions.ts<br>
> └───── ...<br>
> └─── 📂 store<br>
> └─── 📂 utils<br>
> └─ 📂 styles<br>
> └─── 📄 app.css<br>
> └─── 📄 fonts.css<br>
> └─── 📄 typography.css<br>
> └─── 📄 ...<br>
> └─── 📄 index.css<br>
> └─ 📄 .env<br>
> └─ 📄 .gitignore<br>
> └─ 📄 .dockerignore<br>
> └─ 📄 Dockerfile<br>
> └─ 📄 index.html<br>
> └─ 📄 package.json<br>
> └─ 📄 package-lock.json<br>
> └─ 📄 eslint.config.js<br>
> └─ 📄 vite.config.ts<br>
> └─ 📄 tsconfig.json<br>
> └─ 📄 App.tsx<br>
> └─ 📄 routes.ts<br>
> └─ 📄 ...<br>
> 📄 README.md

### Main Folders and Content

#### 📂 public

This folder contains publicly accessible media assets and data that can be served over HTTP.

- `/images` — Stores image files such as .png, .jpg, .svg, and other common formats.
- `/icons` — Contains reusable SVG icons for the app or website interface.
- `/data` — Holds medium-sized data files like text placeholders and structured content used for display or demo purposes.

#### 📂 src/assets

 Contains media and other static assets used directly within the React application.

- `/fonts` — Includes custom font files used in the UI.
- `/images` — Stores image files such as .png, .jpg, .svg, and similar formats.
- `/data` — Holds small-sized, static data such as hardcoded menu items or mock content.

#### 📂 src/components

 Contains general-purpose, reusable React components shared across all `📂 features`.

- `/layout` — Includes layout components that use `<Outlet />` with React Router, as well as full-page layout wrappers that accept `{children}` as props.
- `/ui` — Contains small, reusable UI elements and widgets such as input fields, date pickers, notifications, and similar components.

#### 📂 src/lib

 Contains shared scripts, configurations, and utilities used throughout the app.

- `/config` — Configuration files and setup definitions, such as settings for third-party integrations.
- `/hooks` — Reusable React hooks that can be used across the app (e.g., `useDebounce()`). Also includes hooks used by `📂 components` like ui or layout.
- `/schemas` — `zod` Schemas and other type definitions referenced across more than two (2) files or `📂 features`.
- `/services` — Contains logic for making asynchronous HTTP requests (CRUD operations) to external RESTful APIs.
   - `apiRoutes.ts` — Centralized definitions for all remote API endpoint URLs used in the app.
- `/store` — Contains state management logic (e.g., Zustand or Redux slices and definitions).
- `/utils` — General-purpose utility functions, such as date formatters and other helpers.

#### 📂 src/features

Organizes self-contained features of the app. Each subfolder represents a complete, independent feature composed of related logic and UI components.

- **Co-location** — Each feature folder may include its internal structure such as `/components`, `/hooks`, `/stores`, `/schemas` and `/styles`. Co-location simplifies finding feature-related files as the code base grows larger.

- **Access Rules (Enforced by `no-restricted-imports` ESLint Rule):**
   - **🔒 From outside the `/features` folder**<br>
      Only import feature entry components from the top-level `@/features` path.
      ```typescript
      ✅ import { About, Contact } from "@/features"
      ❌ import About from "@/features/About/About"
      ❌ import About from "../../features/About/About"
      ```
   - **🔒 From inside the `/features` folder**<br>
      Use relative imports when referencing other components, either within the same feature or across features.
      ```typescript
      ❌ import { About, Contact } from "@/features"
      ✅ import About from "../About/About"
       ```

#### 📂 src/styles

Contains generic custom CSS definitions used by the whole app.

- `app.css` — Contains **Tailwind CSS** customizations and other global style overrides.
- `fonts.css` — Defines custom font imports used across the app.
- `typography.css` — Includes global typography styles such as font families, sizes, and weights.
- `index.css` — The main entry point for global styles. It imports **Tailwind CSS** along with `app.css`, `fonts.css`, `typography.css`, and other custom styles.

## 📌 Coding Practices and Guidelines

> [!NOTE]
> The React app follows the [**container-component pattern**](https://www.patterns.dev/react/presentational-container-pattern/) (also known as the container/presentational) pattern, where **logic and data processing are handled in React hooks** (containers) while **components are focused only on rendering UI** (components).

### 📐 General Coding Guidelines

- Use **`LF` (Line Feed)** as the line ending format for all code and other files to ensure consistency across environments and platforms.
- Use **arrow functions** instead of traditional function declarations when defining functions and methods. Only use `function()` definitions for specific cases.
- Follow **camelCase** for naming variables, files, functions/methods and non-component folders.
- Follow **PascalCase** for naming **Zod** schemas, TypeScript `types`, `interfaces`, `enums` and other TypeScript constructs.
- Follow consistent file naming conventions based on content:
   - Use `*.schema.ts` for files containing Zod schemas.
   - Use `*.enum.ts` for files containing only enums.
   - Use `*.interface.ts` for files containing only interfaces.
   - Use `*.types.ts` for files that include a mix of types, interfaces, enums, or other related constructs.
- Always define the **types** of function parameters and return values. Use TypeScript **interfaces** or **types** for generic parameters when applicable.
   - Avoid `any` unless absolutely necessary (prefer `unknown`, `Record`, etc.)
- Implement features using a **co-located structure** within the `📂 src/features` directory.
- Define new **page-level components** by registering them in the `📄 /src/routes.ts` file.
- Aim to keep each source file—whether a React component, hook, or utility script—**under approximately 250 lines of code**. If a file exceeds this size, **consider refactoring** it into smaller, more focused files to improve clarity and maintainability.
- Use **early `return` statements** to exit a hooks or functions as soon as possible when conditions aren't met, to avoid unnecessary processing and to keep the logic clean and efficient.
- Store constant values (e.g., strings or numbers) in **well-named variables** to improve readability and maintainability.
   ```typescript
   ✅ const DISCUSSIONS_API = "/api/v1/discussions"
       fetch(DISCUSSIONS_API)
   ❌ fetch("/api/v1/discussions")
   ```

### ⚛️ React Components

- Use **arrow functions** instead of traditional function declarations when defining React components.
- Name **component files and component folder names** using **PascalCase** (e.g., `FeatureOne.tsx`, `FeatureTwo/FeatureTwo.tsx`).
- Keep React components focused on **UI (JSX/HTML)** with minimal logic. Whenever possible, separate logic and data handling into custom **React hooks** (`"containers"`), and use components solely for rendering.
- Use **TypeScript interfaces or types** to define props instead of PropTypes.
- Make good use of **component composition** — build small, focused components that can be composed together. Avoid defining multiple components in a single file.
- Place **globally reusable UI or layout components** in the `📂 /src/components` (ui or layout) subfolders.

### ⚡ Rendering Optimization

- Avoid complex expressions (e.g., ternary conditions, computations) directly inside the `return()` block of a React component. Instead, compute values beforehand and store them in named variables for cleaner, more readable JSX.
- Use `useMemo()` and `useCallback()` to memoize values and functions where appropriate, especially when passing props to child components or dealing with expensive computations.
- Observe the React profiler from the [React Developer Tools](https://react.dev/learn/react-developer-tools) to determine which component/s may need rendering optimizations from time to time.
- Be mindful of the **final bundle size** generated by the `"npm run build"` command. Optimize components, imports, and dependencies to reduce unnecessary bloat and improve performance.

### 📄 Code Documentation

- Use **JSDoc-style comments** to describe function parameters, return types, and TypeScript type or interface definitions.
- Add **minimal but meaningful inline comments** where necessary to clarify intent, especially for complex or non-obvious logic.
- Use **descriptive and self-explanatory variable names** to reduce the need for excessive comments and improve overall code readability.

### 🧹 Linting and Formatting

- Linting is handled by **ESLint**, configured via `eslint.config.js`.
- All code should pass `"npm run lint"` and `"npm run build"` before commit.

### 📦 Use of External Libraries

- Strive to **minimize external dependencies**, especially for simple or easily implementable functionality (e.g., a function that sums two numbers).
- Only use third-party Node libraries when **truly necessary**—for example, when a library:
   - Provides functionality that would be complex or time-consuming to build from scratch
   - Is used frequently across the app
   - Helps avoid "reinventing the wheel" for heavy processing tasks
- Before adding a library, consider the following 🟢 green flags:
   - It comes from a **credible author or organization**, with an active and trustworthy GitHub repository
   - It has **high usage** and community trust (e.g., ~100K+ downloads on the NPM registry)
   - It has **small and lightweight footprint** (eg., about ~300KB-2MB unpacked) or if it supports **tree-shaking**.
   - The source code is **open, transparent, and actively maintained** (eg., few open GitHub Issues or PRs)
   - Even if not actively maintained, the library still **aligns with your needs** and is simple enough to extend or adapt for custom use (e.g., a JavaScript `class` that can be easily refactored or subclassed (`extend`) for custom use)

### 🧪 Testing

> [!NOTE]
> _Testing isn't a major focus for this starter project yet, but is intended to use **Vitest** and **React Testing Library** for future feature-level tests._

- Place test files co-located with the component, hook, or script they test.
- Name test files to match the target module, using the suffix: `*.test.ts` or `*.test.tsx`.
   > **Example:** Button.tsx → Button.test.tsx
- For now, **selectively write tests** for critical or global components, features, or business logic as needed.
- Aim for E2E tests at the post-deployment stage.

@weaponsforge<br>
20250708
