import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import ReviewSection from '@/components/Reviews'
import Services from '@/components/Services'
import Page from '@/components/WhyUs'
import React from 'react'

export default function page() {
  return (
    <>
      <Hero />
      <Services />
      <ReviewSection />
      <About />
      <Page />
      <Contact /></>
  )
}
