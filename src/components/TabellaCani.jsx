import RigaCane from './RigaCane'

function TabellaCani({ cani, padroneSelezionatoId, onSelezionaPadrone }) {
  if (cani.length === 0) {
    return <p>Non ci sono cani registrati.</p>
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Nome cane</th>
          <th scope="col">Padrone</th>
        </tr>
      </thead>
      <tbody>
        {/* map trasforma ogni cane in una riga; key aiuta React a riconoscere le righe. */}
        {cani.map((cane) => (
          <RigaCane
            key={cane.id}
            cane={cane}
            selezionata={cane.padrone.id === padroneSelezionatoId}
            onSelezionaPadrone={onSelezionaPadrone}
          />
        ))}
      </tbody>
    </table>
  )
}

export default TabellaCani
