'use client'

import Navigation from '@/components/Navigation'
import BackgroundGradients from '@/components/BackgroundGradients'
import PageLoader from '@/components/PageLoader'
import CustomCursor from '@/components/CustomCursor'
import { useEffect } from 'react'

export default function AboutPage() {
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
        <section className="about-hero section">
          <div className="about-hero__content">
            <h1 className="about-hero__title">
              About <span className="highlight">Fitvate</span>
            </h1>
            <p className="about-hero__subtitle">
              Transforming lives through fitness, one workout at a time
            </p>
          </div>
        </section>
        {/* Add more sections as needed */}
      </main>
    </>
  )
}

