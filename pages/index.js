import Head from 'next/head';
import CategoryList from '@/components/CategoryList';
import AdCard from '@/components/AdCard';
import { useState, useEffect } from 'react';

export default function Home() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const storedAds = JSON.parse(localStorage.getItem('ads')) || [];
    setAds(storedAds);
  }, []);

  return (
    <>
      <Head>
        <title>isprzedamto.pl</title>
      </Head>

      <main className="max-w-5xl mx-auto p-4">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700">isprzedamto.pl</h1>
          <p className="text-gray-600">Twoje miejsce na darmowe ogłoszenia</p>
          <a
            href="/add"
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
          >
            + Dodaj ogłoszenie ZA DARMO!
          </a>
        </div>

        {/* Wyszukiwarka */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
          <input
            type="text"
            placeholder="Czego szukasz?"
            className="border rounded px-4 py-2 w-full sm:w-1/2"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
            🔍 Szukaj
          </button>
        </div>

        {/* Kategorie */}
        <CategoryList />

        {/* Świeżo dodane */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">🆕 Świeżo dodane</h2>
          {ads.length === 0 ? (
            <p className="text-gray-500">Brak ogłoszeń do wyświetlenia.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {ads.map((ad, idx) => (
                <AdCard key={idx} ad={ad} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
