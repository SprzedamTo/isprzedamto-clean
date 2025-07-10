const categories = [
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
  'Oddam za darmo'
];

export default function CategoryList() {
  return (
    <div className="py-6">
      <h2 className="text-xl font-bold mb-4">Kategorie</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((name, idx) => (
          <div key={idx} className="p-3 bg-gray-100 rounded text-center text-sm hover:bg-blue-100 cursor-pointer">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
