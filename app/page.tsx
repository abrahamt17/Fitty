import Link from 'next/link'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'

const programs = [
  {
    title: 'Strength Systems',
    description:
      'Progressive plans focused on muscle growth, strength blocks, and full coaching clarity.',
    meta: '4-week tracks',
  },
  {
    title: 'Body Recomp',
    description:
      'A cleaner fat-loss experience with habit scoring, nutrition guidance, and realistic pacing.',
    meta: 'Goal-led coaching',
  },
  {
    title: 'Performance Lab',
    description:
      'Conditioning and mobility built for athletes, runners, and high-output training days.',
    meta: 'Built for speed',
  },
]

const stats = [
  { value: '12+', label: 'Elite coaches' },
  { value: '1.8k', label: 'Member transformations' },
  { value: '96%', label: 'Retention on guided plans' },
]

const coaches = [
  {
    name: 'Ari Stone',
    role: 'Strength architect',
    focus: 'Powerlifting, form correction, and advanced progression design.',
  },
  {
    name: 'Mila Rowe',
    role: 'Conditioning lead',
    focus: 'Fat-loss systems, HIIT structure, and consistency frameworks.',
  },
  {
    name: 'Noah Vale',
    role: 'Recovery specialist',
    focus: 'Mobility, recovery blocks, and rebuilding durable movement patterns.',
  },
]

const roadmap = [
  'Personalized onboarding that adapts training plans to goal, level, and weekly availability.',
  'Booking-ready trainer cards with session types, specialities, and CTA-driven scheduling.',
  'A stronger pricing system with tier comparison, plan outcomes, and upgrade prompts.',
  'Social-proof blocks with transformation stories, stats, and proof-driven messaging.',
]

export default function Home() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <section className="hero">
        <SiteHeader ctaHref="/pricing" ctaLabel="See memberships" />

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Project 3 · Fitty rebuild</p>
            <h1>Make the old experiment feel like a premium fitness product.</h1>
            <p className="lede">
              The site now has a proper Next.js foundation and a cleaner landing-page direction:
              sharper messaging, stronger hierarchy, and room for advanced features without the
              old static-page sprawl.
            </p>
            <div className="hero-actions">
              <Link className="button" href="#roadmap">
                See what to add
              </Link>
              <Link className="text-link" href="/about">
                Meet the brand
              </Link>
              <Link className="text-link" href="/pricing">
                Explore the rebuild
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-card panel-primary">
              <span>Launch focus</span>
              <strong>Responsive product-grade homepage</strong>
              <p>Built to support pricing, booking, stories, and advanced member tools.</p>
            </div>
            <div className="panel-metrics">
              {stats.map((stat) => (
                <article className="metric-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="programs">
        <div className="section-heading">
          <p className="eyebrow">Core experience</p>
          <h2>Programs that feel guided, not generic.</h2>
          <p>
            Instead of a one-page demo with visual effects only, the rebuild starts framing Fitty
            as a real digital fitness product.
          </p>
        </div>

        <div className="card-grid">
          {programs.map((program) => (
            <article className="info-card" key={program.title}>
              <span>{program.meta}</span>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-split" id="coaches">
        <div className="section-heading">
          <p className="eyebrow">Coach layer</p>
          <h2>Trainer profiles that can grow into booking and trust.</h2>
          <p>
            This section is designed to evolve into full coach cards with schedules, certificates,
            and intro-session booking.
          </p>
        </div>

        <div className="coach-list">
          {coaches.map((coach) => (
            <article className="coach-card" key={coach.name}>
              <div className="coach-avatar" aria-hidden="true">
                {coach.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </div>
              <div>
                <p className="coach-role">{coach.role}</p>
                <h3>{coach.name}</h3>
                <p>{coach.focus}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="roadmap">
        <div className="section-heading">
          <p className="eyebrow">What to add next</p>
          <h2>The features that will make this version feel outstanding.</h2>
        </div>

        <div className="roadmap">
          {roadmap.map((item) => (
            <article className="roadmap-item" key={item}>
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section launch-strip" id="launch">
        <div>
          <p className="eyebrow">Next milestone</p>
          <h2>Build the rest in small commits.</h2>
          <p>
            Recommended slices: app setup, homepage rebuild, reusable sections, pricing page,
            gallery, contact flow, and booking-ready trainer details.
          </p>
        </div>
        <Link className="button" href="/contact">
          Start the next commit
        </Link>
      </section>

      <SiteFooter />
    </main>
  )
}
