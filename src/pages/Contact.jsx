// src/pages/Contact.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date().toLocaleString();

console.log("Sending data:", { ...formData, time: now });

    emailjs
      .send(
        "service_goxru3p",
        "template_t779rca", 
        { ...formData, time: now },
        "WW1OS2_RFQaob0-5T"    
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          alert("❌ Failed to send message. Try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative w-full h-[400px] ">
        <img
          src="/images/contact-banner.webp"
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg md:text-xl">
            We are here to assist you with all services
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form
          className="bg-white p-8 rounded-xl shadow-md space-y-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows="5"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p className="text-gray-700">
            <strong>Address:</strong> Janta Rd, Chak Harati, Saharanpur, Uttar Pradesh, India
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> +91 96348 29957
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> princexpertsre@gmail.com
          </p>

          {/* Map */}
          <div className="mt-4">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.572522290777!2d77.5769281!3d29.9821837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ec14d1384dc13%3A0x370c2d5f5fc5fdcd!2sSalman%20Refrigeration%20%26%20electrical%20Or%20ac%20repair%20service%20in%20saharanpur!5e0!3m2!1sen!2sin!4v1695581371412!5m2!1sen!2sin"
              width="100%"
              height="250"
              className="rounded-lg"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
