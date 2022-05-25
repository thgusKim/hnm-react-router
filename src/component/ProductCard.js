import React from "react";
import { useState } from "react";

const ProductCard = ({ item, goToPage }) => {
  const selectItem = () => {
    goToPage(item);
  };

  return (
    <div onClick={() => selectItem()} className="card">
      <img className="item-img" src={item?.img} />
      <div className="choice">{item.choice ? "Conscious choice" : " "}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className="choice">{item.new ? "신제품" : " "}</div>
    </div>
  );
};

export default ProductCard;
