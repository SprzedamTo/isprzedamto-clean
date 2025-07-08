import Layout from '../components/Layout'

export default function MyAds() {
  // Tymczasowa lista ogłoszeń (testowo – potem będzie baza danych)
  const myAds = [
    {
      id: 1,
      title: 'Renault Megane II',
      price: '9 500 zł',
      date: '2025-07-08',
      location: 'Warszawa',
    },
    {
      id: 2,
      title: 'Sofa IKEA z funkcją spania',
      price: '550 zł',
      date: '2025-07-07',
      location: 'Kraków',
    },
  ]

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">📋 Moje ogłoszenia</h1>
      <div className="space-y-4">
        {myAds.map(ad => (
          <div key={ad.id} className="p-4 border rounded bg-white shadow">
            <h2 className="text-lg font-semibold">{ad.title}</h2>
            <p className="text-sm text-gray-600">{ad.date} • {ad.location}</p>
            <p className="text-blue-700 font-bold">{ad.price}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}
