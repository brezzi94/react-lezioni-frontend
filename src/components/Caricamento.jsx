function Caricamento({ messaggio = 'Caricamento in corso...' }) {
  return (
    <div className="d-flex align-items-center gap-2 text-secondary py-3">
      <div className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></div>
      <span>{messaggio}</span>
    </div>
  )
}

export default Caricamento
