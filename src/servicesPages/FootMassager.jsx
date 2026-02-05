// src/servicesPages/FootMassager.jsx
import React from "react";

export default function FootMassager() {
  const services = [
    {
      category: "Foot Massager Services",
      items: [
        {
          title: "Foot massager check-up",
          details: [
            "Check-up for motor, roller, and vibration issues.",
            "Inspects power, noise, and heating problems.",
            "Expert technician visit for accurate diagnosis.",
          ],
          price: "₹249",
        },
        {
          title: "Foot massager repair",
          details: [
            "Includes visit and diagnosis charges.",
            "Spare parts charged as per rate card.",
            "Motor, switch, and control board repair available.",
          ],
          price: "₹399",
        },
        {
          title: "Foot massager deep cleaning",
          details: [
            "Thorough cleaning of inner and outer parts.",
            "Removes dust, dirt, and buildup for smooth operation.",
            "Improves performance and increases lifespan.",
          ],
          price: "₹499",
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
          Need Foot Massager Service or Repair?
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          Book expert technicians for quick and reliable service at home.
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
