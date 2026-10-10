(function () {
  'use strict';

  var EMAIL = 'altangerelg888@gmail.com';

  // ---------- translations ----------
  // English lives in index.html; this is the Mongolian set. Keys match data-i18n.
  var MN = {
    'nav.voyage': 'Аялал',
    'nav.crew': 'Баг',
    'nav.log': 'Бүтээлүүд',
    'nav.contact': 'Холбоо барих',

    'hero.eyebrow': 'Програм хангамжийн инженер · Үүсгэн байгуулагч · Улаанбаатар',
    'hero.title': 'Би ганцаараа далайд гарсан.<br><em>Одоо багаа цуглуулж байна.</em>',
    'hero.lead': '11 жилийн турш нэг чат апп хөгжүүлсээр ирлээ: Memo Chat-аас ZagzChat хүртэл. Дараагийн зорилго: үүнийг дэлхий даяар гаргаж, сая сая хүнийг холбох. Надтай хамт аялах хүмүүсээ хайж байна.',
    'hero.join': 'Багт нэгдэх',
    'hero.follow': 'Аяллыг үзэх ↓',
    'hero.name': 'Ганбаатарын Алтангэрэл',

    'stat.years': 'жил нэг зорилгын төлөө: чат апп',
    'stat.mit': 'MIT Global Entrepreneurship Bootcamp, Сөүл 2016-д сонгогдсон',
    'stat.installs': 'суулгалт, Автобусны карт уншигч · 2.6K үнэлгээнээс 4.6★',
    'stat.countries': 'улсад амьдарч, бүтээсэн: Монгол, Герман, АНУ',

    'voyage.eyebrow': 'Өнөөг хүртэлх аялал',
    'voyage.title': 'Арал бүр надад ямар нэг зүйл заасан',

    'c1.where': 'Улаанбаатар · 2015',
    'c1.title': 'Хөлөг онгоц бүтээгдэв',
    'c1.body': 'Memo Chat — миний чат аппын анхны хувилбар: эможи, стикерээр харилцдаг хөгжилтэй мессенжер. Түүнээс хойш хэзээ ч орхиогүй санаа.',
    'c2.where': 'Сөүл · 2016',
    'c2.title': '4,000 гаруйгаас сонгогдов',
    'c2.body': 'Миний чат апп MIT Global Entrepreneurship Bootcamp-д 4,000 гаруй өргөдлөөс сонгогдсон 30 орчим төслийн нэг болсон.',
    'tag.top1': 'Шилдэг 1%',
    'c3.where': 'Улаанбаатар · 2016',
    'c3.title': 'Анхны ялалтууд',
    'c3.body': 'Заалны спорт талбай хайх Zaalandaa апп MIT Global Startup Lab Mongolia-д «Шилдэг бизнес», «Үзэгчдийн сонголт» шагнал хүртсэн.',
    'tag.awards': '2 шагнал',
    'c4.where': 'Монгол · Google Play',
    'c4.title': '50,000 хүн хөлөг дээр',
    'c4.body': 'Автобусны карт уншигч: картаа утсандаа хүргээд үлдэгдлээ шалгана. 50K+ суулгалт, 2.6K үнэлгээнээс 4.6★. Жижиг хэрэгсэл бүхэл бүтэн хотод үйлчилж чадна гэдгийн баталгаа.',
    'c5.where': 'Герман · 2019–2021',
    'c5.title': 'Анхны далайг гатлав',
    'c5.body': 'Fraunhofer IIS, Рентген технологийн хөгжлийн төв: CT хэмжилтийн удирдлагын веб систем бүтээж, хуучин системийг түүнд шилжүүлэн нэгтгэсэн.',
    'c6.where': 'Америкийн Нэгдсэн Улс',
    'c6.title': 'Алс эрэг',
    'c6.body': 'Android хөгжүүлэгч. Оюутнуудад зориулсан менторын платформоос эхлээд цахим худалдаа, үл хөдлөх хөрөнгийн сайт хүртэл гар утас, веб бүтээгдэхүүн гаргасан.',
    'c7.where': 'Улаанбаатар · Одоо',
    'c7.title': 'Эх орондоо, үндэсний дэд бүтэц бүтээж байна',
    'c7.body': 'Монгол Улсын үндэсний FHIR систем дээр бүтэн цагаар ажиллаж байна: HL7 FHIR стандартаар улс орны эрүүл мэндийн мэдээлэл солилцоо. Чөлөөт цагаараа нээлттэй эхийн FHIR хэрэгслүүд болон уламжлалт монгол бичгийг вебэд авчрах react-mongol.',
    'c8.where': 'Дараагийн арал',
    'c8.title': 'ZagzChat: бүтээлч эргэлт',
    'c8.body': 'Чат аппын 3-р хувилбар, хөгжүүлэлт явагдаж байна. Үгнээс илүү чат: зурхайн тохироо, автомат аватар, мөн уран бүтээлчтэй хамт хэлбэржүүлэх бүтээлч чиглэл.',
    'tag.v3': 'v3 · хөгжүүлж байна',
    'c8.link': 'Google Play дээр үзэх →',
    'c9.where': 'Тэнгэрийн хаяа',
    'c9.title': 'Дэлхий даяар. Сая сая хүн.',
    'c9.body': 'Газрын зургийн энэ хэсэг хоосон хэвээр. Үүнийг бид хамтдаа зурна.',

    'code.eyebrow': 'Ахмадын зарчим',
    'code.title': 'Би багаа хэрхэн бүрдүүлдэг вэ',
    'code.sub': 'Би ажилтан хайгаагүй. Өөрийн гэсэн мөрөөдөлтэй хүмүүсийг хайж байна.',
    'code.s1.t': 'Ганцаараа далайд гар',
    'code.s1.b': 'Эхлээд тууштай байдлаа батал. 11 жил, 3 хувилбар, одоо ч бүтээсээр.',
    'code.s2.t': 'Чиний мөрөөдлийн төлөө',
    'code.s2.b': 'Нэгдэхийг санал болгохоосоо өмнө чи юуны төлөө зүтгэж байгааг ойлгож, түүндээ хүрэхэд чинь туслахыг хүсдэг.',
    'code.s3.t': 'Хамтдаа аял',
    'code.s3.b': 'Чиний мөрөөдөл аяллын нэг хэсэг болно. Хөлөг шинэ эрэгт хүрэхэд бид бүгд хамт хүрнэ.',

    'crew.eyebrow': 'Хөлөг дээрх нээлттэй байрууд',
    'crew.title': 'Багийн гишүүн хэрэгтэй',
    'crew.wanted': 'Хэрэгтэй байна',
    'crew.for': 'Юуны төлөө',
    'crew.dream': 'Хэрэв чиний мөрөөдөл',
    'crew.bring': 'Миний санал болгох зүйл',
    'crew.partner': 'Түр ажил биш, түншлэл',
    'crew.answer': 'Дуудлагад хариулах',
    'crew.follow': 'GitHub дээр дагах',
    'crew.art.role': 'Зураач',
    'crew.art.for': 'ZagzChat-д дүр төрх, баатрууд, сэтгэл оруулах.',
    'crew.art.dream': 'зураг чинь сая сая хүний гарт хүрэх',
    'crew.art.bring': 'бүтээгдэхүүн, инженерчлэл, 11 жилийн тууштай байдал',
    'crew.biz.role': 'Бизнесийн түнш',
    'crew.biz.for': 'Аппыг дэлхийд гаргах. Өмнө нь апп олон улсад гаргаж байсан туршлагатай.',
    'crew.biz.dream': 'удаан оршин тогтнох зүйл бүтээх',
    'crew.biz.bring': 'бүтээдэг инженер: гар утас, веб, backend, улсын хэмжээний систем',
    'crew.dev.role': 'Программист, судлаач',
    'crew.dev.for': 'Хэцүү асуудлууд: бодит цагийн чат, AI, монгол бичиг, эрүүл мэндийн өгөгдөл.',
    'crew.dev.dream': 'бүтээл чинь бодит хүмүүст хэрэгтэй байх',
    'crew.dev.bring': 'нээлттэй эхийн төслүүд, бодит хэрэглэгчид',
    'crew.dev.reward': 'GitHub дээр дагахаас эхэл',
    'crew.inv.role': 'Анхны шатны хөрөнгө оруулагч',
    'crew.inv.for': 'Жижиг боомтоос дэлхийн зах зээл хүртэлх аяллыг дэмжих.',
    'crew.inv.dream': 'бууж өгдөггүй үүсгэн байгуулагчийг дэмжих',
    'crew.inv.bring': '11 жилийн тууштай байдал, ажиллаж буй бүтээгдэхүүн',
    'crew.inv.reward': 'Ярилцъя',

    'log.eyebrow': 'Хөлгийн тэмдэглэл',
    'log.title': 'Миний бүтээсэн зүйлс',
    'log.bus': 'Автобусны карт уншигч',
    'log.bus.d': 'Android · 50K+ суулгалт · 4.6★',
    'log.memo.d': 'Чат аппын 1-р хувилбар · Vue.js, Firebase',
    'log.zaal.d': 'Android · MIT GSL Mongolia, 2 шагнал',
    'log.fh.d': 'CT хэмжилтийн систем · Django, Vue.js, VTK.js',
    'log.rm.d': 'React-д зориулсан уламжлалт монгол бичиг · нээлттэй эх',
    'log.fhir': 'Үндэсний FHIR систем',
    'log.fhir.d': 'HL7 FHIR · SUSHI · SQL on FHIR · Synthea',
    'log.amsa.d': 'Оюутан, менторыг холбох платформ · веб',
    'log.homyz.d': 'Үл хөдлөх хөрөнгийн платформ · веб',

    'contact.title': 'Шилэнд захидал хийж илгээ',
    'contact.sub': 'Юу мөрөөдөж байгаагаа надад хэлээрэй. Захидал бүрт хариулна.',
    'footer': '© 2026 Ганбаатарын Алтангэрэл · Улаанбаатар, Монгол'
  };

  var EN = {};
  var nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach(function (el) { EN[el.dataset.i18n] = el.innerHTML; });

  var langBtn = document.getElementById('lang');

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }
  function stored(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  function setLang(lang) {
    var dict = lang === 'mn' ? MN : EN;
    nodes.forEach(function (el) {
      var v = dict[el.dataset.i18n];
      if (v !== undefined) el.innerHTML = v;
    });
    document.documentElement.lang = lang;
    langBtn.textContent = lang === 'mn' ? 'ENG' : 'МОН';
    store('lang', lang);
    layoutRoute();
  }

  langBtn.addEventListener('click', function () {
    setLang(document.documentElement.lang === 'mn' ? 'en' : 'mn');
  });

  // ---------- crew posters open a pre-addressed email ----------
  document.querySelectorAll('.poster[data-role]').forEach(function (poster) {
    var btn = poster.querySelector('.btn:not([href])');
    if (!btn) return;
    var role = poster.dataset.role;
    btn.href = 'mailto:' + EMAIL +
      '?subject=' + encodeURIComponent('Crew: ' + role) +
      '&body=' + encodeURIComponent('Hi Altangerel,\n\nI saw your Crew Wanted poster for "' + role + '".\n\nMy dream is:\n\nWhat I bring:\n\n');
  });

  // ---------- voyage route: winding path through the island markers ----------
  var route = document.getElementById('route');
  var svg = route.querySelector('.route-svg');
  var bg = svg.querySelector('.route-path-bg');
  var line = svg.querySelector('.route-path');
  var ship = svg.querySelector('.ship');
  var chapters = Array.prototype.slice.call(route.querySelectorAll('.chapter'));
  var total = 0;
  var stops = [];

  function layoutRoute() {
    var box = route.getBoundingClientRect();
    svg.setAttribute('viewBox', '0 0 ' + box.width + ' ' + box.height);

    var pts = chapters.map(function (ch) {
      var r = ch.querySelector('.marker').getBoundingClientRect();
      return { x: r.left + r.width / 2 - box.left, y: r.top + r.height / 2 - box.top };
    });
    stops = pts.map(function (p) { return p.y; });

    // Start a little above the first island, then curve smoothly between islands.
    var d = 'M ' + pts[0].x + ' ' + (pts[0].y - 70) + ' L ' + pts[0].x + ' ' + pts[0].y;
    for (var i = 1; i < pts.length; i++) {
      var a = pts[i - 1], b = pts[i], my = (a.y + b.y) / 2;
      d += ' C ' + a.x + ' ' + my + ', ' + b.x + ' ' + my + ', ' + b.x + ' ' + b.y;
    }
    bg.setAttribute('d', d);
    line.setAttribute('d', d);
    total = line.getTotalLength();
    line.style.strokeDasharray = total + ' ' + total;
    onScroll();
  }

  // Path only ever moves downward, so find the length whose y matches the target.
  function lengthAtY(y) {
    var lo = 0, hi = total;
    for (var i = 0; i < 22; i++) {
      var mid = (lo + hi) / 2;
      if (line.getPointAtLength(mid).y < y) lo = mid; else hi = mid;
    }
    return lo;
  }

  var ticking = false;
  function onScroll() {
    if (!total) return;
    var box = route.getBoundingClientRect();
    var target = window.innerHeight * 0.55 - box.top;
    var len = lengthAtY(Math.max(-70, Math.min(target, box.height)));
    var p = line.getPointAtLength(len);
    var q = line.getPointAtLength(Math.min(total, len + 1));
    var heading = Math.atan2(q.y - p.y, q.x - p.x) * 180 / Math.PI - 90;
    line.style.strokeDashoffset = total - len;
    ship.setAttribute('transform', 'translate(' + p.x + ' ' + p.y + ') rotate(' + (heading / 3) + ')');
    chapters.forEach(function (ch, i) { ch.classList.toggle('reached', p.y >= stops[i] - 2); });
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener('resize', layoutRoute);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutRoute);

  // ---------- reveal chapter cards ----------
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    chapters.forEach(function (ch) { io.observe(ch); });
  } else {
    chapters.forEach(function (ch) { ch.classList.add('in'); });
  }

  var saved = stored('lang');
  var initial = saved || ((navigator.language || '').toLowerCase().indexOf('mn') === 0 ? 'mn' : 'en');
  if (initial === 'mn') setLang('mn'); else layoutRoute();
})();
