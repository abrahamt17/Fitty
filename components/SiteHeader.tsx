import Link from 'next/link'
import { primaryNav } from '@/lib/site'

type SiteHeaderProps = {
  ctaHref?: string
  ctaLabel?: string
}

export default function SiteHeader({
  ctaHref = '/contact',
  ctaLabel = 'Start with Fitty',
}: SiteHeaderProps) {
  return (
    <header className="topbar">
      <Link className="brand" href="/">
        Fit<span>ty</span>
      </Link>

      <nav className="nav" aria-label="Primary">
        {primaryNav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="button button-ghost" href={ctaHref}>
        {ctaLabel}
      </Link>
    </header>
  )
}
