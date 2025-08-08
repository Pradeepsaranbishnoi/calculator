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

    const { username, email, phone, dob } = formData;

    // Username validation
    if (!username.trim()) {
        alert("Please fill out the username field.");
        return;
    }

    // Email validation
    if (!email.trim()) {
        alert("Please fill out the email field.");
        return;
    }
    if (!email.includes("@")) {
        alert("Invalid email. Please check your email address.");
        return;
    }

    // Phone validation
    if (!phone.trim()) {
        alert("Please fill out the phone field.");
        return;
    }
    if (!/^\d{10}$/.test(phone)) {
        alert("Invalid phone number. Please enter a 10-digit phone number.");
        return;
    }

    // DOB validation
    if (!dob.trim()) {
        alert("Please fill out the dob field.");
        return;
    }
    const dobDate = new Date(dob);
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
