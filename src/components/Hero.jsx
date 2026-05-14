import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)

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
      { threshold: 0.1 }
    )

    const elements = heroRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute animate-pulse-slow"
          style={{
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)',
            top: '-100px',
            left: '-200px',
          }}
        />
        <div
          className="absolute animate-pulse-slow"
          style={{
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
            top: '200px',
            right: '-100px',
            animationDelay: '2s',
          }}
        />
        <div
          className="absolute animate-pulse-slow"
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
            bottom: '100px',
            left: '30%',
            animationDelay: '1s',
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(129,140,248,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(129,140,248,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              background: i % 3 === 0 ? '#818cf8' : i % 3 === 1 ? '#c084fc' : '#38bdf8',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.6 + 0.2,
              animation: `float ${Math.random() * 4 + 4}s ease-in-out infinite`,
              animationDelay: Math.random() * 4 + 's',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
          style={{
            background: 'rgba(79,70,229,0.15)',
            border: '1px solid rgba(129,140,248,0.3)',
            color: '#a5b4fc',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.8s ease',
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: '#818cf8', boxShadow: '0 0 8px #818cf8' }}
          />
          Искусственный интеллект нового поколения
        </div>

        {/* Main heading */}
        <h1
          className="reveal text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'all 0.8s ease 0.1s',
          }}
        >
          <span className="text-white">Сила</span>{' '}
          <span className="gradient-text">нейросетей</span>
          <br />
          <span className="text-white">в ваших руках</span>
        </h1>

        {/* Subheading */}
        <p
          className="reveal text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.8s ease 0.2s',
          }}
        >
          Генерация текста, изображений, кода и автоматизация задач — всё в одном месте.
          Используйте мощь AI без технических знаний.
        </p>

        {/* CTA Buttons */}
        <div
          className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.8s ease 0.3s',
          }}
        >
          <button className="btn-primary text-white font-semibold px-8 py-4 rounded-xl text-base w-full sm:w-auto">
            Начать бесплатно →
          </button>
          <button className="btn-secondary text-white font-medium px-8 py-4 rounded-xl text-base w-full sm:w-auto flex items-center justify-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
            </svg>
            Посмотреть возможности
          </button>
        </div>

        {/* Stats */}
        <div
          className="reveal grid grid-cols-3 gap-8 max-w-lg mx-auto"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.8s ease 0.4s',
          }}
        >
          {[
            { value: '50K+', label: 'Пользователей' },
            { value: '10M+', label: 'Запросов в день' },
            { value: '99.9%', label: 'Uptime' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Hero visual */}
        <div
          className="reveal mt-20 relative max-w-4xl mx-auto"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'all 1s ease 0.5s',
          }}
        >
          <div
            className="glass-card rounded-2xl p-6 sm:p-8"
            style={{
              boxShadow: '0 0 80px rgba(79,70,229,0.15), 0 0 120px rgba(79,70,229,0.05)',
              border: '1px solid rgba(129,140,248,0.15)',
            }}
          >
            {/* Fake terminal / chat UI */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full" style={{ background: '#ef4444' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#f59e0b' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#22c55e' }} />
              <div
                className="ml-4 flex-1 h-6 rounded-md"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              />
            </div>

            <div className="space-y-4 text-left">
              {/* User message */}
              <div className="flex justify-end">
                <div
                  className="px-4 py-3 rounded-2xl rounded-tr-sm text-sm text-white max-w-xs"
                  style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}
                >
                  Напиши мне описание продукта для лендинга
                </div>
              </div>

              {/* AI response */}
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
                  style={{ background: 'linear-gradient(135deg, #818cf8, #c084fc)' }}
                >
                  AI
                </div>
                <div
                  className="px-4 py-3 rounded-2xl rounded-tl-sm text-sm text-slate-300 max-w-sm"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  Конечно! Вот описание для вашего лендинга:
                  <br /><br />
                  <span className="text-white">
                    🚀 Революционный продукт, который меняет правила игры...
                  </span>
                </div>
              </div>

              {/* Typing indicator */}
              <div className="flex items-center gap-2 pl-11">
                <div
                  className="flex gap-1 px-4 py-3 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {[0, 0.2, 0.4].map((delay, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: '#818cf8',
                        animation: `pulseSlow 1.4s ease-in-out infinite`,
                        animationDelay: `${delay}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
