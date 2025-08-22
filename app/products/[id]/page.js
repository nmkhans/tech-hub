"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Minus,
  Plus,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";

export default function ProductDetail({ params }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { id } = use(params);

  useEffect(() => {
    // Simulate fetching product by ID
    const allProducts = [
      {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 199.99,
        originalPrice: 249.99,
        image:
          "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
        rating: 4.8,
        reviews: 234,
        category: "Electronics",
        description:
          "High-quality wireless headphones with noise cancellation",
      },
      {
        id: 2,
        name: "Smart Fitness Watch",
        price: 299.99,
        image:
          "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500",
        rating: 4.6,
        reviews: 189,
        category: "Wearables",
        description:
          "Advanced fitness tracking with heart rate monitoring",
      },
      {
        id: 3,
        name: "Professional Camera Lens",
        price: 599.99,
        originalPrice: 699.99,
        image:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500",
        rating: 4.9,
        reviews: 156,
        category: "Photography",
        description:
          "Professional-grade camera lens for stunning photography",
      },
      {
        id: 4,
        name: "Minimalist Laptop Stand",
        price: 79.99,
        image:
          "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=500",
        rating: 4.7,
        reviews: 98,
        category: "Accessories",
        description: "Ergonomic laptop stand for better posture",
      },
      {
        id: 5,
        name: "Wireless Bluetooth Speaker",
        price: 129.99,
        image:
          "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500",
        rating: 4.5,
        reviews: 267,
        category: "Electronics",
        description: "Portable speaker with amazing sound quality",
      },
      {
        id: 6,
        name: "Mechanical Gaming Keyboard",
        price: 149.99,
        originalPrice: 179.99,
        image:
          "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=500",
        rating: 4.8,
        reviews: 143,
        category: "Electronics",
        description: "RGB mechanical keyboard for gaming enthusiasts",
      },
    ];

    const foundProduct = allProducts.find(
      (p) => p.id === parseInt(id)
    );
    setProduct(foundProduct);
  }, [id]);

  const images = product
    ? [product.image, product.image, product.image]
    : [];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={images[selectedImage]}
                alt={product?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden ${
                    selectedImage === index
                      ? "ring-2 ring-blue-500"
                      : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product?.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product?.category}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product?.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= Math.floor(product?.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-medium">
                  {product?.rating}
                </span>
                <span className="text-gray-500">
                  ({product?.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${product?.price}
                </span>
                {product?.originalPrice && (
                  <span className="text-2xl text-gray-500 line-through">
                    ${product?.originalPrice}
                  </span>
                )}
                {product?.originalPrice && (
                  <Badge className="bg-red-100 text-red-800">
                    Save $
                    {(
                      product?.originalPrice - product?.price
                    ).toFixed(2)}
                  </Badge>
                )}
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product?.inStock ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-700 font-medium">
                      In Stock ({product?.stockCount} available)
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-red-700 font-medium">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setQuantity(Math.max(1, quantity - 1))
                    }
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setQuantity(
                        Math.min(product?.stockCount, quantity + 1)
                      )
                    }
                    disabled={quantity >= product?.stockCount}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  disabled={!product?.inStock}
                  className="flex-1 py-3 text-lg"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="py-3"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isWishlisted ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                </Button>
                <Button variant="outline" className="py-3">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product?.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product?.features?.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="flex items-center space-x-3 p-4">
                  <Truck className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-medium">Free Shipping</h4>
                    <p className="text-sm text-gray-600">
                      On orders over $100
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center space-x-3 p-4">
                  <RotateCcw className="w-8 h-8 text-green-600" />
                  <div>
                    <h4 className="font-medium">30-Day Returns</h4>
                    <p className="text-sm text-gray-600">
                      Hassle-free returns
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center space-x-3 p-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                  <div>
                    <h4 className="font-medium">2-Year Warranty</h4>
                    <p className="text-sm text-gray-600">
                      Full coverage
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
