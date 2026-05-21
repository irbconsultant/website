export default function Hero() {
  return (
    <section className="hero section" id="hero" aria-label="Hero">
      <div className="hero-inner container">

        <div className="hero-left reveal visible">
          <h1 className="hero-headline">
            Innovation<br />
            Driven by <span className="text-sage">People.</span>
          </h1>
          <p className="hero-subtext">
            We believe innovation only works when it's grounded in human connection.
          </p>
          <a href="#contact" className="btn btn-primary">
            Get in Touch <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="hero-right" aria-label="Service highlights">
          <div className="hero-card hero-card--light reveal reveal-delay-1">
            <span className="card-label">Technology</span>
            <p className="card-title">Software &amp; Dev Consulting</p>
            <p className="card-name">Itay Ben Ner</p>
          </div>
          <div className="hero-card hero-card--dark reveal reveal-delay-2">
            <span className="card-label card-label--light">Finance</span>
            <p className="card-title card-title--light">Accounting &amp; Financial Advisory</p>
            <p className="card-name card-name--light">Reut Ben Ner</p>
          </div>
        </div>

      </div>
    </section>
  )
}
