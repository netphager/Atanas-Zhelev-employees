# pair-employees-app

This is a React project built with Vite, TypeScript, TailwindCSS, and several useful libraries like React Toastify and PapaParse.

## Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn package manager

## Getting Started

### 1. Install dependencies

npm install

2. Run the development server
   Start the app in development mode with hot module replacement:

npm run dev

This will start Vite’s development server. Open http://localhost:5173 in your browser to see the app.

3. Build for production
   To compile the project and build optimized static assets:

npm run build

This runs TypeScript compilation and Vite’s build process.

4. Preview production build
   After building, you can locally preview the production build with:

npm run preview

5. Run linter
   Check for linting errors in your code with:

npm run lint

Project Structure
Uses React 19 with hooks

Styling via TailwindCSS

Uses Vite as the build and dev server

TypeScript configured via tsconfig.json

ESLint with React hooks rules enabled

Testing libraries included but not covered here (@testing-library/react, vitest)

Dependencies
@react-formgen/zod for form generation and validation

papaparse for CSV parsing

react-toastify for toast notifications
