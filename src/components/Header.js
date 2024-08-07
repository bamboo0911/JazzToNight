import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-primary text-textPrimary p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-accent">Jazz To Night</h1>
      <nav>
        <Link className="mx-2 hover:text-accent" to="/">今晚的演出</Link>
        <Link className="mx-2 hover:text-accent" to="/venues">展演場所</Link>
        <Link className="mx-2 hover:text-accent" to="/musicians">樂手</Link>
        <Link className="mx-2 hover:text-accent" to="/articles">文章</Link>
      </nav>
    </header>
  );
}

export default Header;
