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
    const files = Array.from(e.target.files).slice(0, 6)
    setForm(prev => ({ ...prev, photos: files }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const ads = JSON.parse(localStorage.getItem('ads') || '[]')
    const newAd = {
      ...form,
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10),
      photos: form.photos.map(file => file.name), // uproszczone
    }
    localStorage.setItem('ads', JSON.stringify([newAd, ...ads]))

    alert('Ogłoszenie dodane!')
    setForm({
      title: '', brand: '', model: '', year: '', mileage: '',
      fuel: '', price: '', description: '', location: '', photos: [],
    })
  }

  return (
    <Layout>
      <h1 className="text-xl font-bold mb-4">📤 Dodaj ogłoszenie</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow max-w-xl mx-auto">
        <input name="title" placeholder="Tytuł" className="border p-2 w-full" onChange={handleChange} value={form.title} />
        <input name="brand" placeholder="Marka" className="border p-2 w-full" onChange={handleChange} value={form.brand} />
        <input name="model" placeholder="Model" className="border p-2 w-full" onChange={handleChange} value={form.model} />
        <input name="year" placeholder="Rok" type="number" className="border p-2 w-full" onChange={handleChange} value={form.year} />
        <input name="mileage" placeholder="Przebieg" type="number" className="border p-2 w-full" onChange={handleChange} value={form.mileage} />
        <select name="fuel" className="border p-2 w-full" onChange={handleChange} value={form.fuel}>
          <option value="">Rodzaj paliwa</option>
          <option value="benzyna">Benzyna</option>
          <option value="diesel">Diesel</option>
          <option value="gaz">LPG</option>
          <option value="elektryczny">Elektryczny</option>
        </select>
        <input name="price" placeholder="Cena (zł)" type="number" className="border p-2 w-full" onChange={handleChange} value={form.price} />
        <textarea name="description" placeholder="Opis" className="border p-2 w-full" rows={4} onChange={handleChange} value={form.description}></textarea>
        <input name="location" placeholder="Lokalizacja" className="border p-2 w-full" onChange={handleChange} value={form.location} />
        <input type="file" multiple onChange={handlePhotoUpload} className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Zapisz ogłoszenie</button>
      </form>
    </Layout>
  )
}
