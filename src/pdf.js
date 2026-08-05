import { jsPDF } from 'jspdf'
import { EMERGENCY, HOME_BASE, VERIFIED_ON, directionsUrl } from './resources.js'

// Letter page in points.
const PAGE_W = 612
const PAGE_H = 792
const MARGIN = 48
const CONTENT_W = PAGE_W - MARGIN * 2

const INK = [17, 24, 39]
const MUTED = [90, 98, 112]
const RULE = [200, 205, 214]
const BRAND = [21, 74, 120]
const ALERT = [155, 28, 28]

export function buildResourceSheet({ firstName, resources, notes, includeSafetyWarning }) {
  const doc = new jsPDF({ unit: 'pt', format: 'letter' })
  let y = 0

  // --- helpers -------------------------------------------------------------

  const setFont = (size, style = 'normal', color = INK) => {
    doc.setFont('helvetica', style)
    doc.setFontSize(size)
    doc.setTextColor(color[0], color[1], color[2])
  }

  // Reserve vertical space; start a new page if this block would not fit.
  const ensure = (needed) => {
    if (y + needed > PAGE_H - MARGIN) {
      doc.addPage()
      y = MARGIN
      return true
    }
    return false
  }

  // Draw wrapped text and advance y. Returns the height used.
  const write = (text, { size = 11, style = 'normal', color = INK, lead = 14, indent = 0 } = {}) => {
    if (!text) return 0
    setFont(size, style, color)
    const lines = doc.splitTextToSize(String(text), CONTENT_W - indent)
    // Keep the first two lines with whatever came before them.
    ensure(Math.min(lines.length, 2) * lead)
    for (const line of lines) {
      ensure(lead)
      doc.text(line, MARGIN + indent, y)
      y += lead
    }
    return lines.length * lead
  }

  // Label in bold, value in normal, on one wrapped block.
  const labelled = (label, value, opts = {}) => {
    if (!value) return
    const size = opts.size || 11
    const lead = opts.lead || 14
    setFont(size, 'bold')
    const labelText = label + ': '
    const labelW = doc.getTextWidth(labelText)
    setFont(size, 'normal')
    const lines = doc.splitTextToSize(String(value), CONTENT_W - 16 - labelW)

    ensure(lead)
    setFont(size, 'bold', INK)
    doc.text(labelText, MARGIN + 16, y)
    setFont(size, 'normal', INK)
    doc.text(lines[0], MARGIN + 16 + labelW, y)
    y += lead
    for (let i = 1; i < lines.length; i++) {
      ensure(lead)
      doc.text(lines[i], MARGIN + 16 + labelW, y)
      y += lead
    }
  }

  // --- title bar -----------------------------------------------------------

  doc.setFillColor(BRAND[0], BRAND[1], BRAND[2])
  doc.rect(0, 0, PAGE_W, 74, 'F')
  setFont(20, 'bold', [255, 255, 255])
  doc.text('Your Resource Sheet', MARGIN, 34)
  setFont(11, 'normal', [214, 228, 240])
  doc.text(`${HOME_BASE.name}  ·  ${HOME_BASE.address}  ·  ${HOME_BASE.phone}`, MARGIN, 54)
  y = 74 + 26

  if (firstName) {
    setFont(13, 'bold', INK)
    doc.text(`Prepared for: ${firstName}`, MARGIN, y)
    y += 18
  }
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  setFont(10, 'normal', MUTED)
  doc.text(`Printed ${today}`, MARGIN, y)
  y += 20

  // --- safety warning (domestic violence) ----------------------------------

  if (includeSafetyWarning) {
    const msg =
      'Before you take this paper with you: if someone at home might see it and that could put you in danger, ask a staff member to hold it here for you, or write only the phone numbers on something small. Your safety comes first.'
    setFont(10.5, 'normal', ALERT)
    const lines = doc.splitTextToSize(msg, CONTENT_W - 28)
    const boxH = lines.length * 13 + 30

    ensure(boxH)
    doc.setFillColor(253, 242, 242)
    doc.setDrawColor(ALERT[0], ALERT[1], ALERT[2])
    doc.setLineWidth(1)
    doc.rect(MARGIN, y, CONTENT_W, boxH, 'FD')

    setFont(11, 'bold', ALERT)
    doc.text('Please read this first', MARGIN + 14, y + 19)
    setFont(10.5, 'normal', ALERT)
    let ty = y + 34
    for (const line of lines) {
      doc.text(line, MARGIN + 14, ty)
      ty += 13
    }
    y += boxH + 20
  }

  // --- emergency numbers ---------------------------------------------------

  const emergencyRows = EMERGENCY.length
  ensure(46 + emergencyRows * 30)

  doc.setFillColor(243, 246, 250)
  doc.setDrawColor(RULE[0], RULE[1], RULE[2])
  doc.setLineWidth(1)
  const emgTop = y
  const emgH = 34 + emergencyRows * 30
  doc.rect(MARGIN, emgTop, CONTENT_W, emgH, 'FD')

  setFont(12.5, 'bold', BRAND)
  doc.text('If you need help right now', MARGIN + 14, y + 22)
  y += 40

  for (const item of EMERGENCY) {
    setFont(17, 'bold', INK)
    doc.text(item.phone, MARGIN + 14, y + 4)
    setFont(11, 'bold', INK)
    doc.text(item.name, MARGIN + 78, y - 3)
    setFont(9.5, 'normal', MUTED)
    const whenLines = doc.splitTextToSize(item.when, CONTENT_W - 100)
    doc.text(whenLines[0], MARGIN + 78, y + 9)
    y += 30
  }
  y = emgTop + emgH + 24

  // --- resources -----------------------------------------------------------

  setFont(14, 'bold', BRAND)
  ensure(30)
  doc.text('Places that can help you', MARGIN, y)
  y += 8
  doc.setDrawColor(BRAND[0], BRAND[1], BRAND[2])
  doc.setLineWidth(2)
  doc.line(MARGIN, y, MARGIN + CONTENT_W, y)
  y += 22

  let lastCategory = null

  resources.forEach((r, index) => {
    // Keep a card's heading with at least a few lines of its body.
    ensure(96)

    if (r.category !== lastCategory) {
      ensure(34)
      setFont(11, 'bold', MUTED)
      doc.text(r.category.toUpperCase(), MARGIN, y)
      y += 16
      lastCategory = r.category
    }

    const cardTop = y

    setFont(13.5, 'bold', INK)
    const nameLines = doc.splitTextToSize(`${index + 1}. ${r.name}`, CONTENT_W - 16)
    for (const line of nameLines) {
      ensure(17)
      doc.text(line, MARGIN + 16, y)
      y += 17
    }
    y += 2

    write(r.what, { size: 11, lead: 14, indent: 16 })
    y += 4

    labelled('Phone', r.phoneLabel ? `${r.phone}  (${r.phoneLabel})` : r.phone, { size: 12 })
    if (r.altPhone) {
      labelled('Also', r.altPhoneLabel ? `${r.altPhone}  (${r.altPhoneLabel})` : r.altPhone, { size: 11 })
    }
    labelled('Where', r.address)
    labelled('When', r.hours)
    if (r.notes) labelled('Good to know', r.notes)

    // Real turn-by-turn directions, if someone has the file on a phone.
    const url = directionsUrl(r)
    if (url) {
      ensure(14)
      setFont(9.5, 'normal', BRAND)
      doc.textWithLink('Tap here for directions from The Samaritan Inn', MARGIN + 16, y, { url })
      y += 14
    }

    // Left rule marking the card.
    doc.setDrawColor(RULE[0], RULE[1], RULE[2])
    doc.setLineWidth(3)
    doc.line(MARGIN + 4, cardTop - 12, MARGIN + 4, y - 10)

    y += 16
  })

  // --- caseworker notes ----------------------------------------------------

  if (notes && notes.trim()) {
    ensure(70)
    y += 6
    setFont(12, 'bold', BRAND)
    doc.text('Notes from your visit', MARGIN, y)
    y += 18
    write(notes.trim(), { size: 11, lead: 14, indent: 16 })
    y += 10
  }

  // --- footer on every page ------------------------------------------------

  const pageCount = doc.getNumberOfPages()
  for (let p = 1; p <= pageCount; p++) {
    doc.setPage(p)
    doc.setDrawColor(RULE[0], RULE[1], RULE[2])
    doc.setLineWidth(0.5)
    doc.line(MARGIN, PAGE_H - 46, PAGE_W - MARGIN, PAGE_H - 46)
    setFont(8.5, 'normal', MUTED)
    doc.text(
      `Please call before you go - hours change. Information checked ${VERIFIED_ON}.`,
      MARGIN,
      PAGE_H - 32
    )
    doc.text(`Page ${p} of ${pageCount}`, PAGE_W - MARGIN, PAGE_H - 32, { align: 'right' })
  }

  return doc
}

export function downloadResourceSheet(options) {
  const doc = buildResourceSheet(options)
  const stamp = new Date().toISOString().slice(0, 10)
  const who = options.firstName ? `-${options.firstName.replace(/[^a-z0-9]/gi, '')}` : ''
  doc.save(`resource-sheet${who}-${stamp}.pdf`)
}

export function printResourceSheet(options) {
  const doc = buildResourceSheet(options)
  doc.autoPrint()
  const url = doc.output('bloburl')
  const win = window.open(url, '_blank')
  if (!win) {
    // Popup blocked - fall back to downloading it instead.
    downloadResourceSheet(options)
    return false
  }
  return true
}
