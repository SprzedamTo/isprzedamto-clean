export default function AdCard({ ad }) {
  return (
    <div className="border rounded shadow-sm overflow-hidden bg-white hover:shadow-md transition">
      {ad.image && (
        <img
          src={ad.image}
          alt={ad.title}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{ad.title}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {ad.year} • {ad.mileage} km • {ad.engine}
        </p>
        <p className="text-blue-600 font-semibold text-lg">{ad.price} zł</p>
        <p className="text-xs text-gray-500 mt-2">
          {ad.location} • {ad.date}
        </p>
      </div>
    </div>
  );
}
