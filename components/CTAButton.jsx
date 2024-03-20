"use client";
import React from "react";

function CTAButton({ children, action = null }) {
  return (
    <button
      onClick={() => (action ? action() : null)}
      className="bg-[#3F8E00] px-16 py-5 rounded-md border-[1px] border-[#62BA1B] shadow-bg-CTA w-[300px] text-white text-shadow text-xl hover:bg-green-500 transition-all duration-500"
    >
      {children}
    </button>
  );
}

export default CTAButton;
