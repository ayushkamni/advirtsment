// src/servicesPages/KitchenChimney.jsx
import React from "react";

export default function KitchenChimney() {
  const services = [
    {
      category: "Basic Cleaning",
      items: [
        {
          title: "Basic Chimney Cleaning (Wall Mount)",
          details: [
            "Filter and outer surface cleaning.",
            "Removes light grease and dust.",
            "Service by trained professionals.",
          ],
          price: "₹549",
        },
        {
          title: "Basic Chimney Cleaning (Island)",
          details: [
            "Filter and outer surface cleaning.",
            "Removes light grease and dust.",
            "Service by trained professionals.",
          ],
          price: "₹649",
        },
      ],
    },
    {
      category: "Chimney Check-up",
      items: [
        {
          title: "Chimney Check-up",
          details: [
            "Inspection of suction power, motor, and filters.",
            "Check for unusual noise or malfunction.",
            "Expert technician visit at your doorstep.",
          ],
          price: "₹160",
        },
      ],
    },
    {
      category: "Installation",
      items: [
        {
          title: "Chimney Installation (Wall Mount)",
          details: [
            "Expert installation of wall-mounted chimney.",
            "Proper fitting with all safety checks.",
            "Quick service done at your home.",
          ],
          price: "₹699",
        },
        {
          title: "Chimney Installation (Island)",
          details: [
            "Expert installation of island chimney.",
            "Proper fitting with all safety checks.",
            "Quick service done at your home.",
          ],
          price: "₹1099",
        },
      ],
    },
    {
      category: "Uninstallation",
      items: [
        {
          title: "Chimney Uninstallation (Wall Mount)",
          details: [
            "Safe removal of wall-mounted chimney.",
            "Careful handling to avoid damage.",
            "Quick and hassle-free service at your home.",
          ],
          price: "₹459",
        },
        {
          title: "Chimney Uninstallation (Island)",
          details: [
            "Safe removal of island chimney.",
            "Careful handling to protect your kitchen.",
            "Fast and hassle-free service at your home.",
          ],
          price: "₹799",
        },
      ],
    },
    {
      category: "Deep Cleaning",
      items: [
        {
          title: "Deep Chimney Cleaning (Wall Mount)",
          details: [
            "Deep cleaning of inside and outside parts.",
            "Removes heavy grease and oil buildup.",
            "Done by expert technicians at your home.",
          ],
          price: "₹1249",
        },
        {
          title: "Deep Chimney Cleaning (Island)",
          details: [
            "Deep cleaning of inside and outside parts.",
            "Removes heavy grease and oil buildup.",
            "Done by expert technicians at your home.",
          ],
          price: "₹1499",
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
          Need Chimney Cleaning or Installation?
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          Book expert service for your kitchen chimney now
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
