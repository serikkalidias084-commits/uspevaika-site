'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Scissors,
  Award,
  Clock,
  Phone,
  ChevronDown,
  Star,
  Shirt,
  Sparkle,
  User,
  Send
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

const AtelierLogoSVG = ({ className = 'w-11 h-11' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 500"
    className={className}
  >
    <defs>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
          .circle-frame {
            fill: none;
            stroke: #7B3F4B;
            stroke-width: 6;
          }
          .monogram {
            font-family: 'Playfair Display', serif;
            font-size: 155px;
            font-weight: 600;
            fill: #6E2636;
            text-anchor: middle;
            dominant-baseline: central;
          }
          .name-text {
            font-family: 'Playfair Display', serif;
            font-size: 22px;
            font-weight: 400;
            letter-spacing: 5px;
            fill: #1A1A1A;
            text-anchor: middle;
          }
          .sub-text {
            font-family: 'Playfair Display', serif;
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 4px;
            fill: #6E2636;
            text-anchor: middle;
          }
        `}
      </style>
    </defs>
    <rect width="500" height="500" rx="90" fill="#ffffff" />
    <circle className="circle-frame" cx="250" cy="210" r="160" />
    <text x="250" y="205" className="monogram">AK</text>
    <text x="250" y="325" className="name-text">AIYM QAIYRGALI</text>
    <text x="250" y="360" className="sub-text">АТЕЛЬЕ</text>
  </svg>
);

const PHONE_NUMBER = '77014573412';
const PHONE_DISPLAY_PRIMARY = '+7 (701) 457-34-12';
const PHONE_DISPLAY_SECONDARY = '+7 (702) 603-33-85';

const COMPANY_NAME = 'Aiym Qaiyrgali';
const EXPERIENCE_YEARS = 12;
const RATING_SCORE = '4.9';
const REVIEWS_COUNT = 32;

const ADDRESS_1 = 'г. Атырау, мкр. Атырау, улица Борана Нысанбаева, 29 (1 этаж)';
const ADDRESS_2 = 'г. Атырау, ТЦ «Дина», 2-этаж, бутик 43';
const GIS_LINK = 'https://2gis.kz/atyrau/geo/70000001059432612';
const INSTAGRAM_HANDLE = '@aiymkairgali_atelier';
const INSTAGRAM_URL = 'https://instagram.com/aiymkairgali_atelier';

const WORKING_HOURS = 'Ежедневно: 9:00 – 16:00 (Обед: 13:00 – 14:00)';

const getWhatsAppUrl = (text: string) => {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
};

interface ServiceItem {
  id: string;
  title: string;
  time: string;
  price: string;
  badge?: string;
  description: string;
  features: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: 'custom-sewing',
    title: 'Индивидуальный пошив одежды',
    time: '3–7 дней',
    price: 'от 15 000 ₸',
    badge: 'Популярное',
    description: 'Создание эксклюзивной одежды по вашим меркам, эскизам или фото с идеальной посадкой.',
    features: [
      'Пошив по индивидуальным лекалам',
      'Премиальные ткани и фурнитура',
      'Консультация по стилю и фасону',
      'Готовность точно в срок'
    ]
  },
  {
    id: 'rental-uzatu',
    title: 'Прокат платьев на Ұзату',
    time: 'Индивидуально',
    price: 'от 25 000 ₸',
    badge: 'Эксклюзив',
    description: 'Роскошные национальные и современные свадебные платья для вашего торжества.',
    features: [
      'Широкий размерный ряд',
      'Идеальная химчистка после каждой примерки',
      'Подгонка по фигуре входит в стоимость',
      'Аксессуары в комплекте'
    ]
  },
  {
    id: 'embroidery-thermo',
    title: 'Машинная вышивка и термотрансфер',
    time: '1–2 дня',
    price: 'от 3 000 ₸',
    description: 'Брендирование одежды, логотипы, вышивка на национальных костюмах и термонаклейки.',
    features: [
      'Высокая стойкость изображения',
      'Логотипы для компаний и команд',
      'Индивидуальный дизайн принтов',
      'Быстрое исполнение заказа'
    ]
  },
  {
    id: 'tailoring-fix',
    title: 'Подгон и ремонт одежды',
    time: 'от 30 мин',
    price: 'от 2 000 ₸',
    description: 'Профессиональный ремонт, укорачивание, замена молний и подгонка одежды по фигуре.',
    features: [
      'Бережная работа с деликатными тканями',
      'Срочный ремонт день в день',
      'Сохранение фабричных строчек',
      'Опытные мастера'
    ]
  }
];

export default function AtelierStudioLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Индивидуальный пошив одежды');
  const [notes, setNotes] = useState('');

  const faqs = [
    {
      q: 'Как записаться на примерку или консультацию?',
      a: 'Вы можете нажать на любую кнопку «Записаться в WhatsApp» на сайте или написать нам напрямую по номеру +7 (701) 457-34-12. Мы подберем удобное для вас время визита.'
    },
    {
      q: 'Сколько времени занимает индивидуальный пошив?',
      a: 'Сроки зависят от сложности фасона и загруженности ателье, в среднем изготовление занимает от 3 до 7 рабочих дней.'
    },
    {
      q: 'Нужна ли предварительная бронь на прокат платья ұзату?',
      a: 'Да, рекомендуем бронировать платье заранее (за 1-2 недели до торжества), чтобы мы успели подогнать его точно по вашей фигуре.'
    },
    {
      q: 'Где вы находитесь и какой график работы?',
      a: `У нас два удобных филиала в Атырау: 1) ${ADDRESS_1}; 2) ${ADDRESS_2}. Мы работаем ${WORKING_HOURS}.`
    }
  ];

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Здравствуйте! Заявка с сайта AIYM QAIYRGALI:\nИмя: ${name}\nТелефон: ${phone}\nУслуга: ${service}\nКомментарий: ${notes}`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-rose-800 selection:text-white">
      {/* ШАПКА */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <AtelierLogoSVG className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-wider text-slate-900">
                {COMPANY_NAME.toUpperCase()}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-rose-800 font-semibold">
                АТЕЛЬЕ В АТЫРАУ
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#services" className="hover:text-rose-800 transition-colors">УСЛУГИ</a>
            <a href="#packages" className="hover:text-rose-800 transition-colors">КОМПЛЕКСЫ</a>
            <a href="#steps" className="hover:text-rose-800 transition-colors">ПРОЦЕСС</a>
            <a href="#faq" className="hover:text-rose-800 transition-colors">ВОПРОСЫ</a>
            <a href="#contact" className="hover:text-rose-800 transition-colors">КОНТАКТЫ</a>
          </nav>

          <a
            href={getWhatsAppUrl('Здравствуйте! Хочу записаться на примерку')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-rose-900 hover:bg-rose-800 text-white text-sm font-bold shadow-md shadow-rose-900/20 transition-all"
          >
            ЗАПИСАТЬСЯ
          </a>
        </div>
      </header>

      {/* ГЛАВНЫЙ ЭКРАН (HERO) В СТИЛЕ SPARKLE АТЕЛЬЕ */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-900/40 border border-rose-500/40 text-rose-300 text-xs font-semibold tracking-wide uppercase">
              <span>{EXPERIENCE_YEARS} лет мастерства ручной работы</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-none">
              AIYM <br />
              <span className="text-rose-600">QAIYRGALI</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
              ИНДИВИДУАЛЬНЫЙ ПОШИВ ОДЕЖДЫ, ПРОКАТ ПЛАТЬЕВ НА ҰЗАТУ, МАШИННАЯ ВЫШИВКА И ТЕРМОТРАНСФЕР В АТЫРАУ.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7.5 py-4 rounded-xl bg-rose-800 hover:bg-rose-700 font-bold text-sm shadow-lg shadow-rose-900/40 transition-all"
              >
                <span>ЗАПИСАТЬСЯ НА ПРИМЕРКУ</span>
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
                <div className="text-2xl font-extrabold text-white">02</div>
                <div className="text-slate-400 text-xs">ФИЛИАЛА В АТЫРАУ</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white">{EXPERIENCE_YEARS} ЛЕТ</div>
                <div className="text-slate-400 text-xs">ОПЫТ МАСТЕРА</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-rose-500">{RATING_SCORE} ★</div>
                <div className="text-slate-400 text-xs">РЕЙТИНГ 2GIS</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-800/80 border border-rose-900/50 p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs text-rose-400 font-semibold uppercase tracking-wider">
                    Спецпредложение
                  </span>
                  <h3 className="text-xl font-bold mt-1">ИНДИВИДУАЛЬНЫЙ ПОШИВ</h3>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-rose-700 text-white font-extrabold text-sm">
                  ЗАПИСЬ ОТКРЫТА
                </span>
              </div>

              <div className="space-y-3 mb-6 text-sm text-slate-300">
                <div className="flex items-center justify-between py-2 border-b border-slate-700">
                  <span>Индивидуальный пошив одежды</span>
                  <span className="font-semibold text-white">от 15 000 ₸</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700">
                  <span>Прокат платьев на Ұзату</span>
                  <span className="font-semibold text-white">от 25 000 ₸</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-700">
                  <span>Машинная вышивка / термотрансфер</span>
                  <span className="font-semibold text-white">от 3 000 ₸</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span>Ремонт и подгон по фигуре</span>
                  <span className="font-semibold text-white">от 2 000 ₸</span>
                </div>
              </div>

              <a
                href={getWhatsAppUrl('Здравствуйте! Хочу записаться на консультацию в ателье')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-rose-700 hover:bg-rose-600 font-bold text-sm transition-all text-white"
              >
                <span>ЗАБРОНИРОВАТЬ В WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="services" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-800 bg-rose-100 px-3 py-1 rounded-full border border-rose-200">
              НАШИ УСЛУГИ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 text-slate-900">
              ЧТО МЫ ДЕЛАЕМ
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Каждое изделие создается мастером с заботой об идеальной посадке и деталях.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-rose-100 p-8 flex flex-col justify-between hover:border-rose-400 transition-all shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold text-slate-900">{item.price}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-200">
                      {item.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                  <ul className="space-y-2.5 mb-8">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={getWhatsAppUrl(`Здравствуйте! Интересует услуга: ${item.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-rose-800 text-white font-bold text-sm text-center transition-all"
                >
                  ЗАКАЗАТЬ УСЛУГУ
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФОРМАТЫ РАБОТЫ (3 ПАКЕТА) */}
      <section id="packages" className="py-20 bg-white border-t border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-800 bg-rose-100 px-3 py-1 rounded-full border border-rose-200">
              ФОРМАТЫ СОТРУДНИЧЕСТВА
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">НАШИ НАПРАВЛЕНИЯ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Базовый */}
            <div className="rounded-3xl border border-rose-100 p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase text-slate-500 tracking-wider">ЭКСПРЕСС-УСЛУГИ</div>
                <h3 className="text-2xl font-extrabold mt-2">РЕМОНТ И ПОДГОН</h3>
                <div className="text-4xl font-extrabold mt-6">от 2 000 ₸</div>
                <ul className="space-y-3 mt-8 text-sm text-slate-700">
                  <li className="flex items-center gap-2">✓ Подгонка длины и объема</li>
                  <li className="flex items-center gap-2">✓ Замена молний и фурнитуры</li>
                  <li className="flex items-center gap-2">✓ Бережная работа с тканями</li>
                  <li className="flex items-center gap-2">✓ Срочный ремонт в день обращения</li>
                </ul>
              </div>
              <a
                href={getWhatsAppUrl('Интересует ремонт и подгон одежды')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm text-center hover:bg-rose-800 transition-colors"
              >
                ВЫБРАТЬ
              </a>
            </div>

            {/* Хитом (Популярный) */}
            <div className="rounded-3xl bg-slate-900 text-white p-8 flex flex-col justify-between shadow-2xl relative border-2 border-rose-700">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-rose-700 text-xs font-bold uppercase tracking-wider">
                ВЫБОР КЛИЕНТОВ
              </span>
              <div>
                <div className="text-xs font-bold uppercase text-rose-400 tracking-wider">ИНДИВИДУАЛЬНОСТЬ</div>
                <h3 className="text-2xl font-extrabold mt-2">ПОШИВ ПОД КЛЮЧ</h3>
                <div className="text-4xl font-extrabold mt-6">от 15 000 ₸</div>
                <ul className="space-y-3 mt-8 text-sm text-slate-300">
                  <li className="flex items-center gap-2">✓ Пошив по индивидуальным лекалам</li>
                  <li className="flex items-center gap-2">✓ Подбор ткани и фурнитуры</li>
                  <li className="flex items-center gap-2">✓ Промежуточные примерки</li>
                  <li className="flex items-center gap-2">✓ Идеальная посадка по фигуре</li>
                  <li className="flex items-center gap-2">✓ Консультация стилиста ателье</li>
                </ul>
              </div>
              <a
                href={getWhatsAppUrl('Хочу заказать индивидуальный пошив')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3.5 rounded-xl bg-rose-800 hover:bg-rose-700 text-white font-bold text-sm text-center transition-colors"
              >
                ВЫБРАТЬ ПОШИВ
              </a>
            </div>

            {/* Максимальный */}
            <div className="rounded-3xl border border-rose-100 p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase text-slate-500 tracking-wider">ТОРЖЕСТВО</div>
                <h3 className="text-2xl font-extrabold mt-2">ҰЗАТУ КӨЙЛЕК</h3>
                <div className="text-4xl font-extrabold mt-6">от 25 000 ₸</div>
                <ul className="space-y-3 mt-8 text-sm text-slate-700">
                  <li className="flex items-center gap-2">✓ Аренда нац. и свадебных платьев</li>
                  <li className="flex items-center gap-2">✓ Подгонка точно по вашей фигуре</li>
                  <li className="flex items-center gap-2">✓ Полная химчистка включена</li>
                  <li className="flex items-center gap-2">✓ Комплект аксессуаров</li>
                </ul>
              </div>
              <a
                href={getWhatsAppUrl('Интересует прокат платья на Ұзату')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm text-center hover:bg-rose-800 transition-colors"
              >
                ВЫБРАТЬ ПРОКАТ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 ПРОСТЫХ ШАГА */}
      <section id="steps" className="py-20 bg-stone-50 border-t border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-800 bg-rose-100 px-3 py-1 rounded-full border border-rose-200">
              КАК МЫ РАБОТАЕМ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">ЧЕТЫРЕ ПРОСТЫХ ШАГА</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-rose-100">
              <div className="text-rose-800 font-extrabold text-lg mb-2">01. ЗАПИСЬ</div>
              <h4 className="font-bold text-slate-900 mb-2">Свяжитесь с нами</h4>
              <p className="text-sm text-slate-600">
                Напишите в WhatsApp или позвоните, чтобы записаться на удобное время.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-rose-100">
              <div className="text-rose-800 font-extrabold text-lg mb-2">02. ПРИМЕРКА</div>
              <h4 className="font-bold text-slate-900 mb-2">Снятие мерок</h4>
              <p className="text-sm text-slate-600">
                Обсудим фасон, подберем ткань или снимем мерки для вашего изделия.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-rose-100">
              <div className="text-rose-800 font-extrabold text-lg mb-2">03. ПОШИВ</div>
              <h4 className="font-bold text-slate-900 mb-2">Работа мастера</h4>
              <p className="text-sm text-slate-600">
                Создаем вещь с вниманием к каждой строчке точно в согласованные сроки.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-rose-100">
              <div className="text-rose-800 font-extrabold text-lg mb-2">04. ВЫДАЧА</div>
              <h4 className="font-bold text-slate-900 mb-2">Идеальный результат</h4>
              <p className="text-sm text-slate-600">
                Примерка готового изделия и выдача вашего нового любимого наряда.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* АДРЕСА ФИЛИАЛОВ */}
      <section className="py-20 bg-white border-t border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-800 bg-rose-100 px-3 py-1 rounded-full border border-rose-200">
              АДРЕСА В АТЫРАУ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">НАШИ ТОЧКИ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-stone-50 border border-rose-100 p-7">
              <span className="px-3 py-1 rounded-lg bg-rose-100 text-rose-800 text-xs font-semibold">Филиал №1</span>
              <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">{ADDRESS_1}</h3>
              <p className="text-sm text-slate-600 mb-4">{WORKING_HOURS}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={GIS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white border border-rose-200 text-sm font-semibold hover:bg-rose-50 transition-colors"
                >
                  Открыть в 2GIS
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="px-4 py-2 rounded-xl bg-white border border-rose-200 text-sm font-semibold hover:bg-rose-50 transition-colors"
                >
                  {PHONE_DISPLAY_PRIMARY}
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-stone-50 border border-rose-100 p-7">
              <span className="px-3 py-1 rounded-lg bg-rose-100 text-rose-800 text-xs font-semibold">Филиал №2 (ТЦ Дина)</span>
              <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">{ADDRESS_2}</h3>
              <p className="text-sm text-slate-600 mb-4">{WORKING_HOURS}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={GIS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white border border-rose-200 text-sm font-semibold hover:bg-rose-50 transition-colors"
                >
                  ТЦ Дина на карте
                </a>
                <a
                  href={`tel:77026033385`}
                  className="px-4 py-2 rounded-xl bg-white border border-rose-200 text-sm font-semibold hover:bg-rose-50 transition-colors"
                >
                  {PHONE_DISPLAY_SECONDARY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-stone-50 border-t border-rose-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-800 bg-rose-100 px-3 py-1 rounded-full border border-rose-200">
              ВОПРОСЫ И ОТВЕТЫ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">ЧАСТЫЕ ВОПРОСЫ</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-2xl bg-white border border-rose-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between font-bold text-slate-900 hover:text-rose-800 transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-rose-800 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-slate-600 border-t border-rose-50 pt-4">
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
          <div className="rounded-3xl bg-rose-900 p-8 sm:p-12 shadow-2xl">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                СВЯЗАТЬСЯ С НАМИ
              </span>
              <h2 className="text-3xl font-extrabold mt-3">ЗАПИСАТЬСЯ НА ПРИМЕРКУ ИЛИ КОНСУЛЬТАЦИЮ</h2>
              <p className="text-sm text-rose-100 mt-2">
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
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-sm placeholder:text-rose-200 text-white focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="Номер телефона"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-sm placeholder:text-rose-200 text-white focus:outline-none"
                />
              </div>

              <div>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-rose-950/80 border border-white/20 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none"
                >
                  <option value="Индивидуальный пошив одежды">Индивидуальный пошив одежды</option>
                  <option value="Прокат платья на Ұзату">Прокат платья на Ұзату</option>
                  <option value="Машинная вышивка / Термотрансфер">Машинная вышивка / Термотрансфер</option>
                  <option value="Ремонт и подгон одежды">Ремонт и подгон одежды</option>
                </select>
              </div>

              <textarea
                rows={3}
                placeholder="Ваши пожелания или вопросы..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-sm placeholder:text-rose-200 text-white focus:outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-white hover:bg-stone-100 text-rose-900 font-extrabold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-rose-800" />
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
            <AtelierLogoSVG className="w-9 h-9" />
            <span className="font-extrabold text-white text-lg">{COMPANY_NAME}</span>
          </div>
          <div className="text-sm">
            Атырау • {PHONE_DISPLAY_PRIMARY} • {INSTAGRAM_HANDLE}
          </div>
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} {COMPANY_NAME}. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}