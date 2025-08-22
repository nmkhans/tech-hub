"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  Star,
  ShoppingCart,
  Grid3X3,
  List,
} from "lucide-react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching products
    const allProducts = [
      {
        name: "Premium Wireless Headphones",
        price: 199.99,
        originalPrice: 249.99,
        image:
          "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
        rating: 4.8,
        reviews: 234,
        category: "Electronics",
        description:
          "High-quality wireless headphones with noise cancellation"
      },
      {
        name: "Smart Fitness Watch",
        price: 299.99,
        image:
          "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500",
        rating: 4.6,
        reviews: 189,
        category: "Wearables",
        description:
          "Advanced fitness tracking with heart rate monitoring"
      },
      {
        name: "Professional Camera Lens",
        price: 599.99,
        originalPrice: 699.99,
        image:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500",
        rating: 4.9,
        reviews: 156,
        category: "Photography",
        description:
          "Professional-grade camera lens for stunning photography"
      },
      {
        name: "Minimalist Laptop Stand",
        price: 79.99,
        image:
          "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=500",
        rating: 4.7,
        reviews: 98,
        category: "Accessories",
        description: "Ergonomic laptop stand for better posture"
      },
      {
        name: "Wireless Bluetooth Speaker",
        price: 129.99,
        image:
          "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500",
        rating: 4.5,
        reviews: 267,
        category: "Electronics",
        description: "Portable speaker with amazing sound quality"
      },
      {
        name: "Mechanical Gaming Keyboard",
        price: 149.99,
        originalPrice: 179.99,
        image:
          "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=500",
        rating: 4.8,
        reviews: 143,
        category: "Electronics",
        description: "RGB mechanical keyboard for gaming enthusiasts"
      }
    ];
    setProducts(allProducts);
  }, []);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            All Products
          </h1>
          <p className="text-gray-600">
            Discover our complete collection of amazing products
          </p>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {products.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid/List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-md`}
            >
              <CardContent>
                <>
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.originalPrice && (
                      <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
                        Sale
                      </Badge>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {product.rating}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>

                    <Link href={`/products/${product.id}`}>
                      <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between gap-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-900">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <Link href={`/products/${product.id}`}>
                        <Button
                          size="sm"
                          className="group-hover:bg-blue-700 transition-colors"
                        >
                          View Detail
                        </Button>
                      </Link>
                    </div>
                  </div>
                </>
              </CardContent>
            </Card>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
