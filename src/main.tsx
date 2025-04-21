
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make sure we have a root element to render into
const rootElement = document.getElementById("root");

if (!rootElement) {
  // In case the root element doesn't exist for some reason, create it
  const newRoot = document.createElement("div");
  newRoot.id = "root";
  document.body.appendChild(newRoot);
}

// Always render the app regardless of URL parameters
createRoot(document.getElementById("root")!).render(<App />);
