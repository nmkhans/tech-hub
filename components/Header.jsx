"use client";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">T</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">
              TechHub
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/products"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              href="/add-product"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Add Product
            </Link>
            <Link
              href="/login"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <User className="w-5 h-5" />
              <span>Login</span>
            </Link>
            <Button size="sm" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="w-full"
                />
              </div>
              <Link
                href="/products"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              >
                Products
              </Link>
              <Link
                href="/add-product"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              >
                Add Product
              </Link>
              <Link
                href="/login"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
