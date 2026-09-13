'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Clock,
  Phone,
  ChevronDown,
  Star,
  Shield,
  Car,
  Wrench,
  Send,
  User
} from 'lucide-react';

const InstagramIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const BrandLogoSVG = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 500"
    className={className}
  >
    <rect width="500" height="500" rx="90" fill="#111827" />
    <path
      d="M170 340 L250 150 L330 340 H280 L250 250 L220 340 H170 Z"
      fill="#2563EB"
    />
    <circle cx="250" cy="120" r="15" fill="#60A5FA" />
  </svg>
);

const PHONE_NUMBER = '77014573412';
const PHONE_DISPLAY = '+7 (555) 123-4567';
const STUDIO_NAME = 'SPARKLE';
const ADDRESS_TEXT = '418 Pearl Avenue, San Francisco, CA 94110';

const getWhatsAppUrl = (text: string) =>
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;

interface ServiceItem {
  id: string;
  title: string;
  time: string;
  price: string;
  description: string;
  features: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: 'express-wash',
    title: 'Экспресс ручная мойка',
    time: '45 мин',
    price: '$45',
    description: 'Двухфазная ручная мойка с pH-нейтральным шампунем, мягкой микрофиброй и чисткой дисков.',
    features: [
      'Двухфазная ручная мойка',
      'Безопасная сушка микрофиброй',
      'Очистка колес и чернение шин',
      'Легкая уборка салона пылесосом'
    ]
  },
  {
    id: 'full-interior',
    title: 'Детейлинг салона',
    time: '3 часа',
    price: '$220',
    description: 'Глубокая химчистка кожи, текстиля, пластика и дезинфекция паром с защитным покрытием.',
    features: [
      'Глубокая химчистка сидений и ковров',
      'Кондиционер для натуральной кожи',
      'Паровая обработка дефлекторов',
      'Устранение стойких запахов'
    ]
  },
  {
    id: 'paint-correction',
    title: 'Полировка кузова',
    time: '1–2 дня',
    price: '$650',
    description: 'Многоэтапная полировка для удаления царапин, паутинки и возвращения глубокого блеска ЛКП.',
    features: [
      'Многоэтапное удаление царапин',
      'Замер толщины лакокрасочного слоя',
      'Устранение следов от жесткой воды',
      'Финишное глянцевое покрытие'
    ]
  },
  {
    id: 'ceramic-coating',
    title: 'Керамическое покрытие',
    time: '2 дня',
    price: '$1 290',
    description: '9H профессиональная керамика с гидрофобным эффектом сроком службы до 3 лет.',
    features: [
      'Защита от реагентов и ультрафиолета',
      'Гидрофобный эффект (капли скатываются)',
      'Гарантия и ежегодный осмотр',
      'Блеск нового автомобиля'
    ]
  }
];

export default function SparkleStudioLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [service, setService] = useState('Экспресс ручная мойка');
  const [notes, setNotes] = useState('');

  const faqs = [
    {
      q: 'Сколько времени занимает стандартная ручная мойка?',
      a: 'Наша ручная мойка занимает в среднем 30–45 минут. Полные комплексы по деталингу кузова и салона могут занять от 2 до 4 часов в зависимости от размера и состояния автомобиля.'
    },
    {
      q: 'Нужно ли заранее записываться на прием?',
      a: 'Да, мы рекомендуем бронировать время заранее через сайт или мессенджер, чтобы мастер подготовил бокс именно под ваш автомобиль.'
    },
    {
      q: 'Какие средства и автохимия используются?',
      a: 'Мы применяем исключительно премиальные безопасные составы от ведущих мировых производителей с нейтральным pH.'
    },
    {
      q: 'Стоит ли делать керамическое покрытие?',
      a: 'Керамика защищает кузов от выгорания, мелких царапин и агрессивной среды, а также значительно облегчает последующие мойки.'
    }
  ];

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Здравствуйте! Заявка с сайта SPARKLE:\nИмя: ${name}\nТелефон: ${phone}\nАвтомобиль: ${vehicle}\nУслуга: ${service}\nКомментарий: ${notes}`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* ШАПКА */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <BrandLogoSVG className="w-10 h-10" />
            <span className="font-extrabold text-xl tracking-wider text-slate-900">
              {STUDIO_NAME}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#services" className="hover:text-blue-600 transition-colors">УСЛУГИ</a>
            <a href="#packages" className="hover:text-blue-600 transition-colors">ПАКЕТЫ</a>
            <a href="#steps" className="hover:text-blue-600 transition-colors">ПРОЦЕСС</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">ВОПРОСЫ</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">КОНТАКТЫ</a>
          </nav>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md shadow-blue-600/20 transition-all"
          >
            ЗАПИСАТЬСЯ
          </a>
        </div>
      </header>

      {/* ГЛАВНЫЙ ЭКРАН (HERO) */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <span>Студия детейлинга премиум-класса</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-none">
              BRAND <br />
              <span className="text-blue-500">ATELIER</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
              ВИЗУАЛЬНЫЙ СТИЛЬ И ИДЕНТИЧНОСТЬ В КАЖДОЙ ДЕТАЛИ. РУЧНАЯ РАБОТА, ЭКСКЛЮЗИВНЫЙ ДЕТЕЙЛИНГ И ИДЕАЛЬНЫЙ БЛЕСК ВАШЕГО АВТОМОБИЛЯ.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7.5 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold text-sm shadow-lg shadow-blue-600/30 transition-all"
              >
                <span>ЗАПИСАТЬСЯ НА ВИЗИТ</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6.5 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 font-bold text-sm transition-all"
              >
                <span>УСЛУГИ И ЦЕНЫ</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800 text-sm">
              <div>
                <div className="text-2xl font-extrabold text-white">01</div>
                <div className="text-slate-400 text-xs">СТУДИЯ В ЦЕНТРЕ</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white">12+ ЛЕТ</div>
                <div className="text-slate-400 text-xs">ОПЫТ МАСТЕРОВ</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-blue-500">4.9 ★</div>
                <div className="text-slate-400 text-xs">РЕЙТИНГ КЛИЕНТОВ</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-800/80 border border-slate-700 p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                    Специальное предложение
                  </span>
                  <h3 className="text-xl font-bold mt-1">ПРЕМИАЛЬНЫЙ КОМПЛЕКС</h3>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-blue-600 text-white font-extrabold text-sm">
                  -25% СЕГОДНЯ
                </span>
              </div>

              <div className="space-y-3 mb-6 text-sm text-slate-300">
                <div className="flex items-center justify-between py-2 border-b border-slate-700">
                  <span>Экстерьер: ручная мойка и воск</span>
                  <span className="font-semibold text-white">от $39</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700">
                  <span>Полная химчистка салона</span>
                  <span className="font-semibold text-white">от $69</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700">
                  <span>Керамическое покрытие (5 лет)</span>
                  <span className="font-semibold text-white">от $429</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span>Детализация моторного отсека</span>
                  <span className="font-semibold text-white">от $59</span>
                </div>
              </div>

              <a
                href={getWhatsAppUrl('Здравствуйте! Хочу записаться по акции со скидкой 25%')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold text-sm transition-all"
              >
                <span>ЗАБРОНИРОВАТЬ СО СКИДКОЙ</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="services" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              НАШИ УСЛУГИ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 text-slate-900">
              ЧТО МЫ ПРЕДЛАГАЕМ
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Каждая услуга выполняется вручную с вниманием к мельчайшим деталям кузова и салона.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 p-8 flex flex-col justify-between hover:border-blue-500 transition-all shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold text-slate-900">{item.price}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                      {item.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                  <ul className="space-y-2.5 mb-8">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={getWhatsAppUrl(`Здравствуйте! Интересует услуга: ${item.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm text-center transition-all"
                >
                  ЗАКАЗАТЬ УСЛУГУ
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ТРИ ПАКЕТА (PRICING TIERS) */}
      <section id="packages" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              ВЫБОР КЛИЕНТОВ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">ТРИ ВАРИАНТА УХОДА</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Базовый */}
            <div className="rounded-3xl border border-slate-200 p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase text-slate-500 tracking-wider">ЕЖЕНЕДЕЛЬНЫЙ УХОД</div>
                <h3 className="text-2xl font-extrabold mt-2">MAINTENANCE</h3>
                <div className="text-4xl font-extrabold mt-6">$45 <span className="text-sm font-normal text-slate-500">/ визит</span></div>
                <ul className="space-y-3 mt-8 text-sm text-slate-700">
                  <li className="flex items-center gap-2">✓ Двухфазная ручная мойка</li>
                  <li className="flex items-center gap-2">✓ Очистка дисков и чернение шин</li>
                  <li className="flex items-center gap-2">✓ Быстрая уборка салона пылесосом</li>
                  <li className="flex items-center gap-2">✓ Мойка стекол изнутри</li>
                </ul>
              </div>
              <a
                href={getWhatsAppUrl('Выбираю пакет MAINTENANCE')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm text-center hover:bg-blue-600 transition-colors"
              >
                ВЫБРАТЬ ПАКЕТ
              </a>
            </div>

            {/* Хитом (Популярный) */}
            <div className="rounded-3xl bg-slate-900 text-white p-8 flex flex-col justify-between shadow-2xl relative border-2 border-blue-600">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-xs font-bold uppercase tracking-wider">
                ВЫБОР СТУДИИ
              </span>
              <div>
                <div className="text-xs font-bold uppercase text-blue-400 tracking-wider">ФИРМЕННЫЙ КОМПЛЕКС</div>
                <h3 className="text-2xl font-extrabold mt-2">SIGNATURE</h3>
                <div className="text-4xl font-extrabold mt-6">$320 <span className="text-sm font-normal text-slate-400">/ визит</span></div>
                <ul className="space-y-3 mt-8 text-sm text-slate-300">
                  <li className="flex items-center gap-2">✓ Полная ручная мойка + деконтаминация</li>
                  <li className="flex items-center gap-2">✓ Одноэтапная полировка кузова</li>
                  <li className="flex items-center gap-2">✓ Полный детейлинг салона</li>
                  <li className="flex items-center gap-2">✓ Кондиционирование кожи</li>
                  <li className="flex items-center gap-2">✓ Нанесение силанта на 6 месяцев</li>
                </ul>
              </div>
              <a
                href={getWhatsAppUrl('Выбираю пакет SIGNATURE')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm text-center transition-colors"
              >
                ВЫБРАТЬ SIGNATURE
              </a>
            </div>

            {/* Максимальный */}
            <div className="rounded-3xl border border-slate-200 p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase text-slate-500 tracking-wider">МАКСИМАЛЬНАЯ ЗАЩИТА</div>
                <h3 className="text-2xl font-extrabold mt-2">COATED</h3>
                <div className="text-4xl font-extrabold mt-6">$1 690 <span className="text-sm font-normal text-slate-500">/ авто</span></div>
                <ul className="space-y-3 mt-8 text-sm text-slate-700">
                  <li className="flex items-center gap-2">✓ Многоэтапная полировка кузова</li>
                  <li className="flex items-center gap-2">✓ Керамика 9H (до 3 лет)</li>
                  <li className="flex items-center gap-2">✓ Обработка дисков и стекол</li>
                  <li className="flex items-center gap-2">✓ Защита кожи и текстиля</li>
                </ul>
              </div>
              <a
                href={getWhatsAppUrl('Выбираю пакет COATED')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm text-center hover:bg-blue-600 transition-colors"
              >
                ВЫБРАТЬ COATED
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ЧЕТЫРЕ ПРОСТЫХ ШАГА */}
      <section id="steps" className="py-20 bg-stone-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              КАК МЫ РАБОТАЕМ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">ЧЕТЫРЕ ПРОСТЫХ ШАГА</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="text-blue-600 font-extrabold text-lg mb-2">01. ЗАПИСЬ</div>
              <h4 className="font-bold text-slate-900 mb-2">Расскажите о машине</h4>
              <p className="text-sm text-slate-600">
                Оставьте заявку онлайн или напишите нам в WhatsApp, чтобы выбрать удобное время.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="text-blue-600 font-extrabold text-lg mb-2">02. ОСМОТР</div>
              <h4 className="font-bold text-slate-900 mb-2">Оценка ЛКП</h4>
              <p className="text-sm text-slate-600">
                При встрече измеряем толщину лака, фиксируем дефекты и согласуем объем работ.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="text-blue-600 font-extrabold text-lg mb-2">03. ДЕТЕЙЛИНГ</div>
              <h4 className="font-bold text-slate-900 mb-2">Работа мастера</h4>
              <p className="text-sm text-slate-600">
                Тщательный уход в контролируемом боксе с использованием профессиональной химии.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="text-blue-600 font-extrabold text-lg mb-2">04. ВЫДАЧА</div>
              <h4 className="font-bold text-slate-900 mb-2">Идеальный результат</h4>
              <p className="text-sm text-slate-600">
                Совместный осмотр под студийным светом и рекомендации по дальнейшему уходу.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              ВОПРОСЫ И ОТВЕТЫ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">ЧАСТЫЕ ВОПРОСЫ</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-2xl border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-600 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-slate-600 border-t border-slate-100 pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ФОРМА ЗАПИСИ */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-blue-600 p-8 sm:p-12 shadow-2xl">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                СВЯЗАТЬСЯ С НАМИ
              </span>
              <h2 className="text-3xl font-extrabold mt-3">ДАВАЙТЕ ПОГОВОРИМ О ВАШЕМ АВТОМОБИЛЕ</h2>
              <p className="text-sm text-blue-100 mt-2">
                Заполните форму ниже, и данные отправятся напрямую в наш WhatsApp.
              </p>
            </div>

            <form onSubmit={handleBookSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-sm placeholder:text-blue-200 text-white focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="Номер телефона"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-sm placeholder:text-blue-200 text-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Марка и модель авто (например, BMW M3)"
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-sm placeholder:text-blue-200 text-white focus:outline-none"
                />
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-blue-900/60 border border-white/20 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none"
                >
                  <option value="Экспресс ручная мойка">Экспресс ручная мойка</option>
                  <option value="Детейлинг салона">Детейлинг салона</option>
                  <option value="Полировка кузова">Полировка кузова</option>
                  <option value="Керамическое покрытие">Керамическое покрытие</option>
                  <option value="Индивидуальная консультация">Индивидуальная консультация</option>
                </select>
              </div>

              <textarea
                rows={3}
                placeholder="Ваши пожелания или вопросы..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-sm placeholder:text-blue-200 text-white focus:outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-white hover:bg-stone-100 text-blue-700 font-extrabold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>ОТПРАВИТЬ ЗАЯВКУ В WHATSAPP</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ФУТЕР */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <BrandLogoSVG className="w-9 h-9" />
            <span className="font-extrabold text-white text-lg">{STUDIO_NAME}</span>
          </div>
          <div className="text-sm">
            {ADDRESS_TEXT} • {PHONE_DISPLAY}
          </div>
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} {STUDIO_NAME}. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}