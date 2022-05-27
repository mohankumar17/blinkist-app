import React from "react";
import Footer from "./Footer";
import LogoImg from "../headers/BlinklistLogo.png";

export default {
  title: "Organisms/Footer",
  component: Footer,
};

export const FooterBar = () => <Footer src={LogoImg}></Footer>;
