export default function Footer() {
  const footerLinks = {
    Продукт: ['Возможности', 'Тарифы', 'API', 'Интеграции', 'Changelog'],
    Инструменты: ['ТекстАI', 'ВизуалАI', 'КодАI', 'ФайлАI', 'АвтоАI'],
    Компания: ['О нас', 'Блог', 'Карьера', 'Пресс-кит', 'Партнёрство'],
    Поддержка: ['Документация', 'Статус', 'Сообщество', 'Контакты', 'Политика'],
  }

  const socials = [
    {
      name: 'Telegram',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.21 13.662l-2.962-.924c-.643-.203-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.94.897z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
  ]

  return (
    <footer
      className="relative py-16 mt-12"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.5), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-white font-bold text-lg">
                Neuro<span className="gradient-text">AI</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Платформа нейросетей нового поколения для работы, творчества и бизнеса.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <button
                  key={s.name}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#818cf8'
                    e.currentTarget.style.borderColor = 'rgba(129,140,248,0.3)'
                    e.currentTarget.style.background = 'rgba(129,140,248,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = ''
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  }}
                  title={s.name}
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-slate-600 text-sm">
            © 2024 NeuroAI. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            {['Конфиденциальность', 'Условия', 'Cookies'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-slate-600 hover:text-slate-400 text-xs transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
