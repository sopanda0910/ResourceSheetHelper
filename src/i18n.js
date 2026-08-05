// Language support for the screen and the printed sheet.
//
// English is the source of truth. Spanish covers every string a client could
// see, plus the staff-facing screen so a bilingual volunteer can work in it.
//
// TRANSLATION NOTE: the Spanish here has not been checked by a native
// speaker. It uses "usted" throughout and North Texas vocabulary ("renta",
// "estampillas de comida"). Before this is handed to real clients, someone
// fluent should read it -- especially the domestic-violence wording, where a
// clumsy phrase could cost someone their trust or their safety.

import { RESOURCES_ES } from './resources.es.js'

export const LANGUAGES = [
  { id: 'en', label: 'English' },
  { id: 'es', label: 'Español' },
]

export const STRINGS = {
  en: {
    // --- screen chrome ---
    appTitle: 'Resource Sheet Maker',
    appPlace: 'McKinney, Texas',
    lede: 'Check the boxes that fit the person you are helping. Then press the big green button to make a sheet you can print and hand to them.',
    optional: 'optional',

    qLanguage: 'What language should the sheet be in?',
    qLanguageHelp: 'This changes this screen and the printed sheet. Ask the person which they would rather read.',
    qName: 'Their first name',
    qNameHelp: 'This just prints at the top of the sheet. You can leave it blank.',
    qNamePlaceholder: 'For example: Maria',
    qResidence: 'Where do they live?',
    qResidenceHelp: 'Some places only help people from certain towns. Answering this keeps them off the sheet so nobody gets sent across town to be turned away. If you are not sure, leave the first one picked.',
    qSituation: 'What describes them?',
    qSituationHelp: 'Check every one that fits. It is fine to check none.',
    qNeeds: 'What do they need?',
    qNeedsHelp: 'Check every one that fits.',
    qNotes: 'Anything to add?',
    qNotesHelp: 'Write anything you want printed at the bottom of their sheet. For example, the name of the person they should ask for.',
    qNotesPlaceholder: 'For example: Ask for Dana at the front desk on Tuesday.',

    makeSheet: 'Make the resource sheet',
    needOneBox: 'Check at least one box above to continue.',
    matchedOne: '1 place matched.',
    matchedMany: '{n} places matched.',

    goBack: '← Go back and change',
    resultTitleOne: '1 place to send them to',
    resultTitleMany: '{n} places to send them to',
    sheetFor: 'Sheet for {name}',
    downloadPdf: 'Download the PDF',
    printNow: 'Print it now',
    startOver: 'Start over',

    excludedOne: '1 place was left off this sheet',
    excludedMany: '{n} places were left off this sheet',
    excludedBecause: 'because they do not serve people from {where}:',
    excludedOverride: 'If you know they would still be seen, change the answer to "Not sure" and the sheet will include everything.',
    limitedArea: 'limited service area',

    safetyTitle: 'Please read this first.',
    safetyScreen: 'If someone at home might see this paper and that could put them in danger, offer to hold it here, or help them write down just the phone numbers. Their safety comes first.',
    safetyPdf: 'If someone at home might see this paper and that could put you in danger, ask a staff member to hold it here for you, or write down just the phone numbers on something small. Your safety comes first.',

    emergencyHead: 'If you need help right now',
    placesHead: 'Places that can help',
    placesHeadPdf: 'Places that can help you',
    visitNotes: 'Notes from your visit',
    directions: 'directions',

    labelPhone: 'Phone',
    labelAlso: 'Also',
    labelWhere: 'Where',
    labelWhen: 'When',
    labelNote: 'Good to know',
    headSay: 'What to say when you call',
    headSteps: 'Step by step',
    headBring: 'Bring with you',

    footVerified: 'Phone numbers and addresses were checked on {date}. Hours change often — always call before sending someone across town.',
    footPrivacy: 'Nothing typed about a client is saved or sent anywhere. It disappears when you press Start over or close the page.',
    staffTools: 'Staff Tools — add or edit the places on this list',

    // --- printed sheet ---
    pdfTitle: 'Your Resource Sheet',
    pdfPreparedFor: 'Prepared for: {name}',
    pdfPrinted: 'Printed {date}',
    pdfSafetyTitle: 'Please read this first',
    pdfMapTitle: 'Where these places are',
    pdfYouAreHere: '= YOU ARE HERE',
    pdfHomeName: '(The Samaritan Inn)',
    pdfPinLegend: '= the places listed below',
    pdfMapCaption: 'Dashed rings show distance from the Inn. Straight-line positions - driving distance will be longer.',
    pdfRoadCredit: 'Roads (c) OpenStreetMap contributors',
    pdfDirections: 'Tap here for directions from The Samaritan Inn',
    pdfFooter: 'Please call before you go - hours change. Information checked {date}.',
    pdfPage: 'Page {n} of {total}',
    pdfMile: 'mile',
    pdfMiles: 'miles',
    pdfMiShort: 'mi',
    distanceOf: '{dist} of The Samaritan Inn',
    aboutMiles: 'about {n} {unit} {dir}',
    youAreHereShort: 'you are here',
    translationNote: '',
  },

  es: {
    // --- screen chrome ---
    appTitle: 'Generador de Hoja de Recursos',
    appPlace: 'McKinney, Texas',
    lede: 'Marque las casillas que describan a la persona que está ayudando. Después presione el botón verde grande para crear una hoja que puede imprimir y entregarle.',
    optional: 'opcional',

    qLanguage: '¿En qué idioma debe estar la hoja?',
    qLanguageHelp: 'Esto cambia esta pantalla y la hoja impresa. Pregúntele a la persona en qué idioma prefiere leer.',
    qName: 'Su nombre',
    qNameHelp: 'Solo se imprime arriba de la hoja. Puede dejarlo en blanco.',
    qNamePlaceholder: 'Por ejemplo: María',
    qResidence: '¿Dónde vive?',
    qResidenceHelp: 'Algunos lugares solo ayudan a personas de ciertas ciudades. Contestar esto los quita de la hoja para que nadie cruce la ciudad y lo rechacen. Si no está seguro, deje marcada la primera opción.',
    qSituation: '¿Qué la describe?',
    qSituationHelp: 'Marque todas las que apliquen. Está bien no marcar ninguna.',
    qNeeds: '¿Qué necesita?',
    qNeedsHelp: 'Marque todas las que apliquen.',
    qNotes: '¿Algo más que agregar?',
    qNotesHelp: 'Escriba lo que quiera que se imprima al final de su hoja. Por ejemplo, el nombre de la persona por quien debe preguntar.',
    qNotesPlaceholder: 'Por ejemplo: Pregunte por Dana en la recepción el martes.',

    makeSheet: 'Crear la hoja de recursos',
    needOneBox: 'Marque al menos una casilla para continuar.',
    matchedOne: '1 lugar encontrado.',
    matchedMany: '{n} lugares encontrados.',

    goBack: '← Regresar y cambiar',
    resultTitleOne: '1 lugar a donde puede ir',
    resultTitleMany: '{n} lugares a donde puede ir',
    sheetFor: 'Hoja para {name}',
    downloadPdf: 'Descargar el PDF',
    printNow: 'Imprimir ahora',
    startOver: 'Empezar de nuevo',

    excludedOne: '1 lugar se quitó de esta hoja',
    excludedMany: '{n} lugares se quitaron de esta hoja',
    excludedBecause: 'porque no atienden a personas de {where}:',
    excludedOverride: 'Si usted sabe que de todos modos la atenderían, cambie la respuesta a "No estoy seguro" y la hoja incluirá todo.',
    limitedArea: 'área de servicio limitada',

    safetyTitle: 'Por favor lea esto primero.',
    safetyScreen: 'Si alguien en su casa podría ver este papel y eso la pondría en peligro, ofrézcase a guardarlo aquí, o ayúdele a anotar solo los números de teléfono. Su seguridad es lo primero.',
    safetyPdf: 'Si alguien en su casa podría ver este papel y eso la pondría en peligro, pídale a un miembro del personal que se lo guarde aquí, o anote solo los números de teléfono en algo pequeño. Su seguridad es lo primero.',

    emergencyHead: 'Si necesita ayuda ahora mismo',
    placesHead: 'Lugares que pueden ayudarle',
    placesHeadPdf: 'Lugares que pueden ayudarle',
    visitNotes: 'Notas de su visita',
    directions: 'cómo llegar',

    labelPhone: 'Teléfono',
    labelAlso: 'También',
    labelWhere: 'Dónde',
    labelWhen: 'Cuándo',
    labelNote: 'Bueno saber',
    headSay: 'Qué decir cuando llame',
    headSteps: 'Paso a paso',
    headBring: 'Lleve con usted',

    footVerified: 'Los teléfonos y las direcciones se verificaron el {date}. Los horarios cambian seguido — siempre llame antes de mandar a alguien al otro lado de la ciudad.',
    footPrivacy: 'Nada de lo que se escribe sobre un cliente se guarda ni se envía a ningún lado. Desaparece cuando presiona Empezar de nuevo o cierra la página.',
    staffTools: 'Herramientas del Personal — agregar o editar los lugares de esta lista',

    // --- printed sheet ---
    pdfTitle: 'Su Hoja de Recursos',
    pdfPreparedFor: 'Preparada para: {name}',
    pdfPrinted: 'Impresa el {date}',
    pdfSafetyTitle: 'Por favor lea esto primero',
    pdfMapTitle: 'Dónde quedan estos lugares',
    pdfYouAreHere: '= USTED ESTA AQUI',
    pdfHomeName: '(The Samaritan Inn)',
    pdfPinLegend: '= los lugares de la lista',
    pdfMapCaption: 'Los círculos punteados muestran la distancia desde el Inn. Son posiciones en línea recta - manejando es más lejos.',
    pdfRoadCredit: 'Calles (c) colaboradores de OpenStreetMap',
    pdfDirections: 'Toque aquí para llegar desde The Samaritan Inn',
    pdfFooter: 'Por favor llame antes de ir - los horarios cambian. Información verificada el {date}.',
    pdfPage: 'Página {n} de {total}',
    pdfMile: 'milla',
    pdfMiles: 'millas',
    pdfMiShort: 'mi',
    distanceOf: '{dist} de The Samaritan Inn',
    aboutMiles: 'a unas {n} {unit} al {dir}',
    youAreHereShort: 'usted está aquí',
    translationNote: 'Traducción al español pendiente de revisión por un hablante nativo.',
  },
}

// Spanish labels for the answer choices, keyed by the same ids the matching
// logic uses. Nothing here changes which resources get picked.
export const LABELS = {
  es: {
    needs: {
      food: 'Comida',
      shelter: 'Un lugar donde quedarse',
      rentutility: 'Ayuda con la renta o los biles',
      medical: 'Un doctor',
      dental: 'Un dentista',
      mental: 'Alguien con quien hablar',
      id: 'Identificación o papeles',
      legal: 'Ayuda legal',
      clothing: 'Ropa o cosas para la casa',
      benefits: 'Estampillas de comida / Medicaid',
      transport: 'Transporte',
    },
    situations: {
      senior: 'Persona mayor (60 años o más)',
      safety: 'No está segura en su casa / abuso',
      family: 'Trae niños con ella',
      veteran: 'Veterano',
      youth: 'Joven menor de 22 años',
      disability: 'Tiene una discapacidad',
      homeless: 'No tiene dónde dormir esta noche',
    },
    residences: {
      unknown: 'No estoy seguro, o no tiene dirección',
      mckinney: 'McKinney',
      collin: 'Otro lugar del condado de Collin',
      plano: 'Plano',
      wylie: 'Wylie',
      outside: 'Fuera del condado de Collin',
    },
    categories: {
      'Shelter & housing': 'Refugio y vivienda',
      Food: 'Comida',
      'Food & bills': 'Comida y biles',
      'Safety from abuse': 'Seguridad ante el abuso',
      'Mental health': 'Salud mental',
      'Rent & bills': 'Renta y biles',
      'Food, bills & clothing': 'Comida, biles y ropa',
      'Clothing & household': 'Ropa y cosas para la casa',
      Medical: 'Médico',
      'Medical & dental': 'Médico y dental',
      'ID & papers': 'Identificación y papeles',
      'Legal help': 'Ayuda legal',
      'Senior services': 'Servicios para personas mayores',
      Transportation: 'Transporte',
      'Youth services': 'Servicios para jóvenes',
      'Veteran services': 'Servicios para veteranos',
      'Food stamps & Medicaid': 'Estampillas de comida y Medicaid',
      'Other help': 'Otra ayuda',
    },
  },
}

export const EMERGENCY_ES = {
  911: { name: 'Emergencia', when: 'Está en peligro ahora mismo, o alguien está herido' },
  988: {
    name: 'Línea de Crisis y Suicidio',
    when: 'Está pensando en hacerse daño, o está en una crisis de salud mental. Gratis, 24 horas',
  },
  211: {
    name: '2-1-1 Texas',
    when: 'No sabe a quién llamar. Pueden buscar cualquier tipo de ayuda en Texas. Gratis, 24 horas',
  },
}

export const COMPASS_ES = {
  north: 'norte',
  northeast: 'noreste',
  east: 'este',
  southeast: 'sureste',
  south: 'sur',
  southwest: 'suroeste',
  west: 'oeste',
  northwest: 'noroeste',
}

// Spanish weekday and month abbreviations used inside hours strings.
const DAY_MAP = [
  [/\bMonday\b/g, 'lunes'], [/\bTuesday\b/g, 'martes'], [/\bWednesday\b/g, 'miércoles'],
  [/\bThursday\b/g, 'jueves'], [/\bFriday\b/g, 'viernes'], [/\bSaturday\b/g, 'sábado'],
  [/\bSunday\b/g, 'domingo'],
  [/\bMon\b/g, 'lun'], [/\bTue\b/g, 'mar'], [/\bWed\b/g, 'mié'], [/\bThu\b/g, 'jue'],
  [/\bFri\b/g, 'vie'], [/\bSat\b/g, 'sáb'], [/\bSun\b/g, 'dom'],
]

// Falls back to the English hours if no Spanish version was written, but at
// least translates the day names so it is readable.
export function translateHours(hours, lang) {
  if (lang !== 'es' || !hours) return hours
  let out = hours
  for (const [re, es] of DAY_MAP) out = out.replace(re, es)
  return out
    .replace(/\bClosed\b/g, 'Cerrado')
    .replace(/\bclosed\b/g, 'cerrado')
    .replace(/\bCall for hours\b/gi, 'Llame para preguntar el horario')
    .replace(/\bCall for an appointment\b/gi, 'Llame para hacer una cita')
    .replace(/\bevery day\b/gi, 'todos los días')
    .replace(/(\d+)\s*hours a day/gi, '$1 horas al día')
    .replace(/\bweekends\b/gi, 'fines de semana')
    .replace(/\bweekdays\b/gi, 'días entre semana')
}

// Returns a copy of a resource with its words swapped for the chosen
// language. Facts (phone, coords, needs) are never touched -- only text.
//
// Order of preference:
//   1. `resource.es`      -- Spanish typed into Staff Tools for this entry
//   2. RESOURCES_ES[id]   -- Spanish shipped with the app
//   3. the English text, marked `untranslated` so the UI can flag it
export function localizeResource(resource, lang) {
  if (lang !== 'es') return resource

  const base = {
    ...resource,
    category: label(lang, 'categories', resource.category, resource.category),
    hours: translateHours(resource.hours, lang),
  }

  const es = resource.es || RESOURCES_ES[resource.id]
  if (!es) return { ...base, untranslated: true }

  return {
    ...base,
    ...Object.fromEntries(Object.entries(es).filter(([, v]) => v !== undefined && v !== '')),
    hours: es.hours || base.hours,
  }
}

export function localizeEmergency(list, lang) {
  if (lang !== 'es') return list
  return list.map((e) => ({ ...e, ...(EMERGENCY_ES[e.phone] || {}) }))
}

export function t(lang, key, vars) {
  const table = STRINGS[lang] || STRINGS.en
  let s = table[key] ?? STRINGS.en[key] ?? key
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v))
  return s
}

// Label for an answer choice, falling back to the English label.
export function label(lang, kind, id, fallback) {
  return LABELS[lang]?.[kind]?.[id] ?? fallback
}
