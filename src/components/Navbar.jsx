'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdMenuOpen } from 'react-icons/md';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <MdMenuOpen />
          </button>
          <div>Logo</div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link href="#">Features</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
        </ul>
        <div>
            <button className="btn btn-primary">
              Sign in
            </button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="#" className="block py-2">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
        </div>
    );
};

export default Navbar;