import Layout from '../components/Layout'
import Link from 'next/link'

export default function Account() {
  // W przyszłości: pobierz dane zalogowanego użytkownika z backendu
  const fakeUser = {
    email: 'uzytkownik@isprzedamto.pl',
    imie: 'Janek',
  }

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-xl font-bold mb-4">Moje konto</h1>
        <p className="mb-2">
          👋 Cześć, <strong>{fakeUser.imie}</strong>
        </p>
        <p className="mb-4 text-sm text-gray-600">
          Zalogowano jako: <strong>{fakeUser.email}</strong>
        </p>

        <Link
          href="/my-ads"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded block text-center"
        >
          📋 Moje ogłoszenia
        </Link>
      </div>
    </Layout>
  )
}
Commit changes
[✔] Create a new branch → zostaw wyłączone
