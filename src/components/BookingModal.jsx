"use client";

import React from "react";
import {
  Button,
  Form,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";

import { FaCarOn } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const BookingModal = ({ carData }) => {
  //current session user data
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const userName = user?.name;
  const userEmail = user?.email;
  const userId = user?.id;
  // console.log("userId", carData._id);
  // console.log("userId", user);

  const myBooking = async (bookingData) => {
    //sending data to backend
    try {
      const { data: tokenData } = await authClient.token();
      const res = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenData.token}`,
        },
        body: JSON.stringify(bookingData),
      });
      const resData = await res.json();

      return resData;
    } catch (error) {
      console.log("error", error);
    }
  };

  //collecting data from form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddData = async (data) => {
    //carData destructuring
    const {
      carName,
      dailyRentPrice,
      carType,
      imageURL,
      seatCapacity,
      pickupLocation,
      description,
      availabilityStatus,
    } = carData;

    //form data destructuring
    const { bookingDate, needDriver, note } = data;

    //sending data to backend
    const bookingData = {
      carId: carData._id,
      userId,
      userName,
      userEmail,
      bookingDate,
      needDriver,
      note,
      carName,
      dailyRentPrice,
      carType,
      imageURL,
      seatCapacity,
      pickupLocation,
      description,
      availabilityStatus,
    };

    //
    await myBooking(bookingData);
  };

  return (
    <Form id="booking-form" onSubmit={handleSubmit(handleAddData)}>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaCarOn />
              </Modal.Icon>

              <Modal.Heading>Booking Note</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default" className="flex flex-col gap-4">
                {/* Date */}
                <TextField className="w-full">
                  <Label>Pick a date</Label>
                  {/* <Label>{carData._id}</Label> */}

                  <Input
                    type="date"
                    {...register("bookingDate", {
                      required: "Booking date is required",
                    })}
                  />

                  <p className="text-red-500 text-sm">
                    {errors.bookingDate?.message}
                  </p>
                </TextField>

                {/* Driver */}
                <div className="w-full">
                  <Label>Need Driver?</Label>

                  <select
                    className="w-full border rounded-lg p-2 mt-1"
                    {...register("needDriver", {
                      required: "Driver field is required",
                    })}
                  >
                    <option value="">Select Option</option>

                    <option className="bg-gray-600 text-white" value="true">
                      Yes
                    </option>

                    <option className="bg-gray-600 text-white" value="false">
                      No
                    </option>
                  </select>

                  <p className="text-red-500 text-sm">
                    {errors.needDriver?.message}
                  </p>
                </div>

                {/* Note */}
                <TextField className="w-full">
                  <Label>Note</Label>

                  <Input
                    placeholder="Enter your note"
                    {...register("note", {
                      required: "note field is required",
                    })}
                  />
                </TextField>
              </Surface>
            </Modal.Body>

            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>

              <Button slot="close" form="booking-form" type="submit">
                Confirm Booking
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Form>
  );
};

export default BookingModal;
