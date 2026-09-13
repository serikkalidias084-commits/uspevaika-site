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
  Compass,
  Calendar,
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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-purple-500 selection:text-white relative overflow-hidden">
      {/* ФОНОВЫЕ СВЕТОВЫЕ ПЯТНА (GLOW EFFECTS) */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-1/3 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[160px]" />
      </div>

      {/* ШАПКА / НАВИГАЦИЯ */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/25 border border-purple-400/30">
              <span className="font-bold text-lg tracking-wider text-white">AK</span>
            </div>
            <div>
              <span className="block font-bold text-lg tracking-tight text-zinc-100 group-hover:text-purple-400 transition-colors">
                {COMPANY_NAME}
              </span>
              <span className="block text-xs text-zinc-400">
                Ателье в Атырау
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#advantages" className="hover:text-zinc-100 transition-colors">
              Преимущества
            </a>
            <a href="#services" className="hover:text-zinc-100 transition-colors">
              Услуги и цены
            </a>
            <a href="#locations" className="hover:text-zinc-100 transition-colors">
              Адреса
            </a>
            <a href="#faq" className="hover:text-zinc-100 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-zinc-100 transition-colors">
              Записаться
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl('Здравствуйте! Хочу проконсультироваться по поводу пошива/услуг ателье.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium text-sm shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Написать в WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* ГЛАВНЫЙ ЭКРАН (HERO) */}
      <section className="relative z-10 pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Левая колонка */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-purple-400 shadow-inner">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{EXPERIENCE_YEARS} лет опыта работы мастера</span>
                <span className="text-zinc-600">|</span>
                <span className="inline-flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  {RATING_SCORE} ({REVIEWS_COUNT} оценок в 2GIS)
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                Индивидуальный пошив и{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  прокат ұзату көйшек
                </span>{' '}
                в Атырау
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
                {COMPANY_SUBTITLE}. Создаем одежду любой сложности, выполняем машинную вышивку, термотрансферные наклейки и подгон по фигуре.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={getWhatsAppUrl('Здравствуйте! Хочу записаться на примерку в ателье Aiym Qaiyrgali.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold shadow-xl shadow-purple-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Записаться на примерку</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl backdrop-blur-xl bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-800 text-zinc-200 font-semibold transition-all"
                >
                  <span>Смотреть услуги</span>
                </a>
              </div>

              {/* Мини-плашки с фактами */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-100">12 лет</div>
                    <div className="text-xs text-zinc-400">Стаж мастера</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                    <Shirt className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-100">Любой дизайн</div>
                    <div className="text-xs text-zinc-400">Кез келген киім</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-100">2 точки</div>
                    <div className="text-xs text-zinc-400">В центре Атырау</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая колонка с премиальной визуальной карточкой */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl backdrop-blur-xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-xl font-bold text-white shadow-md">
                      AK
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-zinc-100">{COMPANY_NAME}</h3>
                      <p className="text-xs text-emerald-400 font-medium">● Открыто / Прием заказов</p>
                    </div>
                  </div>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 text-xs font-medium text-pink-400 border border-zinc-700 transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-zinc-400">Основной адрес:</div>
                      <div className="text-sm font-medium text-zinc-100">{ADDRESS_1}</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-zinc-400">Филиал / Бутик:</div>
                      <div className="text-sm font-medium text-zinc-100">{ADDRESS_2}</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div>
                        <div className="text-xs text-zinc-400">Режим работы:</div>
                        <div className="text-sm font-medium text-zinc-100">9:00 – 16:00 (Обед 13:00–14:00)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-800/90 hover:bg-zinc-700 text-sm font-semibold text-zinc-100 border border-zinc-700 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span>Позвонить</span>
                  </a>

                  <a
                    href={getWhatsAppUrl('Здравствуйте! Хочу уточнить детали по пошиву.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-sm font-semibold text-emerald-400 border border-emerald-500/30 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                  <span>Рейтинг 2GIS: 4.9 из 5.0</span>
                  <a
                    href={GIS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline font-medium"
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
      <section id="advantages" className="relative z-10 py-20 border-t border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              Почему выбирают нас
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Качество ручной работы и внимание к деталям
            </h2>
            <p className="mt-4 text-zinc-400 text-base">
              Мы объединили многолетний опыт пошива, современные технологии печати и индивидуальный подход к каждому клиенту.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl backdrop-blur-xl bg-zinc-900/50 border border-zinc-800 p-6 hover:border-purple-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 transition-transform">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-100 mb-2">12 лет опыта</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Профессиональный мастер с 12-летним стажем пошива одежды любой сложности.
              </p>
            </div>

            <div className="rounded-2xl backdrop-blur-xl bg-zinc-900/50 border border-zinc-800 p-6 hover:border-pink-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-5 group-hover:scale-110 transition-transform">
                <Sparkle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-100 mb-2">Любой дизайн</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Воплощаем в жизнь любые ваши идеи: от повседневных костюмов до эксклюзивных нарядов.
              </p>
            </div>

            <div className="rounded-2xl backdrop-blur-xl bg-zinc-900/50 border border-zinc-800 p-6 hover:border-indigo-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform">
                <Shirt className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-100 mb-2">Прокат на Ұзату</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Широкий выбор национальных и торжественных платьев в аренду с подгонкой по фигуре.
              </p>
            </div>

            <div className="rounded-2xl backdrop-blur-xl bg-zinc-900/50 border border-zinc-800 p-6 hover:border-emerald-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-100 mb-2">Вышивка & Термотрансфер</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Качественная машинная вышивка и термотрансферные наклейки для брендирования и декора.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК УСЛУГ / ПРАЙС-ЛИСТ */}
      <section id="services" className="relative z-10 py-20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
                Наши услуги и цены
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                Выберите то, что вам нужно
              </h2>
            </div>
            <p className="text-zinc-400 max-w-md text-sm">
              Точная стоимость зависит от сложности фасона, ткани и срочности. Запишитесь на консультацию в WhatsApp, чтобы рассчитать заказ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl backdrop-blur-xl bg-zinc-900/60 border border-zinc-800 p-7 flex flex-col justify-between hover:border-zinc-700 transition-all shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-extrabold text-zinc-100">{service.price}</span>
                    {service.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border border-purple-500/30">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-zinc-100 mb-1">{service.title}</h3>
                  <div className="text-xs font-medium text-pink-400 mb-4">{service.subtitle}</div>
                  <p className="text-sm text-zinc-400 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={getWhatsAppUrl(`Здравствуйте! Меня интересует услуга: «${service.title}» (${service.price}). Подскажите детали.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-sm shadow-lg shadow-purple-600/20 transition-all hover:scale-[1.01]"
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
      <section id="locations" className="relative z-10 py-20 border-t border-zinc-900 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Где нас найти
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Два удобных адреса в Атырау
            </h2>
            <p className="mt-4 text-zinc-400 text-sm">
              Выбирайте филиал, который ближе к вам, или свяжитесь с нами для вызова курьера/согласования примерки.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Карточка 1 */}
            <div className="rounded-3xl backdrop-blur-xl bg-zinc-900/60 border border-zinc-800 p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-lg bg-purple-500/15 text-purple-400 text-xs font-semibold border border-purple-500/25">
                    Филиал №1
                  </span>
                  <span className="text-xs text-zinc-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 9:00 – 16:00 (Обед 13:00–14:00)
                  </span>
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-2">Мкр. Атырау, Борана Нысанбаева, 29</h3>
                <p className="text-sm text-zinc-400 mb-6">
                  Район городской администрации, 1 этаж. Удобный подъезд и парковка.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={GIS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sm font-medium text-zinc-200 border border-zinc-700 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>Открыть в 2GIS</span>
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sm font-medium text-zinc-200 border border-zinc-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{PHONE_DISPLAY_PRIMARY}</span>
                </a>
              </div>
            </div>

            {/* Карточка 2 */}
            <div className="rounded-3xl backdrop-blur-xl bg-zinc-900/60 border border-zinc-800 p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-lg bg-pink-500/15 text-pink-400 text-xs font-semibold border border-pink-500/25">
                    Филиал №2 (ТЦ Дина)
                  </span>
                  <span className="text-xs text-zinc-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Ежедневно
                  </span>
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-2">ТЦ «Дина», 2-этаж, бутик 43</h3>
                <p className="text-sm text-zinc-400 mb-6">
                  Торговый центр «Дина», 2 этаж, бутик 43 — прием заказов и примерка нарядов.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={GIS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sm font-medium text-zinc-200 border border-zinc-700 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span>ТЦ Дина на карте</span>
                </a>
                <a
                  href={`tel:77026033385`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sm font-medium text-zinc-200 border border-zinc-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{PHONE_DISPLAY_SECONDARY}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК FAQ (АККОРДЕОН) */}
      <section id="faq" className="relative z-10 py-20 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              Частые вопросы
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ответы на популярные вопросы
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl backdrop-blur-xl bg-zinc-900/50 border border-zinc-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-zinc-100 hover:text-purple-400 transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-zinc-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-purple-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/60 pt-4">
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
      <section id="contact" className="relative z-10 py-20 border-t border-zinc-900 bg-zinc-950/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl backdrop-blur-xl bg-gradient-to-br from-zinc-900/90 to-zinc-900/40 border border-zinc-800 p-8 sm:p-12 shadow-2xl">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Записаться онлайн
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight">
                Отправьте заявку прямо в WhatsApp
              </h2>
              <p className="mt-2 text-sm text-zinc-400">
                Заполните форму ниже — текст заявки сформируется автоматически и откроется в вашем WhatsApp.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-2">Ваше имя *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Например, Айсулу"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl pl-11 pr-4 py-3.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-2">Номер телефона *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+7 (701) 000-00-00"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl pl-11 pr-4 py-3.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-2">Выберите услугу *</label>
                <select
                  value={formService}
                  onChange={(e) => setFormService(e.target.value)}
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3.5 text-sm text-zinc-100 focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="Индивидуальный пошив одежды">Индивидуальный пошив одежды</option>
                  <option value="Прокат платья на Ұзату">Прокат платья на Ұзату</option>
                  <option value="Машинная вышивка / Термотрансфер">Машинная вышивка / Термотрансфер</option>
                  <option value="Ремонт и подгон одежды">Ремонт и подгон одежды</option>
                  <option value="Другая услуга / Консультация">Другая услуга / Консультация</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-2">Комментарий или пожелания</label>
                <textarea
                  rows={3}
                  placeholder="Опишите желаемую модель, дату торжества или вопрос..."
                  value={formComment}
                  onChange={(e) => setFormComment(e.target.value)}
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/25 transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Отправить заявку в WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ФУТЕР */}
      <footer className="relative z-10 border-t border-zinc-900 bg-zinc-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center font-bold text-white">
                AK
              </div>
              <div>
                <span className="font-bold text-zinc-100">{COMPANY_NAME}</span>
                <span className="block text-xs text-zinc-400">Ателье в Атырау</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400">
              <a href={`tel:${PHONE_NUMBER}`} className="hover:text-zinc-100 transition-colors">
                {PHONE_DISPLAY_PRIMARY}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors flex items-center gap-1.5"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
              <a href={GIS_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                2GIS Атырау
              </a>
            </div>

            <div className="text-xs text-zinc-500">
              © {new Date().getFullYear()} {COMPANY_NAME}. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}