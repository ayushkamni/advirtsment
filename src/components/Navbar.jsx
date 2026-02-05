
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
          PrinceXpert
        </Link>

        {/* Menu - hidden on small devices */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link to="/reviews" className="hover:text-blue-600 transition">Reviews</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Call button - show only on large screens */}
        <a
          href="tel:+919876543210"
          className="hidden lg:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Call +91 96348 29957
        </a>

      
      </div>
    </nav>
  );
}
