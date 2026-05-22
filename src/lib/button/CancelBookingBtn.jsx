"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { authClient } from "../auth-client";

const CancelBookingBtn = ({ booking }) => {
  const router = useRouter();

  // sending delete request to backend
  const deleteBooking = async (id) => {
    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${tokenData.token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to delete booking");
      }

      const data = await res.json();

      console.log(data);

      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button onClick={() => deleteBooking(booking._id)}>Confirm</Button>
    </div>
  );
};

export default CancelBookingBtn;
