import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CONTACT_US_FORM } from "../utils/mutations"; // Import the mutation from your mutations.js file

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitContactUsForm] = useMutation(ADD_CONTACT_US_FORM);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await submitContactUsForm({
        variables: formData,
      });
      // Reset form data after successful submission, if needed
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      // Show success message or perform any other actions after successful submission
      console.log("Form submitted successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('../../background-image9.avif')", // Replace with the actual path to your image
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
            style={{
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
            style={{
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone (optional)"
            style={{
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            required
            style={{
              padding: "50px",
              marginBottom: "10px",
              borderRadius: "3px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              borderRadius: "3px",
              backgroundColor: "#007bff",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
