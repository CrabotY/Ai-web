export default function BioFurry() {
  const items = [
    { emoji: '🦊', title: 'Фурсона', desc: 'У него есть своя фурсона — уникальный персонаж-животное, который отражает его личность.' },
    { emoji: '🎨', title: 'Арт', desc: 'Роман любит фурри-арт и активно поддерживает художников этого сообщества.' },
    { emoji: '🤝', title: 'Сообщество', desc: 'Фурри-сообщество — это дружелюбные люди, и Роман — один из них.' },
    { emoji: '💜', title: 'Открытость', desc: 'Он не скрывает, что является фурри, и гордится этим.' },
  ]

  return (
    <section className="bio-section bio-furry">
      <div className="bio-container">
        <div className="section-header">
          <span className="section-label section-label--purple">Субкультура</span>
          <h2 className="section-title">
            Роман — <span className="gradient-text">Фурри</span>
          </h2>
          <p className="section-sub">
            Часть фурри-сообщества — людей, которые интересуются антропоморфными
            животными-персонажами в искусстве, литературе и ролевых играх.
          </p>
        </div>

        <div className="furry-grid">
          {items.map((item) => (
            <div key={item.title} className="furry-card">
              <div className="furry-card__emoji">{item.emoji}</div>
              <h3 className="furry-card__title">{item.title}</h3>
              <p className="furry-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="furry-banner">
          <div className="furry-banner__paws">🐾</div>
          <p className="furry-banner__text">
            Быть фурри — значит быть частью творческого и открытого сообщества.
            Роман принял это давно и не планирует менять своих взглядов.
          </p>
          <div className="furry-banner__paws">🐾</div>
        </div>
      </div>
    </section>
  )
}
