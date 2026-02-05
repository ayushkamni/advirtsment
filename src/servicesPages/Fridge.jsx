// src/servicesPages/Fridge.jsx
import React from "react";

export default function Fridge() {
  const services = [
    {
      category: "Repair",
      items: [
        {
          title: "Repair Service",
          details: [
            "Expert repair service for all types of refrigerators.",
            "Fixes cooling issues, noise, and more with genuine parts.",
            "Parts chargeable as per rate card.",
          ],
          price: "₹249",
        },
      ],
    },
    {
      category: "Uninstallation",
      items: [
        {
          title: "Uninstallation Service",
          details: [
            "Fridge uninstallation with safe disconnection.",
            "Handles all types and models.",
            "Quick, easy, and damage-free service.",
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
            "Deep cleaning for all types of Fridge.",
            "Removes stains and food residue.",
            "Ensures hygiene and better performance.",
          ],
          price: "₹399",
        },
      ],
    },
    {
      category: "Check-up",
      items: [
        {
          title: "Double Door Refrigerator Check-up (Inverter)",
          details: [
            "Double door inverter fridge check-up for cooling, power, and frost issues.",
            "Fix water leaks, noise, and other problems.",
            "Quick and expert service.",
          ],
          price: "₹99",
        },
        {
          title: "Double Door Refrigerator Check-up (Non-Inverter)",
          details: [
            "Double door non-inverter fridge check-up for cooling, power, and frost issues.",
            "Fix water leaks, noise, and other problems.",
            "Quick and expert service.",
          ],
          price: "₹99",
        },
        {
          title: "Side-by-side Door Refrigerator Check-up",
          details: [
            "Side-by-side fridge check for cooling, power, noise, and water leaks.",
            "Fix frost, freezer issues, and leaks in ice bucket or compartment.",
            "Fast, expert service.",
          ],
          price: "₹99",
        },
        {
          title: "Single Door Refrigerator Check-up",
          details: [
            "Single door fridge check-up for power, cooling, and frost issues.",
            "Fix water leaks, door problems, and noise.",
            "Fast, expert service.",
          ],
          price: "₹99",
        },
      ],
    },
    {
      category: "Installation",
      items: [
        {
          title: "Installation Service",
          details: [
            "Fridge installation for all models.",
            "Includes proper setup, leveling, and connection.",
            "Fast, safe, and reliable service.",
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

      {/* Call to Action */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Book Your Refrigerator Service?
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          Fill the form or call us now
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
