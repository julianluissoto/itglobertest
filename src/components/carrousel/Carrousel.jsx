import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carrousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../assets/images/carrousel Img-1.jpeg";
import img2 from "../../assets/images/carrousel Img-2.jpeg";
import img3 from "../../assets/images/carrousel Img-3.jpg";

function Carrousel() {
  const [index, setIndex] = useState(0);
  const imagesCarrousel = [img1, img2, img3];

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carrousel-container relative ">
      <h6 className="shopButton">SHOP</h6>

      <Carousel
        nextIcon={null}
        prevIcon={null}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {imagesCarrousel?.map((el, index) => {
          return (
            <Carousel.Item key={index}>
              <img className="image" src={el} alt="img-1" />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Carrousel;
