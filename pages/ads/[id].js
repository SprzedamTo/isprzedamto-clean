import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import ads from '@/data/ads';

export default function AdDetails() {
  const router = useRouter();
  const { id } = router.query;

  const ad = ads.find((item) => item.id === parseInt(id));

  if (!ad) {
    return (
      <Layout>
        <div className="p-6 text-center text-gray-500">Ogłoszenie nie znalezione.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <img src={ad.image} alt={ad.title} className="w-full h-80 object-cover mb-4 rounded" />
        <h1 className="text-2xl font-semibold mb-2">{ad.title}</h1>
        <p className="text-gray-700 mb-4">{ad.description}</p>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <p><strong>Cena:</strong> {ad.price}</p>
          <p><strong>Rok:</strong> {ad.year || '—'}</p>
          <p><strong>Przebieg:</strong> {ad.mileage || '—'}</p>
          <p><strong>Silnik:</strong> {ad.engine || '—'}</p>
          <p><strong>Lokalizacja:</strong> {ad.location}</p>
        </div>
      </div>
    </Layout>
  );
    }
