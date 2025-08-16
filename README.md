# Character Selection & Detail Viewer - CoA: Tinh Thể Atlan

This is a web application that allows players to select a character and view detailed information for each character in the game CoA: Tinh Thể Atlan. The interface is modern, smooth, and easily extensible for new events or game versions.

### Technologies Used
- **Next.js**: React framework for server-side rendering and routing
- **Zustand**: Lightweight state management for React
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **json-server**: Mock REST API for serving character data

## Features
- Browse and select characters
- View detailed character information
- Responsive UI with Tailwind CSS
- Global state management with Zustand
- Mock API powered by JSON Server

## Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd selectinfor-character-coaatlan
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Run the mock API server
Create a `db.json` file in the project root with your character data, then start json-server:
```bash
npx json-server --watch db.json --port 3001
```

### 4. Start the development server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure
- `/app` - Next.js app directory (pages, layouts, components)
- `/public` - Static assets
- `/db.json` - Mock data for json-server

## Customization
- Update `db.json` to add or modify character data.
- Edit components in `/app` to change UI or logic.

## Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [TailwindCSS Documentation](https://tailwindcss.com/docs/installation)
- [json-server Documentation](https://github.com/typicode/json-server)
