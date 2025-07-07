import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>isprzedamto.pl</title>
      </Head>

      <h1 className="text-2xl font-bold text-blue-700 mb-4">isprzedamto.pl</h1>
      <p className="mb-4">Twoje miejsce na darmowe ogłoszenia</p>

      <Link href="/add">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          + Dodaj ogłoszenie ZA DARMO!
        </button>
      </Link>

      <div className="mt-8">
        <h2 className="text-lg font-semibold">📋 Przykładowe ogłoszenie</h2>
        <p><strong>Nissan Almera 1.5 Benzyna</strong></p>
        <p>2006 | 152 000 km | 115 KM</p>
        <p>Lokalizacja: Kraków | Dodano: 06.07.2025</p>
      </div>

      <p className="mt-10 text-sm text-gray-500">
        🔐 <Link href="/register" className="underline">Zarejestruj się</Link> lub <Link href="/login" className="underline">Zaloguj się</Link>
      </p>
    </Layout>
  )
    }
