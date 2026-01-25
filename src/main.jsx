import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

/* Lets us use fonts from google fonts */
import "@fontsource/outfit"
import "@fontsource/roboto"
import "@fontsource/ubuntu";
import "@fontsource/poppins";
import "@fontsource/inter";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
