import { profile } from '../lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 py-8">
      <div className="container-x flex flex-col items-center justify-between gap-3 text-sm text-zinc-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <a href="#top" className="font-mono text-xs transition-colors hover:text-mint">
          back to top ↑
        </a>
      </div>
    </footer>
  )
}
