// app/page.tsx
'use client'

import { useState } from 'react'
import { Sparkles, ArrowRight, BookOpen, ShieldCheck, Zap, Phone, MapPin, CheckCircle2, MessageCircle, ChevronDown, Award, Users } from 'lucide-react'

export default function App() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', course: 'Нейро-МАД (35 000 ₸)' })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.phone) {
      const text = `Здравствуйте! Новая заявка с сайта центра «Bilim Oner»:\n\n👤 Имя: ${formData.name}\n📞 Телефон: ${formData.phone}\n📚 Направление: ${formData.course}`
      const whatsappUrl = `https://wa.me/77751316128?text=${encodeURIComponent(text)}`
      
      window.open(whatsappUrl, '_blank')
      setSubmitted(true)
    }
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      q: "С какого возраста принимаются дети?",
      a: "Мы принимаем детей с 3 лет на развивающие занятия, подготовку к школе и нейро-направления."
    },
    {
      q: "Сколько детей в одной группе?",
      a: "Занятия проходят в мини-группах до 5 человек, что гарантирует индивидуальный подход к каждому ребенку."
    },
    {
      q: "Сколько стоит пробный урок и диагностика?",
      a: "Пробный урок стоит 2 000 тенге. При покупке абонемента комплексная диагностика ребенка проводится абсолютно бесплатно!"
    },
    {
      q: "Какие методы используются в обучении?",
      a: "Мы совмещаем классические методики с нейроподходом: упражнения на развитие полушарий мозга, концентрации внимания (зейінді) и логики."
    },
    {
      q: "Как записаться на занятие?",
      a: "Вы можете заполнить форму ниже, выбрать курс и отправить заявку в один клик через WhatsApp."
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
              Bilim Oner
            </span>
            <span className="text-[10px] text-indigo-400 font-medium uppercase tracking-widest block">Нейро-орталығы · Атырау</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
          <a href="#about" className="hover:text-white transition-colors">О нас</a>
          <a href="#prices" className="hover:text-white transition-colors">Курсы и цены</a>
          <a href="#map" className="hover:text-white transition-colors">Контакты</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <a 
          href="https://wa.me/77751316128?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%20%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B5%20%C2%ABBilim%20Oner%C2%BB." 
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
          <span>ул. Каршымбай Ахмедиярова, 19/2 (м-н Балыкши, 2 этаж) · Атырау</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight max-w-5xl leading-[1.05] mb-8">
          НЕЙРО-ПРОДЛЕНКА <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            И РАЗВИТИЕ ДЕТЕЙ.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 font-normal leading-relaxed">
          Инновационный образовательный центр в Атырау. Нейро-развитие, мышление, логика, подготовка к школе, ментальная арифметика и языки для детей от 3 лет.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center flex-wrap">
          <a 
            href="#prices" 
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-xl shadow-indigo-600/25 hover:opacity-95 transition-opacity flex items-center justify-center gap-3"
          >
            <span>Посмотреть прайс и курсы</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="https://wa.me/77751316128?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%81%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%20%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B5%20%C2%ABBilim%20Oner%C2%BB." 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold hover:bg-zinc-800/80 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Написать в WhatsApp</span>
          </a>
          <a 
            href="https://instagram.com/bilim_oner_atyrau" 
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
            <h3 className="text-xl font-bold mb-3 text-zinc-100">Нейро-подход</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Развитие миды, зейінді, мышления и логики с использованием современных нейроигр и методик.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl group hover:border-purple-500/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-100">Мини-группы до 5 детей</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Обучение в небольших группах обеспечивает максимальный фокус и внимание преподавателя к каждому ребенку.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl group hover:border-pink-500/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-100">Опытные педагоги</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Профессиональные преподаватели со стажем, любящие детей и знающие современные стандарты развития.
            </p>
          </div>
        </div>
      </section>

      {/* Цены и расширенные направления */}
      <section id="prices" className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-zinc-800/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
            Пробный урок всего за 2 000 ₸ (диагностика бесплатна при покупке абонемента!)
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Наши курсы и прайс</h2>
          <p className="text-zinc-400">Выберите подходящее направление для вашего ребенка в центре «Bilim Oner»</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* 1. Нейро-МАД */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-900/30 border border-zinc-800 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
                Развитие мозга
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-2">Нейро-МАД</h3>
              <p className="text-zinc-400 text-sm mb-6">Развитие миды, зейінді, мышления, памяти и логики.</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-sm py-2 border-b border-zinc-800/60">
                  <span className="text-zinc-300">Формат групп</span>
                  <span className="font-semibold text-zinc-400">До 5 человек</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2">
                  <span className="text-zinc-300">Стоимость</span>
                  <span className="font-bold text-indigo-400">35 000 ₸ / месяц</span>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/77751316128?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%20%D1%80%D0%B5%D0%B1%D0%B5%D0%BD%D0%BA%D0%B0%20%D0%BD%D0%B0%20%C2%AB%D0%9D%D0%B5%D0%B9%D1%80%D0%BE-%D0%9C%D0%90%D0%94%C2%BB." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 font-semibold text-sm transition-all text-center block"
            >
              Записаться в WhatsApp
            </a>
          </div>

          {/* 2. Развивашка */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-indigo-950/30 via-zinc-900/80 to-zinc-900/30 border border-indigo-500/30 backdrop-blur-xl flex flex-col justify-between relative shadow-xl shadow-indigo-950/20">
            <div>
              <div className="absolute -top-3 right-8 px-3 py-1 rounded-full bg-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider">
                Хит
              </div>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
                С 3-х лет
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-2">Развивашка</h3>
              <p className="text-zinc-400 text-sm mb-6">Все необходимые учебные материалы уже включены в стоимость.</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-sm py-2 border-b border-zinc-800/60">
                  <span className="text-zinc-300">Формат групп</span>
                  <span className="font-semibold text-zinc-400">До 5 человек</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2">
                  <span className="text-zinc-300">Стоимость</span>
                  <span className="font-bold text-purple-400">35 000 ₸ / месяц</span>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/77751316128?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%20%D1%80%D0%B5%D0%B1%D0%B5%D0%BD%D0%BA%D0%B0%20%D0%BD%D0%B0%20%C2%AB%D0%A0%D0%B0%D0%B7%D0%B2%D0%B8%D0%B2%D0%B0%D1%88%D0%BA%D1%83%C2%BB." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm hover:opacity-95 transition-opacity text-center shadow-lg shadow-indigo-600/20 block"
            >
              Записаться в WhatsApp
            </a>
          </div>

          {/* 3. Английский язык */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-900/30 border border-zinc-800 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                Языковой курс
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-2">Английский язык</h3>
              <p className="text-zinc-400 text-sm mb-6">Английский язык + нейрографика (длительность урока 1 час).</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-sm py-2 border-b border-zinc-800/60">
                  <span className="text-zinc-300">Формат групп</span>
                  <span className="font-semibold text-zinc-400">До 5 человек</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2">
                  <span className="text-zinc-300">Стоимость</span>
                  <span className="font-bold text-emerald-400">35 000 ₸ / месяц</span>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/77751316128?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%C2%AB%D0%90%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9%20%D1%8F%D0%B7%D1%8B%D0%BA%C2%BB." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 font-semibold text-sm transition-all text-center block"
            >
              Записаться в WhatsApp
            </a>
          </div>

          {/* 4. Ментальная арифметика */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-900/30 border border-zinc-800 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
                Интеллект
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-2">Ментальная арифметика</h3>
              <p className="text-zinc-400 text-sm mb-6">Быстрый счет в уме, развитие концентрации и обоих полушарий.</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-sm py-2 border-b border-zinc-800/60">
                  <span className="text-zinc-300">Формат групп</span>
                  <span className="font-semibold text-zinc-400">До 5 человек</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2">
                  <span className="text-zinc-300">Стоимость</span>
                  <span className="font-bold text-cyan-400">35 000 ₸ / месяц</span>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/77751316128?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%20%D1%80%D0%B5%D0%B1%D0%B5%D0%BD%D0%BA%D0%B0%20%D0%BD%D0%B0%20%C2%AB%D0%9C%D0%B5%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%83%D1%8E%20%D0%B0%D1%80%D0%B8%D1%84%D0%BC%D0%B5%D1%82%D0%B8%D0%BA%D1%83%C2%BB." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 font-semibold text-sm transition-all text-center block"
            >
              Записаться в WhatsApp
            </a>
          </div>

          {/* 5. Скорочтение */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-900/30 border border-zinc-800 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                Навыки чтения
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-2">Скорочтение</h3>
              <p className="text-zinc-400 text-sm mb-6">Увеличение скорости чтения, улучшение понимания и памяти текста.</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-sm py-2 border-b border-zinc-800/60">
                  <span className="text-zinc-300">Формат групп</span>
                  <span className="font-semibold text-zinc-400">До 5 человек</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2">
                  <span className="text-zinc-300">Стоимость</span>
                  <span className="font-bold text-amber-400">35 000 ₸ / месяц</span>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/77751316128?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%20%D1%80%D0%B5%D0%B1%D0%B5%D0%BD%D0%BA%D0%B0%20%D0%BD%D0%B0%20%C2%AB%D0%A1%D0%BA%D0%BE%D1%80%D0%BE%D1%87%D1%82%D0%B5%D0%BD%D0%B8%D0%B5%C2%BB." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 font-semibold text-sm transition-all text-center block"
            >
              Записаться в WhatsApp
            </a>
          </div>

          {/* 6. Подготовка к школе */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-900/30 border border-zinc-800 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
                Школьная база
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-2">Подготовка к школе</h3>
              <p className="text-zinc-400 text-sm mb-6">Основы грамоты, счета, письма и психологическая готовность.</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-sm py-2 border-b border-zinc-800/60">
                  <span className="text-zinc-300">Формат групп</span>
                  <span className="font-semibold text-zinc-400">До 5 человек</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2">
                  <span className="text-zinc-300">Стоимость</span>
                  <span className="font-bold text-rose-400">35 000 ₸ / месяц</span>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/77751316128?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%20%D1%80%D0%B5%D0%B1%D0%B5%D0%BD%D0%BA%D0%B0%20%D0%BD%D0%B0%20%C2%AB%D0%9F%D0%BE%D0%B4%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BA%D1%83%20%D0%BA%20%D1%8шкoле%C2%BB." 
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
                href="https://2gis.kz/atyrau/search/ул.%20Каршымбай%20Ахмедиярова%2C%2019%2F2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold transition-all flex items-center gap-2 text-white border border-zinc-700"
              >
                <span>Открыть в 2GIS</span>
              </a>
              <a 
                href="https://yandex.kz/maps/?text=Атырау%2C%20ул.%20Каршымбай%20Ахмедиярова%2C%2019%2F2" 
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
              <h3 className="text-xl font-bold">ул. Каршымбай Ахмедиярова, 19/2 (2 этаж)</h3>
              <p className="text-sm text-zinc-400">М-н Балыкши, образовательный центр «Bilim Oner» ждет вас!</p>
              <a 
                href="https://2gis.kz/atyrau/search/ул.%20Каршымбай%20Ахмедиярова%2C%2019%2F2" 
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
          <p className="text-zinc-400 text-sm">Всё, что вы хотели знать об обучении в «Bilim Oner»</p>
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
                  <span>г. Атырау, м-н Балыкши, ул. Каршымбай Ахмедиярова, 19/2, 2 этаж</span>
                </div>
                
                <a 
                  href="https://instagram.com/bilim_oner_atyrau" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-indigo-400 transition-colors group"
                >
                  <svg className="w-5 h-5 text-indigo-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span className="underline underline-offset-4 decoration-zinc-700 group-hover:decoration-indigo-400">@bilim_oner_atyrau</span>
                </a>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span>+7 (775) 131-61-28</span>
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
                      placeholder="+7 (775) 000-00-00"
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
                      <option value="Нейро-МАД (35 000 ₸)">Нейро-МАД (35 000 ₸)</option>
                      <option value="Развивашка (35 000 ₸)">Развивашка (35 000 ₸)</option>
                      <option value="Английский язык (35 000 ₸)">Английский язык (35 000 ₸)</option>
                      <option value="Ментальная арифметика (35 000 ₸)">Ментальная арифметика (35 000 ₸)</option>
                      <option value="Скорочтение (35 000 ₸)">Скорочтение (35 000 ₸)</option>
                      <option value="Подготовка к школе (35 000 ₸)">Подготовка к школе (35 000 ₸)</option>
                      <option value="Пробный урок (2 000 ₸)">Пробный урок (2 000 ₸)</option>
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
        <p>© 2026 Образовательный центр «Bilim Oner», г. Атырау. Все права защищены.</p>
        <div className="flex items-center gap-6">
          <a href="https://instagram.com/bilim_oner_atyrau" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors flex items-center gap-1.5">
            <svg className="w-4 h-4 text-pink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span>Instagram</span>
          </a>
          <a href="https://wa.me/77751316128?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%81%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%20%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B5%20%C2%ABBilim%20Oner%C2%BB." target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors flex items-center gap-1.5">
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp (+7 775 131 61 28)</span>
          </a>
        </div>
      </footer>
    </main>
  )
}