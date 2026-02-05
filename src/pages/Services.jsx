
import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Water Purifier",
      img: "/icons/water-purifier.webp",
      desc: "Repair, maintenance, and installation of water purifiers.",
    },
    {
      title: "Air Conditioner",
      img: "/icons/airconditioner.webp",
      desc: "AC repair, installation, and maintenance at home.",
    },
    {
      title: "Fridge",
      img: "/icons/fridge.webp",
      desc: "Quick refrigerator repair & maintenance.",
    },
    {
      title: "Washing Machine",
      img: "/icons/washing-machine.webp",
      desc: "Repair and maintenance for washing machines.",
    },

    {
      title: "LED TV",
      img: "/icons/led-tv.webp",
      desc: "LED TV repair and servicing at home.",
    },
    {
      title: "Air Purifier",
      img: "/icons/air-purifier.webp",
      desc: "Air purifier maintenance and service.",
    },
    {
      title: "Geyser",
      img: "/icons/geyser.webp",
      desc: "Geyser repair and installation service.",
    },
    {
      title: "Foot Massager",
      img: "/icons/foot-massager.jpeg",
      desc: "Foot massager repair and service at home.",
    },
    {
      title: "Treadmills",
      img: "/icons/treadmill.png",
      desc: "Treadmill repair and maintenance.",
    },
    {
      title: "Microwave",
      img: "/icons/microwave.webp",
      desc: "Microwave repair and service at home.",
    },
    {
      title: "Kitchen Chimney",
      img: "/icons/kitchen-chimney.webp",
      desc: "Chimney cleaning, repair, and installation.",
    },
    {
      title: "Vacuum Cleaner",
      img: "/icons/vacuum-cleaner.webp",
      desc: "Vacuum cleaner repair and maintenance.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative w-full h-[400px]">
        <img
          src="/images/services-banner.webp"
          alt="Services Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 bg-opacity-10 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Appliance Services</h1>
          <p className="text-lg md:text-xl">Repair, maintenance, and installation at your home</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <Link 
            key={idx} 
            to={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transform hover:-translate-y-2 transition">
              <img src={service.img} alt={service.title} className="w-24 h-24 mb-4 object-contain" />
              <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>


      {/* Optional CTA */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Any Appliance Service?</h2>
        <p className="text-lg md:text-xl mb-6">Book a technician at your doorstep quickly and easily.</p>
        <Link
          to="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Book Now
        </Link>
      </section>
    </div>
  );
}
