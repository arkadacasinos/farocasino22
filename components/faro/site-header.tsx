const NAV_LINKS = [
  { href: '#o-brende', label: 'О бренде' },
  { href: '#ofitsialnyy', label: 'Официальный сайт' },
  { href: '#zerkalo', label: 'Зеркало' },
  { href: '#igrat', label: 'Играть' },
  { href: '#faq', label: 'Вопросы' },
]

export function SiteHeader() {
  return (
    <header className="fq82-header">
      <a href="#top" className="fq82-brand">
        <span className="fq82-brand-mark">Faro</span>
        <span>Casino</span>
      </a>
      <nav className="fq82-nav" aria-label="Разделы страницы">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a href="#igrat" className="fq82-header-cta">
        Играть
      </a>
    </header>
  )
}
