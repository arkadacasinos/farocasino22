const HASHTAGS = [
  '#farocasino',
  '#farocasinoзеркало',
  '#farocasinoиграть',
  '#farocasinoофициальный',
  '#farocasinoофициальныйсайт',
  '#faroказино',
  '#фароказино',
  '#фароказинозеркало',
  '#фароказинозеркалорабочее',
  '#фароказиноиграть',
  '#фароказиноонлайн',
  '#фароказиноофициальный',
  '#фароказиноофициальныйсайт',
]

export function SiteFooter() {
  return (
    <footer className="fq82-footer">
      <div className="fq82-footer-inner">
        <p className="fq82-footer-note">
          Материал носит информационный характер и описывает бренд Faro Casino. Игра доступна
          лицам старше 18 лет. Прежде чем играть в Фаро казино, оцените свои финансовые
          возможности.
        </p>
        <ul className="fq82-hashtags" aria-label="Ключевые слова">
          {HASHTAGS.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <p className="fq82-footer-copy">© {new Date().getFullYear()} Faro Casino</p>
      </div>
    </footer>
  )
}
