import { FaCar, FaHome, FaTv, FaTshirt, FaBriefcase, FaChild, FaHeart, FaDumbbell, FaDog, FaBuilding, FaTools, FaGift } from 'react-icons/fa';

const categories = [
  { name: 'Motoryzacja', icon: <FaCar /> },
  { name: 'Dom i ogród', icon: <FaHome /> },
  { name: 'Elektronika', icon: <FaTv /> },
  { name: 'Moda', icon: <FaTshirt /> },
  { name: 'Praca', icon: <FaBriefcase /> },
  { name: 'Dla dzieci', icon: <FaChild /> },
  { name: 'Zdrowie i uroda', icon: <FaHeart /> },
  { name: 'Sport i hobby', icon: <FaDumbbell /> },
  { name: 'Zwierzęta', icon: <FaDog /> },
  { name: 'Nieruchomości', icon: <FaBuilding /> },
  { name: 'Usługi i firmy', icon: <FaTools /> },
  { name: 'Oddam za darmo', icon: <FaGift /> },
];

export default function CategoryList() {
  return (
    <div className="py-6">
      <h2 className="text-xl font-bold mb-4">Kategorie</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex items-center gap-2 p-3 bg-gray-100 rounded hover:bg-blue-100 cursor-pointer">
            <div className="text-blue-700 text-lg">{cat.icon}</div>
            <div className="text-sm font-medium">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
