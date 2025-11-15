"use client"
import { Progress } from '@/components/ui/progress';
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import FormContainer from './_components/FormContainer';
import QuestionList from './_components/QuestionList';
import { toast } from 'sonner';
import InterviewLink from './_components/InterviewLink';

function CreateInterview() {
  const router=useRouter();
  const [step,setStep]=useState(1);
  const [formData,setFormData]=useState();  
  const [interviewId,setInterviewId]=useState();
  const onHandleInputChange=(field,value)=>{
    setFormData(prev=>({
      ...prev,
      [field]:value
    }))

    console.log("FormData", formData)
  }
// -----------MY Code--------------


  // const onGoToNext=()=>{
  //   if (!formData?.jobPosition|| !formData?.duration || !formData?.jobDescription || !formData.type)
  //   { 
  //     toast("Please Enter All Details...🙄")
  //     return;
  //   }

  //   toast("Alright, We'll Generating Questions...🎯")
  //   setStep(step+1);
  // }

// ----------GPT EDITS------------


const onGoToNext = () => {
  console.log("🔎 formData at GoToNext:", formData);

  // ✅ Check Job Title / Position
  if (!formData?.jobTitle && !formData?.jobPosition) {
    toast("Please enter Job Title / Position");
    return;
  }

  // ✅ Check Job Description
  if (!formData?.jobDescription && !formData?.jobDesc) {
    toast("Please enter Job Description");
    return;
  }

  // ✅ Check Duration
  if (!formData?.duration) {
    toast("Please select Duration");
    return;
  }

  // ✅ Check Type
  if (!formData?.type || (Array.isArray(formData.type) && formData.type.length === 0)) {
    toast("Please select at least one Interview Type");
    return;
  }

  toast("Alright, We'll generate questions...");
  setStep(step + 1); // ✅ now it will correctly go to QuestionList.jsx
};









// --------------------------------
  const onCreateLink=(interview_id)=>{
    setInterviewId(interview_id);
    setStep(step+1);
  }


  return (
    <div className='mt-10 md:px-24 lg:px-44 xl:px-56 '>

        <div className='flex gap-5 items-center '>
           <ArrowLeft onClick={()=>router.back()} className='cursor-pointer' /> 
           <h2 className='font-bold text-2xl'> Create New Interview</h2>

        </div>
        <Progress value={step * 33.33} className='my-5' />
        {step==1?<FormContainer onHandleInputChange={onHandleInputChange} GoToNext={() => onGoToNext() } />  : step==2? <QuestionList formData={formData} onCreateLink={(interview_id)=>onCreateLink(interview_id)} />:
        step==3?<InterviewLink interview_id={interviewId}
        formData={formData}
        />:null}
    </div>
  )
}

export default CreateInterview