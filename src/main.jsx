import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifLookup } from './gifLookup'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifLookup />
  </StrictMode>
)
