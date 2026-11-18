import { useEffect, useState } from 'react'
import { getCani } from '../api/api'
import Caricamento from '../components/Caricamento'
import MessaggioErrore from '../components/MessaggioErrore'
import SchedaPersona from '../components/SchedaPersona'
import TabellaCani from '../components/TabellaCani'

function PaginaCani() {
  const [cani, setCani] = useState([])
  const [caricamento, setCaricamento] = useState(true)
  const [errore, setErrore] = useState(null)
  const [padroneSelezionato, setPadroneSelezionato] = useState(null)

  useEffect(() => {
    getCani()
      .then((dati) => setCani(dati))
      .catch((erroreRicevuto) => setErrore(erroreRicevuto))
      .finally(() => setCaricamento(false))
  }, [])

  if (caricamento) {
    return <Caricamento />
  }

  if (errore) {
    return <MessaggioErrore errore={errore} />
  }

  return (
    <div>
      <h1>Cani</h1>

      <div className="row">
        <div className="col-md-7">
          <TabellaCani
            cani={cani}
            padroneSelezionatoId={padroneSelezionato?.id}
            onSelezionaPadrone={setPadroneSelezionato}
          />
        </div>

        <div className="col-md-5">
          {padroneSelezionato ? (
            <SchedaPersona persona={padroneSelezionato} onChiudi={() => setPadroneSelezionato(null)} />
          ) : (
            <p className="text-secondary">Clicca sul nome di un padrone per vederne i dettagli.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default PaginaCani
