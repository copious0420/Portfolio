import { useState } from 'react'
import { profile } from '../lib/data'
import { ArrowUpRight, Check, Copy, Github, Mail } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const links = [
    { label: 'GitHub', href: profile.github, Icon: Github },
  ]

  return (
    <section id="contact" className="relative scroll-mt-16 overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 translate-y-1/2 rounded-full bg-mint/10 blur-[120px]" />
      <div className="container-x relative">
        <SectionHeading index="06" eyebrow="Contact" title="Want to work together?" />

        <Reveal className="card p-6 sm:p-10">
          <p className="max-w-lg text-zinc-400">
            If you need a reliable teammate for a hackathon, you know whom to contact.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={`mailto:${profile.email}`} className="btn-primary group">
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <button type="button" onClick={copyEmail} className="btn-ghost" aria-live="polite">
              {copied ? <Check className="h-4 w-4 text-mint" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied' : 'Copy email'}
            </button>
          </div>

          <div className="mt-10 grid gap-3 border-t border-ink-700 pt-8 sm:grid-cols-2">
            {links.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-ink-700 px-5 py-4 transition-colors hover:border-mint/40 hover:bg-ink-850"
              >
                <span className="flex items-center gap-3 text-zinc-200">
                  <Icon className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-mint" />
                  {label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-mint" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
