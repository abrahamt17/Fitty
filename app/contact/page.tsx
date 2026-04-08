import type { Metadata } from 'next'
import PageIntro from '@/components/PageIntro'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import styles from './contact.module.css'

export const metadata: Metadata = {
  title: 'Contact | Fitty',
  description: 'Connect with Fitty for memberships, private coaching, and partnership conversations.',
}

const contactDetails = [
  { label: 'Email', value: 'hello@fitty.local' },
  { label: 'Phone', value: '+1 (555) 019-2030' },
  { label: 'Location', value: 'Milano-inspired concept studio · Remote-friendly brand build' },
]

export default function ContactPage() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <SiteHeader ctaHref="/pricing" ctaLabel="Compare memberships" />

      <PageIntro
        eyebrow="Contact"
        title="Let people reach the brand without friction."
        description="The contact route gives Fitty a proper conversion surface for memberships, coaching calls, and future booking workflows."
      />

      <section className={`section ${styles.contactGrid}`}>
        <article className={styles.contactCard}>
          <p className="eyebrow">Reach Fitty</p>
          <h2>Start with the right conversation.</h2>
          <div className={styles.contactList}>
            {contactDetails.map((detail) => (
              <div className={styles.contactListItem} key={detail.label}>
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </div>
            ))}
          </div>
        </article>

        <form className={styles.contactForm}>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" placeholder="Your name" type="text" />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" placeholder="you@example.com" type="email" />
          </div>
          <div className={styles.field}>
            <label htmlFor="goal">Primary goal</label>
            <input id="goal" name="goal" placeholder="Fat loss, strength, private coaching..." type="text" />
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell Fitty what kind of support you want." rows={6} />
          </div>
          <button className="button" type="submit">
            Send inquiry
          </button>
        </form>
      </section>

      <SiteFooter />
    </main>
  )
}
