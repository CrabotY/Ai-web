import { useEffect, useRef, useState } from 'react'

const plans = [
  {
    name: 'Старт',
    price: { monthly: 0, yearly: 0 },
    description: 'Для знакомства с возможностями AI',
    features: [
      '50 запросов в день',
      'Генерация текста',
      'Базовые шаблоны',
      'Поддержка сообщества',
      '1 рабочее пространство',
    ],
    notIncluded: ['Генерация изображений', 'API доступ', 'Приоритетная поддержка'],
    cta: 'Начать бесплатно',
    gradient: null,
    popular: false,
  },
  {
    name: 'Про',
    price: { monthly: 1490, yearly: 990 },
    description: 'Для фрилансеров и небольших проектов',
    features: [
      'Безлимитные запросы',
      'Все AI-инструменты',
      'Генерация изображений (500/мес)',
      'API доступ',
      '5 рабочих пространств',
      'Приоритетная поддержка',
      'История запросов',
    ],
    notIncluded: ['Командный доступ', 'White-label'],
    cta: 'Начать за 1 490 ₽',
    gradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    popular: true,
  },
  {
    name: 'Бизнес',
    price: { monthly: 4990, yearly: 3490 },
    description: 'Для команд и компаний',
    features: [
      'Всё из тарифа Про',
      'Командный доступ (до 20)',
      'Безлимит изображений',
      'White-label решение',
      'Выделенный менеджер',
      'SLA 99.9%',
      'Корпоративный договор',
    ],
    notIncluded: [],
    cta: 'Связаться с нами',
    gradient: null,
    popular: false,
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.price-card')
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = '1'
                card.style.transform = 'translateY(0)'
              }, i * 150)
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
    <section id="pricing" className="py-24 relative" ref={sectionRef}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(79,70,229,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{
              background: 'rgba(34,197,94,0.1)',
              border: '1px solid rgba(34,197,94,0.3)',
              color: '#86efac',
            }}
          >
            Тарифы
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Простые и{' '}
            <span className="gradient-text">прозрачные цены</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Начните бесплатно. Переходите на платный план когда будете готовы
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <button
              onClick={() => setYearly(false)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: !yearly ? 'rgba(79,70,229,0.8)' : 'transparent',
                color: !yearly ? 'white' : '#94a3b8',
              }}
            >
              Помесячно
            </button>
            <button
              onClick={() => setYearly(true)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2"
              style={{
                background: yearly ? 'rgba(79,70,229,0.8)' : 'transparent',
                color: yearly ? 'white' : '#94a3b8',
              }}
            >
              Годовой
              <span
                className="text-xs px-1.5 py-0.5 rounded-full font-semibold"
                style={{ background: 'rgba(34,197,94,0.2)', color: '#86efac' }}
              >
                −30%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="price-card relative rounded-2xl p-6 lg:p-8"
              style={{
                opacity: 0,
                transform: 'translateY(40px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                background: plan.popular
                  ? 'rgba(79,70,229,0.12)'
                  : 'rgba(255,255,255,0.03)',
                border: plan.popular
                  ? '1px solid rgba(129,140,248,0.4)'
                  : '1px solid rgba(255,255,255,0.08)',
                boxShadow: plan.popular ? '0 0 60px rgba(79,70,229,0.15)' : 'none',
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}
                >
                  Популярный
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-slate-500 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-end gap-1">
                  <span className="text-4xl lg:text-5xl font-bold text-white">
                    {plan.price[yearly ? 'yearly' : 'monthly'] === 0
                      ? 'Бесплатно'
                      : `${plan.price[yearly ? 'yearly' : 'monthly'].toLocaleString('ru')} ₽`}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-slate-500 text-sm mb-2">/мес</span>
                  )}
                </div>
                {yearly && plan.price.monthly > 0 && (
                  <p className="text-slate-500 text-xs mt-1">
                    Вместо {plan.price.monthly.toLocaleString('ru')} ₽/мес
                  </p>
                )}
              </div>

              <button
                className="w-full py-3 rounded-xl text-sm font-semibold text-white mb-8 transition-all duration-300"
                style={{
                  background: plan.gradient || 'rgba(255,255,255,0.07)',
                  border: plan.gradient ? 'none' : '1px solid rgba(255,255,255,0.12)',
                }}
                onMouseEnter={(e) => {
                  if (!plan.gradient) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                  } else {
                    e.currentTarget.style.opacity = '0.85'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.gradient) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                  } else {
                    e.currentTarget.style.opacity = '1'
                  }
                }}
              >
                {plan.cta}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className="flex-shrink-0 mt-0.5"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="#818cf8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className="flex-shrink-0 mt-0.5"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18 6L6 18M6 6l12 12"
                        stroke="#475569"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
