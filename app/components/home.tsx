'use client'

import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Beautify</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
          <a href="#">Services</a>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        {/* Text Section */}
        <div className="text-section">
          <h1>
            Enhance <br />
            <span>Your Natural Radiance</span>
          </h1>
          <p>
            Discover our range of beauty products that bring out the best in you. We believe that everyone deserves to feel confident and radiant in their own skin.
          </p>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <Image
            src="/blue-podium-png.webp"
            alt="Beauty Products"
            width={700}
            height={900}
            className="rounded-lg shadow-lg"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
