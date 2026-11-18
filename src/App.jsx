import PaginaCani from './pages/PaginaCani'

/**
 * Componente radice: intestazione comune + l'unica pagina dell'applicazione.
 */
function App() {
  return (
    <div className="container py-4">
      <nav className="navbar navbar-light bg-light rounded mb-4 px-3" aria-label="Intestazione">
        <span className="navbar-brand">Cani e padroni</span>
      </nav>

      <PaginaCani />
    </div>
  )
}

export default App
