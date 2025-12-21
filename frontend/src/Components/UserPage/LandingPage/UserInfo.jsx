import { useState } from "react"
import axios from "axios"
import jsPDF from "jspdf"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function UserInfo() {
  const [data, setData] = useState({
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

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)

    setLoading(true)
    setError("")
    setPlan("")

    
    const payload = {
      ...data,
      height: parseInt(data.height),
      weight: parseInt(data.weight),
      age: parseInt(data.age),
    }

    try {
      const res = await axios.post(
        "https://fitness-helper-ai-assessment.onrender.com/fitness/add",
        payload
      )
      setPlan(res.data.plan)
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Failed to generate plan. Try again."
      toast.error(message)
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  const generatePDF = () => {
    const doc = new jsPDF()
    doc.setFontSize(18)
    doc.text("Your AI Fitness Plan", 10, 20)
    doc.setFontSize(12)
    doc.text(doc.splitTextToSize(plan, 180), 10, 30)
    doc.save("AI_Fitness_Plan.pdf")
  }

  // helper for red border AFTER submit
  const errorStyle = (field) =>
    submitted && !data[field] ? "border-red-500" : "border-gray-300"

  return (
    <div className="w-full min-h-screen pt-20 bg-gray-50">
      <h1 className="text-center text-4xl font-bold mb-10">
        Your Fitness Details
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
        <form className="space-y-6" onSubmit={handleSubmit}>

          <input
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
            className={`w-full p-3 border rounded ${errorStyle("name")}`}
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={data.age}
            onChange={handleChange}
            className={`w-full p-3 border rounded ${errorStyle("age")}`}
          />

          <select
            name="gender"
            value={data.gender}
            onChange={handleChange}
            className={`w-full p-3 border rounded ${errorStyle("gender")}`}
          >
            <option value="" disabled>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input
            name="height"
            placeholder="Height (170 or 170cm)"
            value={data.height}
            onChange={handleChange}
            className={`w-full p-3 border rounded ${errorStyle("height")}`}
          />

          <input
            name="weight"
            placeholder="Weight (kg)"
            value={data.weight}
            onChange={handleChange}
            className={`w-full p-3 border rounded ${errorStyle("weight")}`}
          />

          <select
            name="goal"
            value={data.goal}
            onChange={handleChange}
            className={`w-full p-3 border rounded ${errorStyle("goal")}`}
          >
            <option value="" disabled>Select goal</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Maintenance">Maintenance</option>
          </select>

          <select
            name="level"
            value={data.level}
            onChange={handleChange}
            className={`w-full p-3 border rounded ${errorStyle("level")}`}
          >
            <option value="" disabled>Select level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <select
            name="location"
            value={data.location}
            onChange={handleChange}
            className={`w-full p-3 border rounded ${errorStyle("location")}`}
          >
            <option value="" disabled>Select location</option>
            <option value="Home">Home</option>
            <option value="Gym">Gym</option>
            <option value="Outdoor">Outdoor</option>
          </select>

          <select
            name="dietary"
            value={data.dietary}
            onChange={handleChange}
            className={`w-full p-3 border rounded ${errorStyle("dietary")}`}
          >
            <option value="" disabled>Select diet</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
            <option value="Vegan">Vegan</option>
            <option value="Keto">Keto</option>
          </select>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded"
          >
            Generate My AI Fitness Plan
          </button>
        </form>
      </div>

      {loading && <p className="text-center mt-6">Generating plan...</p>}

      {plan && (
        <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded shadow">
          <button
            onClick={generatePDF}
            className="mb-4 bg-black text-white px-4 py-2 rounded"
          >
            Download PDF
          </button>
          <pre className="whitespace-pre-wrap">{plan}</pre>
        </div>
      )}
    </div>
  )
}
