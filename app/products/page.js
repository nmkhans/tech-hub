import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export default async function Products() {
  const res = await fetch(`http://localhost:3000/api/products`);
  const { data: products } = await res.json();

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
              key={product._id}
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
                          {product.rating.$numberDecimal}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>

                    <Link href={`/products/${product._id}`}>
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
                      <Link href={`/products/${product._id}`}>
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
