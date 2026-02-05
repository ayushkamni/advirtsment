import { Link } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import heroBanner from "/images/hero-banner.webp";



export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollPosition = 0;

    const scrollStep = () => {
      if (!scrollContainer) return;

      scrollPosition += 1; // speed of scrolling
      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0; // reset to start
      }

      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scrollStep);
    };

    scrollStep();
  }, []);

  const reviews = [
    { name: "Ramesh Kumar", review: "Excellent service! My AC was repaired in no time." },
    { name: "Sita Devi", review: "Water purifier maintenance done perfectly. Highly recommend!" },
    { name: "Anil Sharma", review: "Very professional and quick service for my fridge." },
    { name: "Priya Singh", review: "Washing machine repair was fast and affordable." },
    { name: "Rahul Yadav", review: "AC installation was smooth and on time." },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative w-full">
        {/* Hero Image */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative">
          <img
            src={heroBanner}
            alt="Hero Banner"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/25 flex flex-col justify-center items-center text-white px-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Fast & Reliable Home Repairs
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
              AC, Fridge, Electronics & More at Your Doorstep
            </p>
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition"
            >
              Book a Service
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Services</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Water Purifier", img: "/icons/water-purifier.webp", link: "/services/water-purifier" },
            { title: "Air Conditioner", img: "/icons/airconditioner.webp", link: "/services/air-conditioner" },
            { title: "Fridge", img: "/icons/fridge.webp", link: "/services/fridge" },
            { title: "Washing Machine", img: "/icons/washing-machine.webp", link: "/services/washing-machine" },
          ].map((service, idx) => (
            <Link
              key={idx}
              to={service.link}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition"
            >
              {/* Icon */}
              <img
                src={service.img}
                alt={service.title}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-4 object-contain"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-center">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>


        {/* See More Button */}

        <div className="flex justify-center mt-8">

          <a

            href="/services"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            View All Services
          </a>

        </div>
      </section>



      {/* Why Choose Us */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose PrinceXpert?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          <div className="space-y-4">
            <div className="text-5xl">⏱️</div>
            <h3 className="text-xl font-semibold">On-Time Service</h3>
            <p className="text-gray-600">We arrive on schedule, every time.</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl">💯</div>
            <h4 className="text-xl font-semibold">Trusted Professionals</h4>
            <p className="text-gray-600">Experienced and verified technicians.</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl">🔧</div>
            <h4 className="text-xl font-semibold">Quality Repairs</h4>
            <p className="text-gray-600">High-quality parts and guaranteed work.</p>
          </div>
        </div>
      </section>


      {/* Reviews Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-hidden"
        >
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[280px] flex-shrink-0 bg-white rounded-2xl shadow-lg p-6"
            >
              <p className="text-gray-700 mb-4 text-lg">"{item.review}"</p>
              <h3 className="font-semibold text-gray-900 text-right">- {item.name}</h3>
            </div>
          ))}
        </div>
      </section>


      {/* Call to Action */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Technician Today?</h2>
        <p className="text-lg md:text-xl mb-6">Book a service now and get it done at your convenience.</p>
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
