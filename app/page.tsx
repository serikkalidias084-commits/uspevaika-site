'use client';

import { useState } from 'react';
import {
  Trophy,
  Sparkles,
  CheckCircle2,
  XCircle,
  Users,
  Award,
  RotateCcw,
  ChevronRight,
  Zap,
  Brain,
  Leaf,
  Play,
  TrendingUp,
} from 'lucide-react';

// ============================================================
// НАСТРАИВАЕМЫЕ ДАННЫЕ — меняйте здесь в один клик
// ============================================================
const QUIZ_TITLE = 'Популяция өсуінің сигмоидты қисығы';
const QUIZ_SUBTITLE = 'Экология • Популяциялық биология';
const TEAM1_NAME = 'Команда 1';
const TEAM3_NAME = 'Команда 3';
const POINTS_PER_CORRECT = 10;

// ============================================================
// СУРАҚТАР БАЗАСЫ (20 сұрақ)
// ============================================================
interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const QUESTIONS: Question[] = [
  {
    question: 'Популяция дегеніміз не?',
    options: [
      'Белгілі бір ортада, белгілі бір уақытта бірге өмір сүретін бір түрдің дарақтар тобы',
      'Әртүрлі түрлердің бірлескен қауымдастығы',
      'Бір ағзаның мүшелер жүйесі',
      'Экожүйедегі барлық тірі ағзалар',
    ],
    correct: 0,
    explanation:
      'Популяция — бір түрге жататын, белгілі бір ортада, белгілі бір уақытта бірге өмір сүретін дарақтар тобы.',
  },
  {
    question: 'Популяция санының уақыт өте келе өзгеруі нендей үрдістердің нәтижесінде қалыптасады?',
    options: [
      'Тек туу нәтижесінде',
      'Туу, өлім және көші-қон нәтижесінде',
      'Тек температураның өзгеруінен',
      'Тек жыртқыштардың санынан',
    ],
    correct: 1,
    explanation: 'Дарақтар санының өзгеруі туу, өлім және көші-қон нәтижесінде қалыптасады.',
  },
  {
    question: 'Неліктен популяцияның өсу қисығы «S» пішінді болады?',
    options: [
      'Себебі ресурстар шексіз',
      'Себебі ресурстар шектеулі, сондықтан алдымен тез, содан кейін баяу өседі',
      'Себебі дарақтар саны әрдайым тұрақты',
      'Себебі климат әрқашан бірқалыпты',
    ],
    correct: 1,
    explanation:
      'Табиғатта ресурстар шексіз емес, сондықтан популяция алдымен тез (экспоненциалды) өседі, кейін орта кедергісіне тап болып тұрақтанады.',
  },
  {
    question: 'Экспоненциалды өсу қандай жағдайда байқалады?',
    options: [
      'Ресурстар шектеулі болғанда',
      'Ресурстар шексіз деп есептелгенде',
      'Жыртқыштар көп болғанда',
      'Популяция K мәніне жеткенде',
    ],
    correct: 1,
    explanation: 'Экспоненциалды өсуде ресурстар шексіз деп есептеледі, өсу қарқыны тұрақты әрі тежеусіз артады.',
  },
  {
    question: 'Логистикалық өсу моделі не нәрсені ескереді?',
    options: [
      'Тек туу қарқынын',
      'Ортаның тасымалдау сыйымдылығын (K)',
      'Тек көші-қон үдерісін',
      'Тек ауру факторларын',
    ],
    correct: 1,
    explanation: 'Логистикалық модельде ортаның тасымалдау сыйымдылығы (K) ескеріледі, сондықтан өсу баяулап, тұрақты деңгейге жетеді.',
  },
  {
    question: 'Сигмоидты (S-тәрізді) қисықтың неше негізгі кезеңі бар?',
    options: ['2', '3', '4', '5'],
    correct: 2,
    explanation: 'Сигмоидты қисықта төрт кезең бар: латентті, экспоненциалды, баяулау және тұрақты (плато) кезеңдері.',
  },
  {
    question: 'Сигмоидты қисықтың бірінші кезеңі қалай аталады?',
    options: ['Латентті кезең', 'Плато кезеңі', 'Баяулау кезеңі', 'Экспоненциалды кезең'],
    correct: 0,
    explanation: 'Латентті кезеңде дарақтар саны аз, өсу баяу — бұл бейімделу және қорек жинау кезеңі.',
  },
  {
    question: 'Латентті кезеңде не байқалады?',
    options: [
      'Өсу қарқыны ең жоғары деңгейде',
      'Дарақтар саны аз, өсу баяу — бейімделу кезеңі',
      'Дарақтар саны K мәніне жетеді',
      'Өлім-жітім күрт артады',
    ],
    correct: 1,
    explanation: 'Латентті кезең — дарақтар санының аздығымен және баяу өсумен сипатталатын бейімделу кезеңі.',
  },
  {
    question: 'Экспоненциалды кезеңде не орын алады?',
    options: [
      'Ресурстар тапшыланып, өсу тоқтайды',
      'Ресурстар мол, тежеуші фактор жоқ, өсу қарқыны тез артады',
      'Дарақтар саны тұрақталады',
      'Популяция толығымен құрып кетеді',
    ],
    correct: 1,
    explanation: 'Экспоненциалды кезеңде ресурстар мол болғандықтан тежеуші фактор болмайды және өсу қарқыны тез артады.',
  },
  {
    question: 'Баяулау кезеңінде не орын алады?',
    options: [
      'Ресурстар молайып, бәсеке азаяды',
      'Ресурстар тапшылана бастайды, бәсеке күшейеді, өсу қарқыны төмендейді',
      'Өсу қарқыны артады',
      'K мәні шексіз артады',
    ],
    correct: 1,
    explanation: 'Баяулау кезеңінде ресурстар тапшылана бастайды, дарақтар арасындағы бәсеке күшейіп, өсу қарқыны төмендейді.',
  },
  {
    question: 'Тұрақты кезең (плато) немен сипатталады?',
    options: [
      'Дарақтар саны K мәніне жетіп, тепе-теңдікте болады',
      'Дарақтар саны нөлге дейін азаяды',
      'Өсу қарқыны ең жоғары деңгейге жетеді',
      'Ресурстар шексіз бола бастайды',
    ],
    correct: 0,
    explanation: 'Плато кезеңінде дарақтар саны тасымалдау сыйымдылығына (K) жетіп, тепе-теңдік орнайды.',
  },
  {
    question: 'K әрпі логистикалық модельде нені білдіреді?',
    options: [
      'Дарақтардың орташа жасын',
      'Ортаның тасымалдау сыйымдылығын (максималды тұрақты дарақ саны)',
      'Туу коэффициентін',
      'Өлім коэффициентін',
    ],
    correct: 1,
    explanation: 'K — белгілі бір ортаның ұзақ мерзімде асырай алатын максималды тұрақты дарақ саны.',
  },
  {
    question: 'Популяция саны K мәнінен асып кетсе, не болады?',
    options: [
      'Өсу шексіз жалғаса береді',
      'Өлім-жітім артып, дарақтар саны төмендейді',
      'K мәні автоматты түрде артады',
      'Ештеңе өзгермейді',
    ],
    correct: 1,
    explanation: 'Популяция K мәнінен асып кетсе, ресурс жетіспей өлім-жітім артады да, сан қайта төмендейді.',
  },
  {
    question: 'Логистикалық өсу теңдеуі қалай жазылады?',
    options: ['dN/dt = rN', 'dN/dt = rN(K−N)/K', 'dN/dt = K/N', 'dN/dt = N/r'],
    correct: 1,
    explanation: 'Логистикалық өсу теңдеуі: dN/dt = rN(K−N)/K, мұндағы (K−N)/K — орта кедергісінің коэффициенті.',
  },
  {
    question: 'Теңдеудегі N әрпі нені білдіреді?',
    options: ['Өсудің меншікті қарқынын', 'Популяциядағы дарақтар санын', 'Тасымалдау сыйымдылығын', 'Уақыт өлшемін'],
    correct: 1,
    explanation: 'N — теңдеудегі популяциядағы дарақтар санын білдіретін айнымалы.',
  },
  {
    question: '(K−N)/K мәні нөлге ұмтылғанда не болады?',
    options: [
      'Өсу қарқыны экспоненциалды түрде артады',
      'Өсу қарқыны нөлге ұмтылады',
      'K мәні артады',
      'N мәні теріс болады',
    ],
    correct: 1,
    explanation: '(K−N)/K → 0 болғанда орта кедергісі күшейеді, сондықтан өсу қарқыны нөлге жақындайды.',
  },
  {
    question: 'dN/dt = 0 теңдігі нені білдіреді?',
    options: [
      'Популяция толығымен құрып бітті',
      'Популяция тепе-теңдік күйінде, сан өзгермейді',
      'Популяция тез қарқынмен өсіп жатыр',
      'K мәні үнемі өзгеріп тұр',
    ],
    correct: 1,
    explanation: 'dN/dt = 0 болғанда популяция тепе-теңдік күйінде болады, яғни дарақтар саны өзгермейді.',
  },
  {
    question: 'Мына нұсқалардың қайсысы сигмоидты қисыққа әсер ЕТПЕЙДІ?',
    options: ['Қорек ресурстары', 'Жыртқыштар мен паразиттер', 'Ай фазалары', 'Климат жағдайлары'],
    correct: 2,
    explanation: 'Қисыққа қорек, кеңістік, жыртқыштар, аурулар, климат және көші-қон сияқты факторлар әсер етеді, ал ай фазалары олардың қатарына кірмейді.',
  },
  {
    question: 'Ашытқы саңырауқұлақтары мысалында популяция қалай өседі?',
    options: [
      'Тұрақты экспоненциалды түрде шексіз өседі',
      'Классикалық S-тәрізді қисықпен өсіп, ортаның сыйымдылығына жеткенде тұрақтанады',
      'Дереу құрып кетеді',
      'Сызықтық түрде біркелкі өседі',
    ],
    correct: 1,
    explanation: 'Ашытқы популяциясы қоректік ортада классикалық S-тәрізді қисықпен өсіп, K мәніне жеткенде тұрақтанады.',
  },
  {
    question: 'Логистикалық модель қай салаларда кеңінен қолданылады?',
    options: ['Тек физикада', 'Экология, демография және биотехнологияда', 'Тек химияда', 'Тек астрономияда'],
    correct: 1,
    explanation: 'Логистикалық модель экологияда, демографияда және биотехнологияда популяция немесе процесс динамикасын болжау үшін кеңінен қолданылады.',
  },
];

// ============================================================
// ТИПТЕР
// ============================================================
type Phase = 'start' | 'question' | 'picked' | 'revealed' | 'finished';
type TeamId = 1 | 3;

const OPTION_STYLES = [
  { bg: 'from-rose-500 to-red-500', letter: 'A' },
  { bg: 'from-blue-500 to-indigo-500', letter: 'B' },
  { bg: 'from-amber-400 to-orange-500', letter: 'C' },
  { bg: 'from-emerald-500 to-teal-500', letter: 'D' },
];

export default function Page() {
  const [phase, setPhase] = useState<Phase>('start');
  const [qIndex, setQIndex] = useState(0);
  const [scores, setScores] = useState<{ team1: number; team3: number }>({ team1: 0, team3: 0 });
  const [firstTeam, setFirstTeam] = useState<TeamId | null>(null);
  const [chosenOption, setChosenOption] = useState<number | null>(null);
  const [wasCorrect, setWasCorrect] = useState<boolean | null>(null);
  const [log, setLog] = useState<{ team: TeamId; correct: boolean }[]>([]);

  const current = QUESTIONS[qIndex];
  const totalQuestions = QUESTIONS.length;

  const startQuiz = () => {
    setPhase('question');
    setQIndex(0);
    setScores({ team1: 0, team3: 0 });
    setFirstTeam(null);
    setChosenOption(null);
    setWasCorrect(null);
    setLog([]);
  };

  const pickFirstTeam = (team: TeamId) => {
    setFirstTeam(team);
    setPhase('picked');
  };

  const chooseOption = (index: number) => {
    if (!firstTeam) return;
    const correct = index === current.correct;
    setChosenOption(index);
    setWasCorrect(correct);
    setLog((prev) => [...prev, { team: firstTeam, correct }]);
    if (correct) {
      setScores((prev) => ({
        ...prev,
        [firstTeam === 1 ? 'team1' : 'team3']:
          prev[firstTeam === 1 ? 'team1' : 'team3'] + POINTS_PER_CORRECT,
      }));
    }
    setPhase('revealed');
  };

  const nextQuestion = () => {
    if (qIndex + 1 >= totalQuestions) {
      setPhase('finished');
      return;
    }
    setQIndex((prev) => prev + 1);
    setFirstTeam(null);
    setChosenOption(null);
    setWasCorrect(null);
    setPhase('question');
  };

  const restart = () => {
    setPhase('start');
    setQIndex(0);
    setScores({ team1: 0, team3: 0 });
    setFirstTeam(null);
    setChosenOption(null);
    setWasCorrect(null);
    setLog([]);
  };

  // ============================================================
  // START SCREEN — welcome / приветствие
  // ============================================================
  if (phase === 'start') {
    return (
      <div className="relative min-h-screen bg-white text-zinc-900 overflow-hidden flex items-center justify-center px-4">
        {/* мягкие цветные пятна на белом фоне */}
        <div className="absolute top-[-15%] left-[-10%] w-[550px] h-[550px] bg-emerald-200/50 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[550px] h-[550px] bg-indigo-200/50 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-amber-200/40 rounded-full blur-[110px]" />

        {/* тонкая сетка для премиального ощущения */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #f4f4f5 1px, transparent 1px), linear-gradient(to bottom, #f4f4f5 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative z-10 max-w-2xl w-full text-center">
          {/* декоративная иконка сигмоидной кривой */}
          <div className="mx-auto mb-8 w-20 h-20 rounded-3xl bg-white border border-zinc-200 shadow-xl shadow-zinc-200/60 flex items-center justify-center">
            <TrendingUp className="w-9 h-9 text-emerald-500" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-sm text-zinc-500 mb-6">
            <Leaf className="w-4 h-4 text-emerald-500" />
            {QUIZ_SUBTITLE}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5 bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-transparent">
            {QUIZ_TITLE}
          </h1>
          <p className="text-zinc-500 text-base md:text-lg mb-10 max-w-xl mx-auto">
            20 сұрақтан тұратын биология-квизі. Уақыт шектеуі жоқ — жеңіс жылдамдық пен білімге байланысты!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-zinc-200 bg-white shadow-md shadow-zinc-200/50">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white">
                1
              </div>
              <span className="font-semibold">{TEAM1_NAME}</span>
            </div>
            <Zap className="w-6 h-6 text-zinc-300 rotate-90 sm:rotate-0" />
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-zinc-200 bg-white shadow-md shadow-zinc-200/50">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-bold text-white">
                3
              </div>
              <span className="font-semibold">{TEAM3_NAME}</span>
            </div>
          </div>

          <button
            onClick={startQuiz}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-lg transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
          >
            <Play className="w-5 h-5" />
            Ойынды бастау
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="mt-8 text-xs text-zinc-400 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Хост сұрақты дауыстап оқиды, дұрыс жауап берген команданы компьютерден таңдайды
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // FINISHED SCREEN
  // ============================================================
  if (phase === 'finished') {
    const winner =
      scores.team1 === scores.team3 ? null : scores.team1 > scores.team3 ? TEAM1_NAME : TEAM3_NAME;
    const winnerScore = Math.max(scores.team1, scores.team3);
    const loserScore = Math.min(scores.team1, scores.team3);

    return (
      <div className="relative min-h-screen bg-white text-zinc-900 overflow-hidden flex items-center justify-center px-4">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-200/40 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[130px]" />

        <div className="relative z-10 max-w-xl w-full text-center">
          <div className="mx-auto mb-6 w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-lg shadow-amber-300/50">
            <Trophy className="w-10 h-10 text-white" />
          </div>

          <p className="text-zinc-400 uppercase tracking-widest text-xs mb-2">Ойын аяқталды</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-zinc-900">
            {winner ? (
              <>
                Жеңімпаз —{' '}
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  {winner}
                </span>
              </>
            ) : (
              'Тең ойын!'
            )}
          </h2>
          <p className="text-zinc-500 mb-10">
            {winner ? `${winnerScore} : ${loserScore} есебімен` : `${scores.team1} : ${scores.team3} есебімен`}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            <div
              className={`rounded-2xl border p-6 ${
                scores.team1 >= scores.team3
                  ? 'border-amber-300 bg-amber-50'
                  : 'border-zinc-200 bg-zinc-50'
              }`}
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white">
                1
              </div>
              <p className="text-sm text-zinc-500 mb-1">{TEAM1_NAME}</p>
              <p className="text-3xl font-bold text-zinc-900">{scores.team1}</p>
            </div>
            <div
              className={`rounded-2xl border p-6 ${
                scores.team3 >= scores.team1
                  ? 'border-amber-300 bg-amber-50'
                  : 'border-zinc-200 bg-zinc-50'
              }`}
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-bold text-white">
                3
              </div>
              <p className="text-sm text-zinc-500 mb-1">{TEAM3_NAME}</p>
              <p className="text-3xl font-bold text-zinc-900">{scores.team3}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-zinc-500 mb-8">
            <Award className="w-4 h-4" />
            {log.filter((l) => l.correct).length} дұрыс жауап / {totalQuestions} сұрақ
          </div>

          <button
            onClick={restart}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors font-medium shadow-sm"
          >
            <RotateCcw className="w-4 h-4" />
            Қайта бастау
          </button>
        </div>
      </div>
    );
  }

  // ============================================================
  // QUESTION / PICKED / REVEALED SCREEN
  // ============================================================
  return (
    <div className="relative min-h-screen bg-white text-zinc-900 overflow-hidden">
      <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-emerald-200/40 rounded-full blur-[130px]" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[130px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-6 md:py-10">
        {/* Scoreboard */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all ${
              firstTeam === 1
                ? 'border-blue-400 bg-blue-50 shadow-md shadow-blue-200/50'
                : 'border-zinc-200 bg-white shadow-sm'
            }`}
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-sm text-white shrink-0">
              1
            </div>
            <div>
              <p className="text-[11px] text-zinc-500 leading-none mb-1">{TEAM1_NAME}</p>
              <p className="text-lg font-bold leading-none">{scores.team1}</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-zinc-400 mb-1">
              Сұрақ {qIndex + 1} / {totalQuestions}
            </p>
            <div className="w-32 md:w-48 h-1.5 rounded-full bg-zinc-100 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
                style={{ width: `${((qIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all ${
              firstTeam === 3
                ? 'border-amber-400 bg-amber-50 shadow-md shadow-amber-200/50'
                : 'border-zinc-200 bg-white shadow-sm'
            }`}
          >
            <div>
              <p className="text-[11px] text-zinc-500 leading-none mb-1 text-right">{TEAM3_NAME}</p>
              <p className="text-lg font-bold leading-none text-right">{scores.team3}</p>
            </div>
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-bold text-sm text-white shrink-0">
              3
            </div>
          </div>
        </div>

        {/* Question card */}
        <div className="rounded-3xl border border-zinc-200 bg-white shadow-lg shadow-zinc-200/40 p-6 md:p-10 mb-6">
          <div className="flex items-center gap-2 text-xs text-zinc-400 mb-4">
            <Brain className="w-3.5 h-3.5 text-emerald-500" />
            {QUIZ_SUBTITLE}
          </div>
          <h2 className="text-xl md:text-3xl font-bold leading-snug text-zinc-900">{current.question}</h2>
        </div>

        {/* Options grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {current.options.map((opt, idx) => {
            const style = OPTION_STYLES[idx];
            const isChosen = chosenOption === idx;
            const isCorrectAnswer = current.correct === idx;
            const clickable = phase === 'picked';

            let stateClasses = '';
            if (phase === 'revealed') {
              if (isCorrectAnswer) {
                stateClasses = 'ring-4 ring-emerald-400 scale-[1.02]';
              } else if (isChosen && !isCorrectAnswer) {
                stateClasses = 'ring-4 ring-red-400 opacity-60';
              } else {
                stateClasses = 'opacity-40';
              }
            }

            return (
              <button
                key={idx}
                disabled={!clickable}
                onClick={() => clickable && chooseOption(idx)}
                className={`relative text-left rounded-2xl p-5 bg-gradient-to-br ${style.bg} ${stateClasses} ${
                  clickable ? 'hover:scale-[1.02] cursor-pointer' : 'cursor-default'
                } transition-all shadow-md`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center font-bold text-white shrink-0">
                    {style.letter}
                  </div>
                  <p className="font-semibold text-white leading-snug">{opt}</p>
                  {phase === 'revealed' && isCorrectAnswer && (
                    <CheckCircle2 className="w-6 h-6 text-white ml-auto shrink-0" />
                  )}
                  {phase === 'revealed' && isChosen && !isCorrectAnswer && (
                    <XCircle className="w-6 h-6 text-white ml-auto shrink-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Host controls */}
        {phase === 'question' && (
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6 text-center">
            <p className="flex items-center justify-center gap-2 text-sm text-zinc-500 mb-4">
              <Users className="w-4 h-4" />
              Қай команда бірінші жауап берді?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => pickFirstTeam(1)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold transition-all hover:scale-105 shadow-md shadow-blue-300/40"
              >
                {TEAM1_NAME} бірінші
              </button>
              <button
                onClick={() => pickFirstTeam(3)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-white font-bold transition-all hover:scale-105 shadow-md shadow-amber-300/40"
              >
                {TEAM3_NAME} бірінші
              </button>
            </div>
          </div>
        )}

        {phase === 'picked' && firstTeam && (
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6 text-center">
            <p className="text-sm text-zinc-500">
              <span className={firstTeam === 1 ? 'text-blue-600 font-semibold' : 'text-amber-600 font-semibold'}>
                {firstTeam === 1 ? TEAM1_NAME : TEAM3_NAME}
              </span>{' '}
              бірінші жауап берді. Енді олардың нұсқасын жоғарыдан таңдаңыз.
            </p>
          </div>
        )}

        {phase === 'revealed' && (
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
            <div
              className={`flex items-center gap-2 mb-3 font-semibold ${
                wasCorrect ? 'text-emerald-600' : 'text-red-500'
              }`}
            >
              {wasCorrect ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
              {wasCorrect
                ? `Дұрыс! ${firstTeam === 1 ? TEAM1_NAME : TEAM3_NAME} +${POINTS_PER_CORRECT} ұпай алды`
                : `Қате жауап. Ұпай берілмейді`}
            </div>
            <p className="text-sm text-zinc-500 mb-5 leading-relaxed">{current.explanation}</p>
            <div className="text-center">
              <button
                onClick={nextQuestion}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold transition-all hover:scale-105"
              >
                {qIndex + 1 >= totalQuestions ? 'Қорытындыны көру' : 'Келесі сұрақ'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}