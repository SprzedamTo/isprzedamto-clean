import { useEffect, useState } from 'react';
import Head from 'next/head';
import AdCard from '../components/AdCard';

export default function Account() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('ads')) || [];
    setAds(stored);
  }, []);

  const handleDelete = (index) => {
    const updated = [...ads];
    updated.splice(index, 1);
    setAds(updated);
    localStorage.setItem('ads', JSON.stringify(updated));
  };

  return (
    <>
      <Head>
        <title>Moje konto - isprzedamto.pl</title>
      </Head>

      <main className="max-w-5xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">🧑 Moje ogłoszenia</h1>

        {ads.length === 0 ? (
          <p className="text-gray-500">Nie masz jeszcze żadnych ogłoszeń.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {ads.map((ad, idx) => (
              <div key={idx} className="relative group">
                <AdCard ad={ad} />
                <button
                  onClick={() => handleDelete(idx)}
                  className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
                >
                  Usuń
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
