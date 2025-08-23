"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Upload, X, Plus } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const categories = [
  "Electronics",
  "Wearables",
  "Photography",
  "Accessories",
  "Fashion",
  "Home & Garden",
  "Sports",
  "Books",
  "Toys & Games",
];

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    rating: "",
    reviews: "",
    originalPrice: "",
    description: "",
    stockCount: "",
    image: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.category ||
      !formData.price ||
      !formData.description
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const res = await fetch(`/api/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast.success("Product successfully created.");
      setFormData({
        name: "",
        category: "",
        price: "",
        rating: "",
        reviews: "",
        originalPrice: "",
        description: "",
        stockCount: "",
        image: "",
      });
      router.push("/products");
    }
  };

  return (
    <section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Add New Product
          </h1>
          <p className="text-gray-600">
            Fill in the details below to add your product to the
            marketplace
          </p>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl">
              Product Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter product name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) =>
                      setFormData({ ...formData, category: value })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="w-full">
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Pricing */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($) *</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        price: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="originalPrice">
                    Original Price ($)
                  </Label>
                  <Input
                    id="originalPrice"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.originalPrice}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        originalPrice: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stockCount">Stock Quantity</Label>
                  <Input
                    id="stockCount"
                    type="number"
                    placeholder="0"
                    value={formData.stockCount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        stockCount: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* Pricing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="rating">Rating *</Label>
                  <Input
                    id="rating"
                    type="number"
                    step="0.01"
                    max={"5".toString()}
                    placeholder="0.00"
                    value={formData.rating}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        rating: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="review">Reviews *</Label>
                  <Input
                    id="review"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.reviews}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        reviews: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your product in detail..."
                  rows={4}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                  required
                />
              </div>

              {/* Images */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Product Image</Label>
                </div>
                <div className="space-y-3">
                  <div className="flex-1 relative">
                    <Input
                      placeholder="https://example.com/image.jpg"
                      value={formData.image}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          image: e.target.value,
                        })
                      }
                    />
                    <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Add URLs to high-quality product images. The first
                  image will be used as the main product image.
                </p>
              </div>

              {/* Submit */}
              <div className="flex justify-end space-x-4 pt-6 border-t">
                <Button type="submit" size="lg" className="px-8">
                  Publish Product
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
