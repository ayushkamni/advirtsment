// src/servicesPages/WaterPurifier.jsx
import React from "react";

export default function WaterPurifier() {
  const services = [
    {
      category: "Service",
      items: [
        {
          title: "Service",
          details: [
            "Thorough inspection and repair of your RO for issues like leakage, less water flow, dirty/smelly water etc.",
            "Cleaning of Machine and Filters",
            "Complete Water Purifier Checkup",
            "Water Quality Test (TDS)",
            "Filter / Spare Parts Rate applicable as per rate card",
          ],
          price: "₹349",
        },
      ],
    },
    {
      category: "Repair",
      items: [
        {
          title: "Repair",
          details: [
            "Price includes visit & diagnosis charges",
            "Spare part rate applicable as per rate card",
            "Chip, control box repair charge applicable extra",
            "Water Quality Test (TDS)",
          ],
          price: "₹349",
        },
      ],
    },
    {
      category: "AMC",
      items: [
        {
          title: "AMC Plan 1",
          details: [
            "Three periodical services",
            "Any additional visit by intimation",
            "Backwashing filters/tank cleaning and TDS check",
          ],
          price: "₹999",
        },
        {
          title: "AMC Plan 2",
          details: [
            "Three periodical services",
            "Any additional visit by intimation",
            "Three pre-sediment spun filters & inline filters",
            "Replacements of filters/tank cleaning and TDS check",
            "This plan includes RCI parts only",
          ],
          price: "₹2500",
        },
        {
          title: "AMC Plan 3",
          details: [
            "Three periodical services",
            "Any additional visit by intimation",
            "Three pre-sediment spun filters & electrical parts",
            "Backwashing filters/tank cleaning and TDS check",
            "This plan includes RCI parts only",
          ],
          price: "₹2600",
        },
        {
          title: "AMC Plan 4",
          details: [
            "Three periodical services",
            "Any additional visit by intimation",
            "Three pre-sediment spun filters, inline filters & membrane",
            "Replacements of filters & membrane /tank cleaning and TDS check",
            "This plan includes RCI parts only",
          ],
          price: "₹3999",
        },
        {
          title: "AMC Plan 5 (CAMC)",
          details: [
            "Three periodic services",
            "Additional visits with prior intimation",
            "Includes sediment spun, inline filters, membrane, and electrical parts",
            "Covers filter & membrane, tank cleaning, and TDS check",
            "RCI parts only",
          ],
          price: "₹4999",
        },
        {
          title: "AMC Plan 6 (CAMC)",
          details: [
            "Three periodic services",
            "Additional visits with prior intimation",
            "Includes sediment spun, inline filters, membrane, electrical, and faulty parts",
            "Includes tank cleaning and TDS check",
            "Only RCI parts included",
          ],
          price: "₹5999",
        },
      ],
    },
    {
      category: "Installation",
      items: [
        {
          title: "Installation",
          details: [
            "Include fixing of water purifier stand on wall",
            "Connect inlet water assembly to water purifier",
            "Connect electricity supply to water purifier",
            "Free Water Quality Test (TDS) every time",
          ],
          price: "₹399",
        },
      ],
    },
    {
      category: "Un-installation",
      items: [
        {
          title: "Un-installation",
          details: [
            "Dismantle of water purifier from the wall",
            "Dismantle of inlet water assembly from water purifier",
            "Disconnect electricity supply to water purifier",
            "Packing water purifier at a place",
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

      {/* Call to Action */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Book Your Water Purifier Service?
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
