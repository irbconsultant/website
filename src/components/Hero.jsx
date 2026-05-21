export default function Hero() {
  return (
    <section className="hero section" id="hero" aria-label="Hero">
      <div className="hero-inner container">
        <div className="hero-content reveal visible">
          <h1 className="hero-headline">
            Innovation<br />
            Driven by <span className="text-sage">People.</span>
          </h1>
          <p className="hero-subtext">
            We believe innovation only works when it's grounded in human
            connection — delivering across{' '}
            <a href="#services" className="hero-anchor">technology</a>
            {' '}and{' '}
            <a href="#services" className="hero-anchor">finance</a>.
          </p>
          <a href="#contact" className="btn btn-primary">
            Get in Touch <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
