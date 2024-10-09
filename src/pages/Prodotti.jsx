import React, { useState, useEffect } from 'react'
import { Card } from '../components/Card'
import './css/prodotti.css'

export function Prodotti() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className="prodotti-container">
      <h1>Prodotti</h1>
      <div className="products-grid">
        {products.map(product => (
          <Card
            key={product.id}
            imageUrl={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}