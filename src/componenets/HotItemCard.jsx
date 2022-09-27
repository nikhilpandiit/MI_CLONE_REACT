import React from "react";
import '../styles/HotItem.css';
const HotItemCard = ({ image, name, price }) => {
  return (
    <div className="hotItemCard">
      <img src={image} alt={"${index}"} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default HotItemCard;
