import { useState } from "react"
import axios from "axios"
import jsPDF from "jspdf"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function UserInfo() {
  const [data, setdata] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    goal: "",
    level: "",
    location: "",
    dietary: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [plan, setPlan] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handlechange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  const generatePDF = () => {
    const doc = new jsPDF()
    doc.setFont("helvetica", "bold")
    doc.setFontSize(18)
    doc.text("Your AI Fitness Plan", 10, 20)
    doc.setFont("helvetica", "normal")
    doc.setFontSize(12)
    doc.text(doc.splitTextToSize(plan, 180), 10, 30)
    doc.save("AI_Fitness_Plan.pdf")
  }

  const handlesubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)

    setLoading(true)
    setError("")
    setPlan("")

    // ✅ clean height & weight only when sending
    const payload = {
      ...data,
      height: parseInt(data.height),
      weight: parseInt(data.weight),
    }

    try {
      const res = await axios.post(
        "https://fitness-helper-ai-assessment.onrender.com/fitness/add",
        payload
      )
      setPlan(res.data.plan)
      toast.error(res.data.message)
    } catch (err) {
  console.log("FULL ERROR:", err);
  console.log("RESPONSE:", err.response);
  console.log("DATA:", err.response?.data);

  const message =
    err.response?.data?.message ||
    err.message ||
    "Failed to generate plan. Try again.";

  toast.error(message);
  setError(message);
}

  }

  const borderStyle = (field) =>
    submitted && !data[field] ? "border-red-500" : "border-gray-300"

  return (
    <>
      <div className="w-full min-h-screen pt-20 bg-gray-50">
        {/* Heading */}
        <h1 className="text-center text-2xl md:text-4xl font-bold text-black mb-10">
          Your Fitness Details
        </h1>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10">
          {/* Vertical Text */}
          <div className="hidden lg:flex absolute left-8">
            <p
              className="text-black text-4xl tracking-widest mt-60"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              AI FITNESS COACH
            </p>
          </div>

          {/* Video */}
          <div className="w-full max-w-5xl rounded-2xl overflow-hidden">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="Video/fitness.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Form */}
          <div className="md:w-3/5 bg-white p-8 rounded-xl shadow-md">
            <form className="space-y-6">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handlechange}
                  className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${borderStyle(
                    "name"
                  )}`}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={data.age}
                    onChange={handlechange}
                    className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${borderStyle(
                      "age"
                    )}`}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">Gender</label>
                  <select
                    name="gender"
                    value={data.gender}
                    onChange={handlechange}
                    className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${borderStyle(
                      "gender"
                    )}`}
                  >
                    <option value="">Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">
                    Height (cm)
                  </label>
                  <input
                    type="text"
                    name="height"
                    value={data.height}
                    onChange={handlechange}
                    className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${borderStyle(
                      "height"
                    )}`}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-600 mb-1">
                    Weight (kg)
                  </label>
                  <input
                    type="text"
                    name="weight"
                    value={data.weight}
                    onChange={handlechange}
                    className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${borderStyle(
                      "weight"
                    )}`}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">
                  Fitness Goal
                </label>
                <select
                  name="goal"
                  value={data.goal}
                  onChange={handlechange}
                  className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${borderStyle(
                    "goal"
                  )}`}
                >
                  <option value="">Select goal</option>
                  <option>Weight Loss</option>
                  <option>Muscle Gain</option>
                  <option>Maintenance</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">
                  Fitness Level
                </label>
                <select
                  name="level"
                  value={data.level}
                  onChange={handlechange}
                  className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${borderStyle(
                    "level"
                  )}`}
                >
                  <option value="">Select level</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">
                  Workout Location
                </label>
                <select
                  name="location"
                  value={data.location}
                  onChange={handlechange}
                  className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${borderStyle(
                    "location"
                  )}`}
                >
                  <option value="">Select location</option>
                  <option>Home</option>
                  <option>Gym</option>
                  <option>Outdoor</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">
                  Dietary Preference
                </label>
                <select
                  name="dietary"
                  value={data.dietary}
                  onChange={handlechange}
                  className={`p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black ${borderStyle(
                    "dietary"
                  )}`}
                >
                  <option value="">Select diet</option>
                  <option>Veg</option>
                  <option>Non-Veg</option>
                  <option>Vegan</option>
                  <option>Keto</option>
                </select>
              </div>

              <button
                type="submit"
                onClick={handlesubmit}
                className="w-full mt-6 bg-black text-white py-3 rounded-md hover:bg-gray-900 transition"
              >
                Generate My AI Fitness Plan
              </button>
            </form>
          </div>
        </div>

        {loading && (
          <p className="text-center text-lg mt-10">
            Generating your AI fitness plan...
          </p>
        )}

        {error && (
          <p className="text-center text-red-500 mt-10">{error}</p>
        )}

        {plan && (
          <div className="max-w-4xl mx-auto mt-16 bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Your AI Fitness Plan
            </h2>

            <div className="flex justify-end mb-4">
              <button
                onClick={generatePDF}
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
              >
                Download PDF
              </button>
            </div>

            <div className="max-h-[500px] overflow-y-auto border rounded-lg p-4">
              <pre className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                {plan}
              </pre>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
