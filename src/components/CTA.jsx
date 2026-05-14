import { useEffect, useRef } from 'react'

export default function CTA() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="relative rounded-3xl p-12 sm:p-16 text-center overflow-hidden"
          style={{
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            background: 'linear-gradient(135deg, rgba(79,70,229,0.2) 0%, rgba(124,58,237,0.15) 50%, rgba(56,189,248,0.1) 100%)',
            border: '1px solid rgba(129,140,248,0.2)',
          }}
        >
          {/* Background decoration */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(circle at 20% 50%, rgba(79,70,229,0.2) 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, rgba(124,58,237,0.15) 0%, transparent 50%)
              `,
            }}
          />

          {/* Animated ring */}
          <div
            className="absolute top-1/2 left-1/2 animate-spin-slow pointer-events-none"
            style={{
              width: '400px',
              height: '400px',
              marginTop: '-200px',
              marginLeft: '-200px',
              border: '1px dashed rgba(129,140,248,0.15)',
              borderRadius: '50%',
            }}
          />

          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{
                background: 'rgba(129,140,248,0.15)',
                border: '1px solid rgba(129,140,248,0.3)',
                color: '#a5b4fc',
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#818cf8' }}
              />
              Бесплатный доступ уже сейчас
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Готовы попробовать{' '}
              <span className="gradient-text">будущее</span>?
            </h2>

            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
              Присоединяйтесь к 50 000+ пользователям, которые уже работают в 3 раза
              эффективнее с NeuroAI. Начните бесплатно — без карты.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary text-white font-semibold px-8 py-4 rounded-xl text-base w-full sm:w-auto min-w-48">
                Начать бесплатно →
              </button>
              <button className="btn-secondary text-white font-medium px-8 py-4 rounded-xl text-base w-full sm:w-auto min-w-48">
                Посмотреть демо
              </button>
            </div>

            <p className="text-slate-600 text-sm mt-6">
              Без кредитной карты · 50 запросов бесплатно · Отмена в любой момент
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
