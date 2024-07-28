import React from "react";
import "./header.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import PageTitle from "../PageTitle/PageTitle";
import SheetComponent from "../ui/Sheet";

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center ">
      <SheetComponent />
      <Nav />
      {/* <PageTitle page="Dashboard" /> */}
    </header>
  );
}

export default Header;
