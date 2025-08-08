import React, { useState } from 'react';

const XModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: ''
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form data when modal closes
    setFormData({
      username: '',
      email: '',
      phone: '',
      dob: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    // Validate email format first (must contain @) if email is provided
    if (formData.email.trim() && !formData.email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return false;
    }

    // Validate phone number format (must be exactly 10 digits) if phone is provided
    const phoneRegex = /^\d{10}$/;
    if (formData.phone.trim() && !phoneRegex.test(formData.phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return false;
    }

    // Validate date of birth (must not be in the future) if date is provided
    if (formData.dob.trim()) {
      const selectedDate = new Date(formData.dob);
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0); // Reset time to compare only dates
      
      if (selectedDate > currentDate) {
        alert('Invalid phone number. Please enter a 10-digit phone number.');
        return false;
      }
    }

    // Check if any field is empty (after format validation)
    if (!formData.username.trim()) {
      alert('Please fill out the Username field.');
      return false;
    }
    if (!formData.email.trim()) {
      alert('Please fill out the Email field.');
      return false;
    }
    if (!formData.phone.trim()) {
      alert('Please fill out the Phone field.');
      return false;
    }
    if (!formData.dob.trim()) {
      alert('Please fill out the Date of Birth field.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // If validation passes, close modal and reset form
      closeModal();
    }
  };

  const handleModalClick = (e) => {
    // Close modal if clicking outside the modal content
    if (e.target.className === 'modal') {
      closeModal();
    }
  };

  return (
    <div className="app">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif'
      }}>
        <button 
          onClick={openModal}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Open Form
        </button>
      </div>

      {isModalOpen && (
        <div 
          className="modal" 
          onClick={handleModalClick}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
        >
          <div 
            className="modal-content"
            style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '8px',
              width: '400px',
              maxWidth: '90vw',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              fontFamily: 'Arial, sans-serif'
            }}
          >
            <h2 style={{ 
              marginBottom: '20px', 
              textAlign: 'center',
              color: '#333',
              fontSize: '24px'
            }}>
              Fill Details
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="username" style={{ 
                  display: 'block', 
                  marginBottom: '5px',
                  fontWeight: 'bold',
                  color: '#555'
                }}>
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px',
                    boxSizing: 'border-box'
                  }}
                  placeholder="Enter username"
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="email" style={{ 
                  display: 'block', 
                  marginBottom: '5px',
                  fontWeight: 'bold',
                  color: '#555'
                }}>
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px',
                    boxSizing: 'border-box'
                  }}
                  placeholder="Enter email"
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="phone" style={{ 
                  display: 'block', 
                  marginBottom: '5px',
                  fontWeight: 'bold',
                  color: '#555'
                }}>
                  Phone:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px',
                    boxSizing: 'border-box'
                  }}
                  placeholder="Enter phone number"
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="dob" style={{ 
                  display: 'block', 
                  marginBottom: '5px',
                  fontWeight: 'bold',
                  color: '#555'
                }}>
                  Date of Birth:
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;