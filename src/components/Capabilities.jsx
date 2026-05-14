import { useEffect, useRef } from 'react'

const capabilities = [
  {
    title: 'Понимает контекст',
    description: 'Нейросеть запоминает историю разговора и поддерживает длинные диалоги без потери контекста.',
    icon: '🧠',
  },
  {
    title: 'Пишет и редактирует',
    description: 'Создаёт статьи, посты, сценарии, описания товаров и любые тексты профессионального уровня.',
    icon: '✍️',
  },
  {
    title: 'Генерирует изображения',
    description: 'Превращает текстовые описания в реалистичные фото, иллюстрации и арты за секунды.',
    icon: '🎨',
  },
  {
    title: 'Пишет и отлаживает код',
    description: 'Создаёт код на любом языке, находит ошибки и объясняет сложные алгоритмы простыми словами.',
    icon: '💻',
  },
  {
    title: 'Анализирует данные',
    description: 'Обрабатывает файлы Excel, PDF, CSV — находит закономерности и делает выводы.',
    icon: '📊',
  },
  {
    title: 'Переводит и адаптирует',
    description: 'Переводит тексты на 50+ языков с сохранением стиля и тональности оригинала.',
    icon: '🌍',
  },
]

export default function Capabilities() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.cap-item')
            items.forEach((item, i) => {
              setTimeout(() => {
                item.style.opacity = '1'
                item.style.transform = 'translateX(0)'
              }, i * 80)
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
    <section id="capabilities" className="py-24 relative" ref={sectionRef}>
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 70% 50%, rgba(79,70,229,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{
                background: 'rgba(56,189,248,0.1)',
                border: '1px solid rgba(56,189,248,0.3)',
                color: '#7dd3fc',
              }}
            >
              Возможности
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Что умеют{' '}
              <span className="gradient-text">нейросети</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Современные AI-модели обучены на триллионах параметров и способны
              решать задачи, которые раньше требовали команды специалистов.
            </p>

            {/* Progress bars */}
            {[
              { label: 'Генерация текста', value: 98 },
              { label: 'Создание кода', value: 95 },
              { label: 'Анализ данных', value: 92 },
              { label: 'Генерация изображений', value: 89 },
            ].map((item) => (
              <div key={item.label} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">{item.label}</span>
                  <span className="text-slate-500">{item.value}%</span>
                </div>
                <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${item.value}%`,
                      background: 'linear-gradient(90deg, #4f46e5, #7c3aed, #c084fc)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right: capability cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="cap-item glass-card glass-card-hover rounded-xl p-4"
                style={{
                  opacity: 0,
                  transform: 'translateX(30px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <div className="text-2xl mb-2">{cap.icon}</div>
                <h4 className="text-white font-semibold text-sm mb-1">{cap.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
