"use client";
import React, { useEffect } from "react";
import { XCircle } from "lucide-react";

export default function NotQualifiedPage() {
  // ✅ Block scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-50 px-6 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center mb-4">
        <XCircle className="h-16 w-16 text-red-600 mb-2" />
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          You have not qualified for the next round ❌
        </h1>
      </div>

      {/* Message */}
      <p className="text-gray-600 text-center max-w-lg mb-6">
        Thank you for participating in the test. Unfortunately, you were not
        shortlisted for the upcoming round. <br /> 
        Don’t lose heart — keep practicing, and success will follow!
      </p>

      {/* Motivation */}
      <div className="text-center text-gray-700 bg-white shadow-md p-4 rounded-lg max-w-lg">
        <p className="font-medium">
          ✨ “Failure is simply the opportunity to begin again, this time more intelligently.” 
        </p>
      </div>

      {/* Footer */}
      <p className="text-gray-500 mt-8 text-sm text-center">
        For queries or support, reach us at{" "}
        <a
          href="mailto:help@selectiq.in"
          className="text-indigo-600 font-semibold"
        >
          help@selectiq.in
        </a>
      </p>

      <p className="text-center text-gray-400 text-xs mt-12">
        © {new Date().getFullYear()} SelectIQ - Subsidiary of{" "}
        <a
          href="https://suyashabes.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-indigo-400 transition"
        >
          YSL Media
        </a>. All rights reserved. <br />
        Made with ❤ in India
      </p>
    </div>
  );
}
