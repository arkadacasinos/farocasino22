export function HeroSection() {
  return (
    <section id="top" className="fq82-hero" aria-labelledby="fq82-hero-title">
      <div className="fq82-hero-media">
        <img
          src="/images/faro-hero.jpg"
          alt="Golden poker chips and playing cards laid out on a dark table, representing Faro Casino"
          width={1200}
          height={900}
          fetchPriority="high"
        />
      </div>
      <div className="fq82-hero-content">
        <span className="fq82-eyebrow">Обзор бренда</span>
        <h1 id="fq82-hero-title">
          Faro Casino — простой ориентир для тех, кто ищет Фаро казино
        </h1>
        <p>
          Faro Casino давно у всех на слуху: бренд Faro casino ищут те, кто хочет разобраться в
          игре без сложных инструкций и рекламных обещаний. Ниже — спокойный разбор того, где
          искать вход, зеркало и правила, если вы решили заглянуть в Фаро казино впервые.
        </p>
        <div className="fq82-cta-row">
          <a href="#igrat" className="fq82-cta-primary">
            Перейти к разделу «Играть»
          </a>
          <a href="#zerkalo" className="fq82-cta-secondary">
            Нужно зеркало?
          </a>
        </div>
      </div>
    </section>
  )
}
