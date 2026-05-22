"use client";

import carsDataApi from "@/lib/carsData";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import fallbackImage from "../../../public/banner-car.png";

import { MdAirlineSeatReclineExtra, MdOutlineLocationOn } from "react-icons/md";

import { AiOutlineSafety } from "react-icons/ai";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

const ExploreCarPage = () => {
  const [carsData, setCarsData] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  const [search, setSearch] = useState("");
  const [carType, setCarType] = useState("");

  //  Load all cars
  useEffect(() => {
    const loadCars = async () => {
      const data = await carsDataApi();

      setCarsData(data);
      setFilteredCars(data);
    };

    loadCars();
  }, []);

  useEffect(() => {
    let filtered = [...carsData];

    // Search
    if (search.trim() !== "") {
      filtered = filtered.filter((car) =>
        car.carName.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // filtering
    if (carType !== "") {
      filtered = filtered.filter((car) => car.carType === carType);
    }

    setFilteredCars(filtered);
  }, [search, carType, carsData]);

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-25 mb-8">All Cars</h1>

      <div className="w-full shadow-md px-4 py-3 mb-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4">
          <div className="flex flex-1 items-center md:mx-30 mx-10 gap-2 border border-gray-200 px-3 py-2 rounded-xl w-full">
            <FiSearch className="text-gray-500 text-lg" />

            {/* Input */}
            <input
              type="text"
              placeholder="Search cars, brands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent w-full outline-none text-sm"
            />

            {/* Filter */}
            <select
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              className="border border-gray-200 rounded-lg px-2 py-1 text-sm outline-none"
            >
              <option className="bg-gray-500" value="">
                All Types
              </option>
              <option className="bg-gray-500" value="SUV">
                SUV
              </option>
              <option className="bg-gray-500" value="Sedan">
                Sedan
              </option>
              <option className="bg-gray-500" value="Coupe">
                Coupe
              </option>
              <option className="bg-gray-500" value="Hatchback">
                Hatchback
              </option>
              <option className="bg-gray-500" value="Convertible">
                Convertible
              </option>
              <option className="bg-gray-500" value="Luxury">
                Luxury
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
        {filteredCars.length === 0 && (
          <div className="col-span-full text-center py-20">
            <h2 className="text-2xl font-bold text-gray-500">No Cars Found</h2>

            <p className="text-gray-400 mt-2">Try another search or filter</p>
          </div>
        )}

        {/* Car Cards */}
        {filteredCars.map((car) => (
          <div
            key={car._id}
            className="w-full mx-auto max-w-sm bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-5 shadow-2xl relative tracking-wide"
          >
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] mb-6 border border-white/5">
              <Image
                width={300}
                height={300}
                src={car?.imageURL || fallbackImage}
                alt={car.carName || "No Image"}
                className="w-full h-full object-cover"
              />

              <span className="absolute top-4 right-4 bg-emerald-500/10 border border-emerald-400/40 backdrop-blur-md text-emerald-400 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest">
                {car.availabilityStatus}
              </span>
            </div>

            {/* Title */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-white font-black text-2xl tracking-tight leading-tight uppercase">
                  {car.carName}
                </h2>

                <span className="inline-block bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-300 px-3 py-1 rounded-lg mt-2">
                  {car.carType}
                </span>
              </div>

              <div className="text-right">
                <span className="text-white text-4xl font-black tracking-tight">
                  ${car.dailyRentPrice}
                </span>

                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  per / day
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-white/5 my-5">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white/5 rounded-xl border border-white/5 text-sky-400 shrink-0">
                  <MdOutlineLocationOn />
                </div>

                <span className="text-[11px] text-slate-300">
                  {car.pickupLocation}
                </span>
              </div>

              <div className="flex items-center gap-2 border-l border-white/5 pl-2">
                <div className="p-2 bg-white/5 rounded-xl border border-white/5 text-sky-400 shrink-0">
                  <MdAirlineSeatReclineExtra />
                </div>

                <span className="text-[11px] text-slate-300">
                  {car.seatCapacity} Seats
                </span>
              </div>

              <div className="flex items-center gap-2 border-l border-white/5 pl-2">
                <div className="p-2 bg-white/5 rounded-xl border border-white/5 text-sky-400 shrink-0">
                  <AiOutlineSafety />
                </div>

                <span className="text-[11px] text-slate-300">
                  Modern safety
                </span>
              </div>
            </div>

            {/* Button */}
            <Link href={`/exploreCars/${car._id}`}>
              <button className="w-full py-4 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-black text-sm tracking-widest rounded-full uppercase">
                See Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExploreCarPage;
