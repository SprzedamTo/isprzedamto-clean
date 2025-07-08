import { useState } from 'react'

export default function Filters({ onFilter }) {
  const [show, setShow] = useState(false)
  const [filters, setFilters] = useState({
    brand: '',
    model: '',
    yearFrom: '',
    yearTo: '',
    mileageFrom: '',
    mileageTo: '',
    fuel: '',
    priceFrom: '',
    priceTo: '',
    distance: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const applyFilters = () => {
    onFilter(filters)
    setShow(false)
  }

  const clearFilters = () => {
    const cleared = {
      brand: '', model: '', yearFrom: '', yearTo: '',
      mileageFrom: '', mileageTo: '', fuel: '',
      priceFrom: '', priceTo: '', distance: ''
    }
    setFilters(cleared)
    onFilter(cleared)
  }

  return (
    <div className="mb-6">
      <button onClick={() => setShow(!show)} className="bg-blue-600 text-white px-4 py-2 rounded">
        🔍 FILTRUJ
      </button>

      {show && (
        <div className="bg-white border p-4 mt-4 rounded shadow space-y-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <input name="brand" placeholder="Marka" onChange={handleChange} value={filters.brand} className="border p-2" />
            <input name="model" placeholder="Model" onChange={handleChange} value={filters.model} className="border p-2" />
            <input name="yearFrom" placeholder="Rok od" onChange={handleChange} value={filters.yearFrom} className="border p-2" />
            <input name="yearTo" placeholder="Rok do" onChange={handleChange} value={filters.yearTo} className="border p-2" />
            <input name="mileageFrom" placeholder="Przebieg od" onChange={handleChange} value={filters.mileageFrom} className="border p-2" />
            <input name="mileageTo" placeholder="Przebieg do" onChange={handleChange} value={filters.mileageTo} className="border p-2" />
            <input name="priceFrom" placeholder="Cena od" onChange={handleChange} value={filters.priceFrom} className="border p-2" />
            <input name="priceTo" placeholder="Cena do" onChange={handleChange} value={filters.priceTo} className="border p-2" />
            <input name="distance" placeholder="Odległość (km)" onChange={handleChange} value={filters.distance} className="border p-2" />
            <select name="fuel" onChange={handleChange} value={filters.fuel} className="border p-2">
              <option value="">Paliwo</option>
              <option value="benzyna">Benzyna</option>
              <option value="diesel">Diesel</option>
              <option value="gaz">LPG</option>
              <option value="elektryczny">Elektryczny</option>
              <option value="hybryda">Hybryda</option>
            </select>
          </div>

          <div className="flex gap-4 mt-4">
            <button onClick={applyFilters} className="bg-green-600 text-white px-4 py-2 rounded">Zastosuj filtry</button>
            <button onClick={clearFilters} className="bg-gray-300 text-black px-4 py-2 rounded">Wyczyść filtry</button>
          </div>
        </div>
      )}
    </div>
  )
      }
