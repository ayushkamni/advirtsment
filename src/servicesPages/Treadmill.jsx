// src/servicesPages/Treadmill.jsx
import React from "react";

export default function Treadmill() {
  const services = [
    {
      category: "Treadmill Services",
      items: [
        {
          title: "Treadmill check-up",
          details: [
            "Check-up for belt, motor, display, and speed control issues.",
            "Inspect power, noise, and lubrication problems.",
            "Quick and expert technician visit at your home.",
          ],
          price: "₹249",
        },
        {
          title: "Treadmill repair service",
          details: [
            "Includes visit and diagnosis charges.",
            "Spare parts charged as per rate card.",
            "Motor, belt, and control board repair available.",
          ],
          price: "₹499",
        },
        {
          title: "Treadmill deep cleaning",
          details: [
            "Thorough cleaning of running belt, motor area, and console.",
            "Removes dust, dirt, and debris buildup.",
            "Improves performance and extends treadmill lifespan.",
          ],
          price: "₹699",
        },
        
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-5 px-6 max-w-6xl mx-auto space-y-12">
        {services.map((service, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-bold mb-6">{service.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                      {item.details.map((detail, j) => (
                        <li key={j}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-right">
                    <span className="text-blue-600 font-bold text-xl">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Need Treadmill Repair or Service?
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          Book certified experts for treadmill repair, cleaning, or installation.
        </p>
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
