// src/servicesPages/LedTv.jsx
import React from "react";

export default function LedTv() {
  const services = [
    {
      category: "Test",
      items: [
        {
          title: "Only For Test",
          details: ["Only for test"],
          price: "₹1",
        },
      ],
    },
    {
      category: "TV Check-up",
      items: [
        {
          title: "TV Check-up",
          details: [
            "Full TV health check (screen, sound, ports).",
            "Expert technician visit at your home.",
            "Quick & reliable service.",
          ],
          price: "₹249",
        },
      ],
    },
    {
      category: "Installation",
      items: [
        {
          title: "TV Installation (Under 26 inch)",
          details: [
            "Include Fixing of LED on Wall.",
            "Connect electricity supply to LED TV.",
            "Quick and reliable LED TV installation for a sleek, clutter-free setup.",
          ],
          price: "₹299",
        },
        {
          title: "TV Installation (32 - 43 inch)",
          details: [
            "Include Fixing of LED on Wall.",
            "Connect electricity supply to LED TV.",
            "Quick and reliable LED TV installation for a sleek, clutter-free setup.",
          ],
          price: "₹349",
        },
        {
          title: "TV Installation (46 - 55 inch)",
          details: [
            "Include Fixing of LED on Wall.",
            "Connect electricity supply to LED TV.",
            "Quick and reliable LED TV installation for a sleek, clutter-free setup.",
          ],
          price: "₹549",
        },
        {
          title: "TV Installation (Over 65 inch)",
          details: [
            "Include Fixing of LED on Wall.",
            "Connect electricity supply to LED TV.",
            "Quick and reliable LED TV installation for a sleek, clutter-free setup.",
          ],
          price: "₹749",
        },
      ],
    },
    {
      category: "Uninstallation",
      items: [
        {
          title: "TV Uninstallation (Under 46 inch)",
          details: [
            "Dismantle of LED TV from wall.",
            "Do all apps uninstallation from LED.",
            "Cleaning & packing LED at place.",
          ],
          price: "₹349",
        },
        {
          title: "TV Uninstallation (46 - 55 inch)",
          details: [
            "Dismantle of LED TV from wall.",
            "Do all apps uninstallation from LED.",
            "Cleaning & packing LED at place.",
          ],
          price: "₹399",
        },
        {
          title: "TV Uninstallation (Over 65 inch)",
          details: [
            "Dismantle of LED TV from wall.",
            "Do all apps uninstallation from LED.",
            "Cleaning & packing LED at place.",
          ],
          price: "₹599",
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
          Ready to Book Your LED TV Service?
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
