import React from 'react';
import './css/card.css';

export function Card({ imageUrl, title, price }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-price">€{price}</p>
    </div>
  );
}
