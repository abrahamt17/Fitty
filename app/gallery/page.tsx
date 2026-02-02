'use client'

import Navigation from '@/components/Navigation'
import BackgroundGradients from '@/components/BackgroundGradients'
import PageLoader from '@/components/PageLoader'
import CustomCursor from '@/components/CustomCursor'
import { useEffect } from 'react'

export default function GalleryPage() {
  useEffect(() => {
    const loader = document.getElementById('page-loader')
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hidden')
        setTimeout(() => {
          loader.style.display = 'none'
        }, 500)
      }, 1000)
    }
  }, [])

  return (
    <>
      <PageLoader />
      <CustomCursor />
      <BackgroundGradients />
      <Navigation />
      <main>
        <section className="gallery-hero section">
          <div className="gallery-hero__content">
            <h1 className="gallery-hero__title">
              Our <span className="highlight">Gallery</span>
            </h1>
            <p className="gallery-hero__subtitle">
              Take a virtual tour of our amazing facility
            </p>
          </div>
        </section>
        {/* Add gallery grid as needed */}
      </main>
    </>
  )
}

