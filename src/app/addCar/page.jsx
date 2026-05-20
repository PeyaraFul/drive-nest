"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

import React from "react";
import { useForm } from "react-hook-form";
const addData = async (data) => {
    try{
      const res =await fetch('http://localhost:5000/exploreCars',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data) 

        
    })
    const resData = await res.json();
    return resData;
    } 
    catch(error){
        console.log("error");
    }
}



const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddData = async (data) => {
   await addData(data);
    console.log(data);
  };

  return (
    <div>
      <div className="flex max-w-3xl flex-col gap-4 mx-auto mt-20 shadow-2xl p-10 pt-5 rounded-lg">
        <h1 className="text-3xl font-bold text-center">Add a car</h1>
        <Form onSubmit={handleSubmit(handleAddData)}>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Car Name */}
            <TextField isRequired>
              <Label>Car Name</Label>

              <Input
                placeholder="Enter your car name"
                {...register("carName", {
                  required: "Car Name is required",
                })}
              />

              <FieldError>{errors.carName?.message}</FieldError>
            </TextField>

            {/* Car Type */}
            <div className=" w-full">
              <Label>Car Type</Label>

              <select
                className="w-full border rounded-lg p-2 mt-1"
                // {...register("carType", {
                //   required: "Please select a type",
                // })}
              >
                <option value="">Select Type</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Coupe">Coupe</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Convertible">Convertible</option>
                <option value="Luxury">Luxury</option>
              </select>

              <p className="text-red-500 text-sm">{errors.carType?.message}</p>
            </div>

            {/* Image URL */}
            <TextField isRequired className="mt-4">
              <Label>Photo URL</Label>

              <Input
                type="url"
                placeholder="Enter image URL"
                {...register("imageURL", {
                  required: "Image URL is required",
                })}
              />

              <FieldError>{errors.imageURL?.message}</FieldError>
            </TextField>

            {/* Seat Capacity */}
            <TextField isRequired className="mt-4">
              <Label>Seat Capacity</Label>

              <Input
                type="number"
                placeholder="Enter seat capacity"
                {...register("seatCapacity", {
                  required: "Seat Capacity is required",
                })}
              />

              <FieldError>{errors.seatCapacity?.message}</FieldError>
            </TextField>

            {/* Trip Location */}
            <TextField isRequired className="mt-4">
              <Label>Trip Location</Label>

              <Input
                placeholder="Enter trip location"
                {...register("tripLocation", {
                  required: "Trip Location is required",
                })}
              />

              <FieldError>{errors.tripLocation?.message}</FieldError>
            </TextField>

            {/* Availability */}
            <div className="mt-4 w-full">
              <Label>Availability</Label>

              <select
                className="w-full border rounded-lg p-2 mt-1"
                {...register("availabilityStatus", {
                  required: "Availability is required",
                })}
              >
                <option value="">Select Availability</option>
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>

              <p className="text-red-500 text-sm">
                {errors.availabilityStatus?.message}
              </p>
            </div>

            {/* Description */}
            <TextField isRequired className="mt-4 col-span-2">
              <Label>Description</Label>

              <TextArea
                placeholder="Enter description"
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 20,
                    message: "Minimum 20 characters required",
                  },
                })}
              />

              <Description>Must be at least 20 characters</Description>

              <FieldError>{errors.description?.message}</FieldError>
            </TextField>
          </div>
          <div className="flex justify-around gap-15">
            <Button className="mt-6 w-full py-4 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-black text-sm tracking-widest rounded-full shadow-[0_4px_25px_rgba(34,211,238,0.25)]  " type="reset">
            
            Reset
          </Button>
          <Button className="mt-6 w-full py-4 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-black text-sm tracking-widest rounded-full shadow-[0_4px_25px_rgba(34,211,238,0.25)] " type="submit">
            Submit
          </Button>
          </div>
        </Form>
        

       
      </div>
    </div>
  );
};

export default Page;
