import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Discover Amazing
            <span className="block text-yellow-400">Products</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Shop the latest trends and find everything you need in one
            place. Quality products, unbeatable prices, and
            exceptional service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-10 text-lg h-12"
              >
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/add-product">
              <Button
                variant="outline"
                size="lg"
                className="text-white hover:bg-white hover:text-blue-600 font-semibold h-12 text-lg"
              >
                Sell Products
              </Button>
            </Link>
          </div>

          <div className="flex justify-center items-center space-x-8 text-sm">
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span>4.9/5 Rating</span>
            </div>
            <div>
              <span className="font-semibold">10,000+</span> Happy
              Customers
            </div>
            <div>
              <span className="font-semibold">Free</span> Worldwide
              Shipping
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
