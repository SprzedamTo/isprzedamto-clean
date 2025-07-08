import Layout from '../components/Layout'
import Filters from '../components/Filters'
import { useState } from 'react'

export default function Home() {
  const [filters, setFilters] = useState({})
  const ads = [
    {
      id: 1,
      title: 'Nissan Almera 1.5 benzyna 115KM',
      year: 2006,
      mileage: 152000,
      fuel: 'benzyna',
      price: 9900,
      location: 'Warszawa',
    },
    {
      id: 2,
      title: 'Volkswagen Golf 1.9 TDI 5D',
      year: 2008,
      mileage: 245000,
      fuel: 'diesel',
      price: 12400,
      location: 'Łódź',
    },
  ]

  const filteredAds = ads.filter(ad => {
    if (filters.brand && !ad.title.toLowerCase().includes(filters.brand.toLowerCase())) return false
    if (filters.model && !ad.title.toLowerCase().includes(filters.model.toLowerCase())) return false
    if (filters.yearFrom && ad.year < parseInt(filters.yearFrom)) return false
    if (filters.yearTo && ad.year > parseInt(filters.yearTo)) return false
    if (filters.priceFrom && ad.price < parseInt(filters.priceFrom)) return false
    if (filters.priceTo && ad.price > parseInt(filters.priceTo)) return false
    if (filters.mileageFrom && ad.mileage < parseInt(filters.mileageFrom)) return false
    if (filters.mileageTo && ad.mileage > parseInt(filters.mileageTo)) return false
    if (filters.fuel && ad.fuel !== filters.fuel) return false
    return true
  })

  return (
    <Layout>
      <Filters onFilter={setFilters} />

      <h2 className="text-xl font-bold mb-4">🆕 Najnowsze ogłoszenia</h2>
      <div className="space-y-4">
        {filteredAds.length === 0 ? (
          <p>Brak ogłoszeń pasujących do filtrów.</p>
        ) : (
          filteredAds.map(ad => (
            <div key={ad.id} className="p-4 bg-white border rounded shadow">
              <h3 className="text-lg font-semibold">{ad.title}</h3>
              <p className="text-sm text-gray-600">
                Rok: {ad.year} • Przebieg: {ad.mileage.toLocaleString()} km • {ad.fuel}
              </p>
              <p className="font-bold text-blue-700">{ad.price.toLocaleString()} zł</p>
              <p className="text-sm text-gray-500">{ad.location}</p>
            </div>
          ))
        )}
      </div>
    </Layout>
  )
}
