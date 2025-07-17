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
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-semibold mb-4">Ogłoszenie nie znalezione</h1>
          <p className="text-gray-600">Nie znaleziono ogłoszenia o podanym ID.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{ad.title}</h1>
        <img src={ad.image} alt={ad.title} className="w-full h-auto rounded-md mb-6" />
        <p className="text-gray-700 mb-2">{ad.description}</p>
        <p className="text-lg font-semibold mb-2">{ad.price}</p>
        <p className="text-gray-600 mb-2">Lokalizacja: {ad.location}</p>
        {ad.year && <p className="text-gray-600 mb-2">Rok: {ad.year}</p>}
        {ad.engine && <p className="text-gray-600 mb-2">Silnik: {ad.engine}</p>}
        {ad.mileage && <p className="text-gray-600 mb-2">Przebieg: {ad.mileage}</p>}
      </div>
    </Layout>
  );
}
