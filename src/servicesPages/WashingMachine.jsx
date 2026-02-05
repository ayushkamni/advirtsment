// src/servicesPages/WashingMachine.jsx
import React from "react";

export default function WashingMachine() {
  const services = [
    {
      category: "Uninstallation",
      items: [
        {
          title: "Uninstallation Service",
          details: [
            "Uninstallation for top load, front load, and semi-automatic machines.",
            "Proper setup and safe removal by experts.",
            "Quick and reliable service.",
          ],
          price: "₹399",
        },
      ],
    },
    {
      category: "Automatic Machine Check-up",
      items: [
        {
          title: "Automatic Top Load Machine Check-up",
          details: [
            "Not spinning, washing, or draining properly.",
            "Error codes or display issues.",
            "Power problems or machine not turning on.",
            "Unusual noise, vibration, or unknown issues.",
          ],
          price: "₹160",
        },
        {
          title: "Automatic Front Load Machine Check-up",
          details: [
            "Not spinning, washing, or draining properly.",
            "Error codes or digital display issues.",
            "Power problems or machine not starting.",
            "Loud noise, vibration, or unknown faults.",
          ],
          price: "₹160",
        },
      ],
    },
    {
      category: "Semi-Automatic Machine Check-up",
      items: [
        {
          title: "Semi-Automatic Machine Check-up",
          details: [
            "Not spinning, washing, or draining properly.",
            "Error codes or display not working.",
            "Power problems or machine not turning on.",
            "Noise, vibration, or unknown faults.",
          ],
          price: "₹160",
        },
      ],
    },
    {
      category: "Deep Cleaning",
      items: [
        {
          title: "Deep Cleaning (Semi-Automatic)",
          details: [
            "Deep cleaning for semi-automatic machines.",
            "Removes dirt, lint, and build-up.",
            "Boosts performance and life.",
          ],
          price: "₹599",
        },
        {
          title: "Deep Cleaning (Automatic)",
          details: [
            "Deep cleaning for automatic washing machines.",
            "Eliminates dirt, grime, and detergent residue.",
            "Enhances machine efficiency and lifespan.",
          ],
          price: "₹999",
        },
      ],
    },
    {
      category: "Installation",
      items: [
        {
          title: "Installation Service",
          details: [
            "Installation for top load, front load, and semi-automatic machines.",
            "Proper setup and safe installation by experts.",
            "Quick and reliable service.",
          ],
          price: "₹299",
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

      {/* Call to Action */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Book Your Washing Machine Service?
        </h2>
        <p className="text-lg sm:text-xl mb-6">Fill the form or call us now</p>
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
