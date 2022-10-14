import React from "react";
import style from "./GridImages.module.css";
import img1 from "../../assets/images/umbrellas.jpg";
import img2 from "../../assets/images/red umbrella.jpg";
import img3 from "../../assets/images/red puff.jpg";
import img4 from "../../assets/images/beachpuff.jpeg";
import img5 from "../../assets/images/bags.jpeg";
import img6 from "../../assets/images/shoppingcartbags.jpg";

const GridImages = () => {
  return (
    <div className={style.main}>
      <div className={style.text}>
        <h1>INSTAGRAM</h1>
        <h2>#ESPUFI</h2>
      </div>
      <div className={style.grid}>
        <img src={img1} alt="img1"></img>
        <img src={img6} alt="img6"></img>
        <img src={img3} alt="img3"></img>
        <img src={img2} alt="img2"></img>
        <img src={img5} alt="img5"></img>
        <img src={img4} alt="img4"></img>
      </div>
    </div>
  );
};

export default GridImages;
