export default function CategoryList() {
  const categories = [
    { name: 'Motoryzacja', icon: '🚗' },
    { name: 'Dom i ogród', icon: '🏡' },
    { name: 'Elektronika', icon: '💻' },
    { name: 'Moda', icon: '👗' },
    { name: 'Dla dzieci', icon: '🧸' },
    { name: 'Zwierzęta', icon: '🐶' },
    { name: 'Praca', icon: '💼' },
    { name: 'Za darmo', icon: '🎁' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
      {categories.map((cat, idx) => (
        <div key={idx} className="p-4 bg-white rounded shadow text-center">
          <div className="text-3xl">{cat.icon}</div>
          <div className="mt-2 font-semibold">{cat.name}</div>
        </div>
      ))}
    </div>
  );
}
