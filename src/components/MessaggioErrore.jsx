function MessaggioErrore({ errore }) {
  const testo = typeof errore === 'string' ? errore : errore?.message

  if (!testo) {
    return null
  }

  return (
    <div className="alert alert-danger" role="alert">
      {testo}
    </div>
  )
}

export default MessaggioErrore
