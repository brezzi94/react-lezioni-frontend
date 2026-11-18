import RigaTitolo from './RigaTitolo'

function SchedaPersona({ persona, onChiudi }) {
  const titoli = persona.titoliDiStudio || []

  return (
    <div className="border rounded p-3">
      <div className="d-flex justify-content-between align-items-start">
        <h2 className="h4">
          {persona.nome} {persona.cognome}
        </h2>
        <button type="button" className="btn-close" aria-label="Chiudi" onClick={onChiudi}></button>
      </div>

      {persona.indirizzo && (
        <p>
          {persona.indirizzo.viaENumero}, {persona.indirizzo.cap} {persona.indirizzo.citta?.nome}
        </p>
      )}

      <h3 className="h5">Titoli di studio</h3>
      {titoli.length === 0 ? (
        <p className="mb-0">Questa persona non ha titoli di studio registrati.</p>
      ) : (
        <ul className="mb-0">
          {titoli.map((titolo) => (
            <RigaTitolo key={titolo.id} titolo={titolo} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default SchedaPersona
