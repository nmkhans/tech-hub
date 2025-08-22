import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="text-2xl font-bold text-white">
                TechHub
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your premier destination for quality products at
              unbeatable prices. We're committed to providing
              exceptional shopping experiences.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-pink-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/add-product"
                  className="hover:text-white transition-colors"
                >
                  Sell with Us
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-white transition-colors"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">
              Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Home & Garden
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Sports
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>support@techhub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>123 Commerce St, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ShopHub. All rights reserved. Built with Next.js
            and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
