import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary text-textSecondary p-4 text-center">
      <p>&copy; 2024 Jazz To Night. All rights reserved.</p>
      <div className="flex justify-center mt-2">
        <a className="mx-2 hover:text-accent" href="#">Facebook</a>
        <a className="mx-2 hover:text-accent" href="#">Twitter</a>
        <a className="mx-2 hover:text-accent" href="#">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
