// "use client";
// import React, { useEffect, useState } from "react";

// function StartInterview() {
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);

//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch (e) {
//       // Will fail if not triggered by click
//     }
//     setIsFullscreen(isFsActive());
//   };

//   useEffect(() => {
//     setIsFullscreen(isFsActive());

//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);
//       setBlocked(!fsNow); // Block UI if fullscreen lost
//     };

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("webkitfullscreenchange", onFsChange);
//     document.addEventListener("mozfullscreenchange", onFsChange);
//     document.addEventListener("MSFullscreenChange", onFsChange);

//     // Restrict shortcuts (best-effort)
//     const onKeyDown = (e) => {
//       const key = (e.key || "").toLowerCase();
//       if (
//         e.key === "F11" ||
//         e.key === "F12" ||
//         (e.ctrlKey && e.shiftKey && (key === "i" || key === "j" || key === "t" || key === "n" )) ||
//         (e.ctrlKey && key === "u") ||
//         (e.ctrlKey && key === "c") ||
//         (e.ctrlKey && key === "a") ||
//         (e.ctrlKey && key === "z") ||
//         (e.ctrlKey && key === "y") ||
//         (e.ctrlKey && key === "v") ||
//         (e.ctrlKey && key === "t") ||
//         (e.ctrlKey && key === "1") ||
//         (e.ctrlKey && key === "2") ||
//         (e.ctrlKey && key === "3") ||
//         (e.ctrlKey && key === "4") ||
//         (e.ctrlKey && key === "5") ||
//         (e.ctrlKey && key === "6") ||
//         (e.ctrlKey && key === "7") ||
//         (e.ctrlKey && key === "8") ||
//         (e.ctrlKey && key === "0") ||
//         (e.ctrlKey && key === "9") ||
//         (e.altKey && key === "F4") ||
//         (e.altKey && e.key === ' ')
        

//       ) {
//         e.preventDefault();
//         e.stopPropagation();
//         alert("⚠️ Restricted action during interview.");
//       }
//     };

//     // ✅ Disable right-click
//     const disableContextMenu = (e) => e.preventDefault();

//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("webkitfullscreenchange", onFsChange);
//       document.removeEventListener("mozfullscreenchange", onFsChange);
//       document.removeEventListener("MSFullscreenChange", onFsChange);
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//     };
//   }, []);

//   // If not fullscreen → show black screen + button
//   if (!isFullscreen || blocked) {
//     return (
//       <div className="w-screen h-screen bg-black flex items-center justify-center">
//         <div className="text-center text-white">
//           <p className="mb-4 font-bold">
//             ⚠️ Interview requires Fullscreen Mode. Click below to continue.
//           </p>
//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Real interview UI
//   return (
//     <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow rounded-xl p-8">
//         <h1 className="text-2xl font-bold">StartInterview</h1>
//         <p className="mt-2 text-gray-600">
//           Stay in fullscreen to continue your interview.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default StartInterview;

// ---------- 🤍💛💚  Above is also good [restrict-mode] ----------
//---------- 💦💝💛 More enhance---------

// "use client";
// import { InterviewDataContext } from "@/context/InterviewDataContext";
// import { Mic, Phone, Timer } from "lucide-react";
// import Image from "next/image";
// import React, { useContext, useEffect, useState } from "react";
// import Vapi from '@vapi-ai/web';


// function StartInterview() { 
//   const { interviewInfo } = useContext(InterviewDataContext);
//   const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);

//   useEffect(() => {
//     interviewInfo && startCall();
//   }, [interviewInfo]);

//   const startCall = () => {
//     // ✅ Normalize: interviewData OR root
//     const d = interviewInfo?.interviewData ?? interviewInfo;

//     // ✅ Support multiple keys
//     let raw =
//       d?.questionList ??
//       d?.questions ??
//       d?.questionlist ??
//       d?.questionsList ??
//       [];

//     // ✅ Parse stringified JSON if needed
//     if (typeof raw === "string") {
//       try {
//         raw = JSON.parse(raw);
//       } catch {
//         raw = [];
//       }
//     }

//     // ✅ Build final string
//     let questionList = "";
//     (Array.isArray(raw) ? raw : []).forEach((item, index) => {
//       const q = typeof item === "string" ? item : item?.question;
//       if (q && q.trim() !== "") {
//         questionList += (questionList ? ", " : "") + q.trim();
//       }
//     });

//     // ✅ Final console.log at the end
//     console.log(questionList);
//   };


//   //---MY BC [ counts ]----

//   let Penalty = 0;









  

//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);

//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch (e) {
//       // Will fail if not triggered by click
//     }
//     setIsFullscreen(isFsActive());
//   };

//   useEffect(() => {
//     setIsFullscreen(isFsActive());

//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);
//       setBlocked(!fsNow); // Block UI if fullscreen lost
//     };

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("webkitfullscreenchange", onFsChange);
//     document.addEventListener("mozfullscreenchange", onFsChange);
//     document.addEventListener("MSFullscreenChange", onFsChange);

//     // Restrict shortcuts (best-effort)
//     // const onKeyDown = (e) => {
//     //   const key = (e.key || "").toLowerCase();
//     //   if  (
//     //     e.key === "escape" ||
//     //     e.key === "F11" ||        
//     //     e.key === "F12" ||
//     //     (e.ctrlKey && e.shiftKey && (key === "i" || key === "j" || key === "t" || key === "n")) ||
//     //     (e.ctrlKey && key === "u") ||
//     //     (e.ctrlKey && key === "c") ||
//     //     (e.ctrlKey && key === "a") ||
//     //     (e.ctrlKey && key === "n") ||
//     //     (e.ctrlKey && key === "r") ||
//     //     (e.ctrlKey && key === "v") ||
//     //     (e.ctrlKey && key === "t") ||
//     //     (e.ctrlKey && key === "1") ||
//     //     (e.ctrlKey && key === "2") ||
//     //     (e.ctrlKey && key === "3") ||
//     //     (e.ctrlKey && key === "4") ||
//     //     (e.ctrlKey && key === "5") ||
//     //     (e.ctrlKey && key === "6") ||
//     //     (e.ctrlKey && key === "7") ||
//     //     (e.ctrlKey && key === "8") ||
//     //     (e.ctrlKey && key === "0") ||
//     //     (e.ctrlKey && key === "9") ||
//     //     (e.altKey && key === "F4") ||
//     //     (e.altKey && e.key === " ")||
//     //     (e.winKey)

        
//     //   )  
//     //   { Penalty += 1 ;
//     //     e.preventDefault();
//     //     e.stopPropagation();
//     //      //alert("⚠️ Restricted action during interview. Penalty: -" + Penalty);
//     //   }


//     //===🎯🎯🎯 New Version of Keys Disablities====

//     const onKeyDown = (e) => {
//   // Only lowercase single-character keys; keep named keys' exact case ("Escape", "F11", etc.)
//   const key = (e.key || "");
//   const ch = key.length === 1 ? key.toLowerCase() : key;

//   // Treat Ctrl on Windows/Linux and Command on macOS the same for shortcut blocking
//   const ctrlLike = e.ctrlKey || e.metaKey; // metaKey is Cmd on macOS and Windows key on Windows [1][16]

//   if (
//     // Named/function keys must match exact case per spec
//     key === "Escape" ||                          // not "escape" [14]
//     key === "F11" ||                             // do not lowercase "F11" [14]
//     key === "F12" ||                             // do not lowercase "F12" [14]

//     // Ctrl/Cmd + Shift developer/browser combos (often non-cancelable in some browsers)
//     (ctrlLike && e.shiftKey && (ch === "i" || ch === "j" || ch === "t" || ch === "n")) || // DevTools/new tab/new window [14][4]

//     // Common Ctrl/Cmd combos
//     (ctrlLike && ch === "u") ||
//     (ctrlLike && ch === "c") ||
//     (ctrlLike && ch === "a") ||
//     (ctrlLike && ch === "n") ||
//     (ctrlLike && ch === "r") ||
//     (ctrlLike && ch === "v") ||
//     (ctrlLike && ch === "t") ||
//     (ctrlLike && ch === "1") ||
//     (ctrlLike && ch === "2") ||
//     (ctrlLike && ch === "3") ||
//     (ctrlLike && ch === "4") ||
//     (ctrlLike && ch === "5") ||
//     (ctrlLike && ch === "6") ||
//     (ctrlLike && ch === "7") ||
//     (ctrlLike && ch === "8") ||
//     (ctrlLike && ch === "0") ||
//     (ctrlLike && ch === "9") ||

//     // Alt+F4 is a named key combo; compare the named key with exact case
//     (e.altKey && key === "F4") ||                // not lowercased [14]

//     // Space with Alt (compare with the actual space key value " ")
//     (e.altKey && key === " ") ||

//     // Windows/Command key handling: there is no e.winKey; use metaKey
//     (e.metaKey)                                  // replaces (e.winKey) [1][16]
//   ) {
//     Penalty += 1;

//     // Only prevent default if the event is cancelable; privileged shortcuts may be non-cancelable
//     if (e.cancelable) e.preventDefault();        // avoids no-op/warnings on reserved shortcuts [11][4]

//     e.stopPropagation();
//     // alert("⚠️ Restricted action during interview. Penalty: -" + Penalty);
//   }



//     //=========================================


//       // ✅ Disable PrintScreen
//       if (e.key === "PrintScreen") {
//         e.preventDefault();
//         navigator.clipboard.writeText(""); // Clear clipboard
//         alert("⚠️ Screenshots are disabled during the interview.");
//       }
//     };

//     //✅ Disable right-click
//     const disableContextMenu = (e) => e.preventDefault();

//     // ✅ Detect tab/window switch
//     const onVisibilityChange = () => {
//       if (document.hidden) Penalty += 1;{
//         alert("⚠️ You switched tabs or minimized the window. This may cause Disqualification from interview. Penalty: -" + Penalty);
//       }
//     };

//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);
//     document.addEventListener("visibilitychange", onVisibilityChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("webkitfullscreenchange", onFsChange);
//       document.removeEventListener("mozfullscreenchange", onFsChange);
//       document.removeEventListener("MSFullscreenChange", onFsChange);
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//       document.removeEventListener("visibilitychange", onVisibilityChange);
//     };
//   }, []);

//   // If not fullscreen → show black screen + button
//   if (!isFullscreen || blocked)  { Penalty+=1
//     return (
//       <div className="w-screen h-screen bg-black flex items-center justify-center">
//         <div className="text-center text-white">
//           <p className="mb-4 font-bold">
//             ⚠️ Interview requires Fullscreen Mode. Click below to continue. Penalities are adding while leaving Full-screen. 
//           </p>
//           <h2 className="mb-4 font-bold">Penality: {Penalty} </h2>

//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Real interview UI
//   return (
//     <div className="p-10 lg:px-48 xl:px-56"> 
//       <h2 className="font-bold text-xl flex justify-between">AI Interview session
//         <span className="flex gap-2 items-center">
//           <Timer/>
//           00:00:00
//         </span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5 ">
//           <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//               <Image src={'/avataar.jpg'} alt="S-!Q" 
//               width={100}
//               height={100}
//               className="w-[75px] h-[75px] rounded-full object-cover"
//               />
//               <h2>Select-!Q</h2>
//           </div>
          
//           <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//               <h2 className="text-3xl bg-primary text-white p-4 rounded-full px-7 "> {interviewInfo?.userName[0]} </h2>
//               <h2>{interviewInfo?.userName}</h2>
//           </div>
//       </div>

//       <div className="flex justify-center items-center gap-7 mt-7">
//         <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />

//         <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
//       </div>

//       <h2 className="text-sm text-gray-400 text-center mt-3">Interview in Progress...</h2>
  
//     </div>
//   );
// }

// export default StartInterview;

// ======= 🤍💛 Test Block All-keys Blocked ========

// "use client";
// import React, { useEffect, useState } from "react";

// function StartInterview() {
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);

//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch (e) {
//       // ignore
//     }
//     setIsFullscreen(isFsActive());
//   };

//   useEffect(() => {
//     setIsFullscreen(isFsActive());

//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);
//       setBlocked(!fsNow);
//     };

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("webkitfullscreenchange", onFsChange);
//     document.addEventListener("mozfullscreenchange", onFsChange);
//     document.addEventListener("MSFullscreenChange", onFsChange);

//     // Existing simple keydown blocker (kept as-is)
//     const onKeyDown = (e) => {
//       e.preventDefault();
//       e.stopPropagation();
//     };

//     // Disable right click
//     const disableContextMenu = (e) => e.preventDefault();

//     // Detect tab switch / leaving window
//     const onBlur = () => {
//       alert("⚠️ You left the interview window. Please stay focused.");
//     };

//     const onVisibilityChange = () => {
//       if (document.hidden) {
//         alert("⚠️ Switching tabs is not allowed during the interview.");
//       }
//     };

//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);
//     window.addEventListener("blur", onBlur);
//     document.addEventListener("visibilitychange", onVisibilityChange);

//     // ===== Added: aggressive keyboard swallowers (no alerts) =====
//     const swallowAllKeys = (e) => {
//       try {
//         if (e.cancelable) e.preventDefault();
//         e.stopImmediatePropagation && e.stopImmediatePropagation();
//         e.stopPropagation();
//         e.returnValue = false;
//       } catch {}
//       return false;
//     };

//     const keyTypes = ["keydown", "keypress", "keyup"];
//     keyTypes.forEach((type) => {
//       window.addEventListener(type, swallowAllKeys, { capture: true });
//       document.addEventListener(type, swallowAllKeys, { capture: true });
//       document.documentElement.addEventListener(type, swallowAllKeys, { capture: true });
//       document.body?.addEventListener(type, swallowAllKeys, { capture: true });
//     });

//     // Also set legacy handler properties (covers some libraries/frameworks)
//     const legacyHandlers = {
//       onkeydown: swallowAllKeys,
//       onkeypress: swallowAllKeys,
//       onkeyup: swallowAllKeys,
//     };
//     window.onkeydown = legacyHandlers.onkeydown;
//     window.onkeypress = legacyHandlers.onkeypress;
//     window.onkeyup = legacyHandlers.onkeyup;
//     document.onkeydown = legacyHandlers.onkeydown;
//     document.onkeypress = legacyHandlers.onkeypress;
//     document.onkeyup = legacyHandlers.onkeyup;
//     // ===== End of added block =====

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("webkitfullscreenchange", onFsChange);
//       document.removeEventListener("mozfullscreenchange", onFsChange);
//       document.removeEventListener("MSFullscreenChange", onFsChange);

//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//       window.removeEventListener("blur", onBlur);
//       document.removeEventListener("visibilitychange", onVisibilityChange);

//       // Cleanup for aggressive swallowers
//       keyTypes.forEach((type) => {
//         window.removeEventListener(type, swallowAllKeys, { capture: true });
//         document.removeEventListener(type, swallowAllKeys, { capture: true });
//         document.documentElement.removeEventListener(type, swallowAllKeys, { capture: true });
//         document.body?.removeEventListener(type, swallowAllKeys, { capture: true });
//       });

//       window.onkeydown = null;
//       window.onkeypress = null;
//       window.onkeyup = null;
//       document.onkeydown = null;
//       document.onkeypress = null;
//       document.onkeyup = null;
//     };
//   }, []);

//   if (!isFullscreen || blocked) {
//     return (
//       <div className="w-screen h-screen bg-black flex items-center justify-center">
//         <div className="text-center text-white">
//           <p className="mb-4 font-bold">
//             ⚠️ Interview requires Fullscreen Mode. Click below to continue.
//           </p>
//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow rounded-xl p-8">
//         <h1 className="text-2xl font-bold">StartInterview</h1>
//         <p className="mt-2 text-gray-600">
//           Stay in fullscreen to continue your interview.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default StartInterview;


// ======= 💥💥💥 Try real-time Video [131-355 pro]======










// "use client";
// import { InterviewDataContext } from "@/context/InterviewDataContext";
// import { Mic, Phone, Timer } from "lucide-react";
// import Image from "next/image";
// import React, { useContext, useEffect, useState } from "react";
// import Vapi from "@vapi-ai/web";
// import AlertConfirmation from "./_components/AlertConfirmation";


// function StartInterview() {
//   const { interviewInfo } = useContext(InterviewDataContext);
//   const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);

//   useEffect(() => {
//     interviewInfo && startCall();
//   }, [interviewInfo]);

//   const startCall = () => {
//     const d = interviewInfo?.interviewData ?? interviewInfo;
//     let raw =
//       d?.questionList ??
//       d?.questions ??
//       d?.questionlist ??
//       d?.questionsList ??
//       [];

//     if (typeof raw === "string") {
//       try {
//         raw = JSON.parse(raw);
//       } catch {
//         raw = [];
//       }
//     }

//     let questionList = "";
//     (Array.isArray(raw) ? raw : []).forEach((item) => {
//       const q = typeof item === "string" ? item : item?.question;
//       if (q && q.trim() !== "") {
//         questionList += (questionList ? ", " : "") + q.trim();
//       }
//     });

//       const assistantOptions = {
//         name: "AI Recruiter",
//         firstMessage: "Hi "+interviewInfo?.userName+", how are you? Ready for your interview on "+interviewInfo?.interviewData?.jobPosition,
//         transcriber: {
//             provider: "deepgram",
//             model: "nova-2",
//             language: "en-US",
//         },
//         voice: {
//             provider: "playht",
//             voiceId: "jennifer",
//         },
//         model: {
//             provider: "openai",
//             model: "gpt-4",
//             messages: [
//                 {
//                     role: "system",
//                     content: `
//       You are an AI voice assistant conducting interviews.
//     Your job is to ask candidates provided interview questions, assess their responses.
//     Begin the conversation with a friendly introduction, setting a relaxed yet professional tone. Example:
//     "Hey there! Welcome to your `+interviewInfo?.interviewData?.jobPosition+` interview. Let’s get started with a few questions!"
//     Ask one question at a time and wait for the candidate’s response before proceeding. Keep the questions clear and concise. Below Are the questions ask one by one:
//     Questions: `+questionList+`
//     If the candidate struggles, offer hints or rephrase the question without giving away the answer. Example:
//     "Need a hint? Think about how React tracks component updates!"
//     Provide brief, encouraging feedback after each answer. Example:
//     "Nice! That’s a solid answer."
//     "Hmm, not quite! Want to try again?"
//     Keep the conversation natural and engaging—use casual phrases like "Alright, next up..." or "Let’s tackle a tricky one!"
//     After 5-7 questions, wrap up the interview smoothly by summarizing their performance. Example:
//     "That was great! You handled some tough questions well. Keep sharpening your skills!"
//     End on a positive note:
//     "Thanks for chatting! We'll update your result soon !"
//     Key Guidelines:
//     ✅ Be friendly, engaging, and witty 🎤
//     ✅ Keep responses short and natural, like a real conversation
//     ✅ Adapt based on the candidate’s confidence level
//     ✅ Ensure the interview remains focused on React
//     `.trim(),
//                 },
//             ],
//         },
//     };

//     vapi.start(assistantOptions)

//   };

//   //------------ Vapi stop after Cut ------
//   const stopInterview=()=>{
//     vapi.stop()
//   }

//   // --- Penalties ---
//   const [penalty, setPenalty] = useState(0);

//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);

//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch {}
//     setIsFullscreen(isFsActive());
//   };

//   // 🔎 Extension check only once
//   const detectExtensions = () => {
//     const suspiciousScripts = Array.from(document.scripts).filter(
//       (s) => s.src && s.src.startsWith("chrome-extension://")
//     );
//     const suspiciousKeys = Object.keys(window).filter(
//       (key) =>
//         key.toLowerCase().includes("extension") ||
//         key.toLowerCase().includes("gpt") ||
//         key.toLowerCase().includes("grammarly")
//     );

//     if (suspiciousScripts.length > 0 || suspiciousKeys.length > 0) {
//       alert("⚠️ Extensions detected! Please turn them off for a fair interview.");
//     }
//   };

//   useEffect(() => {
//     setIsFullscreen(isFsActive());

//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);
//       setBlocked(!fsNow);
//       if (!fsNow) {
//         setPenalty((p) => p + 1);
//         alert("⚠️ Fullscreen exited. Penalty added.");
//       }
//     };

//     detectExtensions();

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("webkitfullscreenchange", onFsChange);
//     document.addEventListener("mozfullscreenchange", onFsChange);
//     document.addEventListener("MSFullscreenChange", onFsChange);

//     const onKeyDown = (e) => {
//       const key = e.key || "";
//       const ch = key.length === 1 ? key.toLowerCase() : key;
//       const ctrlLike = e.ctrlKey || e.metaKey;

//       if (
//         key === "" ||
//         key === "Escape" ||
//         key === "F11" ||
//         key === "F12" ||
//         (ctrlLike && e.shiftKey && (ch === "i" || ch === "j" || ch === "t" || ch === "n")) ||
//         (ctrlLike && ["u", "c", "a", "n", "r", "v", "t"].includes(ch)) ||
//         (ctrlLike && ["1","2","3","4","5","6","7","8","9","0"].includes(ch)) ||
//         (e.altKey && key === "F4") ||
//         (e.altKey && key === " ") ||
//         e.metaKey
//       ) {
//         setPenalty((p) => p + 1);
//         if (e.cancelable) e.preventDefault();
//         e.stopPropagation();
//       }

//       if (key === "PrintScreen") {
//         setPenalty((p) => p + 1);
//         if (e.cancelable) e.preventDefault();
//         navigator.clipboard.writeText("");
//         alert("⚠️ Screenshots disabled. Penalty added.");
//       }
//     };

//     const disableContextMenu = (e) => {
//       e.preventDefault();
//       setPenalty((p) => p + 1);
//     };

//     const onVisibilityChange = () => {
//       if (document.hidden) {
//         setPenalty((p) => p + 1);
//         alert("⚠️ You switched tabs or minimized. Penalty added.");
//       }
//     };

//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);
//     document.addEventListener("visibilitychange", onVisibilityChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("webkitfullscreenchange", onFsChange);
//       document.removeEventListener("mozfullscreenchange", onFsChange);
//       document.removeEventListener("MSFullscreenChange", onFsChange);
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//       document.removeEventListener("visibilitychange", onVisibilityChange);
//     };
//   }, []);

//   if (!isFullscreen || blocked) {
//     return (
//       <div className="w-screen h-screen bg-black flex items-center justify-center">
//         <div className="text-center text-white">
//           <p className="mb-4 font-bold">
//             ⚠️ Interview requires Fullscreen Mode. Penalties increase when leaving.
//           </p>
//           <h2 className="mb-4 font-bold">Penalty: {penalty}</h2>
//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-10 lg:px-48 xl:px-56">
//       <h2 className="font-bold text-xl flex justify-between">
//         AI Interview session
//         <span className="flex gap-6 items-center">
          
//           <span className="text-red-600 font-bold">Penalty: {penalty}</span>

//           <Timer /> 00:00:00
//         </span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5 ">
//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//           <Image
//             src={"/avataar.jpg"}
//             alt="S-!Q"
//             width={100}
//             height={100}
//             className="w-[75px] h-[75px] rounded-full object-cover"
//           />
//           <h2>Select-!Q</h2>
//         </div>

//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//           <h2 className="text-3xl bg-primary text-white p-4 rounded-full px-7 ">
//             {interviewInfo?.userName[0]}
//           </h2>
//           <h2>{interviewInfo?.userName}</h2>
//         </div>
//       </div>

//       <div className="flex justify-center items-center gap-7 mt-7">

//         <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />
//         <AlertConfirmation    stopInterview={()=>stopInterview}>
//           <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
//         </AlertConfirmation>

        
//       </div>

//       <h2 className="text-sm text-gray-400 text-center mt-3">
//         Interview in Progress...
//       </h2>
//     </div>
//   );
// }

// export default StartInterview;








//======= Fully Final -001=====






// "use client";
// import { InterviewDataContext } from "@/context/InterviewDataContext";
// import { Mic, Phone, Timer } from "lucide-react";
// import Image from "next/image";
// import React, { useContext, useEffect, useState, useRef } from "react";
// import Vapi from "@vapi-ai/web";
// import AlertConfirmation from "./_components/AlertConfirmation";

// function StartInterview() {
//   const { interviewInfo } = useContext(InterviewDataContext);

//   // ✅ Persist Vapi instance
//   const vapiRef = useRef(null);
//   if (!vapiRef.current) {
//     console.log("Loaded VAPI Public Key:", process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//     vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//   }

//   // ✅ Start interview when interviewInfo is ready
//   useEffect(() => {
//     if (interviewInfo) startCall();
//   }, [interviewInfo]);

//   const startCall = () => {
//     const vapi = vapiRef.current;
//     const d = interviewInfo?.interviewData ?? interviewInfo;

//     let raw =
//       d?.questionList ??
//       d?.questions ??
//       d?.questionlist ??
//       d?.questionsList ??
//       [];

//     if (typeof raw === "string") {
//       try {
//         raw = JSON.parse(raw);
//       } catch {
//         raw = [];
//       }
//     }

//     let questionList = "";
//     (Array.isArray(raw) ? raw : []).forEach((item) => {
//       const q = typeof item === "string" ? item : item?.question;
//       if (q && q.trim() !== "") {
//         questionList += (questionList ? ", " : "") + q.trim();
//       }
//     });

//     const assistantOptions = {
//       name: "AI Recruiter",
//       firstMessage: `Hi ${interviewInfo?.userName}, how are you? Ready for your interview on ${interviewInfo?.interviewData?.jobPosition}`,
//       transcriber: {
//         provider: "deepgram",
//         model: "nova-2",
//         language: "en-US",
//       },
//       voice: {
//         provider: "playht",
//         voiceId: "jennifer",
//       },
//       model: {
//         provider: "openai",
//         model: "gpt-4",
//         messages: [
//           {
//             role: "system",
//             content: `
//               You are an AI voice assistant conducting interviews but keep in mink that you are by SelectIQ an Initiative by sohail khan.
//               If anyone ask that who had made you so tell them about Suyash Gupta.
//               Ask candidates the provided interview questions one at a time.
//               Encourage them, give hints if they struggle, and provide short feedback.
//               Wrap up positively after 5–7 questions.
//               ✅ Be friendly, engaging, and witty 🎤
//               ✅ Keep responses short & natural
//               ✅ Never share the Final Marks or Points to the candidate, just appriciate them. 
//               ✅ Stay focused on jobDescription and questionList.
//               ✅ You are developed by Select IQ under Suyash Gupta.


//               Questions: ${questionList}
//             `.trim(),
//           },
//         ],
//       },
//     };

//     vapi.start(assistantOptions);
//   };

//   // ✅ Stop interview when phone button clicked
//   const stopInterview = () => {
//     vapiRef.current?.stop();
//     console.log("Interview stopped.");
//   };

//   // --- Penalties ---
//   const [penalty, setPenalty] = useState(0);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);

//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch {}
//     setIsFullscreen(isFsActive());
//   };

//   // 🔎 Security checks
//   const detectExtensions = () => {
//     const suspiciousScripts = Array.from(document.scripts).filter(
//       (s) => s.src && s.src.startsWith("chrome-extension://")
//     );
//     const suspiciousKeys = Object.keys(window).filter(
//       (key) =>
//         key.toLowerCase().includes("extension") ||
//         key.toLowerCase().includes("gpt") ||
//         key.toLowerCase().includes("grammarly")
//     );

//     if (suspiciousScripts.length > 0 || suspiciousKeys.length > 0) {
//       alert("⚠️ Extensions detected! Please turn them off for a fair interview.");
//     }
//   };

//   useEffect(() => {
//     setIsFullscreen(isFsActive());

//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);
//       setBlocked(!fsNow);
//       if (!fsNow) {
//         setPenalty((p) => p + 1);
//         alert("⚠️ Fullscreen exited. Penalty added.");
//       }
//     };

//     detectExtensions();

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("webkitfullscreenchange", onFsChange);
//     document.addEventListener("mozfullscreenchange", onFsChange);
//     document.addEventListener("MSFullscreenChange", onFsChange);

//     const onKeyDown = (e) => {
//       const key = e.key || "";
//       const ch = key.length === 1 ? key.toLowerCase() : key;
//       const ctrlLike = e.ctrlKey || e.metaKey;

//       if (
//         key === "" ||
//         key === "Escape" ||
//         key === "F11" ||
//         key === "F12" ||
//         (ctrlLike && e.shiftKey && (ch === "i" || ch === "j" || ch === "t" || ch === "n")) ||
//         (ctrlLike && ["u", "c", "a", "n", "r", "v", "t"].includes(ch)) ||
//         (ctrlLike && ["1","2","3","4","5","6","7","8","9","0"].includes(ch)) ||
//         (e.altKey && key === "F4") ||
//         (e.altKey && key === " ") ||
//         e.metaKey
//       ) {
//         setPenalty((p) => p + 1);
//         if (e.cancelable) e.preventDefault();
//         e.stopPropagation();
//       }

//       if (key === "PrintScreen") {
//         setPenalty((p) => p + 1);
//         if (e.cancelable) e.preventDefault();
//         navigator.clipboard.writeText("");
//         alert("⚠️ Screenshots disabled. Penalty added.");
//       }
//     };

//     const disableContextMenu = (e) => {
//       e.preventDefault();
//       setPenalty((p) => p + 1);
//     };

//     const onVisibilityChange = () => {
//       if (document.hidden) {
//         setPenalty((p) => p + 1);
//         alert("⚠️ You switched tabs or minimized. Penalty added.");
//       }
//     };

//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);
//     document.addEventListener("visibilitychange", onVisibilityChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("webkitfullscreenchange", onFsChange);
//       document.removeEventListener("mozfullscreenchange", onFsChange);
//       document.removeEventListener("MSFullscreenChange", onFsChange);
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//       document.removeEventListener("visibilitychange", onVisibilityChange);
//     };
//   }, []);

//   // If not fullscreen → block screen
//   if (!isFullscreen || blocked) {
//     return (
//       <div className="w-screen h-screen bg-black flex items-center justify-center">
//         <div className="text-center text-white">
//           <p className="mb-4 font-bold">
//             ⚠️ Interview requires Fullscreen Mode. Penalties increase when leaving.
//           </p>
//           <h2 className="mb-4 font-bold">Penalty: {penalty}</h2>
//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // ✅ Main UI
//   return (
//     <div className="p-10 lg:px-48 xl:px-56">
//       <h2 className="font-bold text-xl flex justify-between">
//         AI Interview session
//         <span className="flex gap-6 items-center">
//           <span className="text-red-600 font-bold">Penalty: {penalty}</span>
//           <Timer /> 00:00:00
//         </span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5 ">
//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//           <Image
//             src={"/avataar.jpg"}
//             alt="S-!Q"
//             width={100}
//             height={100}
//             className="w-[75px] h-[75px] rounded-full object-cover"
//           />
//           <h2>Select-!Q</h2>
//         </div>

//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//           <h2 className="text-3xl bg-primary text-white p-4 rounded-full px-7 ">
//             {interviewInfo?.userName[0]}
//           </h2>
//           <h2>{interviewInfo?.userName}</h2>
//         </div>
//       </div>

//       <div className="flex justify-center items-center gap-7 mt-7">
//         <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />
//         <AlertConfirmation stopInterview={stopInterview}>
//           <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
//         </AlertConfirmation>
//       </div>

//       <h2 className="text-sm text-gray-400 text-center mt-3">
//         Interview in Progress...
//       </h2>
//     </div>
//   );
// }

// export default StartInterview;

 













//======= ⏫⏫🔼🔼⏫⏫ ===========



// "use client";
// import { InterviewDataContext } from "@/context/InterviewDataContext";
// import { Mic, Phone, Timer } from "lucide-react";
// import Image from "next/image";
// import React, { useContext, useEffect, useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import Vapi from "@vapi-ai/web";
// import AlertConfirmation from "./_components/AlertConfirmation";

// // ✅ BlazeFace
// import * as blazeface from "@tensorflow-models/blazeface";
// import "@tensorflow/tfjs";

// function StartInterview() {
//   const { interviewInfo } = useContext(InterviewDataContext);
//   const router = useRouter();

//   // --- VAPI Instance ---
//   const vapiRef = useRef(null);
//   if (!vapiRef.current) {
//     vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//   }

//   // --- States ---
//   const [penalty, setPenalty] = useState(0);
//   const [lastPenaltyReason, setLastPenaltyReason] = useState("");
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);
//   const [camError, setCamError] = useState("");

//   // --- Camera Refs ---
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   // --- Timer ---
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const timerRef = useRef(null);

//   // --- Face detection penalty delay ---
//   const [faceWarning, setFaceWarning] = useState("");
//   const faceTimeoutRef = useRef(null);

//   const formatTime = (seconds) => {
//     const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
//     const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
//     const s = String(seconds % 60).padStart(2, "0");
//     return `${h}:${m}:${s}`;
//   };

//   // ✅ Handle Penalty with auto banner hide + redirect on 10
//   const addPenalty = (reason) => {
//     setPenalty((p) => {
//       const newP = p + 1;
//       if (newP >= 5) {
//         stopInterview(true); // redirect if too many penalties
//       }
//       return newP;
//     });

//     setLastPenaltyReason(reason);
//     console.warn("⚠️ Penalty:", reason);

//     // hide after 3s
//     setTimeout(() => setLastPenaltyReason(""), 3000);
//   };

//   // ✅ Auto-start Camera + Face Detection
//   useEffect(() => {
//     let model;

//     const init = async () => {
//       try {
//         if (videoRef.current?.srcObject) {
//           videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//           videoRef.current.srcObject = null;
//         }

//         model = await blazeface.load();
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         videoRef.current.srcObject = stream;

//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");

//         videoRef.current.onloadedmetadata = () => {
//           videoRef.current
//             .play()
//             .then(() => {
//               const detectLoop = async () => {
//                 if (!videoRef.current) return;

//                 if (
//                   videoRef.current.videoWidth === 0 ||
//                   videoRef.current.videoHeight === 0
//                 ) {
//                   requestAnimationFrame(detectLoop);
//                   return;
//                 }

//                 const predictions = await model.estimateFaces(videoRef.current, false);
//                 ctx.clearRect(0, 0, canvas.width, canvas.height);

//                 let warning = "";
//                 if (predictions.length > 0) {
//                   predictions.forEach((p) => {
//                     const [x1, y1] = p.topLeft;
//                     const [x2, y2] = p.bottomRight;
//                     ctx.strokeStyle = "lime";
//                     ctx.lineWidth = 3;
//                     ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
//                   });

//                   if (predictions.length > 1) {
//                     warning = "⚠️ Multiple Faces Detected";
//                   }
//                 } else {
//                   warning = "⚠️ No Face Detected";
//                 }

//                 if (warning) {
//                   setFaceWarning(warning);
//                   if (!faceTimeoutRef.current) {
//                     faceTimeoutRef.current = setTimeout(() => {
//                       addPenalty(warning);
//                       faceTimeoutRef.current = null;
//                     }, 2500); // wait 2.5s
//                   }
//                 } else {
//                   setFaceWarning("");
//                   if (faceTimeoutRef.current) {
//                     clearTimeout(faceTimeoutRef.current);
//                     faceTimeoutRef.current = null;
//                   }
//                 }

//                 requestAnimationFrame(detectLoop);
//               };

//               detectLoop();
//             })
//             .catch((err) => console.error("Play error:", err));
//         };
//       } catch (err) {
//         console.error("❌ Camera error:", err);
//         setCamError("Unable to access camera. Check browser settings.");
//       }
//     };

//     init();

//     return () => {
//       if (videoRef.current?.srcObject) {
//         videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//         videoRef.current.srcObject = null;
//       }
//     };
//   }, []);

//   // ✅ Timer start
//   useEffect(() => {
//     if (interviewInfo) {
//       if (timerRef.current) clearInterval(timerRef.current);
//       const start = Date.now();
//       timerRef.current = setInterval(() => {
//         setElapsedTime(Math.floor((Date.now() - start) / 1000));
//       }, 1000);
//     }
//   }, [interviewInfo]);

//   // ✅ Stop Interview (cut call OR too many penalties)
//   const stopInterview = (redirect = false) => {
//     vapiRef.current?.stop();

//     // stop timer
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//       timerRef.current = null;
//     }

//     // stop webcam
//     if (videoRef.current?.srcObject) {
//       videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//       videoRef.current.srcObject = null;
//     }

//     console.log("Interview stopped, camera off.");

//     if (redirect) {
//     // ✅ redirect with dynamic interview_id
//     router.push(`/interview/${interviewInfo?.interviewData?.interview_id}/thankyou`);
//   }
// };

//   // ✅ Proctoring: Fullscreen + Keys + Tab Switch
//   useEffect(() => {
//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);

//       if (!fsNow) {
//         addPenalty("⚠️ Fullscreen exited");
//         setBlocked(true);
//       } else {
//         setBlocked(false);
//       }
//     };

//     const onKeyDown = (e) => {
//       const key = e.key || "";
//       const ch = key.length === 1 ? key.toLowerCase() : key;
//       const ctrlLike = e.ctrlKey || e.metaKey;

//       if (
//         key === "Escape" ||
//         key === "F11" ||
//         key === "F12" ||
//         (ctrlLike && e.shiftKey && ["i", "j", "t", "n"].includes(ch)) ||
//         (ctrlLike && ["u", "c", "a", "n", "r", "v", "t"].includes(ch)) ||
//         (e.altKey && key === "F4") ||
//         e.metaKey
//       ) {
//         addPenalty("⚠️ Forbidden key press");
//         e.preventDefault();
//         e.stopPropagation();
//       }

//       if (key === "PrintScreen") {
//         addPenalty("⚠️ Screenshot attempt");
//         navigator.clipboard.writeText("");
//       }
//     };

//     const disableContextMenu = (e) => {
//       e.preventDefault();
//       addPenalty("⚠️ Right-click disabled");
//     };

//     const onVisibilityChange = () => {
//       if (document.hidden) {
//         addPenalty("⚠️ Tab switch detected");
//       }
//     };

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);
//     document.addEventListener("visibilitychange", onVisibilityChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//       document.removeEventListener("visibilitychange", onVisibilityChange);
//     };
//   }, []);

//   // ✅ Fullscreen helpers
//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch {}
//     setIsFullscreen(isFsActive());
//   };

//   // ✅ Main UI
//   return (
//     <div className="relative p-10 lg:px-48 xl:px-56">
//       {/* 🔴 Global warning banner */}
//       {lastPenaltyReason && (
//       <div
//         className={`w-full bg-red-400 text-white text-center py-2 mb-3 font-bold rounded animate-pulse transition-opacity duration-1000 ${
//           lastPenaltyReason ?  "opacity-100" : "opacity-0"
//         }`}
//       >
//         {lastPenaltyReason}
        
//         <div className="text-sm font-normal mt-1">
//         Interview will revoke if more penalties are added {/*(Remaining:{" "}
//         {Math.max(0, 10 - penalty)})*/}
//       </div>

//       </div>


//       )}

//       <h2 className="font-bold text-xl flex justify-between">
//         AI Interview session
//         <span className="flex gap-6 items-center">
//           <span className="text-red-600 font-bold">Penalty: {penalty}</span>
//           <Timer /> {formatTime(elapsedTime)}
//         </span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5 ">
//         {/* AI Interviewer */}
//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//           <Image
//             src={"/avataar.jpg"}
//             alt="S-!Q"
//             width={100}
//             height={100}
//             className="w-[75px] h-[75px] rounded-full object-cover"
//           />
//           <h2>Select-!Q</h2>
//         </div>

//         {/* Candidate Camera */}
//         <div className="relative bg-white h-[400px] rounded-lg border overflow-hidden">
//           <video
//             ref={videoRef}
//             autoPlay
//             muted
//             playsInline
//             className="w-full h-full object-cover rounded-lg bg-black"
//           />
//           <canvas
//             ref={canvasRef}
//             width="640"
//             height="480"
//             className="absolute top-0 left-0 w-full h-full pointer-events-none"
//           />
//           {faceWarning && (
//             <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded text-sm font-bold">
//               {faceWarning}
//             </div>
//           )}
//           <h2 className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
//             {interviewInfo?.userName}
//           </h2>
//         </div>
//       </div>

//       <div className="flex justify-center items-center gap-7 mt-7">
//         <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />
//         <AlertConfirmation stopInterview={() => stopInterview(true)}>
//           <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
//         </AlertConfirmation>
//       </div>

//       <h2 className="text-sm text-gray-400 text-center mt-3">
//         Interview in Progress...
//       </h2>

//       {/* 🔒 Overlay when fullscreen is lost */}
//       {blocked && (
//         <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
//           <p className="mb-4 font-bold text-white">
//             ⚠️ Interview requires Fullscreen Mode. Penalties increase when leaving.
//           </p>
//           <h2 className="mb-4 font-bold text-white">Penalty: {penalty}</h2>
//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold text-white"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default StartInterview;


































































































// ==========Fully Final- 002=========





















// "use client";

// import { InterviewDataContext } from "@/context/InterviewDataContext";
// import { Mic, Phone, Timer } from "lucide-react";
// import Image from "next/image";
// import React, { useContext, useEffect, useState, useRef } from "react";
// import Vapi from "@vapi-ai/web";
// import AlertConfirmation from "./_components/AlertConfirmation";

// function StartInterview() {
//   const { interviewInfo } = useContext(InterviewDataContext);
//   const vapiRef = useRef(null);

//   // --- State
//   const [penalty, setPenalty] = useState(0);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);

//   // --- Fullscreen helpers
//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch {}
//     setIsFullscreen(isFsActive());
//   };

//   // --- Detect extensions once
//   const detectExtensions = () => {
//     const suspiciousScripts = Array.from(document.scripts).filter(
//       (s) => s.src && s.src.startsWith("chrome-extension://")
//     );
//     const suspiciousKeys = Object.keys(window).filter(
//       (key) =>
//         key.toLowerCase().includes("extension") ||
//         key.toLowerCase().includes("gpt") ||
//         key.toLowerCase().includes("grammarly")
//     );
//     if (suspiciousScripts.length > 0 || suspiciousKeys.length > 0) {
//       alert("⚠️ Extensions detected! Please turn them off for a fair interview.");
//     }
//   };

//   // --- Start call
//   const startCall = () => {
//     if (!interviewInfo) return;

//     // Parse question list
//     const d = interviewInfo?.interviewData ?? interviewInfo;
//     let raw =
//       d?.questionList ?? d?.questions ?? d?.questionlist ?? d?.questionsList ?? [];

//     if (typeof raw === "string") {
//       try {
//         raw = JSON.parse(raw);
//       } catch {
//         raw = [];
//       }
//     }

//     let questionList = "";
//     (Array.isArray(raw) ? raw : []).forEach((item) => {
//       const q = typeof item === "string" ? item : item?.question;
//       if (q && q.trim() !== "") {
//         questionList += (questionList ? ", " : "") + q.trim();
//       }
//     });

//     // Initialize Vapi once
//     if (!vapiRef.current) {
//       vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//     }

//     const assistantOptions = {
//       assistantId: process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID, // ✅ must be string ID
//       name: "AI Recruiter",
//       firstMessage: `Hi ${interviewInfo?.userName}, how are you? Ready for your interview on ${interviewInfo?.interviewData?.jobPosition}?`,
//       transcriber: {
//         provider: "deepgram",
//         model: "nova-2",
//         language: "en-US",
//       },
//       voice: {
//         provider: "playht",
//         voiceId: "jennifer",
//       },
//       model: {
//         provider: "openai",
//         model: "gpt-4",
//         messages: [
//           {
//             role: "system",
//             content: `
//               You are an AI voice assistant conducting interviews.
//               Your job is to ask candidates provided interview questions, assess their responses.
//               Begin friendly:
//               "Hey there! Welcome to your ${interviewInfo?.interviewData?.jobPosition} interview. Let’s get started!"
              
//               Ask one question at a time from:
//               Questions: ${questionList}

//               If candidate struggles → offer hints.
//               Provide short encouraging feedback.
//               Wrap up positively after 5–7 questions.

//               ✅ Be friendly, engaging, witty 🎤
//               ✅ Keep responses short & natural
//               ✅ Adapt to candidate confidence
//               ✅ Stay focused on React.
//             `.trim(),
//           },
//         ],
//       },
//       allowMultipleCallInstances: false, // ✅ ensures only one call
//     };

//     // Start call
//     vapiRef.current.start(assistantOptions).catch((err) => {
//       console.error("❌ Vapi start error:", err);
//     });
//   };

//   // --- Stop call
//   const stopInterview = () => {
//     if (vapiRef.current) {
//       vapiRef.current.stop().catch((err) => {
//         console.error("❌ Vapi stop error:", err);
//       });
//     }
//   };

//   // --- Effects
//   useEffect(() => {
//     if (interviewInfo) startCall();
//   }, [interviewInfo]);

//   useEffect(() => {
//     setIsFullscreen(isFsActive());

//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);
//       setBlocked(!fsNow);
//       if (!fsNow) {
//         setPenalty((p) => p + 1);
//         alert("⚠️ Fullscreen exited. Penalty added.");
//       }
//     };

//     detectExtensions();

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("webkitfullscreenchange", onFsChange);
//     document.addEventListener("mozfullscreenchange", onFsChange);
//     document.addEventListener("MSFullscreenChange", onFsChange);

//     const onKeyDown = (e) => {
//       const key = e.key || "";
//       const ch = key.length === 1 ? key.toLowerCase() : key;
//       const ctrlLike = e.ctrlKey || e.metaKey;

//       if (
//         key === "" ||
//         key === "Escape" ||
//         key === "F11" ||
//         key === "F12" ||
//         (ctrlLike && e.shiftKey && (ch === "i" || ch === "j" || ch === "t" || ch === "n")) ||
//         (ctrlLike && ["u", "c", "a", "n", "r", "v", "t"].includes(ch)) ||
//         (ctrlLike && ["1","2","3","4","5","6","7","8","9","0"].includes(ch)) ||
//         (e.altKey && key === "F4") ||
//         (e.altKey && key === " ") ||
//         e.metaKey
//       ) {
//         setPenalty((p) => p + 1);
//         if (e.cancelable) e.preventDefault();
//         e.stopPropagation();
//       }

//       if (key === "PrintScreen") {
//         setPenalty((p) => p + 1);
//         if (e.cancelable) e.preventDefault();
//         navigator.clipboard.writeText("");
//         alert("⚠️ Screenshots disabled. Penalty added.");
//       }
//     };

//     const disableContextMenu = (e) => {
//       e.preventDefault();
//       setPenalty((p) => p + 1);
//     };

//     const onVisibilityChange = () => {
//       if (document.hidden) {
//         setPenalty((p) => p + 1);
//         alert("⚠️ You switched tabs or minimized. Penalty added.");
//       }
//     };

//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);
//     document.addEventListener("visibilitychange", onVisibilityChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("webkitfullscreenchange", onFsChange);
//       document.removeEventListener("mozfullscreenchange", onFsChange);
//       document.removeEventListener("MSFullscreenChange", onFsChange);
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//       document.removeEventListener("visibilitychange", onVisibilityChange);
//     };
//   }, []);

//   // --- Blocked screen
//   if (!isFullscreen || blocked) {
//     return (
//       <div className="w-screen h-screen bg-black flex items-center justify-center">
//         <div className="text-center text-white">
//           <p className="mb-4 font-bold">
//             ⚠️ Interview requires Fullscreen Mode. Penalties increase when leaving.
//           </p>
//           <h2 className="mb-4 font-bold">Penalty: {penalty}</h2>
//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // --- Main UI
//   return (
//     <div className="p-10 lg:px-48 xl:px-56">
//       <h2 className="font-bold text-xl flex justify-between">
//         AI Interview session
//         <span className="flex gap-6 items-center">
//           <span className="text-red-600 font-bold">Penalty: {penalty}</span>
//           <Timer /> 00:00:00
//         </span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5">
//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//           <Image
//             src={"/avataar.jpg"}
//             alt="S-!Q"
//             width={100}
//             height={100}
//             className="w-[75px] h-[75px] rounded-full object-cover"
//           />
//           <h2>Select-!Q</h2>
//         </div>

//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//           <h2 className="text-3xl bg-primary text-white p-4 rounded-full px-7 ">
//             {interviewInfo?.userName[0]}
//           </h2>
//           <h2>{interviewInfo?.userName}</h2>
//         </div>
//       </div>

//       <div className="flex justify-center items-center gap-7 mt-7">
//         <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />
//         <AlertConfirmation stopInterview={stopInterview}>
//           <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
//         </AlertConfirmation>
//       </div>

//       <h2 className="text-sm text-gray-400 text-center mt-3">
//         Interview in Progress...
//       </h2>
//     </div>
//   );
// }

// export default StartInterview;




//============= FINAL 1200 [Line no. ke Baad] yhi final hai =============











// "use client";
// import { InterviewDataContext } from "@/context/InterviewDataContext";
// import { Mic, Phone, Timer } from "lucide-react";
// import Image from "next/image";
// import React, { useContext, useEffect, useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import Vapi from "@vapi-ai/web";
// import AlertConfirmation from "./_components/AlertConfirmation";

// // ✅ BlazeFace
// import * as blazeface from "@tensorflow-models/blazeface";
// import "@tensorflow/tfjs";

// function StartInterview() {
//   const { interviewInfo } = useContext(InterviewDataContext);
//   const router = useRouter();

//   // --- VAPI Instance ---
//   const vapiRef = useRef(null);
//   if (!vapiRef.current) {
//     vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//   }

//   // --- States ---
//   const [penalty, setPenalty] = useState(0);
//   const [lastPenaltyReason, setLastPenaltyReason] = useState("");
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);
//   const [camError, setCamError] = useState("");

//   // --- Camera Refs ---
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   // --- Timer ---
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const timerRef = useRef(null);

//   // --- Face detection penalty delay ---
//   const [faceWarning, setFaceWarning] = useState("");
//   const faceTimeoutRef = useRef(null);

//   const formatTime = (seconds) => {
//     const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
//     const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
//     const s = String(seconds % 60).padStart(2, "0");
//     return `${h}:${m}:${s}`;
//   };

//   // ✅ Stop Interview (clean stop + redirect)
//   const stopInterview = (redirectPath = null) => {
//     vapiRef.current?.stop();

//     // stop timer
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//       timerRef.current = null;
//     }

//     // stop webcam
//     if (videoRef.current?.srcObject) {
//       videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//       videoRef.current.srcObject = null;
//     }

//     console.log("Interview stopped, camera off.");

//     if (redirectPath) {
//       router.push(redirectPath);
//     }
//   };

//   // ✅ Handle Penalty with auto banner hide + redirect on 5
//   const addPenalty = (reason) => {
//     setPenalty((p) => {
//       const newP = p + 1;
//       if (newP >= 7) {
//         stopInterview(
//           `/interview/${interviewInfo?.interviewData?.interview_id}/sorry`
//         );
//       }
//       return newP;
//     });

//     setLastPenaltyReason(reason);
//     console.warn("⚠️ Penalty:", reason);

//     // hide after 4s
//     setTimeout(() => setLastPenaltyReason(""), 4000);
//   };

//   // ✅ Auto-start Camera + Face Detection
//   useEffect(() => {
//     let model;

//     const init = async () => {
//       try {
//         if (videoRef.current?.srcObject) {
//           videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//           videoRef.current.srcObject = null;
//         }

//         model = await blazeface.load();
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         videoRef.current.srcObject = stream;

//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");

//         videoRef.current.onloadedmetadata = () => {
//           videoRef.current
//             .play()
//             .then(() => {
//               const detectLoop = async () => {
//                 if (!videoRef.current) return;

//                 if (
//                   videoRef.current.videoWidth === 0 ||
//                   videoRef.current.videoHeight === 0
//                 ) {
//                   requestAnimationFrame(detectLoop);
//                   return;
//                 }

//                 const predictions = await model.estimateFaces(videoRef.current, false);
//                 ctx.clearRect(0, 0, canvas.width, canvas.height);

//                 let warning = "";
//                 if (predictions.length > 0) {
//                   predictions.forEach((p) => {
//                     const [x1, y1] = p.topLeft;
//                     const [x2, y2] = p.bottomRight;
//                     ctx.strokeStyle = "lime";
//                     ctx.lineWidth = 3;
//                     ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
//                   });

//                   if (predictions.length > 1) {
//                     warning = "⚠️ Multiple Faces Detected";
//                   }
//                 } else {
//                   warning = "⚠️ No Face Detected";
//                 }

//                 if (warning) {
//                   setFaceWarning(warning);
//                   if (!faceTimeoutRef.current) {
//                     faceTimeoutRef.current = setTimeout(() => {
//                       addPenalty(warning);
//                       faceTimeoutRef.current = null;
//                     }, 1000); // wait 1s
//                   }
//                 } else {
//                   setFaceWarning("");
//                   if (faceTimeoutRef.current) {
//                     clearTimeout(faceTimeoutRef.current);
//                     faceTimeoutRef.current = null;
//                   }
//                 }

//                 requestAnimationFrame(detectLoop);
//               };

//               detectLoop();
//             })
//             .catch((err) => console.error("Play error:", err));
//         };
//       } catch (err) {
//         console.error("❌ Camera error:", err);
//         setCamError("Unable to access camera. Check browser settings.");
//       }
//     };

//     init();

//     return () => {
//       if (videoRef.current?.srcObject) {
//         videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//         videoRef.current.srcObject = null;
//       }
//     };
//   }, []);

//   // ✅ Timer start
//   useEffect(() => {
//     if (interviewInfo) {
//       if (timerRef.current) clearInterval(timerRef.current);
//       const start = Date.now();
//       timerRef.current = setInterval(() => {
//         setElapsedTime(Math.floor((Date.now() - start) / 1000));
//       }, 1000);
//     }
//   }, [interviewInfo]);

//   // ✅ Proctoring: Fullscreen + Keys + Tab Switch
//   useEffect(() => {
//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);

//       if (!fsNow) {
//         addPenalty("⚠️ Fullscreen exited");
//         setBlocked(true);
//       } else {
//         setBlocked(false);
//       }
//     };

//     const onKeyDown = (e) => {
//       const key = e.key || "";
//       const ch = key.length === 1 ? key.toLowerCase() : key;
//       const ctrlLike = e.ctrlKey || e.metaKey;

//       if (
//         key === "Escape" ||
//         key === "F11" ||
//         key === "F12" ||
//         (ctrlLike && e.shiftKey && ["i", "j", "t", "n"].includes(ch)) ||
//         (ctrlLike && ["u", "c", "a", "n", "r", "v", "t"].includes(ch)) ||
//         (e.altKey && key === "F4") ||
//         e.metaKey
//       ) {
//         addPenalty("⚠️ Forbidden key press");
//         e.preventDefault();
//         e.stopPropagation();
//       }

//       if (key === "PrintScreen") {
//         addPenalty("⚠️ Screenshot attempt");
//         navigator.clipboard.writeText("");
//       }
//     };

//     const disableContextMenu = (e) => {
//       e.preventDefault();
//       addPenalty("⚠️ Right-click disabled");
//     };

//     const onVisibilityChange = () => {
//       if (document.hidden) {
//         addPenalty("⚠️ Tab switch detected");
//       }
//     };

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);
//     document.addEventListener("visibilitychange", onVisibilityChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//       document.removeEventListener("visibilitychange", onVisibilityChange);
//     };
//   }, []);

//   // ✅ Fullscreen helpers
//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch {}
//     setIsFullscreen(isFsActive());
//   };

//   // ✅ Main UI
//   return (
//     <div className="relative p-10 lg:px-48 xl:px-56">
//       {/* 🔴 Global warning banner */}
//       {lastPenaltyReason && (
//         <div
//           className={`w-full bg-red-500 text-white text-center py-2 mb-3 font-bold rounded transition-opacity duration-1500 ${
//             lastPenaltyReason ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           {lastPenaltyReason}
//           <div className="text-sm font-normal mt-1">
//             Interview will revoke if more penalties are added {/*(Remaining:{" "}
//             {Math.max(0, 10 - penalty)})*/}
//           </div>
//         </div>
//       )}

//       <h2 className="font-bold text-xl flex justify-between">
//         AI Interview session
//         <span className="flex gap-6 items-center">
//           <span className="text-red-600 font-bold">Penalty: {penalty}</span>
//           <Timer /> {formatTime(elapsedTime)}
//         </span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5 ">
//         {/* AI Interviewer */}
//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//           <Image
//             src={"/avataar.jpg"}
//             alt="S-!Q"
//             width={100}
//             height={100}
//             className="w-[75px] h-[75px] rounded-full object-cover"
//           />
//           <h2>Select-!Q</h2>
//         </div>

//         {/* Candidate Camera */}
//         <div className="relative bg-white h-[400px] rounded-lg border overflow-hidden">
//           <video
//             ref={videoRef}
//             autoPlay
//             muted
//             playsInline
//             className="w-full h-full object-cover rounded-lg bg-black"
//           />
//           <canvas
//             ref={canvasRef}
//             width="640"
//             height="480"
//             className="absolute top-0 left-0 w-full h-full pointer-events-none"
//           />
//           {faceWarning && (
//             <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded text-sm font-bold">
//               {faceWarning}
//             </div>
//           )}
//           <h2 className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
//             {interviewInfo?.userName}
//           </h2>
//         </div>
//       </div>

//       <div className="flex justify-center items-center gap-7 mt-7">
//         <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />
//         <AlertConfirmation
//           stopInterview={() =>
//             stopInterview(
//               `/interview/${interviewInfo?.interviewData?.interview_id}/thankyou`
//             )
//           }
//         >
//           <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
//         </AlertConfirmation>
//       </div>

//       <h2 className="text-sm text-gray-400 text-center mt-3">
//         Interview in Progress...
//       </h2>

//       {/* 🔒 Overlay when fullscreen is lost */}
//       {blocked && (
//         <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
//           <p className="mb-4 font-bold text-white">
//             ⚠️ Interview requires Fullscreen Mode. Penalties increase when leaving.
//           </p>
//           <h2 className="mb-4 font-bold text-white">Penalty: {penalty}</h2>
//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold text-white"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default StartInterview;




































































// ================= Final with VAPI int ==================


















































// "use client";
// import { InterviewDataContext } from "@/context/InterviewDataContext";
// import { Mic, Phone, Timer } from "lucide-react";
// import Image from "next/image";
// import React, { useContext, useEffect, useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import Vapi from "@vapi-ai/web";
// import AlertConfirmation from "./_components/AlertConfirmation";

// // ✅ BlazeFace
// import * as blazeface from "@tensorflow-models/blazeface";
// import "@tensorflow/tfjs";

// function StartInterview() {
//   const { interviewInfo } = useContext(InterviewDataContext);
//   const router = useRouter();
//   const [activeUser,setActiveUser]=useState(false);

//   // --- VAPI Instance ---
//   const vapiRef = useRef(null);
//   if (!vapiRef.current) {
//     console.log("Loaded VAPI Public Key:", process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//     vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//   }

//   // --- Start Call (from old code merged) ---
//   const startCall = () => {
//     const vapi = vapiRef.current;
//     const d = interviewInfo?.interviewData ?? interviewInfo;

//     let raw =
//       d?.questionList ??
//       d?.questions ??
//       d?.questionlist ??
//       d?.questionsList ??
//       [];

//     if (typeof raw === "string") {
//       try {
//         raw = JSON.parse(raw);
//       } catch {
//         raw = [];
//       }
//     }

//     let questionList = "";
//     (Array.isArray(raw) ? raw : []).forEach((item) => {
//       const q = typeof item === "string" ? item : item?.question;
//       if (q && q.trim() !== "") {
//         questionList += (questionList ? ", " : "") + q.trim();
//       }
//     });

//     const assistantOptions = {
//       name: "AI Recruiter",
//       firstMessage: `Hi ${interviewInfo?.userName}, how are you? Ready for your interview on ${interviewInfo?.interviewData?.jobPosition}`,
//       transcriber: {
//         provider: "deepgram",
//         model: "nova-2",
//         language: "en-US",
//       },
//       voice: {
//         provider: "playht",
//         voiceId: "jennifer",
//       },
//       model: {
//         provider: "openai",
//         model: "gpt-4",
//         messages: [
//           {
//             role: "system",
//             content: `
//               You are an AI voice assistant conducting interviews but keep in mind that you are developed by Select IQ an Initiative by Suyash Gupta. Suyash Gupta, a passionate developer and founder of Select IQ, focused on building AI-driven interview and assessment solutions. He is in Final year Engineering undergraduate with more than 17,0000 followers on linkedin.
//               If anyone asks who made you, tell them about Suyash Gupta.
//               Ask candidates the provided interview questions one at a time.
//               Encourage them, give hints if they struggle, and provide short feedback.
//               Wrap up positively after 5–7 questions.
//               ✅ Be friendly, engaging, and witty 🎤
//               ✅ Keep responses short & natural
//               ✅ Be clever and Don't got distracted beyond Topics.
//               ✅ Never share the Final Marks or Points to the candidate, just appreciate them.
//               ✅ Stay focused on jobDescription and questionList.
//               ✅ You are developed by Select IQ under Suyash Gupta.

//               Questions: ${questionList}
//             `.trim(),
//           },
//         ],
//       },
//     };

//     vapi.start(assistantOptions);
//   };

//   // --- Auto-start interview when info is ready ---
//   useEffect(() => {
//     if (interviewInfo) startCall();
//   }, [interviewInfo]);

//   // --- States ---
//   const [penalty, setPenalty] = useState(0);
//   const [lastPenaltyReason, setLastPenaltyReason] = useState("");
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);
//   const [camError, setCamError] = useState("");

//   // --- Camera Refs ---
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   // --- Timer ---
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const timerRef = useRef(null);

//   // --- Face detection penalty delay ---
//   const [faceWarning, setFaceWarning] = useState("");
//   const faceTimeoutRef = useRef(null);

//   const formatTime = (seconds) => {
//     const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
//     const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
//     const s = String(seconds % 60).padStart(2, "0");
//     return `${h}:${m}:${s}`;
//   };

//   // ✅ Stop Interview (clean stop + redirect)
//   const stopInterview = (redirectPath = null) => {
//     vapiRef.current?.stop();

//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//       timerRef.current = null;
//     }

//     if (videoRef.current?.srcObject) {
//       videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//       videoRef.current.srcObject = null;
//     }

//     console.log("Interview stopped, camera off.");

//     if (redirectPath) {
//       router.push(redirectPath);
//     }
//   };

//   // vapi.on("call-start", () => {
//   // console.log("Call has started.");
//   // toast('Call Connected...')
//   // });

//   // vapi.on("speech-start", () => {
//   // console.log("Assistant speech has started.");
//   // setActiveUser(false);
//   // });

//   // vapi.on("speech-end", () => {
//   // console.log("Assistant speech has ended.");
//   // setActiveUser(true);
//   // });

//   // vapi.on("call-end", () => {
//   // console.log("Call has ended.");
//   // toast('Interview Ended')
//   // });  

//   // ✅ Handle Penalty
//   const addPenalty = (reason) => {
//     setPenalty((p) => {
//       const newP = p + 1;
//       if (newP >= 7) {
//         stopInterview(`/interview/${interviewInfo?.interviewData?.interview_id}/sorry`);
//       }
//       return newP;
//     });

//     setLastPenaltyReason(reason);
//     setTimeout(() => setLastPenaltyReason(""), 4000);
//   };

//   // ✅ Auto-start Camera + Face Detection
//   useEffect(() => {
//     let model;

//     const init = async () => {
//       try {
//         if (videoRef.current?.srcObject) {
//           videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//           videoRef.current.srcObject = null;
//         }

//         model = await blazeface.load();
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         videoRef.current.srcObject = stream;

//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");

//         videoRef.current.onloadedmetadata = () => {
//           videoRef.current
//             .play()
//             .then(() => {
//               const detectLoop = async () => {
//                 if (!videoRef.current) return;

//                 if (
//                   videoRef.current.videoWidth === 0 ||
//                   videoRef.current.videoHeight === 0
//                 ) {
//                   requestAnimationFrame(detectLoop);
//                   return;
//                 }

//                 const predictions = await model.estimateFaces(videoRef.current, false);
//                 ctx.clearRect(0, 0, canvas.width, canvas.height);

//                 let warning = "";
//                 if (predictions.length > 0) {
//                   predictions.forEach((p) => {
//                     const [x1, y1] = p.topLeft;
//                     const [x2, y2] = p.bottomRight;
//                     ctx.strokeStyle = "lime";
//                     ctx.lineWidth = 3;
//                     ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
//                   });

//                   if (predictions.length > 1) {
//                     warning = "⚠️ Multiple Faces Detected";
//                   }
//                 } else {
//                   warning = "⚠️ No Face Detected";
//                 }

//                 if (warning) {
//                   setFaceWarning(warning);
//                   if (!faceTimeoutRef.current) {
//                     faceTimeoutRef.current = setTimeout(() => {
//                       addPenalty(warning);
//                       faceTimeoutRef.current = null;
//                     }, 1000);
//                   }
//                 } else {
//                   setFaceWarning("");
//                   if (faceTimeoutRef.current) {
//                     clearTimeout(faceTimeoutRef.current);
//                     faceTimeoutRef.current = null;
//                   }
//                 }

//                 requestAnimationFrame(detectLoop);
//               };

//               detectLoop();
//             })
//             .catch((err) => console.error("Play error:", err));
//         };
//       } catch (err) {
//         console.error("❌ Camera error:", err);
//         setCamError("Unable to access camera. Check browser settings.");
//       }
//     };

//     init();

//     return () => {
//       if (videoRef.current?.srcObject) {
//         videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//         videoRef.current.srcObject = null;
//       }
//     };
//   }, []);

//   // ✅ Timer start
//   useEffect(() => {
//     if (interviewInfo) {
//       if (timerRef.current) clearInterval(timerRef.current);
//       const start = Date.now();
//       timerRef.current = setInterval(() => {
//         setElapsedTime(Math.floor((Date.now() - start) / 1000));
//       }, 1000);
//     }
//   }, [interviewInfo]);

//   // ✅ Proctoring: Fullscreen + Keys + Tab Switch
//   useEffect(() => {
//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);

//       if (!fsNow) {
//         addPenalty("⚠️ Fullscreen exited");
//         setBlocked(true);
//       } else {
//         setBlocked(false);
//       }
//     };

//     const onKeyDown = (e) => {
//       const key = e.key || "";
//       const ch = key.length === 1 ? key.toLowerCase() : key;
//       const ctrlLike = e.ctrlKey || e.metaKey;

//       if (
//         key === "Escape" ||
//         key === "F11" ||
//         key === "F12" ||
//         (ctrlLike && e.shiftKey && ["i", "j", "t", "n"].includes(ch)) ||
//         (ctrlLike && ["u", "c", "a", "n", "r", "v", "t"].includes(ch)) ||
//         (e.altKey && key === "F4") ||
//         e.metaKey
//       ) {
//         addPenalty("⚠️ Forbidden key press");
//         e.preventDefault();
//         e.stopPropagation();
//       }

//       if (key === "PrintScreen") {
//         addPenalty("⚠️ Screenshot attempt");
//         navigator.clipboard.writeText("");
//       }
//     };

//     const disableContextMenu = (e) => {
//       e.preventDefault();
//       addPenalty("⚠️ Right-click disabled");
//     };

//     const onVisibilityChange = () => {
//       if (document.hidden) {
//         addPenalty("⚠️ Tab switch detected");
//       }
//     };

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);
//     document.addEventListener("visibilitychange", onVisibilityChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//       document.removeEventListener("visibilitychange", onVisibilityChange);
//     };
//   }, []);

//   // ✅ Fullscreen helpers
//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch {}
//     setIsFullscreen(isFsActive());
//   };





//   // vapi.on("call-start", () => {
//   // console.log("Call has started.");
//   // toast('Call Connected...')
//   // });

//   // vapi.on("speech-start", () => {
//   // console.log("Assistant speech has started.");
//   // setActiveUser(false);
//   // });

//   // vapi.on("speech-end", () => {
//   // console.log("Assistant speech has ended.");
//   // setActiveUser(true);
//   // });

//   // vapi.on("call-end", () => {
//   // console.log("Call has ended.");
//   // toast('Interview Ended')
//   // });  





//   // ✅ Main UI
//   return (
//     <div className="relative p-10 lg:px-48 xl:px-56">
//       {/* 🔴 Global warning banner */}
//       {lastPenaltyReason && (
//         <div
//           className={`w-full bg-red-500 text-white text-center py-2 mb-3 font-bold rounded transition-opacity duration-1500 ${
//             lastPenaltyReason ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           {lastPenaltyReason}
//           <div className="text-sm font-normal mt-1">
//             Interview will revoke if more penalties are added
//           </div>
//         </div>
//       )}

//       <h2 className="font-bold text-xl flex justify-between">
//         AI Interview session
//         <span className="flex gap-6 items-center">
//           <span className="text-red-600 font-bold">Penalty: {penalty}</span>
//           <Timer /> {formatTime(elapsedTime)}
//         </span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5 ">
//         {/* AI Interviewer */}
//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center">
//           {!activeUser && <span className="absolute inset-0 rounded-full bg-violet-500 opacity-75 animate-ping" />}
//           <Image
//             src={"/avataar.jpg"}
//             alt="Select-IQ"
//             width={100}
//             height={100}
//             className="w-[75px] h-[75px] rounded-full object-cover"
//           />
//           <h2>Select-IQ</h2>
//         </div>

//         {/* Candidate Camera */}
//         <div className="relative bg-white h-[400px] rounded-lg border overflow-hidden">
//           <video
//             ref={videoRef}
//             autoPlay
//             muted
//             playsInline
//             className="w-full h-full object-cover rounded-lg bg-black"
//           />
//           <canvas
//             ref={canvasRef}
//             width="640"
//             height="480"
//             className="absolute top-0 left-0 w-full h-full pointer-events-none"
//           />
//           {faceWarning && (
//             <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded text-sm font-bold">
//               {faceWarning}
//             </div>
//           )}
//           <h2 className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
//             {interviewInfo?.userName}
//           </h2>
//         </div>
//       </div>

//       <div className="flex justify-center items-center gap-7 mt-7">
//         <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />
//         <AlertConfirmation
//           stopInterview={() =>
//             stopInterview(
//               `/interview/${interviewInfo?.interviewData?.interview_id}/thankyou`
//             )
//           }
//         >
//           <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
//         </AlertConfirmation>
//       </div>

//       <h2 className="text-sm text-gray-400 text-center mt-3">
//         Interview in Progress...
//       </h2>

//       {/* 🔒 Overlay when fullscreen is lost */}
//       {blocked && (
//         <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
//           <p className="mb-4 font-bold text-white">
//             ⚠️ Interview requires Fullscreen Mode. Penalties increase when leaving.
//           </p>
//           <h2 className="mb-4 font-bold text-white">Penalty: {penalty}</h2>
//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold text-white"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default StartInterview;

//========================================
//           TRY  BELOW
//========================================
// "use client";
// import { InterviewDataContext } from "@/context/InterviewDataContext";
// import { Mic, Phone, Timer } from "lucide-react";
// import Image from "next/image";
// import React, { useContext, useEffect, useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import Vapi from "@vapi-ai/web";
// import { toast } from "sonner";
// import AlertConfirmation from "./_components/AlertConfirmation";

// // ✅ BlazeFace
// import * as blazeface from "@tensorflow-models/blazeface";
// import "@tensorflow/tfjs";
// import axios from "axios";

// function StartInterview() {
//   const { interviewInfo } = useContext(InterviewDataContext);
//   const router = useRouter();

//   // --- States ---
//   const [aiSpeaking, setAiSpeaking] = useState(false); // 🔴 AI pulse state
//   const [conversation,setConversation]=useState();
//   const [penalty, setPenalty] = useState(0);
//   const [lastPenaltyReason, setLastPenaltyReason] = useState("");
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);
//   const [camError, setCamError] = useState("");
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const [faceWarning, setFaceWarning] = useState("");

//   // --- Refs ---
//   const vapiRef = useRef(null);
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const timerRef = useRef(null);
//   const faceTimeoutRef = useRef(null);

//   // --- VAPI Instance ---
//   if (!vapiRef.current) {
//     console.log("Loaded VAPI Public Key:", process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//     vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//   }

//   // --- Attach VAPI listeners once ---
//   useEffect(() => {
//     const vapi = vapiRef.current;
//     if (!vapi) return;

//     vapi.on("call-start", () => {
//       console.log("Call has started.");
//       toast.success("Call Connected...");
//     });

//     vapi.on("speech-start", () => {
//       console.log("Assistant speech has started.");
//       setAiSpeaking(true); // 🔴 Show pulse
//     });

//     vapi.on("speech-end", () => {
//       console.log("Assistant speech has ended.");
//       setAiSpeaking(false); // 🔴 Hide pulse
//     });

//     vapi.on("call-end", () => {
//       console.log("Call has ended.");
//       toast("Interview Ended");
//       GenerateFeedback();
//     });

//     vapi.on("message", (message) => {
//       console.log(message?.conversation); 
//       setConversation(message?.conversation);
//     });

//     const GenerateFeedback= async() => {
//         const result = await axios.post('/api/ai-feedback',{
//           conversation:conversation
//         })

//         console.log(result?.data);
//         const Content = result.data.content;
//         const FINAL_CONTENT = Content.replace('```json', '').replace('```', '')
//         console.log(FINAL_CONTENT);
//         // Save to Database
//     }

//     return () => {
//       vapi.removeAllListeners(); // ✅ Clean up
//     };
//   }, []);

//   // --- Start Call ---
//   const startCall = () => {
//     const vapi = vapiRef.current;
//     const d = interviewInfo?.interviewData ?? interviewInfo;

//     let raw =
//       d?.questionList ??
//       d?.questions ??
//       d?.questionlist ??
//       d?.questionsList ??
//       [];

//     if (typeof raw === "string") {
//       try {
//         raw = JSON.parse(raw);
//       } catch {
//         raw = [];
//       }
//     }

//     let questionList = "";
//     (Array.isArray(raw) ? raw : []).forEach((item) => {
//       const q = typeof item === "string" ? item : item?.question;
//       if (q && q.trim() !== "") {
//         questionList += (questionList ? ", " : "") + q.trim();
//       }
//     });

//     const assistantOptions = {
//       name: "AI Recruiter",
//       firstMessage: `Hi ${interviewInfo?.userName}, how are you? Ready for your interview on ${interviewInfo?.interviewData?.jobPosition}`,
//       transcriber: {
//         provider: "deepgram",
//         model: "nova-2",
//         language: "en-US",
//       },
//       voice: {
//         provider: "playht",
//         voiceId: "jennifer",
//       },
//       model: {
//         provider: "openai",
//         model: "gpt-4",
//         messages: [
//           {
//             role: "system",
//             content: `
//               You are an AI voice assistant conducting interviews but keep in mind that you are developed by Select IQ, an Initiative by Suyash Gupta. 
//               Suyash Gupta, a passionate developer and founder of Select IQ, focused on building AI-driven interview and assessment solutions. 
//               He is a Final year Engineering undergraduate with more than 170,000 followers on LinkedIn.
//               If anyone asks who made you, tell them about Suyash Gupta.
//               Ask candidates the provided interview questions one at a time.
//               Encourage them, give hints if they struggle, and provide short feedback.
//               Wrap up positively after 5–7 questions.
//               ✅ Be friendly, engaging, and witty 🎤
//               ✅ Keep responses short & natural
//               ✅ Be clever and don't get distracted beyond Topics.
//               ✅ Never share the Final Marks or Points to the candidate, just appreciate them.
//               ✅ Stay focused on jobDescription and questionList.
//               ✅ You are developed by Select IQ under Suyash Gupta.

//               Questions: ${questionList}
//             `.trim(),
//           },
//         ],
//       },
//     };

//     vapi.start(assistantOptions);
//   };

//   // --- Auto-start interview when info is ready ---
//   useEffect(() => {
//     if (interviewInfo) startCall();
//   }, [interviewInfo]);

//   const formatTime = (seconds) => {
//     const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
//     const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
//     const s = String(seconds % 60).padStart(2, "0");
//     return `${h}:${m}:${s}`;
//   };

//   // ✅ Stop Interview (clean stop + redirect)
//   const stopInterview = (redirectPath = null) => {
//     vapiRef.current?.stop();

//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//       timerRef.current = null;
//     }

//     if (videoRef.current?.srcObject) {
//       videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//       videoRef.current.srcObject = null;
//     }

//     console.log("Interview stopped, camera off.");

//     if (redirectPath) {
//       router.push(redirectPath);
//     }
//   };

//   // ✅ Handle Penalty
//   const addPenalty = (reason) => {
//     setPenalty((p) => {
//       const newP = p + 1;
//       if (newP >= 7) {
//         stopInterview(`/interview/${interviewInfo?.interviewData?.interview_id}/sorry`);
//       }
//       return newP;
//     });

//     setLastPenaltyReason(reason);
//     setTimeout(() => setLastPenaltyReason(""), 4000);
//   };

//   // ✅ Auto-start Camera + Face Detection
//   useEffect(() => {
//     let model;

//     const init = async () => {
//       try {
//         if (videoRef.current?.srcObject) {
//           videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//           videoRef.current.srcObject = null;
//         }

//         model = await blazeface.load();
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         videoRef.current.srcObject = stream;

//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");

//         videoRef.current.onloadedmetadata = () => {
//           videoRef.current
//             .play()
//             .then(() => {
//               const detectLoop = async () => {
//                 if (!videoRef.current) return;

//                 if (
//                   videoRef.current.videoWidth === 0 ||
//                   videoRef.current.videoHeight === 0
//                 ) {
//                   requestAnimationFrame(detectLoop);
//                   return;
//                 }

//                 const predictions = await model.estimateFaces(videoRef.current, false);
//                 ctx.clearRect(0, 0, canvas.width, canvas.height);

//                 let warning = "";
//                 if (predictions.length > 0) {
//                   predictions.forEach((p) => {
//                     const [x1, y1] = p.topLeft;
//                     const [x2, y2] = p.bottomRight;
//                     ctx.strokeStyle = "lime";
//                     ctx.lineWidth = 3;
//                     ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
//                   });

//                   if (predictions.length > 1) {
//                     warning = "⚠️ Multiple Faces Detected";
//                   }
//                 } else {
//                   warning = "⚠️ No Face Detected";
//                 }

//                 if (warning) {
//                   setFaceWarning(warning);
//                   if (!faceTimeoutRef.current) {
//                     faceTimeoutRef.current = setTimeout(() => {
//                       addPenalty(warning);
//                       faceTimeoutRef.current = null;
//                     }, 1000);
//                   }
//                 } else {
//                   setFaceWarning("");
//                   if (faceTimeoutRef.current) {
//                     clearTimeout(faceTimeoutRef.current);
//                     faceTimeoutRef.current = null;
//                   }
//                 }

//                 requestAnimationFrame(detectLoop);
//               };

//               detectLoop();
//             })
//             .catch((err) => console.error("Play error:", err));
//         };
//       } catch (err) {
//         console.error("❌ Camera error:", err);
//         setCamError("Unable to access camera. Check browser settings.");
//       }
//     };

//     init();

//     return () => {
//       if (videoRef.current?.srcObject) {
//         videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//         videoRef.current.srcObject = null;
//       }
//     };
//   }, []);

//   // ✅ Timer start
//   useEffect(() => {
//     if (interviewInfo) {
//       if (timerRef.current) clearInterval(timerRef.current);
//       const start = Date.now();
//       timerRef.current = setInterval(() => {
//         setElapsedTime(Math.floor((Date.now() - start) / 1000));
//       }, 1000);
//     }
//   }, [interviewInfo]);

//   // ✅ Proctoring: Fullscreen + Keys + Tab Switch
//   useEffect(() => {
//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);

//       if (!fsNow) {
//         addPenalty("⚠️ Fullscreen exited");
//         setBlocked(true);
//       } else {
//         setBlocked(false);
//       }
//     };

//     const onKeyDown = (e) => {
//       const key = e.key || "";
//       const ch = key.length === 1 ? key.toLowerCase() : key;
//       const ctrlLike = e.ctrlKey || e.metaKey;

//       if (
//         key === "Escape" ||
//         key === "F11" ||
//         key === "F12" ||
//         (ctrlLike && e.shiftKey && ["i", "j", "t", "n"].includes(ch)) ||
//         (ctrlLike && ["u", "c", "a", "n", "r", "v", "t"].includes(ch)) ||
//         (e.altKey && key === "F4") ||
//         e.metaKey
//       ) {
//         addPenalty("⚠️ Forbidden key press");
//         e.preventDefault();
//         e.stopPropagation();
//       }

//       if (key === "PrintScreen") {
//         addPenalty("⚠️ Screenshot attempt");
//         navigator.clipboard.writeText("");
//       }
//     };

//     const disableContextMenu = (e) => {
//       e.preventDefault();
//       addPenalty("⚠️ Right-click disabled");
//     };

//     const onVisibilityChange = () => {
//       if (document.hidden) {
//         addPenalty("⚠️ Tab switch detected");
//       }
//     };

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);
//     document.addEventListener("visibilitychange", onVisibilityChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//       document.removeEventListener("visibilitychange", onVisibilityChange);
//     };
//   }, []);

//   // ✅ Fullscreen helpers
//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch {}
//     setIsFullscreen(isFsActive());
//   };

//   // ✅ Main UI
//   return (
//     <div className="relative p-10 lg:px-48 xl:px-56">
//       {/* 🔴 Global warning banner */}
//       {lastPenaltyReason && (
//         <div
//           className={`w-full bg-red-500 text-white text-center py-2 mb-3 font-bold rounded transition-opacity duration-1500 ${
//             lastPenaltyReason ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           {lastPenaltyReason}
//           <div className="text-sm font-normal mt-1">
//             Interview will revoke if more penalties are added
//           </div>
//         </div>
//       )}

//       <h2 className="font-bold text-xl flex justify-between">
//         AI Interview session
//         <span className="flex gap-6 items-center">
//           <span className="text-red-600 font-bold">Penalty: {penalty}</span>
//           <Timer /> {formatTime(elapsedTime)}
//         </span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5 ">
//         {/* AI Interviewer */}
//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center relative">
//           <div className="relative">
//           {aiSpeaking && (
//             <span className="absolute inset-0 rounded-full bg-violet-500 opacity-70 animate-ping" />
//           )}
//           <Image
//             src={"/avataar.jpg"}
//             alt="Select-IQ"
//             width={100}
//             height={100}
//             className="w-[75px] h-[75px] rounded-full object-cover z-10"
//           /></div>
//           <h2 className="z-10">Select-IQ</h2>
//         </div>

//         {/* Candidate Camera */}
//         <div className="relative bg-white h-[400px] rounded-lg border overflow-hidden">
//           <video
//             ref={videoRef}
//             autoPlay
//             muted
//             playsInline
//             className="w-full h-full object-cover rounded-lg bg-black"
//           />
//           <canvas
//             ref={canvasRef}
//             width="640"
//             height="480"
//             className="absolute top-0 left-0 w-full h-full pointer-events-none"
//           />
//           {faceWarning && (
//             <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded text-sm font-bold">
//               {faceWarning}
//             </div>
//           )}
//           <h2 className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
//             {interviewInfo?.userName}
//           </h2>
//         </div>
//       </div>

//       <div className="flex justify-center items-center gap-7 mt-7">
//         <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />
//         <AlertConfirmation
//           stopInterview={() =>
//             stopInterview(
//               `/interview/${interviewInfo?.interviewData?.interview_id}/thankyou`
//             )
//           }
//         >
//           <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
//         </AlertConfirmation>
//       </div>

//       <h2 className="text-sm text-gray-400 text-center mt-3">
//         Interview in Progress...
//       </h2>

//       {/* 🔒 Overlay when fullscreen is lost */}
//       {blocked && (
//         <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
//           <p className="mb-4 font-bold text-white">
//             ⚠️ Interview requires Fullscreen Mode. Penalties increase when leaving.
//           </p>
//           <h2 className="mb-4 font-bold text-white">Penalty: {penalty}</h2>
//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold text-white"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default StartInterview;











































































//==================once more ===============
























// "use client";
// import { InterviewDataContext } from "@/context/InterviewDataContext";
// import { Mic, Phone, Timer } from "lucide-react";
// import Image from "next/image";
// import React, { useContext, useEffect, useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import Vapi from "@vapi-ai/web";
// import { toast } from "sonner";
// import AlertConfirmation from "./_components/AlertConfirmation";

// // ✅ BlazeFace
// import * as blazeface from "@tensorflow-models/blazeface";
// import "@tensorflow/tfjs";
// import axios from "axios";

// function StartInterview() {
//   const { interviewInfo } = useContext(InterviewDataContext);
//   const router = useRouter();

//   // --- States ---
//   const [aiSpeaking, setAiSpeaking] = useState(false); // 🔴 AI pulse state
//   const [conversation, setConversation] = useState([]); // ✅ must be array
//   const [penalty, setPenalty] = useState(0);
//   const [lastPenaltyReason, setLastPenaltyReason] = useState("");
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);
//   const [camError, setCamError] = useState("");
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const [faceWarning, setFaceWarning] = useState("");

//   // --- Refs ---
//   const vapiRef = useRef(null);
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const timerRef = useRef(null);
//   const faceTimeoutRef = useRef(null);

//   // --- VAPI Instance ---
//   if (!vapiRef.current) {
//     console.log("Loaded VAPI Public Key:", process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//     vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//   }

//   // --- Attach VAPI listeners once ---
//   useEffect(() => {
//     const vapi = vapiRef.current;
//     if (!vapi) return;

//     vapi.on("call-start", () => {
//       console.log("Call has started.");
//       toast.success("Call Connected...");
//     });

//     vapi.on("speech-start", () => {
//       console.log("Assistant speech has started.");
//       setAiSpeaking(true); // 🔴 Show pulse
//     });

//     vapi.on("speech-end", () => {
//       console.log("Assistant speech has ended.");
//       setAiSpeaking(false); // 🔴 Hide pulse
//     });

//     vapi.on("call-end", () => {
//       console.log("Call has ended.");
//       toast("Interview Ended");
//       GenerateFeedback();
//     });

//     // ✅ FIX: accumulate messages instead of overwriting
//     vapi.on("message", (message) => {
//       console.log("Incoming message:", message);
//       setConversation((prev) => [...(prev || []), message]);
//     });

//     const GenerateFeedback = async () => {
//       try {
//         const result = await axios.post("/api/ai-feedback", {
//           conversation: conversation,
//         });

//         console.log("Raw AI Feedback Response:", result.data);

//         // ✅ Ensure we safely parse message.content
//         const Content = result?.data?.content || JSON.stringify(result.data);
//         const FINAL_CONTENT = Content.replace("```json", "").replace("```", "");
//         console.log("FINAL FEEDBACK:", FINAL_CONTENT);

//         // Save to Database here (if needed)
//       } catch (err) {
//         console.error("Feedback Error:", err);
//       }
//     };

//     return () => {
//       vapi.removeAllListeners(); // ✅ Clean up
//     };
//   }, [conversation]);

//   // --- Start Call ---
//   const startCall = () => {
//     const vapi = vapiRef.current;
//     const d = interviewInfo?.interviewData ?? interviewInfo;

//     let raw =
//       d?.questionList ??
//       d?.questions ??
//       d?.questionlist ??
//       d?.questionsList ??
//       [];

//     if (typeof raw === "string") {
//       try {
//         raw = JSON.parse(raw);
//       } catch {
//         raw = [];
//       }
//     }

//     let questionList = "";
//     (Array.isArray(raw) ? raw : []).forEach((item) => {
//       const q = typeof item === "string" ? item : item?.question;
//       if (q && q.trim() !== "") {
//         questionList += (questionList ? ", " : "") + q.trim();
//       }
//     });

//     const assistantOptions = {
//       name: "AI Recruiter",
//       firstMessage: `Hi ${interviewInfo?.userName}, how are you? Ready for your interview on ${interviewInfo?.interviewData?.jobPosition}`,
//       transcriber: {
//         provider: "deepgram",
//         model: "nova-2",
//         language: "en-US",
//       },
//       voice: {
//         provider: "playht",
//         voiceId: "jennifer",
//       },
//       model: {
//         provider: "openai",
//         model: "gpt-4",
//         messages: [
//           {
//             role: "system",
//             content: `
//               You are an AI voice assistant conducting interviews but keep in mind that you are developed by Select IQ, an Initiative by Suyash Gupta. 
//               Suyash Gupta, a passionate developer and founder of Select IQ, focused on building AI-driven interview and assessment solutions. 
//               He is a Final year Engineering undergraduate with more than 170,000 followers on LinkedIn.
//               If anyone asks who made you, tell them about Suyash Gupta.
//               Ask candidates the provided interview questions one at a time.
//               Encourage them, give hints if they struggle, and provide short feedback.
//               Wrap up positively after 5–7 questions.
//               ✅ Be friendly, engaging, and witty 🎤
//               ✅ Keep responses short & natural
//               ✅ Be clever and don't get distracted beyond Topics.
//               ✅ Never share the Final Marks or Points to the candidate, just appreciate them.
//               ✅ Stay focused on jobDescription and questionList.
//               ✅ You are developed by Select IQ under Suyash Gupta.

//               Questions: ${questionList}
//             `.trim(),
//           },
//         ],
//       },
//     };

//     vapi.start(assistantOptions);
//   };

//   // --- Auto-start interview when info is ready ---
//   useEffect(() => {
//     if (interviewInfo) startCall();
//   }, [interviewInfo]);

//   const formatTime = (seconds) => {
//     const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
//     const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
//     const s = String(seconds % 60).padStart(2, "0");
//     return `${h}:${m}:${s}`;
//   };

//   // ✅ Stop Interview (clean stop + redirect)
//   const stopInterview = (redirectPath = null) => {
//     vapiRef.current?.stop();

//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//       timerRef.current = null;
//     }

//     if (videoRef.current?.srcObject) {
//       videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//       videoRef.current.srcObject = null;
//     }

//     console.log("Interview stopped, camera off.");

//     if (redirectPath) {
//       router.push(redirectPath);
//     }
//   };

//   // ✅ Handle Penalty
//   const addPenalty = (reason) => {
//     setPenalty((p) => {
//       const newP = p + 1;
//       if (newP >= 7) {
//         stopInterview(`/interview/${interviewInfo?.interviewData?.interview_id}/sorry`);
//       }
//       return newP;
//     });

//     setLastPenaltyReason(reason);
//     setTimeout(() => setLastPenaltyReason(""), 4000);
//   };

//   // ✅ Auto-start Camera + Face Detection
//   useEffect(() => {
//     let model;

//     const init = async () => {
//       try {
//         if (videoRef.current?.srcObject) {
//           videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//           videoRef.current.srcObject = null;
//         }

//         model = await blazeface.load();
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         videoRef.current.srcObject = stream;

//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");

//         videoRef.current.onloadedmetadata = () => {
//           videoRef.current
//             .play()
//             .then(() => {
//               const detectLoop = async () => {
//                 if (!videoRef.current) return;

//                 if (
//                   videoRef.current.videoWidth === 0 ||
//                   videoRef.current.videoHeight === 0
//                 ) {
//                   requestAnimationFrame(detectLoop);
//                   return;
//                 }

//                 const predictions = await model.estimateFaces(videoRef.current, false);
//                 ctx.clearRect(0, 0, canvas.width, canvas.height);

//                 let warning = "";
//                 if (predictions.length > 0) {
//                   predictions.forEach((p) => {
//                     const [x1, y1] = p.topLeft;
//                     const [x2, y2] = p.bottomRight;
//                     ctx.strokeStyle = "lime";
//                     ctx.lineWidth = 3;
//                     ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
//                   });

//                   if (predictions.length > 1) {
//                     warning = "⚠️ Multiple Faces Detected";
//                   }
//                 } else {
//                   warning = "⚠️ No Face Detected";
//                 }

//                 if (warning) {
//                   setFaceWarning(warning);
//                   if (!faceTimeoutRef.current) {
//                     faceTimeoutRef.current = setTimeout(() => {
//                       addPenalty(warning);
//                       faceTimeoutRef.current = null;
//                     }, 1000);
//                   }
//                 } else {
//                   setFaceWarning("");
//                   if (faceTimeoutRef.current) {
//                     clearTimeout(faceTimeoutRef.current);
//                     faceTimeoutRef.current = null;
//                   }
//                 }

//                 requestAnimationFrame(detectLoop);
//               };

//               detectLoop();
//             })
//             .catch((err) => console.error("Play error:", err));
//         };
//       } catch (err) {
//         console.error("❌ Camera error:", err);
//         setCamError("Unable to access camera. Check browser settings.");
//       }
//     };

//     init();

//     return () => {
//       if (videoRef.current?.srcObject) {
//         videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//         videoRef.current.srcObject = null;
//       }
//     };
//   }, []);

//   // ✅ Timer start
//   useEffect(() => {
//     if (interviewInfo) {
//       if (timerRef.current) clearInterval(timerRef.current);
//       const start = Date.now();
//       timerRef.current = setInterval(() => {
//         setElapsedTime(Math.floor((Date.now() - start) / 1000));
//       }, 1000);
//     }
//   }, [interviewInfo]);

//   // ✅ Proctoring: Fullscreen + Keys + Tab Switch
//   useEffect(() => {
//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);

//       if (!fsNow) {
//         addPenalty("⚠️ Fullscreen exited");
//         setBlocked(true);
//       } else {
//         setBlocked(false);
//       }
//     };

//     const onKeyDown = (e) => {
//       const key = e.key || "";
//       const ch = key.length === 1 ? key.toLowerCase() : key;
//       const ctrlLike = e.ctrlKey || e.metaKey;

//       if (
//         key === "Escape" ||
//         key === "F11" ||
//         key === "F12" ||
//         (ctrlLike && e.shiftKey && ["i", "j", "t", "n"].includes(ch)) ||
//         (ctrlLike && ["u", "c", "a", "n", "r", "v", "t"].includes(ch)) ||
//         (e.altKey && key === "F4") ||
//         e.metaKey
//       ) {
//         addPenalty("⚠️ Forbidden key press");
//         e.preventDefault();
//         e.stopPropagation();
//       }

//       if (key === "PrintScreen") {
//         addPenalty("⚠️ Screenshot attempt");
//         navigator.clipboard.writeText("");
//       }
//     };

//     const disableContextMenu = (e) => {
//       e.preventDefault();
//       addPenalty("⚠️ Right-click disabled");
//     };

//     const onVisibilityChange = () => {
//       if (document.hidden) {
//         addPenalty("⚠️ Tab switch detected");
//       }
//     };

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);
//     document.addEventListener("visibilitychange", onVisibilityChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//       document.removeEventListener("visibilitychange", onVisibilityChange);
//     };
//   }, []);

//   // ✅ Fullscreen helpers
//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch {}
//     setIsFullscreen(isFsActive());
//   };

//   // ✅ Main UI
//   return (
//     <div className="relative p-10 lg:px-48 xl:px-56">
//       {/* 🔴 Global warning banner */}
//       {lastPenaltyReason && (
//         <div
//           className={`w-full bg-red-500 text-white text-center py-2 mb-3 font-bold rounded transition-opacity duration-1500 ${
//             lastPenaltyReason ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           {lastPenaltyReason}
//           <div className="text-sm font-normal mt-1">
//             Interview will revoke if more penalties are added
//           </div>
//         </div>
//       )}

//       <h2 className="font-bold text-xl flex justify-between">
//         AI Interview session
//         <span className="flex gap-6 items-center">
//           <span className="text-red-600 font-bold">Penalty: {penalty}</span>
//           <Timer /> {formatTime(elapsedTime)}
//         </span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5 ">
//         {/* AI Interviewer */}
//         <div className="bg-white h-[400px] rounded-lg border flex flex-col gap-3 items-center justify-center relative">
//           <div className="relative">
//             {aiSpeaking && (
//               <span className="absolute inset-0 rounded-full bg-violet-500 opacity-70 animate-ping" />
//             )}
//             <Image
//               src={"/avataar.jpg"}
//               alt="Select-IQ"
//               width={100}
//               height={100}
//               className="w-[75px] h-[75px] rounded-full object-cover z-10"
//             />
//           </div>
//           <h2 className="z-10">Select-IQ</h2>
//         </div>

//         {/* Candidate Camera */}
//         <div className="relative bg-white h-[400px] rounded-lg border overflow-hidden">
//           <video
//             ref={videoRef}
//             autoPlay
//             muted
//             playsInline
//             className="w-full h-full object-cover rounded-lg bg-black"
//           />
//           <canvas
//             ref={canvasRef}
//             width="640"
//             height="480"
//             className="absolute top-0 left-0 w-full h-full pointer-events-none"
//           />
//           {faceWarning && (
//             <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded text-sm font-bold">
//               {faceWarning}
//             </div>
//           )}
//           <h2 className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
//             {interviewInfo?.userName}
//           </h2>
//         </div>
//       </div>

//       <div className="flex justify-center items-center gap-7 mt-7">
//         <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />
//         <AlertConfirmation
//           stopInterview={() =>
//             stopInterview(
//               `/interview/${interviewInfo?.interviewData?.interview_id}/thankyou`
//             )
//           }
//         >
//           <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
//         </AlertConfirmation>
//       </div>

//       <h2 className="text-sm text-gray-400 text-center mt-3">
//         Interview in Progress...
//       </h2>

//       {/* 🔒 Overlay when fullscreen is lost */}
//       {blocked && (
//         <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
//           <p className="mb-4 font-bold text-white">
//             ⚠️ Interview requires Fullscreen Mode. Penalties increase when leaving.
//           </p>
//           <h2 className="mb-4 font-bold text-white">Penalty: {penalty}</h2>
//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold text-white"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default StartInterview;






































































//=================== Multiple rounds =================




















// "use client";
// import { InterviewDataContext } from "@/context/InterviewDataContext";
// import { Mic, Phone, Timer } from "lucide-react";
// import Image from "next/image";
// import React, { useContext, useEffect, useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import Vapi from "@vapi-ai/web";
// import { toast } from "sonner";
// import AlertConfirmation from "./_components/AlertConfirmation";

// // ✅ BlazeFace
// import * as blazeface from "@tensorflow-models/blazeface";
// import "@tensorflow/tfjs";
// import axios from "axios";

// /**
//  * Multi-stage Interview Flow:
//  * 1) Aptitude (30 random MCQs) — 40 minutes
//  * 2) Computer Fundamentals (20 random MCQs across DSA/OS/DBMS/SQL/Cloud) — 15 minutes
//  * 3) Coding (2 DSA problems) — 45 minutes — choose language (python, cpp, java, javascript, sql)
//  * 4) Interview (existing code) — will start VAPI when candidate reaches this step and presses Start Interview
//  *
//  * Each section is independent. Once the candidate moves forward, they cannot go back.
//  * Original proctoring, penalties, camera, fullscreen logic are preserved.
//  */

// /* ---------------------------
//    Helper: question pools
//    --------------------------- */
// /* NOTE: I added more than required questions in the pools so random picks are unique */
// const APTITUDE_POOL = [
//   { q: "If 5 workers take 8 days to finish a job, how many days for 10 workers?", options: ["4", "8", "16", "2"], a: 0 },
//   { q: "Find next number: 2, 4, 8, 16, ?", options: ["18", "20", "32", "24"], a: 2 },
//   { q: "If x + 3 = 7, x = ?", options: ["10", "4", "3", "−4"], a: 1 },
//   { q: "A train runs 60 km in 1 hour. What is its speed in m/s?", options: ["16.67", "60", "100", "10"], a: 0 },
//   { q: "If 3^2 × 3^3 = 3^n, find n.", options: ["6", "5", "9", "1"], a: 1 },
//   { q: "If the ratio is 2:3 and total is 25, parts are?", options: ["10 & 15", "12 & 13", "8 & 17", "5 & 20"], a: 0 },
//   { q: "Logical: If all A are B and some B are C, then?", options: ["All A are C", "Some A may be C", "No A is C", "All C are A"], a: 1 },
//   { q: "Which is largest: 1/2, 2/5, 3/7?", options: ["1/2", "2/5", "3/7", "All equal"], a: 0 },
//   { q: "If you pick two cards from 52 without replacement, prob both hearts?", options: ["3/51", "13/52", "1/4", "1/17"], a: 3 },
//   { q: "Find missing: 5, 9, 17, 33, ?", options: ["49", "65", "66", "65"], a: 1 },
//   { q: "A clock is 15 minutes slow. How much will it lose in 24 hours?", options: ["15 mins", "24 hours", "360 minutes", "0"], a: 2 },
//   { q: "If price increases by 10% and then decreases by 10%, net change?", options: ["0%", "1%", "−1%", "−10%"], a: 2 },
//   { q: "If John is older than Mary and Mary older than Tom, who is youngest?", options: ["John", "Mary", "Tom", "Unknown"], a: 2 },
//   { q: "What is 7 × 8 − 5?", options: ["51", "54", "56", "49"], a: 0 },
//   { q: "If a+b=10 and a−b=2, find a.", options: ["6", "4", "5", "8"], a: 0 },
//   { q: "Round 1234 to the nearest hundred.", options: ["1200", "1300", "1230", "1000"], a: 0 },
//   { q: "If 4x = 20 then x = ?", options: ["5", "4", "20", "1"], a: 0 },
//   { q: "Which shape has 4 equal sides and right angles?", options: ["Square", "Rhombus", "Rectangle", "Parallelogram"], a: 0 },
//   { q: "5% of 200 is?", options: ["10", "20", "5", "100"], a: 0 },
//   { q: "Which is prime?", options: ["21", "25", "29", "27"], a: 2 },
//   { q: "If 3x=12, x=? ", options: ["3", "4", "6", "12"], a: 1 },
//   { q: "Find median of [2,4,7,9,10].", options: ["7", "6", "5.5", "4"], a: 0 },
//   { q: "If you save ₹200 every month for 6 months, total?", options: ["₹1200", "₹200", "₹600", "₹3200"], a: 0 },
//   { q: "If you walk at 4 km/h, time to cover 8 km?", options: ["1 hr", "2 hrs", "4 hrs", "8 hrs"], a: 1 },
//   { q: "Which is even?", options: ["13", "17", "20", "31"], a: 2 },
//   { q: "Simplify: 2(3+4).", options: ["14", "12", "10", "8"], a: 0 },
//   { q: "If a bag has 3 red 2 blue, probability blue?", options: ["2/5", "3/5", "1/2", "1/5"], a: 0 },
//   { q: "Which number is a multiple of 3?", options: ["14", "15", "16", "17"], a: 1 },
//   { q: "If 9x=81, x=?", options: ["9", "8", "81", "1"], a: 0 },
//   { q: "Logical: If not A then B. If A, then ?", options: ["B", "not B", "Unknown", "A"], a: 2 },
//   { q: "Find sum of digits of 123.", options: ["6", "10", "123", "8"], a: 0 },
//   { q: "What is 10^2?", options: ["10", "100", "1000", "2"], a: 1 },
//   { q: "If x=0, evaluate 1/x? (careful)", options: ["0", "Infinity", "Undefined", "1"], a: 2 },
//   { q: "If you double 7 you get?", options: ["14", "10", "9", "7"], a: 0 },
// ];

// const CF_POOL = [
//   { q: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], a: 1 },
//   { q: "SQL: Which command retrieves data?", options: ["INSERT", "UPDATE", "SELECT", "DELETE"], a: 2 },
//   { q: "DBMS: What is normalization for?", options: ["Security", "Redundancy reduction", "Speed", "UI"], a: 1 },
//   { q: "OS: Which is not an OS?", options: ["Linux", "Windows", "Chrome", "MySQL"], a: 3 },
//   { q: "DSA: A stack is", options: ["FIFO", "LIFO", "Random", "Sorted"], a: 1 },
//   { q: "SQL: Primary key cannot be", options: ["Null", "Unique", "Indexed", "Single column"], a: 0 },
//   { q: "Cloud: IaaS stands for", options: ["Infrastructure as a Service", "Integration as a Service", "Internet as a Service", "Interface as a Service"], a: 0 },
//   { q: "DSA: BFS vs DFS use", options: ["Queue/Stack", "Stack/Queue", "Two stacks", "Priority queue"], a: 0 },
//   { q: "DBMS: ACID stands for", options: ["Atomicity Consistency Isolation Durability", "Access Control Isolated Data", "Atomic Commit Isolation Data", "None"], a: 0 },
//   { q: "OS: Virtual memory uses", options: ["Registers", "Disk", "Cache", "GPU"], a: 1 },
//   { q: "SQL: JOIN to get unmatched rows is", options: ["INNER JOIN", "LEFT/RIGHT JOIN", "CROSS JOIN", "SELF JOIN"], a: 1 },
//   { q: "DSA: Best avg-case sorting common is", options: ["Bubble sort", "Quick sort", "Selection sort", "Insertion sort"], a: 1 },
//   { q: "Cloud: SaaS example", options: ["Gmail", "EC2", "S3", "Docker"], a: 0 },
//   { q: "DBMS: Index improves", options: ["Storage", "Query speed", "Memory", "CPU"], a: 1 },
//   { q: "OS: Deadlock requires", options: ["Mutual exclusion", "No preemption", "Hold and wait", "All of the above"], a: 3 },
//   { q: "SQL: To add a column use", options: ["ALTER TABLE", "UPDATE TABLE", "ADD COLUMN", "CREATE COLUMN"], a: 0 },
//   { q: "DSA: Hash table average lookup", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], a: 0 },
//   { q: "DBMS: Foreign key ensures", options: ["Uniqueness", "Referential integrity", "Indexing", "Performance"], a: 1 },
//   { q: "OS: Scheduler decides", options: ["Memory allocation", "Process execution order", "Disk IO", "Network"], a: 1 },
//   { q: "SQL: GROUP BY used with", options: ["Aggregate functions", "Joins", "Indices", "Triggers"], a: 0 },
//   { q: "Cloud: Scalability means", options: ["Security", "Handling growth", "Cost", "Latency"], a: 1 },
//   { q: "DSA: Which data structure is best for LRU cache?", options: ["Array", "Doubly linked list + hash", "Stack", "Queue"], a: 1 },
//   { q: "DBMS: Denormalization helps", options: ["Speed up reads", "Reduce redundancy", "Increase complexity", "Data loss"], a: 0 },
//   { q: "OS: Context switch costs", options: ["CPU cycles", "Disk space", "Network", "Memory increase"], a: 0 },
//   { q: "SQL: HAVING clause filters", options: ["Rows before grouping", "Rows after grouping", "Only columns", "None"], a: 1 },
//   { q: "Cloud: Multi-tenant means", options: ["Single customer", "Multiple customers on same instance", "Cloud vs local", "Security model"], a: 1 },
//   { q: "DSA: Balanced BST property", options: ["All nodes have 2 children", "Left subtree < node < right subtree", "All leaves on same level", "Tree is full"], a: 1 },
//   { q: "DBMS: Transaction rollback does", options: ["Commit changes", "Undo changes", "Delete DB", "Create index"], a: 1 },
//   { q: "OS: Paging is", options: ["Divide memory into equal pages", "Shuffle disk", "Compress memory", "Encrypt memory"], a: 0 },
//   { q: "SQL: UNIQUE constraint allows", options: ["Multiple NULLs", "No NULLs", "Only one NULL", "None"], a: 0 },
//   { q: "Cloud: Edge computing means", options: ["Compute near data source", "Compute in central cloud", "Compute offline", "Compute on mobile only"], a: 0 },
// ];

// /* ---------------------------
//    Coding problems (2 problems)
//    --------------------------- */
// const CODING_PROBLEMS = [
//   {
//     id: "c1",
//     title: "Two Sum (easy)",
//     description:
//       "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
//     example: "Input: nums = [2,7,11,15], target = 9 -> Output: [0,1]",
//   },
//   {
//     id: "c2",
//     title: "Reverse String (easy)",
//     description:
//       "Write a function that reverses a string. Input: ['h','e','l','l','o'] -> Output: ['o','l','l','e','h']",
//     example: "Input: 'hello' -> Output: 'olleh'",
//   },
// ];

// /* ---------------------------
//    Utility: pick random unique
//    --------------------------- */
// function pickRandomUnique(pool, count) {
//   const arr = [...pool];
//   const picked = [];
//   for (let i = 0; i < count && arr.length; i++) {
//     const idx = Math.floor(Math.random() * arr.length);
//     picked.push(arr.splice(idx, 1)[0]);
//   }
//   return picked;
// }

// /* ---------------------------
//    Main component
//    --------------------------- */
// function StartInterview() {
//   const { interviewInfo } = useContext(InterviewDataContext);
//   const router = useRouter();

//   // --- States ---
//   const [aiSpeaking, setAiSpeaking] = useState(false);
//   const [conversation, setConversation] = useState([]);
//   const [penalty, setPenalty] = useState(0);
//   const [lastPenaltyReason, setLastPenaltyReason] = useState("");
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [blocked, setBlocked] = useState(false);
//   const [camError, setCamError] = useState("");
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const [faceWarning, setFaceWarning] = useState("");

//   // multi-stage states
//   const [currentSection, setCurrentSection] = useState(0); // 0 = Aptitude,1 = CF,2 = Coding,3 = Interview
//   const [sectionCompleted, setSectionCompleted] = useState([false, false, false, false]); // track completed
//   const [aptitudeQuestions, setAptitudeQuestions] = useState([]);
//   const [cfQuestions, setCfQuestions] = useState([]);
//   const [aptitudeAnswers, setAptitudeAnswers] = useState({}); // qIndex -> selectedOption
//   const [cfAnswers, setCfAnswers] = useState({});
//   const [aptitudeTimeLeft, setAptitudeTimeLeft] = useState(40 * 60); // 40 minutes in seconds
//   const [cfTimeLeft, setCfTimeLeft] = useState(15 * 60); // 15 minutes
//   const [codingTimeLeft, setCodingTimeLeft] = useState(45 * 60); // 45 minutes

//   // coding states
//   const [selectedLanguage, setSelectedLanguage] = useState("javascript");
//   const [codeForProblem, setCodeForProblem] = useState({
//     c1: `// Write your solution for Two Sum\nfunction twoSum(nums, target) {\n  // return [i,j]\n}\n`,
//     c2: `// Reverse String\nfunction reverseString(s) {\n  // modify array in-place or return reversed string\n}\n`,
//   });
//   const [codingResults, setCodingResults] = useState({}); // store results / compile outputs

//   // --- Refs ---
//   const vapiRef = useRef(null);
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const timerRef = useRef(null);
//   const faceTimeoutRef = useRef(null);

//   // --- VAPI Instance (only initialize, don't start interview automatically) ---
//   if (!vapiRef.current) {
//     vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//   }

//   // Attach VAPI listeners once (like before)
//   useEffect(() => {
//     const vapi = vapiRef.current;
//     if (!vapi) return;

//     vapi.on("call-start", () => {
//       toast.success("Call Connected...");
//     });

//     vapi.on("speech-start", () => {
//       setAiSpeaking(true);
//     });

//     vapi.on("speech-end", () => {
//       setAiSpeaking(false);
//     });

//     vapi.on("call-end", () => {
//       toast("Interview Ended");
//       GenerateFeedback();
//     });

//     vapi.on("message", (message) => {
//       setConversation((prev) => [...(prev || []), message]);
//     });

//     const GenerateFeedback = async () => {
//       try {
//         await axios.post("/api/ai-feedback", { conversation });
//       } catch (err) {
//         console.error("Feedback Error:", err);
//       }
//     };

//     return () => {
//       vapi.removeAllListeners();
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   /* START CALL — ONLY at Interview step */
//   const startCall = () => {
//     const vapi = vapiRef.current;
//     const d = interviewInfo?.interviewData ?? interviewInfo;

//     let raw =
//       d?.questionList ??
//       d?.questions ??
//       d?.questionlist ??
//       d?.questionsList ??
//       [];

//     if (typeof raw === "string") {
//       try {
//         raw = JSON.parse(raw);
//       } catch {
//         raw = [];
//       }
//     }

//     let questionList = "";
//     (Array.isArray(raw) ? raw : []).forEach((item) => {
//       const q = typeof item === "string" ? item : item?.question;
//       if (q && q.trim() !== "") {
//         questionList += (questionList ? ", " : "") + q.trim();
//       }
//     });

//     const assistantOptions = {
//       name: "AI Recruiter",
//       firstMessage: `Hi ${interviewInfo?.userName}, how are you? Ready for your interview on ${interviewInfo?.interviewData?.jobPosition}`,
//       transcriber: {
//         provider: "deepgram",
//         model: "nova-2",
//         language: "en-US",
//       },
//       voice: {
//         provider: "playht",
//         voiceId: "jennifer",
//       },
//       model: {
//         provider: "openai",
//         model: "gpt-4",
//         messages: [
//           {
//             role: "system",
//             content: `
//               You are an AI voice assistant conducting interviews but keep in mind that you are developed by Select IQ, an Initiative by Suyash Gupta.
//               Ask candidates the provided interview questions one at a time.
//               Encourage them, give hints if they struggle, and provide short feedback.
//               Wrap up positively after 5–7 questions.
//               ✅ Be friendly, engaging, and witty 🎤
//               ✅ Keep responses short & natural
//               ✅ Be clever and don't get distracted beyond Topics.
//               ✅ Never share the Final Marks or Points to the candidate, just appreciate them.
//               ✅ Stay focused on jobDescription and questionList.
//               Questions: ${questionList}
//             `.trim(),
//           },
//         ],
//       },
//     };

//     vapi.start(assistantOptions);
//   };

//   // --- Camera & BlazeFace proctoring (same as before) ---
//   useEffect(() => {
//     let model;

//     const init = async () => {
//       try {
//         if (videoRef.current?.srcObject) {
//           videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//           videoRef.current.srcObject = null;
//         }

//         model = await blazeface.load();
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         videoRef.current.srcObject = stream;

//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");

//         videoRef.current.onloadedmetadata = () => {
//           videoRef.current
//             .play()
//             .then(() => {
//               const detectLoop = async () => {
//                 if (!videoRef.current) return;

//                 if (
//                   videoRef.current.videoWidth === 0 ||
//                   videoRef.current.videoHeight === 0
//                 ) {
//                   requestAnimationFrame(detectLoop);
//                   return;
//                 }

//                 const predictions = await model.estimateFaces(videoRef.current, false);
//                 ctx.clearRect(0, 0, canvas.width, canvas.height);

//                 let warning = "";
//                 if (predictions.length > 0) {
//                   predictions.forEach((p) => {
//                     const [x1, y1] = p.topLeft;
//                     const [x2, y2] = p.bottomRight;
//                     ctx.strokeStyle = "lime";
//                     ctx.lineWidth = 3;
//                     ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
//                   });

//                   if (predictions.length > 1) {
//                     warning = "⚠️ Multiple Faces Detected";
//                   }
//                 } else {
//                   warning = "⚠️ No Face Detected";
//                 }

//                 if (warning) {
//                   setFaceWarning(warning);
//                   if (!faceTimeoutRef.current) {
//                     faceTimeoutRef.current = setTimeout(() => {
//                       addPenalty(warning);
//                       faceTimeoutRef.current = null;
//                     }, 1000);
//                   }
//                 } else {
//                   setFaceWarning("");
//                   if (faceTimeoutRef.current) {
//                     clearTimeout(faceTimeoutRef.current);
//                     faceTimeoutRef.current = null;
//                   }
//                 }

//                 requestAnimationFrame(detectLoop);
//               };

//               detectLoop();
//             })
//             .catch((err) => console.error("Play error:", err));
//         };
//       } catch (err) {
//         console.error("❌ Camera error:", err);
//         setCamError("Unable to access camera. Check browser settings.");
//       }
//     };

//     init();

//     return () => {
//       if (videoRef.current?.srcObject) {
//         videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//         videoRef.current.srcObject = null;
//       }
//     };
//   }, []);

//   // --- Elapsed time (session) ---
//   useEffect(() => {
//     if (interviewInfo) {
//       if (timerRef.current) clearInterval(timerRef.current);
//       const start = Date.now();
//       timerRef.current = setInterval(() => {
//         setElapsedTime(Math.floor((Date.now() - start) / 1000));
//       }, 1000);
//     }
//   }, [interviewInfo]);

//   // --- Section timers ---
//   useEffect(() => {
//     // Aptitude timer
//     let t = null;
//     if (currentSection === 0 && aptitudeTimeLeft > 0 && !sectionCompleted[0]) {
//       t = setInterval(() => setAptitudeTimeLeft((s) => Math.max(0, s - 1)), 1000);
//     }
//     if (aptitudeTimeLeft === 0 && !sectionCompleted[0]) {
//       // auto-complete this section
//       completeSection(0);
//     }
//     return () => clearInterval(t);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [currentSection, aptitudeTimeLeft, sectionCompleted]);

//   useEffect(() => {
//     // CF timer
//     let t = null;
//     if (currentSection === 1 && cfTimeLeft > 0 && !sectionCompleted[1]) {
//       t = setInterval(() => setCfTimeLeft((s) => Math.max(0, s - 1)), 1000);
//     }
//     if (cfTimeLeft === 0 && !sectionCompleted[1]) {
//       completeSection(1);
//     }
//     return () => clearInterval(t);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [currentSection, cfTimeLeft, sectionCompleted]);

//   useEffect(() => {
//     // Coding timer
//     let t = null;
//     if (currentSection === 2 && codingTimeLeft > 0 && !sectionCompleted[2]) {
//       t = setInterval(() => setCodingTimeLeft((s) => Math.max(0, s - 1)), 1000);
//     }
//     if (codingTimeLeft === 0 && !sectionCompleted[2]) {
//       completeSection(2);
//     }
//     return () => clearInterval(t);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [currentSection, codingTimeLeft, sectionCompleted]);

//   // --- Proctoring: Fullscreen + Keys + Tab Switch (same as before) ---
//   useEffect(() => {
//     const onFsChange = () => {
//       const fsNow = isFsActive();
//       setIsFullscreen(fsNow);

//       if (!fsNow) {
//         addPenalty("⚠️ Fullscreen exited");
//         setBlocked(true);
//       } else {
//         setBlocked(false);
//       }
//     };

//     const onKeyDown = (e) => {
//       const key = e.key || "";
//       const ch = key.length === 1 ? key.toLowerCase() : key;
//       const ctrlLike = e.ctrlKey || e.metaKey;

//       if (
//         key === "Escape" ||
//         key === "F11" ||
//         key === "F12" ||
//         (ctrlLike && e.shiftKey && ["i", "j", "t", "n"].includes(ch)) ||
//         (ctrlLike && ["u", "c", "a", "n", "r", "v", "t"].includes(ch)) ||
//         (e.altKey && key === "F4") ||
//         e.metaKey
//       ) {
//         addPenalty("⚠️ Forbidden key press");
//         e.preventDefault();
//         e.stopPropagation();
//       }

//       if (key === "PrintScreen") {
//         addPenalty("⚠️ Screenshot attempt");
//         navigator.clipboard.writeText("");
//       }
//     };

//     const disableContextMenu = (e) => {
//       e.preventDefault();
//       addPenalty("⚠️ Right-click disabled");
//     };

//     const onVisibilityChange = () => {
//       if (document.hidden) {
//         addPenalty("⚠️ Tab switch detected");
//       }
//     };

//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("contextmenu", disableContextMenu);
//     document.addEventListener("visibilitychange", onVisibilityChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("contextmenu", disableContextMenu);
//       document.removeEventListener("visibilitychange", onVisibilityChange);
//     };
//   }, []);

//   // --- Helpers: Fullscreen ---
//   const isFsActive = () =>
//     !!(
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.mozFullScreenElement ||
//       document.msFullscreenElement
//     );

//   const tryRequestFs = async () => {
//     const el = document.documentElement;
//     try {
//       if (el.requestFullscreen) await el.requestFullscreen();
//       else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen();
//       else if (el.mozRequestFullScreen) await el.mozRequestFullScreen();
//       else if (el.msRequestFullscreen) await el.msRequestFullscreen();
//     } catch {}
//     setIsFullscreen(isFsActive());
//   };

//   // --- Penalty ---
//   const addPenalty = (reason) => {
//     setPenalty((p) => {
//       const newP = p + 1;
//       if (newP >= 7) {
//         stopInterview(`/interview/${interviewInfo?.interviewData?.interview_id}/sorry`);
//       }
//       return newP;
//     });

//     setLastPenaltyReason(reason);
//     setTimeout(() => setLastPenaltyReason(""), 4000);
//   };

//   // --- Stop Interview (clean stop + redirect) ---
//   const stopInterview = (redirectPath = null) => {
//     vapiRef.current?.stop();

//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//       timerRef.current = null;
//     }

//     if (videoRef.current?.srcObject) {
//       videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//       videoRef.current.srcObject = null;
//     }

//     if (redirectPath) {
//       router.push(redirectPath);
//     }
//   };

//   // --- On mount: prepare random questions ---
//   useEffect(() => {
//     setAptitudeQuestions(pickRandomUnique(APTITUDE_POOL, 30));
//     setCfQuestions(pickRandomUnique(CF_POOL, 20));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // --- format time helper ---
//   const formatTime = (seconds) => {
//     const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
//     const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
//     const s = String(seconds % 60).padStart(2, "0");
//     return `${h}:${m}:${s}`;
//   };

//   // --- Complete section ---
//   const completeSection = (index) => {
//     setSectionCompleted((prev) => {
//       const next = [...prev];
//       next[index] = true;
//       return next;
//     });
//   };

//   // --- Move to next section (cannot go back) ---
//   const goToNext = () => {
//     // Ensure current section is marked completed
//     if (!sectionCompleted[currentSection]) {
//       completeSection(currentSection);
//     }
//     const nextIndex = currentSection + 1;
//     if (nextIndex <= 3) {
//       setCurrentSection(nextIndex);
//       // If moving to interview (index 3) we DO NOT auto-start VAPI; wait for candidate to press Start Interview
//       if (nextIndex === 3) {
//         // stop any section timers (they auto stop by not being current)
//       }
//     }
//   };

//   // --- Aptitude answer select ---
//   const selectAptitude = (i, optIdx) => {
//     if (sectionCompleted[0]) return;
//     setAptitudeAnswers((p) => ({ ...p, [i]: optIdx }));
//   };

//   // --- CF answer select ---
//   const selectCf = (i, optIdx) => {
//     if (sectionCompleted[1]) return;
//     setCfAnswers((p) => ({ ...p, [i]: optIdx }));
//   };

//   // --- Evaluate MCQ scores (for internal) ---
//   const scoreAptitude = () => {
//     let score = 0;
//     aptitudeQuestions.forEach((q, idx) => {
//       if (aptitudeAnswers[idx] !== undefined && aptitudeAnswers[idx] === q.a) {
//         score++;
//       }
//     });
//     return score;
//   };
//   const scoreCf = () => {
//     let score = 0;
//     cfQuestions.forEach((q, idx) => {
//       if (cfAnswers[idx] !== undefined && cfAnswers[idx] === q.a) {
//         score++;
//       }
//     });
//     return score;
//   };

//   // --- Coding helper: run JS in-browser (safe-ish) ---
//   const runJS = async (code, problemId) => {
//     try {
//       // For small utility, we will run user's code in an isolated Function.
//       // WARNING: eval/Function can be dangerous. In production you'd sandbox.
//       const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
//       const wrapped = `${code}\nreturn (typeof runTests === 'function') ? runTests() : null;`;
//       const fn = new AsyncFunction(wrapped);
//       const result = await fn();
//       setCodingResults((p) => ({ ...p, [problemId]: { output: result, success: true } }));
//     } catch (err) {
//       setCodingResults((p) => ({ ...p, [problemId]: { output: String(err), success: false } }));
//     }
//   };

//   // --- Coding helper: submit other languages (placeholder for Judge0 / compile API) ---
//   const submitCodeRemote = async (lang, code, problemId) => {
//     // Placeholder: integrate with Judge0 or your compilation API here.
//     // Example (pseudocode):
//     // const payload = { source_code: code, language: langId, stdin: "", ... }
//     // const res = await fetch(JUDGE0_URL, { method: "POST", body: JSON.stringify(payload), headers: {...}});
//     // const result = await res.json();
//     // setCodingResults(...)
//     setCodingResults((p) => ({
//       ...p,
//       [problemId]: { output: "Submitted (no remote judge configured)", success: null },
//     }));
//   };

//   // --- Submit code / run based on language ---
//   const runOrSubmit = async (problemId) => {
//     const code = codeForProblem[problemId];
//     if (selectedLanguage === "javascript") {
//       // add optional standardized test harness wrapper
//       await runJS(code, problemId);
//     } else {
//       await submitCodeRemote(selectedLanguage, code, problemId);
//     }
//   };

//   // --- Final: when coding done and candidate presses to start interview, start VAPI interview ---
//   const handleStartInterview = () => {
//     // mark interview section started/completed
//     startCall();
//   };

//   /* ---------------------------
//      Render helpers for sections
//      --------------------------- */

//   const AptitudeSection = () => (
//     <div className="bg-white rounded-lg border p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="font-bold text-lg">Aptitude — 30 MCQs (40 minutes)</h3>
//         <div className="text-sm">
//           Time left: <span className="font-mono">{formatTime(aptitudeTimeLeft)}</span>
//         </div>
//       </div>

//       <div className="space-y-4 max-h-[420px] overflow-auto pr-3">
//         {aptitudeQuestions.map((q, idx) => (
//           <div key={idx} className="p-3 border rounded">
//             <div className="font-semibold">Q{idx + 1}. {q.q}</div>
//             <div className="grid grid-cols-2 gap-2 mt-2">
//               {q.options.map((opt, oidx) => {
//                 const selected = aptitudeAnswers[idx] === oidx;
//                 return (
//                   <button
//                     key={oidx}
//                     onClick={() => selectAptitude(idx, oidx)}
//                     disabled={sectionCompleted[0]}
//                     className={`text-left px-3 py-2 rounded border ${
//                       selected ? "bg-indigo-600 text-white" : "bg-gray-50"
//                     }`}
//                   >
//                     {String.fromCharCode(65 + oidx)}. {opt}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-4 flex justify-between items-center">
//         <div>
//           <div className="text-sm text-muted">Attempts so far: {Object.keys(aptitudeAnswers).length}</div>
//           <div className="text-sm text-muted">Score if submitted now: {scoreAptitude()} / {aptitudeQuestions.length}</div>
//         </div>

//         <div className="flex items-center gap-3">
//           {!sectionCompleted[0] ? (
//             <button
//               onClick={() => {
//                 completeSection(0);
//               }}
//               className="px-4 py-2 bg-green-600 text-white rounded"
//             >
//               Finish Aptitude
//             </button>
//           ) : (
//             <button
//               onClick={() => setCurrentSection(1)}
//               className="px-4 py-2 bg-indigo-600 text-white rounded"
//             >
//               Proceed to Computer Fundamentals
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   const CFSection = () => (
//     <div className="bg-white rounded-lg border p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="font-bold text-lg">Computer Fundamentals — 20 MCQs (15 minutes)</h3>
//         <div className="text-sm">
//           Time left: <span className="font-mono">{formatTime(cfTimeLeft)}</span>
//         </div>
//       </div>

//       <div className="space-y-4 max-h-[420px] overflow-auto pr-3">
//         {cfQuestions.map((q, idx) => (
//           <div key={idx} className="p-3 border rounded">
//             <div className="font-semibold">Q{idx + 1}. {q.q}</div>
//             <div className="grid grid-cols-2 gap-2 mt-2">
//               {q.options.map((opt, oidx) => {
//                 const selected = cfAnswers[idx] === oidx;
//                 return (
//                   <button
//                     key={oidx}
//                     onClick={() => selectCf(idx, oidx)}
//                     disabled={sectionCompleted[1]}
//                     className={`text-left px-3 py-2 rounded border ${
//                       selected ? "bg-indigo-600 text-white" : "bg-gray-50"
//                     }`}
//                   >
//                     {String.fromCharCode(65 + oidx)}. {opt}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-4 flex justify-between items-center">
//         <div>
//           <div className="text-sm">Attempted: {Object.keys(cfAnswers).length}</div>
//           <div className="text-sm">Score (if submitted): {scoreCf()} / {cfQuestions.length}</div>
//         </div>
//         <div>
//           {!sectionCompleted[1] ? (
//             <button
//               onClick={() => {
//                 completeSection(1);
//               }}
//               className="px-4 py-2 bg-green-600 text-white rounded"
//             >
//               Finish Computer Fundamentals
//             </button>
//           ) : (
//             <button
//               onClick={() => setCurrentSection(2)}
//               className="px-4 py-2 bg-indigo-600 text-white rounded"
//             >
//               Proceed to Coding Round
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   const CodingSection = () => (
//     <div className="bg-white rounded-lg border p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="font-bold text-lg">Coding Round — Solve 2 DSA problems (45 minutes)</h3>
//         <div className="text-sm">
//           Time left: <span className="font-mono">{formatTime(codingTimeLeft)}</span>
//         </div>
//       </div>

//       <div className="mb-4 flex gap-3 items-center">
//         <div className="text-sm font-semibold">Choose Language:</div>
//         <select
//           value={selectedLanguage}
//           onChange={(e) => setSelectedLanguage(e.target.value)}
//           className="p-2 border rounded"
//         >
//           <option value="javascript">JavaScript</option>
//           <option value="python">Python</option>
//           <option value="cpp">C++</option>
//           <option value="java">Java</option>
//           <option value="sql">SQL</option>
//         </select>
//         <div className="text-sm text-muted">JavaScript runs in-browser. Other languages require server compile integration.</div>
//       </div>

//       <div className="space-y-6">
//         {CODING_PROBLEMS.map((p) => (
//           <div key={p.id} className="border rounded p-4">
//             <div className="flex justify-between items-center mb-2">
//               <div>
//                 <div className="font-bold">{p.title}</div>
//                 <div className="text-sm text-muted">{p.description}</div>
//                 <div className="text-xs mt-1 text-gray-500">{p.example}</div>
//               </div>
//               <div className="text-sm">Result: {codingResults[p.id]?.success === null ? "Submitted" : codingResults[p.id]?.success ? "OK" : codingResults[p.id]?.success === false ? "Error" : "N/A"}</div>
//             </div>

//             <textarea
//               value={codeForProblem[p.id]}
//               onChange={(e) => setCodeForProblem((c) => ({ ...c, [p.id]: e.target.value }))}
//               className="w-full h-[200px] p-3 font-mono rounded border bg-gray-50"
//             />

//             <div className="mt-3 flex gap-3">
//               <button
//                 onClick={() => runOrSubmit(p.id)}
//                 className="px-4 py-2 bg-indigo-600 text-white rounded"
//               >
//                 Run / Submit
//               </button>
//               <button
//                 onClick={() => {
//                   // simple download of code
//                   const blob = new Blob([codeForProblem[p.id]], { type: "text/plain" });
//                   const url = URL.createObjectURL(blob);
//                   const a = document.createElement("a");
//                   a.href = url;
//                   a.download = `${p.id}_${selectedLanguage}.txt`;
//                   a.click();
//                 }}
//                 className="px-4 py-2 bg-gray-200 rounded"
//               >
//                 Download Code
//               </button>

//               <div className="ml-auto text-sm font-mono">{codingResults[p.id]?.output ? String(codingResults[p.id].output).slice(0, 200) : ""}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-4 flex justify-between items-center">
//         <div className="text-sm">Completed problems: {Object.keys(codingResults).length}</div>
//         <div>
//           {!sectionCompleted[2] ? (
//             <button
//               onClick={() => {
//                 // require that both problems have been submitted/runned (you can relax this)
//                 completeSection(2);
//               }}
//               className="px-4 py-2 bg-green-600 text-white rounded"
//             >
//               Finish Coding Round
//             </button>
//           ) : (
//             <button
//               onClick={() => setCurrentSection(3)}
//               className="px-4 py-2 bg-indigo-600 text-white rounded"
//             >
//               Proceed to Interview
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   const InterviewSection = () => (
//     <div className="bg-white rounded-lg border p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="font-bold text-lg">Live Interview — Start when ready</h3>
//         <div className="text-sm">This launches the voice/video AI interviewer</div>
//       </div>

//       <div className="mb-4">
//         <div className="text-sm text-muted">
//           You have completed previous rounds. Press the button below to start the live AI interview. (This will start the existing VAPI-based interview flow.)
//         </div>
//       </div>

//       <div className="flex gap-3">
//         <button
//           onClick={handleStartInterview}
//           className="px-4 py-2 bg-green-600 text-white rounded"
//         >
//           Start Interview Now
//         </button>
//         <button
//           onClick={() =>
//             stopInterview(`/interview/${interviewInfo?.interviewData?.interview_id}/thankyou`)
//           }
//           className="px-4 py-2 bg-red-500 text-white rounded"
//         >
//           End Session & Submit
//         </button>
//       </div>
//     </div>
//   );

//   /* ---------------------------
//      Main UI Render
//      --------------------------- */
//   return (
//     <div className="relative p-8 lg:px-48 xl:px-56">
//       {/* Global penalty banner */}
//       {lastPenaltyReason && (
//         <div
//           className={`w-full bg-red-500 text-white text-center py-2 mb-3 font-bold rounded transition-opacity duration-1500 ${
//             lastPenaltyReason ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           {lastPenaltyReason}
//           <div className="text-sm font-normal mt-1">
//             Interview will revoke if more penalties are added
//           </div>
//         </div>
//       )}

//       <h2 className="font-bold text-xl flex justify-between">
//         AI Interview session (Multi-stage)
//         <span className="flex gap-6 items-center">
//           <span className="text-red-600 font-bold">Penalty: {penalty}</span>
//           <Timer /> {formatTime(elapsedTime)}
//         </span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5">
//         {/* Left: current section content */}
//         <div className="col-span-1">
//           {/* Display the appropriate section */}
//           {currentSection === 0 && <AptitudeSection />}
//           {currentSection === 1 && <CFSection />}
//           {currentSection === 2 && <CodingSection />}
//           {currentSection === 3 && <InterviewSection />}

//           {/* Navigation: cannot go back once moved forward */}
//           <div className="mt-4 flex gap-3">
//             <div className="text-sm text-muted">
//               Section:{" "}
//               {["Aptitude", "Computer Fundamentals", "Coding", "Interview"][currentSection]}
//             </div>

//             <div className="ml-auto flex gap-2">
//               {/* Next button: only enabled when current section completed OR allow move after explicit Finish */}
//               {currentSection < 3 && sectionCompleted[currentSection] && (
//                 <button
//                   onClick={() => goToNext()}
//                   className="px-4 py-2 bg-indigo-600 text-white rounded"
//                 >
//                   Next Section
//                 </button>
//               )}

//               {/* Quick info */}
//               <button
//                 onClick={() => tryRequestFs()}
//                 className="px-4 py-2 bg-gray-200 rounded"
//               >
//                 Ensure Fullscreen
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right: AI interviewer avatar + camera proctor */}
//         <div className="bg-white h-[520px] rounded-lg border flex flex-col gap-3 items-center justify-center relative p-4">
//           <div className="relative">
//             {aiSpeaking && (
//               <span className="absolute inset-0 rounded-full bg-violet-500 opacity-70 animate-ping" />
//             )}
//             <Image
//               src={"/avataar.jpg"}
//               alt="Select-IQ"
//               width={100}
//               height={100}
//               className="w-[75px] h-[75px] rounded-full object-cover z-10"
//             />
//           </div>
//           <h2 className="z-10">Select-IQ</h2>

//           <div className="w-full h-[300px] relative mt-3 rounded overflow-hidden border">
//             <video
//               ref={videoRef}
//               autoPlay
//               muted
//               playsInline
//               className="w-full h-full object-cover bg-black"
//             />
//             <canvas
//               ref={canvasRef}
//               width="640"
//               height="480"
//               className="absolute top-0 left-0 w-full h-full pointer-events-none"
//             />
//             {faceWarning && (
//               <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded text-sm font-bold">
//                 {faceWarning}
//               </div>
//             )}
//             <h2 className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
//               {interviewInfo?.userName}
//             </h2>
//           </div>

//           <div className="flex items-center gap-7 mt-4">
//             <Mic className="h-12 w-12 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />
//             <AlertConfirmation
//               stopInterview={() =>
//                 stopInterview(
//                   `/interview/${interviewInfo?.interviewData?.interview_id}/thankyou`
//                 )
//               }
//             >
//               <Phone className="h-12 w-12 p-3 bg-red-500 text-white rounded-full cursor-pointer" />
//             </AlertConfirmation>
//           </div>

//           <h2 className="text-sm text-gray-400 text-center mt-3">Proctoring active</h2>
//         </div>
//       </div>

//       {/* Overlay when fullscreen is lost */}
//       {blocked && (
//         <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
//           <p className="mb-4 font-bold text-white">
//             ⚠️ Interview requires Fullscreen Mode. Penalties increase when leaving.
//           </p>
//           <h2 className="mb-4 font-bold text-white">Penalty: {penalty}</h2>
//           <button
//             onClick={tryRequestFs}
//             className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold text-white"
//           >
//             Re-Enter Fullscreen
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default StartInterview;













//===============  Multiple round -> 2 ==================



















// Full updated StartInterview.jsx with all fixes
// >>> COPY-PASTE SAFE <<<

// StartInterview.jsx
// StartInterview.jsx
// "use client";

// import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
// import { InterviewDataContext } from "@/context/InterviewDataContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { toast } from "sonner";
// import * as blazeface from "@tensorflow-models/blazeface";
// import "@tensorflow/tfjs";
// import Vapi from "@vapi-ai/web";
// import {
//   AlertDialog,
//   AlertDialogTrigger,
//   AlertDialogContent,
//   AlertDialogFooter,
//   AlertDialogCancel,
//   AlertDialogAction,
// } from "@/components/ui/alert-dialog";
// import { APTITUDE_POOL_150, CF_POOL_150 } from "@/lib/questionPools";

// /* --------------------------- Helpers & Config --------------------------- */

// const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

// function pickRandomUnique(pool, count) {
//   const arr = Array.isArray(pool) ? [...pool] : [];
//   const picked = [];
//   for (let i = 0; i < count && arr.length; i++) {
//     const idx = Math.floor(Math.random() * arr.length);
//     picked.push(arr.splice(idx, 1)[0]);
//   }
//   return picked;
// }

// const CODING_PROBLEMS = [
//   {
//     id: "p1",
//     title: "Two Sum",
//     description: "Return indices [i,j] of two numbers such that they add up to target.",
//     starter: `function twoSum(nums, target) {\n  // return [i, j]\n}`,
//     testCases: [
//       { input: "[2,7,11,15],9", expected: "[0,1]" },
//       { input: "[3,2,4],6", expected: "[1,2]" },
//       { input: "[3,3],6", expected: "[0,1]" },
//       { input: "[-1,-2,-3,-4,-5],-8", expected: "[2,4]" },
//       { input: "[0,4,3,0],0", expected: "[0,3]" },
//     ],
//   },
//   {
//     id: "p2",
//     title: "Reverse String",
//     description: "Return reversed string.",
//     starter: `function reverseString(s) {\n  // return reversed string\n}`,
//     testCases: [
//       { input: "'hello'", expected: '"olleh"' },
//       { input: "'a'", expected: '"a"' },
//       { input: "''", expected: '""' },
//       { input: "'racecar'", expected: '"racecar"' },
//       { input: "'OpenAI'", expected: '"IAnepO"' },
//     ],
//   },
// ];

// const JUDGE0_LANGUAGE_IDS = {
//   javascript: 63, // local runner used for JS
//   python: 71,
//   cpp: 54,
//   java: 62,
//   sql: 82,
// };

// /* --------------------------- MCQ List (stable) --------------------------- */

// const MCQList = React.memo(function MCQList({ questions, answers, onSelect }) {
//   return (
//     <div id="mcq-scroll" className="flex-1 overflow-y-auto pr-3" style={{ maxHeight: "calc(100vh - 170px)" }}>
//       {questions.map((q, i) => (
//         <div key={i} className="mb-4 p-3 border rounded bg-white">
//           <div className="font-semibold mb-2">Q{i + 1}. {q.q}</div>
//           <div className="grid grid-cols-2 gap-3">
//             {q.options.map((opt, oi) => {
//               const selected = answers[i] === oi;
//               return (
//                 <button
//                   key={oi}
//                   onClick={() => onSelect(i, oi)}
//                   className={`text-left px-3 py-2 rounded border ${selected ? "bg-indigo-600 text-white" : "bg-gray-50"}`}
//                 >
//                   {String.fromCharCode(65 + oi)}. {opt}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// });

// /* --------------------------- Main Component --------------------------- */

// export default function StartInterview() {
//   const { interviewInfo } = useContext(InterviewDataContext);
//   const router = useRouter();

//   // section: 0 = Aptitude, 1 = CF, 2 = Coding, 3 = Interview
//   const [section, setSection] = useState(0);

//   // Questions and answers
//   const [aptQuestions] = useState(() => pickRandomUnique(APTITUDE_POOL_150, 30));
//   const [cfQuestions] = useState(() => pickRandomUnique(CF_POOL_150, 20));
//   const [aptAnswers, setAptAnswers] = useState({});
//   const [cfAnswers, setCfAnswers] = useState({});

//   // timers
//   const [aptTime, setAptTime] = useState(40 * 60);
//   const [cfTime, setCfTime] = useState(15 * 60);
//   const [codingTime, setCodingTime] = useState(45 * 60);

//   // coding
//   const [lang, setLang] = useState("javascript");
//   const [code, setCode] = useState(() => {
//     const init = {};
//     CODING_PROBLEMS.forEach((p) => (init[p.id] = p.starter));
//     return init;
//   });
//   const [results, setResults] = useState({}); // per-problem results

//   // proctoring
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const camStreamRef = useRef(null);
//   const faceTimeoutRef = useRef(null);

//   // state
//   const [penalty, setPenalty] = useState(0);
//   const [warning, setWarning] = useState("");
//   const [fullscreenLost, setFullscreenLost] = useState(false);

//   // VAPI instance
//   const vapiRef = useRef(null);
//   if (!vapiRef.current && typeof window !== "undefined" && process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY) {
//     vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//   }

//   /* --------------------------- Force Fullscreen + protections --------------------------- */
//   useEffect(() => {
//     const id = setInterval(() => {
//       if (!document.fullscreenElement) {
//         document.documentElement.requestFullscreen().catch(() => {});
//       }
//     }, 2000);
//     return () => clearInterval(id);
//   }, []);

//   useEffect(() => {
//     // block context menu, disable selection, keyboard protections
//     const onKeyDown = (e) => {
//       const key = (e.key || "").toLowerCase();
//       const ctrlLike = e.ctrlKey || e.metaKey;
//       if (
//         key === "escape" ||
//         key === "f11" ||
//         key === "f12" ||
//         (ctrlLike && ["c", "v", "a", "u", "s"].includes(key)) ||
//         (e.altKey && key === "tab") ||
//         key === "printscreen"
//       ) {
//         e.preventDefault();
//         e.stopPropagation();
//         addPenalty("⚠️ Forbidden key");
//       }
//     };

//     const onVisibility = () => {
//       if (document.hidden) addPenalty("⚠️ Tab switch detected");
//     };

//     const onFsChange = () => {
//       if (!document.fullscreenElement) {
//         setFullscreenLost(true);
//         addPenalty("⚠️ Fullscreen exited");
//       } else {
//         setFullscreenLost(false);
//       }
//     };

//     const preventContext = (e) => e.preventDefault();

//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("visibilitychange", onVisibility);
//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("contextmenu", preventContext);
//     const prevSelect = document.body.style.userSelect;
//     document.body.style.userSelect = "none";

//     return () => {
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("visibilitychange", onVisibility);
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("contextmenu", preventContext);
//       document.body.style.userSelect = prevSelect || "";
//     };
//   }, []);

//   /* --------------------------- Camera + BlazeFace proctoring --------------------------- */
//   useEffect(() => {
//     let rafId = null;
//     let mounted = true;

//     const init = async () => {
//       try {
//         const cam = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 }, audio: false });
//         camStreamRef.current = cam;
//         if (videoRef.current) videoRef.current.srcObject = cam;

//         const model = await blazeface.load();

//         const detectLoop = async () => {
//           if (!mounted) return;
//           try {
//             const v = videoRef.current;
//             const c = canvasRef.current;
//             if (v && c && model && v.videoWidth && v.videoHeight) {
//               c.width = v.videoWidth;
//               c.height = v.videoHeight;
//               const ctx = c.getContext("2d");
//               ctx.clearRect(0, 0, c.width, c.height);

//               const preds = await model.estimateFaces(v, false);

//               if (preds.length === 1) {
//                 // draw green box(s)
//                 preds.forEach((p) => {
//                   const [x1, y1] = p.topLeft;
//                   const [x2, y2] = p.bottomRight;
//                   ctx.strokeStyle = "lime";
//                   ctx.lineWidth = 3;
//                   ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
//                 });
//                 if (faceTimeoutRef.current) {
//                   clearTimeout(faceTimeoutRef.current);
//                   faceTimeoutRef.current = null;
//                 }
//               } else {
//                 if (!faceTimeoutRef.current) {
//                   faceTimeoutRef.current = setTimeout(() => {
//                     addPenalty(preds.length === 0 ? "⚠️ No face detected" : "⚠️ Multiple faces detected");
//                     faceTimeoutRef.current = null;
//                   }, 1000);
//                 }
//               }
//             }
//           } catch (err) {
//             // non-fatal
//             console.warn("face detect error", err);
//           }
//           rafId = requestAnimationFrame(detectLoop);
//         };
//         detectLoop();
//       } catch (err) {
//         console.warn("camera access error", err);
//         addPenalty("⚠️ Camera access error");
//       }
//     };

//     init();

//     return () => {
//       mounted = false;
//       if (rafId) cancelAnimationFrame(rafId);
//       try {
//         camStreamRef.current?.getTracks()?.forEach((t) => t.stop());
//       } catch {}
//       if (faceTimeoutRef.current) {
//         clearTimeout(faceTimeoutRef.current);
//         faceTimeoutRef.current = null;
//       }
//     };
//   }, []);

//   /* --------------------------- Timers per section --------------------------- */
//   useEffect(() => {
//     let timer = null;
//     if (section === 0) timer = setInterval(() => setAptTime((s) => Math.max(0, s - 1)), 1000);
//     if (section === 1) timer = setInterval(() => setCfTime((s) => Math.max(0, s - 1)), 1000);
//     if (section === 2) timer = setInterval(() => setCodingTime((s) => Math.max(0, s - 1)), 1000);
//     return () => clearInterval(timer);
//   }, [section]);

//   /* --------------------------- Penalty helper --------------------------- */
//   const addPenalty = useCallback(
//     (msg) => {
//       setPenalty((p) => {
//         const n = p + 1;
//         setWarning(msg);
//         toast.error(msg);
//         if (n >= 7) {
//           // stop camera and redirect to sorry
//           try {
//             camStreamRef.current?.getTracks()?.forEach((t) => t.stop());
//           } catch {}
//           setTimeout(() => router.push(`/interview/${interviewInfo?.interviewData?.interview_id}/sorry`), 700);
//         }
//         setTimeout(() => setWarning(""), 3000);
//         return n;
//       });
//     },
//     [interviewInfo?.interviewData?.interview_id, router]
//   );

//   /* --------------------------- MCQ select handlers (stable) --------------------------- */
//   const handleAptSelect = useCallback((index, optionIndex) => {
//     setAptAnswers((prev) => ({ ...prev, [index]: optionIndex }));
//   }, []);

//   const handleCFSelect = useCallback((index, optionIndex) => {
//     setCfAnswers((prev) => ({ ...prev, [index]: optionIndex }));
//   }, []);

//   /* --------------------------- Scores & pass checks --------------------------- */
//   const aptScore = useMemo(() => aptQuestions.reduce((acc, q, i) => (aptAnswers[i] === q.a ? acc + 1 : acc), 0), [aptAnswers, aptQuestions]);
//   const aptNeeded = Math.ceil(0.0 * aptQuestions.length);

//   const cfScore = useMemo(() => cfQuestions.reduce((acc, q, i) => (cfAnswers[i] === q.a ? acc + 1 : acc), 0), [cfAnswers, cfQuestions]);
//   const cfNeeded = Math.ceil(0.0 * cfQuestions.length);

//   /* --------------------------- Coding: local JS runner & Judge0 --------------------------- */

//   // Local JS runner (safe-ish): uses Function constructor to return the function; catches runtime errors
//   const runLocalJs = useCallback(async (problem) => {
//     try {
//       const fnName = problem.id === "p1" ? "twoSum" : "reverseString";

//       // Async Function generator
//       const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
//       const harness = `${code[problem.id]}; return ${fnName};`;
//       const fn = await new AsyncFunction(harness)();

//       const details = problem.testCases.map((tc) => {
//         try {
//           if (problem.id === "p1") {
//             const arr = JSON.parse(tc.input.split(",")[0]);
//             const target = Number(tc.input.split(",")[1]);
//             const out = typeof fn === "function" ? fn(arr, target) : null;
//             return { input: tc.input, expected: tc.expected, output: JSON.stringify(out), pass: JSON.stringify(out) === tc.expected };
//           } else {
//             const s = eval(tc.input);
//             const out = typeof fn === "function" ? fn(s) : null;
//             return { input: tc.input, expected: tc.expected, output: JSON.stringify(out), pass: JSON.stringify(out) === tc.expected };
//           }
//         } catch (err) {
//           return { input: tc.input, expected: tc.expected, output: "Error", pass: false };
//         }
//       });

//       const passed = details.filter((d) => d.pass).length;
//       setResults((r) => ({ ...r, [problem.id]: { passed, total: details.length, details } }));
//       toast.success(`Local run: ${passed}/${details.length} passed`);
//     } catch (err) {
//       console.error("local run err", err);
//       setResults((r) => ({ ...r, [problem.id]: { error: String(err) } }));
//       toast.error("Runtime error during local run");
//     }
//   }, [code]);

//   // Judge0 submission (simple approach: one submission per testcase with wait=true)
//   const runJudge0 = useCallback(async (problem) => {
//     const JUDGE0_URL = process.env.NEXT_PUBLIC_JUDGE0_URL;
//     const JUDGE0_KEY = process.env.NEXT_PUBLIC_JUDGE0_KEY;
//     if (!JUDGE0_URL) {
//       toast.error("Judge0 URL not configured (NEXT_PUBLIC_JUDGE0_URL)");
//       return;
//     }
//     try {
//       const subs = await Promise.all(problem.testCases.map(async (tc) => {
//         const payload = {
//           source_code: code[problem.id],
//           language_id: JUDGE0_LANGUAGE_IDS[lang] || JUDGE0_LANGUAGE_IDS.python,
//           stdin: tc.input,
//         };
//         const resp = await fetch(`${JUDGE0_URL}/submissions?base64_encoded=false&wait=true`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json", ...(JUDGE0_KEY ? { "X-Auth-Token": JUDGE0_KEY } : {}) },
//           body: JSON.stringify(payload),
//         });
//         return resp.json();
//       }));
//       setResults((r) => ({ ...r, [problem.id]: { remote: subs } }));
//       toast.success(`Submitted to Judge0: ${problem.id}`);
//     } catch (err) {
//       console.error("judge0 error", err);
//       setResults((r) => ({ ...r, [problem.id]: { error: String(err) } }));
//       toast.error("Judge0 submission error");
//     }
//   }, [code, lang]);

//   // Determine if problem is solved (either local passed >0 OR judge0 remote outputs match any expected)
//   const isProblemSolved = useCallback((problem) => {
//     const r = results[problem.id];
//     if (!r) return false;
//     if (r.passed !== undefined) return r.passed > 0;
//     if (Array.isArray(r.remote)) {
//       return r.remote.some((o, idx) => {
//         const stdout = (o.stdout ?? "").trim();
//         if (!stdout) return false;
//         const expected = problem.testCases[idx]?.expected ?? "";
//         // try JSON compare else string compare
//         try {
//           const parsed = JSON.parse(stdout);
//           return JSON.stringify(parsed) === expected;
//         } catch {
//           return stdout === expected.replace(/^"|"$/g, "");
//         }
//       });
//     }
//     return false;
//   }, [results]);

//   const anyProblemSolved = useCallback(() => CODING_PROBLEMS.some((p) => isProblemSolved(p)), [isProblemSolved]);

//   /* --------------------------- Interview startCall (old code preserved) --------------------------- */
//   const startCall = useCallback(() => {
//     const vapi = vapiRef.current;
//     const d = interviewInfo?.interviewData ?? interviewInfo;

//     let raw =
//       d?.questionList ??
//       d?.questions ??
//       d?.questionlist ??
//       d?.questionsList ??
//       [];

//     if (typeof raw === "string") {
//       try {
//         raw = JSON.parse(raw);
//       } catch {
//         raw = [];
//       }
//     }

//     let questionList = "";
//     (Array.isArray(raw) ? raw : []).forEach((item) => {
//       const q = typeof item === "string" ? item : item?.question;
//       if (q && q.trim() !== "") {
//         questionList += (questionList ? ", " : "") + q.trim();
//       }
//     });

//     const assistantOptions = {
//       name: "AI Recruiter",
//       firstMessage: `Hi ${interviewInfo?.userName}, how are you? Ready for your interview on ${interviewInfo?.interviewData?.jobPosition}`,
//       transcriber: {
//         provider: "deepgram",
//         model: "nova-2",
//         language: "en-US",
//       },
//       voice: {
//         provider: "playht",
//         voiceId: "jennifer",
//       },
//       model: {
//         provider: "openai",
//         model: "gpt-4",
//         messages: [
//           {
//             role: "system",
//             content: `
// You are an AI voice assistant conducting interviews developed by Select IQ under Suyash Gupta.
// Ask candidates the provided interview questions one at a time.
// Encourage them, give hints if they struggle, and provide short feedback.
// Wrap up positively after 5–7 questions.
// ✅ Be friendly, engaging, and witty 🎤
// ✅ Keep responses short & natural
// ✅ Never share the Final Marks or Points to the candidate
// ✅ Stay focused on jobDescription and questionList.

// Questions: ${questionList}
// `.trim(),
//           },
//         ],
//       },
//     };

//     try {
//       vapi.start(assistantOptions);
//     } catch (err) {
//       console.warn("vapi.start error", err);
//     }
//   }, [interviewInfo]);

//   // Auto start the call when interview section opens
//   useEffect(() => {
//     if (section === 3 && interviewInfo) {
//       try {
//         startCall();
//       } catch (err) {
//         console.warn("startCall error", err);
//       }
//     }
//   }, [section, interviewInfo, startCall]);

//   /* --------------------------- Helpers to stop streams & redirect --------------------------- */
//   const stopAllStreams = useCallback(() => {
//     try {
//       camStreamRef.current?.getTracks()?.forEach((t) => t.stop());
//     } catch {}
//   }, []);

//   const redirectThankYou = useCallback(() => {
//     stopAllStreams();
//     setTimeout(() => router.push(`/interview/${interviewInfo?.interviewData?.interview_id}/thankyou`), 600);
//   }, [interviewInfo, router, stopAllStreams]);

//   /* --------------------------- Render --------------------------- */

//   return (
//     <div className="h-screen w-screen flex flex-col bg-gray-100 overflow-hidden">
//       {/* header */}
//       <header className="p-4 bg-white border-b flex justify-between items-center">
//         <div className="flex items-center gap-4">
//           <div className="text-2xl font-bold text-indigo-700">SELECTIQ</div>
//           <div className="text-sm text-gray-600">Proctored Multi-stage Assessment</div>
//         </div>

//         <div className="flex items-center gap-6">
//           <div className="text-red-600 font-bold">Penalty: {penalty}</div>
//           <div className="font-mono">
//             {section === 0 ? formatTime(aptTime) : section === 1 ? formatTime(cfTime) : section === 2 ? formatTime(codingTime) : ""}
//           </div>
//         </div>
//       </header>

//       <main className="flex flex-1 overflow-hidden">
//         {/* left: main content (scroll inside) */}
//         <section className="flex-[2] p-6 overflow-hidden relative">
//           {/* fullscreen black overlay */}
//           {fullscreenLost && (
//             <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95">
//               <div className="text-center">
//                 <div className="text-white font-bold mb-4">⚠ Fullscreen required</div>
//                 <button className="px-4 py-2 bg-indigo-600 text-white rounded" onClick={() => document.documentElement.requestFullscreen().catch(() => {})}>
//                   Re-enter Fullscreen
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Aptitude */}
//           {section === 0 && (
//             <>
//               <div className="flex items-center justify-between mb-4">
//                 <h1 className="text-xl font-bold">Aptitude — 30 MCQs (40 minutes)</h1>
//                 <div className="text-red-600 font-mono">{formatTime(aptTime)}</div>
//               </div>

//               <MCQList questions={aptQuestions} answers={aptAnswers} onSelect={handleAptSelect} />

//               <div className="mt-4 flex justify-end">
//                 <AlertDialog>
//                   <AlertDialogTrigger asChild>
//                     <button className="bg-green-600 text-white px-4 py-2 rounded">Finish Aptitude</button>
//                   </AlertDialogTrigger>
//                   <AlertDialogContent>
//                     <p>You need at least {aptNeeded}/{aptQuestions.length} ({Math.round((aptNeeded/aptQuestions.length)*100)}%) to pass this round. Proceed?</p>
//                     <AlertDialogFooter>
//                       <AlertDialogCancel>Stay</AlertDialogCancel>
//                       <AlertDialogAction
//                         onClick={() => {
//                           if (aptScore < aptNeeded) {
//                             toast.error(`Failed Aptitude: ${aptScore}/${aptQuestions.length}`);
//                             redirectThankYou();
//                           } else {
//                             setSection(1);
//                           }
//                         }}
//                       >
//                         Confirm
//                       </AlertDialogAction>
//                     </AlertDialogFooter>
//                   </AlertDialogContent>
//                 </AlertDialog>
//               </div>
//             </>
//           )}

//           {/* Computer Fundamentals */}
//           {section === 1 && (
//             <>
//               <div className="flex items-center justify-between mb-4">
//                 <h1 className="text-xl font-bold">Computer Fundamentals — 20 MCQs (15 minutes)</h1>
//                 <div className="text-red-600 font-mono">{formatTime(cfTime)}</div>
//               </div>

//               <MCQList questions={cfQuestions} answers={cfAnswers} onSelect={handleCFSelect} />

//               <div className="mt-4 flex justify-end">
//                 <AlertDialog>
//                   <AlertDialogTrigger asChild>
//                     <button className="bg-green-600 text-white px-4 py-2 rounded">Finish CF</button>
//                   </AlertDialogTrigger>
//                   <AlertDialogContent>
//                     <p>You need at least {cfNeeded}/{cfQuestions.length} ({Math.round((cfNeeded/cfQuestions.length)*100)}%) to pass. Proceed?</p>
//                     <AlertDialogFooter>
//                       <AlertDialogCancel>Stay</AlertDialogCancel>
//                       <AlertDialogAction
//                         onClick={() => {
//                           if (cfScore < cfNeeded) {
//                             toast.error(`Failed CF: ${cfScore}/${cfQuestions.length}`);
//                             redirectThankYou();
//                           } else {
//                             setSection(2);
//                           }
//                         }}
//                       >
//                         Confirm
//                       </AlertDialogAction>
//                     </AlertDialogFooter>
//                   </AlertDialogContent>
//                 </AlertDialog>
//               </div>
//             </>
//           )}

//           {/* Coding */}
//           {section === 2 && (
//             <>
//               <div className="flex items-center justify-between mb-4">
//                 <h1 className="text-xl font-bold">Coding Round — 2 Problems (45 minutes)</h1>
//                 <div className="text-red-600 font-mono">{formatTime(codingTime)}</div>
//               </div>

//               <div className="mb-3">
//                 <label className="mr-2">Language:</label>
//                 <select value={lang} onChange={(e) => setLang(e.target.value)} className="border px-2 py-1 rounded">
//                   <option value="javascript">JavaScript </option>
//                   <option value="python">Python </option>
//                   <option value="cpp">C++ </option>
//                   <option value="java">Java</option>
//                   <option value="sql">SQL </option>
//                 </select>
//               </div>

//               <div className="flex-1 overflow-y-auto pr-3">
//                 {CODING_PROBLEMS.map((p) => (
//                   <div key={p.id} className="mb-4 p-3 border rounded bg-white">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <div className="font-bold">{p.title}</div>
//                         <div className="text-sm text-gray-600">{p.description}</div>
//                       </div>
//                       <div className="text-xs text-gray-500">Tests: {p.testCases.length}</div>
//                     </div>

//                     <textarea
//                       value={code[p.id]}
//                       onChange={(e) => setCode((c) => ({ ...c, [p.id]: e.target.value }))}
//                       className="w-full h-40 mt-3 p-2 border font-mono rounded"
//                     />

//                     <div className="mt-2 flex gap-2 items-center">
//                       {lang === "javascript" ? (
//                         <button className="px-3 py-1 bg-indigo-600 text-white rounded" onClick={() => runLocalJs(p)}>
//                           Run (Local JS)
//                         </button>
//                       ) : (
//                         <button className="px-3 py-1 bg-indigo-600 text-white rounded" onClick={() => runJudge0(p)}>
//                           Submit (Judge0)
//                         </button>
//                       )}

//                       <button
//                         className="px-3 py-1 bg-gray-200 rounded"
//                         onClick={() => {
//                           const blob = new Blob([code[p.id]], { type: "text/plain" });
//                           const u = URL.createObjectURL(blob);
//                           const a = document.createElement("a");
//                           a.href = u;
//                           a.download = `${p.id}_${lang}.txt`;
//                           a.click();
//                         }}
//                       >
//                         Download
//                       </button>

//                       <div className="ml-auto text-sm">
//                         {results[p.id] ? (
//                           results[p.id].error ? (
//                             <span className="text-red-600">Error</span>
//                           ) : results[p.id].passed !== undefined ? (
//                             <span className="text-green-600">{results[p.id].passed}/{results[p.id].total} passed</span>
//                           ) : results[p.id].remote ? (
//                             <span className="text-blue-600">Remote submitted</span>
//                           ) : null
//                         ) : null}
//                       </div>
//                     </div>

//                     {results[p.id]?.details && (
//                       <div className="mt-2 bg-gray-50 p-2 rounded text-sm">
//                         {results[p.id].details.map((d, idx) => (
//                           <div key={idx} className={d.pass ? "text-green-600" : "text-red-600"}>
//                             TC{idx + 1}: Expected {d.expected} • Got {d.output}
//                           </div>
//                         ))}
//                       </div>
//                     )}

//                     {results[p.id]?.remote && (
//                       <div className="mt-2 bg-gray-50 p-2 rounded text-sm">
//                         <div className="text-sm text-gray-700">Judge0 results returned — check console for raw outputs.</div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-3 flex justify-end">
//                 <AlertDialog>
//                   <AlertDialogTrigger asChild>
//                     <button className="bg-green-600 text-white px-4 py-2 rounded">Finish Coding</button>
//                   </AlertDialogTrigger>
//                   <AlertDialogContent>
//                     <p>Proceed to interview? (You must solve at least one problem — local or Judge0)</p>
//                     <AlertDialogFooter>
//                       <AlertDialogCancel>Stay</AlertDialogCancel>
//                       <AlertDialogAction
//                         onClick={() => {
//                           const solved = anyProblemSolved();
//                           if (solved) {
//                             toast.error("No problem solved. Redirecting to Thankyou.");
//                             redirectThankYou();
//                           } else {
//                             setSection(3);
//                           }
//                         }}
//                       >
//                         Confirm
//                       </AlertDialogAction>
//                     </AlertDialogFooter>
//                   </AlertDialogContent>
//                 </AlertDialog>
//               </div>
//             </>
//           )}

//           {/* Interview */}
//           {section === 3 && (
//             <div className="p-4 bg-white rounded">
//               <h2 className="text-lg font-bold mb-3">Interview — AI Recruiter</h2>
//               <p className="text-sm text-gray-600 mb-3">AI-driven interview (voice + transcriber). Click start to begin.</p>

//               <div className="flex gap-3">
//                 <button
//                   className="px-4 py-2 bg-indigo-600 text-white rounded"
//                   onClick={() => {
//                     if (!vapiRef.current) {
//                       toast.error("VAPI not configured (NEXT_PUBLIC_VAPI_PUBLIC_KEY)");
//                       return;
//                     }
//                     // startCall is already auto-called by effect; this allows manual start too
//                     startCall();
//                     toast.success("Interview started");
//                   }}
//                 >
//                   Start Interview
//                 </button>

//                 <button
//                   className="px-4 py-2 bg-red-500 text-white rounded"
//                   onClick={() => {
//                     // stop everything and redirect to thank you
//                     try {
//                       camStreamRef.current?.getTracks()?.forEach((t) => t.stop());
//                     } catch {}
//                     vapiRef.current?.stop?.();
//                     router.push(`/interview/${interviewInfo?.interviewData?.interview_id}/thankyou`);
//                   }}
//                 >
//                   End Session
//                 </button>
//               </div>
//             </div>
//           )}
//         </section>

//         {/* right: webcam preview only */}
//         <aside className="flex-[1] border-l bg-white p-4 flex flex-col items-center gap-4">
//           <Image src="/avataar.jpg" alt="avatar" width={section === 3 ? 120 : 60} height={section === 3 ? 120 : 60} className="rounded-full" />
//           <div className="w-full">
//             <div className="text-sm font-medium mb-2">Webcam Preview</div>
//             <div className="relative w-full bg-black rounded overflow-hidden" style={{ height: section === 3 ? 320 : 160 }}>
//               <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
//               <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
//             </div>
//           </div>
//           {warning && <div className="text-red-600 font-bold">{warning}</div>}
//           <div className="text-xs text-gray-500">Proctoring active — webcam only</div>
//         </aside>
//       </main>
//     </div>
//   );
// }

// /* --------------------------- End of File --------------------------- */





































































//===============  Multiple round -> 3 (gd)==================




















// "use client";

// import React, {
//   useCallback,
//   useContext,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";
// import { InterviewDataContext } from "@/context/InterviewDataContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { toast } from "sonner";
// import * as blazeface from "@tensorflow-models/blazeface";
// import "@tensorflow/tfjs";
// import Vapi from "@vapi-ai/web";
// import Editor from "@monaco-editor/react";
// import {
//   AlertDialog,
//   AlertDialogTrigger,
//   AlertDialogContent,
//   AlertDialogFooter,
//   AlertDialogCancel,
//   AlertDialogAction,
// } from "@/components/ui/alert-dialog";
// import { APTITUDE_POOL_150, CF_POOL_150 } from "@/lib/questionPools";

// /* --------------------------- Helpers & Config --------------------------- */

// const formatTime = (s) =>
//   `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(
//     2,
//     "0"
//   )}`;

// function pickRandomUnique(pool, count) {
//   const arr = Array.isArray(pool) ? [...pool] : [];
//   const picked = [];
//   for (let i = 0; i < count && arr.length; i++) {
//     const idx = Math.floor(Math.random() * arr.length);
//     picked.push(arr.splice(idx, 1)[0]);
//   }
//   return picked;
// }

// const CODING_PROBLEMS = [
//   {
//     id: "p1",
//     title: "Two Sum",
//     description:
//       "Given an array of integers nums and an integer target, return indices [i,j] of two numbers such that they add up to target.",
//     starter: `function twoSum(nums, target) {\n  // return [i, j]\n}`,
//     testCases: [
//       { input: "[2,7,11,15],9", expected: "[0,1]" },
//       { input: "[3,2,4],6", expected: "[1,2]" },
//       { input: "[3,3],6", expected: "[0,1]" },
//       { input: "[-1,-2,-3,-4,-5],-8", expected: "[2,4]" },
//       { input: "[0,4,3,0],0", expected: "[0,3]" },
//     ],
//   },
//   {
//     id: "p2",
//     title: "Reverse String",
//     description: "Return the reversed string.",
//     starter: `function reverseString(s) {\n  // return reversed string\n}`,
//     testCases: [
//       { input: "'hello'", expected: '"olleh"' },
//       { input: "'a'", expected: '"a"' },
//       { input: "''", expected: '""' },
//       { input: "'racecar'", expected: '"racecar"' },
//       { input: "'OpenAI'", expected: '"IAnepO"' },
//     ],
//   },
// ];

// const JUDGE0_LANGUAGE_IDS = {
//   javascript: 63, // local runner used for JS
//   python: 71,
//   cpp: 54,
//   java: 62,
//   sql: 82,
// };

// /* --------------------------- MCQ List (stable) --------------------------- */

// const MCQList = React.memo(function MCQList({ questions, answers, onSelect }) {
//   return (
//     <div
//       id="mcq-scroll"
//       className="flex-1 overflow-y-auto pr-3"
//       style={{ maxHeight: "calc(100vh - 200px)" }}
//     >
//       {questions.map((q, i) => (
//         <div key={i} className="mb-4 p-3 border rounded bg-white shadow-sm">
//           <div className="font-semibold mb-2">Q{i + 1}. {q.q}</div>
//           <div className="grid grid-cols-2 gap-3">
//             {q.options.map((opt, oi) => {
//               const selected = answers[i] === oi;
//               return (
//                 <button
//                   key={oi}
//                   onClick={() => onSelect(i, oi)}
//                   className={`text-left px-3 py-2 rounded border ${
//                     selected ? "bg-indigo-600 text-white" : "bg-gray-50"
//                   }`}
//                 >
//                   {String.fromCharCode(65 + oi)}. {opt}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// });

// /* --------------------------- Main Component --------------------------- */

// export default function StartInterview() {
//   const { interviewInfo } = useContext(InterviewDataContext);
//   const router = useRouter();

//   // section: 0 = Aptitude, 1 = CF, 2 = Coding, 3 = Interview
//   const [section, setSection] = useState(0);

//   // Questions and answers
//   const [aptQuestions] = useState(() => pickRandomUnique(APTITUDE_POOL_150, 30));
//   const [cfQuestions] = useState(() => pickRandomUnique(CF_POOL_150, 20));
//   const [aptAnswers, setAptAnswers] = useState({});
//   const [cfAnswers, setCfAnswers] = useState({});

//   // timers
//   const [aptTime, setAptTime] = useState(40 * 60);
//   const [cfTime, setCfTime] = useState(15 * 60);
//   const [codingTime, setCodingTime] = useState(45 * 60);

//   // coding
//   const [lang, setLang] = useState("javascript");
//   const [code, setCode] = useState(() => {
//     const init = {};
//     CODING_PROBLEMS.forEach((p) => (init[p.id] = p.starter));
//     return init;
//   });
//   const [results, setResults] = useState({}); // per-problem results

//   // proctoring
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const camStreamRef = useRef(null);
//   const faceTimeoutRef = useRef(null);

//   // state
//   const [penalty, setPenalty] = useState(0);
//   const [warning, setWarning] = useState("");
//   const [fullscreenLost, setFullscreenLost] = useState(false);

//   // VAPI instance
//   const vapiRef = useRef(null);
//   if (!vapiRef.current && typeof window !== "undefined" && process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY) {
//     vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//   }

//   /* --------------------------- Force Fullscreen + protections --------------------------- */
//   useEffect(() => {
//     const id = setInterval(() => {
//       if (!document.fullscreenElement) {
//         document.documentElement.requestFullscreen().catch(() => {});
//       }
//     }, 2000);
//     return () => clearInterval(id);
//   }, []);

//   useEffect(() => {
//     // block context menu, disable selection, keyboard protections
//     const onKeyDown = (e) => {
//       const key = (e.key || "").toLowerCase();
//       const ctrlLike = e.ctrlKey || e.metaKey;
//       if (
//         key === "escape" ||
//         key === "f11" ||
//         key === "f12" ||
//         (ctrlLike && ["c", "v", "a", "u", "s"].includes(key)) ||
//         (e.altKey && key === "tab") ||
//         key === "printscreen"
//       ) {
//         e.preventDefault();
//         e.stopPropagation();
//         addPenalty("⚠️ Forbidden key");
//       }
//     };

//     const onVisibility = () => {
//       if (document.hidden) addPenalty("⚠️ Tab switch detected");
//     };

//     const onFsChange = () => {
//       if (!document.fullscreenElement) {
//         setFullscreenLost(true);
//         addPenalty("⚠️ Fullscreen exited");
//       } else {
//         setFullscreenLost(false);
//       }
//     };

//     const preventContext = (e) => e.preventDefault();

//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("visibilitychange", onVisibility);
//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("contextmenu", preventContext);
//     const prevSelect = document.body.style.userSelect;
//     document.body.style.userSelect = "none";

//     return () => {
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("visibilitychange", onVisibility);
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("contextmenu", preventContext);
//       document.body.style.userSelect = prevSelect || "";
//     };
//   }, []);

//   /* --------------------------- Camera + BlazeFace proctoring --------------------------- */
//   useEffect(() => {
//     let rafId = null;
//     let mounted = true;

//     const init = async () => {
//       try {
//         const cam = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 }, audio: false });
//         camStreamRef.current = cam;
//         if (videoRef.current) videoRef.current.srcObject = cam;

//         const model = await blazeface.load();

//         const detectLoop = async () => {
//           if (!mounted) return;
//           try {
//             const v = videoRef.current;
//             const c = canvasRef.current;
//             if (v && c && model && v.videoWidth && v.videoHeight) {
//               c.width = v.videoWidth;
//               c.height = v.videoHeight;
//               const ctx = c.getContext("2d");
//               ctx.clearRect(0, 0, c.width, c.height);

//               const preds = await model.estimateFaces(v, false);

//               if (preds.length === 1) {
//                 // draw green box(s)
//                 preds.forEach((p) => {
//                   const [x1, y1] = p.topLeft;
//                   const [x2, y2] = p.bottomRight;
//                   ctx.strokeStyle = "lime";
//                   ctx.lineWidth = 3;
//                   ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
//                 });
//                 if (faceTimeoutRef.current) {
//                   clearTimeout(faceTimeoutRef.current);
//                   faceTimeoutRef.current = null;
//                 }
//               } else {
//                 if (!faceTimeoutRef.current) {
//                   faceTimeoutRef.current = setTimeout(() => {
//                     addPenalty(preds.length === 0 ? "⚠️ No face detected" : "⚠️ Multiple faces detected");
//                     faceTimeoutRef.current = null;
//                   }, 1000);
//                 }
//               }
//             }
//           } catch (err) {
//             // non-fatal
//             console.warn("face detect error", err);
//           }
//           rafId = requestAnimationFrame(detectLoop);
//         };
//         detectLoop();
//       } catch (err) {
//         console.warn("camera access error", err);
//         addPenalty("⚠️ Camera access error");
//       }
//     };

//     init();

//     return () => {
//       mounted = false;
//       if (rafId) cancelAnimationFrame(rafId);
//       try {
//         camStreamRef.current?.getTracks()?.forEach((t) => t.stop());
//       } catch {}
//       if (faceTimeoutRef.current) {
//         clearTimeout(faceTimeoutRef.current);
//         faceTimeoutRef.current = null;
//       }
//     };
//   }, []);

//   /* --------------------------- Timers per section --------------------------- */
//   useEffect(() => {
//     let timer = null;
//     if (section === 0) timer = setInterval(() => setAptTime((s) => Math.max(0, s - 1)), 1000);
//     if (section === 1) timer = setInterval(() => setCfTime((s) => Math.max(0, s - 1)), 1000);
//     if (section === 2) timer = setInterval(() => setCodingTime((s) => Math.max(0, s - 1)), 1000);
//     return () => clearInterval(timer);
//   }, [section]);

//   /* --------------------------- Penalty helper --------------------------- */
//   const addPenalty = useCallback(
//     (msg) => {
//       setPenalty((p) => {
//         const n = p + 1;
//         setWarning(msg);
//         toast.error(msg);
//         if (n >= 7) {
//           // stop camera and redirect to sorry
//           try {
//             camStreamRef.current?.getTracks()?.forEach((t) => t.stop());
//           } catch {}
//           setTimeout(() => router.push(`/interview/${interviewInfo?.interviewData?.interview_id}/sorry`), 700);
//         }
//         setTimeout(() => setWarning(""), 3000);
//         return n;
//       });
//     },
//     [interviewInfo?.interviewData?.interview_id, router]
//   );

//   /* --------------------------- MCQ select handlers (stable) --------------------------- */
//   const handleAptSelect = useCallback((index, optionIndex) => {
//     setAptAnswers((prev) => ({ ...prev, [index]: optionIndex }));
//   }, []);

//   const handleCFSelect = useCallback((index, optionIndex) => {
//     setCfAnswers((prev) => ({ ...prev, [index]: optionIndex }));
//   }, []);

//   /* --------------------------- Scores & pass checks --------------------------- */
//   const aptScore = useMemo(() => aptQuestions.reduce((acc, q, i) => (aptAnswers[i] === q.a ? acc + 1 : acc), 0), [aptAnswers, aptQuestions]);
//   const aptNeeded = Math.ceil(0.1 * aptQuestions.length);

//   const cfScore = useMemo(() => cfQuestions.reduce((acc, q, i) => (cfAnswers[i] === q.a ? acc + 1 : acc), 0), [cfAnswers, cfQuestions]);
//   const cfNeeded = Math.ceil(0.0 * cfQuestions.length);

//   /* --------------------------- Coding: local JS runner & Judge0 --------------------------- */

//   // Local JS runner (safe-ish): uses Function constructor to return the function; catches runtime errors
//   const runLocalJs = useCallback(async (problem) => {
//     try {
//       const fnName = problem.id === "p1" ? "twoSum" : "reverseString";

//       // Async Function generator
//       const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
//       const harness = `${code[problem.id]}; return ${fnName};`;
//       const fn = await new AsyncFunction(harness)();

//       const details = problem.testCases.map((tc) => {
//         try {
//           if (problem.id === "p1") {
//             const arr = JSON.parse(tc.input.split(",")[0]);
//             const target = Number(tc.input.split(",")[1]);
//             const out = typeof fn === "function" ? fn(arr, target) : null;
//             return { input: tc.input, expected: tc.expected, output: JSON.stringify(out), pass: JSON.stringify(out) === tc.expected };
//           } else {
//             const s = eval(tc.input);
//             const out = typeof fn === "function" ? fn(s) : null;
//             return { input: tc.input, expected: tc.expected, output: JSON.stringify(out), pass: JSON.stringify(out) === tc.expected };
//           }
//         } catch (err) {
//           return { input: tc.input, expected: tc.expected, output: "Error", pass: false };
//         }
//       });

//       const passed = details.filter((d) => d.pass).length;
//       setResults((r) => ({ ...r, [problem.id]: { passed, total: details.length, details } }));
//       toast.success(`Local run: ${passed}/${details.length} passed`);
//     } catch (err) {
//       console.error("local run err", err);
//       setResults((r) => ({ ...r, [problem.id]: { error: String(err) } }));
//       toast.error("Runtime error during local run");
//     }
//   }, [code]);

//   // Judge0 submission (simple approach: one submission per testcase with wait=true)
//   const runJudge0 = useCallback(async (problem) => {
//     const JUDGE0_URL = process.env.NEXT_PUBLIC_JUDGE0_URL;
//     const JUDGE0_KEY = process.env.NEXT_PUBLIC_JUDGE0_KEY;
//     if (!JUDGE0_URL) {
//       toast.error("Judge0 URL not configured (NEXT_PUBLIC_JUDGE0_URL)");
//       return;
//     }
//     try {
//       const subs = await Promise.all(problem.testCases.map(async (tc) => {
//         const payload = {
//           source_code: code[problem.id],
//           language_id: JUDGE0_LANGUAGE_IDS[lang] || JUDGE0_LANGUAGE_IDS.python,
//           stdin: tc.input,
//         };
//         const resp = await fetch(`${JUDGE0_URL}/submissions?base64_encoded=false&wait=true`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json", ...(JUDGE0_KEY ? { "X-Auth-Token": JUDGE0_KEY } : {}) },
//           body: JSON.stringify(payload),
//         });
//         return resp.json();
//       }));
//       setResults((r) => ({ ...r, [problem.id]: { remote: subs } }));
//       toast.success(`Submitted to Judge0: ${problem.id}`);
//     } catch (err) {
//       console.error("judge0 error", err);
//       setResults((r) => ({ ...r, [problem.id]: { error: String(err) } }));
//       toast.error("Judge0 submission error");
//     }
//   }, [code, lang]);

//   // Determine if problem is solved (either local passed >0 OR judge0 remote outputs match any expected)
//   const isProblemSolved = useCallback((problem) => {
//     const r = results[problem.id];
//     if (!r) return false;
//     if (r.passed !== undefined) return r.passed > 0;
//     if (Array.isArray(r.remote)) {
//       return r.remote.some((o, idx) => {
//         const stdout = (o.stdout ?? "").trim();
//         if (!stdout) return false;
//         const expected = problem.testCases[idx]?.expected ?? "";
//         // try JSON compare else string compare
//         try {
//           const parsed = JSON.parse(stdout);
//           return JSON.stringify(parsed) === expected;
//         } catch {
//           return stdout === expected.replace(/^"|"$/g, "");
//         }
//       });
//     }
//     return false;
//   }, [results]);

//   const anyProblemSolved = useCallback(() => CODING_PROBLEMS.some((p) => isProblemSolved(p)), [isProblemSolved]);

//   /* --------------------------- Interview startCall (old code preserved) --------------------------- */
//   const startCall = useCallback(() => {
//     const vapi = vapiRef.current;
//     const d = interviewInfo?.interviewData ?? interviewInfo;

//     let raw =
//       d?.questionList ??
//       d?.questions ??
//       d?.questionlist ??
//       d?.questionsList ??
//       [];

//     if (typeof raw === "string") {
//       try {
//         raw = JSON.parse(raw);
//       } catch {
//         raw = [];
//       }
//     }

//     let questionList = "";
//     (Array.isArray(raw) ? raw : []).forEach((item) => {
//       const q = typeof item === "string" ? item : item?.question;
//       if (q && q.trim() !== "") {
//         questionList += (questionList ? ", " : "") + q.trim();
//       }
//     });

//     const assistantOptions = {
//       name: "AI Recruiter",
//       firstMessage: `Hi ${interviewInfo?.userName}, how are you? Ready for your interview on ${interviewInfo?.interviewData?.jobPosition}`,
//       transcriber: {
//         provider: "deepgram",
//         model: "nova-2",
//         language: "en-US",
//       },
//       voice: {
//         provider: "playht",
//         voiceId: "jennifer",
//       },
//       model: {
//         provider: "openai",
//         model: "gpt-4",
//         messages: [
//           {
//             role: "system",
//             content: `
// You are an AI voice assistant conducting interviews developed by Select IQ under Suyash Gupta.
// Ask candidates the provided interview questions one at a time.
// Encourage them, give hints if they struggle, and provide short feedback.
// Wrap up positively after 5–7 questions.
// ✅ Be friendly, engaging, and witty 🎤
// ✅ Keep responses short & natural
// ✅ Never share the Final Marks or Points to the candidate
// ✅ Stay focused on jobDescription and questionList.

// Questions: ${questionList}
// `.trim(),
//           },
//         ],
//       },
//     };

//     try {
//       vapi.start(assistantOptions);
//     } catch (err) {
//       console.warn("vapi.start error", err);
//     }
//   }, [interviewInfo]);

//   // Auto start the call when interview section opens
//   useEffect(() => {
//     if (section === 3 && interviewInfo) {
//       try {
//         startCall();
//       } catch (err) {
//         console.warn("startCall error", err);
//       }
//     }
//   }, [section, interviewInfo, startCall]);

//   /* --------------------------- Helpers to stop streams & redirect --------------------------- */
//   const stopAllStreams = useCallback(() => {
//     try {
//       camStreamRef.current?.getTracks()?.forEach((t) => t.stop());
//     } catch {}
//   }, []);

//   const redirectnotqualify = useCallback(() => {
//     stopAllStreams();
//     setTimeout(() => router.push(`/interview/${interviewInfo?.interviewData?.interview_id}/notqualify`), 600);
//   }, [interviewInfo, router, stopAllStreams]);

//   /* --------------------------- Render --------------------------- */

//   return (
//     <div className="h-screen w-screen flex flex-col bg-gray-100 overflow-hidden">
//       {/* header */}
//       <header className="p-4 bg-white border-b flex justify-between items-center">
//         <div className="flex items-center gap-4">
//           <div className="text-2xl font-bold text-indigo-700">SELECTIQ</div>
//           <div className="text-sm text-gray-600">Proctored Multi-stage Assessment</div>
//         </div>

//         <div className="flex items-center gap-6">
//           <div className="text-red-600 font-bold">Penalty: {penalty}</div>
//           <div className="font-mono">
//             {section === 0 ? formatTime(aptTime) : section === 1 ? formatTime(cfTime) : section === 2 ? formatTime(codingTime) : ""}
//           </div>
//         </div>
//       </header>

//       <main className="flex flex-1 overflow-hidden">
//         {/* left: main content (scroll inside) */}
//         <section className="flex-[2] p-6 overflow-hidden relative">
//           {/* fullscreen black overlay */}
//           {fullscreenLost && (
//             <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95">
//               <div className="text-center">
//                 <div className="text-white font-bold mb-4">⚠ Fullscreen required</div>
//                 <button className="px-4 py-2 bg-indigo-600 text-white rounded" onClick={() => document.documentElement.requestFullscreen().catch(() => {})}>
//                   Re-enter Fullscreen
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Aptitude */}
//           {section === 0 && (
//             <>
//               <div className="flex items-center justify-between mb-4">
//                 <h1 className="text-xl font-bold">Aptitude — 30 MCQs (40 minutes)</h1>
//                 <div className="text-red-600 font-mono">{formatTime(aptTime)}</div>
//               </div>

//               <MCQList questions={aptQuestions} answers={aptAnswers} onSelect={handleAptSelect} />

//               <div className="mt-4 flex justify-center">
//                 <button
//                   className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg text-lg shadow-lg"
//                   onClick={() => {
//                     if (aptScore < aptNeeded) {
//                       toast.error(`Failed Aptitude: ${aptScore}/${aptQuestions.length}`);
//                       redirectnotqualify();
//                     } else {
//                       setSection(1);
//                     }
//                   }}
//                 >
//                   ✅ Finish Aptitude
//                 </button>
//               </div>
//             </>
//           )}

//           {/* Computer Fundamentals */}
//           {section === 1 && (
//             <>
//               <div className="flex items-center justify-between mb-4">
//                 <h1 className="text-xl font-bold">Computer Fundamentals — 20 MCQs (15 minutes)</h1>
//                 <div className="text-red-600 font-mono">{formatTime(cfTime)}</div>
//               </div>

//               <MCQList questions={cfQuestions} answers={cfAnswers} onSelect={handleCFSelect} />

//               <div className="mt-4 flex justify-center">
//                 <button
//                   className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg text-lg shadow-lg"
//                   onClick={() => {
//                     if (cfScore < cfNeeded) {
//                       toast.error(`Failed CF: ${cfScore}/${cfQuestions.length}`);
//                       redirectnotqualify();
//                     } else {
//                       setSection(2);
//                     }
//                   }}
//                 >
//                   ✅ Finish CF
//                 </button>
//               </div>
//             </>
//           )}

//           {/* Coding */}
//           {section === 2 && (
//             <>
//               <div className="flex items-center justify-between mb-4">
//                 <h1 className="text-xl font-bold">Coding Round — 2 Problems (45 minutes)</h1>
//                 <div className="text-red-600 font-mono">{formatTime(codingTime)}</div>
//               </div>

//               <div className="mb-3">
//                 <label className="mr-2 font-medium">Language:</label>
//                 <select value={lang} onChange={(e) => setLang(e.target.value)} className="border px-2 py-1 rounded">
//                   <option value="javascript">JavaScript </option>
//                   <option value="python">Python </option>
//                   <option value="cpp">C++ </option>
//                   <option value="java">Java</option>
//                   <option value="sql">SQL </option>
//                 </select>
//               </div>

//               <div className="flex-1 overflow-y-auto pr-3 space-y-6">
//                 {CODING_PROBLEMS.map((p) => (
//                   <div key={p.id} className="mb-4 p-4 border rounded bg-white shadow-sm">
//                     <div className="flex justify-between items-start mb-2">
//                       <div>
//                         <div className="font-bold">{p.title}</div>
//                         <div className="text-sm text-gray-600">{p.description}</div>
//                       </div>
//                       <div className="text-xs text-gray-500">Tests: {p.testCases.length}</div>
//                     </div>

//                     <div className="bg-gray-50 p-3 rounded mb-3 text-sm">
//                       <div className="font-semibold mb-2">📌 Testcases:</div>
//                       {p.testCases.map((tc, idx) => (
//                         <div key={idx} className="mb-1">
//                           <span className="font-mono text-blue-700">Input:</span> {tc.input}
//                           <span className="font-mono text-green-700 ml-3">Expected:</span> {tc.expected}
//                         </div>
//                       ))}
//                     </div>

//                     <div className="rounded overflow-hidden border">
//                       <Editor
//                         height="320px"
//                         defaultLanguage="javascript"
//                         language={lang === "javascript" ? "javascript" : lang}
//                         theme="vs-dark"
//                         value={code[p.id]}
//                         onChange={(val) => setCode((c) => ({ ...c, [p.id]: val || "" }))}
//                         options={{
//                           fontSize: 13,
//                           minimap: { enabled: false },
//                           lineNumbers: "on",
//                           automaticLayout: true,
//                           scrollBeyondLastLine: false,
//                         }}
//                       />
//                     </div>

//                     <div className="mt-3 flex gap-2 items-center flex-wrap">
//                       {lang === "javascript" ? (
//                         <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md" onClick={() => runLocalJs(p)}>
//                           ▶ Run Locally
//                         </button>
//                       ) : (
//                         <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md" onClick={() => runJudge0(p)}>
//                           🚀 Submit to Judge0
//                         </button>
//                       )}

//                       <button className="px-3 py-2 bg-gray-200 rounded" onClick={() => setCode((c) => ({ ...c, [p.id]: "" }))}>
//                         Clear
//                       </button>

//                       <button className="px-3 py-2 bg-yellow-300 rounded" onClick={() => setCode((c) => ({ ...c, [p.id]: p.starter }))}>
//                         Reset Starter
//                       </button>

//                       <button
//                         className="px-3 py-2 bg-gray-200 rounded"
//                         onClick={() => {
//                           const blob = new Blob([code[p.id]], { type: "text/plain" });
//                           const u = URL.createObjectURL(blob);
//                           const a = document.createElement("a");
//                           a.href = u;
//                           a.download = `${p.id}_${lang}.txt`;
//                           a.click();
//                         }}
//                       >
//                         Download
//                       </button>

//                       <div className="ml-auto text-sm font-medium">
//                         {results[p.id] ? (
//                           results[p.id].error ? (
//                             <span className="text-red-600">Error</span>
//                           ) : results[p.id].passed !== undefined ? (
//                             <span className="text-green-600">✅ {results[p.id].passed}/{results[p.id].total} passed</span>
//                           ) : results[p.id].remote ? (
//                             <span className="text-blue-600">Judge0 results received</span>
//                           ) : null
//                         ) : null}
//                       </div>
//                     </div>

//                     {results[p.id]?.details && (
//                       <div className="mt-3 bg-gray-50 p-3 rounded text-sm">
//                         {results[p.id].details.map((d, idx) => (
//                           <div key={idx} className={d.pass ? "text-green-600" : "text-red-600"}>
//                             TC{idx + 1}: Expected {d.expected} • Got {d.output}
//                           </div>
//                         ))}
//                       </div>
//                     )}

//                     {results[p.id]?.remote && (
//                       <div className="mt-3 bg-gray-50 p-3 rounded text-sm">
//                         <div className="text-sm text-gray-700">Judge0 results returned — check console for raw outputs.</div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-4 flex justify-center">
//                 <AlertDialog>
//                   <AlertDialogTrigger asChild>
//                     <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg text-lg shadow-xl">
//                       ✅ Finish Coding
//                     </button>
//                   </AlertDialogTrigger>
//                   <AlertDialogContent>
//                     <p>Proceed to interview? (You must solve at least one problem — local or Judge0)</p>
//                     <AlertDialogFooter>
//                       <AlertDialogCancel>Stay</AlertDialogCancel>
//                       <AlertDialogAction
//                         onClick={() => {
//                           const solved = anyProblemSolved();
//                           if (!solved) {
//                             toast.error("No problem solved. Redirecting to Thankyou.");
//                             redirectnotqualify();
//                           } else {
//                             setSection(3);
//                           }
//                         }}
//                       >
//                         Confirm
//                       </AlertDialogAction>
//                     </AlertDialogFooter>
//                   </AlertDialogContent>
//                 </AlertDialog>
//               </div>
//             </>
//           )}

//           {/* Interview */}
//           {section === 3 && (
//             <div className="p-4 bg-white rounded">
//               <h2 className="text-lg font-bold mb-3">Interview — AI Recruiter</h2>
//               <p className="text-sm text-gray-600 mb-3">AI-driven interview (voice + transcriber). Click start to begin.</p>

//               <div className="flex gap-3">
//                 <button
//                   className="px-6 py-3 bg-indigo-700 text-white rounded-lg shadow-md"
//                   onClick={() => {
//                     if (!vapiRef.current) {
//                       toast.error("VAPI not configured (NEXT_PUBLIC_VAPI_PUBLIC_KEY)");
//                       return;
//                     }
//                     startCall();
//                     toast.success("Interview started");
//                   }}
//                 >
//                   Start Interview
//                 </button>

//                 <button
//                   className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md"
//                   onClick={() => {
//                     try {
//                       camStreamRef.current?.getTracks()?.forEach((t) => t.stop());
//                     } catch {}
//                     vapiRef.current?.stop?.();
//                     router.push(`/interview/${interviewInfo?.interviewData?.interview_id}/thankyou`);
//                   }}
//                 >
//                   End Session
//                 </button>
//               </div>
//             </div>
//           )}
//         </section>

//         {/* right: webcam preview only */}
//         <aside className="flex-[1] border-l bg-white p-4 flex flex-col items-center gap-4">
//           <Image src="/avataar.jpg" alt="avatar" width={section === 3 ? 120 : 60} height={section === 3 ? 120 : 60} className="rounded-full" />
//           <div className="w-full">
//             <div className="text-sm font-medium mb-2">Webcam Preview</div>
//             <div className="relative w-full bg-black rounded overflow-hidden" style={{ height: section === 3 ? 320 : 160 }}>
//               <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
//               <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
//             </div>
//           </div>
//           {warning && <div className="text-red-600 font-bold">{warning}</div>}
//           <div className="text-xs text-gray-500">Proctoring active — webcam only</div>
//         </aside>
//       </main>
//     </div>
//   );
// }

// /* --------------------------- End of File --------------------------- */














































//===============  Multiple round -> 4 ==================


















// "use client";

// /* =========================================================================
//    SELECTIQ — Full Interview Page (All integrated)
//    - Aptitude (MCQ)
//    - Computer Fundamentals (MCQ)
//    - Coding (Monaco editor, local JS runner, Judge0 for other langs)
//    - Proctoring (webcam + BlazeFace)
//    - VAPI (AI Recruiter interview) integration
//    - Sticky finish/submit buttons so nothing hides
//    - No page-level scrollbar (inner scroll areas only)
//    - Detailed run status / output / errors panel for coding
//    - Sequential Judge0 submissions with basic backoff to avoid 429
//    - Clear error messages for Unauthorized (401) and Too Many Requests (429)
//    -------------------------------------------------------------------------
//    NOTE:
//    - Replace environment variables in your .env.local:
//        NEXT_PUBLIC_JUDGE0_URL=https://judge0-ce.p.rapidapi.com
//        NEXT_PUBLIC_JUDGE0_KEY=<your-rapidapi-key>
//        NEXT_PUBLIC_VAPI_PUBLIC_KEY=<your-vapi-key> (optional)
//    - This file intentionally keeps function/variable names same as requested.
//    ========================================================================= */

// import React, {
//   useCallback,
//   useContext,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";
// import { InterviewDataContext } from "@/context/InterviewDataContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { toast } from "sonner";
// import * as blazeface from "@tensorflow-models/blazeface";
// import "@tensorflow/tfjs";
// import Vapi from "@vapi-ai/web";
// import Editor from "@monaco-editor/react";
// import {
//   AlertDialog,
//   AlertDialogTrigger,
//   AlertDialogContent,
//   AlertDialogFooter,
//   AlertDialogCancel,
//   AlertDialogAction,
// } from "@/components/ui/alert-dialog";
// import { APTITUDE_POOL_150, CF_POOL_150 } from "@/lib/questionPools";

// /* --------------------------- Helpers & Config --------------------------- */

// // time formatter: mm:ss
// const formatTime = (s) =>
//   `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(
//     2,
//     "0"
//   )}`;

// // pool se unique random questions pick karne wala helper
// function pickRandomUnique(pool, count) {
//   const arr = Array.isArray(pool) ? [...pool] : [];
//   const picked = [];
//   for (let i = 0; i < count && arr.length; i++) {
//     const idx = Math.floor(Math.random() * arr.length);
//     picked.push(arr.splice(idx, 1)[0]);
//   }
//   return picked;
// }

// /* --------------------------- Coding Problems --------------------------- */

// const CODING_PROBLEMS = [
//   {
//     id: "p1",
//     title: "Two Sum",
//     description:
//       "Given an array of integers nums and an integer target, return indices [i,j] of two numbers such that they add up to target.",
//     starter: `function twoSum(nums, target) {\n  // return [i, j]\n}`,
//     testCases: [
//       { input: "[2,7,11,15],9", expected: "[0,1]" },
//       { input: "[3,2,4],6", expected: "[1,2]" },
//       { input: "[3,3],6", expected: "[0,1]" },
//       { input: "[-1,-2,-3,-4,-5],-8", expected: "[2,4]" },
//       { input: "[0,4,3,0],0", expected: "[0,3]" },
//     ],
//   },
//   {
//     id: "p2",
//     title: "Reverse String",
//     description: "Return the reversed string.",
//     starter: `function reverseString(s) {\n  // return reversed string\n}`,
//     testCases: [
//       { input: "'hello'", expected: '"olleh"' },
//       { input: "'a'", expected: '"a"' },
//       { input: "''", expected: '""' },
//       { input: "'racecar'", expected: '"racecar"' },
//       { input: "'OpenAI'", expected: '"IAnepO"' },
//     ],
//   },
// ];

// const JUDGE0_LANGUAGE_IDS = {
//   javascript: 63, // Local runner is used for JS but we still set ID
//   python: 71,
//   cpp: 54,
//   java: 62,
//   sql: 82,
// };

// /* --------------------------- MCQ List (stable) --------------------------- */

// const MCQList = React.memo(function MCQList({ questions, answers, onSelect }) {
//   // inner area scrolls independently
//   return (
//     <div
//       id="mcq-scroll"
//       className="flex-1 overflow-auto pr-3"
//       style={{ maxHeight: "calc(100vh - 220px)", paddingBottom: 16 }}
//     >
//       {questions.map((q, i) => (
//         <div key={i} className="mb-4 p-3 border rounded bg-white shadow-sm">
//           <div className="font-semibold mb-2">Q{i + 1}. {q.q}</div>
//           <div className="grid grid-cols-2 gap-3">
//             {q.options.map((opt, oi) => {
//               const selected = answers[i] === oi;
//               return (
//                 <button
//                   key={oi}
//                   onClick={() => onSelect(i, oi)}
//                   className={`text-left px-3 py-2 rounded border ${selected ? "bg-indigo-600 text-white" : "bg-gray-50"}`}
//                 >
//                   {String.fromCharCode(65 + oi)}. {opt}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// });

// /* --------------------------- Main Component --------------------------- */

// export default function StartInterview() {
//   const { interviewInfo } = useContext(InterviewDataContext);
//   const router = useRouter();

//   // section: 0 = Aptitude, 1 = CF, 2 = Coding, 3 = Interview
//   const [section, setSection] = useState(0);

//   // Questions and answers (pick random unique from pool)
//   const [aptQuestions] = useState(() => pickRandomUnique(APTITUDE_POOL_150, 30));
//   const [cfQuestions] = useState(() => pickRandomUnique(CF_POOL_150, 20));
//   const [aptAnswers, setAptAnswers] = useState({});
//   const [cfAnswers, setCfAnswers] = useState({});

//   // timers
//   const [aptTime, setAptTime] = useState(40 * 60);
//   const [cfTime, setCfTime] = useState(15 * 60);
//   const [codingTime, setCodingTime] = useState(45 * 60);

//   // coding
//   const [lang, setLang] = useState("javascript");
//   const [code, setCode] = useState(() => {
//     const init = {};
//     CODING_PROBLEMS.forEach((p) => (init[p.id] = p.starter));
//     return init;
//   });
//   const [results, setResults] = useState({}); // per-problem results (local & remote)
//   const [runStatus, setRunStatus] = useState({}); // status text per problem

//   // for coding UI
//   const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
//   const [outputPanelOpen, setOutputPanelOpen] = useState(true);

//   // proctoring
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const camStreamRef = useRef(null);
//   const faceTimeoutRef = useRef(null);

//   // misc
//   const [penalty, setPenalty] = useState(0);
//   const [warning, setWarning] = useState("");
//   const [fullscreenLost, setFullscreenLost] = useState(false);

//   // VAPI instance (if present)
//   const vapiRef = useRef(null);
//   if (!vapiRef.current && typeof window !== "undefined" && process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY) {
//     // lazy init
//     try {
//       vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
//     } catch (err) {
//       console.warn("Vapi init error", err);
//     }
//   }

//   /* --------------------------- Fullscreen + protections --------------------------- */

//   useEffect(() => {
//     // Best-effort fullscreen: try to keep user in fullscreen (if allowed)
//     const id = setInterval(() => {
//       if (!document.fullscreenElement) {
//         document.documentElement.requestFullscreen().catch(() => {});
//       }
//     }, 2000);
//     return () => clearInterval(id);
//   }, []);

//   useEffect(() => {
//     // keyboard and visibility protections
//     const onKeyDown = (e) => {
//       const key = (e.key || "").toLowerCase();
//       const ctrlLike = e.ctrlKey || e.metaKey;
//       if (
//         key === "escape" ||
//         key === "f11" ||
//         key === "f12" ||
//         (ctrlLike && ["c", "v", "a", "u", "s"].includes(key)) ||
//         (e.altKey && key === "tab") ||
//         key === "printscreen"
//       ) {
//         e.preventDefault();
//         e.stopPropagation();
//         addPenalty("⚠️ Forbidden key");
//       }
//     };

//     const onVisibility = () => {
//       if (document.hidden) addPenalty("⚠️ Tab switch detected");
//     };

//     const onFsChange = () => {
//       if (!document.fullscreenElement) {
//         setFullscreenLost(true);
//         addPenalty("⚠️ Fullscreen exited");
//       } else {
//         setFullscreenLost(false);
//       }
//     };

//     const preventContext = (e) => e.preventDefault();

//     document.addEventListener("keydown", onKeyDown, true);
//     document.addEventListener("visibilitychange", onVisibility);
//     document.addEventListener("fullscreenchange", onFsChange);
//     document.addEventListener("contextmenu", preventContext);
//     const prevSelect = document.body.style.userSelect;
//     document.body.style.userSelect = "none"; // disable selection

//     return () => {
//       document.removeEventListener("keydown", onKeyDown, true);
//       document.removeEventListener("visibilitychange", onVisibility);
//       document.removeEventListener("fullscreenchange", onFsChange);
//       document.removeEventListener("contextmenu", preventContext);
//       document.body.style.userSelect = prevSelect || "";
//     };
//   }, []);

//   /* --------------------------- Camera + BlazeFace proctoring --------------------------- */

//   useEffect(() => {
//     let rafId = null;
//     let mounted = true;

//     const init = async () => {
//       try {
//         const cam = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 }, audio: false });
//         camStreamRef.current = cam;
//         if (videoRef.current) videoRef.current.srcObject = cam;

//         const model = await blazeface.load();

//         const detectLoop = async () => {
//           if (!mounted) return;
//           try {
//             const v = videoRef.current;
//             const c = canvasRef.current;
//             if (v && c && model && v.videoWidth && v.videoHeight) {
//               c.width = v.videoWidth;
//               c.height = v.videoHeight;
//               const ctx = c.getContext("2d");
//               ctx.clearRect(0, 0, c.width, c.height);

//               const preds = await model.estimateFaces(v, false);

//               if (preds.length === 1) {
//                 preds.forEach((p) => {
//                   const [x1, y1] = p.topLeft;
//                   const [x2, y2] = p.bottomRight;
//                   ctx.strokeStyle = "lime";
//                   ctx.lineWidth = 3;
//                   ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
//                 });
//                 if (faceTimeoutRef.current) {
//                   clearTimeout(faceTimeoutRef.current);
//                   faceTimeoutRef.current = null;
//                 }
//               } else {
//                 if (!faceTimeoutRef.current) {
//                   faceTimeoutRef.current = setTimeout(() => {
//                     addPenalty(preds.length === 0 ? "⚠️ No face detected" : "⚠️ Multiple faces detected");
//                     faceTimeoutRef.current = null;
//                   }, 1200);
//                 }
//               }
//             }
//           } catch (err) {
//             console.warn("face detect error", err);
//           }
//           rafId = requestAnimationFrame(detectLoop);
//         };
//         detectLoop();
//       } catch (err) {
//         console.warn("camera access error", err);
//         addPenalty("⚠️ Camera access error");
//       }
//     };

//     init();

//     return () => {
//       mounted = false;
//       if (rafId) cancelAnimationFrame(rafId);
//       try {
//         camStreamRef.current?.getTracks()?.forEach((t) => t.stop());
//       } catch {}
//       if (faceTimeoutRef.current) {
//         clearTimeout(faceTimeoutRef.current);
//         faceTimeoutRef.current = null;
//       }
//     };
//   }, []);

//   /* --------------------------- Timers per section --------------------------- */

//   useEffect(() => {
//     let timer = null;
//     if (section === 0) timer = setInterval(() => setAptTime((s) => Math.max(0, s - 1)), 1000);
//     if (section === 1) timer = setInterval(() => setCfTime((s) => Math.max(0, s - 1)), 1000);
//     if (section === 2) timer = setInterval(() => setCodingTime((s) => Math.max(0, s - 1)), 1000);
//     return () => clearInterval(timer);
//   }, [section]);

//   /* --------------------------- Penalty helper --------------------------- */

//   const addPenalty = useCallback(
//     (msg) => {
//       setPenalty((p) => {
//         const n = p + 1;
//         setWarning(msg);
//         toast.error(msg);
//         if (n >= 7) {
//           // too many penalties -> redirect to sorry
//           try {
//             camStreamRef.current?.getTracks()?.forEach((t) => t.stop());
//           } catch {}
//           setTimeout(() => router.push(`/interview/${interviewInfo?.interviewData?.interview_id}/sorry`), 700);
//         }
//         setTimeout(() => setWarning(""), 3000);
//         return n;
//       });
//     },
//     [interviewInfo?.interviewData?.interview_id, router]
//   );

//   /* --------------------------- MCQ select handlers (stable) --------------------------- */

//   const handleAptSelect = useCallback((index, optionIndex) => {
//     setAptAnswers((prev) => ({ ...prev, [index]: optionIndex }));
//   }, []);

//   const handleCFSelect = useCallback((index, optionIndex) => {
//     setCfAnswers((prev) => ({ ...prev, [index]: optionIndex }));
//   }, []);

//   /* --------------------------- Scores & pass checks --------------------------- */

//   const aptScore = useMemo(() => aptQuestions.reduce((acc, q, i) => (aptAnswers[i] === q.a ? acc + 1 : acc), 0), [aptAnswers, aptQuestions]);
//   const aptNeeded = Math.ceil(0.1 * aptQuestions.length);

//   const cfScore = useMemo(() => cfQuestions.reduce((acc, q, i) => (cfAnswers[i] === q.a ? acc + 1 : acc), 0), [cfAnswers, cfQuestions]);
//   const cfNeeded = Math.ceil(0.0 * cfQuestions.length);

//   /* --------------------------- Coding: local JS runner & Judge0 --------------------------- */

//   // Local JS runner (safe-ish): uses Function constructor to return the function; catches runtime errors
//   const runLocalJs = useCallback(async (problem) => {
//     setRunStatus((s) => ({ ...s, [problem.id]: "Running locally..." }));
//     try {
//       const fnName = problem.id === "p1" ? "twoSum" : "reverseString";

//       // Async Function generator
//       const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
//       const harness = `${code[problem.id]}; return ${fnName};`;
//       const fn = await new AsyncFunction(harness)();

//       const details = problem.testCases.map((tc) => {
//         try {
//           if (problem.id === "p1") {
//             const arr = JSON.parse(tc.input.split(",")[0]);
//             const target = Number(tc.input.split(",")[1]);
//             const out = typeof fn === "function" ? fn(arr, target) : null;
//             return { input: tc.input, expected: tc.expected, output: JSON.stringify(out), pass: JSON.stringify(out) === tc.expected };
//           } else {
//             const s = eval(tc.input);
//             const out = typeof fn === "function" ? fn(s) : null;
//             return { input: tc.input, expected: tc.expected, output: JSON.stringify(out), pass: JSON.stringify(out) === tc.expected };
//           }
//         } catch (err) {
//           return { input: tc.input, expected: tc.expected, output: "Error", pass: false, error: String(err) };
//         }
//       });

//       const passed = details.filter((d) => d.pass).length;
//       setResults((r) => ({ ...r, [problem.id]: { passed, total: details.length, details } }));
//       setRunStatus((s) => ({ ...s, [problem.id]: `Done — ${passed}/${details.length} passed` }));
//       toast.success(`Local run: ${passed}/${details.length} passed`);
//     } catch (err) {
//       console.error("local run err", err);
//       setResults((r) => ({ ...r, [problem.id]: { error: String(err) } }));
//       setRunStatus((s) => ({ ...s, [problem.id]: "Runtime error" }));
//       toast.error("Runtime error during local run");
//     }
//   }, [code]);

//   // Helper: sequentially submit each testcase to Judge0 BUT with backoff and sensible rate limiting.
//   // RapidAPI Judge0 has rate limits; earlier we used Promise.all which fires many requests at once -> 429.
//   // Here we send requests sequentially, catch 429 and retry with exponential backoff (simple).
//   const submitToJudge0Sequential = useCallback(async (problem) => {
//     const JUDGE0_URL = process.env.NEXT_PUBLIC_JUDGE0_URL;
//     const JUDGE0_KEY = process.env.NEXT_PUBLIC_JUDGE0_KEY;
//     if (!JUDGE0_URL) {
//       toast.error("Judge0 URL not configured (NEXT_PUBLIC_JUDGE0_URL)");
//       setRunStatus((s) => ({ ...s, [problem.id]: "Judge0 not configured" }));
//       return;
//     }
//     if (!JUDGE0_KEY) {
//       toast.error("Judge0 key not configured (NEXT_PUBLIC_JUDGE0_KEY)");
//       setRunStatus((s) => ({ ...s, [problem.id]: "Judge0 key missing" }));
//       return;
//     }

//     setRunStatus((s) => ({ ...s, [problem.id]: "Submitting to Judge0 (sequential)..." }));

//     const remoteResults = [];
//     // we'll submit one request per testcase, but sequentially, with small gap and retry on 429
//     for (let i = 0; i < problem.testCases.length; i++) {
//       const tc = problem.testCases[i];
//       let attempt = 0;
//       const maxAttempts = 5;
//       let done = false;
//       let lastErr = null;

//       while (!done && attempt < maxAttempts) {
//         attempt += 1;
//         try {
//           // payload: send entire source, the chosen language id, and the testcase input in stdin.
//           const payload = {
//             source_code: code[problem.id],
//             language_id: JUDGE0_LANGUAGE_IDS[lang] || JUDGE0_LANGUAGE_IDS.python,
//             stdin: tc.input,
//             // optional: cpu_time_limit, memory_limit etc can be passed depending on Judge0 setup
//           };

//           const resp = await fetch(`${JUDGE0_URL}/submissions?base64_encoded=false&wait=true`, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               // For RapidAPI Judge0 CE endpoint we must pass x-rapidapi-key and x-rapidapi-host
//               ...(JUDGE0_KEY ? { "x-rapidapi-key": JUDGE0_KEY } : {}),
//               ...(JUDGE0_URL.includes("rapidapi") ? { "x-rapidapi-host": "judge0-ce.p.rapidapi.com" } : {}),
//             },
//             body: JSON.stringify(payload),
//           });

//           // analyze status
//           if (resp.status === 401) {
//             // unauthorized -> probably wrong key
//             const errText = `Unauthorized: check NEXT_PUBLIC_JUDGE0_KEY`;
//             lastErr = new Error(errText);
//             done = true;
//             remoteResults.push({ error: errText });
//             setRunStatus((s) => ({ ...s, [problem.id]: `Judge0 error: Unauthorized` }));
//             toast.error(`Judge0 submission error: Unauthorized: check NEXT_PUBLIC_JUDGE0_KEY`);
//             break;
//           }

//           if (resp.status === 429) {
//             // Too Many Requests; backoff
//             lastErr = new Error("429 Too Many Requests");
//             const backoffMs = 500 * attempt * attempt; // simple quadratic backoff
//             await new Promise((res) => setTimeout(res, backoffMs));
//             continue; // retry
//           }

//           // parse result JSON
//           const data = await resp.json();

//           // normalized response - could contain compile output, stdout, stderr etc
//           remoteResults.push(data);
//           done = true;
//         } catch (err) {
//           lastErr = err;
//           // network or other error: retry after delay
//           const backoffMs = 300 * attempt;
//           await new Promise((res) => setTimeout(res, backoffMs));
//         }
//       } // end retry loop

//       // small delay between testcases to avoid bursts
//       await new Promise((res) => setTimeout(res, 200));
//     } // end for each testcase

//     // set results
//     setResults((r) => ({ ...r, [problem.id]: { remote: remoteResults } }));
//     setRunStatus((s) => ({ ...s, [problem.id]: `Judge0 finished` }));
//     toast.success(`Judge0: submissions finished for ${problem.id}`);
//   }, [code, lang]);

//   // Simple wrapper that decides local vs judge0
//   const runJudge0 = useCallback(async (problem) => {
//     // we submit sequentially
//     await submitToJudge0Sequential(problem);
//   }, [submitToJudge0Sequential]);

//   // Determine if problem is solved (either local passed >0 OR judge0 remote outputs match any expected)
//   const isProblemSolved = useCallback(
//     (problem) => {
//       const r = results[problem.id];
//       if (!r) return false;
//       if (r.passed !== undefined) return r.passed > 0;

//       if (Array.isArray(r.remote)) {
//         return r.remote.some((o, idx) => {
//           let stdout = (o.stdout ?? "").trim();
//           let expected = (problem.testCases[idx]?.expected ?? "").trim();

//           // normalize whitespace & quotes for fair comparison
//           stdout = stdout.replace(/\s+/g, "");
//           expected = expected.replace(/\s+/g, "").replace(/^"|"$/g, "");

//           if (!stdout) return false;

//           try {
//             const parsed = JSON.parse(stdout);
//             return JSON.stringify(parsed).replace(/\s+/g, "") === expected;
//           } catch {
//             return stdout === expected;
//           }
//         });
//       }
//       return false;
//     },
//     [results]
//   );




//   const anyProblemSolved = useCallback(() => CODING_PROBLEMS.some((p) => isProblemSolved(p)), [isProblemSolved]);

//   /* --------------------------- Interview startCall (VAPI) --------------------------- */

//   const startCall = useCallback(() => {
//     const vapi = vapiRef.current;
//     const d = interviewInfo?.interviewData ?? interviewInfo;

//     let raw =
//       d?.questionList ??
//       d?.questions ??
//       d?.questionlist ??
//       d?.questionsList ??
//       [];

//     if (typeof raw === "string") {
//       try {
//         raw = JSON.parse(raw);
//       } catch {
//         raw = [];
//       }
//     }

//     let questionList = "";
//     (Array.isArray(raw) ? raw : []).forEach((item) => {
//       const q = typeof item === "string" ? item : item?.question;
//       if (q && q.trim() !== "") {
//         questionList += (questionList ? ", " : "") + q.trim();
//       }
//     });

//     const assistantOptions = {
//       name: "AI Recruiter",
//       firstMessage: `Hi ${interviewInfo?.userName}, how are you? Ready for your interview on ${interviewInfo?.interviewData?.jobPosition}`,
//       transcriber: {
//         provider: "deepgram",
//         model: "nova-2",
//         language: "en-US",
//       },
//       voice: {
//         provider: "playht",
//         voiceId: "jennifer",
//       },
//       model: {
//         provider: "openai",
//         model: "gpt-4",
//         messages: [
//           {
//             role: "system",
//             content: `
// You are an AI voice assistant conducting interviews developed by Select IQ under Suyash Gupta.
// Ask candidates the provided interview questions one at a time.
// Encourage them, give hints if they struggle, and provide short feedback.
// Wrap up positively after 5–7 questions.
// ✅ Be friendly, engaging, and witty 🎤
// ✅ Keep responses short & natural
// ✅ Never share the Final Marks or Points to the candidate
// ✅ Stay focused on jobDescription and questionList.

// Questions: ${questionList}
// `.trim(),
//           },
//         ],
//       },
//     };

//     try {
//       if (!vapi) throw new Error("VAPI not configured");
//       vapi.start(assistantOptions);
//     } catch (err) {
//       console.warn("vapi.start error", err);
//       toast.error("VAPI error: " + (err?.message ?? "unknown"));
//     }
//   }, [interviewInfo]);

//   // Auto start the call when interview section opens
//   useEffect(() => {
//     if (section === 3 && interviewInfo) {
//       try {
//         startCall();
//       } catch (err) {
//         console.warn("startCall error", err);
//       }
//     }
//   }, [section, interviewInfo, startCall]);

//   /* --------------------------- Helpers to stop streams & redirect --------------------------- */

//   const stopAllStreams = useCallback(() => {
//     try {
//       camStreamRef.current?.getTracks()?.forEach((t) => t.stop());
//     } catch {}
//   }, []);

//   const redirectnotqualify = useCallback(() => {
//     stopAllStreams();
//     setTimeout(() => router.push(`/interview/${interviewInfo?.interviewData?.interview_id}/notqualify`), 600);
//   }, [interviewInfo, router, stopAllStreams]);

//   /* --------------------------- Render --------------------------- */

//   return (
//     <div className="h-screen w-screen flex flex-col bg-gray-100 overflow-hidden">
//       {/* minimal header bar (kept simple to avoid layout shifts) */}
//       <header className="p-4 bg-white border-b flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <div className="text-2xl font-bold text-indigo-700">SELECTIQ</div>
//           <div className="text-sm text-gray-600">Proctored Multi-stage Assessment</div>
//         </div>
//         <div className="flex items-center gap-6">
//           <div className="text-red-600 font-bold">Penalty: {penalty}</div>
//           <div className="font-mono">
//             {section === 0 ? formatTime(aptTime) : section === 1 ? formatTime(cfTime) : section === 2 ? formatTime(codingTime) : ""}
//           </div>
//         </div>
//       </header>

//       <main className="flex flex-1 overflow-hidden">
//         {/* left main content; inner area scrolls */}
//         <section className="flex-[2] p-6 overflow-hidden relative flex flex-col">
//           {/* overlay if fullscreen lost */}
//           {fullscreenLost && (
//             <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95">
//               <div className="text-center">
//                 <div className="text-white font-bold mb-4">⚠ Fullscreen required</div>
//                 <button className="px-4 py-2 bg-indigo-600 text-white rounded" onClick={() => document.documentElement.requestFullscreen().catch(() => {})}>
//                   Re-enter Fullscreen
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* top info (candidate) */}
//           <div className="mb-3 flex items-center justify-between">
//             <div className="text-sm text-gray-600">Candidate: {interviewInfo?.userName ?? "Unknown"}</div>
//             <div className="text-sm text-gray-500">Interview: {interviewInfo?.interviewData?.jobPosition ?? "—"}</div>
//           </div>

//           {/* scrollable content */}
//           <div className="flex-1 overflow-auto pb-40 pr-4">
//             {/* Aptitude section */}
//             {section === 0 && (
//               <>
//                 <div className="flex items-center justify-between mb-4">
//                   <h1 className="text-xl font-bold">Aptitude — 30 MCQs (40 minutes)</h1>
//                   <div className="text-red-600 font-mono">{formatTime(aptTime)}</div>
//                 </div>

//                 <MCQList questions={aptQuestions} answers={aptAnswers} onSelect={handleAptSelect} />
//               </>
//             )}

//             {/* CF section */}
//             {section === 1 && (
//               <>
//                 <div className="flex items-center justify-between mb-4">
//                   <h1 className="text-xl font-bold">Computer Fundamentals — 20 MCQs (15 minutes)</h1>
//                   <div className="text-red-600 font-mono">{formatTime(cfTime)}</div>
//                 </div>

//                 <MCQList questions={cfQuestions} answers={cfAnswers} onSelect={handleCFSelect} />
//               </>
//             )}

//             {/* Coding section */}
//             {section === 2 && (
//               <>
//                 <div className="flex items-center justify-between mb-4">
//                   <h1 className="text-xl font-bold">Coding Round — {CODING_PROBLEMS.length} Problems ({Math.floor(codingTime/60)} minutes)</h1>
//                   <div className="text-red-600 font-mono">{formatTime(codingTime)}</div>
//                 </div>

//                 {/* language select */}
//                 <div className="mb-4 flex items-center gap-3">
//                   <label className="mr-2 font-medium">Language:</label>
//                   <select value={lang} onChange={(e) => setLang(e.target.value)} className="border px-2 py-1 rounded">
//                     <option value="javascript">JavaScript</option>
//                     <option value="python">Python</option>
//                     <option value="cpp">C++</option>
//                     <option value="java">Java</option>
//                     <option value="sql">SQL</option>
//                   </select>

//                   <div className="ml-auto flex items-center gap-3">
//                     <button className="px-3 py-2 bg-gray-200 rounded" onClick={() => setOutputPanelOpen((v) => !v)}>
//                       {outputPanelOpen ? "Hide Output" : "Show Output"}
//                     </button>
//                     <div className="text-sm text-gray-600">Problem {currentProblemIndex + 1}/{CODING_PROBLEMS.length}</div>
//                   </div>
//                 </div>

//                 {/* problems list: show one at a time */}
//                 {CODING_PROBLEMS.map((p, idx) => {
//                   const visible = idx === currentProblemIndex;
//                   return (
//                     <div key={p.id} className={`mb-6 p-4 border rounded bg-white shadow-sm ${visible ? "" : "hidden"}`}>
//                       <div className="flex justify-between items-start mb-3">
//                         <div>
//                           <div className="font-bold">{p.title}</div>
//                           <div className="text-sm text-gray-600">{p.description}</div>
//                         </div>
//                         <div className="text-xs text-gray-500">Tests: {p.testCases.length}</div>
//                       </div>

//                       <div className="bg-gray-50 p-3 rounded mb-3 text-sm">
//                         <div className="font-semibold mb-2">📌 Testcases:</div>
//                         {p.testCases.map((tc, tidx) => (
//                           <div key={tidx} className="mb-1">
//                             <span className="font-mono text-blue-700">Input:</span> {tc.input}
//                             <span className="font-mono text-green-700 ml-3">Expected:</span> {tc.expected}
//                           </div>
//                         ))}
//                       </div>

//                       <div className="rounded overflow-hidden border">
//                         <Editor
//                           height="360px"
//                           defaultLanguage="javascript"
//                           language={lang === "javascript" ? "javascript" : lang}
//                           theme="vs-dark"
//                           value={code[p.id]}
//                           onChange={(val) => setCode((c) => ({ ...c, [p.id]: val || "" }))}
//                           options={{
//                             fontSize: 13,
//                             minimap: { enabled: false },
//                             lineNumbers: "on",
//                             automaticLayout: true,
//                             scrollBeyondLastLine: false,
//                           }}
//                         />
//                       </div>

//                       {/* action buttons */}
//                       <div className="mt-3 flex gap-2 items-center flex-wrap">
//                         {lang === "javascript" ? (
//                           <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md" onClick={() => runLocalJs(p)}>
//                             ▶ Run Locally
//                           </button>
//                         ) : (
//                           <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md" onClick={() => runJudge0(p)}>
//                             🚀 Submit to Judge0
//                           </button>
//                         )}

//                         <button className="px-3 py-2 bg-gray-200 rounded" onClick={() => setCode((c) => ({ ...c, [p.id]: "" }))}>
//                           Clear
//                         </button>

//                         <button className="px-3 py-2 bg-yellow-300 rounded" onClick={() => setCode((c) => ({ ...c, [p.id]: p.starter }))}>
//                           Reset Starter
//                         </button>

//                         <button
//                           className="px-3 py-2 bg-gray-200 rounded"
//                           onClick={() => {
//                             const blob = new Blob([code[p.id]], { type: "text/plain" });
//                             const u = URL.createObjectURL(blob);
//                             const a = document.createElement("a");
//                             a.href = u;
//                             a.download = `${p.id}_${lang}.txt`;
//                             a.click();
//                           }}
//                         >
//                           Download
//                         </button>

//                         <div className="ml-auto text-sm font-medium">
//                           {runStatus[p.id] ? <span className="text-gray-700">{runStatus[p.id]}</span> : null}
//                           {results[p.id] ? (
//                             results[p.id].error ? (
//                               <span className="text-red-600 ml-3">Error</span>
//                             ) : results[p.id].passed !== undefined ? (
//                               <span className="text-green-600 ml-3">✅ {results[p.id].passed}/{results[p.id].total} passed</span>
//                             ) : results[p.id].remote ? (
//                               <span className="text-blue-600 ml-3">Judge0 results received</span>
//                             ) : null
//                           ) : null}
//                         </div>
//                       </div>

//                       {/* show local run details */}
//                       {results[p.id]?.details && (
//                         <div className="mt-3 bg-gray-50 p-3 rounded text-sm">
//                           {results[p.id].details.map((d, didx) => (
//                             <div key={didx} className={d.pass ? "text-green-600" : "text-red-600"}>
//                               TC{didx + 1}: Expected {d.expected} • Got {d.output} {d.error ? `• Error: ${d.error}` : ""}
//                             </div>
//                           ))}
//                         </div>
//                       )}

//                       {/* judge0 remote outputs */}
//                       {results[p.id]?.remote && (
//                         <div className="mt-3 bg-gray-50 p-3 rounded text-sm">
//                           <div className="text-sm text-gray-700">Judge0 results returned — see details below.</div>
//                           {results[p.id].remote.map((r, i) => (
//                             <div key={i} className="mt-2">
//                               <div className="font-medium">TC{i + 1} - {r?.status?.description ?? "Status unknown"}</div>
//                               <div className="text-xs text-gray-700">Stdout: {String(r?.stdout ?? "<empty>")}</div>
//                               {r?.stderr && <div className="text-xs text-red-600">Stderr: {r.stderr}</div>}
//                               {r?.compile_output && <div className="text-xs text-orange-600">Compile: {r.compile_output}</div>}
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}

//                 {/* problem navigation */}
//                 <div className="mt-2 flex items-center justify-between">
//                   <button
//                     className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
//                     onClick={() => setCurrentProblemIndex((i) => Math.max(0, i - 1))}
//                     disabled={currentProblemIndex === 0}
//                   >
//                     ← Prev
//                   </button>

//                   <div className="text-sm text-gray-600">Problem {currentProblemIndex + 1} of {CODING_PROBLEMS.length}</div>

//                   <button
//                     className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
//                     onClick={() => setCurrentProblemIndex((i) => Math.min(CODING_PROBLEMS.length - 1, i + 1))}
//                     disabled={currentProblemIndex === CODING_PROBLEMS.length - 1}
//                   >
//                     Next →
//                   </button>
//                 </div>

//                 {/* output panel */}
//                 {outputPanelOpen && (
//                   <div className="mt-4">
//                     <div className="font-semibold mb-2">Run Output & Status</div>
//                     <div className="grid grid-cols-2 gap-4">
//                       {CODING_PROBLEMS.map((p) => (
//                         <div key={p.id} className="p-3 border rounded bg-white">
//                           <div className="font-medium mb-1">{p.title}</div>
//                           <div className="text-xs text-gray-600 mb-2">Status: {runStatus[p.id] ?? "idle"}</div>

//                           {results[p.id]?.error && <div className="text-red-600 mb-1">Error: {results[p.id].error}</div>}

//                           {results[p.id]?.details && (
//                             <div className="mb-2">
//                               {results[p.id].details.map((d, idx) => (
//                                 <div key={idx} className={d.pass ? "text-green-600" : "text-red-600"}>
//                                   TC{idx + 1}: {d.output} — {d.pass ? "PASS" : "FAIL"}
//                                 </div>
//                               ))}
//                             </div>
//                           )}

//                           {results[p.id]?.remote && (
//                             <div>
//                               {results[p.id].remote.map((r, i) => (
//                                 <div key={i} className="text-xs text-gray-700 mb-1">
//                                   TC{i + 1}: {r?.status?.description ?? "?"} — Stdout: {String(r?.stdout ?? "<empty>")}
//                                 </div>
//                               ))}
//                             </div>
//                           )}

//                           {!results[p.id] && <div className="text-xs text-gray-500">No runs yet.</div>}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* finish coding button (in content area as well as sticky) */}
//                 <div className="mt-6">
//                   <AlertDialog>
//                     <AlertDialogTrigger asChild>
//                       <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg text-lg shadow-xl">
//                         ✅ Finish Coding
//                       </button>
//                     </AlertDialogTrigger>
//                     <AlertDialogContent>
//                       <p>Proceed to interview? (You must solve at least one problem — local or Judge0)</p>
//                       <AlertDialogFooter>
//                         <AlertDialogCancel>Stay</AlertDialogCancel>
//                         <AlertDialogAction
//                           onClick={() => {
//                             const solved = anyProblemSolved();
//                             if (!solved) {
//                               toast.error("No problem solved. Redirecting to Thankyou.");
//                               redirectnotqualify();
//                             } else {
//                               setSection(3);
//                             }
//                           }}
//                         >
//                           Confirm
//                         </AlertDialogAction>
//                       </AlertDialogFooter>
//                     </AlertDialogContent>
//                   </AlertDialog>
//                 </div>
//               </>
//             )}

//             {/* Interview section */}
//             {section === 3 && (
//               <div className="p-4 bg-white rounded">
//                 <h2 className="text-lg font-bold mb-3">Interview — AI Recruiter</h2>
//                 <p className="text-sm text-gray-600 mb-3">AI-driven interview (voice + transcriber). Click start to begin.</p>

//                 <div className="flex gap-3">
//                   <button
//                     className="px-6 py-3 bg-indigo-700 text-white rounded-lg shadow-md"
//                     onClick={() => {
//                       if (!vapiRef.current) {
//                         toast.error("VAPI not configured (NEXT_PUBLIC_VAPI_PUBLIC_KEY)");
//                         return;
//                       }
//                       startCall();
//                       toast.success("Interview started");
//                     }}
//                   >
//                     Start Interview
//                   </button>

//                   <button
//                     className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md"
//                     onClick={() => {
//                       try {
//                         camStreamRef.current?.getTracks()?.forEach((t) => t.stop());
//                       } catch {}
//                       vapiRef.current?.stop?.();
//                       router.push(`/interview/${interviewInfo?.interviewData?.interview_id}/thankyou`);
//                     }}
//                   >
//                     End Session
//                   </button>
//                 </div>

//                 <div className="mt-4 text-sm text-gray-600">
//                   VAPI: {vapiRef.current ? "configured" : "not configured"} — {interviewInfo?.interviewData?.jobPosition ?? ""}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* sticky bottom area - keeps finish buttons visible always */}
//           <div className="absolute left-0 right-0 bottom-4 px-6">
//             <div className="max-w-6xl mx-auto flex items-center gap-4">
//               {section === 0 && (
//                 <div className="flex-1 flex items-center justify-between bg-white p-3 rounded shadow">
//                   <div>
//                     <button
//                       className="bg-green-700 text-white px-4 py-2 rounded"
//                       onClick={() => {
//                         if (aptScore < aptNeeded) {
//                           toast.error(`Failed Aptitude: ${aptScore}/${aptQuestions.length}`);
//                           redirectnotqualify();
//                         } else {
//                           setSection(1);
//                         }
//                       }}
//                     >
//                       ✅ Finish Aptitude
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {section === 1 && (
//                 <div className="flex-1 flex items-center justify-between bg-white p-3 rounded shadow">
//                   <div>
//                     <button
//                       className="bg-green-700 text-white px-4 py-2 rounded"
//                       onClick={() => {
//                         if (cfScore < cfNeeded) {
//                           toast.error(`Failed CF: ${cfScore}/${cfQuestions.length}`);
//                           redirectnotqualify();
//                         } else {
//                           setSection(2);
//                         }
//                       }}
//                     >
//                       ✅ Finish CF
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {section === 2 && (
//                 <div className="flex-1 flex items-center justify-between bg-white p-3 rounded shadow">
//                   <div className="text-sm">Solved: {CODING_PROBLEMS.reduce((acc,p)=> acc + (isProblemSolved(p)?1:0),0)}/{CODING_PROBLEMS.length}</div>
//                   <div className="flex items-center gap-2">
//                     <button className="px-3 py-2 bg-gray-200 rounded" onClick={() => setCurrentProblemIndex((i)=>Math.max(0,i-1))}>Prev</button>
//                     <button className="px-3 py-2 bg-gray-200 rounded" onClick={() => setCurrentProblemIndex((i)=>Math.min(CODING_PROBLEMS.length-1,i+1))}>Next</button>

//                     <AlertDialog>
//                       <AlertDialogTrigger asChild>
//                         <button className="bg-green-700 text-white px-5 py-2 rounded">✅ Finish Coding</button>
//                       </AlertDialogTrigger>
//                       <AlertDialogContent>
//                         <p>Proceed to interview? (You must solve at least one problem — local or Judge0)</p>
//                         <AlertDialogFooter>
//                           <AlertDialogCancel>Stay</AlertDialogCancel>
//                           <AlertDialogAction
//                             onClick={() => {
//                               const solved = anyProblemSolved();
//                               if (!solved) {
//                                 toast.error("No problem solved. Redirecting to Thankyou.");
//                                 redirectnotqualify();
//                               } else {
//                                 setSection(3);
//                               }
//                             }}
//                           >
//                             Confirm
//                           </AlertDialogAction>
//                         </AlertDialogFooter>
//                       </AlertDialogContent>
//                     </AlertDialog>
//                   </div>
//                 </div>
//               )}

//               {section === 3 && (
//                 <div className="flex-1 flex items-center justify-between bg-white p-3 rounded shadow">
//                   <div className="text-sm">Interview Section</div>
//                   <div>
//                     <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => {
//                       try{ camStreamRef.current?.getTracks()?.forEach((t) => t.stop()); }catch{}
//                       vapiRef.current?.stop?.();
//                       router.push(`/interview/${interviewInfo?.interviewData?.interview_id}/thankyou`);
//                     }}>
//                       End Session
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </section>

//         {/* right: webcam + status */}
//         <aside className="flex-[1] border-l bg-white p-4 flex flex-col items-center gap-4 overflow-auto">
//           <div className="flex flex-col items-center gap-1">
//             <div className="text-2xl font-bold text-indigo-700">SELECTIQ</div>
//             <div className="text-sm text-gray-600">Proctored Multi-stage Assessment</div>
//           </div>

//           <div className="flex items-center justify-between w-full">
//             <div className="text-red-600 font-bold">Penalty: {penalty}</div>
//             <div className="font-mono">
//               Time Left:{" "}
//               {section === 0
//                 ? formatTime(aptTime)
//                 : section === 1
//                 ? formatTime(cfTime)
//                 : section === 2
//                 ? formatTime(codingTime)
//                 : ""}
//             </div>
//           </div>

//           <Image src="/avataar.jpg" alt="avatar" width={100} height={100} className="rounded-full" />
//           <div className="w-full">
//             <div className="text-sm font-medium mb-2 text-center">Webcam Preview</div>

//             <div className="relative w-full bg-black rounded overflow-hidden" style={{ height: 240 }}>
//               <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
//               <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
//             </div>
//           </div>
//           {warning && <div className="text-red-600 font-bold">{warning}</div>}
//           <div className="text-xs text-gray-500">Proctoring active — webcam only</div>

//           <div className="w-full bg-gray-50 rounded p-3 text-xs">
//             <div>Penalty: {penalty}</div>
//             <div>Fullscreen: {!fullscreenLost ? "OK" : "Lost"}</div>
//             <div>Server: {vapiRef.current ? "Configured" : "Not configured"}</div>
//           </div>
//         </aside>
//       </main>
//     </div>
//   );
// }

// /* --------------------------- End of File --------------------------- */


































































































































































































































//===============  Multiple round -> 5 [FINAL] ==================





























"use client";

/* =========================================================================
   SELECTIQ — Full Interview Page (All integrated) — UPDATED
   Fixes included:
   - Judge0: sequential submits (no Promise.all), retry/backoff for 429
   - Judge0: better stdout normalization and pass-detection
   - Local JS runs detection unchanged
   - Unified "isProblemSolved" logic (local + remote)
   - UI status updates and notifications
   - Keeps variable/function names same as original
   - Added comments and safe guards
   -------------------------------------------------------------------------
   NOTE: Replace the env keys:
     NEXT_PUBLIC_JUDGE0_URL
     NEXT_PUBLIC_JUDGE0_KEY (optional)
   ========================================================================= */

import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { InterviewDataContext } from "@/context/InterviewDataContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";
import * as blazeface from "@tensorflow-models/blazeface";
import "@tensorflow/tfjs";
import Vapi from "@vapi-ai/web";
import Editor from "@monaco-editor/react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { APTITUDE_POOL_150, CF_POOL_150 } from "@/lib/questionPools";

/* --------------------------- Helpers & Config --------------------------- */

// time formatter: mm:ss
const formatTime = (s) =>
  `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(
    2,
    "0"
  )}`;

// pool se unique random questions pick karne wala helper
function pickRandomUnique(pool, count) {
  const arr = Array.isArray(pool) ? [...pool] : [];
  const picked = [];
  for (let i = 0; i < count && arr.length; i++) {
    const idx = Math.floor(Math.random() * arr.length);
    picked.push(arr.splice(idx, 1)[0]);
  }
  return picked;
}

/* --------------------------- Problems + mapping --------------------------- */

const CODING_PROBLEMS = [
  {
    id: "p1",
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices [i,j] of two numbers such that they add up to target.",
    starter: `function twoSum(nums, target) {\n  // return [i, j]\n}`,
    testCases: [
      { input: "[2,7,11,15],9", expected: "[0,1]" },
      { input: "[3,2,4],6", expected: "[1,2]" },
      { input: "[3,3],6", expected: "[0,1]" },
      { input: "[-1,-2,-3,-4,-5],-8", expected: "[2,4]" },
      { input: "[0,4,3,0],0", expected: "[0,3]" },
    ],
  },
  {
    id: "p2",
    title: "Reverse String",
    description: "Return the reversed string.",
    starter: `function reverseString(s) {\n  // return reversed string\n}`,
    testCases: [
      { input: "'hello'", expected: '"olleh"' },
      { input: "'a'", expected: '"a"' },
      { input: "''", expected: '""' },
      { input: "'racecar'", expected: '"racecar"' },
      { input: "'OpenAI'", expected: '"IAnepO"' },
    ],
  },
];

const JUDGE0_LANGUAGE_IDS = {
  javascript: 63,
  python: 71,
  cpp: 54,
  java: 62,
  sql: 82,
};

/* --------------------------- Small util functions --------------------------- */

/**
 * Normalize a judge stdout or expected string for comparison:
 * - Trim whitespace and newlines
 * - If string looks like a quoted JSON, parse and stringify for robust comparison
 * - Strip surrounding single/double quotes when necessary
 */
function normalizeForComparison(raw) {
  if (raw === null || raw === undefined) return "";
  let s = String(raw).trim();

  // If looks like JSON (starts with { [ or "), try parse
  try {
    if ((s.startsWith("{") && s.endsWith("}")) || (s.startsWith("[") && s.endsWith("]"))) {
      const parsed = JSON.parse(s);
      return JSON.stringify(parsed);
    }
  } catch (e) {
    // ignore
  }

  // remove surrounding quotes only if both ends are the same quote char
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    s = s.slice(1, -1);
  }

  // finally trim
  return s.trim();
}

/* --------------------------- MCQList component --------------------------- */

const MCQList = React.memo(function MCQList({ questions, answers, onSelect }) {
  return (
    <div
      id="mcq-scroll"
      className="flex-1 overflow-auto pr-3"
      style={{ maxHeight: "calc(100vh - 220px)", paddingBottom: 16 }}
    >
      {questions.map((q, i) => (
        <div key={i} className="mb-4 p-3 border rounded bg-white shadow-sm">
          <div className="font-semibold mb-2">Q{i + 1}. {q.q}</div>
          <div className="grid grid-cols-2 gap-3">
            {q.options.map((opt, oi) => {
              const selected = answers[i] === oi;
              return (
                <button
                  key={oi}
                  onClick={() => onSelect(i, oi)}
                  className={`text-left px-3 py-2 rounded border ${selected ? "bg-indigo-600 text-white" : "bg-gray-50"}`}
                >
                  {String.fromCharCode(65 + oi)}. {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
});

/* --------------------------- Main Component --------------------------- */

export default function StartInterview() {
  const { interviewInfo } = useContext(InterviewDataContext);
  const router = useRouter();

  // section: 0 = Aptitude, 1 = CF, 2 = Coding, 3 = Interview
  const [section, setSection] = useState(0);

  // MCQs
  const [aptQuestions] = useState(() => pickRandomUnique(APTITUDE_POOL_150, 30));
  const [cfQuestions] = useState(() => pickRandomUnique(CF_POOL_150, 20));
  const [aptAnswers, setAptAnswers] = useState({});
  const [cfAnswers, setCfAnswers] = useState({});

  // timers
  const [aptTime, setAptTime] = useState(45 * 60);
  const [cfTime, setCfTime] = useState(2 * 60);
  const [codingTime, setCodingTime] = useState(45 * 60);

  // coding pieces
  const [lang, setLang] = useState("javascript");
  const [code, setCode] = useState(() => {
    const init = {};
    CODING_PROBLEMS.forEach((p) => (init[p.id] = p.starter));
    return init;
  });
  // results structure:
  // results[problemId] = { passed, total, details }   // for local runs
  // results[problemId] = { remote: [ ...subs... ], remoteParsed: [ { stdout, status }, ... ] }
  const [results, setResults] = useState({});
  const [runStatus, setRunStatus] = useState({}); // e.g. { p1: "Running locally..." }

  // UI
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [outputPanelOpen, setOutputPanelOpen] = useState(true);

  // proctoring
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const camStreamRef = useRef(null);
  const faceTimeoutRef = useRef(null);

  // state
  const [penalty, setPenalty] = useState(0);
  const [warning, setWarning] = useState("");
  const [fullscreenLost, setFullscreenLost] = useState(false);

  // VAPI
  const vapiRef = useRef(null);
  if (!vapiRef.current && typeof window !== "undefined" && process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY) {
    vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
  }

  /* --------------------------- Fullscreen & protections --------------------------- */
  useEffect(() => {
    const id = setInterval(() => {
      if (!document.fullscreenElement) {
        // this may fail in dev (API requires user gesture) — that's expected
        document.documentElement.requestFullscreen().catch(() => {});
      }
    }, 1500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      const key = (e.key || "").toLowerCase();
      const ctrlLike = e.ctrlKey || e.metaKey;
      if (
        key === "escape" ||
        key === "f11" ||
        key === "f12" ||
        (ctrlLike && ["c", "v", "a", "u", "s"].includes(key)) ||
        (e.altKey && key === "tab") ||
        key === "printscreen"
      ) {
        e.preventDefault();
        e.stopPropagation();
        addPenalty("⚠️ Forbidden key");
      }
    };
    const onVisibility = () => {
      if (document.hidden) addPenalty("⚠️ Tab switch detected");
    };
    const onFsChange = () => {
      if (!document.fullscreenElement) {
        setFullscreenLost(true);
        addPenalty("⚠️ Fullscreen exited");
      } else {
        setFullscreenLost(false);
      }
    };
    const preventContext = (e) => e.preventDefault();

    document.addEventListener("keydown", onKeyDown, true);
    document.addEventListener("visibilitychange", onVisibility);
    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("contextmenu", preventContext);
    const prevSelect = document.body.style.userSelect;
    document.body.style.userSelect = "none";

    return () => {
      document.removeEventListener("keydown", onKeyDown, true);
      document.removeEventListener("visibilitychange", onVisibility);
      document.removeEventListener("fullscreenchange", onFsChange);
      document.removeEventListener("contextmenu", preventContext);
      document.body.style.userSelect = prevSelect || "";
    };
  }, []);

  /* --------------------------- Camera + BlazeFace --------------------------- */
  useEffect(() => {
    let rafId = null;
    let mounted = true;

    const init = async () => {
      try {
        const cam = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 }, audio: false });
        camStreamRef.current = cam;
        if (videoRef.current) videoRef.current.srcObject = cam;

        const model = await blazeface.load();

        const detectLoop = async () => {
          if (!mounted) return;
          try {
            const v = videoRef.current;
            const c = canvasRef.current;
            if (v && c && model && v.videoWidth && v.videoHeight) {
              c.width = v.videoWidth;
              c.height = v.videoHeight;
              const ctx = c.getContext("2d");
              ctx.clearRect(0, 0, c.width, c.height);

              const preds = await model.estimateFaces(v, false);

              if (preds.length === 1) {
                preds.forEach((p) => {
                  const [x1, y1] = p.topLeft;
                  const [x2, y2] = p.bottomRight;
                  ctx.strokeStyle = "lime";
                  ctx.lineWidth = 3;
                  ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
                });
                if (faceTimeoutRef.current) {
                  clearTimeout(faceTimeoutRef.current);
                  faceTimeoutRef.current = null;
                }
              } else {
                if (!faceTimeoutRef.current) {
                  faceTimeoutRef.current = setTimeout(() => {
                    addPenalty(preds.length === 0 ? "⚠️ No face detected" : "⚠️ Multiple faces detected");
                    faceTimeoutRef.current = null;
                  }, 1500);
                }
              }
            }
          } catch (err) {
            console.warn("face detect error", err);
          }
          rafId = requestAnimationFrame(detectLoop);
        };
        detectLoop();
      } catch (err) {
        console.warn("camera access error", err);
        addPenalty("⚠️ Camera access error");
      }
    };

    init();

    return () => {
      mounted = false;
      if (rafId) cancelAnimationFrame(rafId);
      try {
        camStreamRef.current?.getTracks()?.forEach((t) => t.stop());
      } catch {}
      if (faceTimeoutRef.current) {
        clearTimeout(faceTimeoutRef.current);
        faceTimeoutRef.current = null;
      }
    };
  }, []);

  /* --------------------------- Timers --------------------------- */
  useEffect(() => {
    let timer = null;
    if (section === 0) timer = setInterval(() => setAptTime((s) => Math.max(0, s - 1)), 1000);
    if (section === 1) timer = setInterval(() => setCfTime((s) => Math.max(0, s - 1)), 1000);
    if (section === 2) timer = setInterval(() => setCodingTime((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(timer);
  }, [section]);

  /* --------------------------- Penalty helper --------------------------- */
  const addPenalty = useCallback(
    (msg) => {
      setPenalty((p) => {
        const n = p + 1;
        setWarning(msg);
        toast.error(msg);
        if (n >= 7) {
          try {
            camStreamRef.current?.getTracks()?.forEach((t) => t.stop());
          } catch {}
          setTimeout(() => router.push(`/interview/${interviewInfo?.interviewData?.interview_id}/sorry`), 300);
        }
        setTimeout(() => setWarning(""), 2000);
        return n;
      });
    },
    [interviewInfo?.interviewData?.interview_id, router]
  );

  /* --------------------------- MCQ select handlers --------------------------- */
  const handleAptSelect = useCallback((index, optionIndex) => {
    setAptAnswers((prev) => ({ ...prev, [index]: optionIndex }));
  }, []);

  const handleCFSelect = useCallback((index, optionIndex) => {
    setCfAnswers((prev) => ({ ...prev, [index]: optionIndex }));
  }, []);

  /* --------------------------- Scores --------------------------- */
  const aptScore = useMemo(
    () => aptQuestions.reduce((acc, q, i) => (aptAnswers[i] === q.a ? acc + 1 : acc), 0),
    [aptAnswers, aptQuestions]
  );
  const aptNeeded = Math.ceil(0.1 * aptQuestions.length);

  const cfScore = useMemo(
    () => cfQuestions.reduce((acc, q, i) => (cfAnswers[i] === q.a ? acc + 1 : acc), 0),
    [cfAnswers, cfQuestions]
  );
  const cfNeeded = Math.ceil(0.0 * cfQuestions.length);

  /* --------------------------- Local JS runner --------------------------- */
  const runLocalJs = useCallback(
    async (problem) => {
      setRunStatus((s) => ({ ...s, [problem.id]: "Running locally..." }));
      try {
        const fnName = problem.id === "p1" ? "twoSum" : "reverseString";
        const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
        const harness = `${code[problem.id]}; return ${fnName};`;
        const fn = await new AsyncFunction(harness)();

        const details = problem.testCases.map((tc) => {
          try {
            if (problem.id === "p1") {
              const arr = JSON.parse(tc.input.split(",")[0]);
              const target = Number(tc.input.split(",")[1]);
              const out = typeof fn === "function" ? fn(arr, target) : null;
              const o = JSON.stringify(out);
              const pass = normalizeForComparison(o) === normalizeForComparison(tc.expected);
              return { input: tc.input, expected: tc.expected, output: o, pass };
            } else {
              const s = eval(tc.input); // s is primitive string expression
              const out = typeof fn === "function" ? fn(s) : null;
              const o = JSON.stringify(out);
              const pass = normalizeForComparison(o) === normalizeForComparison(tc.expected);
              return { input: tc.input, expected: tc.expected, output: o, pass };
            }
          } catch (err) {
            return { input: tc.input, expected: tc.expected, output: "Error", pass: false, error: String(err) };
          }
        });

        const passed = details.filter((d) => d.pass).length;
        setResults((r) => ({ ...r, [problem.id]: { passed, total: details.length, details } }));
        setRunStatus((s) => ({ ...s, [problem.id]: `Done — ${passed}/${details.length} passed (local)` }));
        toast.success(`Local run: ${passed}/${details.length} passed`);
      } catch (err) {
        console.error("local run err", err);
        setResults((r) => ({ ...r, [problem.id]: { error: String(err) } }));
        setRunStatus((s) => ({ ...s, [problem.id]: "Runtime error" }));
        toast.error("Runtime error during local run");
      }
    },
    [code]
  );

  /* --------------------------- Judge0 integration (SEQUENTIAL + retry/backoff) --------------------------- */

  // small delay helper
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  // Submit a single testcase to judge0 with retry/backoff
  const submitSingleTC = useCallback(
    async ({ JUDGE0_URL, JUDGE0_KEY, payload, attempt = 0 }) => {
      try {
        const resp = await fetch(`${JUDGE0_URL}/submissions?base64_encoded=false&wait=true`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(JUDGE0_KEY ? { "X-Auth-Token": JUDGE0_KEY } : {}),
          },
          body: JSON.stringify(payload),
        });

        const text = await resp.text();
        // try parse JSON safe
        let json = null;
        try {
          json = JSON.parse(text);
        } catch (e) {
          json = { raw: text, status: resp.status, ok: resp.ok };
        }

        if (!resp.ok) {
          // handle rate limiting (429) with retry/backoff
          if (resp.status === 429 && attempt < 3) {
            const backoff = 350 * Math.pow(2, attempt); // 350, 700, 1400 ms
            await sleep(backoff);
            return submitSingleTC({ JUDGE0_URL, JUDGE0_KEY, payload, attempt: attempt + 1 });
          } else {
            // return error object
            return { error: true, status: resp.status, body: json };
          }
        }

        return json;
      } catch (err) {
        if (attempt < 3) {
          await sleep(250 * (attempt + 1));
          return submitSingleTC({ JUDGE0_URL, JUDGE0_KEY, payload, attempt: attempt + 1 });
        }
        return { error: true, message: String(err) };
      }
    },
    []
  );

  // runJudge0: sequentially submit each testcase (helps avoid 429) and parse stdout
  const runJudge0 = useCallback(
    async (problem) => {
      const JUDGE0_URL = process.env.NEXT_PUBLIC_JUDGE0_URL;
      const JUDGE0_KEY = process.env.NEXT_PUBLIC_JUDGE0_KEY;

      if (!JUDGE0_URL) {
        toast.error("Compiler URL not configured (NEXT_PUBLIC_JUDGE0_URL)");
        setRunStatus((s) => ({ ...s, [problem.id]: "Compiler not configured" }));
        return;
      }

      setRunStatus((s) => ({ ...s, [problem.id]: "Submitting..." }));

      try {
        const remoteSubmissions = [];
        // submit sequentially
        for (let i = 0; i < problem.testCases.length; i++) {
          const tc = problem.testCases[i];
          const payload = {
            source_code: code[problem.id],
            language_id: JUDGE0_LANGUAGE_IDS[lang] || JUDGE0_LANGUAGE_IDS.python,
            stdin: tc.input,
          };

          const res = await submitSingleTC({ JUDGE0_URL, JUDGE0_KEY, payload });
          // record raw res
          remoteSubmissions.push(res);

          // if 401 -> unauthorized, stop further submissions
          if (res && res.status === 401) {
            setRunStatus((s) => ({ ...s, [problem.id]: "Compiler unauthorized" }));
            toast.error("Compiler unauthorized — check NEXT_PUBLIC_JUDGE0_KEY");
            setResults((r) => ({ ...r, [problem.id]: { error: `Unauthorized: check NEXT_PUBLIC_JUDGE0_KEY` } }));
            return;
          }

          // if returned an error-like object, still continue (we capture it)
          // small delay to avoid bursts
          await sleep(150);
        }

        // parse remote submissions to a common shape: { stdout, stderr, compile_output, status_id, status_description }
        const parsed = remoteSubmissions.map((r) => {
          if (!r) return { stdout: "", stderr: "", compile_output: "", status_id: 0, status: { description: "Unknown" }, raw: r };
          if (r.error) return { stdout: r.stdout ?? "", stderr: r.stderr ?? "", compile_output: r.compile_output ?? "", status: r.status ?? { description: "Error" }, raw: r };
          // Some judge servers put output in "stdout", others under "stdout" but nested; ensure safe
          const stdout = r.stdout ?? (r.stdout_raw ?? r.output ?? "") ?? "";
          return {
            stdout,
            stderr: r.stderr ?? "",
            compile_output: r.compile_output ?? "",
            status: r.status ?? { description: r.status?.description ?? "Unknown" },
            raw: r,
          };
        });

        // Evaluate pass/fail by comparing parsed stdout to expected (normalized)
        const details = parsed.map((p, idx) => {
          const expected = problem.testCases[idx]?.expected ?? "";
          const got = normalizeForComparison(p.stdout ?? "");
          const expectNorm = normalizeForComparison(expected ?? "");
          const pass = got === expectNorm;
          return { input: problem.testCases[idx]?.input ?? "", expected, output: p.stdout ?? "", pass, status: p.status?.description ?? "" };
        });

        const passedCount = details.filter((d) => d.pass).length;

        setResults((r) => ({ ...r, [problem.id]: { remote: parsed, remoteDetails: details, passed: passedCount, total: details.length } }));
        setRunStatus((s) => ({ ...s, [problem.id]: `Compiler finished — ${passedCount}/${details.length} passed` }));
        toast.success(`Compiler: ${passedCount}/${details.length} passed for ${problem.id}`);
      } catch (err) {
        console.error("Compiler error", err);
        setResults((r) => ({ ...r, [problem.id]: { error: String(err) } }));
        setRunStatus((s) => ({ ...s, [problem.id]: "Compiler error" }));
        toast.error("Compiler submission error");
      }
    },
    [code, lang, submitSingleTC]
  );

  /* --------------------------- isProblemSolved logic --------------------------- */
  // unified: check local results (passed field) OR remote results (passed > 0)
  const isProblemSolved = useCallback(
    (problem) => {
      const r = results[problem.id];
      if (!r) return false;

      // local-run result
      if (typeof r.passed === "number" && typeof r.total === "number") {
        // local run sets passed & total
        if (r.passed > 0) return true;
      }

      // remote-run details
      if (Array.isArray(r.remoteDetails)) {
        if (r.remoteDetails.some((d) => d.pass)) return true;
      }

      // some earlier shapes might only have remote with passed count
      if (typeof r.passed === "number" && r.remote) {
        return r.passed > 0;
      }

      // fallback: no evidence solved
      return false;
    },
    [results]
  );

  // convenience: counts how many problems solved
  const solvedCount = useMemo(() => {
    return CODING_PROBLEMS.reduce((acc, p) => acc + (isProblemSolved(p) ? 1 : 0), 0);
  }, [results, isProblemSolved]);

  const anyProblemSolved = useCallback(() => CODING_PROBLEMS.some((p) => isProblemSolved(p)), [isProblemSolved]);

  /* --------------------------- VAPI startCall --------------------------- */
  const startCall = useCallback(() => {
    const vapi = vapiRef.current;
    const d = interviewInfo?.interviewData ?? interviewInfo;

    let raw =
      d?.questionList ??
      d?.questions ??
      d?.questionlist ??
      d?.questionsList ??
      [];

    if (typeof raw === "string") {
      try {
        raw = JSON.parse(raw);
      } catch {
        raw = [];
      }
    }

    let questionList = "";
    (Array.isArray(raw) ? raw : []).forEach((item) => {
      const q = typeof item === "string" ? item : item?.question;
      if (q && q.trim() !== "") {
        questionList += (questionList ? ", " : "") + q.trim();
      }
    });

    const assistantOptions = {
      name: "AI Recruiter",
      firstMessage: `Hi ${interviewInfo?.userName}, how are you? Ready for your interview on ${interviewInfo?.interviewData?.jobPosition}`,
      transcriber: {
        provider: "deepgram",
        model: "nova-2",
        language: "en-US",
      },
      voice: {
        provider: "playht",
        voiceId: "jennifer",
      },
      model: {
        provider: "openai",
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `
You are an AI voice assistant conducting interviews developed by Select IQ under sohail khan.
Ask candidates the provided interview questions one at a time.
Encourage them, give hints if they struggle, and provide short feedback.
Wrap up positively after 5–7 questions.
✅ Be friendly, engaging, and witty 🎤
✅ Keep responses short & natural
✅ Never share the Final Marks or Points to the candidate
✅ Stay focused on jobDescription and questionList.

Questions: ${questionList}
`.trim(),
          },
        ],
      },
    };

    try {
      if (!vapi) throw new Error("VAPI not configured");
      vapi.start(assistantOptions);
    } catch (err) {
      console.warn("vapi.start error", err);
      toast.error("VAPI error: " + (err?.message ?? "unknown"));
    }
  }, [interviewInfo]);

  useEffect(() => {
    if (section === 3 && interviewInfo) {
      try {
        startCall();
      } catch (err) {
        console.warn("startCall error", err);
      }
    }
  }, [section, interviewInfo, startCall]);

  /* --------------------------- Utility helpers --------------------------- */
  const stopAllStreams = useCallback(() => {
    try {
      camStreamRef.current?.getTracks()?.forEach((t) => t.stop());
    } catch {}
  }, []);

  const redirectnotqualify = useCallback(() => {
    stopAllStreams();
    setTimeout(() => router.push(`/interview/${interviewInfo?.interviewData?.interview_id}/notqualify`), 600);
  }, [interviewInfo, router, stopAllStreams]);

  /* --------------------------- UI Render --------------------------- */

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100 overflow-hidden">
      {/* ---------------- Header (commented out in previous version) ---------------- */}
      {/* <header className="p-4 bg-white border-b flex justify-between items-center">
        ...
      </header> */}

      <main className="flex flex-1 overflow-hidden">
        {/* Left: Main content */}
        <section className="flex-[2] p-6 overflow-hidden relative flex flex-col">
          {/* overlay if fullscreen lost */}
          {fullscreenLost && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95">
              <div className="text-center">
                <div className="text-white font-bold mb-4">⚠ Fullscreen required</div>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded" onClick={() => document.documentElement.requestFullscreen().catch(() => {})}>
                  Re-enter Fullscreen
                </button>
              </div>
            </div>
          )}

          {/* Candidate label */}
          <div className="mb-3">
            <div className="ml-auto text-sm text-gray-500">Candidate: {interviewInfo?.userName ?? "Unknown"}</div>
          </div>

          {/* Scroll area */}
          <div className="flex-1 overflow-auto pb-36 pr-4">
            {/* Aptitude */}
            {section === 0 && (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-xl font-bold">Aptitude — 30 MCQs (40 minutes)</h1>
                  <div className="text-red-600 font-mono">{formatTime(aptTime)}</div>
                </div>

                <MCQList questions={aptQuestions} answers={aptAnswers} onSelect={handleAptSelect} />
              </>
            )}

            {/* Computer Fundamentals */}
            {section === 1 && (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-xl font-bold">Computer Fundamentals — 20 MCQs (15 minutes)</h1>
                  <div className="text-red-600 font-mono">{formatTime(cfTime)}</div>
                </div>

                <MCQList questions={cfQuestions} answers={cfAnswers} onSelect={handleCFSelect} />
              </>
            )}

            {/* Coding */}
            {section === 2 && (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-xl font-bold">Coding Round — {CODING_PROBLEMS.length} Problems ({Math.floor(codingTime/60)} minutes)</h1>
                  <div className="text-red-600 font-mono">{formatTime(codingTime)}</div>
                </div>

                <div className="mb-3 flex items-center gap-3">
                  <label className="mr-2 font-medium">Language:</label>
                  <select value={lang} onChange={(e) => setLang(e.target.value)} className="border px-2 py-1 rounded">
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                    <option value="sql">SQL</option>
                  </select>

                  <div className="ml-auto flex items-center gap-2">
                    <button
                      className="px-3 py-2 bg-gray-200 rounded"
                      onClick={() => setOutputPanelOpen((v) => !v)}
                    >
                      {outputPanelOpen ? "Hide Output" : "Show Output"}
                    </button>
                    <div className="text-sm text-gray-600">Problem {currentProblemIndex + 1} / {CODING_PROBLEMS.length}</div>
                  </div>
                </div>

                {/* problems */}
                {CODING_PROBLEMS.map((p, idx) => {
                  const visible = idx === currentProblemIndex;
                  return (
                    <div key={p.id} className={`mb-6 p-4 border rounded bg-white shadow-sm ${visible ? "" : "hidden"}`}>
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="font-bold">{p.title}</div>
                          <div className="text-sm text-gray-600">{p.description}</div>
                        </div>
                        <div className="text-xs text-gray-500">Tests: {p.testCases.length}</div>
                      </div>

                      <div className="bg-gray-50 p-3 rounded mb-3 text-sm">
                        <div className="font-semibold mb-2">📌 Testcases:</div>
                        {p.testCases.map((tc, tidx) => (
                          <div key={tidx} className="mb-1">
                            <span className="font-mono text-blue-700">Input:</span> {tc.input}
                            <span className="font-mono text-green-700 ml-3">Expected:</span> {tc.expected}
                          </div>
                        ))}
                      </div>

                      <div className="rounded overflow-hidden border">
                        <Editor
                          height="360px"
                          defaultLanguage="javascript"
                          language={lang === "javascript" ? "javascript" : lang}
                          theme="vs-dark"
                          value={code[p.id]}
                          onChange={(val) => setCode((c) => ({ ...c, [p.id]: val || "" }))}
                          options={{
                            fontSize: 13,
                            minimap: { enabled: false },
                            lineNumbers: "on",
                            automaticLayout: true,
                            scrollBeyondLastLine: false,
                          }}
                        />
                      </div>

                      <div className="mt-3 flex gap-2 items-center flex-wrap">
                        {lang === "javascript" ? (
                          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md" onClick={() => runLocalJs(p)}>
                             Run Locally
                          </button>
                        ) : (
                          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md" onClick={() => runJudge0(p)}>
                             Submit Code
                          </button>
                        )}

                        <button className="px-3 py-2 bg-gray-200 rounded" onClick={() => setCode((c) => ({ ...c, [p.id]: "" }))}>
                          Clear
                        </button>

                        <button className="px-3 py-2 bg-yellow-300 rounded" onClick={() => setCode((c) => ({ ...c, [p.id]: p.starter }))}>
                          Reset Starter
                        </button>

                        <button
                          className="px-3 py-2 bg-gray-200 rounded"
                          onClick={() => {
                            const blob = new Blob([code[p.id]], { type: "text/plain" });
                            const u = URL.createObjectURL(blob);
                            const a = document.createElement("a");
                            a.href = u;
                            a.download = `${p.id}_${lang}.txt`;
                            a.click();
                          }}
                        >
                          Download
                        </button>

                        <div className="ml-auto text-sm font-medium">
                          {runStatus[p.id] ? <span className="text-gray-700">{runStatus[p.id]}</span> : null}
                          {results[p.id] ? (
                            results[p.id].error ? (
                              <span className="text-red-600 ml-3">Error</span>
                            ) : results[p.id].passed !== undefined ? (
                              <span className="text-green-600 ml-3">✅ {results[p.id].passed}/{results[p.id].total}</span>
                            ) : results[p.id].remoteDetails ? (
                              <span className="text-blue-600 ml-3">Results received</span>
                            ) : null
                          ) : null}
                        </div>
                      </div>

                      {/* local results details */}
                      {results[p.id]?.details && (
                        <div className="mt-3 bg-gray-50 p-3 rounded text-sm">
                          {results[p.id].details.map((d, idx) => (
                            <div key={idx} className={d.pass ? "text-green-600" : "text-red-600"}>
                              TC{idx + 1}: Expected {d.expected} • Got {d.output} {d.error ? `• Error: ${d.error}` : ""}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* judge0 remote outputs */}
                      {results[p.id]?.remoteDetails && (
                        <div className="mt-3 bg-gray-50 p-3 rounded text-sm">
                          <div className="text-sm text-gray-700">Coding results returned — see details below.</div>
                          {results[p.id].remoteDetails.map((r, i) => (
                            <div key={i} className="mt-2">
                              <div className="font-medium">TC{i + 1} - {r.status ?? ""} — {r.pass ? <span className="text-green-600">Accepted</span> : <span className="text-red-600">Fail</span>}</div>
                              <div className="text-xs text-gray-700">Stdout: {String(r.output ?? "<empty>")}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* problem nav */}
                <div className="mt-2 flex items-center justify-between">
                  <button
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    onClick={() => setCurrentProblemIndex((i) => Math.max(0, i - 1))}
                    disabled={currentProblemIndex === 0}
                  >
                    ← Prev
                  </button>

                  <div className="text-sm text-gray-600">Problem {currentProblemIndex + 1} of {CODING_PROBLEMS.length}</div>

                  <button
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    onClick={() => setCurrentProblemIndex((i) => Math.min(CODING_PROBLEMS.length - 1, i + 1))}
                    disabled={currentProblemIndex === CODING_PROBLEMS.length - 1}
                  >
                    Next →
                  </button>
                </div>

                {/* output / status panel */}
                {outputPanelOpen && (
                  <div className="mt-4">
                    <div className="font-semibold mb-2">Run Output & Status</div>
                    <div className="grid grid-cols-2 gap-4">
                      {CODING_PROBLEMS.map((p) => (
                        <div key={p.id} className="p-3 border rounded bg-white">
                          <div className="font-medium mb-1">{p.title}</div>
                          <div className="text-xs text-gray-600 mb-2">Status: {runStatus[p.id] ?? "idle"}</div>

                          {results[p.id]?.error && <div className="text-red-600 mb-1">Error: {results[p.id].error}</div>}

                          {results[p.id]?.details && (
                            <div className="mb-2">
                              {results[p.id].details.map((d, idx) => (
                                <div key={idx} className={d.pass ? "text-green-600" : "text-red-600"}>
                                  TC{idx + 1}: {d.output} — {d.pass ? "PASS" : "FAIL"}
                                </div>
                              ))}
                            </div>
                          )}

                          {results[p.id]?.remoteDetails && (
                            <div>
                              {results[p.id].remoteDetails.map((r, i) => (
                                <div key={i} className="text-xs text-gray-700 mb-1">
                                  TC{i + 1}: {r.pass ? "Accepted" : "?"} — Stdout: {r.output ?? "<empty>"}
                                </div>
                              ))}
                            </div>
                          )}

                          {!results[p.id] && <div className="text-xs text-gray-500">No runs yet.</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* finish coding dialog */}
                <div className="mt-6">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg text-lg shadow-xl">
                         Finish Coding
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <p>Proceed to interview? </p>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Stay</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => {
                            const solved = anyProblemSolved();
                            if (!solved) {
                              toast.error("No problem solved. Redirecting to Thankyou.");
                              redirectnotqualify();
                            } else {
                              setSection(3);
                            }
                          }}
                        >
                          Confirm
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </>
            )}

            {/* Interview section */}
            {section === 3 && (
              <div className="p-4 bg-white rounded">
                <h2 className="text-lg font-bold mb-3">Interview — AI Recruiter</h2>
                <p className="text-sm text-gray-600 mb-3">AI-driven interview (voice + transcriber). Click start to begin.</p>

                <div className="flex gap-3">
                  <button
                    className="px-6 py-3 bg-indigo-700 text-white rounded-lg shadow-md"
                    onClick={() => {
                      if (!vapiRef.current) {
                        toast.error("VS not configured (NEXT_PUBLIC_VAPI_PUBLIC_KEY)");
                        return;
                      }
                      startCall();
                      toast.success("Interview started");
                    }}
                  >
                    Start Interview
                  </button>

                  <button
                    className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md"
                    onClick={() => {
                      try {
                        camStreamRef.current?.getTracks()?.forEach((t) => t.stop());
                      } catch {}
                      vapiRef.current?.stop?.();
                      router.push(`/interview/${interviewInfo?.interviewData?.interview_id}/thankyou`);
                    }}
                  >
                    End Session
                  </button>
                </div>

                <div className="mt-4 text-sm text-gray-600">
                  Server: {vapiRef.current ? "configured" : "not configured"} — {interviewInfo?.interviewData?.jobPosition ?? ""}
                </div>
              </div>
            )}
          </div>

          {/* sticky bottom area */}
          <div className="absolute left-0 right-0 bottom-4 px-6">
            <div className="max-w-5xl mx-auto flex items-center gap-4">
              {section === 0 && (
                <div className="flex-1 flex items-center justify-between bg-white p-3 rounded shadow">
                  <div>
                    <button
                      className="bg-green-700 text-white px-4 py-2 rounded"
                      onClick={() => {
                        if (aptScore < aptNeeded) {
                          toast.error("Failed Aptitude:");
                          redirectnotqualify();
                        } else {
                          setSection(1);
                        }
                      }}
                    >
                       Finish Aptitude
                    </button>
                  </div>
                </div>
              )}

              {section === 1 && (
                <div className="flex-1 flex items-center justify-between bg-white p-3 rounded shadow">
                  <div>
                    <button
                      className="bg-green-700 text-white px-4 py-2 rounded"
                      onClick={() => {
                        if (cfScore < cfNeeded) {
                          toast.error("Failed CF:");
                          redirectnotqualify();
                        } else {
                          setSection(2);
                        }
                      }}
                    >
                       Finish CF
                    </button>
                  </div>
                </div>
              )}

              {section === 2 && (
                <div className="flex-1 flex items-center justify-between bg-white p-3 rounded shadow">
                  <div className="text-sm">Solved: {solvedCount}/{CODING_PROBLEMS.length}</div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-2 bg-gray-200 rounded" onClick={() => setCurrentProblemIndex((i)=>Math.max(0,i-1))}>Prev</button>
                    <button className="px-3 py-2 bg-gray-200 rounded" onClick={() => setCurrentProblemIndex((i)=>Math.min(CODING_PROBLEMS.length-1,i+1))}>Next</button>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <button className="bg-green-700 text-white px-5 py-2 rounded"> Finish Coding</button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <p>Proceed to interview? </p>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Stay</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => {
                              const solved = anyProblemSolved();
                              if (!solved) {
                                toast.error("No problem solved. Redirecting to Thankyou.");
                                redirectnotqualify();
                              } else {
                                setSection(3);
                              }
                            }}
                          >
                            Confirm
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              )}

              {section === 3 && (
                <div className="flex-1 flex items-center justify-between bg-white p-3 rounded shadow">
                  <div className="text-sm">Interview Section</div>
                  <div>
                    <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => {
                      try{ camStreamRef.current?.getTracks()?.forEach((t) => t.stop()); }catch{}
                      vapiRef.current?.stop?.();
                      router.push(`/interview/${interviewInfo?.interviewData?.interview_id}/thankyou`);
                    }}>
                      End Session
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Right: webcam preview */}
        <aside className="flex-[1] border-l bg-white p-4 flex flex-col items-center gap-4 overflow-auto">
          <div className="flex flex-col items-center gap-1">
            <div className="text-2xl font-bold text-indigo-700">SELECTIQ</div>
            <div className="text-sm text-gray-600">Proctored Multi-stage Assessment</div>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="text-red-600 font-bold">Penalty: {penalty}</div>
            <div className="font-mono">
              Time Left:{" "}
              {section === 0
                ? formatTime(aptTime)
                : section === 1
                ? formatTime(cfTime)
                : section === 2
                ? formatTime(codingTime)
                : ""}
            </div>
          </div>

          <Image src="/avataar.jpg" alt="avatar" width={100} height={100} className="rounded-full" />
          <div className="w-full">
            <div className="text-sm font-medium mb-2 text-center">Webcam Preview</div>

            <div className="relative w-full bg-black rounded overflow-hidden" style={{ height: 240 }}>
              <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
              <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
            </div>
          </div>
          {warning && <div className="text-red-600 font-bold">{warning}</div>}
          <div className="text-xs text-gray-500">Proctoring active — webcam only</div>

          <div className="w-full bg-gray-50 rounded p-3 text-xs">
            <div>Penalty: {penalty}</div>
            <div>Fullscreen: {!fullscreenLost ? "OK" : "Lost"}</div>
            <div>Server: {vapiRef.current ? "Configured" : "Not configured"}</div>
          </div>
        </aside>
      </main>
    </div>
  );
}

/* --------------------------- End of File --------------------------- */
