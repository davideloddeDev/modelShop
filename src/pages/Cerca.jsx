import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './css/cerca.css'

export function Cerca() {
  const { searchQuery } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const allProducts = await response.json();
        const filteredProducts = allProducts.filter(product =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredProducts);
        console.log('Query di ricerca:', searchQuery);
        console.log('Prodotti filtrati:', filteredProducts);
      } catch (error) {
        console.error('Errore durante il recupero dei prodotti:', error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div className="cerca-container">
      <h1>Risultati della ricerca per: {searchQuery}</h1>
      <div className="search-results">
        {searchResults.length === 0 ? (
          <p>Nessun risultato trovato.</p>
        ) : (
          searchResults.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <h2 className="product-name">{product.title}</h2>
              <p className="product-price">{product.price} €</p>
              <button className="add-to-cart-btn">Aggiungi al carrello</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}