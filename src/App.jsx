import { useMemo, useState } from 'react'
import {
  EMERGENCY,
  HOME_BASE,
  NEEDS,
  SITUATIONS,
  VERIFIED_ON,
  directionsUrl,
  matchResources,
} from './resources.js'
import { downloadResourceSheet, printResourceSheet } from './pdf.js'

function ChoiceGrid({ options, selected, onToggle, name }) {
  return (
    <div className="grid" role="group" aria-label={name}>
      {options.map((opt) => {
        const isOn = selected.includes(opt.id)
        return (
          <button
            key={opt.id}
            type="button"
            className={isOn ? 'choice on' : 'choice'}
            aria-pressed={isOn}
            onClick={() => onToggle(opt.id)}
          >
            <span className="box" aria-hidden="true">
              {isOn ? '✓' : ''}
            </span>
            <span className="choice-label">{opt.label}</span>
          </button>
        )
      })}
    </div>
  )
}

export default function App() {
  const [screen, setScreen] = useState('form')
  const [firstName, setFirstName] = useState('')
  const [situations, setSituations] = useState([])
  const [needs, setNeeds] = useState([])
  const [notes, setNotes] = useState('')

  const toggle = (list, setList) => (id) =>
    setList(list.includes(id) ? list.filter((x) => x !== id) : [...list, id])

  const resources = useMemo(() => matchResources(needs, situations), [needs, situations])
  const includeSafetyWarning = situations.includes('safety')
  const nothingPicked = needs.length === 0 && situations.length === 0

  const pdfOptions = { firstName: firstName.trim(), resources, notes, includeSafetyWarning }

  const startOver = () => {
    setFirstName('')
    setSituations([])
    setNeeds([])
    setNotes('')
    setScreen('form')
    window.scrollTo(0, 0)
  }

  const goToResults = () => {
    setScreen('results')
    window.scrollTo(0, 0)
  }

  return (
    <div className="page">
      <header className="masthead">
        <div className="masthead-inner">
          <h1>Resource Sheet Maker</h1>
          <p>{HOME_BASE.name} · McKinney, Texas</p>
        </div>
      </header>

      <main className="wrap">
        {screen === 'form' ? (
          <>
            <p className="lede">
              Check the boxes that fit the person you are helping. Then press the big green
              button to make a sheet you can print and hand to them.
            </p>

            <section className="card">
              <h2>
                <span className="step">1</span> Their first name
                <span className="optional">optional</span>
              </h2>
              <p className="help">This just prints at the top of the sheet. You can leave it blank.</p>
              <input
                className="text-input"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="For example: Maria"
                autoComplete="off"
              />
            </section>

            <section className="card">
              <h2>
                <span className="step">2</span> What describes them?
              </h2>
              <p className="help">Check every one that fits. It is fine to check none.</p>
              <ChoiceGrid
                options={SITUATIONS}
                selected={situations}
                onToggle={toggle(situations, setSituations)}
                name="What describes them"
              />
            </section>

            <section className="card">
              <h2>
                <span className="step">3</span> What do they need?
              </h2>
              <p className="help">Check every one that fits.</p>
              <ChoiceGrid
                options={NEEDS}
                selected={needs}
                onToggle={toggle(needs, setNeeds)}
                name="What do they need"
              />
            </section>

            <section className="card">
              <h2>
                <span className="step">4</span> Anything to add?
                <span className="optional">optional</span>
              </h2>
              <p className="help">
                Write anything you want printed at the bottom of their sheet. For example, the
                name of the person they should ask for.
              </p>
              <textarea
                className="text-input"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="For example: Ask for Dana at the front desk on Tuesday."
              />
            </section>

            <div className="actions">
              <button
                type="button"
                className="btn primary big"
                onClick={goToResults}
                disabled={nothingPicked}
              >
                Make the resource sheet
              </button>
              {nothingPicked && (
                <p className="hint">Check at least one box above to continue.</p>
              )}
              {!nothingPicked && (
                <p className="hint">
                  {resources.length} {resources.length === 1 ? 'place' : 'places'} matched.
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="result-head">
              <button type="button" className="btn ghost" onClick={() => setScreen('form')}>
                ← Go back and change
              </button>
              <h2 className="result-title">
                {resources.length} {resources.length === 1 ? 'place' : 'places'} to send them to
              </h2>
              {firstName.trim() && <p className="for-who">Sheet for {firstName.trim()}</p>}
            </div>

            <div className="actions sticky">
              <button
                type="button"
                className="btn primary big"
                onClick={() => downloadResourceSheet(pdfOptions)}
              >
                Download the PDF
              </button>
              <button
                type="button"
                className="btn secondary big"
                onClick={() => printResourceSheet(pdfOptions)}
              >
                Print it now
              </button>
              <button type="button" className="btn ghost" onClick={startOver}>
                Start over
              </button>
            </div>

            {includeSafetyWarning && (
              <div className="safety">
                <strong>Please read this first.</strong> If someone at home might see this paper
                and that could put them in danger, offer to hold it here, or help them write down
                just the phone numbers. Their safety comes first.
              </div>
            )}

            <div className="preview">
              <h3 className="preview-head">If you need help right now</h3>
              <ul className="emergency">
                {EMERGENCY.map((e) => (
                  <li key={e.phone}>
                    <span className="big-number">{e.phone}</span>
                    <span>
                      <strong>{e.name}</strong>
                      <br />
                      <span className="muted">{e.when}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <h3 className="preview-head">Places that can help</h3>
              {resources.map((r, i) => (
                <article className="resource" key={r.id}>
                  <div className="resource-cat">{r.category}</div>
                  <h4>
                    {i + 1}. {r.name}
                  </h4>
                  <p>{r.what}</p>
                  <dl>
                    <dt>Phone</dt>
                    <dd>
                      <strong className="phone">{r.phone}</strong>
                      {r.phoneLabel ? ` (${r.phoneLabel})` : ''}
                      {r.altPhone && (
                        <>
                          <br />
                          {r.altPhone}
                          {r.altPhoneLabel ? ` (${r.altPhoneLabel})` : ''}
                        </>
                      )}
                    </dd>
                    <dt>Where</dt>
                    <dd>
                      {r.address}
                      {directionsUrl(r) && (
                        <>
                          {' '}
                          <a href={directionsUrl(r)} target="_blank" rel="noreferrer">
                            directions
                          </a>
                        </>
                      )}
                    </dd>
                    <dt>When</dt>
                    <dd>{r.hours}</dd>
                    {r.notes && (
                      <>
                        <dt>Good to know</dt>
                        <dd>{r.notes}</dd>
                      </>
                    )}
                  </dl>
                </article>
              ))}

              {notes.trim() && (
                <>
                  <h3 className="preview-head">Notes from your visit</h3>
                  <p className="notes-preview">{notes.trim()}</p>
                </>
              )}
            </div>
          </>
        )}
      </main>

      <footer className="foot">
        <p>
          Phone numbers and addresses were checked on {VERIFIED_ON}. Hours change often — always
          call before sending someone across town.
        </p>
        <p className="muted">
          Nothing typed here is saved or sent anywhere. It disappears when you press Start over or
          close the page.
        </p>
      </footer>
    </div>
  )
}
