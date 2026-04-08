import type { Metadata } from 'next'
import PageIntro from '@/components/PageIntro'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import styles from './gallery.module.css'

export const metadata: Metadata = {
  title: 'Gallery | Fitty',
  description: 'Explore the visual world of Fitty through spaces, training energy, and premium brand moments.',
}

const galleryItems = [
  {
    title: 'Strength floor',
    description: 'A heavier, darker training environment built for focus and progression.',
  },
  {
    title: 'Recovery corner',
    description: 'Lighting, texture, and downtime spaces that make the premium story believable.',
  },
  {
    title: 'Coach moments',
    description: 'Trainer-led interactions that show the brand as guided, not generic.',
  },
  {
    title: 'Member atmosphere',
    description: 'Real energy for onboarding, movement, and transformation storytelling.',
  },
  {
    title: 'Brand details',
    description: 'Typography, signage, material finish, and polished in-person touchpoints.',
  },
  {
    title: 'After-hours look',
    description: 'A moodier visual direction for campaigns, product shots, and social proof.',
  },
]

export default function GalleryPage() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      <SiteHeader ctaHref="/contact" ctaLabel="Plan a studio visit" />

      <PageIntro
        eyebrow="Gallery"
        title="A visual direction that finally matches the ambition."
        description="This page gives Fitty a real showcase surface for mood, equipment, coaching energy, and future transformation stories."
      />

      <section className="section">
        <div className={styles.galleryGrid}>
          {galleryItems.map((item, index) => (
            <article
              className={`${styles.galleryCard} ${styles[`variant${(index % 3) + 1}`]}`}
              key={item.title}
            >
              <div className={styles.overlay}>
                <p className="eyebrow">Scene {index + 1}</p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
