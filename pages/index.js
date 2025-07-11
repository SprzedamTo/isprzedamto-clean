import Layout from '@/components/Layout'
import CategoryList from '@/components/CategoryList'
import Filters from '@/components/Filters'
import AdCard from '@/components/AdCard'
import ads from '@/data/ads'

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Kategorie</h2>
        <CategoryList />

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 text-sm rounded mr-2">NEW</span>
            Świeżo dodane
          </h2>

          {ads.length === 0 ? (
            <p className="text-gray-500">Brak ogłoszeń do wyświetlenia.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ads.map(ad => (
                <AdCard key={ad.id} ad={ad} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
