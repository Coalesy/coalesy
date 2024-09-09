// "use client";

// import React, { useState } from "react";

// const dataItems = [
//   { id: 1, name: "Item 1", categories: ["Listed", "Most selling"] },
//   { id: 2, name: "Item 2", categories: ["Listed"] },
//   { id: 3, name: "Item 3", categories: ["Most selling"] },
//   { id: 4, name: "Item 4", categories: ["Most buying"] },
//   { id: 5, name: "Item 5", categories: ["Listed", "Most buying"] },
//   { id: 6, name: "Item 6", categories: ["Low price"] },
//   { id: 7, name: "Item 7", categories: ["Most selling", "Low price"] },
//   { id: 8, name: "Item 8", categories: ["High price"] },
//   { id: 9, name: "Item 9", categories: ["Listed", "High price"] },
//   { id: 10, name: "Item 10", categories: ["Low to high"] },
//   { id: 11, name: "Item 11", categories: ["Most selling", "Low to high"] },
//   { id: 12, name: "Item 12", categories: ["Most buying", "Low to high"] },
//   { id: 13, name: "Item 13", categories: ["Low price", "High to low"] },
//   { id: 14, name: "Item 14", categories: ["High to low"] },
//   { id: 15, name: "Item 15", categories: ["Category 8"] },
// ];

// const categories = [
//   "All items",
//   "Listed",
//   "Most selling",
//   "Most buying",
//   "Low-price",
//   "High-price",
//   "Low to high",
//   "High to low",
//   "Category 8",
// ];

// const Sidebar = ({ categories, setCategory }) => {
//   const getCategoryClass = (category) => {
//     switch (category) {
//       case "Listed":
//         return "bg-red-500 hover:bg-red-600";
//       case "Most selling":
//         return "bg-blue-500 hover:bg-blue-600";
//       case "Most buying":
//         return "bg-green-500 hover:bg-green-600";
//       case "Low-price":
//         return "bg-yellow-500 hover:bg-yellow-600";
//       case "High-price":
//         return "bg-purple-500 hover:bg-purple-600";
//       case "Low to high":
//         return "bg-pink-500 hover:bg-pink-600";
//       case "High to low":
//         return "bg-teal-500 hover:bg-teal-600";
//       case "Category 8":
//         return "bg-indigo-500 hover:bg-indigo-600";
//       default:
//         return "bg-gray-800 hover:bg-gray-700";
//     }
//   };

//   return (
//     <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
//       <ul>
//         {categories.map((category, index) => (
//           <li
//             key={index}
//             className={`p-2 cursor-pointer ${getCategoryClass(category)}`}
//             onClick={() => setCategory(category)}
//           >
//             {category}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const MainContent = ({ data, selectedCategory }) => {
//   const filteredData =
//     selectedCategory === "All items"
//       ? data
//       : data.filter((item) => item.categories.includes(selectedCategory));

//   return (
//     <div className="p-4">
//       {filteredData.map((item) => (
//         <div key={item.id} className="border p-2 mb-2">
//           {item.name}
//         </div>
//       ))}
//     </div>
//   );
// };

// const App = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   return (
//     <div className="flex">
//       <Sidebar categories={categories} setCategory={setSelectedCategory} />
//       <MainContent data={dataItems} selectedCategory={selectedCategory} />
//     </div>
//   );
// };

// export default App;


"use client";

import React, { useState } from "react";

const dataItems = [
  { id: 1, name: "Item 1", categories: ["Listed", "Most selling"] },
  { id: 2, name: "Item 2", categories: ["Listed"] },
  { id: 3, name: "Item 3", categories: ["Most selling"] },
  { id: 4, name: "Item 4", categories: ["Most buying"] },
  { id: 5, name: "Item 5", categories: ["Listed", "Most buying"] },
  { id: 6, name: "Item 6", categories: ["Low price"] },
  { id: 7, name: "Item 7", categories: ["Most selling", "Low price"] },
  { id: 8, name: "Item 8", categories: ["High price"] },
  { id: 9, name: "Item 9", categories: ["Listed", "High price"] },
  { id: 10, name: "Item 10", categories: ["Low to high"] },
  { id: 11, name: "Item 11", categories: ["Most selling", "Low to high"] },
  { id: 12, name: "Item 12", categories: ["Most buying", "Low to high"] },
  { id: 13, name: "Item 13", categories: ["Low price", "High to low"] },
  { id: 14, name: "Item 14", categories: ["High to low"] },
  { id: 15, name: "Item 15", categories: ["Category 8"] },
];

const categories = [
  "All items",
  "Listed",
  "Most selling",
  "Most buying",
  "Low-price",
  "High-price",
  "Low to high",
  "High to low",
  "Category 8",
];

const Sidebar = ({ categories, setCategory, selectedCategory }) => {
  const getCategoryClass = (category) => {
    switch (category) {
      case "Listed":
        return "";
      case "Most selling":
        return "";
      case "Most buying":
        return "";
      case "Low-price":
        return "";
      case "High-price":
        return "";
      case "Low to high":
        return "";
      case "High to low":
        return "";
      case "Category 8":
        return "";
      default:
        return "";
    }
  };

  return (
    <div className="sticky text-white w-64 min-h-screen p-4">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className={`p-2 cursor-pointer ${getCategoryClass(category)} ${selectedCategory === category ? "font-semibold border-l-4 border-white" : ""}`}
            onClick={() => setCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MainContent = ({ data, selectedCategory }) => {
  const filteredData =
    selectedCategory === "All items"
      ? data
      : data.filter((item) => item.categories.includes(selectedCategory));

  return (
    <div className="p-4">
      {filteredData.map((item) => (
        <div key={item.id} className="border p-2 mb-2">
          {item.name}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All items");

  return (
    <div className="flex">
      <Sidebar categories={categories} setCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <MainContent data={dataItems} selectedCategory={selectedCategory} />
    </div>
  );
};

export default App;
