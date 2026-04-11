import React, { useState } from "react";
import Input from "../../../shared/components/Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Button from "../../../shared/components/Button";

const RegisterPage = () => {
  let navigate = useNavigate()
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  let handleFormSubmit = (data) => {
    console.log(data)
    reset()
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background subtle pattern or decoration if needed */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-100/20 to-transparent"></div>

      <div className="relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-full max-w-md border border-white/50 max-h-[90vh] overflow-y-auto">
        {/* Logo square */}
        <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <svg
            className="w-10 h-10 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <rect width="20" height="20" rx="4" />
          </svg>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-slate-800 bg-clip-text text-transparent mb-2">
            **Azure Meridians**
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            **Employee Management System**
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="space-y-6 mb-6"
        >
          {/* Name field */}
          <Input
            register={register}
            name={"name"}
            rules={{
              required: "Name is required",
            }}
            placeholder={"Name"}
            type={"text"}
            label={" **Name** "}
            error={errors.name}
          />
          {/* Username/Email */}
          <Input
            register={register}
            name={"email"}
            rules={{
              required: "Email is required",
            }}
            placeholder={"admin@azuremeridian.com"}
            type={"email"}
            label={" **Username or Email** "}
            error={errors.email}
          />

          {/* Password */}
          <Input
            register={register}
            name={"password"}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "At least 6 characters are required",
              },
            }}
            placeholder={".Password"}
            type={"password"}
            label={" **Password** "}
            error={errors.password}
          />

          {/* Sign In Button */}
          <Button text={"**Sign Up →**"} />
        </form>

        <div>
          <p>
            Already have an account ?{" "}
            <span onClick={() => navigate('/')} className="text-blue-600 cursor-pointer">
              Login Here...
            </span>
          </p>
        </div>

        {/* Security Protocol */}
        <div className="mt-8 pt-8 border-t border-slate-200 flex items-center justify-center space-x-4 text-xs text-slate-500">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>**SSL Secure**</span>
          </div>
          <div className="w-px h-4 bg-slate-200"></div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>**256-bit AES**</span>
          </div>
          <span className="font-semibold">
            **Enterprise Security Protocol Active**
          </span>
        </div>

        {/* Technical Assistance */}
        <p className="mt-6 text-center text-xs text-slate-500">
          **Need technical assistance? Contact System Administrator**
        </p>
      </div>

      {/* Global Node Badge */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-700 border border-slate-200 shadow-md">
        **GLOBAL NODE: AZURE-NORTH**
      </div>
    </div>
  );
};

export default RegisterPage;
