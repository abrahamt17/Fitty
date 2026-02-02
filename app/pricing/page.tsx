'use client'

import Navigation from '@/components/Navigation'
import BackgroundGradients from '@/components/BackgroundGradients'
import PageLoader from '@/components/PageLoader'
import CustomCursor from '@/components/CustomCursor'
import { useEffect } from 'react'

export default function PricingPage() {
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
        <section className="pricing-hero section">
          <div className="pricing-hero__content">
            <h1 className="pricing-hero__title">
              Choose Your <span className="highlight">Plan</span>
            </h1>
            <p className="pricing-hero__subtitle">
              Flexible membership options designed to fit your lifestyle
            </p>
          </div>
        </section>
        {/* Add pricing cards as needed */}
      </main>
    </>
  )
}

