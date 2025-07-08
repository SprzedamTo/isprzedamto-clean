import Layout from '../components/Layout'
import { useState } from 'react'

export default function AddAd() {
  const [form, setForm] = useState({
    title: '',
    brand: '',
    model: '',
    year: '',
    mileage: '',
    fuel: '',
    price: '',
    description: '',
    location: '',
    photos: [],
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files).slice(0, 6) // max 6 zdjęć
    setForm(prev => ({ ...prev, photos: files }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Nowe ogłoszenie:', form)
    alert('Ogłoszenie zostało zapisane lokalnie (na razie testowo)')
  }

  return (
    <Layout>
      <h1 className="text-xl font-bold mb-4">📤 Dodaj ogłoszenie</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow max-w-xl mx-auto">
        <input type="text" name="title" placeholder="Tytuł ogłoszenia" onChange={handleChange} className="border p-2 w-full" />
        <input type="text" name="brand" placeholder="Marka" onChange={handleChange} className="border p-2 w-full" />
        <input type="text" name="model" placeholder="Model" onChange={handleChange} className="border p-2 w-full" />
        <input type="number" name="year" placeholder="Rok produkcji" onChange={handleChange} className="border p-2 w-full" />
        <input type="number" name="mileage" placeholder="Przebieg (km)" onChange={handleChange} className="border p-2 w-full" />
        <select name="fuel" onChange={handleChange} className="border p-2 w-full">
          <option value="">Rodzaj paliwa</option>
          <option value="benzyna">Benzyna</option>
          <option value="diesel">Diesel</option>
          <option value="gaz">LPG</option>
          <option value="elektryczny">Elektryczny</option>
          <option value="hybryda">Hybryda</option>
        </select>
        <input type="number" name="price" placeholder="Cena (zł)" onChange={handleChange} className="border p-2 w-full" />
        <textarea name="description" placeholder="Opis ogłoszenia" onChange={handleChange} className="border p-2 w-full" rows={4}></textarea>
        <input type="text" name="location" placeholder="Lokalizacja" onChange={handleChange} className="border p-2 w-full" />
        <input type="file" multiple accept="image/*" onChange={handlePhotoUpload} className="border p-2 w-full" />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Zapisz ogłoszenie</button>
      </form>
    </Layout>
  )
}
