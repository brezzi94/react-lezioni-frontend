/**
 * Unico punto di accesso al backend.
 */

// Base URL definita una sola volta, tramite variabile d'ambiente Vite (vedi file .env).
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'
const API_URL = `${BASE_URL}/api`

export async function getCani() {
  let risposta
  try {
    risposta = await fetch(`${API_URL}/cane/`)
  } catch {
    throw new Error('Impossibile contattare il backend.')
  }

  if (!risposta.ok) {
    throw new Error(`Errore HTTP ${risposta.status}`)
  }

  return risposta.json()
}
