import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <h1>Julio-Tx</h1>
      <span className="user">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/">
          <p>About</p>
        </Link>
        <Link to="/">
          <p>Work</p>
        </Link>
        <Link to="/">
          <p>Contact</p>
        </Link>
      </span>
    </Nav>
  );
}
