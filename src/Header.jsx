import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './header.css'

export function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/cerca/${searchQuery}`)
    }
  }

  return (
    <header className="ecommerce-header">
      <div className="header-container">
        <div className="logo">
          <img src="public/vite.svg" alt="Logo E-commerce" />
        </div>
        <nav className="main-menu">
          <a href="/">Home</a>
          <a href="/prodotti">Prodotti</a>
          <a href="/elettronica">Elettronica</a>
          <a href="/gioielli">Gioielleria</a>
          <a href="/uomo">Moda Uomo</a>
          <a href="/donna">Moda Donna</a>
        </nav>
        <form className="search-bar" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Cerca prodotti..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Cerca</button>
        </form>
        <div className="header-actions">
          <div className="social-icons">
            <a href="#" className="social-icon facebook"></a>
            <a href="#" className="social-icon instagram"></a>
            <a href="#" className="social-icon twitter"></a>
          </div>
          <div className="cart">
            <a href="/carrello" className="cart-icon">
              <span className="cart-count">0</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}