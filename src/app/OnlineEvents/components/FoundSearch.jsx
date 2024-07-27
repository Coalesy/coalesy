import React from "react";

export const SearchItem = ({ icon, category, count }) => {
  return (
    <div>
      <p>{icon}</p>
      <h3>{category}</h3>
      <p>{count}</p>
    </div>
  );
};
