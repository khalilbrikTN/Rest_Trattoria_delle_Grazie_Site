'use strict';



/**
 * I18N
 *
 * Italian is the default language and lives directly in the HTML.
 * English strings are below. Elements are marked with:
 *   data-i18n="key"                    -> replaces innerHTML
 *   data-i18n-attr="attr:key;attr:key" -> replaces attributes
 */

const translations = {
  en: {
    "meta.title": "Trattoria delle Grazie – Ligurian cooking in the heart of old Genoa",
    "meta.description": "Trattoria and wine bar in the atrium of a restored patrician palace, in the old town alleys of Genoa. Mandilli al pesto, pansoti with walnut sauce, cappon magro. Booking recommended.",

    "topbar.hours": "12:30–16:00 · 19:30–23:30 · Closed Wednesdays",

    "nav.open": "open menu",
    "nav.close": "close menu",
    "nav.home": "Home",
    "lang.label": "Language",
    "nav.menu": "Menu",
    "nav.about": "About",
    "nav.book": "Book",
    "nav.contact": "Contact",
    "nav.visit": "Visit Us",
    "nav.hours": "12:30–16:00 · 19:30–23:30<br>Closed Wednesdays",

    "common.bookTable": "Book a Table",
    "common.viewMenu": "See the Menu",
    "common.bookingLabel": "Reservations",
    "common.backTop": "back to top",

    "hero.s1.subtitle": "In the heart of the old town",
    "hero.s1.title": "Genoese cooking <br> with an old soul",
    "hero.s1.text": "Authentic Ligurian dishes in the atrium of a restored patrician palace",
    "hero.s2.subtitle": "Made in house",
    "hero.s2.title": "Mandilli al pesto, <br> the way it was",
    "hero.s2.text": "Pasta, desserts, bread and focaccia: all made in house",
    "hero.s3.subtitle": "Trattoria &amp; wine bar",
    "hero.s3.title": "Beneath ancient <br> brick arches",
    "hero.s3.text": "A romantic dinner or a lively evening at the big bar counter",
    "hero.prev": "previous slide",
    "hero.next": "next slide",

    "service.subtitle": "Lunch, dinner and wine",
    "service.title": "Our Table",
    "service.text": "Two sittings at lunch and two at dinner, every day except Wednesday. And in between, a glass at the wine bar counter.",
    "service.lunch": "Lunch",
    "service.dinner": "Dinner",
    "service.wineHours": "At the counter",
    "service.wine": "Wine bar",

    "about.subtitle": "Our Home",
    "about.title": "A patrician palace in the old town alleys",
    "about.text": "In the heart of Genoa's historic centre, a short walk from the Old Port, Trattoria delle Grazie lives in the atrium of an old patrician palace. The restoration brought back its original charm: brick arches, simple tables and cooking that speaks Ligurian. It's the right place for a romantic dinner as much as a lively evening at the big wine bar counter.",
    "about.callLabel": "Book by phone",
    "about.badge": "Travellers'<br>Choice",

    "dish.subtitle": "House Speciality",
    "dish.text": "Silk-thin \"handkerchiefs\" of pasta with our house-made Genoese pesto. Many of our guests call it one of the best pestos in Genoa: come and judge for yourself.",

    "menu.subtitle": "Ligurian Classics",
    "menu.title": "Our Menu",
    "menu.badge.veg": "Vegetarian",
    "menu.badge.tradition": "Tradition",
    "menu.course.antipasto": "Starter",
    "menu.course.primo": "First course",
    "menu.course.secondo": "Main",
    "menu.pansoti": "Pasta filled with wild greens and cheese, dressed in the traditional walnut sauce.",
    "menu.cappon": "The grand Ligurian salad of seafood and vegetables. Bold, and not for timid palates.",
    "menu.acciughe": "Local anchovies, stuffed and fried.",
    "menu.gnocchi": "Hand-made potato gnocchi with our Genoese pesto.",
    "menu.coniglio": "Rabbit stewed the Ligurian way.",
    "menu.brasato": "Beef slow-braised in Nebbiolo wine, served with mashed potatoes.",
    "menu.note": "Plus minestrone, stockfish, salt-cod fritters, panna cotta and tiramisù.<br>Vegetarian and some gluten-free options: just ask our staff.",

    "testi.text": "Ancient brick arches, spotless cleanliness, generous portions and bold flavours. Excellent service despite the full house.",
    "testi.source": "TripAdvisor review · 5/5",

    "res.title": "Book a Table",
    "res.text": "Call us on <a href=\"tel:+390108698240\" class=\"link\">+39 010 869 8240</a> or fill in the form. We serve in two sittings, so booking is recommended.",
    "res.name": "Name",
    "res.phone": "Phone",
    "res.guests": "Guests",
    "res.g1": "1 guest",
    "res.g2": "2 guests",
    "res.g3": "3 guests",
    "res.g4": "4 guests",
    "res.g5": "5 guests",
    "res.g6": "6 guests",
    "res.g7": "7 guests",
    "res.g8": "8 or more",
    "res.date": "Date",
    "res.sitting": "Sitting",
    "res.s1": "Lunch · 12:30",
    "res.s2": "Lunch · 14:00",
    "res.s3": "Dinner · 19:30",
    "res.s4": "Dinner · 21:30",
    "res.message": "Notes (allergies, high chair, special occasions…)",
    "res.submit": "Send Request",
    "res.note": "Your booking is confirmed only once we reply.",
    "res.closedDay": "We're closed on Wednesdays. Please choose another day.",
    "res.mailSubject": "Table request",
    "res.contactTitle": "Contact",
    "res.location": "Find Us",
    "res.lunchHours": "Every day except Wednesday <br> 12:30 – 16:00",
    "res.dinnerHours": "Every day except Wednesday <br> 19:30 – 23:30",

    "features.subtitle": "Why Choose Us",
    "features.title": "Our Character",
    "features.awardTitle": "Travellers' Choice 2026",
    "features.award": "TripAdvisor award: 4.5/5 from over 1,200 reviews.",
    "features.homemadeTitle": "Made in House",
    "features.homemade": "Pasta, desserts, bread and focaccia: all made in house.",
    "features.dietTitle": "Something for Everyone",
    "features.diet": "Vegetarian options and some gluten-free dishes.",
    "features.accessTitle": "Accessible",
    "features.access": "Wheelchair access and high chairs for little ones.",

    "info.subtitle": "Before You Come",
    "info.title": "Good to Know",
    "info.c1.label": "Two sittings",
    "info.c1.title": "Lunch at 12:30 or 14:00, dinner at 19:30 or 21:30.",
    "info.c2.label": "Reservations",
    "info.c2.title": "We're almost always full, so book ahead.",
    "info.c3.label": "Payments &amp; amenities",
    "info.c3.title": "Visa, Mastercard and American Express. Free Wi-Fi.",
    "info.call": "Call Us",

    "footer.hours": "12:30–16:00 · 19:30–23:30 · Closed Wednesdays",
    "footer.findTitle": "Getting Here",
    "footer.findText": "In the historic centre, a few steps from the <span class=\"span\">Old Port</span>.",
    "footer.directions": "Get Directions",
    "footer.phone": "Phone",
    "footer.email": "Email us",
    "footer.template": "Template by",

    "alt.lunch": "Pasta with pesto and pansoti with walnut sauce",
    "alt.wine": "Marinated anchovies and a glass of white wine",
    "alt.sign": "The Trattoria delle Grazie sign in the alley",
    "alt.basil": "A bunch of fresh basil for the pesto",
    "alt.board": "The chalkboard with the sitting times",
    "alt.room": "The trattoria dining room",
    "alt.dessert": "Panna cotta served in the dining room"
  },

  // strings only needed by JS (Italian ones that don't exist in the HTML)
  it: {
    "res.closedDay": "Il mercoledì siamo chiusi: scegli un altro giorno.",
    "res.mailSubject": "Richiesta di prenotazione"
  }
};

const LANG_KEY = "lang";
const defaultLang = "it";

const i18nTextEls = document.querySelectorAll("[data-i18n]");
const i18nAttrEls = document.querySelectorAll("[data-i18n-attr]");
const langBtns = document.querySelectorAll("[data-lang-btn]");

/**
 * remember the original (italian) values so we can switch back
 */

for (let i = 0, len = i18nTextEls.length; i < len; i++) {
  i18nTextEls[i].dataset.i18nIt = i18nTextEls[i].innerHTML;
}

const parseAttrList = function (value) {
  return value.split(";").map(function (pair) {
    const [attr, key] = pair.split(":");
    return { attr: attr.trim(), key: key.trim() };
  });
}

for (let i = 0, len = i18nAttrEls.length; i < len; i++) {
  const el = i18nAttrEls[i];
  parseAttrList(el.dataset.i18nAttr).forEach(function ({ attr, key }) {
    translations.it[key] = translations.it[key] ?? el.getAttribute(attr);
  });
}

let currentLang = defaultLang;

const t = function (key) {
  return translations[currentLang][key] ?? translations.it[key] ?? key;
}

const setLanguage = function (lang) {
  if (!translations[lang]) lang = defaultLang;
  currentLang = lang;

  document.documentElement.lang = lang;

  for (let i = 0, len = i18nTextEls.length; i < len; i++) {
    const el = i18nTextEls[i];
    const value = lang === defaultLang ? el.dataset.i18nIt : translations[lang][el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  }

  for (let i = 0, len = i18nAttrEls.length; i < len; i++) {
    const el = i18nAttrEls[i];
    parseAttrList(el.dataset.i18nAttr).forEach(function ({ attr, key }) {
      el.setAttribute(attr, t(key));
    });
  }

  for (let i = 0, len = langBtns.length; i < len; i++) {
    const isActive = langBtns[i].dataset.langBtn === lang;
    langBtns[i].classList.toggle("active", isActive);
    langBtns[i].setAttribute("aria-pressed", isActive);
  }

}

/**
 * the language lives only in the url (?lang=en), so italian is always
 * the default, and reloads or shared links keep the chosen language
 */

const updateUrl = function (lang) {
  const url = new URL(window.location.href);
  if (lang === defaultLang) url.searchParams.delete("lang");
  else url.searchParams.set("lang", lang);
  history.replaceState(null, "", url);
}

for (let i = 0, len = langBtns.length; i < len; i++) {
  langBtns[i].addEventListener("click", function () {
    setLanguage(this.dataset.langBtn);
    updateUrl(currentLang);
  });
}

// clear choices saved by earlier versions of this script
try { localStorage.removeItem(LANG_KEY); sessionStorage.removeItem(LANG_KEY); } catch (e) { }

setLanguage(new URLSearchParams(window.location.search).get("lang") || defaultLang);

window.i18n = { t, setLanguage, get lang() { return currentLang; } };
