import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Vibe coder easter egg
console.log(
  '%c👋 Hey there, fellow developer!',
  'color: #00ffd1; font-size: 16px; font-weight: bold;'
);
console.log(
  '%cThis portfolio was vibe-coded with AI agents ⚡',
  'color: #888; font-size: 12px;'
);
console.log(
  '%c→ Python · PostgreSQL · React · Tailwind · Framer Motion',
  'color: #555; font-size: 11px; font-family: monospace;'
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
