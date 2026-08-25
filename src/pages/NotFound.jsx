import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center text-center px-6">
      <div>
        <p className="eyebrow">Error 404</p>
        <h1 className="text-4xl font-extrabold mt-4">Esta página no existe</h1>
        <p className="mt-3" style={{ color: 'var(--text-secondary)' }}>
          Puede que el enlace esté roto o la página se haya movido.
        </p>
        <Link to="/" className="btn btn-primary mt-8 inline-flex">
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}
