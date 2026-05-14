import { useEffect, useRef } from 'react'

const tools = [
  {
    name: 'ТекстАI',
    category: 'Генерация текста',
    description:
      'Создавайте статьи, посты для соцсетей, рекламные тексты и любой контент с помощью передовых языковых моделей.',
    features: ['SEO-оптимизация', 'Разные стили', 'Многоязычность', 'Рерайтинг'],
    gradient: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    iconBg: 'rgba(79,70,229,0.2)',
    glow: 'rgba(79,70,229,0.3)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="white" strokeWidth="1.5" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'ВизуалАI',
    category: 'Генерация изображений',
    description:
      'Превращайте идеи в stunning визуалы. Создавайте фото, иллюстрации, логотипы и арты в любом стиле.',
    features: ['Реализм', 'Аниме-стиль', 'Арт-дирекшн', 'Апскейл HD'],
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #c084fc 100%)',
    iconBg: 'rgba(124,58,237,0.2)',
    glow: 'rgba(124,58,237,0.3)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="1.5" />
        <circle cx="8.5" cy="8.5" r="1.5" fill="white" />
        <path d="M21 15l-5-5L5 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'КодАI',
    category: 'Помощь с кодом',
    description:
      'Ваш AI-напарник по разработке. Пишет, рефакторит и отлаживает код на 30+ языках программирования.',
    features: ['30+ языков', 'Дебаггинг', 'Code review', 'Документация'],
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #818cf8 100%)',
    iconBg: 'rgba(14,165,233,0.2)',
    glow: 'rgba(14,165,233,0.3)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'ФайлАI',
    category: 'Анализ файлов',
    description:
      'Загружайте PDF, Excel, Word и получайте аналитику, резюме и ответы на вопросы по содержимому.',
    features: ['PDF, Excel, Word', 'Извлечение данных', 'Сводки', 'Q&A по тексту'],
    gradient: 'linear-gradient(135deg, #22c55e 0%, #059669 100%)',
    iconBg: 'rgba(34,197,94,0.2)',
    glow: 'rgba(34,197,94,0.3)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" stroke="white" strokeWidth="1.5" />
        <path d="M13 2v7h7" stroke="white" strokeWidth="1.5" />
        <path d="M9 12h6M9 16h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'АвтоАI',
    category: 'Автоматизация задач',
    description:
      'Создавайте автоматические цепочки задач: от парсинга данных до отправки писем — всё без кода.',
    features: ['No-code', 'Вебхуки', 'Планировщик', 'API-цепочки'],
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    iconBg: 'rgba(245,158,11,0.2)',
    glow: 'rgba(245,158,11,0.3)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Tools() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.tool-card')
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = '1'
                card.style.transform = 'translateY(0)'
              }, i * 120)
            })
          }
        })
      },
      { threshold: 0.05 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="tools" className="py-24 relative" ref={sectionRef}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(124,58,237,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{
              background: 'rgba(192,132,252,0.1)',
              border: '1px solid rgba(192,132,252,0.3)',
              color: '#e879f9',
            }}
          >
            Инструменты
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Все AI-инструменты{' '}
            <span className="gradient-text">в одном месте</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Выберите нужный инструмент или используйте их все вместе для максимальной эффективности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="tool-card group relative glass-card rounded-2xl p-6 cursor-pointer"
              style={{
                opacity: 0,
                transform: 'translateY(40px)',
                transition: `opacity 0.6s ease, transform 0.6s ease`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.borderColor = 'rgba(129,140,248,0.25)'
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = `0 20px 60px ${tool.glow}`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Top gradient line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: tool.gradient }}
              />

              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: tool.iconBg, border: `1px solid ${tool.glow}` }}
                >
                  {tool.icon}
                </div>
                <div>
                  <div className="text-xs font-medium mb-1" style={{ color: '#a5b4fc' }}>
                    {tool.category}
                  </div>
                  <h3 className="text-white font-bold text-xl">{tool.name}</h3>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-5">{tool.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {tool.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#94a3b8',
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <button
                className="w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300"
                style={{
                  background: tool.gradient,
                  opacity: 0.85,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.85' }}
              >
                Попробовать →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
