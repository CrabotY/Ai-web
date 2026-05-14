export default function BioGaming() {
  const stats = [
    { label: 'Любимая игра', value: 'Valorant' },
    { label: 'Статус', value: 'Затрат на скины' },
    { label: 'Отношение к игре', value: 'Серьёзное' },
    { label: 'Платформа', value: 'PC' },
  ]

  return (
    <section className="bio-section bio-gaming">
      <div className="bio-container">
        <div className="gaming-layout">
          {/* Left: text */}
          <div className="gaming-text">
            <span className="section-label section-label--red">Gaming</span>
            <h2 className="section-title">
              Играет в <span className="gradient-text-red">Valorant</span>
            </h2>
            <p className="gaming-desc">
              Valorant — это не просто игра для Романа, это образ жизни. Он регулярно
              заходит в ranked-матчи, следит за мета-игрой и не стесняется тратить
              реальные деньги на скины для своих любимых агентов и оружия.
            </p>
            <p className="gaming-desc">
              Роман — тот самый игрок, у которого оружие выглядит дороже, чем у
              большинства людей стоит вся коллекция игр. <strong>Затрат</strong> —
              это про него.
            </p>
            <div className="gaming-badge">
              <div className="valorant-logo">
                <span className="valorant-v">V</span>
                <span className="valorant-text">ALORANT</span>
              </div>
            </div>
          </div>

          {/* Right: stats */}
          <div className="gaming-stats">
            <div className="gaming-card">
              <div className="gaming-card__header">
                <div className="status-dot status-dot--green" />
                <span>Player Profile</span>
              </div>
              <div className="gaming-card__body">
                {stats.map((s) => (
                  <div key={s.label} className="stat-row">
                    <span className="stat-label">{s.label}</span>
                    <span className="stat-value">{s.value}</span>
                  </div>
                ))}
              </div>
              <div className="gaming-card__footer">
                <div className="spend-bar">
                  <div className="spend-bar__label">
                    <span>Уровень затрат</span>
                    <span className="spend-bar__pct">99%</span>
                  </div>
                  <div className="spend-bar__track">
                    <div className="spend-bar__fill" style={{ width: '99%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
