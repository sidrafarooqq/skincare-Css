

'use client'
import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>
          <i>
            About Us
            <br />
            Welcome to our skincare haven, where beauty meets science! Our mission is to empower individuals to embrace their natural beauty through effective and gentle skincare solutions. We believe that healthy skin is the foundation of confidence, and we are dedicated to providing high-quality products that cater to all skin types.
          </i>
        </h1>
      </div>

      <div className="image-container">
        <Image
          src="/istockphoto-png.jpg"
          alt="A collection of skincare products on display"
          width={500}
          height={500}
          className="image"
        />
        
        <Image
          src="/blue-podium-png.webp"
          alt="A skincare product on a podium"
          width={500}
          height={500}
          className="image"
        />
      </div>
    </div>
  )
}

export default About