// src/servicesPages/Geyser.jsx
import React from "react";

export default function Geyser() {
  const services = [
    {
      category: "Geyser Services",
      items: [
        {
          title: "Geyser check-up",
          details: [
            "Check-up for heating issues, power problems, leaks, and thermostat faults.",
            "Includes safety and pressure valve inspection.",
          ],
          price: "₹249",
        },
        {
          title: "Geyser service (upto 10 ltr.)",
          details: [
            "Cleaning, repair, and maintenance of heating element, thermostat, and valves.",
            "Fixes leaks, power issues, and improves performance.",
          ],
          price: "₹449",
        },
        {
          title: "Geyser service (11-25 ltr.)",
          details: [
            "Cleaning, repair, and maintenance of heating element, thermostat, and valves.",
            "Fixes leaks, power issues, and improves performance.",
          ],
          price: "₹549",
        },
        {
          title: "Geyser service (more than 25 ltr.)",
          details: [
            "Cleaning, repair, and maintenance of heating element, thermostat, and valves.",
            "Fixes leaks, power issues, and improves performance.",
          ],
          price: "₹599",
        },
        {
          title: "Geyser installation",
          details: [
            "Professional and safe installation with correct wiring and fittings.",
            "Ensures proper water flow and pressure for efficient operation.",
          ],
          price: "₹399",
        },
        {
          title: "Geyser uninstallation",
          details: [
            "Safe removal of geyser without damage.",
            "Handles water and power disconnection properly.",
          ],
          price: "₹399",
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
          Need Geyser Installation or Service?
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          Book expert geyser repair, installation, or maintenance today!
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
