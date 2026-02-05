// src/servicesPages/AirConditioner.jsx
import React from "react";

export default function AirConditioner() {
  const services = [
    {
      category: "Repair",
      items: [
        {
          title: "Repair Service (Window AC)",
          details: [
            "Checks the elements properly",
            "Checks all the wears and tears of the wires",
            "Checks the performance of the air conditioner",
            "Troubleshoots the problem in an efficient manner",
          ],
          price: "₹449",
        },
        {
          title: "Repair Service (Split AC)",
          details: [
            "Checks the elements properly",
            "Checks all the wears and tears of the wires",
            "Checks the performance of the air conditioner",
            "Troubleshoots the problem in an efficient manner",
          ],
          price: "₹549",
        },
      ],
    },
    {
      category: "Uninstallation",
      items: [
        {
          title: "Uninstallation (Window AC)",
          details: [
            "Dismantle of Air Conditioner from the Window",
            "Dismantle of inlet AC assembly from Air Conditioner",
            "Disconnect electricity supply to Air Conditioner",
            "Packing Air Conditioner at a place",
          ],
          price: "₹399",
        },
        {
          title: "Uninstallation (Split AC)",
          details: [
            "Dismantle of AC stand from Windows",
            "Dismantle/Fixed Front air grill",
            "Disconnect electricity supply to Air Conditioner",
            "Packing Air Conditioner at a place",
          ],
          price: "₹549",
        },
      ],
    },
    {
      category: "Foam-jet",
      items: [
        {
          title: "Foam-jet Service (1 AC)",
          details: [
            "Applicable for both window or split AC",
            "Indoor unit deep cleaning with foam & jet spray",
          ],
          price: "₹499",
        },
        {
          title: "Foam-jet Service (2 ACs)",
          details: [
            "Applicable for both window or split ACs",
            "Indoor unit deep cleaning with foam & jet spray",
            "Jet-spray cleaning of outer unit",
            "Final checks & post-service cleaning",
          ],
          price: "₹999",
        },
        {
          title: "Foam-jet Service (3 ACs)",
          details: [
            "Applicable for both window & split ACs",
            "Advanced Foam-jet cleaning of indoor unit",
            "Jet-spray cleaning of outer unit",
            "Final checks & post-service cleaning",
          ],
          price: "₹1399",
        },
        {
          title: "Foam-jet Service (4 ACs)",
          details: [
            "Applicable for both window & split ACs",
            "Advanced Foam-jet cleaning of indoor unit",
            "Jet-spray cleaning of outer unit",
            "Final checks & post-service cleaning",
          ],
          price: "₹1899",
        },
        {
          title: "Foam-jet Service (5 ACs)",
          details: [
            "Applicable for both window & split ACs",
            "Advanced Foam-jet cleaning of indoor unit",
            "Jet-spray cleaning of outer unit",
            "Final checks & post-service cleaning",
          ],
          price: "₹2299",
        },
      ],
    },
    {
      category: "Gas Filling",
      items: [
        {
          title: "Gas Filling (Window AC)",
          details: [
            "First, check the compressor.",
            "Connect valve on the compressor process tube.",
            "Fill gas according to air conditioner.",
            "Check leakage after refill gas.",
          ],
          price: "₹2499",
        },
        {
          title: "Gas Filling (Split AC 1.0 Ton)",
          details: [
            "First, check the compressor.",
            "Connect valve on the compressor process tube.",
            "Fill gas according to air conditioner.",
            "Check leakage after refill gas.",
          ],
          price: "₹2499",
        },
        {
          title: "Gas Filling (Split AC 1.5 Ton)",
          details: [
            "First, check the compressor.",
            "Connect valve on the compressor process tube.",
            "Fill gas according to air conditioner.",
            "Check leakage after refill gas.",
          ],
          price: "₹2499",
        },
        {
          title: "Gas Filling (Split AC 2.0 Ton)",
          details: [
            "First, check the compressor.",
            "Connect valve on the compressor process tube.",
            "Fill gas according to air conditioner.",
            "Check leakage after refill gas.",
          ],
          price: "₹2499",
        },
      ],
    },
    {
      category: "Installation",
      items: [
        {
          title: "Installation (Window AC)",
          details: [
            "Include fixing of AC stand in Windows",
            "Connect inlet AC assembly to Air Conditioner",
            "Connect electricity supply to Air Conditioner",
          ],
          price: "₹399",
        },
        {
          title: "Installation (Split AC)",
          details: [
            "Include fixing of AC stand in Windows",
            "Connect inlet AC assembly to Air Conditioner",
            "Connect electricity supply to Air Conditioner",
          ],
          price: "₹549",
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
          Ready to Book Your AC Service?
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
