export default function BioAbout() {
  const facts = [
    {
      icon: '🎮',
      title: 'Геймер до мозга костей',
      desc: 'Роман проводит большую часть времени за играми. Его любимая игра — Valorant, где он показывает результаты выше среднего и постоянно совершенствует свои навыки.',
    },
    {
      icon: '💸',
      title: 'Затрат',
      desc: 'Роман не жалеет денег на свои увлечения. Скины в Valorant, фурри-арт, периферия — он вкладывает в то, что любит, не задумываясь.',
    },
    {
      icon: '🦊',
      title: 'Фурри',
      desc: 'Роман является частью фурри-сообщества. Он открыто идентифицирует себя как фурри и с гордостью поддерживает эту субкультуру.',
    },
    {
      icon: '🎧',
      title: 'Меломан',
      desc: 'Наушники — неотъемлемая часть его образа. Музыка помогает ему погружаться в игровой процесс и создаёт правильную атмосферу.',
    },
  ]

  return (
    <section className="bio-section bio-about">
      <div className="bio-container">
        <div className="section-header">
          <span className="section-label">О нём</span>
          <h2 className="section-title">
            Кто такой <span className="gradient-text">Роман</span>?
          </h2>
          <p className="section-sub">
            Молодой парень, который живёт по своим правилам, не боится быть собой
            и тратит деньги на то, что действительно важно для него.
          </p>
        </div>

        <div className="bio-facts-grid">
          {facts.map((f) => (
            <div key={f.title} className="bio-fact-card">
              <div className="fact-icon">{f.icon}</div>
              <h3 className="fact-title">{f.title}</h3>
              <p className="fact-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
