import React from "react";
import img1 from "../../assets/images/umbrellas.jpg";
import img2 from "../../assets/images/red umbrella.jpg";
import img3 from "../../assets/images/red puff.jpg";
import img4 from "../../assets/images/beachpuff.jpeg";
import img5 from "../../assets/images/bags.jpeg";
import img6 from "../../assets/images/shoppingcartbags.jpg";
import img7 from "../../assets/images/travelpillow.jpeg";
import img8 from "../../assets/images/travellpillowfull.jpeg";

import "./gallery.css";
import ProductDescription from "../product/ProductDescription";
import ProductImage from "../productImage/ProductImage";

const Gallery = () => {
  return (
    <div>
      <div className="flex flex-row top-150">
        <ProductImage img={img1} button />
        <ProductDescription
          img={img2}
          title="Pufi RAIN"
          description="Descripcion del producto. Este es un texto simulado."
          buttontitle="> VER MAS"
        />
      </div>

      <div className="flex flex-row">
        <ProductDescription
          img={img3}
          title="Pufi PUFF"
          description="Descripcion del producto. Este es un texto simulado."
          buttontitle="> VER MAS"
        />
        <ProductImage img={img4} />
      </div>

      <div className="flex flex-row">
        <ProductImage img={img6} />
        <ProductDescription
          img={img5}
          title="Pufi CART"
          description="Descripcion del producto. Este es un texto simulado."
          buttontitle="> VER MAS"
        />
      </div>

      <div className="flex flex-row">
        <ProductDescription
          img={img7}
          title="Pufi NAP"
          description="Descripcion del producto. Este es un texto simulado."
          buttontitle="> MAS INFO"
        />
        <ProductImage img={img8} />
      </div>
    </div>
  );
};

export default Gallery;
