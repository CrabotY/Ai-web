import { useState, useEffect, useRef } from 'react'

const faqs = [
  {
    question: 'Что такое NeuroAI и как это работает?',
    answer:
      'NeuroAI — это платформа, объединяющая лучшие AI-модели в одном интерфейсе. Мы интегрировали GPT-4, Claude, Stable Diffusion и другие модели, добавили удобный интерфейс и инструменты автоматизации. Вы просто описываете задачу на русском языке — AI выполняет её.',
  },
  {
    question: 'Нужны ли технические знания для работы?',
    answer:
      'Абсолютно нет! NeuroAI создан для людей без технической подготовки. Просто пишите задачи на обычном языке, как будто общаетесь с коллегой. Наш интерфейс интуитивно понятен и не требует специальных знаний.',
  },
  {
    question: 'Как защищены мои данные?',
    answer:
      'Безопасность — наш приоритет. Все данные передаются по зашифрованному каналу (TLS 1.3). Мы не храним ваши диалоги дольше 30 дней (если вы не сохраните их сами). Ваши данные никогда не используются для обучения AI-моделей без явного согласия.',
  },
  {
    question: 'Есть ли ограничения на бесплатном тарифе?',
    answer:
      'Бесплатный тариф включает 50 запросов в день к текстовым моделям, базовые шаблоны и доступ к сообществу. Генерация изображений, API и расширенные функции доступны на платных тарифах.',
  },
  {
    question: 'Можно ли интегрировать NeuroAI с другими сервисами?',
    answer:
      'Да! На тарифах Про и Бизнес доступен полный API. Мы также предоставляем готовые интеграции с Notion, Telegram, Google Sheets, Slack и другими популярными сервисами. На тарифе Бизнес доступна кастомная интеграция через webhook.',
  },
  {
    question: 'Как работает возврат средств?',
    answer:
      'Мы предоставляем 14-дневную гарантию возврата средств без объяснения причин. Если вы не довольны сервисом в течение первых 14 дней после оплаты — напишите нам, и мы вернём деньги в полном объёме.',
  },
  {
    question: 'Поддерживаете ли вы командную работу?',
    answer:
      'Да, тариф Бизнес поддерживает до 20 участников с разными уровнями доступа. Администратор может управлять правами, видеть статистику использования и настраивать рабочие пространства для каждого члена команды.',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: open ? 'rgba(79,70,229,0.08)' : 'rgba(255,255,255,0.03)',
        border: open ? '1px solid rgba(129,140,248,0.3)' : '1px solid rgba(255,255,255,0.07)',
        transition: 'all 0.3s ease',
      }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white font-medium text-sm sm:text-base pr-4">{faq.question}</span>
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: open ? 'rgba(129,140,248,0.2)' : 'rgba(255,255,255,0.05)',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5v14M5 12h14"
              stroke={open ? '#818cf8' : '#94a3b8'}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </button>

      <div
        style={{
          maxHeight: open ? '300px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}
      >
        <p className="text-slate-400 text-sm leading-relaxed px-6 pb-5">{faq.answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.faq-item')
            items.forEach((item, i) => {
              setTimeout(() => {
                item.style.opacity = '1'
                item.style.transform = 'translateY(0)'
              }, i * 80)
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
    <section id="faq" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{
              background: 'rgba(56,189,248,0.1)',
              border: '1px solid rgba(56,189,248,0.3)',
              color: '#7dd3fc',
            }}
          >
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Часто задаваемые{' '}
            <span className="gradient-text">вопросы</span>
          </h2>
          <p className="text-slate-400 text-lg">Не нашли ответ? Напишите нам — ответим в течение часа</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-item"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
            >
              <FAQItem faq={faq} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
