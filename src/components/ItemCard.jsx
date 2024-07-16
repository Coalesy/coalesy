import React from 'react';

const ItemCard = ({ logo, name, price, items, minted }) => {
  return (
    <div className="item-card">
      <img src={logo} alt={name} />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Items: {items}</p>
      <p>Minted: {minted}</p>
    </div>
  );
};

export default ItemCard;