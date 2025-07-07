import { useState } from 'react'
import Layout from '../components/Layout'

export default function Add() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [photos, setPhotos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Ogłoszenie dodane: ${title}`)
    // tu w przyszłości zapiszesz ogłoszenie do bazy
    setTitle('')
    setDescription('')
    setPrice('')
    setLocation('')
    setPhotos([])
  }

  return (
    <Layout>
      <h1 className="text-xl font-bold mb-4">Dodaj ogłoszenie</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow max-w-xl mx-auto">
        <div>
          <label className="block mb-1 font-semibold">Tytuł ogłoszenia</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Opis</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full border p-2 rounded"
            rows="4"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Cena (zł)</label>
            <input
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Lokalizacja</label>
            <input
              type="text"
              value={location}
              onChange={e => setLocation(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Zdjęcia (max 8)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setPhotos([...e.target.files])}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Dodaj ogłoszenie
        </button>
      </form>
    </Layout>
  )
}
