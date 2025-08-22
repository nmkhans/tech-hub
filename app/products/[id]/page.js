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
import ProductDetailImage from "@/components/ProductDetailImage";

export default async function ProductDetail({ params }) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`,
    {
      cache: "no-store", 
    }
  );
  const { data: product } = await res.json();

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
          <ProductDetailImage
            image={product?.image}
            name={product?.name}
          />

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
                        star <=
                        Math.floor(product?.rating?.$numberDecimal)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-medium">
                  {product?.rating?.$numberDecimal}
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
