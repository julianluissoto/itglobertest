import React from "react";
import logo from "../../assets/images/logo white.png";
import { TbSofa } from "react-icons/tb";
import { BsUmbrella } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GiPillow } from "react-icons/gi";

import "./navbar.css";

const NavBar = () => {
  function scrollToPufiRain() {
    window.scroll({ top: 700, behavior: "smooth" });
  }

  function scrollToPufiPuff() {
    window.scroll({ top: 1300, behavior: "smooth" });
  }

  function scrollToPufiBag() {
    window.scroll({ top: 2000, behavior: "smooth" });
  }

  function scrollToPufiNap() {
    window.scroll({ top: 2500, behavior: "smooth" });
  }

  return (
    <div className=" NavContainer">
      <img className="logo" src={logo} alt="logo" />

      <div className="li_navbar ">
        <div className="menu" onClick={scrollToPufiPuff}>
          <TbSofa color="white" size="2em" />
          <h2>PUFI PUFF</h2>
        </div>
        <div className="menu" onClick={scrollToPufiRain}>
          <BsUmbrella color="white" size="5em" />
          <h2>PUFI RAIN</h2>
        </div>
        <div className="menu" onClick={scrollToPufiBag}>
          <HiOutlineShoppingBag color="white" size="5em" />
          <h2>PUFI CART</h2>
        </div>
        <div className="menu last " onClick={scrollToPufiNap}>
          <GiPillow color="white" size="5em" />
          <h2>PUFI NAP</h2>
        </div>
      </div>

      <div className="userAccess">
        <select>
          <option>MI CUENTA ﹀</option>
          <option>MI PERFIL</option>
          <option>SALIR</option>
        </select>
        <h2>MI COMPRA </h2>
      </div>
    </div>
  );
};

export default NavBar;
