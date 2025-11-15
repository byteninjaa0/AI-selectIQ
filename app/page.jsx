// "use client";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Video, Phone, CheckCircle } from "lucide-react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Home() {
//   const headingRef = useRef(null);
//   const stepsRef = useRef([]);
//   const heroImgRef = useRef(null);

//   // ✅ Dynamic Text State
//   const words = ["Simple", "Effective", "Quicker"];
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);

//   useEffect(() => {
//     // Rotate text every 2.5s
//     const interval = setInterval(() => {
//       setCurrentWordIndex((prev) => (prev + 1) % words.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     // ✅ Letter-by-letter Hero animation
//     if (headingRef.current) {
//       const letters = headingRef.current.querySelectorAll("span");
//       gsap.fromTo(
//         letters,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.6,
//           stagger: 0.05,
//           ease: "power3.out",
//         }
//       );
//     }

//     // ✅ Hero Image parallax effect
//     if (heroImgRef.current) {
//       gsap.to(heroImgRef.current, {
//         yPercent: -20,
//         ease: "none",
//         scrollTrigger: {
//           trigger: heroImgRef.current,
//           start: "top bottom",
//           scrub: true, // smooth parallax
//         },
//       });
//     }

//     // ✅ Timeline steps scroll animation
//     gsap.fromTo(
//       stepsRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.3,
//         duration: 0.8,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: stepsRef.current[0]?.parentNode,
//           start: "top 80%",
//         },
//       }
//     );
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col">
//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20">
//         {/* Left Content */}
//         <div className="max-w-xl">
//           <h1
//             ref={headingRef}
//             className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight flex flex-wrap gap-2"
//           >
//             Smart Hiring Made{" "}
//             <motion.span
//               key={currentWordIndex} // trigger re-animation
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.6 }}
//               className="text-primary"
//             >
//               {words[currentWordIndex]}
//             </motion.span>
//           </h1>

//           <p className="mt-4 text-lg text-gray-600">
//             Automate interviews with AI, schedule phone screenings, and hire
//             faster with{" "}
//             <span className="font-semibold text-secondary">SelectIQ</span>.
//           </p>

//           <div className="mt-8 flex gap-4">
//             <Link href="/auth">
//               <Button className="bg-primary text-white hover:bg-primary/90">
//                 Get Started
//               </Button>
//             </Link>
//             <Link href="/dashboard">
//               <Button variant="secondary">Explore Dashboard</Button>
//             </Link>
//           </div>
//         </div>

//         {/* Right Content (Hero Illustration with Parallax) */}
//         <div className="mt-10 md:mt-0 md:ml-10 overflow-hidden">
//           <Image
//             ref={heroImgRef}
//             src="/login.jpg"
//             alt="AI Interview"
//             width={500}
//             height={400}
//             className="rounded-2xl shadow-lg"
//           />
//         </div>
//       </section>

//       {/* Options Section */}
//       <section className="bg-white py-16 px-6 md:px-0">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
//             Get Started with SelectIQ
//           </h2>

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-6"
//           >
//             <Link
//               href="/dashboard/create-interview"
//               className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 flex flex-col gap-3 hover:shadow-lg transition"
//             >
//               <Video className="p-3 text-primary bg-indigo-100 rounded-lg h-12 w-12" />
//               <h3 className="font-semibold text-lg">Create New Interview</h3>
//               <p className="text-gray-600 text-sm">
//                 Create Smart AI Interviews and schedule them with candidates.
//               </p>
//             </Link>

//             <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 hover:shadow-lg transition">
//               <Phone className="p-3 text-primary bg-indigo-100 rounded-lg h-12 w-12" />
//               <h3 className="font-semibold text-lg">
//                 Create Phone Screening Call
//               </h3>
//               <p className="text-gray-600 text-sm mt-1">
//                 Schedule phone screening calls with candidates easily.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <section className="bg-gray-50 py-16 px-6 md:px-0">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
//             How SelectIQ Works
//           </h2>

//           <div className="relative border-l-4 border-indigo-200 pl-8 space-y-10">
//             {[
//               {
//                 title: "Step 1: Create Interview",
//                 desc: "Use our AI to design interview questions tailored for your job roles.",
//               },
//               {
//                 title: "Step 2: Schedule Screening",
//                 desc: "Schedule AI interviews or phone calls with candidates in one click.",
//               },
//               {
//                 title: "Step 3: Get AI Insights",
//                 desc: "Receive instant candidate reports and analytics to make smart hiring decisions.",
//               },
//             ].map((step, i) => (
//               <div
//                 key={i}
//                 ref={(el) => (stepsRef.current[i] = el)}
//                 className="flex items-start gap-3 opacity-0"
//               >
//                 <CheckCircle className="text-primary h-6 w-6 mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-lg">{step.title}</h3>
//                   <p className="text-gray-600 text-sm">{step.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <motion.section
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="bg-primary text-white py-16"
//       >
//         <div className="max-w-4xl mx-auto text-center px-6">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Ready to Simplify Your Hiring?
//           </h2>
//           <p className="mb-6 text-lg text-indigo-100">
//             Start using SelectIQ today and streamline your recruitment process
//             with AI.
//           </p>
//           <Link href="/auth">
//             <Button className="bg-white text-primary hover:bg-indigo-100">
//               Get Started for Free
//             </Button>
//           </Link>
//         </div>
//       </motion.section>
//     </div>
//   );
// }


//--------- NEW PAGE ---------

// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Video, Phone, CheckCircle } from "lucide-react";
// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ThemeToggle from "@/components/ui/ThemeToggle";

// gsap.registerPlugin(ScrollTrigger);

// export default function Home() {
//   const headingRef = useRef(null);
//   const stepsRef = useRef([]);
//   const heroImgRef = useRef(null);
//   const featureImgRef = useRef(null);

//   // ✅ word changer
//   const words = ["Simple", "Effective", "Quick"];
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);

//   useEffect(() => {
//     // ✅ Word cycle
//     const interval = setInterval(() => {
//       setCurrentWordIndex((prev) => (prev + 1) % words.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     // ✅ Animate Hero heading letters
//     if (headingRef.current) {
//       const letters = headingRef.current.querySelectorAll("span");
//       gsap.fromTo(
//         letters,
//         { opacity: 0, y: 40 },
//         { opacity: 1, y: 0, stagger: 0.03, duration: 0.6 }
//       );
//     }

//     // ✅ Parallax Hero & Feature
//     if (heroImgRef.current) {
//       gsap.to(heroImgRef.current, {
//         yPercent: -15,
//         scrollTrigger: { trigger: heroImgRef.current, scrub: true },
//       });
//     }
//     if (featureImgRef.current) {
//       gsap.to(featureImgRef.current, {
//         yPercent: -10,
//         scrollTrigger: { trigger: featureImgRef.current, scrub: true },
//       });
//     }

//     // ✅ Timeline scroll animation
//     gsap.fromTo(
//       stepsRef.current,
//       { opacity: 0, y: 40 },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.25,
//         duration: 0.7,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: stepsRef.current[0]?.parentNode,
//           start: "top 85%",
//         },
//       }
//     );
//   }, []);

//   return (
//     <div className="bg-gradient-to-b from-indigo-50 to-white dark:from-gray-950 dark:to-black text-gray-900 dark:text-gray-100 scroll-smooth">
//       {/* Navbar */}
//       <header className="sticky top-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
//         <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-6">
//           <Link href="/">
//             <Image src="/logo.png" alt="logo" width={110} height={35} />
//           </Link>
//           <nav className="hidden md:flex flex justify-center gap-6 text-sm font-medium">
//             <Link href="#features">Features</Link>
//             <Link href="#process">Process</Link>
//             <Link href="#contact">Contact</Link>
//           </nav>
//           {/* ✅ Dark mode toggle */}
//           <ThemeToggle />
//         </div>
//       </header>

//       {/* Hero */}
//       <section className="max-w-6xl mx-auto px-6 py-14 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
//         <div className="max-w-xl">
//           <h1
//             ref={headingRef}
//             className="text-4xl md:text-5xl font-bold leading-tight flex flex-wrap gap-2"
//           >
//             Smart Hiring Made{" "}
//             <motion.span
//               key={currentWordIndex}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="text-primary"
//             >
//               {words[currentWordIndex]}
//             </motion.span>
//           </h1>
//           <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
//             Automate interviews with AI, schedule phone screenings, and hire
//             faster with <span className="font-semibold">SelectIQ</span>.
//           </p>
//           <div className="mt-6 flex gap-3">
//             <Link href="/auth">
//               <Button className="bg-primary text-white hover:bg-primary/90">
//                 Get Started
//               </Button>
//             </Link>
//             <Link href="/dashboard">
//               <Button variant="secondary">Explore Dashboard</Button>
//             </Link>
//           </div>
//         </div>
//         <Image
//           ref={heroImgRef}
//           src="/login.jpg"
//           alt="AI Interview"
//           width={480}
//           height={380}
//           className="rounded-2xl shadow-xl"
//         />
//       </section>

//       {/* Features */}
//       <section
//         id="features"
//         className="py-12 md:py-16 px-6 bg-white dark:bg-gray-950"
//       >
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl font-bold mb-4">Why Choose SelectIQ?</h2>
//             <p className="text-gray-600 dark:text-gray-400 mb-6">
//               SelectIQ helps you streamline your hiring process with AI-powered
//               automation and smart insights.
//             </p>
//             <ul className="space-y-3 text-sm">
//               <li className="flex items-center gap-2">
//                 <CheckCircle className="text-primary" /> AI Interview Questions
//               </li>
//               <li className="flex items-center gap-2">
//                 <CheckCircle className="text-primary" /> Auto Scheduling
//               </li>
//               <li className="flex items-center gap-2">
//                 <CheckCircle className="text-primary" /> Instant Reports
//               </li>
//             </ul>
//           </div>
//           <Image
//             ref={featureImgRef}
//             src="/login.jpg"
//             alt="Features"
//             width={480}
//             height={320}
//             className="rounded-xl shadow-lg"
//           />
//         </div>
//       </section>

//       {/* Timeline */}
//       <section
//         id="process"
//         className="py-12 md:py-16 px-6 bg-gray-50 dark:bg-gray-900"
//       >
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold mb-10 text-center">How It Works</h2>
//           <div className="relative border-l-4 border-indigo-200 dark:border-indigo-700 pl-8 space-y-8">
//             {[
//               { title: "Step 1: Create Interview", desc: "Design questions with AI." },
//               { title: "Step 2: Schedule Screening", desc: "Set up AI or phone interviews." },
//               { title: "Step 3: Get Insights", desc: "View instant analytics & reports." },
//             ].map((step, i) => (
//               <div
//                 key={i}
//                 ref={(el) => (stepsRef.current[i] = el)}
//                 className="flex items-start gap-3 opacity-0"
//               >
//                 <CheckCircle className="text-primary h-5 w-5 mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-lg">{step.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-400 text-sm">{step.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer
//         id="contact"
//         className="bg-gray-900 text-gray-400 py-8 px-6 text-sm"
//       >
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
//           <div>
//             <Image src="/logo.png" alt="logo" width={100} height={35} />
//             <p className="mt-2">SelectIQ - Smart Hiring, Made Simple.</p>
//           </div>
//           <div>
//             <h4 className="font-semibold text-white mb-2">About</h4>
//             <ul className="space-y-1">
//               <li>
//                 <Link href="#">Our Story</Link>
//               </li>
//               <li>
//                 <Link href="#">Careers</Link>
//               </li>
//               <li>
//                 <Link href="#">Blog</Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold text-white mb-2">Contact</h4>
//             <ul className="space-y-1">
//               <li>Email: support@selectiq.in</li>
//               <li> <Link href="https://wa.link/9tu6s1">Phone: +91-7704004470</Link></li>
//               <li>
//                 <Link href="#">Privacy Policy</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="text-center text-xs mt-6 text-gray-500">
//           © {new Date().getFullYear()} SelectIQ - Subsidary of YSL Media . Made with ❤ in India. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }


//======= 3rd========



















// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import {
//   Video,
//   Phone,
//   CheckCircle,
//   Brain,
//   Clock,
//   BarChart,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import ThemeToggle from "@/components/ui/ThemeTogglee";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// export default function Home() {
//   const headingRef = useRef(null);
//   const stepsRef = useRef([]);
//   const heroImgRef = useRef(null);
//   const featureImgRef = useRef(null);
//   const cursorRef = useRef(null);

//   // ✅ word changer
//   const words = ["Simple", "Effective", "Quick"];
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWordIndex((prev) => (prev + 1) % words.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     // ✅ GSAP ScrollSmoother
//     ScrollSmoother.create({
//       smooth: 1.2, // higher = smoother
//       effects: true,
//     });

//     // Animate heading letters
//     if (headingRef.current) {
//       const letters = headingRef.current.querySelectorAll("span");
//       gsap.fromTo(
//         letters,
//         { opacity: 0, y: 40 },
//         { opacity: 1, y: 0, stagger: 0.03, duration: 0.6 }
//       );
//     }

//     // Parallax hero & features
//     [heroImgRef, featureImgRef].forEach((ref) => {
//       if (ref.current) {
//         gsap.to(ref.current, {
//           yPercent: -15,
//           scrollTrigger: { trigger: ref.current, scrub: true },
//         });
//       }
//     });

//     // Timeline animation
//     gsap.fromTo(
//       stepsRef.current,
//       { opacity: 0, y: 40 },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.25,
//         duration: 0.7,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: stepsRef.current[0]?.parentNode,
//           start: "top 85%",
//         },
//       }
//     );

//     // ✅ Premium dark glow cursor
//     const cursor = cursorRef.current;
//     const moveCursor = (e) => {
//       gsap.to(cursor, {
//         x: e.clientX - 15,
//         y: e.clientY - 15,
//         duration: 0.25,
//         ease: "power3.out",
//       });
//     };
//     window.addEventListener("mousemove", moveCursor);

//     // Magnetic hover
//     const targets = document.querySelectorAll("button, a");
//     targets.forEach((el) => {
//       el.addEventListener("mouseenter", () => {
//         gsap.to(cursor, {
//           scale: 1.8,
//           backgroundColor: "rgba(147, 197, 253, 0.8)", // lighter blue glow
//           boxShadow: "0 0 20px 8px rgba(147,197,253,0.7)",
//         });
//       });
//       el.addEventListener("mouseleave", () => {
//         gsap.to(cursor, {
//           scale: 1,
//           backgroundColor: "rgba(79,70,229,0.5)", // indigo glow
//           boxShadow: "0 0 12px 4px rgba(79,70,229,0.6)",
//         });
//       });
//     });

//     return () => window.removeEventListener("mousemove", moveCursor);
//   }, []);

//   return (
//     <div className="relative bg-gradient-to-b from-indigo-50 to-white dark:from-gray-950 dark:to-black text-gray-900 dark:text-gray-100 scroll-smooth">
//       {/* Custom cursor */}
//       <div
//         ref={cursorRef}
//         className="fixed top-0 left-0 w-8 h-8 bg-indigo-600/50 rounded-full pointer-events-none z-[9999]"
//       ></div>

//       {/* Navbar */}
//       <header className="sticky top-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
//         <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-6">
//           {/* Logo */}
//           <Link href="/">
//             <Image src="/logo.png" alt="logo" width={110} height={35} />
//           </Link>

//           {/* Links */}
//           <nav className="hidden md:flex gap-6 text-sm font-medium">
//             <Link href="#features">Features</Link>
//             <Link href="#process">Process</Link>
//             <Link href="#benefits">Benefits</Link>
//             <Link href="#pricing">Pricing</Link>
//             <Link href="#testimonials">Testimonials</Link>
//             <Link href="#partners">Partners</Link>
//           </nav>

//           {/* Right side */}
//           <div className="flex items-center gap-4">
//             <ThemeToggle />
//             <Link href="/auth">
//               <Button className="bg-primary text-white hover:bg-primary/90">
//                 Login
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Hero */}
//       <section className="max-w-6xl mx-auto px-6 py-14 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10">
//         <div className="max-w-xl">
//           <h1
//             ref={headingRef}
//             className="text-4xl md:text-5xl font-bold leading-tight flex flex-wrap gap-2"
//           >
//             Smart Hiring Made{" "}
//             <motion.span
//               key={currentWordIndex}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="text-primary"
//             >
//               {words[currentWordIndex]}
//             </motion.span>
//           </h1>
//           <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
//             Automate interviews with AI, schedule phone screenings, and hire
//             faster with <span className="font-semibold">SelectIQ</span>.
//           </p>
//           <div className="mt-6 flex gap-3">
//             <Link href="/auth">
//               <Button className="bg-primary text-white hover:bg-primary/90">
//                 Get Started
//               </Button>
//             </Link>
//             <Link href="/dashboard">
//               <Button variant="secondary">Explore Dashboard</Button>
//             </Link>
//           </div>
//         </div>
//         <Image
//           ref={heroImgRef}
//           src="/login.jpg"
//           alt="AI Interview"
//           width={480}
//           height={380}
//           className="rounded-2xl shadow-xl"
//         />
//       </section>

//       {/* Features */}
//       <section id="features" className="py-10 md:py-12 px-6 bg-white dark:bg-gray-950">
//         {/* ... same code as before */}
//       </section>

//       {/* Timeline */}
//       <section id="process" className="py-10 md:py-12 px-6 bg-gray-50 dark:bg-gray-900">
//         {/* ... same code as before */}
//       </section>

//       {/* Benefits */}
//       <section id="benefits" className="py-10 md:py-12 px-6 bg-white dark:bg-gray-950">
//         {/* ... same code as before */}
//       </section>

//       {/* Pricing */}
//       <section id="pricing" className="py-10 md:py-12 px-6 bg-gray-50 dark:bg-gray-900">
//         {/* ... pricing code */}
//       </section>

//       {/* Testimonials */}
//       <section id="testimonials" className="py-10 md:py-12 px-6 bg-white dark:bg-gray-950">
//         {/* ... testimonials code */}
//       </section>

//       {/* Partners */}
//       <section id="partners" className="py-10 md:py-12 px-6 bg-gray-50 dark:bg-gray-900">
//         {/* ... partners carousel */}
//       </section>

//       {/* Footer */}
//       <footer id="contact" className="bg-gray-900 text-gray-400 py-8 px-6 text-sm">
//         {/* ... footer code */}
//       </footer>
//     </div>
//   );
// }







// //====================  LAST  ==========

























































// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { CheckCircle, Brain, Clock, BarChart, ChartColumnBig } from "lucide-react";
// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import ThemeToggle from "@/components/ui/ThemeToggle";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// export default function Home() {
//   const headingRef = useRef(null);
//   const stepsRef = useRef([]);
//   const heroImgRef = useRef(null);
//   const featureImgRef = useRef(null);
//   const cursorRef = useRef(null);

//   // ✅ Changing words in Hero
//   const words = ["Simple", "Effective", "Quicker"];
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWordIndex((prev) => (prev + 1) % words.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     // ✅ Smooth scrolling
//     ScrollSmoother.create({ smooth: 1.2, effects: true });

//     // Animate Hero Heading
//     if (headingRef.current) {
//       const letters = headingRef.current.querySelectorAll("span");
//       gsap.fromTo(
//         letters,
//         { opacity: 0, y: 40 },
//         { opacity: 1, y: 0, stagger: 0.03, duration: 0.6 }
//       );
//     }

//     // Parallax on images
//     [heroImgRef, featureImgRef].forEach((ref) => {
//       if (ref.current) {
//         gsap.to(ref.current, {
//           yPercent: -10,
//           scrollTrigger: { trigger: ref.current, scrub: true },
//         });
//       }
//     });

//     // Timeline animation
//     gsap.fromTo(
//       stepsRef.current,
//       { opacity: 0, y: 40 },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.25,
//         duration: 0.7,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: stepsRef.current[0]?.parentNode,
//           start: "top 85%",
//         },
//       }
//     );

//     // ✅ Cursor animation
//     const cursor = cursorRef.current;
//     const moveCursor = (e) => {
//       gsap.to(cursor, {
//         x: e.clientX - 15,
//         y: e.clientY - 15,
//         duration: 0.25,
//         ease: "power3.out",
//       });
//     };
//     window.addEventListener("mousemove", moveCursor);

//     const targets = document.querySelectorAll("button, a");
//     targets.forEach((el) => {
//       el.addEventListener("mouseenter", () => {
//         gsap.to(cursor, {
//           scale: 1.8,
//           backgroundColor: "rgba(147, 197, 253, 0.9)",
//           boxShadow: "0 0 40px 6px rgba(147,197,253,0.3)",
//         });
//       });
//       el.addEventListener("mouseleave", () => {
//         gsap.to(cursor, {
//           scale: 1,
//           backgroundColor: "rgba(79, 70, 229, 0.4)",
//           boxShadow: "0 0 15px 6px rgba(79, 70, 229, 0.4)",
//         });
//       });
//     });

//     return () => window.removeEventListener("mousemove", moveCursor);
//   }, []);

//   return (
//     <div className="relative bg-gradient-to-b from-indigo-50 to-white dark:from-gray-950 dark:to-black text-gray-900 dark:text-gray-100">
//       {/* Cursor */}
//       <div
//         ref={cursorRef}
//         className="fixed top-0 left-0 w-8 h-8 bg-indigo-600/70 rounded-full pointer-events-none z-[9999]"
//       ></div>

//       {/* Navbar */}
//       <header className="sticky top-0 z-50 bg-white/70 dark:bg-black/10 backdrop-blur border-b border-gray-200 dark:border-gray-800">
//         <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-6">
//           <Link href="/">
//             <Image src="/logo.png" alt="logo" width={135} height={50} />
//           </Link>
//           <nav className="hidden md:flex gap-6 text-sm font-medium">
//             <Link href="#features">Features</Link>
//             <Link href="#process">Process</Link>
//             <Link href="#benefits">Benefits</Link>
//             <Link href="#pricing">Pricing</Link>
//             <Link href="#testimonials">Testimonials</Link>
//             <Link href="#partners">Partners</Link>
//           </nav>
//           <div className="flex items-center gap-4">
//             <ThemeToggle />
//             <Link href="/auth">
//               <Button className="bg-primary text-white hover:bg-primary/90 dark:bg-indigo-900">
//                 Login
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="max-w-6xl mx-auto px-6 py-14 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10">
//         <div className="max-w-xl">
//           <h1
//             ref={headingRef}
//             className="text-4xl md:text-5xl font-bold leading-tight flex flex-wrap gap-2"
//           >
//             Smart Hiring Made{" "}
//             <motion.span
//               key={currentWordIndex}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="text-primary"
//             >
//               {words[currentWordIndex]}
//             </motion.span>
//           </h1>
//           <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
//             Automate interviews with AI, schedule phone screenings, and hire
//             faster with <span className="font-semibold">SelectIQ</span>.
//           </p>
//           <div className="mt-6 flex gap-3">
//             <Link href="/auth">
//               <Button className="bg-primary text-white hover:bg-primary/90 dark:bg-indigo-900">
//                 Get Started
//               </Button>
//             </Link>
//             <Link href="/dashboard">
//               <Button variant="secondary">Explore Dashboard</Button>
//             </Link>
//           </div>
//         </div>
//         <Image
//           ref={heroImgRef}
//           src="/login.jpg"
//           alt="AI Interview"
//           width={480}
//           height={380}
//           className="rounded-2xl shadow-xl"
//         />
//       </section>

//       {/* Features */}
//       <section id="features" className="py-10 md:py-12 px-6 bg-white dark:bg-gray-950">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//           <div>
//             <h2 className="text-3xl font-bold mb-4">Why Choose SelectIQ?</h2>
//             <p className="text-gray-600 dark:text-gray-400 mb-6">
//               SelectIQ streamlines your hiring with AI-powered automation,
//               scheduling, and analytics.
//             </p>
//             <ul className="space-y-3 text-sm">
//               <li className="flex items-center gap-2">
//                 <CheckCircle className="text-primary" /> AI Interview Questions
//               </li>
//               <li className="flex items-center gap-2">
//                 <CheckCircle className="text-primary" /> Auto Scheduling
//               </li>
//               <li className="flex items-center gap-2">
//                 <CheckCircle className="text-primary" /> Instant Reports
//               </li>
//             </ul>
//           </div>
//           <Image
//             ref={featureImgRef}
//             src="/login.jpg"
//             alt="Features"
//             width={480}
//             height={320}
//             className="rounded-xl shadow-lg"
//           />
//         </div>
//       </section>

//       {/* Process Timeline
//       <section id="process" className="py-10 md:py-12 px-6 bg-gray-50 dark:bg-gray-900">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold mb-10 text-center">How It Works</h2>
//           <div className="relative border-l-4 border-indigo-200 dark:border-indigo-700 pl-8 space-y-8">
//             {[
//               { title: "Step 1: Create Interview", desc: "Design questions with AI." },
//               { title: "Step 2: Schedule Screening", desc: "Set up AI or phone interviews." },
//               { title: "Step 3: Get Insights", desc: "View instant analytics & reports." },
//             ].map((step, i) => (
//               <div
//                 key={i}
//                 ref={(el) => (stepsRef.current[i] = el)}
//                 className="flex items-start gap-3 opacity-0"
//               >
//                 <CheckCircle className="text-primary h-5 w-5 mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-lg">{step.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-400 text-sm">{step.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* How It Works */}
//       {/* How It Works */}
// <section id="process" className="py-14 md:py-16 px-6 bg-gray-50 dark:bg-gray-900">
//   <div className="max-w-6xl mx-auto">
//     {/* Heading */}
//     <div className="text-center mb-12">
//       <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
//       <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//         SelectIQ makes hiring effortless. Follow these simple steps and streamline your recruitment process.
//       </p>
//     </div>

//     {/* Timeline Container */}
//     <div className="relative">
//       {/* Center Line */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-300 dark:bg-indigo-700"></div>

//           {/* Steps */}
//           <div className="space-y-16">
//             {[
//               {
//                 title: "Step 1: Create Interview",
//                 desc: "Design custom interview questions in minutes with AI-powered suggestions. No need to start from scratch.",
//                 icon: "✍️",
//               },
//               {
//                 title: "Step 2: Schedule & Invite",
//                 desc: "Easily share interview links or schedule sessions. Candidates can join anytime from their browser — no setup needed.",
//                 icon: "📧",
//               },
//               {
//                 title: "Step 3: Smart AI Interview",
//                 desc: "Candidates attend AI-driven interviews with automatic recording, transcription, and behavior analysis.",
//                 icon: "🎥",
//               },
//               {
//                 title: "Step 4: Instant Reports",
//                 desc: "Get instant reports with AI scoring, skill analysis, and recommendations — helping you hire smarter and faster.",
//                 icon: "📊",
//               },
//             ].map((step, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: i * 0.2 }}
//                 className={`relative flex items-center ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
//               >
//                 {/* Step Card */}
//                 <div
//                   className={`w-full md:w-5/12 p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 ${
//                     i % 2 === 0 ? "text-left" : "text-right"
//                   }`}
//                 >
//                   <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
//                     <span className="text-2xl">{step.icon}</span>
//                     <h3 className="font-semibold text-lg md:text-xl">{step.title}</h3>
//                   </div>
//                   <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
//                     {step.desc}
//                   </p>
//                 </div>

//                 {/* Circle Marker on Timeline */}
//                 <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-900"></div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>



//       {/* Benefits */}

//       <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
//         <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2></div>
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

//           {[
//             {
//               title: "AI Powered",
//               desc: "Smarter interview generation.",
//               icon: <Brain/>
//             },
//             {
//               title: "Time Saving",
//               desc: "Automate repetitive tasks.",
//               icon: <Clock/>
//             },
//             {
//               title: "Data Insights",
//               desc: "Analytics for better decisions.",
//               icon: <ChartColumnBig/>
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="flex flex-col items-center justify-center text-center bg-indigo-50 dark:bg-gray-800 rounded-2xl p-8 shadow hover:shadow-lg transition"
//             >
//               {/* Icon Centered */}
//               <div className="text-5xl mb-4">{item.icon}</div>

//               {/* Title */}
//               <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

//               {/* Description */}
//               <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>


//       {/* Pricing */}
//       <section id="pricing" className="py-10 md:py-12 px-6 bg-gray-50 dark:bg-gray-900">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-12">Pricing Plans</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Starter",
//                 price: "₹0",
//                 desc: "For individuals testing out SelectIQ.",
//                 features: ["1 Interview per month", "Basic AI Questions", "Email Support"],
//               },
//               {
//                 title: "Pro",
//                 price: "₹999 / mo",
//                 desc: "Best for growing startups & HR teams.",
//                 features: [
//                   "Unlimited Interviews",
//                   "Advanced AI Questioning",
//                   "Phone Screening",
//                   "Analytics Dashboard",
//                   "Priority Support",
//                 ],
//               },
//               {
//                 title: "Enterprise",
//                 price: "Custom",
//                 desc: "For large-scale hiring & enterprises.",
//                 features: [
//                   "Dedicated Account Manager",
//                   "Custom Integrations",
//                   "Unlimited Team Members",
//                   "White-label Branding",
//                   "24/7 Support",
//                 ],
//               },
//             ].map((plan, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.05 }}
//                 className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition"
//               >
//                 <h3 className="text-xl font-semibold">{plan.title}</h3>
//                 <p className="text-2xl font-bold mt-2">{plan.price}</p>
//                 <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{plan.desc}</p>
//                 <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
//                   {plan.features.map((f, j) => (
//                     <li key={j} className="flex items-center gap-2">
//                       <CheckCircle className="text-primary h-4 w-4" /> {f}
//                     </li>
//                   ))}
//                 </ul>
//                 <Button className="mt-6 w-full bg-primary text-white hover:bg-primary/90">
//                   Get Started
//                 </Button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section id="testimonials" className="py-10 md:py-12 px-6 bg-white dark:bg-gray-950">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
//           <motion.div
//             initial={{ x: 0 }}
//             animate={{ x: ["0%", "-100%"] }}
//             transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
//             className="flex gap-8"
//           >
//             {[
//               {
//                 name: "Ananya Singh",
//                 role: "HR Manager @TechCorp",
//                 feedback:
//                   "SelectIQ has transformed the way we hire. AI interviews save us hours every week.",
//                 img: "/user1.jpg",
//               },
//               {
//                 name: "Rahul Verma",
//                 role: "Talent Head @StartUpX",
//                 feedback:
//                   "Super smooth experience — scheduling, interviewing, and reporting all in one place!",
//                 img: "/user2.jpg",
//               },
//               {
//                 name: "Priya Sharma",
//                 role: "Recruiter @GlobalSoft",
//                 feedback:
//                   "The AI insights are game-changing. We reduced hiring time by 40% after using SelectIQ.",
//                 img: "/user3.jpg",
//               },
//               {
//                 name: "Aditya Mehta",
//                 role: "CEO @NextHire",
//                 feedback:
//                   "Best hiring platform I’ve ever used. The design, the automation, everything feels premium.",
//                 img: "/user4.jpg",
//               },
//             ].map((t, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.05 }}
//                 className="min-w-[320px] md:min-w-[380px] p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow hover:shadow-lg transition text-left"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <Image
//                     src={t.img}
//                     alt={t.name}
//                     width={50}
//                     height={50}
//                     className="rounded-full object-cover"
//                   />
//                   <div>
//                     <h4 className="font-semibold">{t.name}</h4>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm">“{t.feedback}”</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Partners */}
//       <section id="partners" className="py-10 md:py-12 px-6 bg-gray-50 dark:bg-gray-900">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-10">Our Trusted Partners</h2>
//           <motion.div
//             initial={{ x: 0 }}
//             animate={{ x: ["0%", "-100%"] }}
//             transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//             className="flex gap-12 items-center"
//           >
//             {["/partner1.png", "/partner2.png", "/partner3.png", "/partner4.png", "/partner5.png"].map(
//               (logo, i) => (
//                 <Image
//                   key={i}
//                   src={logo}
//                   alt={`Partner ${i}`}
//                   width={140}
//                   height={60}
//                   className="object-contain grayscale hover:grayscale-0 transition"
//                 />
//               )
//             )}
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer id="contact" className="bg-gray-900 text-gray-400 py-8 px-6 text-sm">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
//           <div>
//             <Image src="/logo.png" alt="logo" width={120} height={40} />
//             <p className="mt-3 text-gray-500 text-sm">
//               SelectIQ — Smart Hiring Made Simple
//             </p>
//           </div>
//           <div>
//             <h4 className="font-semibold text-white mb-2">Company</h4>
//             <ul className="space-y-1">
//               <li><Link href="#features">Features</Link></li>
//               <li><Link href="#pricing">Pricing</Link></li>
//               <li><Link href="#testimonials">Testimonials</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold text-white mb-2">Support</h4>
//             <ul className="space-y-1">
//               <li><Link href="#">Help Center</Link></li>
//               <li><Link href="#">Terms & Conditions</Link></li>
//               <li><Link href="#">Privacy Policy</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold text-white mb-2">Contact</h4>
//             <p>Email: support@selectiq.com</p>
//             <p>Phone: +91 98765 43210</p>
//           </div>
//         </div>
//         <p className="text-center text-gray-600 text-xs mt-6">
//           © {new Date().getFullYear()} SelectIQ. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }














































































































































//================= FINAL =====================










"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { CheckCircle, Brain, Clock, ChartColumnBig } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const cursorRef = useRef(null);
  const lenisRef = useRef(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Simple", "Effective", "Quicker"];

  // 🔹 Hero word animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 🔹 Lenis smooth scroll + cursor + parallax
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.05,
    });
    lenisRef.current = lenis;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // cursor movement
    const cursor = cursorRef.current;
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 12,
        y: e.clientY - 12,
        duration: 0.25,
        ease: "power3.out",
      });
    };
    window.addEventListener("mousemove", moveCursor);

    // parallax effect on cards
    gsap.utils.toArray(".parallax-card").forEach((card) => {
      gsap.to(card, {
        yPercent: -40,
        scrollTrigger: { trigger: card, scrub: true },
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);
  const handleNavClick = (e, hash) => {
    // allow open-in-new-tab + modifier keys
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    e.preventDefault();

    // update URL without jumping
    if (history && history.pushState) {
      history.pushState(null, "", `${window.location.pathname}${hash}`);
    }

    const el = document.querySelector(hash);
    if (!el) return;

    const headerOffset = 72; // adjust to match your header height
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    const lenis = lenisRef.current;
    if (lenis && typeof lenis.scrollTo === "function") {
      // duration in seconds (adjust to taste)
      lenis.scrollTo(top, { duration: 1.0 });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // fallback offset: if header covers it, you can do window.scrollBy(0, -headerOffset)
    }
  };


  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      {/* Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 bg-indigo-400/40 rounded-full pointer-events-none z-[9999] shadow-[0_0_20px_rgba(99,102,241,0.5)]"
      />

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/70 dark:bg-black/25 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-6">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={135} height={50} />
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link
              href="#features"
              scroll={false}
              onClick={(e) => handleNavClick(e, "#features")}
              className="group relative text-black transition-transform duration-300"
            >
              <span className="relative z-10">Features</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-full scale-x-0 origin-center bg-black transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>


            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <Link
                href="#process"
                scroll={false}
                onClick={(e) => handleNavClick(e, "#process")}
                className="group relative text-black transition-transform duration-300"
              >
                <span className="relative z-10">Process</span>
                <span className="absolute left-0 bottom-0 h-[2px] w-full scale-x-0 origin-center bg-black transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>

              <Link
                href="#benefits"
                scroll={false}
                onClick={(e) => handleNavClick(e, "#benefits")}
                className="group relative text-black transition-transform duration-300"
              >
                <span className="relative z-10">Benefits</span>
                <span className="absolute left-0 bottom-0 h-[2px] w-full scale-x-0 origin-center bg-black transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>

              <Link
                href="#pricing"
                scroll={false}
                onClick={(e) => handleNavClick(e, "#pricing")}
                className="group relative text-black transition-transform duration-300"
              >
                <span className="relative z-10">Pricing</span>
                <span className="absolute left-0 bottom-0 h-[2px] w-full scale-x-0 origin-center bg-black transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>

              <Link
                href="#testimonials"
                scroll={false}
                onClick={(e) => handleNavClick(e, "#testimonials")}
                className="group relative text-black transition-transform duration-300"
              >
                <span className="relative z-10">Testimonials</span>
                <span className="absolute left-0 bottom-0 h-[2px] w-full scale-x-0 origin-center bg-black transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>

              <Link
                href="#partners"
                scroll={false}
                onClick={(e) => handleNavClick(e, "#partners")}
                className="group relative text-black transition-transform duration-300"
              >
                <span className="relative z-10">Partners</span>
                <span className="absolute left-0 bottom-0 h-[2px] w-full scale-x-0 origin-center bg-black transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </nav>

          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/auth">
              <Button className="bg-primary text-white hover:bg-primary/90 dark:bg-indigo-900">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-6 md:pt-8 pb-0 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Block */}
        <div className="max-w-xl -mt-10 md:-mt-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Smart Hiring Made{" "}
            <motion.span
              key={currentWordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary italic font-serif font-extralight tracking-wide align-baseline dark:text-indigo-200"
            >
              {words[currentWordIndex]}
            </motion.span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Automate interviews with AI, schedule screenings, and hire faster
            with <span className="font-semibold">SelectIQ</span>.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/auth">
              <Button className="bg-primary text-white hover:bg-primary/90 dark:bg-indigo-900">
                Get Started
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="secondary">Explore Dashboard</Button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <Image
          src="/hero-1.png"
          alt="AI Interview"
          width={450}
          height={350}
          className="rounded-2xl parallax-card mt-24  -mb-6 md:-mb-8"
        />
      </section>




      {/* Features */}
      <section id="features" className="py-16 px-6 bg-white dark:bg-gray-950 -mb-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose SelectIQ?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              SelectIQ streamlines your hiring with AI-powered automation,
              scheduling, and analytics.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-primary" /> AI Interview Questions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-primary" /> Auto Scheduling
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-primary" /> Instant Reports
              </li>
            </ul>
          </div>
          <Image
            src="/login.jpg"
            alt="Features"
            width={480}
            height={320}
            className="rounded-xl  parallax-card mt-16 ml-13"
          />
        </div>
      </section>

      {/* Timeline with Curves */}
      {/* Timeline with Tree Branch Design */}
      <section id="process" className="relative py-20 bg-gray-50 dark:bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">How It Works</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Just 4 easy steps to smart hiring.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Stem (tree trunk) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-300 to-indigo-600 transform -translate-x-1/2" />

          {/* Steps as Branches */}
          <div className="space-y-24">
            {[
              { title: "Create Interview", desc: "Design custom interview questions with AI.", icon: "✍️" },
              { title: "Schedule & Invite", desc: "Share interview links easily with candidates.", icon: "📅" },
              { title: "AI Interview", desc: "Smart AI-driven interviews with instant analysis.", icon: "🤖" },
              { title: "Reports", desc: "Instant scoring & insights for faster hiring.", icon: "📊" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                {/* Branch Connector */}
                <div
                  className={`absolute top-8 w-12 h-1 bg-indigo-400 ${i % 2 === 0 ? "right-1/2" : "left-1/2"
                    }`}
                ></div>

                {/* Node (dot) */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Step Card */}
                <div
                  className={`w-full md:w-5/12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 parallax-card ${i % 2 === 0 ? "ml-16" : "mr-16 text-right"
                    }`}
                >
                  <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                    <span className="text-2xl">{step.icon}</span>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Benefits */}
      <section id="benefits" className="py-16 px-6 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-14 pb-8">Benifits</h2></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-7 text-center">
          {[
            { title: "AI Powered", desc: "Smarter interview generation.", icon: <Brain /> },
            { title: "Time Saving", desc: "Automate repetitive tasks.", icon: <Clock /> },
            { title: "Data Insights", desc: "Analytics for better decisions.", icon: <ChartColumnBig /> },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-indigo-50 dark:bg-gray-800 rounded-2xl p-8 shadow hover:shadow-lg transition parallax-card"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Add Pricing, Testimonials Carousel, Partners Carousel, Footer same as before but wrapped in motion.div with repeat loop */}
      {/* Pricing */}
      <section id="pricing" className="py-10 md:py-12 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Starter",
                price: "₹0",
                desc: "For individuals testing out SelectIQ.",
                features: ["1 Interview per month", "Basic AI Questions", "Email Support"],
              },
              {
                title: "Pro",
                price: "₹22,999 / mo",
                desc: "Best for growing startups & HR teams.",
                features: [
                  "100 Interviews",
                  "Full Recruitments",
                  "Advanced AI Questioning",
                  "Phone Screening",
                  "Analytics Dashboard",
                  "Priority Support",
                ],
              },
              {
                title: "Enterprise",
                price: "Custom",
                desc: "For large-scale hiring & enterprises.",
                features: [
                  "Dedicated Account Manager",
                  "Custom Integrations",
                  "Unlimited Team Members",
                  "White-label Branding",
                  "24/7 Support",
                ],
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold">{plan.title}</h3>
                <p className="text-2xl font-bold mt-2">{plan.price}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{plan.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle className="text-primary h-4 w-4" /> {f}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full bg-primary text-white hover:bg-primary/90 dark:bg-indigo-900"><Link href="https://wa.link/9tu6s1"
                  target="_blank"
                  rel="noopener noreferrer">
                  Get Started </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-16 px-6 bg-gray-50 dark:bg-gray-900 text-center"
      >
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
        <div className="overflow-hidden relative w-full">
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex gap-8 w-max"
          >
            {[
              {
                name: "Ananya Singh",
                role: "HR Manager @TechCorp",
                feedback:
                  "SelectIQ transformed our hiring. Saved us hours every week.",
                img: "/user1.jpg",
              },
              {
                name: "Rahul Verma",
                role: "Talent Head @StartUpX",
                feedback:
                  "Super smooth scheduling, interviewing, and reporting!",
                img: "/user2.jpg",
              },
              {
                name: "Priya Sharma",
                role: "Recruiter @GlobalSoft",
                feedback:
                  "AI insights reduced our hiring time by 40%. Game-changing!",
                img: "/user3.jpg",
              },
              {
                name: "Aditya Mehta",
                role: "CEO @NextHire",
                feedback:
                  "Best platform ever — automation + design feels premium.",
                img: "/user4.jpg",
              },
            ]
              // 👇 duplicate array to prevent blank gaps
              .concat([
                {
                  name: "Ananya Singh",
                  role: "HR Manager @TechCorp",
                  feedback:
                    "SelectIQ transformed our hiring. Saved us hours every week.",
                  img: "/user1.jpg",
                },
                {
                  name: "Rahul Verma",
                  role: "Talent Head @StartUpX",
                  feedback:
                    "Super smooth scheduling, interviewing, and reporting!",
                  img: "/user2.jpg",
                },
                {
                  name: "Priya Sharma",
                  role: "Recruiter @GlobalSoft",
                  feedback:
                    "AI insights reduced our hiring time by 40%. Game-changing!",
                  img: "/user3.jpg",
                },
                {
                  name: "Aditya Mehta",
                  role: "CEO @NextHire",
                  feedback:
                    "Best platform ever — automation + design feels premium.",
                  img: "/user4.jpg",
                },
              ])
              .map((t, i) => (
                <div
                  key={i}
                  className="min-w-[320px] md:min-w-[380px] p-6 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition text-left"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{t.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {t.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    “{t.feedback}”
                  </p>
                </div>
              ))}
          </motion.div>
        </div>
      </section>


      {/* Partners Carousel */}
      <section
        id="partners"
        className="py-16 px-6 bg-white dark:bg-gray-950 text-center"
      >
        <h2 className="text-3xl font-bold mb-12">Our Trusted Partners</h2>
        <div className="overflow-hidden relative w-full">
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-12 items-center w-max"
          >
            {[
              "/partner1.jpg",
              "/partner2.jpg",
              "/partner3.jpg",
              "/partner4.jpg",
              "/partner5.jpg",
            ]
              // 👇 2 baar map kar rahe hain
              .concat([
                "/partner1.jpg",
                "/partner2.jpg",
                "/partner3.jpg",
                "/partner4.jpg",
                "/partner5.jpg",
              ])
              .map((logo, i) => (
                <Image
                  key={i}
                  src={logo}
                  alt={`Partner ${i}`}
                  width={140}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition"
                />
              ))}
          </motion.div>
        </div>
      </section>



      {/* Footer */}
      <footer id="contact" className="bg-indigo-950 text-gray-300 py-10 px-10 text-sm pb-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <Image src="/logo.png" alt="logo" width={120} height={40} />
            <p className="mt-3 text-gray-300 text-sm">
              SelectIQ — Smart Hiring Made Simple
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Company</h4>
            <ul className="space-y-1">
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
              <li><Link href="#testimonials">Testimonials</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Support</h4>
            <ul className="space-y-1">
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <p>Email: support@selectiq.com</p>
            <Link href="https://wa.link/9tu6s1"
              target="_blank"
              rel="noopener noreferrer"
            ><p className="mt-1.5">Phone: +91 770-400-4470</p>
            </Link>

          </div>
        </div>
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
          <br className="mt-1.5" />
          <br /> Made with ❤ in India
        </p>

      </footer>
    </div>
  );
}

