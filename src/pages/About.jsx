// src/pages/About.jsx
import React from "react";

export default function About() {
  const team = [
    { name: "Salman", role: "Founder & CEO", img: "/icons/profile.png" },
    { name: "Mayank", role: "Head of Operations", img: "/icons/profile.png" },
    { name: "Nishant Raj", role: "Lead Technician", img: "/icons/profile.png" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative w-full h-[400px]">
        <img
          src="/images/about-banner.webp"
          alt="About Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25 bg-opacity-40 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">About Us</h1>
          <p className="text-lg md:text-xl">Reliable Home Repair & Appliance Services</p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center">Our Story</h2>
        <p className="text-gray-700 text-center">
          PrinceXpert was founded with a mission to provide fast, reliable, and professional home repair and appliance services. We aim to make your life easier by bringing skilled technicians directly to your doorstep.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-gray-700">
              To deliver timely and quality home services while building trust and satisfaction with every customer.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="text-gray-700">
              To be the most reliable and accessible home repair service provider in India, ensuring convenience and quality for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transform hover:-translate-y-2 transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Book a Service?</h2>
        <p className="text-lg md:text-xl mb-6">Reach out to us and get a technician at your doorstep.</p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Book Now
        </a>
      </section>
    </div>
  );
}
