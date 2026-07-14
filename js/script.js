
/* ─── CURSOR (desktop/mouse only — skipped on touch devices) ─── */
const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
if (!isTouchDevice) {
  const cur = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx=0, my=0, rx=0, ry=0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  (function animCursor() {
    cur.style.transform = `translate(${mx-4}px,${my-4}px)`;
    rx += (mx-rx)*0.1; ry += (my-ry)*0.1;
    ring.style.transform = `translate(${rx-19}px,${ry-19}px)`;
    requestAnimationFrame(animCursor);
  })();
}

/* ─── SCROLL PROGRESS ─── */
const bar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  bar.style.transform = `scaleX(${pct})`;
}, { passive: true });

/* ─── NAVBAR SCROLL ─── */
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ─── REVEAL ON SCROLL ─── */
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => revealObs.observe(el));

/* ─── MOBILE MENU ─── */
const menu = document.getElementById('mobileMenu');
const burger = document.getElementById('hamburger');

function isMobileOpen() {
  return menu.classList.contains('open');
}

function toggleMobile() {
  menu.classList.toggle('open');
  burger.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(isMobileOpen()));
}
function closeMobile() {
  menu.classList.remove('open');
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
}

document.addEventListener('click', e => {
  if (!isMobileOpen()) return;
  if (menu.contains(e.target) || burger.contains(e.target)) return;
  closeMobile();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && isMobileOpen()) closeMobile();
});

/* ─── FULL GALLERY EXPAND ─── */
const fullGalleryBtn = document.getElementById('fullGalleryBtn');
const extraGallery = document.getElementById('extraGallery');

if (fullGalleryBtn && extraGallery) {
  fullGalleryBtn.addEventListener('click', e => {
    e.preventDefault();
    extraGallery.classList.add('open');
    extraGallery.setAttribute('aria-hidden', 'false');
    fullGalleryBtn.remove();

    const navBar = document.getElementById('navbar');
    const navOffset = navBar ? navBar.offsetHeight + 10 : 80;

    requestAnimationFrame(() => {
      const targetTop = extraGallery.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: Math.max(targetTop, 0), behavior: 'smooth' });
    });
  });
}

/* ─── LANGUAGE TOGGLE (EN / ΕΛ) ─── */
const I18N = {
  en: {
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.pricing': 'Services',
    'nav.contact': 'Contact',
    'nav.book': 'Book Now',
    'hero.eyebrow': 'Paxos & Antipaxos, Ionian Sea',
    'hero.title': 'Experience the<br>Magic of Paxos<br><em>with Nautilos.</em>',
    'hero.sub': 'Tours to the Blue Caves, full-island cruises around Paxos and Antipaxos, and transfers across the Ionian — where crystal waters meet timeless elegance.',
    'hero.cta1': 'Reserve Your Day',
    'hero.cta2': 'Discover More',
    'hero.scroll': 'Scroll',
    'about.badge': 'Years of Excellence',
    'about.eyebrow': 'About the Vessel',
    'about.title': 'Where Elegance Meets<br><em>the Open Sea</em>',
    'about.p1': 'The Nautilos is crafted for those who seek the finest experience on the water. A professionally trained crew, comfortable decks, and genuine local hospitality make every trip unforgettable.',
    'about.p2': 'We navigate routes most visitors never discover — the Blue Caves, hidden coves, and the turquoise waters between Paxos and Antipaxos.',
    'about.pill1': 'Premium Comfort',
    'about.pill2': 'Expert Crew',
    'about.pill3': 'Guided Routes',
    'about.ownerLabel': 'The Owner',
    'about.ownerName': 'Tasos Mitsialis',
    'about.ownerDesc': 'Founder of Nautilos — born and raised on these waters.',
    'about.captainLabel': 'Your Captain',
    'about.captainName': 'Alexandros Mitsialis',
    'about.captainDesc': "12+ years of experience navigating the Ionian's hidden coves and coastlines.",
    'about.link': 'Discover all amenities',
    'pricing.eyebrow': 'Tours & Transfers',
    'pricing.title': 'Your Perfect Day at Sea',
    'pricing.badge': 'Daily Charter',
    'pricing.perDay': '/day',
    'pricing.includes': "What's Included",
    'pricing.li1': 'Professional captain & crew',
    'pricing.li2': 'Full day cruise',
    'pricing.li3': 'Swimming stops at Antipaxos',
    'pricing.li4': 'Onboard sound system',
    'pricing.li6': 'Up to 8 guests',
    'pricing.cta': 'Reserve Your Day',
    'services.cruiseTitle': 'Full Island Cruise',
    'services.cruiseDesc': 'A relaxed full-day route around both Paxos and Antipaxos — the Blue Caves, every cove, every beach.',
    'services.transferTitle': 'Transfers',
    'services.transferDesc': 'Corfu, Igoumenitsa, Sivota, Parga — or anywhere else along the coast, on request.',
    'services.enquire': 'Contact us for a quote →',
    'gallery.eyebrow': 'Visual Journey',
    'gallery.title': 'A Glimpse of <em>Paradise</em>',
    'gallery.c1': 'The Vessel',
    'gallery.c2': 'From Above',
    'gallery.c3': 'Nautilos by Night',
    'gallery.c4': 'Blue Caves',
    'gallery.c5': 'Erimitis Beach',
    'gallery.c6': 'Ortholithos at Sunset',
    'gallery.c7': 'The Nautilos',
    'gallery.viewFull': 'View Full Gallery',
    'booking.eyebrow': 'Reserve Your Voyage',
    'booking.title': 'Ready to <em>Set Sail?</em>',
    'booking.sub': 'Contact us via your preferred app, or call directly — including enquiries about island cruises and transfers.',
    'booking.waSub': 'Message us now',
    'booking.vbSub': 'Chat on Viber',
    'booking.callName': 'Call',
    'booking.igSub': 'DM us on Instagram',
    'contact.eyebrow': 'Find Us',
    'contact.title': 'Gaios Port, <em>Paxos</em>',
    'contact.mapLink': 'Open larger map →',
    'contact.addressLabel': 'Departure Point',
    'contact.addressValue': 'Gaios Port, Paxos, Ionian Islands, Greece',
    'contact.hoursLabel': 'Season & Hours',
    'contact.hoursValue': 'May – October · Daily departures 09:00, return 18:00',
    'contact.phoneLabel': 'Phone',
    'testi.eyebrow': 'Guest Stories',
    'testi.title': 'Words from the <em>Open Sea</em>',
    'testi.q1': '"An absolutely magical day. The crew knew every hidden cove and the welcome drinks were a wonderful touch. We\'ll be back every summer."',
    'testi.a1': 'Maria S., Athens',
    'testi.q2': '"Paxos from the sea is a different world entirely. Pristine water, impeccable service, and a sunset that felt painted. Truly unforgettable."',
    'testi.a2': 'James & Clara T., London',
    'footer.desc': 'Boat tours to the Blue Caves, island cruises, and transfers in the Ionian Sea. Gaios, Paxos, Greece. Available May–October.',
    'footer.newsPlaceholder': 'Your email address',
    'footer.newsBtn': 'Coming Soon',
    'footer.newsNote': 'Newsletter launching soon.',
    'footer.quickLinks': 'Quick Links',
    'footer.home': 'Home',
    'footer.follow': 'Follow Us',
    'footer.followDesc': 'Behind-the-scenes moments and exclusive deals.',
    'footer.copyright': '© 2026 Nautilos. All rights reserved.'
  },
  el: {
    'nav.about': 'Σχετικά',
    'nav.gallery': 'Φωτογραφίες',
    'nav.pricing': 'Υπηρεσίες',
    'nav.contact': 'Επικοινωνία',
    'nav.book': 'Κράτηση',
    'hero.eyebrow': 'Παξοί & Αντίπαξοι, Ιόνιο Πέλαγος',
    'hero.title': 'Ζήστε τη<br>Μαγεία των Παξών<br><em>με το Nautilos.</em>',
    'hero.sub': 'Εκδρομές στις Γαλάζιες Σπηλιές, κρουαζιέρες γύρω από Παξούς και Αντίπαξους, και μεταφορές σε όλο το Ιόνιο - εκεί όπου τα κρυστάλλινα νερά συναντούν τη διαχρονική κομψότητα.',
    'hero.cta1': 'Κλείστε τη Μέρα σας',
    'hero.cta2': 'Μάθετε Περισσότερα',
    'hero.scroll': 'Κύλιση',
    'about.badge': 'Χρόνια Εμπειρίας',
    'about.eyebrow': 'Σχετικά με το Σκάφος',
    'about.title': 'Όπου η Κομψότητα Συναντά<br><em>την Ανοιχτή Θάλασσα</em>',
    'about.p1': 'Το Nautilos είναι φτιαγμένο για όσους αναζητούν την καλύτερη εμπειρία στη θάλασσα. Έμπειρο πλήρωμα, άνετα καταστρώματα και γνήσια ντόπια φιλοξενία κάνουν κάθε ταξίδι αξέχαστο.',
    'about.p2': 'Ταξιδεύουμε σε διαδρομές που οι περισσότεροι επισκέπτες δεν ανακαλύπτουν ποτέ - τις Γαλάζιες Σπηλιές, κρυφούς όρμους και τα τιρκουάζ νερά ανάμεσα σε Παξούς και Αντίπαξους.',
    'about.pill1': 'Άνεση & Ποιότητα',
    'about.pill2': 'Έμπειρο Πλήρωμα',
    'about.pill3': 'Ξεναγήσεις',
    'about.ownerLabel': 'Ο Ιδιοκτήτης',
    'about.ownerName': 'Τάσος Μητσιάλης',
    'about.ownerDesc': 'Ιδρυτής του Nautilos - γεννημένος και μεγαλωμένος σε αυτά τα νερά.',
    'about.captainLabel': 'Ο Καπετάνιος',
    'about.captainName': 'Αλέξανδρος Μητσιάλης',
    'about.captainDesc': '12+ χρόνια εμπειρίας στους κρυφούς όρμους και τις ακτές του Ιονίου.',
    'about.link': 'Δείτε όλες τις παροχές',
    'pricing.eyebrow': 'Εκδρομές & Μεταφορές',
    'pricing.title': 'Η Τέλεια Μέρα σας στη Θάλασσα',
    'pricing.badge': 'Ημερήσια Ναύλωση',
    'pricing.perDay': '/ημέρα',
    'pricing.includes': 'Τι Περιλαμβάνεται',
    'pricing.li1': 'Επαγγελματίας καπετάνιος & πλήρωμα',
    'pricing.li2': 'Ολοήμερη κρουαζιέρα',
    'pricing.li3': 'Στάσεις για κολύμπι στους Αντίπαξους',
    'pricing.li4': 'Ηχοσύστημα εν πλω',
    'pricing.li5': 'Ποτά καλωσορίσματος & εξοπλισμός snorkeling',
    'pricing.li6': 'Έως 10 επιβάτες',
    'pricing.cta': 'Κλείστε τη Μέρα σας',
    'services.cruiseTitle': 'Γύρος του Νησιού',
    'services.cruiseDesc': 'Χαλαρή ολοήμερη διαδρομή γύρω από Παξούς και Αντίπαξους — Γαλάζιες Σπηλιές, κάθε όρμος, κάθε παραλία.',
    'services.transferTitle': 'Μεταφορές',
    'services.transferDesc': 'Κέρκυρα, Ηγουμενίτσα, Σύβοτα, Πάργα - ή οπουδήποτε αλλού στις ακτές, κατόπιν συνεννόησης.',
    'services.enquire': 'Επικοινωνήστε για προσφορά →',
    'gallery.eyebrow': 'Οπτικό Ταξίδι',
    'gallery.title': 'Μια Ματιά</em>',
    'gallery.c1': 'Το Σκάφος',
    'gallery.c2': 'Από Ψηλά',
    'gallery.c3': 'Το Nautilos τη Νύχτα',
    'gallery.c4': 'Γαλάζιες Σπηλιές',
    'gallery.c5': 'Παραλία Ερημίτης',
    'gallery.c6': 'Ορθόλιθος στο Ηλιοβασίλεμα',
    'gallery.c7': 'Το Nautilos',
    'gallery.viewFull': 'Δείτε Όλες τις Φωτογραφίες',
    'booking.eyebrow': 'Κλείστε το Ταξίδι σας',
    'booking.title': 'Έτοιμοι να <em>Σαλπάρουμε;</em>',
    'booking.sub': 'Επικοινωνήστε μέσω της εφαρμογής που προτιμάτε ή καλέστε μας - και για κρουαζιέρες και μεταφορές.',
    'booking.waSub': 'Στείλτε μας μήνυμα',
    'booking.vbSub': 'Συνομιλία στο Viber',
    'booking.callName': 'Κλήση',
    'booking.igSub': 'Μήνυμα στο Instagram',
    'booking.location': '<strong>Λιμάνι Γάιου, Παξοί</strong> · Αναχωρήσεις καθημερινά στις 09:00',
    'contact.eyebrow': 'Βρείτε μας',
    'contact.title': 'Λιμάνι Γάιου, <em>Παξοί</em>',
    'contact.mapLink': 'Άνοιγμα μεγαλύτερου χάρτη →',
    'contact.addressLabel': 'Σημείο Αναχώρησης',
    'contact.addressValue': 'Λιμάνι Γάιου, Παξοί, Ιόνια Νησιά',
    'contact.hoursLabel': 'Σεζόν & Ωράριο',
    'contact.hoursValue': 'Μάιος – Οκτώβριος',
    'contact.phoneLabel': 'Τηλέφωνο',
    'testi.eyebrow': 'Εντυπώσεις Επισκεπτών',
    'testi.title': 'Λόγια από την <em>Ανοιχτή Θάλασσα</em>',
    'testi.q1': '«Μια πραγματικά μαγική μέρα. Το πλήρωμα ήξερε κάθε κρυφό όρμο και τα ποτά καλωσορίσματος ήταν υπέροχη λεπτομέρεια. Θα ερχόμαστε κάθε καλοκαίρι.»',
    'testi.a1': 'Μαρία Σ., Αθήνα',
    'testi.q2': '«Οι Παξοί από τη θάλασσα είναι ένας εντελώς διαφορετικός κόσμος. Πεντακάθαρα νερά, άψογη εξυπηρέτηση και ένα ηλιοβασίλεμα σαν πίνακας ζωγραφικής.»',
    'testi.a2': 'James & Clara T., Λονδίνο',
    'footer.desc': 'Εκδρομές στις Γαλάζιες Σπηλιές, κρουαζιέρες και μεταφορές στο Ιόνιο. Γάιος, Παξοί. Διαθέσιμο Μάιο–Οκτώβριο.',
    'footer.newsPlaceholder': 'Η διεύθυνση email σας',
    'footer.newsBtn': 'Έρχεται Σύντομα',
    'footer.newsNote': 'Το newsletter έρχεται σύντομα.',
    'footer.quickLinks': 'Γρήγοροι Σύνδεσμοι',
    'footer.home': 'Αρχική',
    'footer.follow': 'Ακολουθήστε μας',
    'footer.followDesc': 'Στιγμές από τα παρασκήνια και αποκλειστικές προσφορές.',
    'footer.copyright': '© 2026 Nautilos. Με επιφύλαξη παντός δικαιώματος.'
  }
};

let currentLang = 'en';
try {
  const saved = localStorage.getItem('nautilos-lang');
  if (saved === 'el' || saved === 'en') currentLang = saved;
} catch (e) { /* private browsing — default to en */ }

function applyLang(lang) {
  const dict = I18N[lang];
  if (!dict) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
  // Toggle button shows the language you'd switch TO
  document.querySelectorAll('[data-lang-label]').forEach(el => {
    el.textContent = lang === 'en' ? 'ΕΛ' : 'EN';
  });
  try { localStorage.setItem('nautilos-lang', lang); } catch (e) { /* ignore */ }
}

function toggleLang() {
  applyLang(currentLang === 'en' ? 'el' : 'en');
}

// Apply saved language on load (skip if default English, HTML is already English)
if (currentLang !== 'en') applyLang(currentLang);
else document.querySelectorAll('[data-lang-label]').forEach(el => { el.textContent = 'ΕΛ'; });
