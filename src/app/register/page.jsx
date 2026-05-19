"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(errors);
    console.log(data);
  };

  return (
    <>
    <div className="flex w-96 flex-col gap-4 mx-auto mt-25 shadow-2xl p-10 rounded-lg">
      <h1 className="text-4xl font-bold text-center">Register</h1>
      <Form
        
        onSubmit={handleSubmit(handleLogin)}
      >
        <TextField isRequired name="email" type="text">
          <Label>Name</Label>

          <Input
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required",

              
            })}
          />

          <FieldError>{errors.email && errors.email.message}</FieldError>

        </TextField>
        <TextField isRequired name="email" type="url" className='mt-4'>
          <Label>Photo URL</Label>

         <input
            type="text"
            className="input"
            placeholder="Enter image URL (optional)"
            {...register("image")}
          />

          {/* <p className="text-error">{errors.image?.message || "Make sure to enter a valid image URL."}</p> */}

          <FieldError>{errors.email && errors.email.message}</FieldError>
        </TextField>
        <TextField isRequired name="email" type="email" className='mt-4'>
          <Label>Email</Label>

          <Input
            placeholder="john@example.com"
            {...register("email", {
              required: "Email is required",

              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />

          <FieldError>{errors.email && errors.email.message}</FieldError>
        </TextField>

        <TextField isRequired name="password" type="password" className='mt-4'>
          <Label>Password</Label>

          <Input
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",

              minLength: {
                value: 6,
                message: "Minimum 6 characters required",
              },

              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                message: "Must contain 1 uppercase and 1 lowercase letter",
              },
            })}
          />

          <Description>Must be at least 6 characters</Description>

          <FieldError>{errors.password && errors.password.message}</FieldError>
        </TextField>

       
          <Button type="submit" className='w-full mt-6'>Submit</Button>

          
     
      </Form>
     <span className="mx-auto text-gray-500">or,</span>
      <Button variant="outline" className=" w-full"><FcGoogle />Register with google</Button>
    </div>
    <p className="text-center my-4 mb-10">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Login here
        </Link>
      </p>
    </>
  );
};

export default RegisterPage;
