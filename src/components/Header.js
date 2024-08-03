import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar">
      <h1>Jazz To Night</h1>
      <nav>
        <Link to="/">今晚的演出</Link>
        <Link to="/venues">展演場所</Link>
        <Link to="/musicians">樂手</Link>
        <Link to="/articles">文章</Link>
      </nav>
    </header>
  );
}

export default Header;
