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

const LoginPage = () => {
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
      <h1 className="text-4xl font-bold text-center">Login</h1>
      <Form
        
        onSubmit={handleSubmit(handleLogin)}
      >
        <TextField isRequired name="email" type="email">
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

        
          <Button className='mt-4 w-full py-4 bg-linear-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-black text-sm tracking-widest rounded-full shadow-[0_4px_25px_rgba(34,211,238,0.25)] ' type="submit">Submit</Button>

         
      
      </Form>
     <span className="mx-auto text-gray-500">or,</span>
      <Button variant="outline" className=" w-full "><FcGoogle />login with google</Button>
    </div>
    <p className="text-center my-4 mb-10">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-blue-500 hover:underline">
          Register here
        </Link>
      </p>
      
    </>
  );
};

export default LoginPage;
