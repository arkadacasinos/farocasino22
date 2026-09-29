const ADVANTAGES = [
  {
    title: 'Быстрые раунды',
    text: 'Результат каждой раздачи виден сразу — не нужно ждать долгую анимацию.',
  },
  {
    title: 'Понятные ставки',
    text: 'Механика ставок объясняется за пару минут, без многостраничных правил.',
  },
  {
    title: 'Оперативная поддержка',
    text: 'Вопросы по интерфейсу или выводу средств решаются быстро, без долгих очередей.',
  },
]

export function AdvantagesSection() {
  return (
    <section id="preimushchestva" className="fq82-section" aria-labelledby="preimushchestva-title">
      <div className="fq82-section-media">
        <img
          src="/images/faro-play.jpg"
          alt="Close-up of a hand of playing cards and stacked gold chips on a green felt table"
          width={800}
          height={500}
          loading="lazy"
        />
      </div>
      <div className="fq82-section-content">
        <h2 id="preimushchestva-title">Почему игроки выбирают Faro казино</h2>
        <p>
          Faro казино ценят за скорость: раунды идут быстро, а результат виден сразу. Ещё один
          плюс — понятная механика ставок, которая не требует чтения многостраничных правил.
          Наконец, служба поддержки отвечает оперативно, если у новичка возникают вопросы по
          интерфейсу или выводу средств.
        </p>
        <div className="fq82-advantages-grid">
          {ADVANTAGES.map((item) => (
            <div key={item.title} className="fq82-advantage">
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
