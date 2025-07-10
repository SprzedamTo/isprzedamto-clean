import Layout from '../components/Layout';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [ads, setAds] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('ads') || '[]');
    setAds(stored.reverse().slice(0, 8));

    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favs);
  }, []);

  const toggleFavorite = (ad) => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    const exists = favs.find(f => f.id === ad.id);
    let updated;

    if (exists) {
      updated = favs.filter(f => f.id !== ad.id);
    } else {
      updated = [...favs, ad];
    }

    localStorage.setItem('favorites', JSON.stringify(updated));
    setFavorites(updated);
  };

  const isFavorite = (id) => {
    return favorites.some(f => f.id === id);
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">🆕 Świeżo dodane</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {ads.length === 0 && (
            <p className="text-gray-500 col-span-full">Brak ogłoszeń do wyświetlenia.</p>
          )}

          {ads.map(ad => (
            <div key={ad.id} className="border rounded p-3 bg-white relative hover:shadow transition">
              <button
                onClick={() => toggleFavorite(ad)}
                className="absolute top-2 right-2 text-xl"
                title="Dodaj do ulubionych"
              >
                {isFavorite(ad.id) ? '❤️' : '🤍'}
              </button>

              <Link href={`/ad/${ad.id}`}>
                <div className="cursor-pointer">
                  {ad.photos && ad.photos.length > 0 ? (
                    <div className="mb-2 w-full h-32 bg-gray-100 flex items-center justify-center text-sm text-gray-500">
                      {ad.photos[0]}
                    </div>
                  ) : (
                    <div className="mb-2 w-full h-32 bg-gray-100 flex items-center justify-center text-sm text-gray-400">
                      brak zdjęcia
                    </div>
                  )}

                  <h3 className="font-semibold truncate">{ad.title}</h3>
                  <p className="text-sm text-gray-600">{ad.brand} | {ad.year}</p>
                  <p className="text-blue-700 font-bold">{parseInt(ad.price).toLocaleString()} zł</p>
                  <p className="text-xs text-gray-400">{ad.location} | {ad.date}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
