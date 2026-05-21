const services = [
  {
    area: 'Technology',
    title: 'Software & Technology Consulting',
    description:
      'End-to-end technology consulting for startups and enterprises — from architecture and development strategy to implementation and delivery. We help you build the right thing, the right way.',
    tag: 'Itay Ben Ner · itay@irbconsultant.com',
  },
  {
    area: 'Finance',
    title: 'Finance & Accounting Consulting',
    description:
      'Financial advisory and accounting services for businesses navigating growth, compliance, and international expansion. Clarity and structure for your numbers, wherever you operate.',
    tag: 'Reut Ben Ner · reut@irbconsultant.com',
  },
]

export default function Services() {
  return (
    <section className="services section" id="services" aria-label="Services">
      <div className="services-grid container">
        {services.map((s, i) => (
          <article key={s.area} className={`service-area-card reveal reveal-delay-${i}`}>
            <span className="eyebrow service-area-eyebrow">{s.area}</span>
            <h3 className="service-area-title">{s.title}</h3>
            <p className="service-area-desc">{s.description}</p>
            <span className="service-tag">{s.tag}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
