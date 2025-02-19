import { useState } from "react";

const ReferralModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required`;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:5000/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");

      alert("Referral submitted successfully!");
      onClose();
    } catch (error) {
      alert("Error submitting referral");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-xl z-50"
      onClick={onClose} // Close modal on clicking outside
    >
      <div
        className="bg-white p-6 rounded-2xl shadow-xl w-96 relative z-50"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <h2 className="text-xl font-bold mb-4 text-center">Refer a Friend</h2>
        <form onSubmit={handleSubmit}>
          {["referrerName", "referrerEmail", "refereeName", "refereeEmail"].map((field) => (
            <div key={field} className="mb-4">
              <label className="block text-sm font-semibold capitalize mb-1">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type={field.includes("Email") ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field]}</p>}
            </div>
          ))}
          <div className="flex justify-between items-center mt-5">
            <button type="button" onClick={onClose} className="text-gray-600 px-3 py-2 hover:underline">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferralModal;
