// "use client";
// import React, { useState } from "react";
// import { Star } from "lucide-react";

// export default function ThankYouPage() {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   const [remark, setRemark] = useState("");

//   const submitFeedback = () => {
//     console.log("Rating:", rating, "Remark:", remark);
//     alert("✅ Thank you for your feedback!");
//     setRating(0);
//     setRemark("");
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
//       {/* Header */}
//       <h1 className="text-3xl font-bold text-gray-800 mb-4">
//         🎉 Thank you for attending your interview!
//       </h1>
//       <p className="text-gray-600 mb-8 text-center max-w-lg">
//         We will update you shortly. <br />
//         For any issue/query, contact us at{" "}
//         <a href="mailto:help@selectiq.in" className="text-indigo-600 font-semibold">
//           help@selectiq.in
//         </a>
//       </p>

//       {/* Rating */}
//       <div className="flex space-x-2 mb-6">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <Star
//             key={star}
//             className={`h-10 w-10 cursor-pointer ${
//               (hover || rating) >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
//             }`}
//             onClick={() => setRating(star)}
//             onMouseEnter={() => setHover(star)}
//             onMouseLeave={() => setHover(0)}
//           />
//         ))}
//       </div>

//       {/* Remarks */}
//       <textarea
//         value={remark}
//         onChange={(e) => setRemark(e.target.value)}
//         placeholder="Leave your feedback or remarks..."
//         className="w-full max-w-lg h-32 p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none mb-4"
//       />

//       {/* Submit Button */}
//       <button
//         onClick={submitFeedback}
//         disabled={!rating}
//         className={`px-6 py-3 rounded-lg font-semibold text-white ${
//           rating ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-400 cursor-not-allowed"
//         }`}
//       >
//         Submit Feedback
//       </button>
//     </div>
//   );
// }




"use client";
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

export default function ThankYouPage() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [remark, setRemark] = useState("");

  // ✅ Block scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const submitFeedback = () => {
    console.log("Rating:", rating, "Remark:", remark);
    alert("✅ Thank you for your feedback!");
    setRating(0);
    setRemark("");
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-50 overflow-hidden px-4">
      <div className="flex flex-col items-center text-center max-w-xl space-y-4">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800">
          🎉 Thank you for attending your interview!
        </h1>

        <p className="text-gray-600">
          We will update you shortly. <br />
          For any issue/query, contact us at{" "}
          <a
            href="mailto:help@selectiq.in"
            className="text-indigo-600 font-semibold"
          >
            help@selectiq.in
          </a>
        </p>

        {/* Rating */}
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-10 w-10 cursor-pointer ${
                (hover || rating) >= star
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            />
          ))}
        </div>

        {/* Remarks */}
        <textarea
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
          placeholder="Leave your feedback or remarks..."
          className="w-full h-28 p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
        />

        {/* Submit Button */}
        <button
          onClick={submitFeedback}
          disabled={!rating}
          className={`px-6 py-3 rounded-lg font-semibold text-white ${
            rating
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit Feedback
        </button>
      </div>
            {/* Footer */}

      <footer className="bg-midnightLighter text-gray-400 text-center py-4">

        <p className="text-center text-gray-900 text-xs mt-12">
        © {new Date().getFullYear()} SelectIQ - Subsidary of{" "}
        <a 
          href="https://suyashabes.netlify.app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline hover:text-indigo-700 transition"
        >
          YSL Media
        </a>. All rights reserved 
        <br className="-pt-1"/>
         Made with ❤ in India
      </p>

      </footer>
    </div>
  );
}















