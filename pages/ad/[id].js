import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'

export default function AdDetail() {
  const router = useRouter()
  const { id } = router.query
  const [ad, setAd] = useState(null)

  useEffect(() => {
    const ads = JSON.parse(localStorage.getItem('ads') || '[]')
    const found = ads.find(ad => ad.id == id)
    setAd(found)
  }, [id])

  if (!ad) return <Layout><p className="p-4">Wczytywanie ogłoszenia...</p></Layout>

  return (
    <Layout>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow mt-6">
        <h1 className="text-2xl font-bold mb-2">{ad.title}</h1>
        <p className="text-gray-600 mb-2">{ad.brand} {ad.model} | Rok: {ad.year} | {ad.fuel}</p>
        <p className="text-lg font-semibold mb-2 text-blue-700">{parseInt(ad.price).toLocaleString()} zł</p>
        <p className="text-sm text-gray-500 mb-4">📍 {ad.location} | 🗓 {ad.date}</p>

        {ad.photos && ad.photos.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mb-4">
            {ad.photos.map((photo, i) => (
              <div key={i} className="bg-gray-100 text-center text-sm p-2 border rounded">
                {photo}
              </div>
            ))}
          </div>
        )}

        <p className="mb-4">{ad.description}</p>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">💬 Napisz do sprzedawcy</button>
      </div>
    </Layout>
  )
    }
