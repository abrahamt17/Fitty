'use client'

import Navigation from '@/components/Navigation'
import BackgroundGradients from '@/components/BackgroundGradients'
import PageLoader from '@/components/PageLoader'
import CustomCursor from '@/components/CustomCursor'
import { useEffect } from 'react'

export default function ContactPage() {
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
        <section className="contact-hero section">
          <div className="contact-hero__content">
            <h1 className="contact-hero__title">
              Get In <span className="highlight">Touch</span>
            </h1>
            <p className="contact-hero__subtitle">
              We're here to help you on your fitness journey
            </p>
          </div>
        </section>
        {/* Add contact form as needed */}
      </main>
    </>
  )
}

