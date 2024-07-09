import React from 'react';
import './header.css';
import Logo from './Logo';
import Nav from './Nav';
import PageTitle from './PageTitle';

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <Logo />
      <Nav />
      <PageTitle page="Dashboard" />
    </header>
  );
}

export default Header;


