// Lightweight i18n; extend keys as needed
const I18N = {
  en: {
    "brand.name": "[Your Name] Academy",
    "brand.slogan": "Nurturing Competence, Cultivating Character",
    "nav.about": "About",
    "nav.academics": "CBC Model",
    "nav.studentlife": "Student Life",
    "nav.gallery": "Gallery",
    "nav.news": "News & Events",
    "nav.contact": "Contact",
    "nav.admissions": "Admissions",
    "cta.apply": "Apply",
    "home.heroTitle": "Welcome to [Your Name] Academy",
    "home.heroLead": "Empowering learners through Kenya's Competency-Based Curriculum for a brighter tomorrow.",
    "home.cta1": "Our CBC Approach",
    "home.cta2": "Admissions",
    "home.h1": "Hands‑on Learning",
    "home.p1": "Projects, portfolios, and real‑world tasks build lasting competence.",
    "home.h2": "Holistic Growth",
    "home.p2": "Character, citizenship, and creativity are nurtured daily.",
    "home.h3": "CBC‑Aligned",
    "home.p3": "Fully aligned to Kenya’s 2‑6‑6‑3 CBC structure and assessments.",
    "home.welcomeTitle": "A Message from the Head",
    "home.welcomeBody": "Dear parents and learners, welcome to a school where competence meets character. Our teams design engaging, practical learning experiences that build the seven core competencies every day. Karibuni!",
    "home.welcomeLink": "Read more",
    "home.s1": "Parent Satisfaction",
    "home.s2": "Clubs & Sports",
    "home.s3": "Learner–Teacher Ratio",
    "home.testimonials": "What Families Say",
    "home.ctaband": "Admissions for 2025 are open for Early Years, Middle School, and Senior School."
  },
  sw: {
    "brand.name": "[Your Name] Academy",
    "brand.slogan": "Kukuza Uwezo, Kulea Maadili",
    "nav.about": "Kuhusu Sisi",
    "nav.academics": "Mfumo wa CBC",
    "nav.studentlife": "Maisha ya Wanafunzi",
    "nav.gallery": "Picha",
    "nav.news": "Habari & Matukio",
    "nav.contact": "Mawasiliano",
    "nav.admissions": "Uandikishaji",
    "cta.apply": "Omba",
    "home.heroTitle": "Karibu [Your Name] Academy",
    "home.heroLead": "Tunawawezesha wanafunzi kupitia Mtaala wa Ujifunzaji kwa Umahiri (CBC) wa Kenya.",
    "home.cta1": "Njia Yetu ya CBC",
    "home.cta2": "Uandikishaji",
    "home.h1": "Kujifunza kwa Vitendo",
    "home.p1": "Miradi na kazi halisi hujenga umahiri wa kudumu.",
    "home.h2": "Ukuaji wa Kina",
    "home.p2": "Tabia njema, uraia na ubunifu huendelezwa kila siku.",
    "home.h3": "Inaoana na CBC",
    "home.p3": "Imelinganishwa kikamilifu na muundo wa 2‑6‑6‑3 na tathmini zake.",
    "home.welcomeTitle": "Ujumbe kutoka kwa Mkuu wa Shule",
    "home.welcomeBody": "Wazazi na wanafunzi, karibuni. Tunakuza umahiri na tabia njema kupitia ujifunzaji wa vitendo kila siku. Karibuni!",
    "home.welcomeLink": "Soma zaidi",
    "home.s1": "Kuridhika kwa Wazazi",
    "home.s2": "Vilabu & Michezo",
    "home.s3": "Uwiano Mwalimu–Mwanafunzi",
    "home.testimonials": "Maoni ya Wazazi",
    "home.ctaband": "Uandikishaji wa 2025 umefunguliwa kwa ngazi zote."
  }
};

function applyI18n(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(I18N[lang] && I18N[lang][key]) el.textContent = I18N[lang][key];
  });
  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", ()=>{
  const langBtn = document.getElementById("lang-toggle");
  const initial = localStorage.getItem("lang") || "en";
  applyI18n(initial);
  if(langBtn){
    langBtn.addEventListener("click", ()=>{
      const next = (localStorage.getItem("lang") || "en") === "en" ? "sw" : "en";
      applyI18n(next);
    });
  }
});


