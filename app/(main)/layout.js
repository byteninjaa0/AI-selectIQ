// import React from 'react'
// import DashboardProvider from './provider'

// function DashboardLayout({ children }) {
//   return (
//     <div>
//         <DashboardProvider>
//           <div className='p-10'>
//             {children}
//           </div>  
//         </DashboardProvider>
//     </div>
//   )
// }

// export default DashboardLayout

//------new bc----------

"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/services/supabaseClient";
import { useRouter } from "next/navigation";
import DashboardProvider from "./provider";

function DashboardLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        // 🚫 agar login nahi hai → auth page pe bhej do
        router.push("/auth");
      }
      setLoading(false);
    });
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl">
        Checking authentication...
      </div>
    );
  }

  return (
    <DashboardProvider>
      <div className="p-1">{children}</div>
    </DashboardProvider>
  );
}

export default DashboardLayout;

