"use client";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import Link from "next/link";

const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function RegisterForm() {
  const [inData, setInData] = useState(initialData);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className="bg-white w-80 lg:w-[32rem] mx-auto p-2 lg:p-8 lg:py-20 rounded flex flex-col gap-y-3"
      onSubmit={submitHandler}
      autoComplete="off"
    >
      <h1 className="text-black text-center text-3xl font-bold">Register</h1>
      <CustomInput
        name="firstName"
        placeholder="First name"
        type="text"
        required
        value={inData.firstName}
        onChange={changeHandler}
      />
      <CustomInput
        name="lastName"
        placeholder="Last name"
        type="text"
        required
        value={inData.lastName}
        onChange={changeHandler}
      />
      <CustomInput
        name="email"
        type="email"
        placeholder="Email"
        required
        value={inData.email}
        onChange={changeHandler}
      />
      <CustomInput
        name="password"
        type="password"
        placeholder="password"
        required
        value={inData.password}
        onChange={changeHandler}
      />
      <p className="text-gray-400 text-xs text-right">
        Already have an account?{" "}
        <Link href="/auth/login" className="hover:text-blue-600">
          Login
        </Link>
      </p>
      <CustomButton className="self-start">Register</CustomButton>
    </form>
  );
}

export default RegisterForm;
