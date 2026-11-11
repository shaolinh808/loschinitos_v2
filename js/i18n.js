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

      'hero.text': 'Wir sind eine Hommage an die Taquerías von Mexiko-Stadt. Ohne Tex-Mex, aber mit einem subtilen „Chinitos“-Twist.',
      'hero.ctaCatering': 'Catering anfragen',
      'hero.ctaEvent': 'Nächstes Event',

      'story.leftH': 'Es fing nicht mit einem Businessplan an',
      'story.leftP': 'Angefangen hat alles in der Hauptstadt Mexikos, Ciudad de México. An einem Montagmittag im Mercado de La Merced. Mit je drei Tacos al Pastor. Schon der erste Biss hat uns so überzeugt, dass wir ihn unbedingt mit euch teilen wollten.',
      'story.rightH': 'In dieser Stadt nannten sie uns <span class="quoted">CHINITOS</span>',
      'story.rightP1': 'Personen mit ostasiatischen Zügen werden von Mexikanern oft scherzhaft „Chinitos“ genannt. Das ist nicht als Front, sondern vielmehr als Neckerei gedacht, quasi ein Zeichen der Zugehörigkeit. Aus Chinito wurde „compa“ und aus „compa“ wurde „hermano“.',
      'story.rightP2': 'Auf unseren Reisen durch Mexiko haben wir nicht nur mega viel über Tacos gelernt, sondern wurden immer herzlich empfangen, das uns bis heute positiv geprägt hat. Genau diese Herzlichkeit möchten wir euch in Form unserer Tacos weitergeben.',
      'meta.title': 'Tacos in Düsseldorf — Los Chinitos | Pop-ups & Catering',
      'meta.description': 'Tacos in Düsseldorf, inspiriert von den Taquerías in Mexiko-Stadt: Los Chinitos bringt Pastor, Suadero und Ribeye Gaonera zu Pop-ups und auf deine Feier. Ohne Tex-Mex. Jetzt Catering anfragen.',
      'story.imgAlt': 'Die drei Gründer von Los Chinitos, Toni, Linh und Mato, vor einem roten Strahlenkranz mit dem Schriftzug „We are Los Chinitos“',
      'img.hero': 'Drei Tacos von oben auf Porzellantellern mit rotem Rand: Taco al Pastor, Ribeye Gaonera und Suadero mit Zwiebeln, Koriander, Salsa und Limette – Los Chinitos, Tacos aus Düsseldorf',
      'img.pastor': 'Taco al Pastor von Los Chinitos: mariniertes Fleisch auf Maistortilla mit Zwiebeln, Koriander, grüner Salsa und Limette',
      'img.suadero': 'Taco de Suadero von Los Chinitos: zartes, fein geschnittenes Rindfleisch auf Maistortilla mit Zwiebeln, Koriander, Salsa und Limette',
      'img.ribeye': 'Taco de Ribeye Gaonera von Los Chinitos: Ribeye-Steak auf Maistortilla mit Guacamole, Salsa roja, gerösteten Zwiebeln und Limette',
      'img.emblem': 'Emblem von Los Chinitos: ein Trompo mit Ananas im Strahlenkranz',
      'img.igPost': 'Instagram-Beitrag von Los Chinitos',

      'products.h': 'Was wir<br />kochen',
      'products.galleryAria': 'Unsere Karte',
      'products.soon': 'Bald auf der Karte',

      'events.h': 'Wo wir als<br />nächstes<br />stehen',
      'events.p': 'Neue Termine posten wir zuerst auf Instagram.',
      'events.follow': '@tacosloschinitos folgen',
      'events.empty': 'Wir planen gerade die nächsten Stopps. Sobald sie feststehen, findest du Ort und Datum hier und auf Instagram.',
      'events.route': 'Route',
      'events.popup': 'Pop-up',
      'events.tbaPlace': 'Ort folgt',
      'events.tbaDate': 'Datum wird noch bekannt gegeben',
      'events.timeFrom': 'ab {s} Uhr',
      'events.timeRange': '{s}–{e} Uhr',
      'events.cat.ticket-menu': 'Ticket-Menü',
      'events.cat.market-stall': 'Marktstand',

      'inquiry.h': 'Catering<br />anfragen',
      'inquiry.p': 'Firmenfeier, Hochzeit, Geburtstag: Wir bringen die Tacos zu euch. Erzähl uns kurz von deinem Anlass, wir melden uns innerhalb von 48 Stunden.',
      'form.name': 'Name *',
      'form.namePh': 'Dein Name',
      'form.nameErr': 'Bitte gib deinen Namen an.',
      'form.email': 'E-Mail *',
      'form.emailPh': 'deine@email.de',
      'form.emailErr': 'Bitte gib eine gültige E-Mail-Adresse an.',
      'form.phone': 'Telefon',
      'form.phonePh': 'Für Rückfragen (optional)',
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
      'faq.intro': 'Das Wichtigste rund um Catering und Pop-ups. Deine Frage ist nicht dabei? Schreib uns direkt.',
      'faq.igTitle': 'Instagram-Nachricht',
      'faq.igSub': '@tacosloschinitos',
      'faq.mailSub': 'Antwort innerhalb von 48 Stunden',
      'faq.q1': 'Wo gibt es eure Tacos in Düsseldorf?',
      'faq.a1': 'Bei unseren Pop-ups an wechselnden Orten in Düsseldorf. Die nächsten Termine stehen oben unter „Wo wir als nächstes stehen“ und zuerst auf Instagram. Für deine Feier kommen wir auch direkt zu dir.',
      'faq.q2': 'Für welche Anlässe könnt ihr gebucht werden?',
      'faq.a2': 'Firmenfeiern, Hochzeiten, Geburtstage, Festivals und private Feiern. Erzähl uns, was du planst, und wir schauen, welches Format am besten dazu passt.',
      'faq.q3': 'Ab wie vielen Personen lohnt sich Catering?',
      'faq.a3': 'Eine feste Untergrenze haben wir nicht. Ob kleine Runde oder großes Fest: Schreib uns, wie viele Gäste kommen, und wir schlagen dir das passende Format vor.',
      'faq.q4': 'In welchem Umkreis seid ihr unterwegs?',
      'faq.a4': 'Zuhause sind wir in Düsseldorf, und in der Umgebung sind wir gern dabei. Für weitere Strecken frag einfach an, dann klären wir Anfahrt und Kosten gemeinsam.',
      'faq.q5': 'Was braucht ihr vor Ort?',
      'faq.a5': 'Eine ebene Stellfläche für unseren Stand, einen Stromanschluss und Zugang für die Anlieferung. Die genauen Maße klären wir vorab mit dir.',
      'faq.q6': 'Gibt es vegetarische Optionen?',
      'faq.a6': 'Ja. Sag uns bei der Anfrage, wie viele Gäste vegetarisch essen, dann planen wir das von Anfang an mit ein.',
      'faq.q7': 'Wie läuft eine Anfrage ab?',
      'faq.a7': 'Formular ausfüllen, wir melden uns innerhalb von 48 Stunden mit Rückfragen und einem Angebot. Passt alles, bestätigen wir den Termin schriftlich.',

      'social.h': 'Aus unseren<br />socials',
      'social.p': 'Tacos, Tortillas, Gäste, Standorte. Mehr davon auf Instagram unter @tacosloschinitos.',
      'social.reel': 'Reel ansehen',

      'footer.imprint': 'Impressum',
      'footer.privacy': 'Datenschutz',
      'consent.title': 'Cookies & Daten',
      'consent.text': 'Wir nutzen technisch notwendige Speicherung, damit die Seite funktioniert. Mit deiner Zustimmung nutzen wir zusätzlich Statistik- und Marketing-Dienste. Du kannst deine Auswahl jederzeit im Footer unter „Cookie-Einstellungen“ ändern.',
      'consent.more': 'Mehr in der Datenschutzerklärung',
      'consent.necessary': 'Notwendig',
      'consent.necessaryText': 'Grundfunktionen wie deine Sprachauswahl. Immer aktiv.',
      'consent.statistics': 'Statistik',
      'consent.statisticsText': 'Hilft uns zu verstehen, wie die Seite genutzt wird.',
      'consent.marketing': 'Marketing',
      'consent.marketingText': 'Ermöglicht es, unsere Werbung auf Instagram & Co. passender zu machen.',
      'consent.acceptAll': 'Alle akzeptieren',
      'consent.onlyNecessary': 'Nur notwendige',
      'consent.settings': 'Einstellungen',
      'consent.save': 'Auswahl speichern',
      'footer.consent': 'Cookie-Einstellungen',
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

      'hero.text': 'We’re a tribute to the taquerías of Mexico City. No Tex-Mex, but with a subtle “Chinitos” twist.',
      'hero.ctaCatering': 'Enquire about catering',
      'hero.ctaEvent': 'Next event',

      'story.leftH': 'It didn’t start with a business plan',
      'story.leftP': 'It all began in Mexico’s capital, Ciudad de México. On a Monday lunchtime at the Mercado de La Merced. With three tacos al pastor each. The very first bite won us over so completely that we knew we had to share it with you.',
      'story.rightH': 'In this city they called us <span class="quoted">CHINITOS</span>',
      'story.rightP1': 'In Mexico, people with East Asian features are often jokingly called “chinitos”. It isn’t meant as an insult but as friendly teasing — almost a sign of belonging. Chinito became “compa”, and “compa” became “hermano”.',
      'story.rightP2': 'Travelling through Mexico we didn’t just learn a huge amount about tacos — we were welcomed with open arms everywhere we went, and that has shaped us to this day. It’s exactly this warmth we want to pass on to you, in the form of our tacos.',
      'meta.title': 'Tacos in Düsseldorf — Los Chinitos | Pop-ups & Catering',
      'meta.description': 'Tacos in Düsseldorf, inspired by the taquerías of Mexico City: Los Chinitos brings al pastor, suadero and ribeye gaonera to pop-ups and to your party. No Tex-Mex. Book catering now.',
      'story.imgAlt': 'The three founders of Los Chinitos, Toni, Linh and Mato, in front of red rays and the lettering “We are Los Chinitos”',
      'img.hero': 'Three tacos seen from above on red-rimmed china plates: taco al pastor, ribeye gaonera and suadero with onion, cilantro, salsa and lime – Los Chinitos, tacos from Düsseldorf',
      'img.pastor': 'Taco al pastor by Los Chinitos: marinated meat on a corn tortilla with onion, cilantro, green salsa and lime',
      'img.suadero': 'Taco de suadero by Los Chinitos: tender, finely chopped beef on a corn tortilla with onion, cilantro, salsa and lime',
      'img.ribeye': 'Taco de ribeye gaonera by Los Chinitos: ribeye steak on a corn tortilla with guacamole, salsa roja, grilled onions and lime',
      'img.emblem': 'Los Chinitos emblem: a trompo topped with a pineapple in a ring of rays',
      'img.igPost': 'Instagram post by Los Chinitos',

      'products.h': 'What we<br />cook',
      'products.galleryAria': 'Our menu',
      'products.soon': 'Coming soon',

      'events.h': 'Where you’ll<br />find us<br />next',
      'events.p': 'New dates go up on Instagram first.',
      'events.follow': 'Follow @tacosloschinitos',
      'events.empty': 'We’re planning our next stops. Once they’re set, you’ll find the place and date here and on Instagram.',
      'events.route': 'Directions',
      'events.popup': 'Pop-up',
      'events.tbaPlace': 'Location TBA',
      'events.tbaDate': 'Date to be announced',
      'events.timeFrom': 'from {s}',
      'events.timeRange': '{s}–{e}',
      'events.cat.ticket-menu': 'Ticket menu',
      'events.cat.market-stall': 'Market stall',

      'inquiry.h': 'Catering<br />enquiries',
      'inquiry.p': 'Company party, wedding, birthday: we bring the tacos to you. Tell us a little about your occasion and we’ll get back to you within 48 hours.',
      'form.name': 'Name *',
      'form.namePh': 'Your name',
      'form.nameErr': 'Please enter your name.',
      'form.email': 'Email *',
      'form.emailPh': 'you@email.com',
      'form.emailErr': 'Please enter a valid email address.',
      'form.phone': 'Phone',
      'form.phonePh': 'For questions (optional)',
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
      'faq.intro': 'The essentials on catering and pop-ups. Can’t find your question? Just message us.',
      'faq.igTitle': 'Instagram message',
      'faq.igSub': '@tacosloschinitos',
      'faq.mailSub': 'Reply within 48 hours',
      'faq.q1': 'Where can I get your tacos in Düsseldorf?',
      'faq.a1': 'At our pop-ups in changing locations around Düsseldorf. Upcoming dates are listed above under “Where you’ll find us next” and go up on Instagram first. For your party, we come straight to you.',
      'faq.q2': 'What kinds of events can you cater?',
      'faq.a2': 'Company parties, weddings, birthdays, festivals and private celebrations. Tell us what you’re planning and we’ll work out which format fits best.',
      'faq.q3': 'What’s the minimum number of guests?',
      'faq.a3': 'There’s no fixed minimum. Small get-together or big party: tell us how many guests are coming and we’ll suggest the right format.',
      'faq.q4': 'How far do you travel?',
      'faq.a4': 'We’re based in Düsseldorf and happy to come to the surrounding area. For longer distances just ask, and we’ll sort out travel and costs together.',
      'faq.q5': 'What do you need on site?',
      'faq.a5': 'A level pitch for our stand, a power connection and access for delivery. We’ll confirm the exact dimensions with you beforehand.',
      'faq.q6': 'Do you offer vegetarian options?',
      'faq.a6': 'Yes. Let us know in your enquiry how many guests eat vegetarian and we’ll plan for it from the start.',
      'faq.q7': 'How does an enquiry work?',
      'faq.a7': 'Fill in the form and we’ll get back to you within 48 hours with any questions and a quote. If everything fits, we confirm the date in writing.',

      'social.h': 'From our<br />socials',
      'social.p': 'Tacos, tortillas, guests, locations. More of it on Instagram at @tacosloschinitos.',
      'social.reel': 'Watch reel',

      'footer.imprint': 'Legal notice',
      'footer.privacy': 'Privacy',
      'consent.title': 'Cookies & data',
      'consent.text': 'We use technically necessary storage so the site works. With your consent we also use statistics and marketing services. You can change your choice any time via “Cookie settings” in the footer.',
      'consent.more': 'More in our privacy policy',
      'consent.necessary': 'Necessary',
      'consent.necessaryText': 'Basic features such as your language choice. Always on.',
      'consent.statistics': 'Statistics',
      'consent.statisticsText': 'Helps us understand how the site is used.',
      'consent.marketing': 'Marketing',
      'consent.marketingText': 'Lets us make our ads on Instagram & co. more relevant.',
      'consent.acceptAll': 'Accept all',
      'consent.onlyNecessary': 'Necessary only',
      'consent.settings': 'Settings',
      'consent.save': 'Save choice',
      'footer.consent': 'Cookie settings',
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

      'hero.text': 'Somos un homenaje a las taquerías de la Ciudad de México. Sin Tex-Mex, pero con un sutil toque “Chinitos”.',
      'hero.ctaCatering': 'Cotiza tu catering',
      'hero.ctaEvent': 'Próximo evento',

      'story.leftH': 'No empezó con un plan de negocios',
      'story.leftP': 'Todo empezó en la capital de México, la Ciudad de México. Un lunes al mediodía en el Mercado de La Merced. Con tres tacos al pastor cada uno. Desde la primera mordida quedamos tan convencidos que no podíamos dejar de compartirla con ustedes.',
      'story.rightH': 'En esta ciudad nos decían <span class="quoted">CHINITOS</span>',
      'story.rightP1': 'En México, a las personas con rasgos del este de Asia muchas veces les dicen “chinitos” de broma. No es una ofensa, sino puro cotorreo, casi una señal de pertenencia. De chinito pasamos a “compa”, y de “compa” a “hermano”.',
      'story.rightP2': 'En nuestros viajes por México no solo aprendimos muchísimo sobre tacos: en todos lados nos recibieron con los brazos abiertos, y eso nos marcó hasta hoy. Esa misma calidez es la que queremos compartir con ustedes en forma de tacos.',
      'meta.title': 'Tacos en Düsseldorf — Los Chinitos | Pop-ups y catering',
      'meta.description': 'Tacos en Düsseldorf, inspirados en las taquerías de la Ciudad de México: Los Chinitos lleva pastor, suadero y ribeye gaonera a pop-ups y a tu fiesta. Sin Tex-Mex. Pide tu catering.',
      'story.imgAlt': 'Los tres fundadores de Los Chinitos, Toni, Linh y Mato, frente a rayos rojos con el letrero “We are Los Chinitos”',
      'img.hero': 'Tres tacos vistos desde arriba en platos de porcelana con borde rojo: al pastor, ribeye gaonera y suadero con cebolla, cilantro, salsa y limón – Los Chinitos, tacos en Düsseldorf',
      'img.pastor': 'Taco al pastor de Los Chinitos: carne marinada en tortilla de maíz con cebolla, cilantro, salsa verde y limón',
      'img.suadero': 'Taco de suadero de Los Chinitos: res suave y finamente picada en tortilla de maíz con cebolla, cilantro, salsa y limón',
      'img.ribeye': 'Taco de ribeye gaonera de Los Chinitos: ribeye en tortilla de maíz con guacamole, salsa roja, cebolla asada y limón',
      'img.emblem': 'Emblema de Los Chinitos: un trompo con piña rodeado de rayos',
      'img.igPost': 'Publicación de Instagram de Los Chinitos',

      'products.h': 'Lo que<br />cocinamos',
      'products.galleryAria': 'Nuestra carta',
      'products.soon': 'Muy pronto',

      'events.h': 'Dónde<br />estaremos<br />próximamente',
      'events.p': 'Las nuevas fechas las publicamos primero en Instagram.',
      'events.follow': 'Sigue a @tacosloschinitos',
      'events.empty': 'Estamos planeando las próximas paradas. En cuanto estén listas, verás lugar y fecha aquí y en Instagram.',
      'events.route': 'Cómo llegar',
      'events.popup': 'Pop-up',
      'events.tbaPlace': 'Lugar por confirmar',
      'events.tbaDate': 'Fecha por anunciar',
      'events.timeFrom': 'desde las {s} h',
      'events.timeRange': '{s}–{e} h',
      'events.cat.ticket-menu': 'Menú con boleto',
      'events.cat.market-stall': 'Puesto de mercado',

      'inquiry.h': 'Cotiza tu<br />catering',
      'inquiry.p': 'Fiesta de empresa, boda, cumpleaños: llevamos los tacos a ti. Cuéntanos brevemente de tu evento y te respondemos en menos de 48 horas.',
      'form.name': 'Nombre *',
      'form.namePh': 'Tu nombre',
      'form.nameErr': 'Por favor, escribe tu nombre.',
      'form.email': 'Correo *',
      'form.emailPh': 'tu@correo.com',
      'form.emailErr': 'Escribe un correo electrónico válido.',
      'form.phone': 'Teléfono',
      'form.phonePh': 'Para dudas (opcional)',
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
      'faq.intro': 'Lo esencial sobre catering y pop-ups. ¿No encuentras tu pregunta? Escríbenos directamente.',
      'faq.igTitle': 'Mensaje por Instagram',
      'faq.igSub': '@tacosloschinitos',
      'faq.mailSub': 'Respuesta en menos de 48 horas',
      'faq.q1': '¿Dónde puedo comer sus tacos en Düsseldorf?',
      'faq.a1': 'En nuestros pop-ups en distintos lugares de Düsseldorf. Las próximas fechas están arriba, en “Dónde estaremos próximamente”, y primero en Instagram. Para tu fiesta, vamos directo a ti.',
      'faq.q2': '¿Para qué tipo de eventos se pueden contratar?',
      'faq.a2': 'Eventos de empresa, bodas, cumpleaños, festivales y fiestas privadas. Cuéntanos qué tienes en mente y vemos qué formato encaja mejor.',
      'faq.q3': '¿A partir de cuántas personas vale la pena el catering?',
      'faq.a3': 'No tenemos un mínimo fijo. Reunión chica o fiesta grande: dinos cuántos invitados vienen y te proponemos el formato ideal.',
      'faq.q4': '¿Hasta dónde se desplazan?',
      'faq.a4': 'Estamos en Düsseldorf y con gusto vamos a los alrededores. Para distancias mayores pregúntanos y vemos juntos el traslado y los costos.',
      'faq.q5': '¿Qué necesitan en el lugar del evento?',
      'faq.a5': 'Un espacio plano para nuestro puesto, una toma de corriente y acceso para la descarga. Las medidas exactas las acordamos contigo antes del evento.',
      'faq.q6': '¿Tienen opciones vegetarianas?',
      'faq.a6': 'Sí. Dinos en tu solicitud cuántos invitados comen vegetariano y lo planeamos desde el principio.',
      'faq.q7': '¿Cómo funciona una solicitud?',
      'faq.a7': 'Llena el formulario y te contactamos en menos de 48 horas con dudas y una cotización. Si todo cuadra, confirmamos la fecha por escrito.',

      'social.h': 'Desde nuestras<br />redes',
      'social.p': 'Tacos, tortillas, invitados, ubicaciones. Más en Instagram: @tacosloschinitos.',
      'social.reel': 'Ver reel',

      'footer.imprint': 'Aviso legal',
      'footer.privacy': 'Privacidad',
      'consent.title': 'Cookies y datos',
      'consent.text': 'Usamos almacenamiento técnicamente necesario para que el sitio funcione. Con tu consentimiento usamos además servicios de estadística y marketing. Puedes cambiar tu elección cuando quieras en “Configuración de cookies”, en el pie de página.',
      'consent.more': 'Más en la política de privacidad',
      'consent.necessary': 'Necesarias',
      'consent.necessaryText': 'Funciones básicas como tu idioma. Siempre activas.',
      'consent.statistics': 'Estadística',
      'consent.statisticsText': 'Nos ayuda a entender cómo se usa el sitio.',
      'consent.marketing': 'Marketing',
      'consent.marketingText': 'Nos permite que nuestra publicidad en Instagram y otras redes sea más relevante.',
      'consent.acceptAll': 'Aceptar todas',
      'consent.onlyNecessary': 'Solo necesarias',
      'consent.settings': 'Configuración',
      'consent.save': 'Guardar selección',
      'footer.consent': 'Configuración de cookies',
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

  // Home page exists as /, /en/ and /es/: the URL decides the language there.
  var PAGE_LANG = document.documentElement.getAttribute('data-page-lang');
  var BASE = window.LC_BASE || '';

  function detect() {
    if (PAGE_LANG && DICT[PAGE_LANG]) return PAGE_LANG;
    var q = /[?&]lang=(de|en|es)\b/.exec(location.search);
    if (q) return q[1];
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

  function apply(lang, remember) {
    if (!DICT[lang]) return;
    current = lang;
    // only store a language the visitor actively picked
    if (remember) { try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* noop */ } }
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
    // sub pages (danke, impressum, datenschutz): "back home" leads to the
    // home page in the visitor's language
    if (!PAGE_LANG) {
      document.querySelectorAll('a[href^="index.html"], a[data-home-href]').forEach(function (a) {
        var orig = a.getAttribute('data-home-href') || a.getAttribute('href');
        a.setAttribute('data-home-href', orig);
        var hash = orig.indexOf('#') >= 0 ? orig.slice(orig.indexOf('#')) : '';
        a.setAttribute('href', (lang === 'de' ? 'index.html' : lang + '/') + hash);
      });
    }
    document.dispatchEvent(new CustomEvent('lc:lang', { detail: lang }));
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.lang-switch [data-lang]');
    if (!btn) return;
    var lang = btn.getAttribute('data-lang');
    if (PAGE_LANG) {
      // language pages: switch the URL, not just the text
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (err) { /* noop */ }
      if (lang !== PAGE_LANG) location.href = BASE + (lang === 'de' ? '' : lang + '/') + location.hash;
      return;
    }
    apply(lang, true);
  });

  window.LC_I18N = {
    t: t,
    apply: apply,
    get lang() { return current; }
  };

  if (PAGE_LANG === 'de' && !/[?&]lang=de\b/.test(location.search)) {
    try {
      var chosen = localStorage.getItem(STORAGE_KEY);
      if (chosen === 'en' || chosen === 'es') { location.replace(BASE + chosen + '/' + location.hash); return; }
    } catch (e) { /* noop */ }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { apply(current); });
  } else {
    apply(current);
  }
})();
