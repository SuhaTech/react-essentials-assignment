import { useRef, useState } from "react";
import { 
  FileUp, 
  ArrowRight, 
  UploadCloud, 
  ShieldCheck, 
  Clock, 
  Target, 
  Award, 
  Eye, 
  Edit3, 
  X, 
  Check, 
  Trash2, 
  FileText,
  Loader2,
  CheckCircle2,
  History,
  RotateCcw
} from "lucide-react";
import Container from "../components/Container";
import Card from "../components/Card";
import Button from "../components/Button";
import api from "../services/api";

const ResumeUpload = () => {
  const fileInputRef = useRef(null);
  const resultRef = useRef(null);

  // States
  const [file, setFile] = useState(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState(null);
  const [isViewing, setIsViewing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [fetchingDetails, setFetchingDetails] = useState(false);
  const [atsScore, setAtsScore] = useState(null);
  const [currentResumeId, setCurrentResumeId] = useState(null);


  // Parsed Resume Data
const [resumeData, setResumeData] = useState({});
const [editingSection, setEditingSection] = useState(null);


  const features = [
    {
      title: "ATS Optimization",
      desc: "Beat the screening systems with structured, compliant formatting and error-free syntax.",
      icon: ShieldCheck,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-600",
      tag: "Smart Parsing"
    },
    {
      title: "Keyword Matching",
      desc: "Rank higher for target roles by auto-aligning hard skills with recruiter screening logs.",
      icon: Target,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-500/10",
      textColor: "text-emerald-600",
      tag: "98% Match"
    },
    {
      title: "Professional Review",
      desc: "Expert-grade suggestions to transform flat duties into high-impact performance metrics.",
      icon: Award,
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-500/10",
      textColor: "text-violet-600",
      tag: "Impact Tuned"
    }
  ];

  // Helper to safely extract response data
 const handleDataExtraction = (data) => {
    if (data.id) {
      setCurrentResumeId(data.id); // Resume ID save kar rahe hain
    }
    if (data.ats_score !== undefined && data.ats_score !== null) {
      setAtsScore(data.ats_score);
    }
    if (data.parsed_data) {
      setResumeData(data.parsed_data);
    }
    if (data.file || data.file_url) {
      setFilePreviewUrl(data.file || data.file_url);
    }
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFilePreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFilePreviewUrl(null);
    setIsViewing(false);
    setIsEditing(false);
    setAtsScore(null);
    setResumeData({});
setEditingSection(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  

  // 1. UPLOAD RESUME API (POST -> /api/resumes/upload/)
  const handleScanResume = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("Please log in first to scan your resume!");
      return;
    }

    if (!file) {
      fileInputRef.current.click();
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post("resumes/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Resume Upload Response:", response.data);
      handleDataExtraction(response.data);
      

      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);

    } catch (error) {
      console.error("Upload Error:", error);
      alert(
        error.response?.data?.detail || 
        error.response?.data?.error || 
        "Failed to upload resume. Check backend logs."
      );
    } finally {
      setLoading(false);
    }
  };

  // 2. VIEW RESUME API (GET -> /api/resumes/view/)
  const fetchResumeView = async () => {
    setFetchingDetails(true);
    try {
      const response = await api.get("resumes/view/");
      console.log("View Resume Response:", response.data);

      if (response.data) {
        handleDataExtraction(response.data);
      }
    } catch (error) {
      console.error("View Error:", error);

      if (error.response?.status === 404) {
        // Agar local preview available hai toh prompt ignore karein
        if (!filePreviewUrl) {
          alert("No uploaded resume found for this account. Please upload a file first!");
          setIsViewing(false);
          setIsEditing(false);
        }
      } else if (error.response?.status === 401) {
        alert("Session expired. Please log in again.");
        setIsViewing(false);
        setIsEditing(false);
      } else {
        alert(
          error.response?.data?.detail || 
          error.response?.data?.error || 
          "Could not fetch resume details."
        );
        setIsViewing(false);
        setIsEditing(false);
      }
    } finally {
      setFetchingDetails(false);
    }
  };

  const handleOpenView = async () => {
    setIsViewing(true);
    await fetchResumeView();
  };

  const handleOpenEdit = async () => {
    setIsEditing(true);
    await fetchResumeView();
  };
  const handleSectionChange = (section, value) => {
  setResumeData((prev) => ({
    ...prev,
    [section]: value,
  }));
};

  // 3. EDIT RESUME API (PUT -> /api/resumes/edit/)
  const handleSaveChanges = async () => {
  setSaving(true);

  try {
    const response = await api.put("resumes/edit/", {
      parsed_data: resumeData,
    });

    console.log("Updated:", response.data);

    if (response.data.ats_score !== undefined) {
      setAtsScore(response.data.ats_score);
    }

    alert("Resume Updated Successfully!");

    setEditingSection(null);
    setIsEditing(false);

    await fetchResumeView(); // Latest data refresh
  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.detail ||
      "Unable to update resume."
    );
  } finally {
    setSaving(false);
  }
};

  return (
    <section className="py-12 bg-slate-50">
      <Container className="space-y-16">
        {/* HERO SECTION */}
        <div className="text-center max-w-2xl mx-auto pt-10"><br /><br />
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Analyze your <br />
            resume in <span className="text-blue-600">seconds.</span>
          </h1><br/>
          <p className="text-base md:text-lg text-slate-600">
            Upload your resume and get instant feedback to optimize your ATS score and land more interviews.
          </p><br /><br /><br />
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent my-8" />
<br /><br /><br /><br />
        {/* MAIN UPLOAD SECTION */}
        <div className="grid lg:grid-cols-12 gap-8 items-start px-4 md:px-8">
          
          {/* HOW IT WORKS */}
          <div className="lg:col-start-2 lg:col-span-4 bg-slate-50 p-10 rounded-[2rem] border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">How it works?</h3>
            <br />
            <div className="space-y-8">
              {[
                { title: "Upload your Resume", desc: "Simply upload your PDF or Word document." },
                { title: "Automated Scan", desc: "Our parser analyzes ATS compatibility." },
                { title: "Get Instant Insights", desc: "Receive actionable career suggestions." }
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    {i + 1}
                  </div>
                  <br /><br />
                  <div>
                    <h4 className="font-bold text-slate-800">{step.title}</h4>
                    <p className="text-slate-500 text-sm">{step.desc}</p>
                    <br />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* UPLOAD CARD */}
          <div className="lg:col-span-6 flex justify-center">
            <Card className="w-full max-w-xl min-h-[420px] rounded-[32px] border border-slate-100 bg-white p-8 shadow-2xl"><br/>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
    <UploadCloud size={34} className="text-blue-600"/>
</div>
                <h2 className="text-xl font-bold text-slate-800">Upload your Resume</h2>
                <p className="text-slate-400 text-xs mb-6">PDF, DOC, DOCX • Max 5MB</p>
<br />
                {!file ? (
                  <div
                    onClick={() => fileInputRef.current.click()}
                    className="
mx-auto
w-90
border-2
border-dashed
border-blue-200
rounded-3xl
py-10
px-6
bg-gradient-to-br
from-blue-50
to-white
hover:border-blue-500
hover:shadow-lg
transition-all
duration-300
"
                  ><br/>
                    <FileUp size={42} className="mx-auto text-slate-400 mb-2" />
                    <p className="font-semibold text-slate-700">
Click to upload your resume
</p><br/>

                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-5 shadow-sm"><br/>

  {/* File Info */}
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-4 overflow-hidden">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
        <FileText className="text-blue-600" size={28} />
      </div>

      <div className="overflow-hidden text-left">
        <h4 className="truncate text-base font-bold text-slate-800">
          {file.name}
        </h4>

        <div className="mt-1 flex items-center gap-2">
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
            Uploaded
          </span>

          <span className="text-xs text-slate-500">
            {(file.size / (1024 * 1024)).toFixed(2)} MB
          </span><br/>
        </div><br/>
      </div>
    </div>

    <button
      onClick={handleRemoveFile}
      className="rounded-xl p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
    >
      <Trash2 size={20} />
    </button>
  </div>

  {/* Divider */}

  <div className="my-5 border-t border-white-200"></div><br/>

  <p className="mb-4 text-center text-sm font-semibold text-slate-500">
    What would you like to do?
  </p><br/>

  {/* Action Buttons */}

  <div className="flex justify-center gap-3">

    <button
      onClick={handleOpenView}
      className="group w-36 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
    ><Eye
    size={22}
    className="mx-auto mb-2 text-blue-600 transition group-hover:scale-110"
/>

      <h3 className="text-sm font-semibold text-slate-800">
    View Resume
</h3>

<p className="mt-1 text-[11px] text-slate-500">
    Preview
</p>

    </button>

    <button
      onClick={handleOpenEdit}
      className="group w-36 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
    >
      <Edit3
    size={22}
    className="mx-auto mb-2 text-violet-600 transition group-hover:rotate-6"
/>

      <h3 className="text-sm font-semibold text-slate-800">
    Edit Resume
</h3>

<p className="mt-1 text-[11px] text-slate-500">
    Update
</p>
    </button><br/>

  </div><br/>

</div>
                )}
<br/>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  hidden
                  onChange={handleFileChange}
                />

                <Button
  onClick={handleScanResume}
  disabled={loading}
  className="
mt-8
mx-auto
w-55
h-14
rounded-2xl
bg-gradient-to-r
from-blue-600
to-blue-500
text-white
font-semibold
shadow-lg
hover:shadow-blue-300/50
hover:shadow-xl
hover:-translate-y-1
transition-all
"
>
  {loading ? (
    <>
      <Loader2 size={20} className="mr-2 animate-spin" />
      Scanning Resume...
    </>
  ) : file ? (
    <>
      ⚡ Scan Resume
    </>
  ) : (
    <>
      📂 Select Resume
    </>
  )}
</Button>

                <div className="flex justify-center gap-6 mt-4 text-slate-400 text-[10px] uppercase tracking-wider font-semibold">
                  <span className="flex items-center gap-1"><ShieldCheck size={12} /> Secure</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> Instant</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* ATS SCORE CARD (SHOWS UPDATED SCORE HERE) */}
        {atsScore !== null && (
          <div ref={resultRef} className="max-w-md mx-auto px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white border-2 border-emerald-500/30 rounded-2xl p-5 shadow-lg flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 size={26} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">ATS Match Score</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Calculated via Resume Service</p>
                </div>
              </div>

              <div className="text-right bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                <span className="text-2xl font-black text-emerald-600 tracking-tight">{atsScore}%</span>
              </div>
            </div>
          </div>
        )}

        {/* VIEW MODAL */}
        {isViewing && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-md p-4">
    <div className="relative w-full max-w-6xl h-[90vh] rounded-[2px] bg-white shadow-2xl overflow-hidden border border-slate-200">

      {/* Header */}
      <div className="flex items-center justify-between px-8 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">

        <div className="flex items-start gap-4"><br/>
          <div className="h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center">
            <FileText className="text-white" size={24} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              Resume Details
            </h2>

            <p className="text-blue-100 text-sm">
              View your parsed resume information
            </p><br/>
          </div>
        </div>

        <button
          onClick={() => setIsViewing(false)}
          className="h-11 w-11 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-center"
        >
          <X className="text-white" size={22} />
        </button>
      </div>

      {/* Body */}
      <div className="h-[calc(90vh-90px)] overflow-y-auto bg-slate-50 px-10 py-8">

        {fetchingDetails ? (

          <div className="flex flex-col justify-center items-center h-full">

            <Loader2
              size={42}
              className="animate-spin text-blue-600"
            />

            <p className="mt-4 text-slate-500">
              Loading Resume...
            </p>

          </div>

        ) : (

          <div className="space-y-6 max-w-5xl mx-auto">

            {Object.entries(resumeData).map(([section, value]) => (

              <div
                key={section}
                className="rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all p-6"
              >

                {/* Section Title */}

                <div className="flex items-center justify-between mb-5">

                  <div>
<br/>
                    <h3 className="text-xl font-bold text-slate-800 capitalize">
                      {section.replace(/_/g, " ")}
                    </h3>

                   

                  </div>

                </div>

                {/* ARRAY */}

                {Array.isArray(value) ? (

                  value.length ? (

                    <ul className="space-y-3">

                      {value.map((item, index) => (

                        <li
                          key={index}
                          className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-slate-700"
                        >
                          {typeof item === "object"
                            ? JSON.stringify(item, null, 2)
                            : item}
                        </li>

                      ))}

                    </ul>

                  ) : (

                    <div className="text-center py-6 text-slate-400">
                      No Data Available
                    </div>

                  )

                ) : typeof value === "object" && value !== null ? (

                  <div className="space-y-3">

                    {Object.entries(value).map(([k, v]) => (

                      <div
                        key={k}
                        className="flex items-start justify-between gap-4 rounded-xl bg-slate-50 px-4 py-3 border border-slate-100"
                      >

                        <span className="font-semibold capitalize text-slate-700">
                          {k.replace(/_/g, " ")}
                        </span>

                        <span className="text-slate-600 text-right max-w-[60%] break-words">
                          {String(v)}
                        </span>

                      </div>

                    ))}

                  </div>

                ) : (

                  <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 text-slate-700 leading-7 whitespace-pre-wrap">
                    {String(value)}
                  </div>

                )}

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  </div>
)}

        {/* EDIT MODAL */}
        {isEditing && (
          <div>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-sm p-4">
            <div className="
w-full
max-w-5xl
h-[88vh]
bg-white
rounded-[3px]
shadow-[0_25px_60px_rgba(0,0,0,0.15)]
border
border-slate-200
overflow-hidden
flex
flex-col
animate-in
fade-in
zoom-in-95
">
              <div className="
flex
items-center
justify-between
px-8
py-5
border-b
border-slate-200
bg-gradient-to-r
from-blue-600
to-indigo-600
text-white
">
                <div className="flex items-start gap-4"><br/>
                  <Edit3 size={22} className="text-indigo-600" />
                  <div>
<h2 className="text-xl font-bold text-align-center text-white tracking-tight">
Edit Resume
</h2>

<p className="text-blue-100 text-sm">
Update your parsed resume and recalculate ATS score
</p><br/>
</div>
                </div>
                <button 
                  onClick={() => setIsEditing(false)} 
                  className="
h-10
w-10
rounded-xl
bg-white/10
text-white
flex
items-center
justify-center
hover:bg-white/20
transition
"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="
flex-1
overflow-y-auto
bg-slate-50
px-10
py-8
">
                {fetchingDetails ? (
                  <div className="flex flex-col items-center justify-center  h-64">
                    <Loader2 size={32} className="animate-spin text-indigo-600 mb-2" />
                    <p className="text-sm text-slate-600">Fetching parsed resume text...</p>
                  </div>
                ) : (
                  <div className="h-full flex flex-col"><br/>
                    
                    <div className="space-y-10">

  {Object.entries(resumeData).map(([section, value]) => (

    <div
      key={section}
      className="
bg-white
pl-20

border
border-slate-200
shadow-md
hover:shadow-xl
transition
duration-300
p-7
justify-between
"
    >

      <div className="flex justify-between items-center mb-4">

        <h3 className="
text-xl
font-bold
text-slate-800
capitalize
tracking-wide
">
          {section.replace(/_/g, " ")}
        </h3>

        {editingSection !== section ? (

          <button
            onClick={() => setEditingSection(section)}
            className="
flex
items-center
gap-2
px-5
py-2
w-15
h-10
rounded-2xl
bg-gradient-to-r
from-blue-600
to-indigo-600
text-white
font-medium
hover:shadow-lg
hover:scale-105
transition
text-align-center
justify-center
"
          >
            Edit
          </button>

        ) : (

          <button
            onClick={() => setEditingSection(null)}
            className="
px-8
py-4
bg-slate-100
text-slate-700
font-medium
hover:bg-slate-200
transition
text-center
"
          >
            Cancel
          </button>

        )}

      </div>

      {/* Array */}

      {Array.isArray(value) ? (

        editingSection === section ? (

          <div className="space-y-3">

            <div>
              <label className="block text-sm font-semibold text-slate-700 capitalize mb-1">
                {section.replace(/_/g, " ")}
              </label>
            </div>

            <div>
              <textarea
                rows={6}
                className="
w-full

border
border-slate-300
bg-white
px-4 py-3
resize-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
outline-none
transition
"
                value={value.join("\n")}
                onChange={(e) =>
                  handleSectionChange(
                    section,
                    e.target.value.split("\n")
                  )
                }
              />
            </div>

          </div>

        ) : (

          <ul className="list-disc pl-5">

            {value.map((item, index) => (

              <li key={index}>
                {typeof item === "object"
                  ? JSON.stringify(item)
                  : item}
              </li>

            ))}

          </ul>

        )

      ) : typeof value === "object" && value !== null ? (

        editingSection === section ? (

          Object.entries(value).map(([k, v]) => (

            <div key={k} className="mb-3">

              <label className="block text-sm mb-1 capitalize">
                {k.replace(/_/g, " ")}
              </label>

              <input
                className="
w-full

border
border-slate-300
pl-4
resize-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
outline-none
transition
"
                value={v}
                onChange={(e) =>
                  handleSectionChange(section, {
                    ...value,
                    [k]: e.target.value,
                  })
                }
              />

            </div>

          ))

        ) : (

          Object.entries(value).map(([k, v]) => (

            <div
              key={k}
              className="flex items-start justify-between gap-4 py-2 border-b"
            >

              <span className="font-medium capitalize">
                {k.replace(/_/g, " ")}
              </span>

              <span>{String(v)}</span>

            </div>

          ))

        )

      ) : (

        editingSection === section ? (

          <textarea
            rows={5}
            className="
w-full

border
border-slate-300
bg-white
px-10
py-6
resize-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
outline-none
transition
"
            value={value}
            onChange={(e) =>
              handleSectionChange(section, e.target.value)
            }
          />

        ) : (

          <p>{String(value)}</p>

        )

      )}

    </div>

  ))}

</div>
                  </div>
                )}<br/>
              </div>

              <div className="
px-8
py-5
border-t
border-slate-200
bg-white
flex
justify-end
gap-4
">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 border border-slate-300 bg-white hover:bg-slate-100 transition-colors rounded-lg 
                  w-20
h-12
rounded-xl
justify-center"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveChanges}
                  disabled={saving || fetchingDetails}
                  className="
flex
items-center
gap-2
w-50
h-12
rounded-xl
justify-center

bg-gradient-to-r
from-blue-600
to-indigo-600
px-6
py-3
font-semibold
text-white
shadow-lg
hover:shadow-xl
hover:scale-105
transition
disabled:opacity-60
"
                >
                  {saving ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />} 
                  {saving ? "Updating & Recalculating..." : "Save & Recalculate ATS"}
                </button>
              </div>
            </div>
          </div>
        </div>
        )}

        <br /><br /><br /><br />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <br /><br /><br /><br /><br />

        {/* 4. BOTTOM FEATURES ROW */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl p-7 flex flex-col items-center text-center justify-between border transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1.5 ${
                    item.active
                      ? "border-blue-500 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500"
                      : "border-slate-100/90 shadow-sm hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
                  }`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl pointer-events-none`} />

                  <br /><br />
                  <div className="flex flex-col items-center w-full">
                    <div className="w-12 h-12 rounded-xl bg-blue-50/80 text-blue-600 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-blue-100/80">
                      <IconComponent size={22} strokeWidth={2} />
                    </div>
                    <br />
                    <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-2 transition-colors duration-200 group-hover:text-blue-600">
                      {item.tag}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug mb-3">
                      {item.title}
                    </h3>
                    <br />
                    <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
                      {item.desc}
                    </p>
                  </div>
                  <br />

                  <div className="mt-8 pt-4 border-t border-slate-100 w-full flex justify-center">
                    <a
                      href="#explore"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 transition-all duration-200"
                    >
                      <span>Explore Metric</span>
                      <ArrowRight
                        size={14}
                        className="transform transition-transform duration-200 group-hover:translate-x-1.5"
                      />
                    </a>
                  </div>
                  <br /><br />
                </div>
              );
            })}
          </div>
        </div>
        <br /><br /><br /><br /><br /><br />
      </Container>
    </section>
  );
};

export default ResumeUpload;