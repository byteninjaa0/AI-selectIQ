"use client";
import React, { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function SorryPage() {
  const [reason, setReason] = useState("");

  // ✅ Block scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const submitReason = () => {
    console.log("Candidate reason for disqualification:", reason);
    alert("✅ Your reason has been submitted. We will review it.");
    setReason("");
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-50 px-6 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center mb-4">
        <AlertTriangle className="h-16 w-16 text-red-600 mb-2" />
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Sorry, your interview has been revoked 🚫
        </h1>
      </div>

      {/* Message */}
      <p className="text-gray-600 text-center max-w-lg mb-6">
        We detected suspicious activity or policy violations during your
        interview. <br />
        If you believe this was a mistake, please tell us why below.
      </p>

      {/* Reason/Query */}
      <textarea
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder="Explain why you think this was a mistake or raise your query..."
        className="w-full max-w-lg h-28 p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none mb-4 resize-none"
      />

      {/* Submit Button */}
      <button
        onClick={submitReason}
        disabled={!reason.trim()}
        className={`px-6 py-3 rounded-lg font-semibold pb-4 text-white ${
          reason.trim()
            ? "bg-red-600 hover:bg-red-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Submit Appeal
      </button>

      {/* Footer */}
      <p className="text-gray-500 mt-4 text-sm text-center pb-8">
        We will update you shortly. <br />
        For any issue/query, contact us at{" "}
        <a
          href="mailto:help@selectiq.in"
          className="text-indigo-600 font-semibold"
        >
          help@selectiq.in
        </a>

        <p className="text-center text-gray-600 text-xs mt-12 -mb-8">
        © {new Date().getFullYear()} SelectIQ - Subsidary of{" "}
        <a 
          href="https://suyashabes.netlify.app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline hover:text-indigo-400 transition"
        >
          YSL Media
        </a>. All rights reserved 
        <br className="mt-1.5"/>
         Made with ❤ in India
      </p>
      </p>
      
        <p className="text-center text-gray-300 text-xs mt-12">
        © {new Date().getFullYear()} SelectIQ - Subsidary of{" "}
        <a 
          href="https://suyashabes.netlify.app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline hover:text-indigo-400 transition"
        >
          YSL Media
        </a>. All rights reserved 
        <br className="mt-1.5"/>
        <br/> Made with ❤ in India
      </p>
      
    </div>
  );
}

