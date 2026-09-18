/* ============================================================
   LOS CHINITOS — site language (de / en / es-MX)
   Markup carries German as the source text; elements opt in with
   data-i18n (textContent), data-i18n-html (innerHTML) or
   data-i18n-<attr>. main.js reads runtime strings via LC_I18N.t().
   ============================================================ */
(function () {
  'use strict';

  var DICT = {
    de: {
      'nav.story': 'Unsere Story',
      'nav.products': 'Produkte',
      'nav.events': 'Events',
      'nav.cta': 'Anfragen',
      'nav.menuOpen': 'Menü öffnen',
      'nav.toTop': 'Los Chinitos — nach oben',
      'nav.backHome': 'Zurück zur Startseite',
      'nav.mobile': 'Mobile Navigation',
      'lang.label': 'Sprache',

      'hero.text': 'Platzhalter: ein bis zwei Sätze Positionierung — CDMX-Taquería, Trompo, kein Tex-Mex. Ton: knapp, direkt, ohne Folklore.',
      'hero.ctaCatering': 'Catering anfragen',
      'hero.ctaEvent': 'Nächstes Event',

      'story.leftH': 'Es fing nicht mit einem Businessplan an',
      'story.leftP': 'Angefangen hat alles in der Hauptstadt Mexikos, Ciudad de México. An einem Montagmittag im Mercado de La Merced. Mit je drei Tacos al Pastor. Schon der erste Biss hat uns so überzeugt, dass wir ihn unbedingt mit euch teilen wollten.',
      'story.rightH': 'In dieser Stadt nannten sie uns <span class="quoted">CHINITOS</span>',
      'story.rightP1': 'Personen mit ostasiatischen Zügen werden von Mexikanern oft scherzhaft „Chinitos“ genannt. Das ist nicht als Front, sondern vielmehr als Neckerei gedacht, quasi ein Zeichen der Zugehörigkeit. Aus Chinito wurde „compa“ und aus „compa“ wurde „hermano“.',
      'story.rightP2': 'Auf unseren Reisen durch Mexiko haben wir nicht nur mega viel über Tacos gelernt, sondern wurden immer herzlich empfangen, das uns bis heute positiv geprägt hat. Genau diese Herzlichkeit möchten wir euch in Form unserer Tacos weitergeben.',
      'story.imgAlt': 'We are Los Chinitos — die drei Gründer',

      'products.h': 'Was wir<br />kochen',
      'products.p': 'Fließtext-Platzhalter, ca. 40–60 Wörter. Hier steht später, wie gearbeitet wird: Trompo, Tortillas, Salsas, kurze Karte. Kein Marketing-Sprech, sondern konkret — Herkunft, Handwerk, warum es anders schmeckt als das, was man hier kennt.',
      'products.galleryAria': 'Unsere Karte',

      'events.h': 'Wo wir als<br />nächstes<br />stehen',
      'events.p': 'Kurzer Hinweis-Platzhalter: Termine kommen zuerst auf Instagram.',
      'events.follow': '@tacosloschinitos folgen',
      'events.loc': 'Ort – Platzhalter',
      'events.time1': 'TT.MM. · 17–22 Uhr',
      'events.time2': 'TT.MM. · 12–18 Uhr',
      'events.details': 'Details',
      'events.caption': '05 / Event-Modul — 3 Einträge, danach Archiv',

      'inquiry.h': 'Catering<br />anfragen',
      'inquiry.p': 'Platzhalter: Firmenfeier, Hochzeit, Geburtstag. Ab X Personen, Umkreis Y km. Antwort in 48 Stunden.',
      'form.name': 'Name *',
      'form.namePh': 'Dein Name',
      'form.nameErr': 'Bitte gib deinen Namen an.',
      'form.occasion': 'Anlass',
      'form.select': 'Bitte wählen',
      'form.optCompany': 'Firmenfeier',
      'form.optWedding': 'Hochzeit',
      'form.optBirthday': 'Geburtstag',
      'form.optOther': 'Sonstiges',
      'form.date': 'Datum *',
      'form.dateErr': 'Bitte wähle ein Datum.',
      'form.guests': 'Personenzahl *',
      'form.guestsPh': 'z. B. 60',
      'form.guestsErr': 'Bitte gib die Personenzahl an.',
      'form.message': 'Nachricht *',
      'form.messagePh': 'Deine Nachricht',
      'form.messageErr': 'Bitte schreib uns kurz, worum es geht.',
      'form.summary': 'Bitte fülle die markierten Felder aus.',
      'form.submit': 'Absenden',
      'form.sending': 'Wird gesendet…',
      'form.sent': 'Abgesendet',
      'form.errorHtml': 'Ups, das hat nicht geklappt. Schreib uns direkt an <a href="mailto:info@loschinitos.de">info@loschinitos.de</a>.',

      'faq.h': 'Fragen? Antworten.',
      'faq.q1': 'Für welche Anlässe könnt ihr gebucht werden?',
      'faq.a1': 'Firmenfeiern, Hochzeiten, Geburtstage, Festivals und private Feiern — von klein bis groß. Erzähl uns einfach, was du planst.',
      'faq.q2': 'Ab wie vielen Personen ist Catering möglich?',
      'faq.a2': 'Platzhalter: ab X Personen. Bei kleineren Gruppen frag trotzdem gern an — oft finden wir eine Lösung.',
      'faq.q3': 'In welchem Umkreis seid ihr unterwegs?',
      'faq.a3': 'Platzhalter: Düsseldorf und Umkreis von Y km. Weitere Strecken auf Anfrage.',
      'faq.q4': 'Was braucht ihr vor Ort?',
      'faq.a4': 'Eine ebene Stellfläche für unseren Stand, einen Stromanschluss und Zugang für die Anlieferung. Die genauen Maße klären wir vorab mit dir.',
      'faq.q5': 'Gibt es vegetarische Optionen?',
      'faq.a5': 'Ja — zum Beispiel Hongos al Ajillo und Quesadillas. Sag uns bei der Anfrage, wie viele Gäste vegetarisch essen.',
      'faq.q6': 'Wie läuft eine Anfrage ab?',
      'faq.a6': 'Formular ausfüllen — wir melden uns mit Rückfragen und einem Angebot. Wenn alles passt, bestätigen wir den Termin schriftlich.',

      'social.h': 'Aus unseren<br />socials',
      'social.p': 'Platzhalter für Instagram- und TikTok-Material: Trompo, Gäste, Standorte. Wird später mit echten Feed-Bildern gefüllt.',

      'footer.imprint': 'Impressum',
      'footer.privacy': 'Datenschutz',
      'footer.cta': 'Catering anfragen →',
      'footer.emailCopied': 'E-Mail-Adresse kopiert',

      'thanks.title': 'Danke — Los Chinitos',
      'thanks.p': 'Deine Anfrage ist bei uns angekommen. Wir melden uns so schnell wie möglich bei dir zurück.',
      'thanks.back': 'Zurück zur Startseite →',
      'legal.back': '← Zurück'
    },

    en: {
      'nav.story': 'Our story',
      'nav.products': 'Menu',
      'nav.events': 'Events',
      'nav.cta': 'Enquire',
      'nav.menuOpen': 'Open menu',
      'nav.toTop': 'Los Chinitos — back to top',
      'nav.backHome': 'Back to the homepage',
      'nav.mobile': 'Mobile navigation',
      'lang.label': 'Language',

      'hero.text': 'Placeholder: one or two sentences of positioning — CDMX-style taquería, trompo, no Tex-Mex. Tone: short, direct, no folklore.',
      'hero.ctaCatering': 'Enquire about catering',
      'hero.ctaEvent': 'Next event',

      'story.leftH': 'It didn’t start with a business plan',
      'story.leftP': 'It all began in Mexico’s capital, Ciudad de México. On a Monday lunchtime at the Mercado de La Merced. With three tacos al pastor each. The very first bite won us over so completely that we knew we had to share it with you.',
      'story.rightH': 'In this city they called us <span class="quoted">CHINITOS</span>',
      'story.rightP1': 'In Mexico, people with East Asian features are often jokingly called “chinitos”. It isn’t meant as an insult but as friendly teasing — almost a sign of belonging. Chinito became “compa”, and “compa” became “hermano”.',
      'story.rightP2': 'Travelling through Mexico we didn’t just learn a huge amount about tacos — we were welcomed with open arms everywhere we went, and that has shaped us to this day. It’s exactly this warmth we want to pass on to you, in the form of our tacos.',
      'story.imgAlt': 'We are Los Chinitos — the three founders',

      'products.h': 'What we<br />cook',
      'products.p': 'Body-copy placeholder, approx. 40–60 words. This is where we’ll explain how we work: trompo, tortillas, salsas, a short menu. No marketing speak — just the specifics: origin, craft, and why it tastes different from what people know here.',
      'products.galleryAria': 'Our menu',

      'events.h': 'Where you’ll<br />find us<br />next',
      'events.p': 'Short note placeholder: dates are announced on Instagram first.',
      'events.follow': 'Follow @tacosloschinitos',
      'events.loc': 'Venue – placeholder',
      'events.time1': 'DD.MM. · 5–10 pm',
      'events.time2': 'DD.MM. · 12–6 pm',
      'events.details': 'Details',
      'events.caption': '05 / Event module — 3 entries, then archive',

      'inquiry.h': 'Catering<br />enquiries',
      'inquiry.p': 'Placeholder: company parties, weddings, birthdays. From X guests, within Y km. Reply within 48 hours.',
      'form.name': 'Name *',
      'form.namePh': 'Your name',
      'form.nameErr': 'Please enter your name.',
      'form.occasion': 'Occasion',
      'form.select': 'Please select',
      'form.optCompany': 'Company party',
      'form.optWedding': 'Wedding',
      'form.optBirthday': 'Birthday',
      'form.optOther': 'Other',
      'form.date': 'Date *',
      'form.dateErr': 'Please choose a date.',
      'form.guests': 'Number of guests *',
      'form.guestsPh': 'e.g. 60',
      'form.guestsErr': 'Please enter the number of guests.',
      'form.message': 'Message *',
      'form.messagePh': 'Your message',
      'form.messageErr': 'Please tell us briefly what it’s about.',
      'form.summary': 'Please fill in the highlighted fields.',
      'form.submit': 'Send',
      'form.sending': 'Sending…',
      'form.sent': 'Sent',
      'form.errorHtml': 'Oops, that didn’t work. Email us directly at <a href="mailto:info@loschinitos.de">info@loschinitos.de</a>.',

      'faq.h': 'Questions? Answers.',
      'faq.q1': 'What kinds of events can you cater?',
      'faq.a1': 'Company parties, weddings, birthdays, festivals and private celebrations — small or large. Just tell us what you’re planning.',
      'faq.q2': 'What’s the minimum number of guests?',
      'faq.a2': 'Placeholder: from X guests. For smaller groups, get in touch anyway — we can often work something out.',
      'faq.q3': 'How far do you travel?',
      'faq.a3': 'Placeholder: Düsseldorf and within Y km. Longer distances on request.',
      'faq.q4': 'What do you need on site?',
      'faq.a4': 'A level pitch for our stand, a power connection and access for delivery. We’ll confirm the exact dimensions with you beforehand.',
      'faq.q5': 'Do you offer vegetarian options?',
      'faq.a5': 'Yes — hongos al ajillo and quesadillas, for example. Let us know in your enquiry how many guests eat vegetarian.',
      'faq.q6': 'How does an enquiry work?',
      'faq.a6': 'Fill in the form — we’ll come back to you with any questions and a quote. If everything fits, we confirm the date in writing.',

      'social.h': 'From our<br />socials',
      'social.p': 'Placeholder for Instagram and TikTok content: trompo, guests, locations. Will be filled with real feed images later.',

      'footer.imprint': 'Legal notice',
      'footer.privacy': 'Privacy',
      'footer.cta': 'Enquire about catering →',
      'footer.emailCopied': 'Email address copied',

      'thanks.title': 'Thank you — Los Chinitos',
      'thanks.p': 'Your enquiry has reached us. We’ll get back to you as soon as possible.',
      'thanks.back': 'Back to the homepage →',
      'legal.back': '← Back'
    },

    es: {
      'nav.story': 'Nuestra historia',
      'nav.products': 'Menú',
      'nav.events': 'Eventos',
      'nav.cta': 'Cotizar',
      'nav.menuOpen': 'Abrir menú',
      'nav.toTop': 'Los Chinitos — ir arriba',
      'nav.backHome': 'Volver al inicio',
      'nav.mobile': 'Navegación móvil',
      'lang.label': 'Idioma',

      'hero.text': 'Texto provisional: una o dos frases de posicionamiento — taquería estilo CDMX, trompo, nada de Tex-Mex. Tono: breve, directo, sin folclor.',
      'hero.ctaCatering': 'Cotiza tu catering',
      'hero.ctaEvent': 'Próximo evento',

      'story.leftH': 'No empezó con un plan de negocios',
      'story.leftP': 'Todo empezó en la capital de México, la Ciudad de México. Un lunes al mediodía en el Mercado de La Merced. Con tres tacos al pastor cada uno. Desde la primera mordida quedamos tan convencidos que no podíamos dejar de compartirla con ustedes.',
      'story.rightH': 'En esta ciudad nos decían <span class="quoted">CHINITOS</span>',
      'story.rightP1': 'En México, a las personas con rasgos del este de Asia muchas veces les dicen “chinitos” de broma. No es una ofensa, sino puro cotorreo, casi una señal de pertenencia. De chinito pasamos a “compa”, y de “compa” a “hermano”.',
      'story.rightP2': 'En nuestros viajes por México no solo aprendimos muchísimo sobre tacos: en todos lados nos recibieron con los brazos abiertos, y eso nos marcó hasta hoy. Esa misma calidez es la que queremos compartir con ustedes en forma de tacos.',
      'story.imgAlt': 'We are Los Chinitos — los tres fundadores',

      'products.h': 'Lo que<br />cocinamos',
      'products.p': 'Texto provisional, aprox. 40–60 palabras. Aquí irá cómo trabajamos: trompo, tortillas, salsas, carta corta. Sin rollo de marketing, solo lo concreto: origen, oficio y por qué sabe distinto a lo que se conoce aquí.',
      'products.galleryAria': 'Nuestra carta',

      'events.h': 'Dónde<br />estaremos<br />próximamente',
      'events.p': 'Nota provisional: las fechas se anuncian primero en Instagram.',
      'events.follow': 'Sigue a @tacosloschinitos',
      'events.loc': 'Lugar – provisional',
      'events.time1': 'DD.MM. · 17:00–22:00 h',
      'events.time2': 'DD.MM. · 12:00–18:00 h',
      'events.details': 'Detalles',
      'events.caption': '05 / Módulo de eventos — 3 entradas, luego archivo',

      'inquiry.h': 'Cotiza tu<br />catering',
      'inquiry.p': 'Texto provisional: eventos de empresa, bodas, cumpleaños. A partir de X personas, hasta Y km a la redonda. Respuesta en 48 horas.',
      'form.name': 'Nombre *',
      'form.namePh': 'Tu nombre',
      'form.nameErr': 'Por favor, escribe tu nombre.',
      'form.occasion': 'Ocasión',
      'form.select': 'Selecciona una opción',
      'form.optCompany': 'Evento de empresa',
      'form.optWedding': 'Boda',
      'form.optBirthday': 'Cumpleaños',
      'form.optOther': 'Otro',
      'form.date': 'Fecha *',
      'form.dateErr': 'Por favor, elige una fecha.',
      'form.guests': 'Número de personas *',
      'form.guestsPh': 'p. ej. 60',
      'form.guestsErr': 'Por favor, indica el número de personas.',
      'form.message': 'Mensaje *',
      'form.messagePh': 'Tu mensaje',
      'form.messageErr': 'Cuéntanos brevemente de qué se trata.',
      'form.summary': 'Por favor, completa los campos marcados.',
      'form.submit': 'Enviar',
      'form.sending': 'Enviando…',
      'form.sent': 'Enviado',
      'form.errorHtml': 'Ups, algo salió mal. Escríbenos directamente a <a href="mailto:info@loschinitos.de">info@loschinitos.de</a>.',

      'faq.h': '¿Preguntas? Respuestas.',
      'faq.q1': '¿Para qué tipo de eventos se pueden contratar?',
      'faq.a1': 'Eventos de empresa, bodas, cumpleaños, festivales y fiestas privadas, chicos o grandes. Solo cuéntanos qué tienes en mente.',
      'faq.q2': '¿A partir de cuántas personas hacen catering?',
      'faq.a2': 'Provisional: a partir de X personas. Si tu grupo es más pequeño, pregúntanos de todos modos; muchas veces encontramos la manera.',
      'faq.q3': '¿Hasta dónde se desplazan?',
      'faq.a3': 'Provisional: Düsseldorf y hasta Y km a la redonda. Distancias mayores, previa consulta.',
      'faq.q4': '¿Qué necesitan en el lugar del evento?',
      'faq.a4': 'Un espacio plano para nuestro puesto, una toma de corriente y acceso para la descarga. Las medidas exactas las acordamos contigo antes del evento.',
      'faq.q5': '¿Tienen opciones vegetarianas?',
      'faq.a5': 'Sí: por ejemplo, hongos al ajillo y quesadillas. Dinos en tu solicitud cuántos invitados comen vegetariano.',
      'faq.q6': '¿Cómo funciona una solicitud?',
      'faq.a6': 'Llena el formulario y te contactamos con dudas y una cotización. Si todo cuadra, confirmamos la fecha por escrito.',

      'social.h': 'Desde nuestras<br />redes',
      'social.p': 'Espacio provisional para contenido de Instagram y TikTok: trompo, invitados, ubicaciones. Más adelante irán las imágenes reales del feed.',

      'footer.imprint': 'Aviso legal',
      'footer.privacy': 'Privacidad',
      'footer.cta': 'Cotiza tu catering →',
      'footer.emailCopied': 'Correo copiado',

      'thanks.title': 'Gracias — Los Chinitos',
      'thanks.p': 'Recibimos tu solicitud. Te contestamos lo antes posible.',
      'thanks.back': 'Volver al inicio →',
      'legal.back': '← Volver'
    }
  };

  var STORAGE_KEY = 'lc-lang';
  var HTML_LANG = { de: 'de', en: 'en', es: 'es-MX' };
  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];

  function detect() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (DICT[stored]) return stored;
    } catch (e) { /* storage unavailable */ }
    var nav = String(navigator.language || 'de').slice(0, 2).toLowerCase();
    return DICT[nav] ? nav : 'de';
  }

  var current = detect();

  function t(key) {
    var dict = DICT[current];
    if (dict && Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    if (Object.prototype.hasOwnProperty.call(DICT.de, key)) return DICT.de[key];
    return key;
  }

  function apply(lang) {
    if (!DICT[lang]) return;
    current = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* noop */ }
    document.documentElement.lang = HTML_LANG[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    ATTRS.forEach(function (attr) {
      document.querySelectorAll('[data-i18n-' + attr + ']').forEach(function (el) {
        el.setAttribute(attr, t(el.getAttribute('data-i18n-' + attr)));
      });
    });
    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    document.dispatchEvent(new CustomEvent('lc:lang', { detail: lang }));
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.lang-switch [data-lang]');
    if (btn) apply(btn.getAttribute('data-lang'));
  });

  window.LC_I18N = {
    t: t,
    apply: apply,
    get lang() { return current; }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { apply(current); });
  } else {
    apply(current);
  }
})();
