import { useState } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirm) {
      setError('Hasła nie są takie same!')
      return
    }
    // W przyszłości: wysyłanie do backendu
    alert(`Zarejestrowano: ${email}`)
    setEmail('')
    setPassword('')
    setConfirm('')
    setError('')
  }

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-xl font-bold mb-4">Rejestracja</h1>

        {error && <p className="text-red-600 mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">E-mail</label>
            <input
              type="email"
              className="w-full border p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Hasło</label>
            <input
              type="password"
              className="w-full border p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Powtórz hasło</label>
            <input
              type="password"
              className="w-full border p-2 rounded"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
          >
            Załóż konto
          </button>

          <p className="text-sm mt-4 text-center text-gray-500">
            Masz już konto?{' '}
            <Link href="/login" className="text-blue-600 underline">
              Zaloguj się
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  )
          }
