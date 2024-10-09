import React from 'react'
import './header.css'

export function Header() {
  return (
    <header className="ecommerce-header">
      <div className="header-container">
        <div className="logo">
          <img src="public/vite.svg" alt="Logo E-commerce" />
        </div>
        <nav className="main-menu">
          <a href="/">Home</a>
          <a href="/prodotti">Prodotti</a>
          <a href="/categorie">Categorie</a>
          <a href="/offerte">Offerte</a>
          <a href="/contatti">Contatti</a>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Cerca prodotti..." />
          <button type="submit">Cerca</button>
        </div>
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