"use client";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

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
      className="bg-white w-80 lg:w-[32rem] mx-auto p-2 lg:p-8 rounded flex flex-col gap-y-3"
      onSubmit={submitHandler}
    >
      <CustomInput
        name="email"
        type="email"
        required
        value={inData.email}
        onChange={changeHandler}
      />
      <CustomInput
        name="password"
        type="password"
        required
        value={inData.password}
        onChange={changeHandler}
      />
      <CustomButton className="self-start">Login</CustomButton>
    </form>
  );
}

export default LogInForm;
