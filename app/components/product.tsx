'use client'

import React from 'react';

const PremiumProducts = () => {
  return (
    <div className="premium-products-container">
      <div className="premium-products-card">
        <div className="premium-products-content">
          <div className="text-section">
            <h1>Premium Quality Products</h1>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <h2>What&apos;s in it?</h2>
            <ul>
              <li>🌿 Aloe Vera</li>
              <li>🍃 Organic</li>
              <li>💧 Jojoba Extract</li>
            </ul>
          </div>

          <div className="image-section">
            <img
              src="/istockphoto-png.jpg"
              alt="Premium Products"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumProducts;