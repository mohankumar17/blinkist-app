import React from "react";
import Header from "./Header";
import Logo from "./BlinklistLogo.png";

export default {
  title: "Organisms/Header",
  component: Header,
};

export const Navbar = () => <Header LogoPath={Logo}></Header>;
