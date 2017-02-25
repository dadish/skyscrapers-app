import React from 'react';
import { Link } from 'react-router';
import './style.css';

const Menu = () => (
  <div className="menu-w">
    <a className="travis-badge" href="https://travis-ci.org/dadish/seed" target="_blank"><img src="https://api.travis-ci.org/dadish/seed.svg?branch=master" alt="Travis-CI"/></a>
    <ul className="menu-l">
      <li className="menu-i"><Link className="menu-ia" activeClassName="menu-ia--active" to="/">Home</Link></li>
      <li className="menu-i"><Link className="menu-ia" activeClassName="menu-ia--active" to="/about">About</Link></li>
  </ul>
  </div>
);

export default Menu;