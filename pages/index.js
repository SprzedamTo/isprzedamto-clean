import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Witamy na isprzedamto.pl</h1>
      <p className="mb-4">Dodawaj ogłoszenia za darmo!</p>
      <Link href="/add" className="text-blue-700 underline">
        ➕ Przejdź do formularza dodawania ogłoszenia
      </Link>
    </Layout>
  )
}
