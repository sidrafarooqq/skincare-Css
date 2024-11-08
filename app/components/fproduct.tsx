'use client'
import React from 'react'
import Image from 'next/image'

const Fproduct = () => {
  return (
    <div className="fproduct-container">
      <div className="text-center">
        <p className='fproduct-title'>
          <b><i> Our featured products </i></b>
        </p>
      </div>
      
      <div className="fproduct-grid">
        {/* Product 1 */}
        <div className="fproduct-item">
          <Image 
            src="/HOBMineral-png.webp" 
            alt="Sun cream" 
            width={200} 
            height={200} 
            className="large"
          />
          <p>
            <i>Sun Cream<br />
            Shield your skin from harmful UV rays with our broad-spectrum sunscreen.</i>
          </p>
        </div>
        
        {/* Product 2 */}
        <div className="fproduct-item">
          <Image 
            src="/630_x_427_png.webp" 
            alt="Brightening cream" 
            width={200} 
            height={200} 
            className="large"
          />
          <p>
            <i>Brightening Cream<br />
            Unlock brighter, more radiant skin with our advanced brightening cream.</i>
          </p>
        </div>

        {/* Product 3 */}
        <div className="fproduct-item">
          <Image 
            src="/images-png.jpeg" 
            alt="Night cream" 
            width={200} 
            height={200} 
            className="large"
          />
          <p>
            <i>Night Cream<br />
            Revitalize your skin overnight with our nourishing night cream.</i>
          </p>
        </div>

        {/* Product 4 */}
        <div className="fproduct-item-small">
          <Image 
            src="/images-ppnnngg.jpeg" 
            alt="Soothing cream" 
            width={150} 
            height={150} 
            className="small"
          />
          <p>
            <i>Soothing Cream<br />
            Soothe and calm dry, irritated skin with our gentle soothing cream.</i>
          </p>
        </div>

        {/* Product 5 */}
        <div className="fproduct-item-small">
          <Image 
            src="/Images-ppnngg.jpeg" 
            alt="Anti-aging cream" 
            width={150} 
            height={150} 
            className="small"
          />
          <p>
            <i>Anti-aging Cream<br />
            Reduce fine lines and wrinkles with our anti-aging cream.</i>
          </p>
        </div>

        {/* Product 6 */}
        <div className="fproduct-item-small">
          <Image 
            src="/iamgess-pngg.jpg" 
            alt="Hydrating cream" 
            width={150} 
            height={150} 
            className="small"
          />
          <p>
            <i>Hydrating Cream<br />
            Quench your skin's thirst with our intense hydrating cream.</i>
          </p>
        </div>
      </div> 
    </div>
  )
}

export default Fproduct
      
