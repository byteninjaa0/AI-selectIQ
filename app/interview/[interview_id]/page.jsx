// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { Clock, Info, Video } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useParams } from "next/navigation";
// import { supabase } from "@/services/supabaseClient";
// import { toast } from "sonner";

// function Interview() {
//   const { interview_id } = useParams();
//   console.log(interview_id);
//   const [interviewData, setInterviewData] = useState();
//   const [userName,setUserName]=useState();
//   const [loading,setLoading]=useState(false);

//   useEffect(() => {
//     interview_id && GetInterviewDetails();
//   }, [interview_id]);

//   const GetInterviewDetails = async () => {
//     setLoading(true);
//     try{
//     let { data: Interviews, error } = await supabase
//       .from("Interviews")
//       .select("jobPosition,jobDescription,duration,type")
//       .eq("interview_id", interview_id);
//     setInterviewData(Interviews[0]);
//     setLoading(false);
//     if (Interviews?.length == 0){
//         toast('Incorrect Interview Link')

//         return;
//     }

//     }

    
//     catch(e)
//     {
//         setLoading(false);
//         toast('Incorrect interview Link')
//     }

//     setLoading(false);

//   };

//   return (
//     <div className="flex justify-center mt-10 px-5">
//       <div className="w-full max-w-2xl border rounded-lg bg-white p-7 md:p-10 shadow-sm">
//         {/* Logo */}
//         <div className="flex flex-col items-center">
//           <Image
//             src={"/logo.png"}
//             alt="logo"
//             width={100}
//             height={100}
//             className="w-[150px]"
//           />
//           <h2 className="mt-2 font-semibold">
//             AI-Powered Interview Platform
//           </h2>
//         </div>

//         {/* Candidate Illustration */}
//         <div className="flex justify-center">
//           <Image
//             src={"/candidate.png"}
//             alt="candidate"
//             width={400}
//             height={400}
//             className="w-[250px] my-6"
//           />
//         </div>

//         {/* Interview Title */}
//         <h2 className="text-center font-bold text-xl">
//           {interviewData?.jobPosition}
//         </h2>
//         <h2 className="flex justify-center gap-2 items-center text-gray-500 mt-3">
//           <Clock /> {interviewData?.duration}
//         </h2>

//         {/* Name Input */}
//         <div className="w-full mt-6">
//           <h2 className="mb-1">Enter your Full Name</h2>
//           <Input placeholder='e.g. Suyash Gupta' onChange={(event)=>setUserName(event.target.value)} />
//         </div>

//         {/* Info Section */}
//         <div className="p-5 bg-indigo-100 flex gap-4 rounded-lg mt-6 w-full">
//           <Info className="text-primary mt-1" />
//           <div>
//             <h2 className="font-bold">Before you Begin :</h2>
//             <ul className="list-disc list-inside text-sm mt-2 space-y-1">
//               <li className="text-primary">
//                 Test your camera and microphone
//               </li>
//               <li className="text-primary">
//                 Ensure you have a stable internet connection
//               </li>
//               <li className="text-primary">
//                 Keep your window Full-screen
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Button */}
//         <Button className={"mt-6 w-full font-bold"}
//         disabled={loading || !userName}
//         >
//           <Video /> Join Interview
//         </Button>
//       </div>
//     </div>
//   );

// ------------ 💥💦 Final [Down code]----------

    // return (
    // <div className="h-screen flex justify-center items-center bg-gray-100 px-4 overflow-hidden">
    //     <div className="w-full max-w-3xl border rounded-xl bg-white p-6 shadow-lg flex flex-col justify-between h-[90vh]">
        
    //     {/* Top Section */}
    //     <div className="flex flex-col items-center">
    //         {/* Logo */}
    //         <Image
    //         src={"/logo.png"}
    //         alt="logo"
    //         width={100}
    //         height={100}
    //         className="w-[130px]"
    //         />
    //         <h2 className="mt-2 font-semibold text-center">
    //         AI-Powered Interview Platform
    //         </h2>

    //         {/* Candidate Illustration */}
    //         <Image
    //         src={"/candidate.png"}
    //         alt="candidate"
    //         width={350}
    //         height={350}
    //         className="w-[220px] my-4"
    //         />

    //         {/* Interview Title */}
    //         <h2 className="font-bold text-lg text-center">
    //         {interviewData?.jobPosition}
    //         </h2>
    //         <h2 className="flex justify-center gap-2 items-center text-gray-500 mt-2 text-sm">
    //         <Clock size={16} /> {interviewData?.duration}
    //         </h2>
    //     </div>

    //     {/* Middle Section */}
    //     <div className="mt-3">
    //         <h2 className="mb-1 text-sm">Enter your Full Name</h2>
    //         <Input placeholder="e.g. Suyash Gupta" />
    //     </div>

    //     {/* Info Section */}
    //     <div className="p-4 bg-indigo-100 flex gap-3 rounded-lg mt-4 w-full text-sm">
    //         <Info className="text-primary mt-0.5" size={16} />
    //         <div>
    //         <h2 className="font-bold">Before you Begin :</h2>
    //         <ul className="list-disc list-inside mt-1 space-y-1 text-primary text-xs">
    //             <li>Test your camera and microphone</li>
    //             <li>Ensure you have a stable internet connection</li>
    //             <li>Keep your window Full-screen</li>
    //         </ul>
    //         </div>
    //     </div>

    //     {/* Bottom Button */}
    //     <Button className="mt-4 w-full font-bold">
    //         <Video size={18} /> Join Interview
    //     </Button>
    //     </div>
    // </div>
    // );


//----------- Gpt Single page mode [above]------------

    // return (
    // <div className="min-h-screen flex justify-center items-center  px-4">
    //     <div className="w-full max-w-3xl border rounded-xl bg-white p-8 shadow-lg">
    //     {/* Logo */}
    //     <div className="flex flex-col items-center">
    //         <Image
    //         src={"/logo.png"}
    //         alt="logo"
    //         width={100}
    //         height={100}
    //         className="w-[150px]"
    //         />
    //         <h2 className="mt-2 font-semibold">AI-Powered Interview Platform</h2>
    //     </div>

    //     {/* Candidate Illustration */}
    //     <div className="flex justify-center">
    //         <Image
    //         src={"/candidate.png"}
    //         alt="candidate"
    //         width={400}
    //         height={400}
    //         className="w-[280px] my-6"
    //         />
    //     </div>

    //     {/* Interview Title */}
    //     <h2 className="text-center font-bold text-xl">
    //         {interviewData?.jobPosition}
    //     </h2>
    //     <h2 className="flex justify-center gap-2 items-center text-gray-500 mt-3">
    //         <Clock /> {interviewData?.duration}
    //     </h2>

    //     {/* Name Input */}
    //     <div className="w-full mt-6">
    //         <h2 className="mb-1">Enter your Full Name</h2>
    //         <Input placeholder="e.g. Suyash Gupta" />
    //     </div>

    //     {/* Info Section */}
    //     <div className="p-5 bg-indigo-100 flex gap-4 rounded-lg mt-6 w-full">
    //         <Info className="text-primary mt-1" />
    //         <div>
    //         <h2 className="font-bold">Before you Begin :</h2>
    //         <ul className="list-disc list-inside text-sm mt-2 space-y-1">
    //             <li className="text-primary">
    //             Test your camera and microphone
    //             </li>
    //             <li className="text-primary">
    //             Ensure you have a stable internet connection
    //             </li>
    //             <li className="text-primary">
    //             Keep your window Full-screen
    //             </li>
    //         </ul>
    //         </div>
    //     </div>

    //     {/* Button */}
    //     <Button className="mt-6 w-full font-bold">
    //         <Video /> Join Interview
    //     </Button>
    //     </div>
    // </div>
    // );

// }

// export default Interview;

// --------final code-----------

//-----------Testing Mode----------

// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import Image from "next/image";
// import { Clock, Info, Video } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useParams } from "next/navigation";
// import { supabase } from "@/services/supabaseClient";
// import { toast } from "sonner";

// function Interview() {
//   const { interview_id } = useParams();
//   const [interviewData, setInterviewData] = useState();
//   const [userName, setUserName] = useState();
//   const [loading, setLoading] = useState(false);

//   // Camera & mic states
//   const [permissionError, setPermissionError] = useState("");
//   const [testing, setTesting] = useState(false);
//   const videoRef = useRef(null);
//   const [micLevel, setMicLevel] = useState(0);

//   useEffect(() => {
//     interview_id && GetInterviewDetails();
//   }, [interview_id]);

//   const GetInterviewDetails = async () => {
//     setLoading(true);
//     try {
//       let { data: Interviews, error } = await supabase
//         .from("Interviews")
//         .select("jobPosition,jobDescription,duration,type")
//         .eq("interview_id", interview_id);

//       if (Interviews?.length === 0) {
//         toast("Incorrect Interview Link");
//         setLoading(false);
//         return;
//       }

//       setInterviewData(Interviews[0]);
//       setLoading(false);
//     } catch (e) {
//       setLoading(false);
//       toast("Incorrect interview Link");
//     }
//   };

//   // Start test when button clicked
//   const startTest = async () => {
//     setTesting(true);
//     setPermissionError("");
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: true,
//       });

//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//       }

//       // Setup audio analyser for mic level
//       const audioContext = new AudioContext();
//       const source = audioContext.createMediaStreamSource(stream);
//       const analyser = audioContext.createAnalyser();
//       const dataArray = new Uint8Array(analyser.frequencyBinCount);

//       source.connect(analyser);

//       const checkMicLevel = () => {
//         analyser.getByteFrequencyData(dataArray);
//         let values = 0;
//         for (let i = 0; i < dataArray.length; i++) {
//           values += dataArray[i];
//         }
//         let average = values / dataArray.length;
//         setMicLevel(average);
//         requestAnimationFrame(checkMicLevel);
//       };

//       checkMicLevel();
//     } catch (err) {
//       setPermissionError("Please allow camera & microphone access to continue.");
//       setTesting(false);
//     }
//   };

//   return (
//     <div className="flex justify-center mt-10 px-5">
//       <div className="w-full max-w-2xl border rounded-lg bg-white p-7 md:p-10 shadow-sm">
//         {/* Logo */}
//         <div className="flex flex-col items-center">
//           <Image
//             src={"/logo.png"}
//             alt="logo"
//             width={100}
//             height={100}
//             className="w-[150px]"
//           />
//           <h2 className="mt-2 font-semibold">AI-Powered Interview Platform</h2>
//         </div>

//         {/* Candidate Illustration */}
//         <div className="flex justify-center">
//           <Image
//             src={"/candidate.png"}
//             alt="candidate"
//             width={400}
//             height={400}
//             className="w-[250px] my-6"
//           />
//         </div>

//         {/* Interview Title */}
//         <h2 className="text-center font-bold text-xl">
//           {interviewData?.jobPosition}
//         </h2>
//         <h2 className="flex justify-center gap-2 items-center text-gray-500 mt-3">
//           <Clock /> {interviewData?.duration}
//         </h2>

//         {/* Name Input */}
//         <div className="w-full mt-6">
//           <h2 className="mb-1">Enter your Full Name</h2>
//           <Input
//             placeholder="e.g. Suyash Gupta"
//             onChange={(event) => setUserName(event.target.value)}
//           />
//         </div>

//         {/* Test Audio & Video Button */}
//         <div className="mt-6">
//           <Button
//             onClick={startTest}
//             className="w-full font-bold"
//             variant="outline"
//             disabled={testing}
//           >
//             🎤📷 Test Audio & Video
//           </Button>
//         </div>

//         {/* Camera & Mic Test (only visible after button click) */}
//         {testing && (
//           <div className="mt-6">
//             <h2 className="mb-2 font-bold">Camera & Microphone Test</h2>
//             {permissionError ? (
//               <p className="text-red-500">{permissionError}</p>
//             ) : (
//               <div>
//                 <video
//                   ref={videoRef}
//                   autoPlay
//                   playsInline
//                   muted
//                   className="w-full h-48 rounded-lg border"
//                 />
//                 <div className="mt-3">
//                   <p className="text-sm text-gray-600">Mic Input Level:</p>
//                   <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
//                     <div
//                       className="bg-green-500 h-2 rounded-full transition-all duration-100"
//                       style={{ width: `${Math.min(micLevel, 100)}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {/* Info Section */}
//         <div className="p-5 bg-indigo-100 flex gap-4 rounded-lg mt-6 w-full">
//           <Info className="text-primary mt-1" />
//           <div>
//             <h2 className="font-bold">Before you Begin :</h2>
//             <ul className="list-disc list-inside text-sm mt-2 space-y-1">
//               <li className="text-primary">Test your camera and microphone</li>
//               <li className="text-primary">
//                 Ensure you have a stable internet connection
//               </li>
//               <li className="text-primary">Keep your window Full-screen</li>
//             </ul>
//           </div>
//         </div>

//         {/* Join Button */}
//         <Button
//           className={"mt-6 w-full font-bold"}
//           disabled={loading || !userName}
//         >
//           <Video /> Join Interview
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Interview;

//============🤍🤍🤍=================

// "use client";
// import React, { useEffect, useState, useRef, useContext } from "react";
// import Image from "next/image";
// import { Clock, Info, Loader2Icon, Settings, Settings2, Settings2Icon, SettingsIcon, Video } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useParams, useRouter } from "next/navigation";
// import { supabase } from "@/services/supabaseClient";
// import { toast } from "sonner";
// import { InterviewDataContext } from "@/context/InterviewDataContext";

// function Interview() {

//   const { interview_id } = useParams();
//   const [interviewData, setInterviewData] = useState();
//   const [userName, setUserName] = useState();
//   const [loading, setLoading] = useState(false);
//   const {interviewInfo,setInterviewInfo}=useContext(InterviewDataContext);
//   const router=useRouter();
//   // const [loading,setLoading]=useState(false);

//   // For testing camera & mic
//   const [testing, setTesting] = useState(false);
//   const [permissionError, setPermissionError] = useState("");
//   const [micLevel, setMicLevel] = useState(0);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     interview_id && GetInterviewDetails();
//   }, [interview_id]);

//   const GetInterviewDetails = async () => {
//     setLoading(true);
//     try {
//       let { data: Interviews, error } = await supabase
//         .from("Interviews")
//         .select("jobPosition,jobDescription,duration,type")
//         .eq("interview_id", interview_id);
//       setInterviewData(Interviews[0]);
//       setLoading(false);
//       if (Interviews?.length == 0) {
//         toast("Incorrect Interview Link");
//         return;
//       }
//     } catch (e) {
//       setLoading(false);
//       toast("Incorrect interview Link");
//     }
//     setLoading(false);
//   };

//   // Start camera & mic test
//   const startTest = async () => {
//     setTesting(true);
//     setPermissionError("");
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: true,
//       });
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//       }

//       // Mic analyser
//       const audioContext = new AudioContext();
//       const analyser = audioContext.createAnalyser();
//       const source = audioContext.createMediaStreamSource(stream);
//       source.connect(analyser);
//       const dataArray = new Uint8Array(analyser.frequencyBinCount);

//       const updateMicLevel = () => {
//         analyser.getByteFrequencyData(dataArray);
//         let values = 0;
//         for (let i = 0; i < dataArray.length; i++) {
//           values += dataArray[i];
//         }
//         const average = values / dataArray.length;
//         setMicLevel(average);
//         requestAnimationFrame(updateMicLevel);
//       };

//       updateMicLevel();
//     } catch (err) {
//       setPermissionError("Unable to access camera/microphone.");
//     }
//   };

//   const onJoinInterview= async()=>{
//     setLoading(true);
//     let { data: Interviews, error } = await supabase
//         .from('Interviews')
//         .select('*')
//         .eq('interview_id',interview_id); 

//       console.log(Interviews[0]);
//       setInterviewInfo({
//         userName:userName,
//         interviewData:Interview[0]

//       });
//       router.push('/interview/'+ interview_id +'/start')
//       setLoading(false);
//   }

//   return (
//     <div className="flex justify-center mt-10 px-5">
//       <div className="w-full max-w-2xl border rounded-lg bg-white p-7 md:p-10 shadow-sm">
//         {/* Logo */}
//         <div className="flex flex-col items-center">
//           <Image
//             src={"/logo.png"}
//             alt="logo"
//             width={100}
//             height={100}
//             className="w-[150px]"
//           />
//           <h2 className="mt-2 font-semibold">AI-Powered Interview Platform</h2>
//         </div>

//         {/* Candidate Illustration */}
//         <div className="flex justify-center">
//           <Image
//             src={"/candidate.png"}
//             alt="candidate"
//             width={400}
//             height={400}
//             className="w-[250px] my-6"
//           />
//         </div>

//         {/* Interview Title */}
//         <h2 className="text-center font-bold text-xl">
//           {interviewData?.jobPosition}
//         </h2>
//         <h2 className="flex justify-center gap-2 items-center text-gray-500 mt-3">
//           <Clock /> {interviewData?.duration}
//         </h2>

//         {/* Name Input */}
//         <div className="w-full mt-6">
//           <h2 className="mb-1">Enter your Full Name</h2>
//           <Input
//             placeholder="e.g. Suyash Gupta"
//             onChange={(event) => setUserName(event.target.value)}
//           />
//         </div>

//         {/* Info Section */}
//         <div className="p-5 bg-indigo-100 flex gap-4 rounded-lg mt-6 w-full">
//           <Info className="text-primary mt-1" />
//           <div>
//             <h2 className="font-bold">Before you Begin :</h2>
//             <ul className="list-disc list-inside text-sm mt-2 space-y-1">
//               <li className="text-primary">Test your camera and microphone</li>
//               <li className="text-primary">
//                 Ensure you have a stable internet connection
//               </li>
//               <li className="text-primary">Keep your window Full-screen</li>
//             </ul>
//           </div>
//         </div>

//         {/* Join Button */}
//         <Button
//           className={"mt-6 w-full font-bold"}
//           disabled={loading || !userName}
//           onClick={()=>onJoinInterview()}
//         >
//           <Video /> {loading&&<Loader2Icon className="animate-spin" /> } Join Interview
//         </Button>

//         {/* Test Audio & Video Button */}
//         <div className="mt-3">
//           <Button
//             onClick={startTest}
//             className="w-full font-bold"
//             variant="outline"
//             disabled={testing}
//           >
//             <Settings2 /> Test Audio & Video
//           </Button>
//         </div>

//         {/* Camera & Mic Test (only visible after button click) */}
//         {testing && (
//           <div className="mt-6">
//             <h2 className="mb-2 font-bold">Camera & Microphone Test</h2>
//             {permissionError ? (
//               <p className="text-red-500">{permissionError}</p>
//             ) : (
//               <div>
//                 <video
//                   ref={videoRef}
//                   autoPlay
//                   playsInline
//                   muted
//                   className="w-full h-48 rounded-lg border"
//                 />
//                 <div className="mt-3">
//                   <p className="text-sm text-gray-600">Mic Input Level:</p>
//                   <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
//                     <div
//                       className="bg-green-500 h-2 rounded-full transition-all duration-100"
//                       style={{ width: `${Math.min(micLevel, 100)}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Interview;

// ---------- 💛🧡🧡🧡❤ Full Screen Feature------

// "use client";
// import React, { useEffect, useState, useRef, useContext } from "react";
// import Image from "next/image";
// import {
//   Clock,
//   Info,
//   Loader2Icon,
//   Settings2,
//   Video,
// } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useParams, useRouter } from "next/navigation";
// import { supabase } from "@/services/supabaseClient";
// import { toast } from "sonner";
// import { InterviewDataContext } from "@/context/InterviewDataContext";

// function Interview() {
//   const { interview_id } = useParams();
//   const [interviewData, setInterviewData] = useState();
//   const [userName, setUserName] = useState();
//   const [loading, setLoading] = useState(false);
//   const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext);
//   const router = useRouter();

//   // For testing camera & mic
//   const [testing, setTesting] = useState(false);
//   const [permissionError, setPermissionError] = useState("");
//   const [micLevel, setMicLevel] = useState(0);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     interview_id && GetInterviewDetails();
//   }, [interview_id]);

//   const GetInterviewDetails = async () => {
//     setLoading(true);
//     try {
//       let { data: Interviews, error } = await supabase
//         .from("Interviews")
//         .select("jobPosition,jobDescription,duration,type")
//         .eq("interview_id", interview_id);
//       setInterviewData(Interviews[0]);
//       setLoading(false);
//       if (Interviews?.length == 0) {
//         toast("Incorrect Interview Link");
//         return;
//       }
//     } catch (e) {
//       setLoading(false);
//       toast("Incorrect interview Link");
//     }
//     setLoading(false);
//   };

//   // Start camera & mic test
//   const startTest = async () => {
//     setTesting(true);
//     setPermissionError("");
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: true,
//       });
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//       }

//       // Mic analyser
//       const audioContext = new AudioContext();
//       const analyser = audioContext.createAnalyser();
//       const source = audioContext.createMediaStreamSource(stream);
//       source.connect(analyser);
//       const dataArray = new Uint8Array(analyser.frequencyBinCount);

//       const updateMicLevel = () => {
//         analyser.getByteFrequencyData(dataArray);
//         let values = 0;
//         for (let i = 0; i < dataArray.length; i++) {
//           values += dataArray[i];
//         }
//         const average = values / dataArray.length;
//         setMicLevel(average);
//         requestAnimationFrame(updateMicLevel);
//       };

//       updateMicLevel();
//     } catch (err) {
//       setPermissionError("Unable to access camera/microphone.");
//     }
//   };

//   // Join Interview + Request Fullscreen
//   const onJoinInterview = async () => {
//     setLoading(true);
//     let { data: Interviews, error } = await supabase
//       .from("Interviews")
//       .select("*")
//       .eq("interview_id", interview_id);

//     if (Interviews && Interviews.length > 0) {
//       setInterviewInfo({
//         userName: userName,
//         interviewData: Interviews[0],
//       });

//       // 🔥 Request fullscreen before redirect
//       try {
//         if (document.documentElement.requestFullscreen) {
//           await document.documentElement.requestFullscreen();
//         } else if (document.documentElement.webkitRequestFullscreen) {
//           await document.documentElement.webkitRequestFullscreen(); // Safari
//         } else if (document.documentElement.msRequestFullscreen) {
//           await document.documentElement.msRequestFullscreen(); // IE/Edge
//         }
//       } catch (err) {
//         console.warn("Fullscreen request failed:", err);
//       }

//       router.push("/interview/" + interview_id + "/start");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex justify-center mt-10 px-5">
//       <div className="w-full max-w-2xl border rounded-lg bg-white p-7 md:p-10 shadow-sm">
//         {/* Logo */}
//         <div className="flex flex-col items-center">
//           <Image
//             src={"/logo.png"}
//             alt="logo"
//             width={100}
//             height={100}
//             className="w-[150px]"
//           />
//           <h2 className="mt-2 font-semibold">AI-Powered Interview Platform</h2>
//         </div>

//         {/* Candidate Illustration */}
//         <div className="flex justify-center">
//           <Image
//             src={"/candidate.png"}
//             alt="candidate"
//             width={400}
//             height={400}
//             className="w-[250px] my-6"
//           />
//         </div>

//         {/* Interview Title */}
//         <h2 className="text-center font-bold text-xl">
//           {interviewData?.jobPosition}
//         </h2>
//         <h2 className="flex justify-center gap-2 items-center text-gray-500 mt-3">
//           <Clock /> {interviewData?.duration}
//         </h2>

//         {/* Name Input */}
//         <div className="w-full mt-6">
//           <h2 className="mb-1">Enter your Full Name</h2>
//           <Input
//             placeholder="e.g. Suyash Gupta"
//             onChange={(event) => setUserName(event.target.value)}
//           />
//         </div>

//         {/* Info Section */}
//         <div className="p-5 bg-indigo-100 flex gap-4 rounded-lg mt-6 w-full">
//           <Info className="text-primary mt-1" />
//           <div>
//             <h2 className="font-bold">Before you Begin :</h2>
//             <ul className="list-disc list-inside text-sm mt-2 space-y-1">
//               <li className="text-primary">Test your camera and microphone</li>
//               <li className="text-primary">
//                 Ensure you have a stable internet connection
//               </li>
//               <li className="text-primary">Keep your window Full-screen</li>
//             </ul>
//           </div>
//         </div>

//         {/* Join Button */}
//         <Button
//           className={"mt-6 w-full font-bold"}
//           disabled={loading || !userName}
//           onClick={onJoinInterview}
//         >
//           <Video /> {loading && <Loader2Icon className="animate-spin" />} Join
//           Interview
//         </Button>

//         {/* Test Audio & Video Button */}
//         <div className="mt-3">
//           <Button
//             onClick={startTest}
//             className="w-full font-bold"
//             variant="outline"
//             disabled={testing}
//           >
//             <Settings2 /> Test Audio & Video
//           </Button>
//         </div>

//         {/* Camera & Mic Test (only visible after button click) */}
//         {testing && (
//           <div className="mt-6">
//             <h2 className="mb-2 font-bold">Camera & Microphone Test</h2>
//             {permissionError ? (
//               <p className="text-red-500">{permissionError}</p>
//             ) : (
//               <div>
//                 <video
//                   ref={videoRef}
//                   autoPlay
//                   playsInline
//                   muted
//                   className="w-full h-48 rounded-lg border"
//                 />
//                 <div className="mt-3">
//                   <p className="text-sm text-gray-600">Mic Input Level:</p>
//                   <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
//                     <div
//                       className="bg-green-500 h-2 rounded-full transition-all duration-100"
//                       style={{ width: `${Math.min(micLevel, 100)}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Interview;

// -----------💥💟💥 Force full-screen --------------


// "use client";
// import React, { useEffect, useState, useRef, useContext } from "react";
// import Image from "next/image";
// import { Clock, Info, Loader2Icon, Settings2, Video } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useParams, useRouter } from "next/navigation";
// import { supabase } from "@/services/supabaseClient";
// import { toast } from "sonner";
// import { InterviewDataContext } from "@/context/InterviewDataContext";

// function Interview() {
//   const { interview_id } = useParams();
//   const [interviewData, setInterviewData] = useState();
//   const [userName, setUserName] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { setInterviewInfo } = useContext(InterviewDataContext);
//   const router = useRouter();

//   // For testing camera & mic
//   const [testing, setTesting] = useState(false);
//   const [permissionError, setPermissionError] = useState("");
//   const [micLevel, setMicLevel] = useState(0);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     interview_id && GetInterviewDetails();
//   }, [interview_id]);

//   const GetInterviewDetails = async () => {
//     setLoading(true);
//     try {
//       let { data: Interviews } = await supabase
//         .from("Interviews")
//         .select("jobPosition,jobDescription,duration,type,questionList")
//         .eq("interview_id", interview_id);

//       setInterviewData(Interviews?.[0]);

//       if (!Interviews || Interviews.length === 0) {
//         toast("Incorrect Interview Link");
//       }
//     } catch (e) {
//       toast("Incorrect interview Link");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Camera & mic test
//   const startTest = async () => {
//     setTesting(true);
//     setPermissionError("");
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: true,
//       });
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//       }

//       // Mic analyser
//       const audioContext =
//         new (window.AudioContext || window.webkitAudioContext)();
//       const analyser = audioContext.createAnalyser();
//       const source = audioContext.createMediaStreamSource(stream);
//       source.connect(analyser);
//       const dataArray = new Uint8Array(analyser.frequencyBinCount);

//       const updateMicLevel = () => {
//         analyser.getByteFrequencyData(dataArray);
//         let values = 0;
//         for (let i = 0; i < dataArray.length; i++) values += dataArray[i];
//         const average = values / dataArray.length;
//         setMicLevel(average);
//         requestAnimationFrame(updateMicLevel);
//       };
//       updateMicLevel();
//     } catch (err) {
//       setPermissionError("Unable to access camera/microphone.");
//     }
//   };

//   // Join Interview
//   const onJoinInterview = async () => {
//     if (!userName) {
//       toast("Please enter your name first");
//       return;
//     }

//     setLoading(true);

//     // Request fullscreen first (inside user click)
//     try {
//       const el = document.documentElement;
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch (err) {
//       console.warn("Fullscreen request blocked:", err);
//     }

//     // Fetch interview
//     try {
//       const { data: Interviews, error } = await supabase
//         .from("Interviews")
//         .select("*")
//         .eq("interview_id", interview_id);

//       if (error || !Interviews || Interviews.length === 0) {
//         toast("Invalid Interview");
//         setLoading(false);
//         return;
//       }

//       // Save context info
//       console.log(Interviews[0]);
//       setInterviewInfo({
//         userName:userName,
//         interviewData: Interviews[0],
//       });

//       // Redirect
//       router.push(`/interview/${interview_id}/start`);
//     } catch (err) {
//       console.error("Error joining interview:", err);
//       toast("Something went wrong");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center mt-10 px-5">
//       <div className="w-full max-w-2xl border rounded-lg bg-white p-7 md:p-10 shadow-sm">
//         {/* Logo */}
//         <div className="flex flex-col items-center">
//           <Image
//             src={"/logo.png"}
//             alt="logo"
//             width={100}
//             height={100}
//             className="w-[150px]"
//           />
//           <h2 className="mt-2 font-semibold">AI-Powered Interview Platform</h2>
//         </div>

//         {/* Candidate Illustration */}
//         <div className="flex justify-center">
//           <Image
//             src={"/candidate.png"}
//             alt="candidate"
//             width={400}
//             height={400}
//             className="w-[250px] my-6"
//           />
//         </div>

//         {/* Interview Title */}
//         <h2 className="text-center font-bold text-xl">
//           {interviewData?.jobPosition}
//         </h2>
//         <h2 className="flex justify-center gap-2 items-center text-gray-500 mt-3">
//           <Clock /> {interviewData?.duration}
//         </h2>

//         {/* Name Input */}
//         <div className="w-full mt-6">
//           <h2 className="mb-1">Enter your Full Name</h2>
//           <Input
//             placeholder="e.g. Suyash Gupta"
//             value={userName}
//             onChange={(event) => setUserName(event.target.value)}
//           />
//         </div>

//         {/* Info Section */}
//         <div className="p-5 bg-indigo-100 flex gap-4 rounded-lg mt-6 w-full">
//           <Info className="text-primary mt-1" />
//           <div>
//             <h2 className="font-bold">Before you Begin :</h2>
//             <ul className="list-disc list-inside text-sm mt-2 space-y-1">
//               <li className="text-primary">Test your camera and microphone</li>
//               <li className="text-primary">
//                 Ensure you have a stable internet connection
//               </li>
//               <li className="text-primary">Remain in full screen throughout the interview </li>
//               <li className="text-primary">Don't Press any keys and leave Full-screen Mode 
//               </li>
//               <li className="text-primary">Using any unfair means may result in disqualification</li>
//             </ul>
//           </div>
//         </div>

//         {/* Join Button */}
//         <Button
//           className="mt-6 w-full font-bold flex items-center justify-center gap-2"
//           disabled={loading || !userName}
//           onClick={onJoinInterview}
//         >
//           {loading ? (
//             <>
//               <Loader2Icon className="animate-spin h-5 w-5" />
//               Joining Interview...
//             </>
//           ) : (
//             <>
//               <Video className="h-5 w-5" />
//               Join Interview
//             </>
//           )}
//         </Button>

//         {/* Test Audio & Video Button */}
//         <div className="mt-3">
//           <Button
//             onClick={startTest}
//             className="w-full font-bold"
//             variant="outline"
//             disabled={testing}
//           >
//             <Settings2 /> Test Audio & Video
//           </Button>
//         </div>

//         {/* Camera & Mic Test */}
//         {testing && (
//           <div className="mt-6">
//             <h2 className="mb-2 font-bold">Camera & Microphone Test</h2>
//             {permissionError ? (
//               <p className="text-red-500">{permissionError}</p>
//             ) : (
//               <div>
//                 <video
//                   ref={videoRef}
//                   autoPlay
//                   playsInline
//                   muted
//                   className="w-full h-48 rounded-lg border"
//                 />
//                 <div className="mt-3">
//                   <p className="text-sm text-gray-600">Mic Input Level:</p>
//                   <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
//                     <div
//                       className="bg-green-500 h-2 rounded-full transition-all duration-100"
//                       style={{ width: `${Math.min(micLevel, 100)}%` }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Interview;




//=========== TRY above ========






// "use client";
// import React, { useEffect, useState, useRef, useContext } from "react";
// import Image from "next/image";
// import { Clock, Info, Loader2Icon, Settings2, Video } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useParams, useRouter } from "next/navigation";
// import { supabase } from "@/services/supabaseClient";
// import { toast } from "sonner";
// import { InterviewDataContext } from "@/context/InterviewDataContext";

// function Interview() {
//   const { interview_id } = useParams();
//   const [interviewData, setInterviewData] = useState();
//   const [userName, setUserName] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { setInterviewInfo } = useContext(InterviewDataContext);
//   const router = useRouter();

//   // For testing camera & mic
//   const [testing, setTesting] = useState(false);
//   const [permissionError, setPermissionError] = useState("");
//   const [micLevel, setMicLevel] = useState(0);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     interview_id && GetInterviewDetails();
//   }, [interview_id]);

//   const GetInterviewDetails = async () => {
//     setLoading(true);
//     try {
//       let { data: Interviews } = await supabase
//         .from("Interviews")
//         .select("jobPosition,jobDescription,duration,type,questionList")
//         .eq("interview_id", interview_id);

//       setInterviewData(Interviews?.[0]);

//       if (!Interviews || Interviews.length === 0) {
//         toast("Incorrect Interview Link");
//       }
//     } catch (e) {
//       toast("Incorrect interview Link");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Camera & mic test
//   const startTest = async () => {
//     setTesting(true);
//     setPermissionError("");
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: true,
//       });
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//       }

//       // Mic analyser
//       const audioContext =
//         new (window.AudioContext || window.webkitAudioContext)();
//       const analyser = audioContext.createAnalyser();
//       const source = audioContext.createMediaStreamSource(stream);
//       source.connect(analyser);
//       const dataArray = new Uint8Array(analyser.frequencyBinCount);

//       const updateMicLevel = () => {
//         analyser.getByteFrequencyData(dataArray);
//         let values = 0;
//         for (let i = 0; i < dataArray.length; i++) values += dataArray[i];
//         const average = values / dataArray.length;
//         setMicLevel(average);
//         requestAnimationFrame(updateMicLevel);
//       };
//       updateMicLevel();
//     } catch (err) {
//       setPermissionError("Unable to access camera/microphone.");
//     }
//   };

//   // Join Interview
//   const onJoinInterview = async () => {
//     if (!userName) {
//       toast("Please enter your name first");
//       return;
//     }

//     setLoading(true);

//     // ✅ Stop test stream before joining
//     if (videoRef.current && videoRef.current.srcObject) {
//       videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//       videoRef.current.srcObject = null;
//     }

//     // Request fullscreen
//     try {
//       const el = document.documentElement;
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch (err) {
//       console.warn("Fullscreen request blocked:", err);
//     }

//     try {
//       const { data: Interviews, error } = await supabase
//         .from("Interviews")
//         .select("*")
//         .eq("interview_id", interview_id);

//       if (error || !Interviews || Interviews.length === 0) {
//         toast("Invalid Interview");
//         setLoading(false);
//         return;
//       }

//       // Save context info
//       setInterviewInfo({
//         userName: userName,
//         interviewData: Interviews[0],
//       });

//       // ✅ Redirect
//       router.push(`/interview/${interview_id}/start`);
//     } catch (err) {
//       console.error("Error joining interview:", err);
//       toast("Something went wrong");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center mt-10 px-5">
//       <div className="w-full max-w-2xl border rounded-lg bg-white p-7 md:p-10 shadow-sm">
//         <div className="flex flex-col items-center">
//           <Image src={"/logo.png"} alt="logo" width={100} height={100} className="w-[150px]" />
//           <h2 className="mt-2 font-semibold">AI-Powered Interview Platform</h2>
//         </div>

//         <div className="flex justify-center">
//           <Image src={"/candidate.png"} alt="candidate" width={400} height={400} className="w-[250px] my-6" />
//         </div>

//         <h2 className="text-center font-bold text-xl">{interviewData?.jobPosition}</h2>
//         <h2 className="flex justify-center gap-2 items-center text-gray-500 mt-3">
//           <Clock /> {interviewData?.duration}
//         </h2>

//         <div className="w-full mt-6">
//           <h2 className="mb-1">Enter your Full Name</h2>
//           <Input placeholder="e.g. Suyash Gupta" value={userName} onChange={(event) => setUserName(event.target.value)} />
//         </div>

//         <div className="p-5 bg-indigo-100 flex gap-4 rounded-lg mt-6 w-full">
//           <Info className="text-primary mt-1" />
//           <div>
//             <h2 className="font-bold">Before you Begin :</h2>
//             <ul className="list-disc list-inside text-sm mt-2 space-y-1">
//               <li className="text-primary">Test your camera and microphone</li>
//               <li className="text-primary">Ensure you have a stable internet connection</li>
//               <li className="text-primary">Remain in full screen throughout the interview</li>
//               <li className="text-primary">Don’t press any keys or exit fullscreen</li>
//               <li className="text-primary">Using unfair means may result in disqualification</li>
//             </ul>
//           </div>
//         </div>

//         <Button className="mt-6 w-full font-bold flex items-center justify-center gap-2" disabled={loading || !userName} onClick={onJoinInterview}>
//           {loading ? (
//             <>
//               <Loader2Icon className="animate-spin h-5 w-5" />
//               Joining Interview...
//             </>
//           ) : (
//             <>
//               <Video className="h-5 w-5" />
//               Join Interview
//             </>
//           )}
//         </Button>

//         <div className="mt-3">
//           <Button onClick={startTest} className="w-full font-bold" variant="outline" disabled={testing}>
//             <Settings2 /> Test Audio & Video
//           </Button>
//         </div>

//         {testing && (
//           <div className="mt-6">
//             <h2 className="mb-2 font-bold">Camera & Microphone Test</h2>
//             {permissionError ? (
//               <p className="text-red-500">{permissionError}</p>
//             ) : (
//               <div>
//                 <video ref={videoRef} autoPlay playsInline muted className="w-full h-48 rounded-lg border" />
//                 <div className="mt-3">
//                   <p className="text-sm text-gray-600">Mic Input Level:</p>
//                   <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
//                     <div
//                       className="bg-green-500 h-2 rounded-full transition-all duration-100"
//                       style={{ width: `${Math.min(micLevel, 100)}%` }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Interview;




//===== upr wala bhi shi hai =========





//--==--==--==  Neeche bhi shi hai(updated hai) ==--==--==--






































































// "use client";
// import React, { useEffect, useState, useRef, useContext } from "react";
// import Image from "next/image";
// import {
//   Clock,
//   Info,
//   Loader2Icon,
//   Settings2,
//   Video,
//   XCircle,
// } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useParams, useRouter } from "next/navigation";
// import { supabase } from "@/services/supabaseClient";
// import { toast } from "sonner";
// import { InterviewDataContext } from "@/context/InterviewDataContext";

// function Interview() {
//   const { interview_id } = useParams();
//   const [interviewData, setInterviewData] = useState();
//   const [userName, setUserName] = useState("");
//   const [userMail, setUserMail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { setInterviewInfo } = useContext(InterviewDataContext);
//   const router = useRouter();

//   // ✅ Camera & mic test states
//   const [testing, setTesting] = useState(false);
//   const [permissionError, setPermissionError] = useState("");
//   const [micLevel, setMicLevel] = useState(0);
//   const videoRef = useRef(null);

//   // ✅ Terms checkbox & modal
//   const [agreed, setAgreed] = useState(false);
//   const [showTerms, setShowTerms] = useState(false);

//   useEffect(() => {
//     interview_id && GetInterviewDetails();

//     // ✅ Block scrolling
//     document.body.style.overflow = "hidden";

//     // ✅ Auto-start camera
//     startTest();

//     return () => {
//       document.body.style.overflow = "auto";
//       stopTest();
//     };
//   }, [interview_id]);

//   const GetInterviewDetails = async () => {
//     setLoading(true);
//     try {
//       let { data: Interviews } = await supabase
//         .from("Interviews")
//         .select("jobPosition,jobDescription,duration,type,questionList")
//         .eq("interview_id", interview_id);

//       setInterviewData(Interviews?.[0]);

//       if (!Interviews || Interviews.length === 0) {
//         toast("Incorrect Interview Link");
//       }
//     } catch (e) {
//       toast("Incorrect interview Link");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Start camera & mic test
//   const startTest = async () => {
//     setTesting(true);
//     setPermissionError("");
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: true,
//       });
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//       }

//       // Mic analyser
//       const audioContext =
//         new (window.AudioContext || window.webkitAudioContext)();
//       const analyser = audioContext.createAnalyser();
//       const source = audioContext.createMediaStreamSource(stream);
//       source.connect(analyser);
//       const dataArray = new Uint8Array(analyser.frequencyBinCount);

//       const updateMicLevel = () => {
//         analyser.getByteFrequencyData(dataArray);
//         let values = 0;
//         for (let i = 0; i < dataArray.length; i++) values += dataArray[i];
//         const average = values / dataArray.length;
//         setMicLevel(average);
//         requestAnimationFrame(updateMicLevel);
//       };
//       updateMicLevel();
//     } catch (err) {
//       setPermissionError(
//         "⚠️ Unable to access camera/microphone. Please allow permissions."
//       );
//       setTesting(false);
//     }
//   };

//   // ✅ Stop test
//     const stopTest = () => {
//       if (videoRef.current && videoRef.current.srcObject) {
//         videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//         videoRef.current.srcObject = null;
//       }
//       setTesting(false);
//     };

//     // ✅ Join Interview
//   // ✅ Join Interview
//   const onJoinInterview = async () => {
//     if (!userName) {
//       toast("Please enter your Name first");
//       return;
//     }
//     if (!userMail) {
//       toast("Please enter your Mail-Id ");
//       return;
//     }

//     // ✅ Email validation
//     // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     // if (!emailRegex.test(userMail)) {
//     //   toast("⚠️ Please enter a valid email address");
//     //   return;
//     // }

//     //For Abes-
//     // ✅ Strict Email validation (only @abes.ac.in)
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@abes\.ac\.in$/i;

//     if (!emailRegex.test(userMail)) {
//       toast("⚠️ Please enter a valid ABES email address (must end with @abes.ac.in)");
//       return;
//     }


//     if (!agreed) {
//       toast("Please agree to the Terms & Conditions before continuing");
//       return;
//     }

//     setLoading(true);
//     stopTest();
  


//     // Request fullscreen
//     try {
//       const el = document.documentElement;
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch (err) {
//       console.warn("Fullscreen request blocked:", err);
//     }

//     try {
//       const { data: Interviews, error } = await supabase
//         .from("Interviews")
//         .select("*")
//         .eq("interview_id", interview_id);

//       if (error || !Interviews || Interviews.length === 0) {
//         toast("Invalid Interview");
//         setLoading(false);
//         return;
//       }

//       setInterviewInfo({
//         userName: userName,
//         userMail: userMail,
//         interviewData: Interviews[0],
//       });

//       router.push(`/interview/${interview_id}/start`);
//     } catch (err) {
//       console.error("Error joining interview:", err);
//       toast("Something went wrong");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="h-screen w-screen flex items-center justify-center bg-gray-100 overflow-hidden px-4">
//       <div className="w-full max-w-2xl border rounded-lg bg-white shadow-sm max-h-[90vh] flex flex-col relative">
//         {/* Scrollable Content */}
//         <div className="flex-1 overflow-y-auto p-7 md:p-10 space-y-6">
//           {/* Logo */}
//           <div className="flex flex-col items-center">
//             <Image
//               src={"/logo.png"}
//               alt="logo"
//               width={100}
//               height={100}
//               className="w-[150px]"
//             />
//             <h2 className="mt-2 font-semibold">AI-Powered Interview Platform</h2>
//           </div>

//           {/* Candidate Illustration */}
//           <div className="flex justify-center">
//             <Image
//               src={"/candidate.png"}
//               alt="candidate"
//               width={400}
//               height={400}
//               className="w-[250px] my-6"
//             />
//           </div>

//           {/* Interview Title */}
//           <h2 className="text-center font-bold text-xl">
//             {interviewData?.jobPosition}
//           </h2>
//           <h2 className="flex justify-center gap-2 items-center text-gray-500">
//             <Clock /> {interviewData?.duration}
//           </h2>

//           {/* Name Input */}
//           <div className="w-full">
//             <h2 className="mb-1">Enter your Full Name</h2>
//             <Input
//               placeholder="e.g. Suyash Gupta"
//               value={userName}
//               onChange={(event) => setUserName(event.target.value)}
//             />
//           </div>

//           {/* Mail Input */}
//           <div className="w-full">
//             <h2 className="mb-1">Enter your Mail-id</h2>
//             <Input
//               placeholder="e.g. suyash@abes.ac.in"
//               value={userMail}
//               onChange={(event) => setUserMail(event.target.value)}
//             />
//           </div>

//           {/* Info Section */}
//           <div className="p-5 bg-indigo-100 flex gap-4 rounded-lg w-full">
//             <Info className="text-primary mt-1" />
//             <div>
//               <h2 className="font-bold">Before you Begin :</h2>
//               <ul className="list-disc list-inside text-sm mt-2 space-y-1">
//                 <li className="text-primary">Test your camera and microphone</li>
//                 <li className="text-primary">
//                   Ensure you have a stable internet connection
//                 </li>
//                 <li className="text-primary">
//                   Remain in full screen throughout the interview
//                 </li>
//                 <li className="text-primary">Don’t press any keys or exit fullscreen</li>
//                 <li className="text-primary">
//                   Using unfair means may result in disqualification
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* ✅ Terms Checkbox */}
//           <div className="flex items-center gap-2 mt-2">
//             <input
//               type="checkbox"
//               id="agree"
//               checked={agreed}
//               onChange={() => setAgreed(!agreed)}
//               className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
//             />
//             <label htmlFor="agree" className="text-sm text-gray-700">
//               I agree with the{" "}
//               <span
//                 onClick={() => setShowTerms(true)}
//                 className="text-indigo-600 underline cursor-pointer"
//               >
//                 Terms & Conditions
//               </span>{" "}
//               {/* and{" "}
//               <span
//                 onClick={() => setShowTerms(true)}
//                 className="text-indigo-600 underline cursor-pointer"
//               >
//                 Policies
//               </span> */}
//             </label>
//           </div>

//           {/* Camera & Mic Test (Auto open) */}
//           {testing && (
//             <div className="transition-all duration-500 ease-in-out">
//               <div className="flex justify-between items-center mb-2">
//                 <h2 className="font-bold">Camera & Microphone Test</h2>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={stopTest}
//                   className="text-red-600 flex items-center gap-1"
//                 >
//                   <XCircle className="h-4 w-4" /> Stop
//                 </Button>
//               </div>
//               {permissionError ? (
//                 <p className="text-red-500">{permissionError}</p>
//               ) : (
//                 <div>
//                   <video
//                     ref={videoRef}
//                     autoPlay
//                     playsInline
//                     muted
//                     className="w-full h-48 rounded-lg border"
//                   />
//                   <div className="mt-3">
//                     <p className="text-sm text-gray-600">Mic Input Level:</p>
//                     <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
//                       <div
//                         className="bg-green-500 h-2 rounded-full transition-all duration-100"
//                         style={{ width: `${Math.min(micLevel, 100)}%` }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Fixed Footer Buttons */}
//         <div className="p-4 border-t bg-white flex flex-col gap-3">
//           <Button
//             className="w-full font-bold flex items-center justify-center gap-2"
//             disabled={loading || !userName || !userMail || !agreed}
//             onClick={onJoinInterview}
//           >
//             {loading ? (
//               <>
//                 <Loader2Icon className="animate-spin h-5 w-5" />
//                 Joining Interview...
//               </>
//             ) : (
//               <>
//                 <Video className="h-5 w-5" />
//                 Join Interview
//               </>
//             )}
//           </Button>

//           <Button
//             onClick={testing ? stopTest : startTest}
//             className="w-full font-bold"
//             variant="outline"
//           >
//             <Settings2 />{" "}
//             {testing ? "Stop Camera & Mic Test" : "Test Camera & Mic"}
//           </Button>
//         </div>

//         {/* ✅ Terms Modal */}
//         {showTerms && (
//           <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xl w-full animate-fadeIn">
//               {/* Header */}
//               <h2 className="text-xl font-bold mb-4 text-indigo-700">📜 Terms & Conditions</h2>

//               {/* Content */}
//               <div className="text-sm text-gray-700 space-y-3 h-56 overflow-y-auto pr-2">
//                 <p>
//                   Welcome to <span className="font-semibold">SelectIQ</span>. Please read these
//                   Terms & Policies carefully before starting your interview.
//                 </p>

//                 <ul className="list-disc pl-5 space-y-2">
//                   <li>
//                     <span className="font-medium">Fullscreen Requirement:</span> You must
//                     remain in fullscreen throughout the interview. Exiting fullscreen
//                     may add penalties or revoke your session without any questioning.
//                   </li>
//                   <li>
//                     <span className="font-medium">No Tab/Window Switching:</span> Do not
//                     switch tabs, minimize the window, or use other applications during
//                     the session. This is strictly monitored.
//                   </li>
//                   <li>
//                     <span className="font-medium">Block Extensions:</span> The session may be
//                     recorded. If we found you using any extensions or any AI tool, We will revoke your Interview .
//                   </li>
//                   <li>
//                     <span className="font-medium">Fair Attempt:</span> Use only your own
//                     knowledge — no external help, devices, or another person is allowed
//                     in the frame.
//                   </li>
//                   <li>
//                     <span className="font-medium">Camera & Microphone:</span> Your
//                     camera and microphone must remain active at all times. Our system
//                     uses face/mic tracking for validation.
//                   </li>
//                   <li>
//                     <span className="font-medium">Privacy:</span> The session may be
//                     recorded. Data is stored securely and used only for evaluation and
//                     quality checks.
//                   </li>
//                   <li>
//                     <span className="font-medium">Penalties:</span> Multiple violations
//                     (tab switches, fullscreen exits, face absence) can lead to automatic
//                     disqualification and redirect to a <span className="italic">Sorry Page</span>.
//                   </li>
//                 </ul>

//                 <p className="text-xs text-gray-500 mt-2">
//                   For queries, contact us at{" "}
//                   <a
//                     href="mailto:help@selectiq.in"
//                     className="text-indigo-600 underline"
//                   >
//                     help@selectiq.in
//                   </a>
//                 </p>
//               </div>

//               {/* Footer Buttons */}
//               <div className="flex justify-end gap-3 mt-6">
//                 <Button
//                   variant="outline"
//                   onClick={() => setShowTerms(false)}
//                   className="px-5"
//                 >
//                   Close
//                 </Button>
//                 <Button
//                   onClick={() => {
//                     setAgreed(true);
//                     setShowTerms(false);
//                   }}
//                   className="bg-indigo-600 hover:bg-indigo-700 text-white px-5"
//                 >
//                   Agree & Continue
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// export default Interview;

























//============== Trial Mode ================















"use client";
import React, { useEffect, useState, useRef, useContext } from "react";
import Image from "next/image";
import {
  Clock,
  Info,
  Loader2Icon,
  Settings2,
  Video,
  XCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/services/supabaseClient";
import { toast } from "sonner";
import { InterviewDataContext } from "@/context/InterviewDataContext";

function Interview() {
  const { interview_id } = useParams();
  const [interviewData, setInterviewData] = useState();
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [loading, setLoading] = useState(false);
  const { setInterviewInfo } = useContext(InterviewDataContext);
  const router = useRouter();

  // ✅ Camera & mic test states
  const [testing, setTesting] = useState(false);
  const [permissionError, setPermissionError] = useState("");
  const [micLevel, setMicLevel] = useState(0);
  const videoRef = useRef(null);

  // ✅ Screen share states
  const [screenSharing, setScreenSharing] = useState(false);
  const screenStreamRef = useRef(null);

  // ✅ Terms checkbox & modal
  const [agreed, setAgreed] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    interview_id && GetInterviewDetails();

    document.body.style.overflow = "hidden";
    startTest();
    startScreenCapture();

    return () => {
      document.body.style.overflow = "auto";
      stopTest();
      // ❌ Don't stop screen sharing (keep running in background)
    };
  }, [interview_id]);

  const GetInterviewDetails = async () => {
    setLoading(true);
    try {
      let { data: Interviews } = await supabase
        .from("Interviews")
        .select("jobPosition,jobDescription,duration,type,questionList")
        .eq("interview_id", interview_id);

      setInterviewData(Interviews?.[0]);

      if (!Interviews || Interviews.length === 0) toast("Incorrect Interview Link");
    } catch (e) {
      toast("Incorrect interview Link");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Start camera & mic test
  const startTest = async () => {
    setTesting(true);
    setPermissionError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      const audioContext =
        new (window.AudioContext || window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);
      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      const updateMicLevel = () => {
        analyser.getByteFrequencyData(dataArray);
        let values = 0;
        for (let i = 0; i < dataArray.length; i++) values += dataArray[i];
        const average = values / dataArray.length;
        setMicLevel(average);
        requestAnimationFrame(updateMicLevel);
      };
      updateMicLevel();
    } catch (err) {
      setPermissionError("⚠️ Unable to access camera/microphone. Please allow permissions.");
      setTesting(false);
    }
  };

  const stopTest = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
      videoRef.current.srcObject = null;
    }
    setTesting(false);
  };

  // ✅ Start screen capture (mandatory, no preview)
  const startScreenCapture = async () => {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      screenStreamRef.current = screenStream;
      setScreenSharing(true);
    } catch (err) {
      console.warn("⚠️ Screen sharing not granted:", err);
      setScreenSharing(false);
    }
  };

  const onJoinInterview = async () => {
    if (!userName) return toast("Please enter your Name first");
    if (!userMail) return toast("Please enter your Mail-Id ");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@abes\.ac\.in$/i;
    if (!emailRegex.test(userMail))
      return toast("⚠️ Please enter a valid ABES email address (must end with @abes.ac.in)");

    if (!agreed) return toast("Please agree to the Terms & Conditions before continuing");
    if (!screenSharing) return toast("⚠️ Screen sharing is mandatory to continue.");

    setLoading(true);
    stopTest();

    try {
      const el = document.documentElement;
      if (el.requestFullscreen) await el.requestFullscreen();
      else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
      else if (el.msRequestFullscreen) await el.msRequestFullscreen();
    } catch (err) {
      console.warn("Fullscreen request blocked:", err);
    }

    try {
      const { data: Interviews, error } = await supabase
        .from("Interviews")
        .select("*")
        .eq("interview_id", interview_id);

      if (error || !Interviews || Interviews.length === 0) {
        toast("Invalid Interview");
        setLoading(false);
        return;
      }

      setInterviewInfo({ userName, userMail, interviewData: Interviews[0] });
      router.push(`/interview/${interview_id}/start`);
    } catch (err) {
      console.error("Error joining interview:", err);
      toast("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100 overflow-hidden px-4">
      <div className="w-full max-w-2xl border rounded-lg bg-white shadow-sm max-h-[90vh] flex flex-col relative">
        <div className="flex-1 overflow-y-auto p-7 md:p-10 space-y-6">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <Image src={"/logo.png"} alt="logo" width={100} height={100} className="w-[150px]" />
            <h2 className="mt-2 font-semibold">AI-Powered Interview Platform</h2>
          </div>

          {/* Illustration */}
          <div className="flex justify-center">
            <Image src={"/candidate.png"} alt="candidate" width={400} height={400} className="w-[250px] my-6" />
          </div>

          {/* Job Title */}
          <h2 className="text-center font-bold text-xl">{interviewData?.jobPosition}</h2>
          <h2 className="flex justify-center gap-2 items-center text-gray-500">
            <Clock /> {interviewData?.duration}
          </h2>

          {/* Inputs */}
          <div>
            <h2 className="mb-1">Enter your Full Name</h2>
            <Input placeholder="e.g. Suyash Gupta" value={userName} onChange={(e) => setUserName(e.target.value)} />
          </div>

          <div>
            <h2 className="mb-1">Enter your Mail-id</h2>
            <Input placeholder="e.g. suyash@abes.ac.in" value={userMail} onChange={(e) => setUserMail(e.target.value)} />
          </div>

          {/* Info */}
          <div className="p-5 bg-indigo-100 flex gap-4 rounded-lg w-full">
            <Info className="text-primary mt-1" />
            <div>
              <h2 className="font-bold">Before you Begin :</h2>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                <li className="text-primary">Test your camera & microphone</li>
                <li className="text-primary">Screen sharing will run in background (mandatory)</li>
                <li className="text-primary">Ensure you have a stable internet connection</li>
                <li className="text-primary">Remain in full screen throughout the interview</li>
                <li className="text-primary">Don’t press any keys or exit fullscreen</li>
                <li className="text-primary">Using unfair means may result in disqualification</li>
              </ul>
            </div>
          </div>

          {/* ✅ Terms Checkbox */}
          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="agree" className="text-sm text-gray-700">
              I agree with the{" "}
              <span onClick={() => setShowTerms(true)} className="text-indigo-600 underline cursor-pointer">
                Terms & Conditions
              </span>
            </label>
          </div>

          {/* ✅ Camera & Mic Test */}
          {testing && (
            <div className="transition-all duration-500 ease-in-out">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-bold">Camera & Microphone Test</h2>
                <Button variant="ghost" size="sm" onClick={stopTest} className="text-red-600 flex items-center gap-1">
                  <XCircle className="h-4 w-4" /> Stop
                </Button>
              </div>
              {permissionError ? (
                <p className="text-red-500">{permissionError}</p>
              ) : (
                <div>
                  <video ref={videoRef} autoPlay playsInline muted className="w-full h-48 rounded-lg border" />
                  <div className="mt-3">
                    <p className="text-sm text-gray-600">Mic Input Level:</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-100"
                        style={{ width: `${Math.min(micLevel, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-white flex flex-col gap-3">
          <Button
            className="w-full font-bold flex items-center justify-center gap-2"
            disabled={loading || !userName || !userMail || !agreed || !screenSharing}
            onClick={onJoinInterview}
          >
            {loading ? (
              <>
                <Loader2Icon className="animate-spin h-5 w-5" />
                Joining Interview...
              </>
            ) : (
              <>
                <Video className="h-5 w-5" />
                Join Interview
              </>
            )}
          </Button>

          <Button onClick={testing ? stopTest : startTest} className="w-full font-bold" variant="outline">
            <Settings2 /> {testing ? "Stop Camera & Mic Test" : "Test Camera & Mic"}
          </Button>
        </div>

        {/* Terms Modal */}
        {showTerms && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xl w-full animate-fadeIn">
              <h2 className="text-xl font-bold mb-4 text-indigo-700">📜 Terms & Conditions</h2>
              <div className="text-sm text-gray-700 space-y-3 h-56 overflow-y-auto pr-2">
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium">Fullscreen Requirement:</span> Must remain in fullscreen.</li>
                  <li><span className="font-medium">No Tab/Window Switching:</span> Strictly monitored.</li>
                  <li><span className="font-medium">Block Extensions:</span> Extensions/AI tools strictly prohibited.</li>
                  <li><span className="font-medium">Fair Attempt:</span> Only your own knowledge allowed.</li>
                  <li><span className="font-medium">Camera & Microphone:</span> Must remain active throughout.</li>
                  <li><span className="font-medium">Privacy:</span> The session may be recorded & stored securely.</li>
                  <li><span className="font-medium">Penalties:</span> Violations will lead to disqualification.</li>
                </ul>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <Button variant="outline" onClick={() => setShowTerms(false)}>Close</Button>
                <Button onClick={() => { setAgreed(true); setShowTerms(false); }} className="bg-indigo-600 text-white">
                  Agree & Continue
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Interview;
