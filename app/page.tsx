// app/page.tsx
'use client'

import { useState } from 'react'
import { Sparkles, ArrowRight, BookOpen, ShieldCheck, Zap, Phone, MapPin, CheckCircle2, MessageCircle, ChevronDown } from 'lucide-react'

export default function App() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', course: '0-1 классы (Дневная программа)' })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.phone) {
      const text = `Здравствуйте! Новая заявка с сайта «Успевайка»:\n\n👤 Имя: ${formData.name}\n📞 Телефон: ${formData.phone}\n📚 Направление: ${formData.course}`
      const whatsappUrl = `https://wa.me/77012258666?text=${encodeURIComponent(text)}`
      
      window.open(whatsappUrl, '_blank')
      setSubmitted(true)
    }
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      q: "Нужно ли приносить свои учебники и тетради?",
      a: "Уточните этот вопрос у администратора центра при записи на занятие."
    },
    {
      q: "Сколько детей в одной группе?",
      a: "Мы формируем небольшие группы для комфортного обучения и индивидуального подхода к каждому ребенку."
    },
    {
      q: "Как записаться на пробное занятие?",
      a: "Вы можете оставить заявку на сайте или написать нам в WhatsApp, и мы подберем удобное время."
    },
    {
      q: "Как можно перенести занятие?",
      a: "Все вопросы по расписанию и пропускам решаются индивидуально с администратором."
    }
  ]

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500 selection:text-white overflow-hidden relative">
      {/* Фоновые сияющие градиенты */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-600/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Шапка сайта */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 h-24 flex items-center justify-between border-b border-zinc-800/50 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent block">
              Успевайка
            </span>
            <span className="text-[10px] text-indigo-400 font-medium uppercase tracking-widest block">Оқу орталығы</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
          <a href="#about" className="hover:text-white transition-colors">О нас</a>
          <a href="#prices" className="hover:text-white transition-colors">Цены и курсы</a>
          <a href="#map" className="hover:text-white transition-colors">Карта</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
        </div>

        <a 
          href="https://wa.me/77012258666?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%20%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B5%20%C2%AB%D0%A3%D1%81%D0%BF%D0%B5%D0%B2%D0%B0%D0%B9%D0%BA%D0%B0%C2%BB." 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-700/60 text-sm font-medium hover:bg-zinc-800 hover:border-zinc-600 transition-all shadow-xl flex items-center gap-2 group"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>WhatsApp</span>
        </a>
      </nav>

      {/* Главный экран (Hero) */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-28 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-8 backdrop-blur-sm">
          <Zap className="w-3.5 h-3.5" />
          <span>ул. Жубана Молдагалиева, 32 · Атырау</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight max-w-5xl leading-[1.05] mb-8">
          УЧИМСЯ С ИНТЕРЕСОМ, <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            ДОБИВАЕМСЯ ВЫСОТ.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 font-normal leading-relaxed">
          Профессиональный учебный центр для детей и школьников в Атырау. Развитие, знания и уверенность в будущем.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center flex-wrap">
          <a 
            href="#prices" 
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-xl shadow-indigo-600/25 hover:opacity-95 transition-opacity flex items-center justify-center gap-3"
          >
            <span>Посмотреть цены</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="https://wa.me/77012258666?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%20%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B5%20%C2%AB%D0%A3%D1%81%D0%BF%D0%B5%D0%B2%D0%B0%D0%B9%D0%BA%D0%B0%C2%BB." 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold hover:bg-zinc-800/80 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Связаться в WhatsApp</span>
          </a>
          <a 
            href="https://instagram.com/uspevaika.atyrau" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold hover:bg-zinc-800/80 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5 text-pink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </section>

      {/* Преимущества */}
      <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 py-16 border-t border-zinc-800/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl group hover:border-indigo-500/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-100">Индивидуальный подход</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Внимание к особенностям и уровню каждого ученика для достижения лучших результатов.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl group hover:border-purple-500/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-100">Опытные педагоги</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Квалифицированные преподаватели, умеющие увлечь детей процессом обучения.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl group hover:border-pink-500/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-100">Комфортная атмосфера</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Удобное расположение в городе и современные условия для эффективных занятий.
            </p>
          </div>
        </div>
      </section>

      {/* Цены и направления */}
      <section id="prices" className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-zinc-800/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Цены и направления</h2>
          <p className="text-zinc-400">Актуальный прайс-лист учебного центра «Успевайка»</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Карточка 1: 0-1 классы */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-900/30 border border-zinc-800 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
                5 дневная программа
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-2">0–1 классы</h3>
              <p className="text-zinc-400 text-sm mb-6">Дневная программа для подготовки и развития.</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-sm py-2 border-b border-zinc-800/60">
                  <span className="text-zinc-300">2 часа</span>
                  <span className="font-bold text-indigo-400">30 000 тенге</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2 border-b border-zinc-800/60">
                  <span className="text-zinc-300">3 часа</span>
                  <span className="font-bold text-indigo-400">40 000 тенге</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2">
                  <span className="text-zinc-300">4 часа</span>
                  <span className="font-bold text-indigo-400">50 000 тенге</span>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/77012258666?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%20%D1%80%D0%B5%D0%B1%D0%B5%D0%BD%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BA%D1%83%D1%80%D1%81%200-1%20%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 font-semibold text-sm transition-all text-center block"
            >
              Записаться в WhatsApp
            </a>
          </div>

          {/* Карточка 2: 2-4 классы */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-indigo-950/30 via-zinc-900/80 to-zinc-900/30 border border-indigo-500/30 backdrop-blur-xl flex flex-col justify-between relative shadow-xl shadow-indigo-950/20">
            <div>
              <div className="absolute -top-3 right-8 px-3 py-1 rounded-full bg-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider">
                Популярно
              </div>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
                5 дневная программа
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-2">2–4 классы</h3>
              <p className="text-zinc-400 text-sm mb-6">Поддержка школьной программы и углубленные занятия.</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-sm py-2 border-b border-zinc-800/60">
                  <span className="text-zinc-300">2 часа</span>
                  <span className="font-bold text-purple-400">35 000 тенге</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2 border-b border-zinc-800/60">
                  <span className="text-zinc-300">3 часа</span>
                  <span className="font-bold text-purple-400">45 000 тенге</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2">
                  <span className="text-zinc-300">4 часа</span>
                  <span className="font-bold text-purple-400">55 000 тенге</span>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/77012258666?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%20%D1%80%D0%B5%D0%B1%D0%B5%D0%BD%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D0%BA%D1%83%D1%80%D1%81%202-4%20%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm hover:opacity-95 transition-opacity text-center shadow-lg shadow-indigo-600/20 block"
            >
              Записаться в WhatsApp
            </a>
          </div>

          {/* Карточка 3: Английский язык */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-900/30 border border-zinc-800 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                Языковой курс
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-2">Английский язык</h3>
              <p className="text-zinc-400 text-sm mb-6">Эффективное изучение для детей и школьников.</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-sm py-2 border-b border-zinc-800/60">
                  <span className="text-zinc-300">3 раза в нед. по 1 часу</span>
                  <span className="font-bold text-emerald-400">20 000 тг</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2">
                  <span className="text-zinc-300">5 раз в нед. по 1 часу</span>
                  <span className="font-bold text-emerald-400">25 000 тг</span>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/77012258666?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BA%D1%83%D1%80%D1%81%20%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D1%8F%D0%B7%D1%8B%D0%BA%D0%B0." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 font-semibold text-sm transition-all text-center block"
            >
              Записаться в WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Интерактивная карта / Схема проезда */}
      <section id="map" className="relative z-10 max-w-7xl mx-auto px-6 py-12 border-t border-zinc-800/50">
        <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                Локация в Атырау
              </span>
              <h2 className="text-3xl font-extrabold mt-3">Как нас найти</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://2gis.kz/atyrau" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold transition-all flex items-center gap-2 text-white border border-zinc-700"
              >
                <span>Открыть в 2GIS</span>
              </a>
              <a 
                href="https://yandex.kz/maps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold transition-all flex items-center gap-2 text-white border border-zinc-700"
              >
                <span>Яндекс Карты</span>
              </a>
            </div>
          </div>
          
          <div className="w-full h-[320px] rounded-2xl bg-zinc-950 border border-zinc-800/80 overflow-hidden relative flex items-center justify-center text-center p-6">
            <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
            <div className="relative z-10 max-w-md space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mx-auto shadow-lg shadow-indigo-600/20">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold">ул. Жубана Молдагалиева, 32</h3>
              <p className="text-sm text-zinc-400">Учебный центр «Успевайка» ждет вас!</p>
              <a 
                href="https://2gis.kz/atyrau" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-xs shadow-lg shadow-indigo-600/25 hover:opacity-95 transition-opacity"
              >
                Построить маршрут в 2GIS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Часто задаваемые вопросы (FAQ) */}
      <section id="faq" className="relative z-10 max-w-4xl mx-auto px-6 py-20 border-t border-zinc-800/50">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3 mb-4">Часто задаваемые вопросы</h2>
          <p className="text-zinc-400 text-sm">Всё, что вы хотели знать об обучении в «Успевайке»</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-zinc-200 hover:text-white transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-indigo-400 shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/40 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Форма заявки и контакты */}
      <section id="contacts" className="relative z-10 max-w-4xl mx-auto px-6 py-20 border-t border-zinc-800/50">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-900/90 to-zinc-900/40 border border-zinc-800 backdrop-blur-2xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Оставьте заявку, и мы ответим на все вопросы в WhatsApp!
              </p>
              
              <div className="space-y-4 text-sm text-zinc-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span>г. Атырау, улица Жубана Молдагалиева, 32</span>
                </div>
                
                {/* Кликабельная ссылка на Instagram */}
                <a 
                  href="https://instagram.com/uspevaika.atyrau" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-indigo-400 transition-colors group"
                >
                  <svg className="w-5 h-5 text-indigo-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span className="underline underline-offset-4 decoration-zinc-700 group-hover:decoration-indigo-400">@uspevaika.atyrau</span>
                </a>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span>+7 (701) 225-86-66</span>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h3 className="text-xl font-bold text-white">Заявка заполнена!</h3>
                  <p className="text-sm text-zinc-300">Открылся чат WhatsApp с вашими данными. Нажмите кнопку отправки!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">Ваше имя</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Введите ваше имя"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">Номер телефона</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (707) 000-00-00"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">Интересующее направление</label>
                    <select 
                      value={formData.course}
                      onChange={(e) => setFormData({...formData, course: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="0-1 классы (Дневная программа)">0-1 классы (Дневная программа)</option>
                      <option value="2-4 классы (Дневная программа)">2-4 классы (Дневная программа)</option>
                      <option value="Курс английского языка">Курс английского языка</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm hover:opacity-95 transition-opacity shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-300" />
                    <span>Сформировать заявку в WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-12 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p>© 2026 Учебный центр «Успевайка», г. Атырау. Все права защищены.</p>
        <div className="flex items-center gap-6">
          <a href="https://instagram.com/uspevaika.atyrau" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors flex items-center gap-1.5">
            <svg className="w-4 h-4 text-pink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span>Instagram</span>
          </a>
          <a href="https://wa.me/77012258666?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%20%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B5%20%C2%AB%D0%A3%D1%81%D0%BF%D0%B5%D0%B2%D0%B0%D0%B9%D0%BA%D0%B0%C2%BB." target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors flex items-center gap-1.5">
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp (+7 701 225 86 66)</span>
          </a>
        </div>
      </footer>
    </main>
  )
}