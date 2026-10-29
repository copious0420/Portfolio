import { useEffect, useRef, useState } from 'react'
import { navLinks, profile } from '../lib/data'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useScrolled } from '../hooks/useScrolled'
import { cn } from '../lib/cn'
import { Close, Menu } from './Icons'

const ids = navLinks.map((l) => l.id)

// Full-width state matches .container-x (max-w-6xl)
const FULL_WIDTH = 1152
// Horizontal padding (px-3) + border of the pill around the links
const PILL_CHROME = 26
// One shared transition so every property moves in lockstep
const TRANSITION = 'transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]'

export default function Navbar() {
  const scrolled = useScrolled()
  const active = useScrollSpy(ids)
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const [linksWidth, setLinksWidth] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(FULL_WIDTH)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Measure in px so width animates smoothly between the full bar and a pill hugging the links + CTA
  // (they're hidden on mobile, so linksWidth is 0 there and the bar just insets instead)
  useEffect(() => {
    const header = headerRef.current
    const links = linksRef.current
    if (!header || !links) return
    const ro = new ResizeObserver(() => {
      setViewportWidth(header.offsetWidth)
      setLinksWidth(links.offsetWidth)
    })
    ro.observe(header)
    ro.observe(links)
    return () => ro.disconnect()
  }, [])

  const pill = scrolled && !open
  const pillDesktop = pill && linksWidth > 0

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed inset-x-0 top-0 z-50',
        TRANSITION,
        pill ? 'px-4 pt-3' : 'px-0 pt-0',
        open && 'bg-ink-950',
      )}
    >
      <nav
        style={{
          width: pillDesktop ? linksWidth + PILL_CHROME : Math.min(viewportWidth - (pill ? 32 : 0), FULL_WIDTH),
          maxWidth: '100%',
        }}
        className={cn(
          'relative mx-auto flex items-center justify-end rounded-full border',
          TRANSITION,
          pill
            ? 'h-14 border-white/15 bg-white/5 px-3 [backdrop-filter:blur(0px)]'
            : 'h-16 border-transparent bg-transparent px-5 sm:px-8',
        )}
      >
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className={cn(
            'group absolute top-1/2 flex -translate-y-1/2 items-center gap-2.5 whitespace-nowrap',
            TRANSITION,
            pill ? 'left-3' : 'left-5 sm:left-8',
            // fade out quickly so it's gone before the pill edge reaches the links
            pillDesktop ? 'pointer-events-none opacity-0 !duration-200' : 'opacity-100',
          )}
          tabIndex={pillDesktop ? -1 : undefined}
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-ink-600 bg-ink-850 font-mono text-sm font-medium text-mint transition-colors group-hover:border-mint/60">
            NS
          </span>
          <span className="hidden text-sm font-medium text-zinc-200 sm:block">{profile.name}</span>
        </a>

        <div ref={linksRef} className="hidden shrink-0 items-center gap-3 md:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={cn(
                    'relative block rounded-full px-4 py-2 text-sm transition-colors',
                    active === link.id ? 'text-white' : 'text-zinc-400 hover:text-zinc-100',
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute inset-x-4 -bottom-0.5 h-px origin-left bg-mint transition-transform duration-500',
                      active === link.id ? 'scale-x-100' : 'scale-x-0',
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          <a href={`mailto:${profile.email}`} className="btn-ghost shrink-0 whitespace-nowrap !px-4 !py-2">
            Say hello
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-zinc-200 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </nav>

      <div
        className={cn(
          'overflow-hidden transition-[max-height,opacity] duration-500 md:hidden',
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <ul className="container-x flex flex-col gap-1 pb-6 pt-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  'block rounded-xl px-4 py-3 text-base transition-colors',
                  active === link.id ? 'bg-ink-850 text-white' : 'text-zinc-400 hover:bg-ink-900 hover:text-white',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
