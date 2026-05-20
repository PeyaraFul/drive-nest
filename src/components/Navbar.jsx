"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdMenuOpen } from "react-icons/md";


import { authClient } from "@/lib/auth-client"



const Navbar = () => {
  const { data: session } = authClient.useSession()
    const user = session?.user ;
  console.log("user",user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="fixed top-0 left-0 z-50 w-full bg-black/30 text-shadow-xl backdrop-blur-md border-b  border-gray-500 text-cyan-200">
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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/exploreCars">Explore Cars</Link>
            </li>
            <li>
              <Link href="/addCar">Add Car</Link>
            </li>
            <li>
              <Link href="/bookings">My Bookings</Link>
            </li>
          </ul>
          <div>
            <Link href="/login">
            <button className="btn btn-primary">Sign in</button>
            </Link>
            <span className="text-white"> {user?.name}</span>
          </div>
        </header>
        {isMenuOpen && (
          <div className="border-t border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/exploreCars">Explore Cars</Link>
              </li>
              <li>
                <Link href="/addCar">Add Car</Link>
              </li>
              <li>
                <Link href="/bookings">My Bookings</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
