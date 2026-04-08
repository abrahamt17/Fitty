import Link from 'next/link'
import { footerLinks, primaryNav } from '@/lib/site'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <Link className="brand" href="/">
            Fit<span>ty</span>
          </Link>
          <p>
            Modern coaching, sharp design, and a cleaner digital fitness experience built to grow
            beyond a landing page.
          </p>
        </div>

        <div className="site-footer__nav">
          <h2>Pages</h2>
          <div className="site-footer__links">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title} className="site-footer__group">
            <h2>{group.title}</h2>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
