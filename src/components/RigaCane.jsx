function RigaCane({ cane, selezionata, onSelezionaPadrone }) {
  return (
    <tr className={selezionata ? 'table-primary' : ''}>
      <td>{cane.nomeCane}</td>
      <td>
        <button type="button" className="btn btn-link p-0" onClick={() => onSelezionaPadrone(cane.padrone)}>
          {cane.padrone.nome} {cane.padrone.cognome}
        </button>
      </td>
    </tr>
  )
}

export default RigaCane
