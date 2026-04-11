import React, { useState } from "react";
import Input from "../../../shared/components/Input";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
        <form onSubmit={handleSubmit} className="space-y-6 mb-6">
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
          />

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              **Password**
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50/50 pr-12 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-200 text-sm"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-teal-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {showPassword ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200 text-lg"
          >
            **Log In →**
          </button>
        </form>

        <div>
          <p>
            Don't have an account ?{" "}
            <span className="text-blue-600 cursor-pointer">
              Register here...
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

export default LoginPage;
