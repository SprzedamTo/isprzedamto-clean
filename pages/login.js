import { useState } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Wszystkie pola są wymagane')
      return
    }

    alert(`Zalogowano jako: ${email}`)
    setEmail('')
    setPassword('')
    setError('')
  }

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-xl font-bold mb-4">Logowanie</h1>

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

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
          >
            Zaloguj się
          </button>

          <p className="text-sm mt-4 text-center text-gray-500">
            Nie masz konta?{' '}
            <Link href="/register" className="text-blue-600 underline">
              Zarejestruj się
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  )
              }
