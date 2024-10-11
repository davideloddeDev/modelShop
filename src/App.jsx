import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Prodotti } from './pages/Prodotti'
import { Cerca } from './pages/Cerca'
import './App.css'
import { Footer } from './Footer'
import { Header } from './Header'
import { CategoryProducts } from './pages/CategoryProducts'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prodotti" element={<Prodotti />} />
        <Route path="/elettronica" element={<CategoryProducts categoria="electronics" />} />
        <Route path="/gioielli" element={<CategoryProducts categoria="jewelery" />} />
        <Route path="/uomo" element={<CategoryProducts categoria="men's clothing" />} />
        <Route path="/donna" element={<CategoryProducts categoria="women's clothing" />} />
        <Route path="/cerca/:searchQuery" element={<Cerca />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
