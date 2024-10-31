import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/* Lets us use fonts from google fonts */

import "@fontsource/outfit"
import "@fontsource/roboto"
import "@fontsource/ubuntu"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
