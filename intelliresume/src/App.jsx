import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout"; 
import Home from "./pages/Home";
import About from "./pages/About";
import ResumeUpload from "./pages/ResumeUpload";
import Chatbot from "./pages/Chatbot";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Pricing from './pages/Pricing';
import VerifyOTP from "./pages/VerifyOTP";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardContent from "./components/dashboard/DashboardContent";
import ResumePreview from "./components/dashboard/ResumePreview";
import RecentJobCurations from "./components/dashboard/RecentJobCurations";
import ResumeAndInsight from "./components/dashboard/ResumeAndInsight";
import ResumeVersions from "./components/dashboard/ResumeVersions";
import Settings from "./components/dashboard/Settings";
import "./App.css";
import MyResume from "./pages/Dashboard/MyResume";
import ResumeEditor from "./pages/Dashboard/ResumeEditor";
import JobCuration from "./pages/Dashboard/JobCuration";
import JobCurationProcessing from "./pages/Dashboard/JobCurationProcessing";
import JobAnalysis from "./pages/Dashboard/JobAnalysis";
import MatchedRequirements from "./pages/Dashboard/MatchedRequirements";
import PartialRequirements from "./pages/Dashboard/PartialRequirements";
import MissingRequirements from "./pages/Dashboard/MissingRequirements";
import ATSAnalysis from "./pages/Dashboard/ATSAnalysis";
import AIRecommendations from "./pages/Dashboard/AIRecommendations";
import TailoredResume from "./pages/Dashboard/TailoredResume";
import TailoredResumePreview from "./pages/Dashboard/TailoredResumePreview";
import RegenerateResume from "./pages/Dashboard/RegenerateResume";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<ResumeUpload />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
         
  
      </Route>
       <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardContent />} />
         <Route path="resume" element={<MyResume />} />
         <Route path="resume/edit" element={<ResumeEditor />} />
        <Route path="curation" element={<JobCuration />} />
        <Route path="curation/processing" element={<JobCurationProcessing />} />
        
        <Route path="analysis" element={<JobAnalysis />} />
        <Route path="analysis/matched" element={<MatchedRequirements />} />
        <Route path="analysis/partial" element={<PartialRequirements />} />
        <Route path="analysis/missing" element={<MissingRequirements />} />
        <Route path="analysis/ats" element={<ATSAnalysis />} />
        <Route path="analysis/recs" element={<AIRecommendations />} />
        <Route path="tailored-resume" element={<TailoredResume />} />
        <Route path="tailored-resume/preview" element={<TailoredResumePreview />} />
        <Route path="tailored-resume/regenerate" element={<RegenerateResume />} />

        <Route path="versions" element={<ResumeVersions />} />
        <Route path="settings" element={<Settings />} />
      </Route>

    </Routes>
  );
}

export default App;