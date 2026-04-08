import type { Metadata } from 'next'
import PageIntro from '@/components/PageIntro'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'

export const metadata: Metadata = {
  title: 'About | Fitty',
  description: 'Learn the story, training philosophy, and premium coaching direction behind Fitty.',
}

const pillars = [
  {
    title: 'Coaching over content',
    description:
      'Fitty is designed around guidance, accountability, and structured progress instead of generic gym noise.',
  },
  {
    title: 'High-touch environment',
    description:
      'From onboarding to recovery, every touchpoint is meant to feel premium, calm, and deeply intentional.',
  },
  {
    title: 'Built to evolve',
    description:
      'The brand is moving from static experiment to scalable product with real pages, clear offers, and deeper member tools.',
  },
]

const milestones = [
  'Started as an experimental concept exploring fitness-brand visuals and motion.',
  'Reframed into a Next.js product foundation with stronger layout, hierarchy, and routing.',
  'Positioned to grow into memberships, booking, planning, and progress tools.',
]

export default function AboutPage() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <SiteHeader ctaHref="/contact" ctaLabel="Talk to a coach" />

      <PageIntro
        eyebrow="About Fitty"
        title="A sharper fitness brand built from the old experiment."
        description="Fitty is evolving into a premium coaching-led experience where design, structure, and trust work together instead of competing for attention."
      />

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Brand pillars</p>
          <h2>What the rebuild is really trying to become.</h2>
        </div>

        <div className="card-grid">
          {pillars.map((pillar) => (
            <article className="info-card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-split">
        <div className="section-heading">
          <p className="eyebrow">Fitty timeline</p>
          <h2>From concept mockup to a real product direction.</h2>
          <p>
            The new site structure gives the brand a foundation for memberships, programs, and
            stronger client trust.
          </p>
        </div>

        <div className="roadmap">
          {milestones.map((milestone) => (
            <article className="roadmap-item" key={milestone}>
              <span />
              <p>{milestone}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
