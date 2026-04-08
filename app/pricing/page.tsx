import type { Metadata } from 'next'
import Link from 'next/link'
import PageIntro from '@/components/PageIntro'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import styles from './pricing.module.css'

export const metadata: Metadata = {
  title: 'Pricing | Fitty',
  description: 'Explore Fitty memberships, premium coaching tiers, and upgrade-ready training plans.',
}

const plans = [
  {
    name: 'Core',
    price: '$49',
    meta: 'Monthly membership',
    description: 'For consistent training, open gym access, and a cleaner everyday routine.',
    features: ['Open gym access', 'Weekly training prompts', 'Recovery zone access'],
  },
  {
    name: 'Signature',
    price: '$119',
    meta: 'Most selected',
    description: 'A guided membership with more structure, accountability, and progression support.',
    features: ['Everything in Core', 'Goal-based monthly plan', '1 coach check-in each week'],
  },
  {
    name: 'Elite',
    price: '$249',
    meta: 'Premium coaching',
    description: 'The highest-touch Fitty tier for members who want full support and faster clarity.',
    features: ['Everything in Signature', '2 private sessions monthly', 'Priority adjustments and support'],
  },
]

export default function PricingPage() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-three" />
      <SiteHeader ctaHref="/contact" ctaLabel="Book a membership call" />

      <PageIntro
        eyebrow="Memberships"
        title="Pricing that feels premium without being vague."
        description="Each plan is framed around outcomes, support level, and the kind of training experience members actually want to buy."
      />

      <section className="section">
        <div className={styles.pricingGrid}>
          {plans.map((plan, index) => (
            <article
              className={`${styles.pricingCard} ${index === 1 ? styles.featured : ''}`}
              key={plan.name}
            >
              <p className="eyebrow">{plan.meta}</p>
              <h2>{plan.name}</h2>
              <div className={styles.price}>
                {plan.price}
                <span>/mo</span>
              </div>
              <p>{plan.description}</p>
              <ul className={styles.pricingList}>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link className="button" href="/contact">
                Choose {plan.name}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section launch-strip">
        <div>
          <p className="eyebrow">Upgrade path</p>
          <h2>Start simple, then add coaching depth.</h2>
          <p>
            The pricing system is ready to grow into comparisons, annual billing, add-ons, and
            trainer-specific upgrades.
          </p>
        </div>
        <Link className="button" href="/about">
          Learn the philosophy
        </Link>
      </section>

      <SiteFooter />
    </main>
  )
}
