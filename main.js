// ---- Utilities ----
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

function setToast(msg){
  const t = $("#toast");
  if(!t) return;
  t.textContent = msg;
  t.style.display = "block";
  clearTimeout(setToast._timer);
  setToast._timer = setTimeout(()=>{ t.style.display="none"; }, 1800);
}

// ---- Year ----
$("#year")?.append(new Date().getFullYear());

// ---- Mobile menu ----
const menuBtn = $("#menuBtn");
const mobileNav = $("#mobileNav");
menuBtn?.addEventListener("click", ()=>{
  mobileNav?.classList.toggle("show");
  const shown = mobileNav?.classList.contains("show");
  mobileNav?.setAttribute("aria-hidden", shown ? "false" : "true");
});
$$('#mobileNav a').forEach(a=>{
  a.addEventListener('click', ()=>{
    mobileNav?.classList.remove("show");
    mobileNav?.setAttribute("aria-hidden","true");
  });
});

// ---- Active nav (E for multi-page) ----
(function setActiveNav(){
  const page = document.documentElement.getAttribute("data-page"); // home/profile/education/skills/social
  if(!page) return;
  $$("[data-nav]").forEach(a=>{
    a.classList.toggle("active", a.getAttribute("data-nav") === page);
  });
})();

// ---- Theme toggle (A) ----
const themeBtn = $("#themeBtn");
const themeIcon = $("#themeIcon");
const root = document.documentElement;

function applyTheme(theme){
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  if(themeIcon) themeIcon.textContent = (theme === "dark") ? "🌙" : "☀️";
}
applyTheme(localStorage.getItem("theme") || "dark");
themeBtn?.addEventListener("click", ()=>{
  const current = root.getAttribute("data-theme") || "dark";
  applyTheme(current === "dark" ? "light" : "dark");
});

// ---- Language toggle (D) ----
const langBtn = $("#langBtn");
const langLabel = $("#langLabel");

const i18n = {
  fi: {
    "ui.theme":"Teema",
    "ui.role":"Lukio-opiskelija",
    "ui.school":"Koulu",
    "ui.born":"Synt.",
    "ui.customer":"Asiakaspalvelu",

    "home.pill":"Yksinkertainen • Tyylikäs • FI/EN",
    "home.hello":"Hei, minä olen",
    "home.sub":"Lukio-opiskelija Loimaalta. Tämä on henkilökohtainen sivustoni — jaettu selkeisiin sivuihin.",
    "home.cta1":"Aloita profiilista",
    "home.cta2":"Ota yhteyttä",
    "home.cards.loc":"Sijainti",
    "home.cards.study":"Opiskelu",
    "home.cards.focus":"Painotus",
    "home.cards.focusText":"Kielet + STEM",
    "home.featuresTitle":"Toiminnot",
    "home.f1":"Teeman vaihto (tumma/vaalea)",
    "home.f2":"Kielen vaihto (FI/EN)",
    "home.f3":"Nykyinen sivu korostuu valikossa",
    "home.f4":"Sähköpostin kopiointi yhdellä klikkauksella",
    "home.next":"Seuraavaksi: Henkilötiedot →",

    "profile.title":"Henkilötiedot",
    "profile.desc":"Selkeä perusprofiili — vain olennaiset tiedot.",
    "profile.card1":"Perustiedot",
    "profile.k.name":"Nimi",
    "profile.k.loc":"Sijainti",
    "profile.k.role":"Rooli",
    "profile.k.bday":"Syntymäaika",
    "profile.card2":"Lyhyt esittely",
    "profile.bio":"Opiskelen lukiossa ja olen kiinnostunut erityisesti matematiikasta, luonnontieteistä ja ohjelmoinnista. Haluan rakentaa selkeän, luotettavan ja modernin verkkoidentiteetin.",

    "education.title":"Koulutus",
    "education.desc":"Nykyinen opiskelu ja suuntautuminen.",
    "education.body":"Suuntautuminen: pitkä matematiikka, fysiikka, kemia ja biologia. Rakennan osaamista sekä kielissä että teknisissä taidoissa.",
    "education.modulesTitle":"Keskeiset aineet",
    "edu.subj.math":"Pitkä matematiikka",
    "edu.subj.phy":"Fysiikka",
    "edu.subj.chem":"Kemia",
    "edu.subj.bio":"Biologia",

    "skills.title":"Taidot",
    "skills.desc":"Kielitaito korostettuna + suodatus ja haku.",
    "skills.filter.all":"Kaikki",
    "skills.filter.lang":"Kielet",
    "skills.filter.tech":"Tekninen",
    "skills.filter.soft":"Muut",
    "skills.langTitle":"Kielitaito",
    "skills.otherTitle":"Muut taidot",
    "skills.lang.fi":"Lähes äidinkieli",
    "skills.lang.zh":"Äidinkieli",
    "skills.soft.problem":"Ongelmanratkaisu",
    "skills.soft.learn":"Nopea oppiminen",
    "skills.note":"Vinkki: käytä hakua tai suodatinta löytääksesi taitoja nopeasti.",

    "social.title":"Sosiaalinen kortti",
    "social.desc":"Yhteystiedot ja nopea kopiointi.",
    "social.card.title":"Yhteys",
    "social.card.body":"Voit ottaa yhteyttä sähköpostilla. Nappi kopioi osoitteen leikepöydälle.",
    "social.copy":"Kopioi",
    "social.quick.title":"Nopea yhteenveto",
    "social.quick.lang":"Kielet",
    "social.quick.focus":"Fokus",
    "social.quick.focusV":"Opiskelu + osaamisen kehitys",
    "social.quick.site":"Sivuston tarkoitus",
    "social.quick.siteV":"Henkilökohtainen esittely",
    "social.footer":"Päivitä sisältöä helposti: muokkaa tekstejä HTML-tiedostoissa ja pushaa GitHubiin.",

    "nav.nextEdu":"Seuraavaksi: Koulutus →",
    "nav.nextSkills":"Seuraavaksi: Taidot →",
    "nav.nextSocial":"Seuraavaksi: Sosiaalinen →",
    "nav.backHome":"← Takaisin etusivulle"
  },

  en: {
    "ui.theme":"Theme",
    "ui.role":"High school student",
    "ui.school":"School",
    "ui.born":"Born",
    "ui.customer":"Customer service",

    "home.pill":"Minimal • Premium • FI/EN",
    "home.hello":"Hi, I’m",
    "home.sub":"A high school student in Loimaa. This is my personal site — split into clear pages.",
    "home.cta1":"Start with profile",
    "home.cta2":"Contact",
    "home.cards.loc":"Location",
    "home.cards.study":"Education",
    "home.cards.focus":"Focus",
    "home.cards.focusText":"Languages + STEM",
    "home.featuresTitle":"Features",
    "home.f1":"Theme toggle (dark/light)",
    "home.f2":"Language toggle (FI/EN)",
    "home.f3":"Active page highlighted in navigation",
    "home.f4":"One-click email copy",
    "home.next":"Next: Personal info →",

    "profile.title":"Personal info",
    "profile.desc":"Clean essentials — only what matters.",
    "profile.card1":"Basics",
    "profile.k.name":"Name",
    "profile.k.loc":"Location",
    "profile.k.role":"Role",
    "profile.k.bday":"Birthday",
    "profile.card2":"Short bio",
    "profile.bio":"I’m a high school student interested in mathematics, science, and programming. I’m building a clean, reliable, and modern online profile.",

    "education.title":"Education",
    "education.desc":"Current studies and direction.",
    "education.body":"Focus: advanced mathematics, physics, chemistry, and biology. I’m developing both language and technical skills.",
    "education.modulesTitle":"Key subjects",
    "edu.subj.math":"Advanced mathematics",
    "edu.subj.phy":"Physics",
    "edu.subj.chem":"Chemistry",
    "edu.subj.bio":"Biology",

    "skills.title":"Skills",
    "skills.desc":"Highlighted languages + search and filters.",
    "skills.filter.all":"All",
    "skills.filter.lang":"Languages",
    "skills.filter.tech":"Technical",
    "skills.filter.soft":"Other",
    "skills.langTitle":"Languages",
    "skills.otherTitle":"Other skills",
    "skills.lang.fi":"Near-native",
    "skills.lang.zh":"Native",
    "skills.soft.problem":"Problem solving",
    "skills.soft.learn":"Fast learner",
    "skills.note":"Tip: use search or filters to quickly find skills.",

    "social.title":"Social card",
    "social.desc":"Contact info and quick copy.",
    "social.card.title":"Contact",
    "social.card.body":"You can reach me by email. The button copies the address to your clipboard.",
    "social.copy":"Copy",
    "social.quick.title":"Quick summary",
    "social.quick.lang":"Languages",
    "social.quick.focus":"Focus",
    "social.quick.focusV":"Study + skill building",
    "social.quick.site":"Purpose",
    "social.quick.siteV":"Personal introduction",
    "social.footer":"Easy updates: edit text in the HTML files and push to GitHub.",

    "nav.nextEdu":"Next: Education →",
    "nav.nextSkills":"Next: Skills →",
    "nav.nextSocial":"Next: Social →",
    "nav.backHome":"← Back to home"
  }
};

let currentLang = localStorage.getItem("lang") || "fi";

function applyLang(lang){
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = (lang === "fi") ? "fi" : "en";
  if(langLabel) langLabel.textContent = (lang === "fi") ? "FI" : "EN";

  $$("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const val = i18n[lang]?.[key];
    if(typeof val === "string") el.textContent = val;
  });

  const search = $("#skillSearch");
  if(search){
    search.placeholder = (lang === "fi")
      ? "Hae taitoja… (esim. Python, kieli)"
      : "Search skills… (e.g. Python, language)";
  }
}
applyLang(currentLang);

langBtn?.addEventListener("click", ()=>{
  applyLang(currentLang === "fi" ? "en" : "fi");
});

// ---- Copy email ----
$("#copyEmailBtn")?.addEventListener("click", async (e)=>{
  const email = e.currentTarget.getAttribute("data-copy");
  try{
    await navigator.clipboard.writeText(email);
    setToast(currentLang === "fi" ? "Sähköposti kopioitu ✅" : "Email copied ✅");
  }catch{
    const tmp = document.createElement("textarea");
    tmp.value = email;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);
    setToast(currentLang === "fi" ? "Kopioitu ✅" : "Copied ✅");
  }
});

// ---- Skills: search + filter (only runs on skills.html) ----
let currentFilter = "all";
const filterBtns = $$(".chipBtn");

function matchesFilter(el){
  const group = el.getAttribute("data-group") || "";
  if(currentFilter === "all") return true;
  return group === currentFilter;
}
function matchesSearch(el, q){
  if(!q) return true;
  const hay = (el.getAttribute("data-skill") || el.textContent || "").toLowerCase();
  return hay.includes(q);
}
function updateSkills(){
  const q = ($("#skillSearch")?.value || "").trim().toLowerCase();
  $$("#tagCloud [data-skill]").forEach(el=>{
    const show = matchesFilter(el) && matchesSearch(el, q);
    el.style.display = show ? "inline-block" : "none";
  });
  $$("#langList .langItem").forEach(el=>{
    const show = matchesFilter(el) && matchesSearch(el, q);
    el.style.display = show ? "block" : "none";
  });
}
if(filterBtns.length){
  filterBtns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      filterBtns.forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      updateSkills();
    });
  });
  $("#skillSearch")?.addEventListener("input", updateSkills);
  updateSkills();
}
