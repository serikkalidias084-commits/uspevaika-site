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

// Кастомная иконка Instagram для совместимости с Lucide
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

// КОМПОНЕНТ ВЕКТОРНОГО ЛОГОТИПА AIYM QAIYRGALI (PLAYFAIR DISPLAY)
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
    <text x="250" y="360" className="sub-text">СӘН АТЕЛЬЕСІ</text>
  </svg>
);

// ==========================================
// НАСТРАИВАЕМЫЕ КОНСТАНТЫ (1 КЛИК ДЛЯ ИЗМЕНЕНИЙ)
// ==========================================
const PHONE_NUMBER = '77014573412';
const PHONE_DISPLAY_PRIMARY = '+7 (701) 457-34-12';
const PHONE_DISPLAY_SECONDARY = '+7 (702) 603-33-85';

const COMPANY_NAME = 'Aiym Qaiyrgali';
const COMPANY_SUBTITLE = 'Тігін ательесі • Термотранс-наклейки • Вышивка • Прокат Ұзату көйлек';
const EXPERIENCE_YEARS = 12;
const RATING_SCORE = '4.9';
const REVIEWS_COUNT = 32;

const ADDRESS_1 = 'г. Атырау, мкр. Атырау, улица Борана Нысанбаева, 29 (1 этаж)';
const ADDRESS_2 = 'г. Атырау, ТЦ «Дина», 2-этаж, бутик 43';
const GIS_LINK = 'https://2gis.kz/atyrau/geo/70000001059432612';
const INSTAGRAM_HANDLE = '@aiymkairgali_atelier';
const INSTAGRAM_URL = 'https://instagram.com/aiymkairgali_atelier';

const WORKING_HOURS = 'Ежедневно: 9:00 – 16:00 (Обед: 13:00 – 14:00)';

// Вспомогательная функция формирования ссылки на WhatsApp
const getWhatsAppUrl = (text: string) => {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
};

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  badge?: string;
  features: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: 'custom-sewing',
    title: 'Индивидуальный пошив одежды',
    subtitle: 'Кез келген дизайндығы киім',
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
    subtitle: 'Прокатқа көйлек-Ұзату',
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
    subtitle: 'Термотранс-наклейки • Вышивка',
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
    subtitle: 'Сапалы тігін жұмыстары',
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

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: 'Как записаться на примерку или консультацию?',
    answer: 'Вы можете нажать на любую кнопку «Записаться в WhatsApp» на сайте или написать нам напрямую по номеру +7 (701) 457-34-12. Мы подберем удобное для вас время визита.'
  },
  {
    question: 'Сколько времени занимает индивидуальный пошив?',
    answer: 'Сроки зависят от сложности фасона и загруженности ателье, в среднем изготовление занимает от 3 до 7 рабочих дней.'
  },
  {
    question: 'Нужна ли предварительная бронь на прокат платья ұзату?',
    answer: 'Да, рекомендуем бронировать платье заранее (за 1-2 недели до торжества), чтобы мы успели подогнать его точно по вашей фигуре.'
  },
  {
    question: 'Где вы находитесь и какой график работы?',
    answer: `У нас два удобных филиала в Атырау: 1) ${ADDRESS_1}; 2) ${ADDRESS_2}. Мы работаем ${WORKING_HOURS}.`
  }
];

export default function LandingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formService, setFormService] = useState('Индивидуальный пошив одежды');
  const [formComment, setFormComment] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Здравствуйте! Меня зовут ${formName}.\nТелефон: ${formPhone}\nИнтересующая услуга: ${formService}\nКомментарий: ${formComment}`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 selection:bg-red-600 selection:text-white relative overflow-hidden">
      {/* КРАСИВЫЙ КРАСНО-БЕЛЫЙ ФОНОВЫЙ ГРАДИЕНТ */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[160px]" />
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-rose-500/10 rounded-full blur-[150px]" />
      </div>

      {/* ШАПКА / НАВИГАЦИЯ */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-red-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <AtelierLogoSVG className="w-11 h-11 rounded-xl shadow-md shadow-red-500/10" />
            <div>
              <span className="block font-bold text-lg tracking-tight text-slate-900 group-hover:text-red-600 transition-colors">
                {COMPANY_NAME}
              </span>
              <span className="block text-xs text-slate-500">
                Ателье в Атырау
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#advantages" className="hover:text-red-600 transition-colors">
              Преимущества
            </a>
            <a href="#services" className="hover:text-red-600 transition-colors">
              Услуги и цены
            </a>
            <a href="#locations" className="hover:text-red-600 transition-colors">
              Адреса
            </a>
            <a href="#faq" className="hover:text-red-600 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-red-600 transition-colors">
              Записаться
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl('Здравствуйте! Хочу проконсультироваться по поводу пошива/услуг ателье.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium text-sm shadow-md shadow-red-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Написать в WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* ГЛАВНЫЙ ЭКРАН (HERO) */}
      <section className="relative z-10 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Левая колонка */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-red-700">
                <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse" />
                <span>{EXPERIENCE_YEARS} лет опыта работы мастера</span>
                <span className="text-red-300">|</span>
                <span className="inline-flex items-center gap-1 text-amber-600">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  {RATING_SCORE} ({REVIEWS_COUNT} оценок в 2GIS)
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-slate-900">
                Индивидуальный пошив и{' '}
                <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                  прокат ұзату көйлек
                </span>{' '}
                в Атырау
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                {COMPANY_SUBTITLE}. Создаем одежду любой сложности, выполняем машинную вышивку, термотрансферные наклейки и подгон по фигуре.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={getWhatsAppUrl('Здравствуйте! Хочу записаться на примерку в ателье Aiym Qaiyrgali.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-semibold shadow-lg shadow-red-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Записаться на примерку</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold transition-all shadow-xs"
                >
                  <span>Смотреть услуги</span>
                </a>
              </div>

              {/* Мини-плашки с фактами */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">12 лет</div>
                    <div className="text-xs text-slate-500">Стаж мастера</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
                    <Shirt className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Любой дизайн</div>
                    <div className="text-xs text-slate-500">Кез келген киім</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">2 точки</div>
                    <div className="text-xs text-slate-500">В центре Атырау</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая колонка с премиальной визуальной карточкой */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white border border-red-100 p-6 sm:p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <AtelierLogoSVG className="w-14 h-14 rounded-2xl shadow-md" />
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{COMPANY_NAME}</h3>
                      <p className="text-xs text-emerald-600 font-medium">● Открыто / Прием заказов</p>
                    </div>
                  </div>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-xs font-semibold text-red-600 border border-red-200 transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-500">Основной адрес:</div>
                      <div className="text-sm font-medium text-slate-900">{ADDRESS_1}</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-500">Филиал / Бутик:</div>
                      <div className="text-sm font-medium text-slate-900">{ADDRESS_2}</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-red-600 shrink-0" />
                      <div>
                        <div className="text-xs text-slate-500">Режим работы:</div>
                        <div className="text-sm font-medium text-slate-900">9:00 – 16:00 (Обед 13:00–14:00)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-sm font-semibold text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-red-400" />
                    <span>Позвонить</span>
                  </a>

                  <a
                    href={getWhatsAppUrl('Здравствуйте! Хочу уточнить детали по пошиву.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-sm font-semibold text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Рейтинг 2GIS: 4.9 из 5.0</span>
                  <a
                    href={GIS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:underline font-medium"
                  >
                    Открыть на карте →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК ПРЕИМУЩЕСТВ */}
      <section id="advantages" className="relative z-10 py-20 border-t border-red-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Почему выбирают нас
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Качество ручной работы и внимание к деталям
            </h2>
            <p className="mt-4 text-slate-600 text-base">
              Мы объединили многолетний опыт пошива, современные технологии печати и индивидуальный подход к каждому клиенту.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-stone-50 border border-red-100 p-6 hover:border-red-300 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 mb-5 group-hover:scale-110 transition-transform">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">12 лет опыта</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Профессиональный мастер с 12-летним стажем пошива одежды любой сложности.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-50 border border-red-100 p-6 hover:border-red-300 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 mb-5 group-hover:scale-110 transition-transform">
                <Sparkle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Любой дизайн</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Воплощаем в жизнь любые ваши идеи: от повседневных костюмов до эксклюзивных нарядов.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-50 border border-red-100 p-6 hover:border-red-300 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 mb-5 group-hover:scale-110 transition-transform">
                <Shirt className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Прокат на Ұзату</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Широкий выбор национальных и торжественных платьев в аренду с подгонкой по фигуре.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-50 border border-red-100 p-6 hover:border-red-300 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 mb-5 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Вышивка & Термотрансфер</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Качественная машинная вышивка и термотрансферные наклейки для брендирования и декора.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК УСЛУГ / ПРАЙС-ЛИСТ */}
      <section id="services" className="relative z-10 py-20 border-t border-red-100 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                Наши услуги и цены
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Выберите то, что вам нужно
              </h2>
            </div>
            <p className="text-slate-600 max-w-md text-sm">
              Точная стоимость зависит от сложности фасона, ткани и срочности. Запишитесь на консультацию в WhatsApp, чтобы рассчитать заказ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl bg-white border border-red-100 p-7 flex flex-col justify-between hover:border-red-300 transition-all shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-extrabold text-slate-900">{service.price}</span>
                    {service.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">{service.title}</h3>
                  <div className="text-xs font-semibold text-red-600 mb-4">{service.subtitle}</div>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={getWhatsAppUrl(`Здравствуйте! Меня интересует услуга: «${service.title}» (${service.price}). Подскажите детали.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm shadow-md shadow-red-600/20 transition-all hover:scale-[1.01]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Записаться в WhatsApp</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК С КАРТОЙ И АДРЕСАМИ */}
      <section id="locations" className="relative z-10 py-20 border-t border-red-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Где нас найти
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Два удобных адреса в Атырау
            </h2>
            <p className="mt-4 text-slate-600 text-sm">
              Выбирайте филиал, который ближе к вам, или свяжитесь с нами для вызова курьера/согласования примерки.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Карточка 1 */}
            <div className="rounded-3xl bg-stone-50 border border-red-100 p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-lg bg-red-100 text-red-700 text-xs font-semibold border border-red-200">
                    Филиал №1
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-red-600" /> 9:00 – 16:00 (Обед 13:00–14:00)
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Мкр. Атырау, Борана Нысанбаева, 29</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Район городской администрации, 1 этаж. Удобный подъезд и парковка.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={GIS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-sm font-medium text-slate-800 border border-slate-200 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span>Открыть в 2GIS</span>
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-sm font-medium text-slate-800 border border-slate-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-red-600" />
                  <span>{PHONE_DISPLAY_PRIMARY}</span>
                </a>
              </div>
            </div>

            {/* Карточка 2 */}
            <div className="rounded-3xl bg-stone-50 border border-red-100 p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-lg bg-red-100 text-red-700 text-xs font-semibold border border-red-200">
                    Филиал №2 (ТЦ Дина)
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-red-600" /> Ежедневно
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">ТЦ «Дина», 2-этаж, бутик 43</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Торговый центр «Дина», 2 этаж, бутик 43 — прием заказов и примерка нарядов.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={GIS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-sm font-medium text-slate-800 border border-slate-200 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span>ТЦ Дина на карте</span>
                </a>
                <a
                  href={`tel:77026033385`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-sm font-medium text-slate-800 border border-slate-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-red-600" />
                  <span>{PHONE_DISPLAY_SECONDARY}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК FAQ (АККОРДЕОН) */}
      <section id="faq" className="relative z-10 py-20 border-t border-red-100 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Частые вопросы
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Ответы на популярные вопросы
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-red-100 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-red-600 transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-red-600 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-red-50 pt-4">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ИНТЕРАКТИВНАЯ ФОРМА ОБРАТНОЙ СВЯЗИ В WHATSAPP */}
      <section id="contact" className="relative z-10 py-20 border-t border-red-100 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-red-600 to-rose-700 text-white p-8 sm:p-12 shadow-xl">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-semibold tracking-wider uppercase text-red-100 bg-white/20 px-3 py-1 rounded-full border border-white/30">
                Записаться онлайн
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Отправьте заявку прямо в WhatsApp
              </h2>
              <p className="mt-2 text-sm text-red-100">
                Заполните форму ниже — текст заявки сформируется автоматически и откроется в вашем WhatsApp.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-red-100 mb-2">Ваше имя *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-red-300 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Например, Айсулу"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-red-200 focus:outline-none focus:bg-white/20 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-red-100 mb-2">Номер телефона *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-red-300 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+7 (701) 000-00-00"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-red-200 focus:outline-none focus:bg-white/20 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-red-100 mb-2">Выберите услугу *</label>
                <select
                  value={formService}
                  onChange={(e) => setFormService(e.target.value)}
                  className="w-full bg-rose-900/60 border border-white/20 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:bg-rose-900 transition-colors"
                >
                  <option value="Индивидуальный пошив одежды" className="text-slate-900">Индивидуальный пошив одежды</option>
                  <option value="Прокат платья на Ұзату" className="text-slate-900">Прокат платья на Ұзату</option>
                  <option value="Машинная вышивка / Термотрансфер" className="text-slate-900">Машинная вышивка / Термотрансфер</option>
                  <option value="Ремонт и подгон одежды" className="text-slate-900">Ремонт и подгон одежды</option>
                  <option value="Другая услуга / Консультация" className="text-slate-900">Другая услуга / Консультация</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-red-100 mb-2">Комментарий или пожелания</label>
                <textarea
                  rows={3}
                  placeholder="Опишите желаемую модель, дату торжества или вопрос..."
                  value={formComment}
                  onChange={(e) => setFormComment(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-red-200 focus:outline-none focus:bg-white/20 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-white hover:bg-stone-100 text-red-700 font-bold text-sm shadow-lg transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-red-600" />
                <span>Отправить заявку в WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ФУТЕР */}
      <footer className="relative z-10 border-t border-red-100 bg-stone-900 text-stone-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <AtelierLogoSVG className="w-10 h-10 rounded-xl" />
              <div>
                <span className="font-bold text-white">{COMPANY_NAME}</span>
                <span className="block text-xs text-stone-400">Ателье в Атырау</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-stone-400">
              <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition-colors">
                {PHONE_DISPLAY_PRIMARY}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition-colors flex items-center gap-1.5"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
              <a href={GIS_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                2GIS Атырау
              </a>
            </div>

            <div className="text-xs text-stone-500">
              © {new Date().getFullYear()} {COMPANY_NAME}. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}