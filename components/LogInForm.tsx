"use client";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import Link from "next/link";

const initialData = {
  email: "",
  password: "",
};

function LogInForm() {
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
    >
      <h1 className="text-black text-center text-3xl font-bold">Login</h1>
      <CustomInput
        name="email"
        type="email"
        placeholder="email"
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
        No Account yet?{" "}
        <Link href="/auth/register" className="hover:text-blue-600">
          Register
        </Link>
      </p>
      <CustomButton className="self-start">Login</CustomButton>
    </form>
  );
}

export default LogInForm;
