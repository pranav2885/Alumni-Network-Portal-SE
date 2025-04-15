import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Pencil } from "lucide-react";

export default function Profile() {
  const user = useSelector((state) => state.auth.userData);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  if (!user) return <Navigate to="/" replace />;

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatDateWithSuffix = (dateStr) => {
    if (!dateStr) return "";
  
    const [day, month, year] = dateStr.split("-").map(Number);
    if (!day || !month || !year) return dateStr;
  
    const date = new Date(year, month - 1, day);
  
    const getDaySuffix = (d) => {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };
  
    const suffix = getDaySuffix(day);
    const monthName = date.toLocaleString("default", { month: "long" });
  
    return (
      <>
        {day}
        <sup>{suffix}</sup> {monthName} {year}
      </>
    );
  };
  
  const renderField = (label, name, editable = false, formatter = null) => (
    <div className="flex flex-col">
      <label className="font-semibold text-gray-800">{label}:</label>
      {isEditing && editable ? (
        <input
          type="text"
          name={name}
          value={formData[name] || ""}
          onChange={handleChange}
          className="border px-2 py-1 rounded w-full"
        />
      ) : (
        <span>{formatter ? formatter(formData[name]) : (formData[name] || "—")}</span>
      )}
    </div>
  );

  return (
    <div className="relative w-full max-w-7xl mx-auto p-8 mt-16 bg-white shadow-xl rounded-2xl border">
      {/* Edit Button */}
      <button
        onClick={handleEditToggle}
        className="absolute top-4 right-4 text-gray-600 hover:text-blue-600 transition"
        title="Edit Profile"
      >
        <Pencil size={20} />
      </button>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        {isEditing ? (
          <div className="flex flex-col items-center">
            <img
              src={formData.imageURL || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-40 h-40 object-cover rounded-full border-4 border-blue-400 shadow-md mb-2"
            />
            <input
              type="text"
              name="imageURL"
              value={formData.imageURL || ""}
              onChange={handleChange}
              placeholder="Image URL"
              className="border px-2 py-1 rounded w-full"
            />
          </div>
        ) : (
          <img
            src={formData.imageURL || "https://via.placeholder.com/150"}
            alt={formData.name}
            className="w-40 h-40 object-cover rounded-full border-4 border-blue-400 shadow-md"
          />
        )}

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">{formData.name}</h2>
          <p className="text-gray-600 font-medium">{formData.PresentStatus}</p>
          <p className="text-sm text-gray-500 italic">{formData.PresentLocation}</p>
          <a
            href={`https://${formData.LinkedIn}`}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline block mt-2"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      {/* Profile Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
        {renderField("Student ID", "id")}
        {renderField("School", "School")}
        {renderField("Program", "Program")}
        {renderField("Branch", "Branch")}
        {renderField("Section", "Section")}
        {renderField("Passed Out Year", "PassedOut")}
        {renderField("CGPA", "CGPA")}
        {renderField("Email (Personal)", "personelEmail", true)}
        {renderField("Email (College)", "email")}
        {renderField("Gender", "gender")}
        {renderField("Date of Birth", "dob", false, formatDateWithSuffix)}
        {renderField("Mobile", "mobile")}
        {renderField("Path Chosen", "PathChosen")}
        {renderField("Job / Company", "job", true)}
        {renderField("Position", "position", true)}
        {renderField("Salary (LPA)", "Salary", true)}
        {renderField("Masters College", "MastersCollege", true)}
        {renderField("Masters Program", "MastersProgram", true)}
      </div>

      {/* Save Button */}
      {isEditing && (
        <div className="text-center mt-6">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => {
              setIsEditing(false);
              // Optionally update backend
              console.log("Updated profile data:", formData);
            }}
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}
