"use client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { authClient } from "../auth-client";

const DeleteCarBtn = ({ carData }) => {
  const router = useRouter();

  //sending delete request to backend
  const deleteCar = async (id) => {
    const { data: tokenData } = await authClient.token();
    const res = await fetch(`/car/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${tokenData.token}`,
      },
    });

    const data = await res.json();
    toast.success("Car Deleted!", {
      duration: 4000,
    });
    router.refresh();
  };
  return (
    <div>
      <Button onClick={() => deleteCar(carData._id)} slot="close">
        Confirm
      </Button>
    </div>
  );
};

export default DeleteCarBtn;
