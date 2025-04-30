
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Wait for DOM to be fully loaded before rendering
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    createRoot(rootElement).render(<App />);
  } else {
    console.error("Failed to find the root element. Make sure there is a div with id='root' in your HTML file.");
  }
});
