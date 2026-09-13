// app/page.tsx
'use client'

import { useState } from 'react'
import { Sparkles, ArrowRight, BookOpen, ShieldCheck, Zap, Phone, MapPin, CheckCircle2, MessageCircle, ChevronDown, Award } from 'lucide-react'

export default function App() {
  // 📱 ИЗМЕНИТЕ КОНТАКТЫ ЗДЕСЬ (обновятся по всему сайту):
  const PHONE_NUMBER = '77751316128'        // Номер для WhatsApp (только цифры)
  const PHONE_DISPLAY = '+7 (775) 131-61-28' // Формат для чтения
  const CENTER_NAME = 'Нейро-центр'          // Название центра
  const ADDRESS = 'ул. Каршымбай Ахмедиярова, 19/2 (м-н Балыкши)' // Адрес

  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', course: 'Нейро-продленка' })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.phone) {
      const text = `Здравствуйте! Новая заявка с сайта:\n\n👤 Имя: ${formData.name}\n📞 Телефон: ${formData.phone}\n📚 Направление: ${formData.course}`
      const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`
      
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
      a: "Занятия проходят в мини-группах до 5 человек для максимального внимания к каждому ребенку."
    },
    {
      q: "Как записаться на занятие?",
      a: "Заполните форму ниже или нажмите кнопку «Записаться в WhatsApp», чтобы отправить заявку в один клик."
    }
  ]

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500 selection:text-white overflow-hidden relative">
      {/* Фоновые градиенты */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-600/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Шапка сайта */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 h-24 flex items-center justify-between border-b border-zinc-800/50 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent block">
              {CENTER_NAME}
            </span>
            <span className="text-[10px] text-indigo-400 font-medium uppercase tracking-widest block">Образовательный центр · Атырау</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
          <a href="#about" className="hover:text-white transition-colors">О нас</a>
          <a href="#prices" className="hover:text-white transition-colors">Курсы и цены</a>
          <a href="#map" className="hover:text-white transition-colors">Контакты</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <a 
          href={`https://wa.me/${PHONE_NUMBER}`} 
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
          <span>{ADDRESS} · Атырау</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight max-w-5xl leading-[1.05] mb-8">
          НЕЙРО-ПРОДЛЕНКА <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            И РАЗВИТИЕ ДЕТЕЙ.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 font-normal leading-relaxed">
          Современный развивающий центр в Атырау. Нейроподход, ментальная арифметика, подготовка к школе и языки для детей от 3 лет.
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
            href={`https://wa.me/${PHONE_NUMBER}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold hover:bg-zinc-800/80 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Написать в WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Преимущества */}
      <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 py-16 border-t border-zinc-800/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-100">Нейро-подход</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Развитие внимания, памяти, логики и межполушарных связей с помощью эффективных методик.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-100">Мини-группы до 5 детей</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Индивидуальный подход к каждому ребенку благодаря небольшому количеству детей в группах.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-100">Опытные педагоги</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Квалифицированные специалисты со стажем работы и любовью к детям.
            </p>
          </div>
        </div>
      </section>

      {/* Направления и цены из новых данных */}
      <section id="prices" className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-zinc-800/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 inline-block">
            Актуальный прайс
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Наши курсы и направления</h2>
          <p className="text-zinc-400">Выберите подходящее направление для вашего ребенка</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Курс 1 */}
          <div className="p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">Развитие</span>
              <h3 className="text-2xl font-bold mt-4 mb-2">Нейро-продленка</h3>
              <p className="text-zinc-400 text-sm mb-6">Помощь с уроками, развитие внимания и интеллектуальных способностей.</p>
              <div className="space-y-3 mb-8 text-sm">
                <div className="flex justify-between py-2 border-b border-zinc-800">
                  <span className="text-zinc-300">Формат</span>
                  <span className="text-zinc-400 font-semibold">До 5 человек</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-300">Стоимость</span>
                  <span className="text-indigo-400 font-bold">35 000 ₸ / месяц</span>
                </div>
              </div>
            </div>
            <a 
              href={`https://wa.me/${PHONE_NUMBER}?text=Здравствуйте! Хочу записать ребенка на Нейро-продленку.`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 font-semibold text-sm text-center block transition-all"
            >
              Записаться в WhatsApp
            </a>
          </div>

          {/* Курс 2 */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-indigo-950/30 via-zinc-900/80 to-zinc-900/30 border border-indigo-500/30 flex flex-col justify-between relative shadow-xl">
            <div>
              <div className="absolute -top-3 right-8 px-3 py-1 rounded-full bg-indigo-600 text-white text-[11px] font-bold uppercase">Хит</div>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">С 3 лет</span>
              <h3 className="text-2xl font-bold mt-4 mb-2">Развивашка</h3>
              <p className="text-zinc-400 text-sm mb-6">Комплексное раннее развитие детей с использованием игровых элементов.</p>
              <div className="space-y-3 mb-8 text-sm">
                <div className="flex justify-between py-2 border-b border-zinc-800">
                  <span className="text-zinc-300">Формат</span>
                  <span className="text-zinc-400 font-semibold">До 5 человек</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-300">Стоимость</span>
                  <span className="text-purple-400 font-bold">35 000 ₸ / месяц</span>
                </div>
              </div>
            </div>
            <a 
              href={`https://wa.me/${PHONE_NUMBER}?text=Здравствуйте! Хочу записать ребенка на Развивашку.`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm text-center block shadow-lg"
            >
              Записаться в WhatsApp
            </a>
          </div>

          {/* Курс 3 */}
          <div className="p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">Языки</span>
              <h3 className="text-2xl font-bold mt-4 mb-2">Английский язык</h3>
              <p className="text-zinc-400 text-sm mb-6">Интересный английский для детей с элементами нейрографики.</p>
              <div className="space-y-3 mb-8 text-sm">
                <div className="flex justify-between py-2 border-b border-zinc-800">
                  <span className="text-zinc-300">Формат</span>
                  <span className="text-zinc-400 font-semibold">До 5 человек</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-300">Стоимость</span>
                  <span className="text-emerald-400 font-bold">35 000 ₸ / месяц</span>
                </div>
              </div>
            </div>
            <a 
              href={`https://wa.me/${PHONE_NUMBER}?text=Здравствуйте! Хочу записать ребенка на Английский язык.`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 font-semibold text-sm text-center block transition-all"
            >
              Записаться в WhatsApp
            </a>
          </div>

          {/* Курс 4 */}
          <div className="p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">Интеллект</span>
              <h3 className="text-2xl font-bold mt-4 mb-2">Ментальная арифметика</h3>
              <p className="text-zinc-400 text-sm mb-6">Быстрый счет в уме и развитие концентрации внимания.</p>
              <div className="space-y-3 mb-8 text-sm">
                <div className="flex justify-between py-2 border-b border-zinc-800">
                  <span className="text-zinc-300">Формат</span>
                  <span className="text-zinc-400 font-semibold">До 5 человек</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-300">Стоимость</span>
                  <span className="text-cyan-400 font-bold">35 000 ₸ / месяц</span>
                </div>
              </div>
            </div>
            <a 
              href={`https://wa.me/${PHONE_NUMBER}?text=Здравствуйте! Хочу записать ребенка на Ментальную арифметику.`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 font-semibold text-sm text-center block transition-all"
            >
              Записаться в WhatsApp
            </a>
          </div>

          {/* Курс 5 */}
          <div className="p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">Навыки</span>
              <h3 className="text-2xl font-bold mt-4 mb-2">Скорочтение</h3>
              <p className="text-zinc-400 text-sm mb-6">Увеличение скорости чтения и улучшение усвоения прочитанного.</p>
              <div className="space-y-3 mb-8 text-sm">
                <div className="flex justify-between py-2 border-b border-zinc-800">
                  <span className="text-zinc-300">Формат</span>
                  <span className="text-zinc-400 font-semibold">До 5 человек</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-300">Стоимость</span>
                  <span className="text-amber-400 font-bold">35 000 ₸ / месяц</span>
                </div>
              </div>
            </div>
            <a 
              href={`https://wa.me/${PHONE_NUMBER}?text=Здравствуйте! Хочу записать ребенка на Скорочтение.`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 font-semibold text-sm text-center block transition-all"
            >
              Записаться в WhatsApp
            </a>
          </div>

          {/* Курс 6 */}
          <div className="p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">Школа</span>
              <h3 className="text-2xl font-bold mt-4 mb-2">Подготовка к школе</h3>
              <p className="text-zinc-400 text-sm mb-6">Обучение грамоте, чтению, счету и развитие психологической готовности.</p>
              <div className="space-y-3 mb-8 text-sm">
                <div className="flex justify-between py-2 border-b border-zinc-800">
                  <span className="text-zinc-300">Формат</span>
                  <span className="text-zinc-400 font-semibold">До 5 человек</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-300">Стоимость</span>
                  <span className="text-rose-400 font-bold">35 000 ₸ / месяц</span>
                </div>
              </div>
            </div>
            <a 
              href={`https://wa.me/${PHONE_NUMBER}?text=Здравствуйте! Хочу записать ребенка на Подготовку к школе.`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 font-semibold text-sm text-center block transition-all"
            >
              Записаться в WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Контакты и карта */}
      <section id="map" className="relative z-10 max-w-7xl mx-auto px-6 py-12 border-t border-zinc-800/50">
        <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                Локация
              </span>
              <h2 className="text-3xl font-extrabold mt-3">Как нас найти</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://2gis.kz/atyrau" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-white border border-zinc-700"
              >
                Открыть в 2GIS
              </a>
            </div>
          </div>
          
          <div className="w-full h-[300px] rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-center p-6">
            <div className="space-y-4">
              <MapPin className="w-8 h-8 text-indigo-400 mx-auto" />
              <h3 className="text-xl font-bold">{ADDRESS}</h3>
              <p className="text-sm text-zinc-400">Ждем вас на занятия!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section id="contacts" className="relative z-10 max-w-4xl mx-auto px-6 py-20 border-t border-zinc-800/50">
        <div className="p-8 md:p-12 rounded-3xl bg-zinc-900 border border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-zinc-400 text-sm mb-6">Оставьте заявку, и мы ответим на все вопросы в WhatsApp!</p>
              <div className="space-y-3 text-sm text-zinc-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                  <span>г. Атырау, {ADDRESS}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-indigo-400" />
                  <span>{PHONE_DISPLAY}</span>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h3 className="text-xl font-bold text-white">Заявка заполнена!</h3>
                  <p className="text-sm text-zinc-300">Открылся чат WhatsApp с вашими данными.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Ваше имя</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Введите имя"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Номер телефона</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (775) 000-00-00"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Направление</label>
                    <select 
                      value={formData.course}
                      onChange={(e) => setFormData({...formData, course: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Нейро-продленка">Нейро-продленка (35 000 ₸)</option>
                      <option value="Развивашка">Развивашка (35 000 ₸)</option>
                      <option value="Английский язык">Английский язык (35 000 ₸)</option>
                      <option value="Ментальная арифметика">Ментальная арифметика (35 000 ₸)</option>
                      <option value="Скорочтение">Скорочтение (35 000 ₸)</option>
                      <option value="Подготовка к школе">Подготовка к школе (35 000 ₸)</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 hover:opacity-95"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-300" />
                    <span>Отправить в WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-12 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p>© 2026 Образовательный центр, г. Атырау. Все права защищены.</p>
        <a href={`https://wa.me/${PHONE_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 flex items-center gap-1.5">
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>WhatsApp ({PHONE_DISPLAY})</span>
        </a>
      </footer>
    </main>
  )
}