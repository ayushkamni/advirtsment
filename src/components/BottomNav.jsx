import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaTools, FaEnvelope, FaPhone, FaStar } from "react-icons/fa"; // ✅ Added FaStar

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { title: "Home", icon: <FaHome />, path: "/" },
    { title: "Services", icon: <FaTools />, path: "/services" },
    { title: "Reviews", icon: <FaStar />, path: "/reviews" }, // ✅ Review button
    { title: "Contact", icon: <FaEnvelope />, path: "/contact" },
    { title: "Call", icon: <FaPhone />, path: "tel:+919634829957" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t lg:hidden z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) =>
          item.title === "Call" ? (
            <a
              key={item.title}
              href={item.path}
              className="flex flex-col items-center text-sm text-gray-600"
            >
              <div className="text-xl">{item.icon}</div>
              <span>{item.title}</span>
            </a>
          ) : (
            <Link
              key={item.title}
              to={item.path}
              className={`flex flex-col items-center text-sm ${
                location.pathname === item.path
                  ? "text-blue-600"
                  : "text-gray-600"
              }`}
            >
              <div className="text-xl">{item.icon}</div>
              <span>{item.title}</span>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
