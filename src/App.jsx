import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Prodotti } from './pages/Prodotti'
import { Categorie } from './pages/Categorie'
import { Offerte } from './pages/Offerte'
import { Contatti } from './pages/Contatti'
import { Cerca } from './pages/Cerca'
import './App.css'
import { Footer } from './Footer'
import { Header } from './Header'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prodotti" element={<Prodotti />} />
        <Route path="/categorie" element={<Categorie />} />
        <Route path="/offerte" element={<Offerte />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/cerca" element={<Cerca />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
