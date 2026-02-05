// src/servicesPages/Microwave.jsx
import React from "react";

export default function Microwave() {
  const services = [
    {
      category: "Uninstallation",
      items: [
        {
          title: "Uninstallation Service",
          details: [
            "Dismantle of Microwave Oven in Kitchen.",
            "Dismantle/Fixed Front air grill.",
          ],
          price: "₹399",
        },
      ],
    },
    {
      category: "Deep Cleaning",
      items: [
        {
          title: "Deep Cleaning",
          details: [
            "Deep cleaning for all types of microwaves.",
            "Removes grease, stains, and food residue.",
          ],
          price: "₹399",
        },
      ],
    },
    {
      category: "Installation",
      items: [
        {
          title: "Installation Service",
          details: [
            "Include fixing of Microwave Oven in Kitchen.",
            "Connect inlet Microwave Oven assembly to Microwave Oven.",
            "Connect electricity supply to Microwave Oven.",
          ],
          price: "₹499",
        },
      ],
    },
    {
      category: "Microwave Check-up",
      items: [
        {
          title: "Microwave Check-up",
          details: [
            "Check-up for power, heating, noise, door, and display issues.",
            "Quick and reliable service by experts.",
          ],
          price: "₹160",
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
          Ready to Book Your Microwave Service?
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
