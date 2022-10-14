import React from "react";
import style from "./footer.module.css";
import logo from "../../assets/images/logo black.png";
import brandyLogo from "../../assets/images/brandy.jpg";
import qr from "../../assets/images/qr.jpg";
import shield from "../../assets/images/shield.jpg";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { TiSocialInstagram } from "react-icons/ti";

export default function Footer() {
  function scrollToRain() {
    window.scroll({ top: 800, behavior: "smooth" });
  }

  function scrollToPuff() {
    window.scroll({ top: 1300, behavior: "smooth" });
  }

  function scrollToCart() {
    window.scroll({ top: 2000, behavior: "smooth" });
  }

  function scrollToNap() {
    window.scroll({ top: 2500, behavior: "smooth" });
  }

  return (
    <div>
      <div className={style.mainContainer}>
        <div className={style.containerlogo}>
          <img className={style.logo} src={logo} alt="logo"></img>
        </div>
        <div className={style.list}>
          <ul>
            <li onClick={scrollToRain}>PUFI RAIN</li>
            <li onClick={scrollToPuff}>PUFI PUFF</li>
            <li onClick={scrollToCart}>PUFI CART</li>
            <li onClick={scrollToNap}>PUFI NAP</li>
          </ul>
        </div>

        <div className={style.list}>
          <ul>
            <li>CONTACTO</li>
            <li>AYUDA</li>
            <li>COMO COMPRAR</li>
            <li>TERMINOS Y CONDICIONES</li>
          </ul>
        </div>

        <div>
          <p className="text-center font-medium mt-4 ">COMPRA 100% SEGURA</p>
          <div className="flex justify-center">
            <img className="h-[4rem] mx-4" src={qr} alt="qr" />
            <img className="h-[4rem] mx-4" src={shield} alt="escudo" />
            <p className="w-[4vw] font-medium  ">
              COMPRA CON LA GARANTÍA DE PUFI
            </p>
          </div>
        </div>

        <div className={style.social}>
          <span className="font-semibold text-xl ">Seguinos en </span>
          <GrFacebookOption size={20} className="mr-2 ml-2 mt-1" />
          <BsTwitter size={20} className="mr-2 mt-1" />
          <TiSocialInstagram size={20} className="mr-2 mt-1" />
        </div>
      </div>

      <div className="flex justify-between  mt-4 border-solid border-gray-200   pt-1">
        <p className="text-gray-400">
          PUFI Copyright 2017 - Todos los derechos reservados
        </p>
        <img className="h-[1.5rem] mr-2" src={brandyLogo} alt="brandyLogo" />
      </div>
    </div>
  );
}
