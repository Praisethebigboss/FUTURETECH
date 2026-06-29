# Contributing to FutureTech

Thank you for considering contributing! Here's how to get started.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/FUTURETECH.git
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file (see `.env.example`) with your Firebase credentials
5. Start the dev server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── assets/          # Images, videos, icons
├── components/
│   ├── form/        # Form components
│   ├── layouts/     # NavBar, Footer, Headers, Main layout
│   ├── pictures/    # Picture/profile components
│   └── ui/          # Reusable UI components (buttons, cards, etc.)
├── config/          # Firebase, Auth, Profile, Tab contexts
└── pages/           # Route page components
```

## Making Changes

1. Create a branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes
3. Run the build to verify no errors:
   ```bash
   npm run build
   ```
4. Commit and push:
   ```bash
   git add .
   git commit -m "feat: describe your change"
   git push -u origin feature/your-feature-name
   ```
5. Open a Pull Request on GitHub

## Coding Guidelines

- Follow existing code style (React functional components, Tailwind CSS)
- No inline comments unless the logic is non-obvious
- Use meaningful variable names
- Test your changes with `npm run build` before submitting

## Bug Reports

Open an issue at https://github.com/Praisethebigboss/FUTURETECH/issues
