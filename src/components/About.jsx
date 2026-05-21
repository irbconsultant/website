const stats = [
  { value: '2+',  label: 'Service Lines' },
  { value: '50%', label: 'Tech · Finance Split' },
]

export default function About() {
  return (
    <section className="about section" id="about" aria-label="About IRB Consultant">
      <div className="about-inner container">

        <div className="about-left reveal">
          <span className="eyebrow about-eyebrow">About IRB</span>
          <blockquote className="about-quote">
            We believe innovation only matters when it's driven by{' '}
            <span className="text-sage">real human thinking.</span>
          </blockquote>
          <p className="about-body">
            Founded by Itay and Reut Ben Ner, IRB Consultant is a Hong Kong-registered firm
            combining software expertise and financial advisory under one roof. We work as
            independent consultants — lean, focused, and deeply invested in the success of
            every client.
          </p>
        </div>

        <div className="about-right" aria-label="Company highlights">
          {stats.map((s, i) => (
            <div key={s.label} className={`stat-block reveal reveal-delay-${i + 1}`}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
