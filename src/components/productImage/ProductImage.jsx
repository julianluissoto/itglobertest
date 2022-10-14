import React from "react";
import "./productImage.css";
const ProductImage = ({ img, button }) => {
  return (
    <div className="image-container">
      <img src={img} alt="itemImage"></img>
      {button && <button>SHOP</button>}
    </div>
  );
};

export default ProductImage;
