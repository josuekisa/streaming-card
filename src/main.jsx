import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MovieCard from './components/MovieCard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <MovieCard/>
  </StrictMode>,
)
