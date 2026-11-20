# VALTHEON — Movie Explorer

A beginner-friendly React movie discovery project.

## Features
- Browse popular movies from TMDB
- Search for movies
- View a movie's details in a simple details panel
- Loading and error messages
- Responsive layout

## Built with
- React
- Vite
- Axios
- CSS

## Getting started

1. Install Node.js (LTS) if it is not already installed.
2. Open this folder in VS Code.
3. Open the terminal and run:

   ```bash
   npm install
   ```

4. Create a file named `.env` in the project root (beside `package.json`).
5. Add your TMDB API key:

   ```env
   VITE_TMDB_API_KEY=YOUR_TMDB_API_KEY_HERE
   ```

   Use your TMDB **API Key (v3 auth)**. Do not publish your `.env` file.

6. Start the project:

   ```bash
   npm run dev
   ```

7. To check the production build:

   ```bash
   npm run build
   ```

## Notes
The project uses the TMDB API, so movie data will appear after a valid API key is added.
This is a small learning project and can be expanded later with routing, pagination, favorites, and more.
