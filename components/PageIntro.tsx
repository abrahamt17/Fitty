type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
}

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lede">{description}</p>
    </section>
  )
}
