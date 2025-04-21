
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure the document has loaded before attempting to render
document.addEventListener('DOMContentLoaded', () => {
  // Make sure we have a root element to render into
  let rootElement = document.getElementById("root");

  if (!rootElement) {
    // In case the root element doesn't exist for some reason, create it
    console.log("Root element not found, creating one");
    const newRoot = document.createElement("div");
    newRoot.id = "root";
    document.body.appendChild(newRoot);
    rootElement = newRoot;
  }

  // Always render the app regardless of URL parameters
  try {
    createRoot(rootElement).render(<App />);
    console.log("App successfully rendered");
  } catch (error) {
    console.error("Error rendering app:", error);
  }
});

// Add a fallback in case DOMContentLoaded has already fired
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(() => {
    const rootElement = document.getElementById("root");
    if (rootElement && !rootElement.hasChildNodes()) {
      console.log("Late initialization");
      createRoot(rootElement).render(<App />);
    }
  }, 100);
}
