import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

export default function MyAds() {
  const [ads, setAds] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('ads')
    if (stored) {
      setAds(JSON.parse(stored))
    }
  }, [])

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">📋 Moje ogłoszenia</h1>
      {ads.length === 0 ? (
        <p className="text-gray-600">Nie masz jeszcze żadnych ogłoszeń.</p>
      ) : (
        <div className="space-y-4">
          {ads.map(ad => (
            <div key={ad.id} className="p-4 border rounded bg-white shadow">
              <h2 className="text-lg font-semibold">{ad.title}</h2>
              <p className="text-sm text-gray-600">
                {ad.brand} {ad.model} • Rok: {ad.year} • {ad.fuel}
              </p>
              <p className="text-sm text-gray-600">
                Przebieg: {parseInt(ad.mileage).toLocaleString()} km • Cena: {parseInt(ad.price).toLocaleString()} zł
              </p>
              <p className="text-sm text-gray-500">📍 {ad.location} | 🗓 {ad.date}</p>
              <p className="text-gray-800 mt-2">{ad.description}</p>
              {ad.photos?.length > 0 && (
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {ad.photos.map((photo, i) => (
                    <div key={i} className="bg-gray-100 p-2 text-sm text-center border rounded">
                      {photo}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </Layout>
  )
}
