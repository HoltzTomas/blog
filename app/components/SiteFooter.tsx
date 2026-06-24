import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-left">&copy; 2026 Tomas Holtz. Buenos Aires, AR.</div>
      <div className="footer-right">
        <a href="https://github.com/tomiholtz" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com/tomasholtz_" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com/tomasholtz" target="_blank" rel="noopener noreferrer">Instagram</a>
        <Link href="/blog">Blog</Link>
      </div>
    </footer>
  )
}
