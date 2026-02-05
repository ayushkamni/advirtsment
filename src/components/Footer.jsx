// src/components/Footer.jsx
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

                {/* Company Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">PrinceXpert</h3>
                    <p>Reliable repair and installation services at your doorstep.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/services" className="hover:text-blue-400">Services</a></li>
                        <li><a href="/reviews" className="hover:text-blue-400">Reviews</a></li>
                        <li><a href="/about" className="hover:text-blue-400">About</a></li>
                        <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
                    <p>📍 Janta Rd, Chak Harati, Saharanpur, U.P, India</p>
                    <p>📞 +91 9634829957</p>
                    <p>📧 support@PrinceXpert.com</p>
                </div>
            </div>

            <div className="text-center text-gray-900 text-sm mt-6">
                © {new Date().getFullYear()} PrinceXpert. All rights reserved.
            </div>
        </footer>
    );
}
