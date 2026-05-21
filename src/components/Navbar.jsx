"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdMenuOpen } from "react-icons/md";

import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log("user", user);
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
              <Link href="/myBookings">My Bookings</Link>
            </li>
          </ul>
          <div>
            {user ? (
              <>
                <div className="relative inline-block">
                  <button className="btn " onClick={() => setOpen(!open)}>
                    {user?.name}
                  </button>

                  {/* //dropdown menu */}
                  {open && (
                    <div className="absolute top-full mt-2 -left-15 w-40 rounded-xl border border-white/10 bg-slate-900 shadow-xl p-2 z-50">
                      <Link href="/addCar">
                        <button className="w-full text-left px-4 py-2 hover:bg-white/10 rounded-lg">
                          Add Car
                        </button>
                      </Link>

                      <Link href="/myAddedCars">
                        <button className="w-full text-left px-4 py-2 hover:bg-white/10 rounded-lg">
                          My added cars
                        </button>
                      </Link>

                      <Link href="/myBookings">
                        <button className="w-full text-left px-4 py-2 hover:bg-white/10 rounded-lg">
                          My Bookings
                        </button>
                      </Link>

                      <Link
                        href="/login"
                        onClick={async () => await authClient.signOut()}
                        className="btn mx-3"
                      >
                        <button className="w-full text-left px-4 py-2 hover:bg-white/10 rounded-lg text-red-400">
                          Logout
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Link href="/login" className="btn mx-3">
                Sign In
              </Link>
            )}
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
                <Link href="/addCar">Add </Link>
              </li>
              <li>
                <Link href="/myBookings">My Bookings</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
