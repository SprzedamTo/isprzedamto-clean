import Layout from '../components/Layout';
import CategoryList from '../components/CategoryList';
import Filters from '../components/Filters';
import AdCard from '../components/AdCard';
import ads from '../data/ads'; // <-- ŚCIEŻKA BEZ UKOŚNIKA NA POCZĄTKU

export default function Home() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Wiersz 1: Szukaj + Filtry */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Czego szukasz?"
            className="flex-grow px-4 py-2 border rounded-md shadow-sm w-full sm:w-auto"
          />
          <Filters />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Szukaj
          </button>
        </div>

        {/* Wiersz 2: Lokalizacja + Promień */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Miejscowość (np. Warszawa)"
            className="flex-grow px-4 py-2 border rounded-md shadow-sm w-full sm:w-auto"
          />
          <select className="px-4 py-2 border rounded-md shadow-sm">
            <option value="">Cała Polska</option>
            <option value="5">5 km</option>
            <option value="15">15 km</option>
            <option value="30">30 km</option>
            <option value="50">50 km</option>
            <option value="100">100 km</option>
            <option value="150">150 km</option>
            <option value="200">200 km</option>
          </select>
        </div>

        {/* Kategorie */}
        <CategoryList />

        {/* Świeżo dodane */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
            NEW
          </span>
          Świeżo dodane
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {ads && ads.length > 0 ? (
            ads.map((ad) => <AdCard key={ad.id} ad={ad} />)
          ) : (
            <p className="text-gray-500">Brak ogłoszeń do wyświetlenia.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}
