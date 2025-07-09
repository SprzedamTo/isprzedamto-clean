import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>isprzedamto.pl - Twoje miejsce na darmowe ogłoszenia</title>
      </Head>

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Pasek wyszukiwania */}
        <div className="flex flex-col sm:flex-row items-center gap-2 mb-6">
          <input
            type="text"
            placeholder="Czego szukasz?"
            className="flex-grow border border-gray-300 rounded px-4 py-2 w-full sm:w-auto"
          />
          <input
            type="text"
            placeholder="Cała Polska"
            className="border border-gray-300 rounded px-4 py-2 w-full sm:w-auto"
          />
          <select className="border border-gray-300 rounded px-4 py-2">
            <option>Cały kraj</option>
            <option>+5 km</option>
            <option>+15 km</option>
            <option>+30 km</option>
            <option>+50 km</option>
            <option>+100 km</option>
          </select>
          <button className="bg-orange-500 text-white px-5 py-2 rounded">
            Filtruj
          </button>
          <button className="bg-blue-600 text-white px-5 py-2 rounded">
            Szukaj
          </button>
        </div>

        {/* Kategorie */}
        <h2 className="text-2xl font-semibold mb-4">Kategorie</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {[
            'Motoryzacja',
            'Dom i ogród',
            'Elektronika',
            'Moda',
            'Praca',
            'Dla dzieci',
            'Zdrowie i uroda',
            'Sport i hobby',
            'Zwierzęta',
            'Nieruchomości',
            'Usługi i firmy',
            'Oddam za darmo',
          ].map((category) => (
            <button
              key={category}
              className="border border-blue-500 text-blue-500 font-medium rounded px-3 py-2 hover:bg-blue-50"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Świeżo dodane */}
        <h2 className="text-2xl font-semibold mb-4">📌 Świeżo dodane</h2>
        <p className="text-gray-500">Brak ogłoszeń do wyświetlenia.</p>
      </main>
    </>
  );
}
