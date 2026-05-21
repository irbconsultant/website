const services = [
  {
    num: '01',
    title: 'Software & Technology Consulting',
    description:
      'End-to-end technology consulting for startups and enterprises — from architecture and development strategy to implementation and delivery. We help you build the right thing, the right way.',
    tag: 'Itay Ben Ner · itay@irbconsultant.com',
  },
  {
    num: '02',
    title: 'Finance & Accounting Consulting',
    description:
      'Financial advisory and accounting services for businesses navigating growth, compliance, and international expansion. Clarity and structure for your numbers, wherever you operate.',
    tag: 'Reut Ben Ner · reut@irbconsultant.com',
  },
]

export default function Services() {
  return (
    <section className="services section" id="services" aria-label="Services">
      <div className="services-inner container">

        <div className="services-left reveal">
          <span className="eyebrow">What We Do</span>
          <h2 className="services-heading">
            Two disciplines.<br />
            <span className="text-sage">One firm.</span>
          </h2>
          <p className="services-body">
            Whether you need a technical co-pilot or a financial partner, IRB Consultant
            brings both disciplines together — lean, focused, and deeply invested in
            your success.
          </p>
        </div>

        <div className="services-right">
          {services.map((s, i) => (
            <article
              key={s.num}
              className={`service-card reveal reveal-delay-${i + 1}`}
            >
              <span className="service-num" aria-hidden="true">{s.num}</span>
              <div className="service-content">
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.description}</p>
                <span className="service-tag">{s.tag}</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
