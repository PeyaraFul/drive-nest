"use client";

import { Label } from "@heroui/react";
import { useState } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";

export default function SearchHeaderPage() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", search);
  };

  return (
    <div className="w-full shadow-md px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center gap-4">
        {/* 🚗 Logo */}
        <div className="text-2xl font-bold text-blue-600 whitespace-nowrap">
          DriveNest
        </div>

        {/* 🔍 Search Box + Filter */}
        <div className="flex flex-1 items-center gap-2 border border-gray-200 px-3 py-2 rounded-xl">
          <FiSearch className="text-gray-500 text-lg" />

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search cars, brands..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent w-full outline-none text-sm"
          />

          {/* 🚗 Type Filter */}
          <select className="border text-green-500 border-gray-200 rounded-lg px-2 py-1 text-sm outline-none">
            <option value="Sedan" className="text-black">
              {" "}
              type
            </option>
            <option value="SUV" className="text-black">
              SUV
            </option>
            <option value="Coupe" className="text-black">
              Coupe
            </option>
            <option value="Hatchback" className="text-black">
              Hatchback
            </option>
            <option value="Convertible" className="text-black">
              Convertible
            </option>
            <option value="Luxury" className="text-black">
              Luxury
            </option>
          </select>
        </div>

        {/* 🔘 Search Button */}
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition flex items-center gap-2 whitespace-nowrap"
        >
          <FiSearch />
          Search
        </button>
      </div>
    </div>
  );
}
