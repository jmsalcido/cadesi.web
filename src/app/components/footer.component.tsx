import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-accent text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm font-sans mb-4 md:mb-0">
          Colectivo Cafe del Desierto &copy; {new Date().getFullYear()}.
        </p>
        <nav className="space-x-4">
          <a href="https://cafe-del-desierto.ghost.io/" className="hover:underline">
            Visitar blog
          </a>
        </nav>
      </div>
    </footer>
  );
}