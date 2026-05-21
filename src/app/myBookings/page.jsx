import { Button, Modal } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { MdAirlineSeatReclineExtra, MdOutlineLocationOn } from "react-icons/md";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { BsCalendarDate } from "react-icons/bs";

import { IoWarningOutline } from "react-icons/io5";
import CancelBookingBtn from "@/lib/button/CancelBookingBtn";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  //bookings data getting from backend by user id
  const res = await fetch(`http://localhost:5000/booking/user/${user?.id}`);
  const bookingData = await res.json();
  // console.log("bookingData", bookingData);

  return (
    <div className="mt-30">
      <h1 className="text-4xl font-bold text-center">My Bookings</h1>
      {bookingData?.map((booking) => (
        <div
          key={booking?._id}
          className="w-full flex flex-wrap md:flex-nowrap  my-10   mx-auto max-w-7xl gap-10 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-5 shadow-2xl relative tracking-wide"
        >
          {/* Image */}
          <div className=" rounded-3xl mx-auto mb-6 border border-white/5">
            <Image
              width={400}
              height={300}
              src={booking?.imageURL}
              alt={booking?.carName}
              className="rounded-3xl mx-auto "
            />
          </div>

          <div className="mx-auto">
            {/* Title */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-white font-black text-2xl tracking-tight leading-tight uppercase">
                  {booking?.carName}
                </h2>

                <span className="inline-block bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-300 px-3 py-1 rounded-lg mt-2">
                  {booking?.carType}
                </span>
                <span className=" mx-4 bg-emerald-500/10 border border-emerald-400/40 backdrop-blur-md text-emerald-400 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest">
                  Booked
                </span>
              </div>

              <div className="text-right">
                <span className="text-white text-4xl font-black tracking-tight">
                  ${booking?.dailyRentPrice}
                </span>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Total Price
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-white/5 my-5">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white/5 rounded-xl border border-white/5 text-sky-400 shrink-0">
                  <BsCalendarDate />
                </div>

                <span className="text-[11px] text-slate-300">
                  Trip Date: {booking?.bookingDate}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white/5 rounded-xl border border-white/5 text-sky-400 shrink-0">
                  <MdOutlineLocationOn />
                </div>

                <span className="text-[11px] text-slate-300">
                  {booking?.pickupLocation}
                </span>
              </div>

              <div className="flex items-center gap-2 border-l border-white/5 pl-2">
                <div className="p-2 bg-white/5 rounded-xl border border-white/5 text-sky-400 shrink-0">
                  <MdAirlineSeatReclineExtra />
                </div>
                <span className="text-[11px] text-slate-300">
                  {booking?.seatCapacity} Seats
                </span>
              </div>

              <div className="flex items-center gap-2 border-l border-white/5">
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
              Your Note: {booking?.note}
            </p>

            {/* delete confirmation modal */}
            <Modal>
              <Button className="w-full py-4 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-black text-sm tracking-widest rounded-full shadow-[0_4px_25px_rgba(34,211,238,0.25)] active:scale-[0.99] transition-all duration-200 uppercase cursor-pointer">
                Cancel Booking{" "}
              </Button>
              <Modal.Backdrop>
                <Modal.Container>
                  <Modal.Dialog>
                    <Modal.CloseTrigger />
                    <Modal.Header>
                      <Modal.Icon className="bg-default  text-red-500 ">
                        <IoWarningOutline />
                      </Modal.Icon>
                      <Modal.Heading>
                        Are you sure to cancel booking ?
                      </Modal.Heading>
                    </Modal.Header>
                    <Modal.Body>
                      <p>Once you cancel booking, you cannot undone.</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <CancelBookingBtn booking={booking} />
                    </Modal.Footer>
                  </Modal.Dialog>
                </Modal.Container>
              </Modal.Backdrop>
            </Modal>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
