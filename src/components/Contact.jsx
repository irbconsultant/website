import { useState } from 'react'
import ArrowIcon from './ArrowIcon'

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

function CopyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function execCommandFallback(text) {
  const el = document.createElement('textarea')
  el.value = text
  el.style.position = 'fixed'
  el.style.opacity = '0'
  document.body.appendChild(el)
  el.focus()
  el.select()
  try {
    document.execCommand('copy')
  } finally {
    document.body.removeChild(el)
  }
  return Promise.resolve()
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    // Falls back if clipboard API rejects (e.g. iframe without clipboard-write permission)
    return navigator.clipboard.writeText(text).catch(() => execCommandFallback(text))
  }
  return execCommandFallback(text)
}

function ContactCard({ c, i }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e) => {
    e.preventDefault()
    copyToClipboard(c.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <article className={`contact-card reveal reveal-delay-${i + 1}`}>
      <div className="contact-card-accent" style={{ background: c.accentColor }} aria-hidden="true" />
      <div className="contact-card-body">
        <div className={`contact-avatar ${c.avatarClass}`} aria-hidden="true">
          {c.initials}
        </div>
        <h3 className="contact-name">{c.name}</h3>
        <p className="contact-role">{c.role}</p>
        <div className="contact-email-row">
          <a href={`mailto:${c.email}`} className="contact-email">{c.email}</a>
          <button
            className="contact-copy-btn"
            onClick={handleCopy}
            aria-label={`Copy ${c.email} to clipboard`}
            title={copied ? 'Copied!' : 'Copy email'}
          >
            {copied ? <span className="contact-copied">Copied!</span> : <CopyIcon />}
          </button>
        </div>
        <a href={`mailto:${c.email}`} className="btn btn-primary contact-btn">
          Send Email <ArrowIcon />
        </a>
      </div>
    </article>
  )
}

export default function Contact() {
  return (
    <section className="contact section" id="contact" aria-label="Contact">
      <div className="container">

        <div className="contact-header reveal">
          <h2 className="contact-heading">Talk to the right person.</h2>
        </div>

        <div className="contact-cards">
          {contacts.map((c, i) => (
            <ContactCard key={c.email} c={c} i={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
