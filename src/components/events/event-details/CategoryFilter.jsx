import React from 'react';

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="w-1/4  p-4 rounded-lg">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`cursor-pointer p-2 mb-2 rounded-lg ${
              activeCategory === category ? 'bg-[#282232] py-3 px-4 text-white text-[14px]' : 'text-white opacity-70 text-[14px]'
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
