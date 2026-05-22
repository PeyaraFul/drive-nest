// components/Footer.jsx

import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black mt-10 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">DriveNest</h2>
            <p className="mt-4 text-sm text-gray-400 leading-6">
              Premium car rental platform with modern vehicles, affordable
              pricing, and secure booking experience.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Useful Links</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/exploreCars"
                  className="transition hover:text-white"
                >
                  Available Cars
                </Link>
              </li>
              <li>
                <Link
                  href="/myBookings"
                  className="transition hover:text-white"
                >
                  My Bookings
                </Link>
              </li>

              <li>
                <Link href="/addCar" className="transition hover:text-white">
                  Add Car
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>Email: arakash022@gmail.com</li>

              <li>Location: Gazipur, Dhaka, Bangladesh</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>

            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/arakash022"
                target="_blank"
                className="rounded-full border border-gray-700 p-3 text-gray-400 transition hover:border-white hover:text-white"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="https://github.com/PeyaraFul"
                target="_blank"
                className="rounded-full border border-gray-700 p-3 text-gray-400 transition hover:border-white hover:text-white"
              >
                <FaGithub size={18} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/md-akash-mia-bd"
                target="_blank"
                className="rounded-full border border-gray-700 p-3 text-gray-400 transition hover:border-white hover:text-white"
              >
                <FaLinkedinIn size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} DriveNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
