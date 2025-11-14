import { BriefcaseBusinessIcon, Calendar, Code2Icon, Crown, LayoutDashboard, List, LogOut, Puzzle, Settings, User2Icon, WalletCards } from "lucide-react";

export const SideBarOptions = [
  {
    name: 'Dashboard',
    icon: LayoutDashboard,
    path: '/dashboard'
  },
  {
    name: 'Scheduled Interview',
    icon: Calendar,
    path: '/scheduled-interview'
  },
  {
    name: 'All Interview',
    icon: List,
    path: '/all-interview'
  },
  {
    name: 'Billing',
    icon: WalletCards,
    path: '/billing'
  },
  {
    name: 'Settings',
    icon: Settings,
    path: '/settings'
  },
  {
    name: 'Logout',
    icon: LogOut,
    path: '/logout'
  }
];

export const InterviewType = [

  {
    title: 'Technical',
    icon: Code2Icon
  },

  {
    title: 'Behavioral',
    icon: User2Icon
  },

  {
    title: 'Experience',
    icon: BriefcaseBusinessIcon
  },

  {
    title: 'Problem Solving',
    icon: Puzzle
  },

  {
    title: 'LeaderShip',
    icon: Crown
  },


]


// export const QUESTIONS_PROMPT = `You are an expert technical interviewer.

// Inputs:
// - Job Title: {{jobTitle}}
// - Job Description: {{jobDescription}}
// - Interview Duration: {{duration}}
// - Interview Type: {{type}}

// Task:
// 1) Analyze the job description and pick the most relevant skills/topics.
// 2) Generate interview questions appropriate to the duration and the {{type}} style.
// 3) Return ONLY valid JSON. No prose, no markdown.

// Return EXACTLY this JSON shape (no extra keys, no explanations):
// {
//   "interviewQuestions": [
//     { "question": "…", "type": "Technical | Behavioral | Experience | Problem Solving | Leadership" }
//   ]
// }
// `;

// ------------ 💛 001 -----------------

// export const QUESTIONS_PROMPT = `You are an expert technical interviewer.

// Inputs:
// - Job Title: {{jobTitle}}
// - Job Description: {{jobDescription}}
// - Interview Duration: {{duration}}
// - Interview Type: {{type}}

// Task:
// 1) Analyze the job description and pick the most relevant skills/topics.
// 2) Generate interview questions appropriate to the duration and the {{type}} style.
// 3) Return ONLY valid JSON. No prose, no markdown.

// Return EXACTLY this JSON shape (no extra keys, no explanations):
// {
//   "interviewQuestions": [
//     { "question": "…", "type": "One of: Technical, Behavioral, Experience, Problem Solving, Leadership" }
//   ]
// }
// `;


// -----------FINAL CODE (AFTER DEBUGG)----------

export const QUESTIONS_PROMPT = `
You are an expert technical interviewer.

Inputs:
- Job Title: {{jobTitle}}
- Job Description: {{jobDescription}}
- Interview Duration: {{duration}}
- Interview Type: {{type}}

Task:
1. Analyze the job description and pick the most relevant skills/topics.
2. Generate interview questions appropriate to the {{duration}} and the {{type}} style.
3. STRICTLY return a **valid JSON object only**. No markdown, no explanation, no prose, no extra text.

Return EXACTLY this JSON shape (do not add extra fields or text):
{
  "interviewQuestions": [
    { "question": "string", "type": "Technical | Behavioral | Experience | Problem Solving | Leadership" }
  ]
}
`;





//========= for Feedback =========










export const FEEDBACK_PROMT=`{{conversation}}

Depends on this Interview Conversation between assitant and user, Give me feedback for user interview as a fresher. Give me rating out of 10 for technical Skills, Communication, Problem Solving, Experince and give me rating out of 10 for Individual technical skill or Tech Stack. Also give me summery in 3-4 lines about the interview and one line to let me know whether is recommanded for hire or not with msg. Give me response in JSON format
{

    feedback:{
        rating:{
            techicalSkills:5,
            communication:6,
            problemSolving:4,
            experince:7 

        },
        summery:<in 3 Line>,
        Recommendation:'',
        RecommendationMsg:''



      }

  }

`