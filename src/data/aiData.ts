import { AITool, AICoreConcept, AICapability, FAQItem } from '../types.ts';

export const AI_TOOLS: AITool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    tagline: 'Matn va g‘oyalar yaratish',
    category: 'text',
    categoryLabel: 'Matn va Dialog',
    iconName: 'MessageSquareText',
    brandColor: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/20 border-emerald-500/30 text-emerald-400',
    url: 'https://chatgpt.com',
    description: 'Dunyoning eng mashhur til modeli. Maqola, insho yozish, g‘oyalar miya hujumi va murakkab savollarga javob topishda tengsiz yordamchi.',
    fullDescription: 'OpenAI tomonidan yaratilgan ChatGPT — ilg‘or generativ sun’iy intellekt bo‘lib, matnlar yaratish, til tarjimasi, tahliliy hisobotlar tuzish va yangi g‘oyalar ishlab chiqishda insoniy suhbat sifatini taqdim etadi.',
    features: [
      'Turli mavzularda chuqur tahliliy matn yozish',
      'Ijodiy hikoyalar, postlar va skriptlar yaratish',
      'Hujjatlar va kitoblardan qisqacha xulosalar chiqarish',
      'Matematik va mantiqiy masalalarni qadamma-qadam yechish'
    ],
    pricingType: 'Bepul va pullik',
    recommendedFor: 'Kopirayterlar, talabalar, tadqiqotchilar va barcha matn bilan ishlovchilar'
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    tagline: 'Aqlli yordamchi va multimodal tahlil',
    category: 'assistant',
    categoryLabel: 'Multimodal AI',
    iconName: 'Sparkles',
    brandColor: 'from-blue-500/20 via-indigo-500/10 to-purple-500/20 border-blue-500/30 text-blue-400',
    url: 'https://gemini.google.com',
    description: 'Google ekotizimiga chuqur integratsiyalashgan, matn, tasvir, audio va video bilan bir vaqtda ishlay oladigan kuchli sun’iy intellekt modeli.',
    fullDescription: 'Google Gemini — zamonaviy multimodal arxitekturaga ega bo‘lib, nafaqat matnni, balki murakkab vizual sxemalarni, jadvallarni va real vaqt ma’lumotlarini tahlil qilishga qodir eng so‘nggi AI platformasidir.',
    features: [
      'Tasvirlar va chizmalarni tezkor tahlil qilish',
      'Google qidiruv orqali yangi va ishonchli manbalarga tayanadi',
      'Google Workspace (Docs, Sheets, Gmail) bilan uyg‘unlik',
      'Katta hajmdagi ma’lumotlarni tahlil qilish va umumlashtirish'
    ],
    pricingType: 'Freemium',
    recommendedFor: 'Kundalik vazifalarni soddalashtiruvchilar, biznes egalari va tahlilchilar'
  },
  {
    id: 'gamma',
    name: 'Gamma',
    tagline: 'Prezentatsiyalar yaratish',
    category: 'presentation',
    categoryLabel: 'Prezentatsiya va Veb',
    iconName: 'Presentation',
    brandColor: 'from-violet-500/20 via-purple-500/10 to-fuchsia-500/20 border-violet-500/30 text-violet-400',
    url: 'https://gamma.app',
    description: 'Birgina matnli so‘rov yoki mavzu orqali bir necha daqiqada taqdimotlar, chiroyli slaydlari va veb-sahifalar tayyorlovchi innovatsion vosita.',
    fullDescription: 'Gamma — an’anaviy taqdimot tayyorlash jarayonini butkul o‘zgartirdi. Mavzuni kiritasiz, sun’iy intellekt esa to‘liq slayd matnlari, mos rasmlar va zamonaviy dizayn uslublarini avtomatik yaratib beradi.',
    features: [
      'Oddiy tavsifdan to‘liq slaydlar to‘plamini yasash',
      'Zamonaviy, moslashuvchan va professional dizayn shablonlari',
      'PowerPoint yoki PDF formatiga eksport qilish imkoniyati',
      'Interaktiv bloklar, kartalar va diagrammalar joylash'
    ],
    pricingType: 'Bepul sinov',
    recommendedFor: 'Spikerlar, startapchilar, o‘qituvchilar va savdo menejerlari'
  },
  {
    id: 'canva',
    name: 'Canva AI',
    tagline: 'Dizayn va grafikalar',
    category: 'design',
    categoryLabel: 'Vizual Dizayn',
    iconName: 'Palette',
    brandColor: 'from-cyan-500/20 via-sky-500/10 to-blue-500/20 border-cyan-500/30 text-cyan-400',
    url: 'https://canva.com',
    description: 'Magic Studio AI imkoniyatlari yordamida suratlarni o‘zgartirish, fonlarni tozalash, yangi rasmlar generatsiya qilish va dizayn yaratish platformasi.',
    fullDescription: 'Canva AI — professional grafik dizayner bo‘lmagan har qanday insonga Magic Design, Magic Media va Magic Edit orqali ajoyib bannerlar, ijtimoiy tarmoq postlari va logotiplar yaratish kuchini beradi.',
    features: [
      'Matnli tavsif asosida sifatli illyustratsiya va rasmlar hosil qilish',
      'Rasmdan keraksiz obyektlarni yoki fonni bir bosishda olib tashlash',
      'O‘lchamlarni avtomatik moslashtirish (Magic Switch)',
      'Brend uslubiga mos vizuallarni tezkor yaratish'
    ],
    pricingType: 'Freemium',
    recommendedFor: 'SMM mutaxassislari, marketologlar va ijodkorlar'
  },
  {
    id: 'claude',
    name: 'Claude',
    tagline: 'Matn va tahlil',
    category: 'text',
    categoryLabel: 'Chuqur Tahlil',
    iconName: 'Cpu',
    brandColor: 'from-amber-500/20 via-orange-500/10 to-rose-500/20 border-amber-500/30 text-amber-400',
    url: 'https://claude.ai',
    description: 'Anthropic tomonidan yaratilgan, xavfsizlik va chuqur adabiy-mantiqiy tahlilga ixtisoslashgan yuqori darajadagi intellektual assistent.',
    fullDescription: 'Claude — ulkan kontekstli xotirasi bilan mashhur bo‘lib, butun kitoblar, yuridik shartnomalar yoki yuzlab sahifali ilmiy maqolalarni bir necha soniyada sinchkovlik bilan tahlil qilib beradi.',
    features: [
      'Juda katta hajmdagi PDF va hujjatlarni chuqur tahlil qilish',
      'Insoniy, ravon va adabiy jihatdan boy matnlar yaratish',
      'Dasturiy kodlarni audit qilish va mantiqiy xatolarni topish',
      'Xavfsiz va aniq xulosalar chiqarish'
    ],
    pricingType: 'Bepul va pullik',
    recommendedFor: 'Tadqiqotchilar, mualliflar, tahlilchilar va dasturchilar'
  },
  {
    id: 'copilot',
    name: 'GitHub Copilot',
    tagline: 'Dasturlashda yordam',
    category: 'coding',
    categoryLabel: 'Kod va Dasturlash',
    iconName: 'Code2',
    brandColor: 'from-purple-500/20 via-indigo-500/10 to-blue-500/20 border-purple-500/30 text-purple-400',
    url: 'https://github.com/features/copilot',
    description: 'Dasturchilarning virtual juftlikdagi hamkori. Kod yozish jarayonida real vaqt rejimida qatorlar va to‘liq funksiyalarni avtomatik taklif etadi.',
    fullDescription: 'GitHub Copilot — OpenAI Codex va ilg‘or modellar negizida ishlaydi. VS Code, JetBrains kabi muhitlarda dasturchining kodlash tezligini 55% gacha oshirib, takroriy ishlardan xalos etadi.',
    features: [
      'Izohlar (kommentlar) orqali tayyor kod bloklarini generatsiya qilish',
      'Onlayn kod to‘ldirish va sintaksis xatolarni oldini olish',
      'Testlar (Unit tests) va hujjatlarni avtomatik yozish',
      'Ko‘plab dasturlash tillarini (JS, Python, TS, Go, C#) mukammal tushunish'
    ],
    pricingType: 'Pullik (sinov muddati bilan)',
    recommendedFor: 'Frontend, backend, mobile dasturchilar va injenerlar'
  }
];

export const AI_CONCEPTS: AICoreConcept[] = [
  {
    id: 'ml',
    title: 'Mashinaviy o‘rganish',
    subtitle: 'Machine Learning',
    icon: 'BrainCircuit',
    description: 'Kompyuterlar ma’lumotlar asosida mustaqil ravishda o‘rganishi, tajriba to‘plashi va yangi vaziyatlarda inson aralashuvisiz to‘g‘ri qarorlar qabul qilishi texnologiyasi.',
    details: [
      'Nazorat ostida va nazoratsiz o‘rganish usullari',
      'Katta hajmdagi ma’lumotlar (Big Data) orqali bashorat qilish',
      'Tibbiy tashxis, bank firibgarligini aniqlash va tavsiya tizimlari'
    ],
    gradient: 'from-blue-600/30 to-cyan-500/10'
  },
  {
    id: 'nn',
    title: 'Neyron tarmoqlar',
    subtitle: 'Neural Networks & Deep Learning',
    icon: 'Network',
    description: 'Inson miyasi neyronlari ishlash tamoyiliga asoslangan ko‘p qatlamli hisoblash tarmoqlari. Ular murakkab tasvirlarni, tovushlarni va naqshlarni taniy oladi.',
    details: [
      'Ko‘p qatlamli sun’iy neyronlar va sinapslar modeli',
      'Kompuyter ko‘rishi (Computer Vision) va avtonom transport vositalari',
      'Ovozni taniy olish va real vaqtda nutqni tarjima qilish'
    ],
    gradient: 'from-purple-600/30 to-indigo-500/10'
  },
  {
    id: 'genai',
    title: 'Generativ AI',
    subtitle: 'Generative Artificial Intelligence',
    icon: 'Sparkles',
    description: 'Mavjud ma’lumotlarni faqat tahlil qilibgina qolmay, butunlay yangi matnlar, realistik suratlar, musiqa, video va dasturiy kodlarni noldan yarata oladigan inqilobiy intellekt.',
    details: [
      'Katta til modellari (LLM — Large Language Models)',
      'Diffuzion modellar orqali yuqori sifatli fotosuratlar yaratish',
      'Inson ijodiyoti bilan uyg‘unlashgan sun’iy kreativlik'
    ],
    gradient: 'from-fuchsia-600/30 to-pink-500/10'
  }
];

export const AI_CAPABILITIES: AICapability[] = [
  {
    id: 'instant-info',
    title: 'Tezkor ma’lumot',
    description: 'Millionlab sahifadagi ensiklopedik va ilmiy bilimlardan kerakli javobni bir necha soniyada aniq saralab, tushunarli tilda taqdim etadi.',
    icon: 'Zap',
    highlights: [
      'So‘rovlarga real vaqtda javob',
      'Manbalarni umumlashtirish',
      'Ko‘p tilli tezkor tarjima'
    ],
    metric: '10x',
    metricLabel: 'Qidiruv va tahlil tezligi'
  },
  {
    id: 'creative-ideas',
    title: 'Ijodiy g‘oyalar',
    description: 'Yozuvchi bloki yoki ilhom yetishmasligini unuting. Marketing shiorlari, blog mavzulari, san’at asarlari va innovatsion loyihalar uchun cheksiz g‘oyalar manbai.',
    icon: 'Lightbulb',
    highlights: [
      'Kreativ matn va postlar',
      'Vizual konseptlar yaratish',
      'Kompaniya va mahsulot brendingi'
    ],
    metric: 'Cheksiz',
    metricLabel: 'Ilhom va yangi yondashuvlar'
  },
  {
    id: 'education-learning',
    title: 'Ta’lim va o‘rganish',
    description: 'Har bir o‘quvchi va mutaxassisning o‘zlashtirish tezligiga moslashuvchi shaxsiy 24/7 repetitor. Murakkab mavzularni oddiy misollar bilan tushuntiradi.',
    icon: 'GraduationCap',
    highlights: [
      'Shaxsiy o‘quv rejasi',
      'Xorijiy tillarni jonli mashq qilish',
      'Fanlardan interaktiv masalalar'
    ],
    metric: '24/7',
    metricLabel: 'Shaxsiy virtual murabbiy'
  },
  {
    id: 'business-automation',
    title: 'Biznes va avtomatlashtirish',
    description: 'Qaytariluvchi ma’muriy vazifalarni, mijozlar qo‘llab-quvvatlashini va tahliliy hisobotlarni to‘liq avtomatlashtirish orqali xarajatlarni qisqartiradi.',
    icon: 'TrendingUp',
    highlights: [
      'Aqlli chatbotlar orqali mijozlar xizmati',
      'Moliyaviy va savdo tahlili',
      'Ish jarayonlari (workflow) optimallashuvi'
    ],
    metric: '+65%',
    metricLabel: 'Mehnat unumdorligi o‘sishi'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Sun’iy intellekt nima?',
    answer: 'Sun’iy intellekt (AI — Artificial Intelligence) — bu kompyuter yoki dasturlarning inson aqli talab qilinadigan vazifalarni mustaqil bajarish qobiliyatidir. Bunga mantiqiy xulosalar chiqarish, tildan foydalanish, tasvirlarni tanish, yangi ma’lumotlarni o‘rganish va muammolarni ijodiy yechish kiradi.'
  },
  {
    id: 'faq-2',
    question: 'AI vositalaridan qanday foydalaniladi?',
    answer: 'Aksariyat zamonaviy AI vositalari (masalan, ChatGPT, Gemini, Canva) brauzer yoki mobil ilova orqali ishlaydi. Siz shunchaki ro‘yxatdan o‘tib, chat qutisiga o‘zingiz xohlagan vazifani oddiy o‘zbek tilida yozasiz (bunga "prompt" deyiladi). Masalan: "Menga O‘zbekiston tarixi haqida 5 ta qiziqarli fakt tayyorlab ber" yoki "Elektron tijorat uchun marketing rejasi tuz". Vosita darhol natijani taqdim etadi.'
  },
  {
    id: 'faq-3',
    question: 'AI bepulmi?',
    answer: 'Ko‘plab asosiy AI vositalarining foydali bepul versiyalari mavjud (masalan ChatGPT 3.5/4o-mini, Google Gemini, Canva Free, Gamma bepul kreditlari). Ular kundalik ehtiyojlar uchun yetarlidir. Kengaytirilgan imkoniyatlar, eng yangi premium modellar (masalan ChatGPT Plus, Claude Pro, GitHub Copilot) esa oylik obuna asosida taqdim etiladi.'
  },
  {
    id: 'faq-4',
    question: 'AI insonlarning ishini egallaydimi?',
    answer: 'Sun’iy intellekt odamlarni to‘liq almashtirmaydi, biroq insonlarning ishlash tarzini tubdan o‘zgartiradi. Rutin, takroriy va mexanik vazifalar avtomatlashadi, ammo ijodkorlik, strategik fikrlash, empatiya va insoniy munosabatlarni talab qiluvchi sohalar ahamiyati yanada ortadi. Zamonaviy dunyoda "AI insonni almashtirmaydi, lekin AI dan foydalanishni bilgan inson bilmagan insonni almashtiradi".'
  }
];

export const CHAT_SUGGESTIONS: string[] = [
  'Sun’iy intellekt qanday ishlaydi?',
  'Dasturlashni o‘rganishda AI qanday yordam beradi?',
  'O‘zbekistonda sun’iy intellekt istiqbollari',
  'Yaxshi prompt yozish qoidalari qanday?',
  'Qaysi AI vositasi slayd tayyorlash uchun eng yaxshi?'
];
