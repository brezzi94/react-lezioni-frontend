function RigaTitolo({ titolo }) {
  return (
    <li>
      {titolo.nomeTitolo} ({titolo.annoConseguimento})
      {titolo.tipo === 'LAUREA' && (titolo.cicloUnico ? ' — laurea a ciclo unico' : ' — laurea')}
      {titolo.tipo === 'DIPLOMA' && titolo.classeDiploma && ` — diploma, ${titolo.classeDiploma}`}
    </li>
  )
}

export default RigaTitolo
