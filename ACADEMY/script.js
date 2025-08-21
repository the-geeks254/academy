// Utility: qs
const qs = (sel, ctx=document) => ctx.querySelector(sel);
const qsa = (sel, ctx=document) => [...ctx.querySelectorAll(sel)];

// Dynamic year
document.addEventListener("DOMContentLoaded", ()=>{
  const y = new Date().getFullYear();
  qsa("#year").forEach(n=>n.textContent = y);
});

// Mobile nav
document.addEventListener("click", (e)=>{
  if(e.target.matches(".nav-toggle")){
    const menu = qs("#nav-menu");
    const exp = e.target.getAttribute("aria-expanded") === "true";
    e.target.setAttribute("aria-expanded", String(!exp));
    if(menu) menu.setAttribute("aria-expanded", String(!exp));
    menu?.toggleAttribute("data-open");
    if(menu?.hasAttribute("data-open")) menu.style.display = "flex"; else menu.style.display = "";
  }
});

// Greeting by time (Home)
document.addEventListener("DOMContentLoaded", ()=>{
  const el = qs("#hero-greeting");
  if(!el) return;
  const h = new Date().getHours();
  let g = "Welcome to [Your Name] Academy";
  if(h < 12) g = "Good Morning — Welcome to [Your Name] Academy";
  else if(h < 18) g = "Good Afternoon — Welcome to [Your Name] Academy";
  else g = "Good Evening — Welcome to [Your Name] Academy";
  el.textContent = g;
});

// News data (could be CMS-fed later)
const NEWS = [
  { title:"Regional Science Fair Winners", date:"2025-07-12", body:"Our STEM Club clinched top awards with a water‑saving irrigation prototype." },
  { title:"Parent Forum on CBC Assessment", date:"2025-06-28", body:"We hosted a session to unpack continuous assessment and learner portfolios." },
  { title:"Arts Showcase & Market Day", date:"2025-05-31", body:"Learners exhibited artworks, performances, and student‑made products." }
];

const EVENTS = [
  { title:"PTA Meeting", date:"2025-09-05", place:"Auditorium" },
  { title:"Sports Day", date:"2025-10-11", place:"Main Field" },
  { title:"CBC Project Expo", date:"2025-11-22", place:"Hall & Courtyard" }
];

// News ticker
document.addEventListener("DOMContentLoaded", ()=>{
  const t = qs("#news-ticker");
  if(!t) return;
  t.innerHTML = NEWS.map(n => `${n.date}: ${n.title}`).join(" • ");
});

// News page rendering
document.addEventListener("DOMContentLoaded", ()=>{
  const list = qs("#news-list");
  if(!list) return;
  NEWS.sort((a,b)=> b.date.localeCompare(a.date));
  list.innerHTML = NEWS.map(n => `
    <article class="card soft">
      <h4>${n.title}</h4>
      <small class="muted">${new Date(n.date).toLocaleDateString()}</small>
      <p>${n.body}</p>
    </article>
  `).join("");

  const ev = qs("#events-list");
  if(ev) ev.innerHTML = EVENTS.map(e => `<li><strong>${new Date(e.date).toLocaleDateString()}</strong> — ${e.title} <span class="muted">(${e.place})</span></li>`).join("");
});

// Testimonials carousel (Home)
const TESTIMONIALS = [
  { quote:"My daughter has become a confident problem‑solver.", who:"Parent, Grade 6" },
  { quote:"Projects helped me discover my love for coding!", who:"Student, Junior Secondary" },
  { quote:"Continuous assessment gives us real insight into progress.", who:"Parent, Early Years" }
];

document.addEventListener("DOMContentLoaded", ()=>{
  const wrap = qs("#testimonials");
  if(!wrap) return;
  let idx = 0;
  function render(){
    const t = TESTIMONIALS[idx];
    wrap.innerHTML = `
      <figure class="card soft">
        <blockquote class="quote">${t.quote}</blockquote>
        <figcaption class="muted">— ${t.who}</figcaption>
      </figure>
    `;
  }
  render();
  setInterval(()=>{ idx = (idx+1)%TESTIMONIALS.length; render(); }, 4500);
});

// Gallery populate + lightbox
document.addEventListener("DOMContentLoaded", ()=>{
  const grid = qs("#gallery-grid");
  if(!grid) return;
  const items = Array.from({length:9}, (_,i)=> i+1);
  grid.innerHTML = items.map(i => `
    <figure class="g-item">
      <img src="images/project-${i}.jpg" alt="Student project ${i}" loading="lazy" data-caption="Student project ${i}">
    </figure>`).join("");
  grid.addEventListener("click", (e)=>{
    const img = e.target.closest("img");
    if(!img) return;
    const lb = qs("#lightbox"); const lbImg = qs("#lightbox-img"); const cap = qs("#lightbox-caption");
    lbImg.src = img.src; lbImg.alt = img.alt; cap.textContent = img.dataset.caption || "";
    lb.setAttribute("aria-hidden","false");
  });
  qs(".lightbox-close")?.addEventListener("click", ()=> qs("#lightbox").setAttribute("aria-hidden","true"));
  qs("#lightbox")?.addEventListener("click", (e)=>{ if(e.target.id==="lightbox") e.currentTarget.setAttribute("aria-hidden","true"); });
});

// Admissions form validation (front‑end only demo)
document.addEventListener("DOMContentLoaded", ()=>{
  const f = qs("#admissions-form");
  if(!f) return;
  const status = qs("#admissions-status");
  f.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(!f.reportValidity()){ status.textContent = "Please fill all required fields correctly."; status.style.color="#b91c1c"; return; }
    // Simulate success (replace with fetch to your backend)
    status.textContent = "Thank you! Your application has been received. We’ll contact you shortly.";
    status.style.color = "#065f46";
    f.reset();
  });
});

// Contact form validation (front‑end only demo)
document.addEventListener("DOMContentLoaded", ()=>{
  const f = qs("#contact-form");
  if(!f) return;
  const status = qs("#contact-status");
  f.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(!f.reportValidity()){ status.textContent = "Please complete all fields."; status.style.color="#b91c1c"; return; }
    status.textContent = "Message sent. Asante! We’ll reply via email.";
    status.style.color = "#065f46";
    f.reset();
  });
});


