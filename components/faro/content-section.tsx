type ContentSectionProps = {
  id: string
  title: string
  paragraphs: string[]
  image: {
    src: string
    alt: string
  }
  reverse?: boolean
}

export function ContentSection({ id, title, paragraphs, image, reverse }: ContentSectionProps) {
  return (
    <section
      id={id}
      className={`fq82-section${reverse ? ' fq82-section--reverse' : ''}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="fq82-section-media">
        <img src={image.src} alt={image.alt} width={800} height={500} loading="lazy" />
      </div>
      <div className="fq82-section-content">
        <h2 id={`${id}-title`}>{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
