import React from "react";
import "./productDescription.css";
const ProductDescription = ({ img, title, description, buttontitle }) => {
  return (
    <div className="main">
      <img src={img} alt="img"></img>
      <h1>{title}</h1>
      <hr />
      <p>{description}</p>
      <button>{buttontitle}</button>
    </div>
  );
};

export default ProductDescription;
