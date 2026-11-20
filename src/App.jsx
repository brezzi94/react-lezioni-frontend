import PaginaCani from './pages/PaginaCani'

/**
 * Componente radice: intestazione comune + l'unica pagina dell'applicazione.
 */
function App() {
  return (
    <div className="container py-4">
      <nav className="navbar bg-primary rounded mb-4 px-3" data-bs-theme="dark" aria-label="Intestazione">
        <span className="navbar-brand">
          Zampa Amica <span className="navbar-text ms-2">Centro cinofilo</span>
        </span>
      </nav>

      <PaginaCani />
    </div>
  )
}

export default App
