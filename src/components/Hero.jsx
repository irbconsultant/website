export default function Hero() {
  return (
    <section className="hero section" id="hero" aria-label="Hero">
      <div className="hero-inner container">
        <div className="hero-content reveal visible">
          <h1 className="hero-headline">
            Expertise Driven by Real <span className="text-sage">People.</span>
          </h1>
          <p className="hero-subtext">
            Two independent specialists in{' '}
            <a href="#service-finance" className="hero-anchor">finance</a>
            {' '}and{' '}
            <a href="#service-technology" className="hero-anchor">technology</a>
            .<br />
            We embrace every tool available, including AI, while keeping
            human judgment, experience, and care at the center of everything
            we do.
          </p>
          <a href="#contact" className="btn btn-primary">
            Get in Touch <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
