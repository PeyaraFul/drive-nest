import BookingModal from "@/components/BookingModal";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react"; 
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { MdAirlineSeatReclineExtra, MdOutlineLocationOn } from "react-icons/md";
import { TbReservedLine } from "react-icons/tb";

const CarDetailPage = async ({ params }) => {
  const { carId } = await params;

  console.log(carId);
  const carDetails = async () => {
    const response = await fetch(`http://localhost:5000/exploreCars/${carId}`);
    const data = await response.json();
    console.log(data);
    return data;
  };
  const carData = await carDetails();
  console.log(carData);

  return (
    <div className="mt-30">
      <div className="w-full flex flex-wrap md:flex-nowrap     mx-auto max-w-7xl gap-10 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-5 shadow-2xl relative tracking-wide">
        {/* Image */}
        <div className=" rounded-3xl mx-auto mb-6 border border-white/5">
          <Image
            width={500}
            height={400}
            src={carData.imageURL}
            alt={carData.carName}
            className="rounded-3xl mx-auto "
          />
        </div>

        <div className="mx-auto">
          {/* Title */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-white font-black text-2xl tracking-tight leading-tight uppercase">
                {carData.carName}
              </h2>

              <span className="inline-block bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-300 px-3 py-1 rounded-lg mt-2">
                {carData.carType}
              </span>
              <span className=" mx-4 bg-emerald-500/10 border border-emerald-400/40 backdrop-blur-md text-emerald-400 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest">
                {carData.availabilityStatus}
              </span>
            </div>

            <div className="text-right">
              <span className="text-white text-4xl font-black tracking-tight">
                ${carData.dailyRentPrice}
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
                <TbReservedLine />
              </div>

              <span className="text-[11px] text-slate-300">
                booked by 5users
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white/5 rounded-xl border border-white/5 text-sky-400 shrink-0">
                <MdOutlineLocationOn />
              </div>

              <span className="text-[11px] text-slate-300">
                {carData.pickupLocation}
              </span>
            </div>

            <div className="flex items-center gap-2 border-l border-white/5 pl-2">
              <div className="p-2 bg-white/5 rounded-xl border border-white/5 text-sky-400 shrink-0">
                <MdAirlineSeatReclineExtra />
              </div>
              <span className="text-[11px] text-slate-300">
                {carData.seatCapacity} Seats
              </span>
            </div>

            <div className="flex items-center gap-2 border-l border-white/5">
              <div className="p-2 bg-white/5 rounded-xl border border-white/5 text-sky-400 shrink-0">
                <AiOutlineSafety />
              </div>
              <span className="text-[11px] text-slate-300">Modern safety</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-400 leading-relaxed mb-6">
            {carData.description}
          </p>

          {/* Button */}
          {/* <Link href="g">
            <button className="w-full py-4 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-black text-sm tracking-widest rounded-full shadow-[0_4px_25px_rgba(34,211,238,0.25)] active:scale-[0.99] transition-all duration-200 uppercase cursor-pointer">
              Book Now
            </button>
          </Link> */}

          <Modal>
            <Button className="w-full py-4 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-black text-sm tracking-widest rounded-full shadow-[0_4px_25px_rgba(34,211,238,0.25)] active:scale-[0.99] transition-all duration-200 uppercase cursor-pointer"  >Book Now</Button>
            <BookingModal carData={carData} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
