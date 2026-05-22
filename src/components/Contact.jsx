const contacts = [
  {
    initials: 'IB',
    name: 'Itay Ben Ner',
    role: 'Software & Technology Consulting',
    email: 'itay@irbconsultant.com',
    accentColor: '#252F3F',
    avatarClass: 'avatar--charcoal',
  },
  {
    initials: 'RB',
    name: 'Reut Ben Ner',
    role: 'Finance & Accounting Consulting',
    email: 'reut@irbconsultant.com',
    accentColor: '#6B9080',
    avatarClass: 'avatar--sage',
  },
]

export default function Contact() {
  return (
    <section className="contact section" id="contact" aria-label="Contact">
      <div className="container">

        <div className="contact-header reveal">
<h2 className="contact-heading">Talk to the right person.</h2>
        </div>

        <div className="contact-cards">
          {contacts.map((c, i) => (
            <article
              key={c.email}
              className={`contact-card reveal reveal-delay-${i + 1}`}
            >
              <div
                className="contact-card-accent"
                style={{ background: c.accentColor }}
                aria-hidden="true"
              />
              <div className="contact-card-body">
                <div className={`contact-avatar ${c.avatarClass}`} aria-hidden="true">
                  {c.initials}
                </div>
                <h3 className="contact-name">{c.name}</h3>
                <p className="contact-role">{c.role}</p>
                <a href={`mailto:${c.email}`} className="contact-email">
                  {c.email}
                </a>
                <a href={`mailto:${c.email}`} className="btn btn-primary contact-btn">
                  Send Email <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
