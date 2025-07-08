import Layout from '../components/Layout'

export default function Favorites() {
  const favoriteAds = [
    {
      id: 1,
      title: 'PlayStation 5',
      price: '1 999 zł',
      location: 'Łódź',
    },
    {
      id: 2,
      title: 'iPhone 13 Pro',
      price: '3 500 zł',
      location: 'Wrocław',
    },
  ]

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">❤️ Ulubione ogłoszenia</h1>
      <div className="space-y-4">
        {favoriteAds.map(ad => (
          <div key={ad.id} className="p-4 border rounded bg-white shadow">
            <h2 className="text-lg font-semibold">{ad.title}</h2>
            <p className="text-sm text-gray-600">{ad.location}</p>
            <p className="text-blue-700 font-bold">{ad.price}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
                         }
