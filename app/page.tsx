'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import WhyUs from '@/components/WhyUs'
import Trainers from '@/components/Trainers'
import Testimonials from '@/components/Testimonials'
import BackgroundGradients from '@/components/BackgroundGradients'
import PageLoader from '@/components/PageLoader'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  useEffect(() => {
    // Hide loader after page loads
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
        <Hero />
        <WhyUs />
        <Trainers />
        <Testimonials />
      </main>
    </>
  )
}

