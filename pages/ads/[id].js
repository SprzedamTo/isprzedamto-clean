// pages/ads/[id].js
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ads from '../../data/ads';

export default function AdDetails() {
  const router = useRouter();
  const { id } = router.query;

  const ad = ads.find((item) => item.id === parseInt(id));

  if (!ad) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-semibold text-red-600">Ogłoszenie nie znalezione.</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <img
          src={ad.image}
          alt={ad.title}
          className="w-full h-auto mb-6 rounded-md shadow-md"
        />
        <h1 className="text-3xl font-bold mb-2">{ad.title}</h1>
        <p className="text-gray-600 mb-4">{ad.description}</p>

        <div className="text-lg font-semibold mb-2">Cena: {ad.price}</div>
        <div className="text-gray-700 mb-1">Lokalizacja: {ad.location}</div>
        {ad.year && <div className="text-gray-700 mb-1">Rok produkcji: {ad.year}</div>}
        {ad.engine && <div className="text-gray-700 mb-1">Silnik: {ad.engine}</div>}
        {ad.mileage && <div className="text-gray-700 mb-1">Przebieg: {ad.mileage}</div>}
      </div>
    </Layout>
  );
}
