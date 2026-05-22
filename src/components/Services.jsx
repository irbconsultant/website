
const services = [
  {
    area: 'Technology',
    title: 'Software and Systems Consulting',
    description:
      <>With over 12 years of hands-on experience and a genuine <b>passion</b> for the craft, I design, build, and integrate software systems that serve real business needs. From server-side architecture and cloud infrastructure to websites and API development, I bring technical depth, <b>creative thinking</b>, and a <b>business-first</b> perspective to every engagement. I stay current with emerging technologies and rapidly adopt what genuinely adds value, including <b>AI workflows</b>, always with a <b>human eye</b> on security, quality, and the bigger picture.</>,
    offersLabel: 'What I offer',
    offers: [
      'Server-side development and cloud infrastructure',
      'Website development and web applications',
      'System design, architecture, and API development',
      'Database design, optimization, and management',
      'Third-party integrations and system connectivity',
      'Business-focused consulting with creative thinking at the core',
      'AI-assisted development with human oversight and quality control',
      'End-to-end delivery from concept to production',
    ],
    tag: 'Itay Ben Ner',
  },
  {
    area: 'Finance',
    title: 'Finance and Accounting Consulting',
    description:
      <>With over 12 years of experience in finance, I provide personalized financial guidance that brings <b>clarity</b> and control to your business finances. Most business owners don't have the time or expertise to translate their numbers into real decisions. I combine deep financial expertise with a <b>human-centered</b> approach to help you understand your numbers, make smarter decisions, and move forward with confidence.</>,
    offersLabel: 'What I offer',
    offers: [
      'Personalized financial guidance',
      'Cash flow management and budgeting',
      'Financial management and oversight',
      'Financial performance analysis and reporting',
      'Strategic financial planning',
      'Profitability improvement and sustainable growth planning',
      'Building financial frameworks for better decision-making',
    ],
    tag: 'Reut Ben Ner',
  },
]

export default function Services() {
  return (
    <section className="services section" id="services" aria-label="Services">
      <div className="container">
        <div className="services-header reveal">
          <h2 className="services-heading">Our Services</h2>
        </div>
        <div className="services-list">
          {services.map((s, i) => (
            <article key={s.area} id={`service-${s.area.toLowerCase()}`} className={`service-row reveal reveal-delay-${i}`}>
              <div className="service-row-left">
                <span className="eyebrow service-area-eyebrow">{s.area}</span>
                <h3 className="service-row-title">{s.title}</h3>
                <span className="service-tag">{s.tag}</span>
              </div>
              <div className="service-row-right">
                <p className="service-area-desc">{s.description}</p>
                {s.offers && (
                  <div className="service-offers">
                    <p className="service-offers-label">{s.offersLabel}</p>
                    <ul className="service-offers-list">
                      {s.offers.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
