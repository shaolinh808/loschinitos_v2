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
      'nav.products': "Karte",
      'nav.events': 'Events',
      'nav.cta': 'Anfragen',
      'nav.menuOpen': 'Menü öffnen',
      'nav.toTop': "Los Chinitos, nach oben",
      'nav.backHome': 'Zurück zur Startseite',
      'nav.mobile': 'Mobile Navigation',
      'lang.label': 'Sprache',

      'hero.text': 'Wir sind eine Hommage an die Taquerías von Mexiko-Stadt. Ohne Tex-Mex, aber mit einem subtilen „Chinitos“-Twist.',
      'hero.ctaCatering': 'Catering anfragen',
      'hero.ctaEvent': 'Nächstes Event',

      'story.leftH': 'Es fing nicht mit einem Businessplan an',
      'story.leftP': "Angefangen hat alles in Ciudad de México, an einem Montagmittag im Mercado de La Merced, mit je drei Tacos al Pastor. Schon der erste Biss hat uns so überzeugt, dass wir das unbedingt mit euch teilen wollten.",
      'story.rightH': 'In dieser Stadt nannten sie uns <span class="quoted">CHINITOS</span>',
      'story.rightP1': "In Mexiko nennt man Menschen mit ostasiatischen Gesichtszügen oft scherzhaft „Chinitos“. Das ist nicht böse gemeint, sondern eine Neckerei, quasi ein Zeichen der Zugehörigkeit. Aus „Chinito“ wurde „carnal“ und aus „carnal“ wurde „hermano“.",
      'story.rightP2': "Auf unseren Reisen durch Mexiko haben wir nicht nur mega viel über Tacos gelernt. Wir wurden auch überall herzlich empfangen, und das hat uns bis heute geprägt. Genau diese Herzlichkeit möchten wir mit unseren Tacos an euch weitergeben.",
      'meta.title': "Tacos in Düsseldorf – Los Chinitos | Pop-ups & Catering",
      'meta.description': "Tacos in Düsseldorf, inspiriert von den Taquerías in Mexiko-Stadt: Pastor, Suadero und Ribeye Gaonera bei Pop-ups und als Catering. Ohne Tex-Mex.",
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

      'events.h': "Wo wir als<br />Nächstes<br />stehen",
      'events.p': 'Neue Termine posten wir zuerst auf Instagram.',
      'events.follow': '@tacosloschinitos folgen',
      'events.empty': 'Wir planen gerade die nächsten Stopps. Sobald sie feststehen, findest du Ort und Datum hier und auf Instagram.',
      'events.route': 'Route',
      'events.popup': 'Pop-up',
      'events.tbaPlace': 'Ort folgt',
      'events.tbaDate': "Datum folgt",
      'events.timeFrom': 'ab {s} Uhr',
      'events.timeRange': '{s}–{e} Uhr',
      'events.cat.ticket-menu': 'Ticket-Menü',
      'events.cat.market-stall': 'Marktstand',

      'inquiry.h': 'Catering<br />anfragen',
      'inquiry.p': "Firmenfeier, Hochzeit, Geburtstag: Wir bringen die Tacos zu dir. Erzähl uns kurz von deinem Anlass und wir melden uns innerhalb von 48 Stunden.",
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
      'form.dateErr': "Bitte wähle ein Datum ab heute.",
      'form.guests': 'Personenzahl *',
      'form.guestsPh': 'z. B. 60',
      'form.guestsErr': 'Bitte gib die Personenzahl an.',
      'form.message': 'Nachricht *',
      'form.messagePh': "Ort, Uhrzeit, besondere Wünsche …",
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
      'faq.a1': "Bei unseren Pop-ups an wechselnden Orten in Düsseldorf. Die nächsten Termine stehen oben unter „Wo wir als Nächstes stehen“ und zuerst auf Instagram. Für deine Feier kommen wir auch direkt zu dir.",
      'faq.q2': "Für welche Anlässe kann man euch buchen?",
      'faq.a2': 'Firmenfeiern, Hochzeiten, Geburtstage, Festivals und private Feiern. Erzähl uns, was du planst, und wir schauen, welches Format am besten dazu passt.',
      'faq.q3': 'Ab wie vielen Personen lohnt sich Catering?',
      'faq.a3': "Eine feste Untergrenze haben wir nicht. Schreib uns, wie viele Gäste kommen, und wir sagen dir, was dafür am besten passt.",
      'faq.q4': 'In welchem Umkreis seid ihr unterwegs?',
      'faq.a4': "Wir sind in Düsseldorf zu Hause und kommen auch gern in die Umgebung. Bei längeren Strecken frag einfach an, dann klären wir Anfahrt und Kosten gemeinsam.",
      'faq.q5': 'Was braucht ihr vor Ort?',
      'faq.a5': 'Eine ebene Stellfläche für unseren Stand, einen Stromanschluss und Zugang für die Anlieferung. Die genauen Maße klären wir vorab mit dir.',
      'faq.q6': 'Gibt es vegetarische Optionen?',
      'faq.a6': 'Ja. Sag uns bei der Anfrage, wie viele Gäste vegetarisch essen, dann planen wir das von Anfang an mit ein.',
      'faq.q7': 'Wie läuft eine Anfrage ab?',
      'faq.a7': 'Formular ausfüllen, wir melden uns innerhalb von 48 Stunden mit Rückfragen und einem Angebot. Passt alles, bestätigen wir den Termin schriftlich.',

      'social.h': 'Aus unseren<br />socials',
      'social.p': "Was sonst noch bei uns passiert, siehst du auf Instagram unter @tacosloschinitos.",
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

      'thanks.title': "Danke – Los Chinitos",
      'thanks.p': "Deine Anfrage ist bei uns angekommen. Wir melden uns innerhalb von 48 Stunden bei dir.",
      'thanks.back': 'Zurück zur Startseite →',
      'legal.back': '← Zurück',
      'meta.ogImageAlt': "Los Chinitos: Emblem und Schriftzug auf Rot",
      'meta.orgDescription': "Tacos in Düsseldorf, inspiriert von den Taquerías in Mexiko-Stadt. Los Chinitos macht Taco-Pop-ups an wechselnden Orten in Düsseldorf und Catering für Firmenfeiern, Hochzeiten und Geburtstage. Ohne Tex-Mex, mit einem subtilen „Chinitos“-Twist. Auf der Karte: Tacos al Pastor, Suadero und Ribeye Gaonera.",
      'meta.cuisine': "Mexikanisch",
      'meta.knowsAbout': "Tacos|Tacos al Pastor|Suadero|Mexikanisches Essen|Mexikanisches Street Food|Taco-Catering|Catering in Düsseldorf",
      'img.reel': "Reel: Los Chinitos auf Instagram",
      'events.ldName': "Los Chinitos Taco-Pop-up",
      'events.ldAt': " im ",
      'events.ldDesc': "Tacos, inspiriert von den Taquerías in Mexiko-Stadt: Pastor, Suadero, Ribeye Gaonera. Ohne Tex-Mex.",
      'hero.kicker': "Pop-ups & Catering in Düsseldorf",
      'inquiry.step1': "Formular ausfüllen",
      'inquiry.step2': "Angebot innerhalb von 48 Stunden",
      'inquiry.step3': "Termin fix machen",
      'form.privacy': "Wir nutzen deine Angaben nur, um deine Anfrage zu beantworten. Mehr dazu in der <a href=\"/datenschutz.html\">Datenschutzerklärung</a>.",
      'thanks.ig': "Folg uns auf Instagram"
    },

    en: {
      'nav.story': 'Our story',
      'nav.products': 'Menu',
      'nav.events': 'Events',
      'nav.cta': "Book us",
      'nav.menuOpen': 'Open menu',
      'nav.toTop': "Los Chinitos, back to top",
      'nav.backHome': 'Back to the homepage',
      'nav.mobile': 'Mobile navigation',
      'lang.label': 'Language',

      'hero.text': "Our tribute to the taquerías of Mexico City. No Tex-Mex, just a subtle “Chinitos” twist.",
      'hero.ctaCatering': "Book catering",
      'hero.ctaEvent': 'Next event',

      'story.leftH': 'It didn’t start with a business plan',
      'story.leftP': "It all started in Ciudad de México, one Monday lunchtime at the Mercado de La Merced, with three tacos al pastor each. We were sold at the first bite and knew we had to share it with you.",
      'story.rightH': "In that city, they called us <span class=\"quoted\">CHINITOS</span>",
      'story.rightP1': "In Mexico, people who look East Asian often get called “chinitos”. It’s not meant as an insult. It’s a tease, more a sign that you belong. “Chinito” turned into “carnal”, and “carnal” into “hermano”.",
      'story.rightP2': "On our trips around Mexico we learned a ridiculous amount about tacos, and we were welcomed with open arms wherever we went. That has stayed with us. It’s the same warmth we want to pass on to you through our tacos.",
      'meta.title': "Tacos in Düsseldorf – Los Chinitos | Pop-ups & Catering",
      'meta.description': "Tacos in Düsseldorf inspired by the taquerías of Mexico City: pastor, suadero and ribeye gaonera at pop-ups and catered events. No Tex-Mex.",
      'story.imgAlt': "The three founders of Los Chinitos, Toni, Linh and Mato, in front of a red sunburst with the words “We are Los Chinitos”",
      'img.hero': "Three tacos seen from above on porcelain plates with red rims: taco al pastor, ribeye gaonera and suadero with onion, coriander, salsa and lime – Los Chinitos, tacos from Düsseldorf",
      'img.pastor': "Taco al pastor by Los Chinitos: marinated meat on a corn tortilla with onion, coriander, green salsa and lime",
      'img.suadero': "Taco de suadero by Los Chinitos: tender, finely chopped beef on a corn tortilla with onion, coriander, salsa and lime",
      'img.ribeye': 'Taco de ribeye gaonera by Los Chinitos: ribeye steak on a corn tortilla with guacamole, salsa roja, grilled onions and lime',
      'img.emblem': "Los Chinitos emblem: a trompo topped with a pineapple inside a sunburst",
      'img.igPost': 'Instagram post by Los Chinitos',

      'products.h': "What’s<br />cooking",
      'products.galleryAria': 'Our menu',
      'products.soon': 'Coming soon',

      'events.h': 'Where you’ll<br />find us<br />next',
      'events.p': 'New dates go up on Instagram first.',
      'events.follow': 'Follow @tacosloschinitos',
      'events.empty': 'We’re planning our next stops. Once they’re set, you’ll find the place and date here and on Instagram.',
      'events.route': 'Directions',
      'events.popup': 'Pop-up',
      'events.tbaPlace': 'Location TBA',
      'events.tbaDate': "Date TBA",
      'events.timeFrom': 'from {s}',
      'events.timeRange': '{s}–{e}',
      'events.cat.ticket-menu': "Ticketed menu",
      'events.cat.market-stall': 'Market stall',

      'inquiry.h': 'Catering<br />enquiries',
      'inquiry.p': "Office party, wedding or birthday: we’ll bring the tacos to you. Tell us a bit about your event and we’ll get back to you within 48 hours.",
      'form.name': 'Name *',
      'form.namePh': 'Your name',
      'form.nameErr': 'Please enter your name.',
      'form.email': 'Email *',
      'form.emailPh': 'you@email.com',
      'form.emailErr': 'Please enter a valid email address.',
      'form.phone': 'Phone',
      'form.phonePh': "For follow-up questions (optional)",
      'form.occasion': 'Occasion',
      'form.select': 'Please select',
      'form.optCompany': "Office party",
      'form.optWedding': 'Wedding',
      'form.optBirthday': 'Birthday',
      'form.optOther': 'Other',
      'form.date': 'Date *',
      'form.dateErr': "Please choose a date from today onwards.",
      'form.guests': 'Number of guests *',
      'form.guestsPh': 'e.g. 60',
      'form.guestsErr': 'Please enter the number of guests.',
      'form.message': 'Message *',
      'form.messagePh': "Location, time, special requests …",
      'form.messageErr': "Please tell us a bit about what you need.",
      'form.summary': 'Please fill in the highlighted fields.',
      'form.submit': 'Send',
      'form.sending': 'Sending…',
      'form.sent': 'Sent',
      'form.errorHtml': "Oops, that didn’t go through. Email us directly at <a href=\"mailto:info@loschinitos.de\">info@loschinitos.de</a>.",

      'faq.h': 'Questions? Answers.',
      'faq.intro': "The main things to know about catering and pop-ups. Something missing? Drop us a message.",
      'faq.igTitle': 'Instagram message',
      'faq.igSub': '@tacosloschinitos',
      'faq.mailSub': 'Reply within 48 hours',
      'faq.q1': 'Where can I get your tacos in Düsseldorf?',
      'faq.a1': "At our pop-ups, which move around Düsseldorf. The next dates are listed above under “Where you’ll find us next” and go up on Instagram first. And for your party, we’ll come to you.",
      'faq.q2': 'What kinds of events can you cater?',
      'faq.a2': "Office parties, weddings, birthdays, festivals and private parties. Tell us what you’re planning and we’ll work out what suits it best.",
      'faq.q3': 'What’s the minimum number of guests?',
      'faq.a3': "There’s no fixed minimum. Tell us how many people are coming and we’ll suggest a set-up that works.",
      'faq.q4': 'How far do you travel?',
      'faq.a4': "We’re based in Düsseldorf and happy to travel to the surrounding area. For anywhere further afield, just ask and we’ll sort out travel and costs together.",
      'faq.q5': 'What do you need on site?',
      'faq.a5': "A flat spot for our stand, a power supply and access for unloading. We’ll go through the exact measurements with you beforehand.",
      'faq.q6': 'Do you offer vegetarian options?',
      'faq.a6': "Yes. Let us know in your enquiry how many of your guests are vegetarian and we’ll plan for it from the start.",
      'faq.q7': "How does booking work?",
      'faq.a7': "Fill in the form and we’ll be in touch within 48 hours with any questions and a quote. If it all works for you, we’ll confirm the date in writing.",

      'social.h': 'From our<br />socials',
      'social.p': "See what else we’re up to on Instagram at @tacosloschinitos.",
      'social.reel': 'Watch reel',

      'footer.imprint': 'Legal notice',
      'footer.privacy': 'Privacy',
      'consent.title': 'Cookies & data',
      'consent.text': "We only store what’s technically needed for the site to work. With your consent, we also use analytics and marketing services. You can change your choice at any time under “Cookie settings” in the footer.",
      'consent.more': 'More in our privacy policy',
      'consent.necessary': 'Necessary',
      'consent.necessaryText': 'Basic features such as your language choice. Always on.',
      'consent.statistics': "Analytics",
      'consent.statisticsText': 'Helps us understand how the site is used.',
      'consent.marketing': 'Marketing',
      'consent.marketingText': "Lets us make our ads on Instagram and similar platforms more relevant.",
      'consent.acceptAll': 'Accept all',
      'consent.onlyNecessary': 'Necessary only',
      'consent.settings': 'Settings',
      'consent.save': "Save selection",
      'footer.consent': 'Cookie settings',
      'footer.cta': "Book catering →",
      'footer.emailCopied': 'Email address copied',

      'thanks.title': "Thank you – Los Chinitos",
      'thanks.p': "We’ve got your enquiry and will get back to you within 48 hours.",
      'thanks.back': 'Back to the homepage →',
      'legal.back': '← Back',
      'meta.ogImageAlt': "Los Chinitos emblem and wordmark on red",
      'meta.orgDescription': "Tacos in Düsseldorf inspired by the taquerías of Mexico City. Los Chinitos runs taco pop-ups around Düsseldorf and caters office parties, weddings and birthdays. No Tex-Mex, just a subtle “Chinitos” twist. On the menu: tacos al pastor, suadero and ribeye gaonera.",
      'meta.cuisine': "Mexican",
      'meta.knowsAbout': "Tacos|Tacos al pastor|Suadero|Mexican food|Mexican street food|Taco catering|Catering in Düsseldorf",
      'img.reel': "Reel: Los Chinitos on Instagram",
      'events.ldName': "Los Chinitos taco pop-up",
      'events.ldAt': " at ",
      'events.ldDesc': "Tacos inspired by the taquerías of Mexico City: pastor, suadero, ribeye gaonera. No Tex-Mex.",
      'hero.kicker': "Pop-ups & catering in Düsseldorf",
      'inquiry.step1': "Fill in the form",
      'inquiry.step2': "Get a quote within 48 hours",
      'inquiry.step3': "Lock in the date",
      'form.privacy': "We only use your details to reply to your enquiry. More in our <a href=\"/datenschutz.html\">privacy policy</a>.",
      'thanks.ig': "Follow us on Instagram"
    },

    es: {
      'nav.story': 'Nuestra historia',
      'nav.products': 'Menú',
      'nav.events': 'Eventos',
      'nav.cta': 'Cotizar',
      'nav.menuOpen': 'Abrir menú',
      'nav.toTop': "Los Chinitos, volver arriba",
      'nav.backHome': 'Volver al inicio',
      'nav.mobile': 'Navegación móvil',
      'lang.label': 'Idioma',

      'hero.text': "Nuestro homenaje a las taquerías de la Ciudad de México. Nada de Tex-Mex, solo un ligero toque “Chinitos”.",
      'hero.ctaCatering': "Cotiza tu taquiza",
      'hero.ctaEvent': 'Próximo evento',

      'story.leftH': 'No empezó con un plan de negocios',
      'story.leftP': "Todo empezó en la Ciudad de México, un lunes a mediodía en el Mercado de La Merced, cada quien con tres tacos al pastor. Desde la primera mordida supimos que teníamos que compartir esto con ustedes.",
      'story.rightH': "En esa ciudad nos decían <span class=\"quoted\">CHINITOS</span>",
      'story.rightP1': "En México, a la gente con rasgos asiáticos muchas veces le dicen “chinito” de broma. No es ofensa, es puro cotorreo, casi una forma de decirte que ya eres de la banda. De “chinito” pasamos a “carnal”, y de “carnal” a “hermano”.",
      'story.rightP2': "En nuestros viajes por México aprendimos un montón sobre tacos, y en todos lados nos recibieron con los brazos abiertos. Eso nos marcó hasta hoy. Esa misma calidez es la que queremos compartir con ustedes en cada taco.",
      'meta.title': "Tacos en Düsseldorf – Los Chinitos | Pop-ups y catering",
      'meta.description': "Tacos en Düsseldorf inspirados en las taquerías de la Ciudad de México: pastor, suadero y ribeye gaonera en pop-ups y catering para tu evento. Sin Tex-Mex.",
      'story.imgAlt': "Los tres fundadores de Los Chinitos, Toni, Linh y Mato, frente a un resplandor de rayos rojos con el texto “We are Los Chinitos”",
      'img.hero': 'Tres tacos vistos desde arriba en platos de porcelana con borde rojo: al pastor, ribeye gaonera y suadero con cebolla, cilantro, salsa y limón – Los Chinitos, tacos en Düsseldorf',
      'img.pastor': 'Taco al pastor de Los Chinitos: carne marinada en tortilla de maíz con cebolla, cilantro, salsa verde y limón',
      'img.suadero': "Taco de suadero de Los Chinitos: carne de res suave y finamente picada en tortilla de maíz con cebolla, cilantro, salsa y limón",
      'img.ribeye': 'Taco de ribeye gaonera de Los Chinitos: ribeye en tortilla de maíz con guacamole, salsa roja, cebolla asada y limón',
      'img.emblem': 'Emblema de Los Chinitos: un trompo con piña rodeado de rayos',
      'img.igPost': 'Publicación de Instagram de Los Chinitos',

      'products.h': "Lo que<br />preparamos",
      'products.galleryAria': "Nuestro menú",
      'products.soon': 'Muy pronto',

      'events.h': "Dónde nos<br />ponemos la<br />próxima vez",
      'events.p': "Las fechas nuevas salen primero en Instagram.",
      'events.follow': 'Sigue a @tacosloschinitos',
      'events.empty': "Estamos armando las próximas paradas. En cuanto estén confirmadas, verás el lugar y la fecha aquí y en Instagram.",
      'events.route': 'Cómo llegar',
      'events.popup': 'Pop-up',
      'events.tbaPlace': 'Lugar por confirmar',
      'events.tbaDate': 'Fecha por anunciar',
      'events.timeFrom': 'desde las {s} h',
      'events.timeRange': '{s}–{e} h',
      'events.cat.ticket-menu': 'Menú con boleto',
      'events.cat.market-stall': 'Puesto de mercado',

      'inquiry.h': "Cotiza tu<br />taquiza",
      'inquiry.p': "Taquizas y catering para tu evento de empresa, boda o cumpleaños: nosotros llevamos los tacos. Cuéntanos de tu evento y te respondemos en menos de 48 horas.",
      'form.name': 'Nombre *',
      'form.namePh': 'Tu nombre',
      'form.nameErr': 'Por favor, escribe tu nombre.',
      'form.email': 'Correo *',
      'form.emailPh': 'tu@correo.com',
      'form.emailErr': "Por favor, escribe un correo válido.",
      'form.phone': 'Teléfono',
      'form.phonePh': "Por si tenemos dudas (opcional)",
      'form.occasion': "Tipo de evento",
      'form.select': 'Selecciona una opción',
      'form.optCompany': 'Evento de empresa',
      'form.optWedding': 'Boda',
      'form.optBirthday': 'Cumpleaños',
      'form.optOther': 'Otro',
      'form.date': 'Fecha *',
      'form.dateErr': "Por favor, elige una fecha a partir de hoy.",
      'form.guests': "Número de invitados *",
      'form.guestsPh': 'p. ej. 60',
      'form.guestsErr': "Por favor, indica el número de invitados.",
      'form.message': 'Mensaje *',
      'form.messagePh': "Lugar, horario, peticiones especiales …",
      'form.messageErr': "Cuéntanos tantito de qué se trata.",
      'form.summary': "Por favor, llena los campos marcados.",
      'form.submit': 'Enviar',
      'form.sending': 'Enviando…',
      'form.sent': 'Enviado',
      'form.errorHtml': "Híjole, algo salió mal. Escríbenos directo a <a href=\"mailto:info@loschinitos.de\">info@loschinitos.de</a>.",

      'faq.h': '¿Preguntas? Respuestas.',
      'faq.intro': "Lo básico sobre taquizas y pop-ups. ¿No viene tu duda? Mándanos mensaje.",
      'faq.igTitle': 'Mensaje por Instagram',
      'faq.igSub': '@tacosloschinitos',
      'faq.mailSub': 'Respuesta en menos de 48 horas',
      'faq.q1': '¿Dónde puedo comer sus tacos en Düsseldorf?',
      'faq.a1': "En nuestros pop-ups, que van cambiando de lugar en Düsseldorf. Las próximas fechas están arriba, en “Dónde nos ponemos la próxima vez”, y salen primero en Instagram. Y si es para tu fiesta, vamos hasta donde estés.",
      'faq.q2': "¿Para qué eventos los puedo contratar?",
      'faq.a2': "Eventos de empresa, bodas, cumpleaños, festivales y fiestas privadas. Cuéntanos qué traes en mente y vemos qué es lo que mejor le queda.",
      'faq.q3': "¿Desde cuántas personas conviene una taquiza?",
      'faq.a3': "No tenemos un mínimo fijo. Dinos cuántos invitados van a ser y te proponemos lo que mejor funcione.",
      'faq.q4': "¿Hasta dónde llegan?",
      'faq.a4': "Nuestra base es Düsseldorf y con gusto vamos a los alrededores. Si es más lejos, pregúntanos y vemos juntos el traslado y los costos.",
      'faq.q5': '¿Qué necesitan en el lugar del evento?',
      'faq.a5': "Un espacio plano para el puesto, una toma de corriente y acceso para descargar. Las medidas exactas las vemos contigo antes.",
      'faq.q6': '¿Tienen opciones vegetarianas?',
      'faq.a6': "Sí. Dinos en tu solicitud cuántos invitados son vegetarianos y lo consideramos desde el principio.",
      'faq.q7': "¿Cómo le hago para contratarlos?",
      'faq.a7': "Llenas el formulario y en menos de 48 horas te contactamos con nuestras dudas y una cotización. Si todo cuadra, te confirmamos la fecha por escrito.",

      'social.h': 'Desde nuestras<br />redes',
      'social.p': "Échale un ojo a lo que andamos haciendo en Instagram: @tacosloschinitos.",
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
      'footer.cta': "Cotiza tu taquiza →",
      'footer.emailCopied': 'Correo copiado',

      'thanks.title': "Gracias – Los Chinitos",
      'thanks.p': "Ya recibimos tu solicitud. Te respondemos en menos de 48 horas.",
      'thanks.back': 'Volver al inicio →',
      'legal.back': '← Volver',
      'meta.ogImageAlt': "Emblema y logotipo de Los Chinitos sobre fondo rojo",
      'meta.orgDescription': "Tacos en Düsseldorf inspirados en las taquerías de la Ciudad de México. Los Chinitos hace pop-ups de tacos en distintos puntos de Düsseldorf y taquizas para eventos de empresa, bodas y cumpleaños. Nada de Tex-Mex, solo un ligero toque “Chinitos”. En el menú: tacos al pastor, suadero y ribeye gaonera.",
      'meta.cuisine': "Mexicana",
      'meta.knowsAbout': "Tacos|Tacos al pastor|Suadero|Comida mexicana|Comida callejera mexicana|Taquizas|Catering en Düsseldorf",
      'img.reel': "Reel de Los Chinitos en Instagram",
      'events.ldName': "Pop-up de tacos de Los Chinitos",
      'events.ldAt': " en ",
      'events.ldDesc': "Tacos inspirados en las taquerías de la Ciudad de México: pastor, suadero, ribeye gaonera. Sin Tex-Mex.",
      'hero.kicker': "Pop-ups y taquizas en Düsseldorf",
      'inquiry.step1': "Llenas el formulario",
      'inquiry.step2': "Te mandamos cotización en menos de 48 horas",
      'inquiry.step3': "Apartamos la fecha",
      'form.privacy': "Solo usamos tus datos para responder a tu solicitud. Más info en el <a href=\"/datenschutz.html\">aviso de privacidad</a>.",
      'thanks.ig': "Síguenos en Instagram"
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
