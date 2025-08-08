import React, { useState } from "react";
import "../App.css"; // optional, for styling modal

export default function XModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Empty field validation
    for (const field in formData) {
      if (!formData[field].trim()) {
        alert(`Please fill out the ${field} field.`);
        return;
      }
    }

    // Email validation
    if (!formData.email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    // Phone validation (10 digits only)
    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    // DOB validation (not in the future)
    const dobDate = new Date(formData.dob);
    const today = new Date();
    if (dobDate > today) {
      alert("Invalid date of birth. Please select a valid date.");
      return;
    }

    // Reset and close modal
    setFormData({ username: "", email: "", phone: "", dob: "" });
    setIsModalOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      {/* Initial render button */}
      {!isModalOpen && (
        <button onClick={() => setIsModalOpen(true)}>Open Form</button>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div>
                <label>Username:</label>
                <input
                  id="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Phone:</label>
                <input
                  id="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Date of Birth:</label>
                <input
                  id="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
