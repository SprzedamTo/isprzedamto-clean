// pages/ads/[id].js

import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ads from '../../data/ads';

export default function AdDetail() {
  const router = useRouter();
  const { id } = router.query;

  const ad = ads.find((a) => a.id === parseInt(id));

  if (!ad) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-2xl font-semibold mb-4">Ogłoszenie nie znalezione</h1>
          <p>Przepraszamy, ale ogłoszenie o ID {id} nie istnieje.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{ad.title}</h1>
        <img src={ad.image} alt={ad.title} className="w-full h-auto mb-4 rounded-md shadow" />
        <p className="text-gray-600 mb-2">{ad.description}</p>
        <p className="text-lg font-semibold mb-2">{ad.price}</p>
        <p className="text-sm text-gray-500 mb-2">Lokalizacja: {ad.location}</p>
        {ad.year && <p className="text-sm text-gray-500">Rok produkcji: {ad.year}</p>}
        {ad.engine && <p className="text-sm text-gray-500">Silnik: {ad.engine}</p>}
        {ad.mileage && <p className="text-sm text-gray-500">Przebieg: {ad.mileage}</p>}
      </div>
    </Layout>
  );
}
