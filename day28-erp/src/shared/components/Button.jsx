import React from "react";

const Button = ({text}) => {
  return (
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200 text-lg"
    >
      {text}
    </button>
  );
};

export default Button;
