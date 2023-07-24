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
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone (optional)"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Message"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUsForm;
