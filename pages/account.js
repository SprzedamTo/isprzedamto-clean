import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Account() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('ads') || '[]');
    setAds(stored);
  }, []);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">📂 Moje ogłoszenia</h2>

        {ads.length === 0 ? (
          <p className="text-gray-500">Brak dodanych ogłoszeń.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ads.map(ad => (
              <Link href={`/ad/${ad.id}`} key={ad.id}>
                <div className="border rounded p-3 hover:shadow cursor-pointer bg-white">
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
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
