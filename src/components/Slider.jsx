import React, { useState, useEffect } from 'react'
import { Card } from './Card'
import './css/slider.css'

export function Slider({ category }) {
    const [products, setProducts] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => setProducts(data.slice(0, 10)))
        .catch(error => console.error('Error fetching products:', error))
    }, [category])

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % products.length)
      }, 3000)
      return () => clearInterval(interval)
    }, [products])

    return (
      <div className="slider-container">
        <div className="slider" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
          {products.concat(products.slice(0, 4)).map((product, index) => (
            <div key={index} className="slider-item">
              <Card
                imageUrl={product.image}
                title={product.title}
                price={`${product.price}`}
              />
            </div>
          ))}
        </div>
      </div>
    )
}