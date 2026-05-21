import React from "react";

import Image from "next/image";
import fallbackImage from "../../../public/banner-car.png";

import { MdAirlineSeatReclineExtra, MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import UpdateCarInfo from "@/components/UpdateCarInfo";

const myAddedCarsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const res = await fetch(`http://localhost:5000/car/user/${user?.id}`);
  const myCarData = await res.json();

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-25 mb-8">
        Available Cars
      </h1>
      <div className=" border grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {myCarData.map((car) => (
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

            {/* Description */}
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              {car.description}
            </p>

            {/* Button */}
            <UpdateCarInfo carData={car} />
          </div>
        ))}
      </div>
    </>
  );
};

export default myAddedCarsPage;
