import React from 'react';
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

const CategoryList = () => {
  return (
    <div className="category-wrapper py-4">
      <h2 className="text-xl font-semibold mb-3">Kategorie</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((cat, index) => (
          <div key={index} className="flex items-center gap-2 p-3 bg-gray-100 rounded hover:bg-blue-100 cursor-pointer">
            <span className="text-blue-700 text-lg">{cat.icon}</span>
            <span className="text-sm font-medium">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
