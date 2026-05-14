import { useEffect, useRef } from 'react'

const testimonials = [
  {
    name: 'Алексей Морозов',
    role: 'Копирайтер, фриланс',
    avatar: 'АМ',
    avatarColor: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    text: 'NeuroAI полностью изменил мою работу. Теперь я пишу в 3 раза больше контента за то же время. Качество текстов поражает — клиенты думают, что нанял целую команду.',
    rating: 5,
  },
  {
    name: 'Мария Соколова',
    role: 'Маркетолог, TechStart',
    avatar: 'МС',
    avatarColor: 'linear-gradient(135deg, #c084fc, #818cf8)',
    text: 'Использую для генерации идей, написания постов и анализа конкурентов. Инструменты интуитивно понятны, а результаты превосходят ожидания. Рекомендую всем маркетологам!',
    rating: 5,
  },
  {
    name: 'Дмитрий Петров',
    role: 'Backend разработчик',
    avatar: 'ДП',
    avatarColor: 'linear-gradient(135deg, #0ea5e9, #818cf8)',
    text: 'КодАI стал моим лучшим инструментом. Он помогает с рефакторингом, находит баги и объясняет сложный код. Сэкономил сотни часов на рутинных задачах.',
    rating: 5,
  },
  {
    name: 'Елена Кузнецова',
    role: 'Дизайнер, Studio X',
    avatar: 'ЕК',
    avatarColor: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    text: 'Генерация изображений просто взрывная! Создаю мудборды для клиентов за минуты. Разнообразие стилей огромное — от реализма до цифрового арта.',
    rating: 5,
  },
  {
    name: 'Андрей Иванов',
    role: 'CEO, MicroSaaS',
    avatar: 'АИ',
    avatarColor: 'linear-gradient(135deg, #22c55e, #059669)',
    text: 'Автоматизировали с помощью NeuroAI целый отдел поддержки. Бот обрабатывает 80% запросов клиентов. ROI окупился за первый месяц. Это будущее бизнеса.',
    rating: 5,
  },
  {
    name: 'Наталья Смирнова',
    role: 'Контент-менеджер',
    avatar: 'НС',
    avatarColor: 'linear-gradient(135deg, #fb923c, #f59e0b)',
    text: 'ФайлАI — находка! Загружаю отчёты на 200 страниц и получаю чёткое резюме за 30 секунд. Больше не трачу часы на чтение скучных документов.',
    rating: 5,
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.testimonial-card')
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = '1'
                card.style.transform = 'translateY(0)'
              }, i * 100)
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
    <section id="testimonials" className="py-24 relative" ref={sectionRef}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 50%, rgba(124,58,237,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{
              background: 'rgba(245,158,11,0.1)',
              border: '1px solid rgba(245,158,11,0.3)',
              color: '#fcd34d',
            }}
          >
            Отзывы
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Что говорят{' '}
            <span className="gradient-text">наши пользователи</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Более 50 000 специалистов уже используют NeuroAI каждый день
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card glass-card rounded-2xl p-6"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.borderColor = 'rgba(129,140,248,0.2)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
