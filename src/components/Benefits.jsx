import { useEffect, useRef } from 'react'

const benefits = [
  {
    icon: '⚡',
    title: 'Мгновенный результат',
    description: 'Получайте ответы и контент за секунды. Нейросети обрабатывают ваши запросы с невероятной скоростью.',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.15)',
  },
  {
    icon: '🎯',
    title: 'Точность и качество',
    description: 'Современные модели AI обеспечивают высокое качество текстов, кода и изображений с первой попытки.',
    color: '#818cf8',
    glow: 'rgba(129,140,248,0.15)',
  },
  {
    icon: '🔒',
    title: 'Безопасность данных',
    description: 'Ваши данные защищены шифрованием и никогда не используются для обучения моделей без вашего согласия.',
    color: '#22c55e',
    glow: 'rgba(34,197,94,0.15)',
  },
  {
    icon: '🌐',
    title: 'Работа 24/7',
    description: 'Сервис доступен круглосуточно без выходных. Нейросети готовы помочь в любое время суток.',
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.15)',
  },
  {
    icon: '🔧',
    title: 'Гибкая интеграция',
    description: 'API для разработчиков, плагины для популярных сервисов и готовые интеграции с вашими инструментами.',
    color: '#c084fc',
    glow: 'rgba(192,132,252,0.15)',
  },
  {
    icon: '📈',
    title: 'Растёт вместе с вами',
    description: 'Гибкие тарифы для фрилансеров, малого бизнеса и enterprise-компаний. Платите только за то, что используете.',
    color: '#fb923c',
    glow: 'rgba(251,146,60,0.15)',
  },
]

export default function Benefits() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.benefit-card')
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = '1'
                card.style.transform = 'translateY(0)'
              }, i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="benefits" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{
              background: 'rgba(79,70,229,0.15)',
              border: '1px solid rgba(129,140,248,0.3)',
              color: '#a5b4fc',
            }}
          >
            Почему мы
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Всё что нужно для{' '}
            <span className="gradient-text">продуктивной работы</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            NeuroAI объединяет лучшие AI-модели в одном удобном интерфейсе
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="benefit-card glass-card glass-card-hover rounded-2xl p-6"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: benefit.glow, border: `1px solid ${benefit.color}30` }}
              >
                {benefit.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
