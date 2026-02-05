// src/pages/Reviews.jsx
import React from "react";

export default function Reviews() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6 space-y-16">
      <h2 className="text-3xl font-bold text-center">Our Work Showcase</h2>

      {/* Photos Section */}
      <section>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Photos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src="/images/work1.jpg"
            alt="AC Repair"
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
          <img
            src="/images/work2.jpg"
            alt="Fridge Repair"
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
          <img
            src="/images/work3.jpg"
            alt="Washing Machine Repair"
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
        </div>
      </section>

      {/* Videos Section */}
      <section>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Videos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <video
            src="/videos/work1.mp4"
            controls
            className="rounded-lg shadow-md w-full h-72 object-cover"
          ></video>
          <video
            src="/videos/work2.mp4"
            controls
            className="rounded-lg shadow-md w-full h-72 object-cover"
          ></video>
        </div>
      </section>
    </div>
  );
}
