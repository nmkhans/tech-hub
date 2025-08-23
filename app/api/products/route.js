import connectDB from "@/lib/mongoDB";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();

  const searchParams = req.nextUrl.searchParams;
  const limit = searchParams.get("limit");

  const products = await Product.find({}).limit(
    limit ? parseInt(limit) : 0
  );

  return new Response(
    JSON.stringify({
      message: "All products",
      data: products,
    }),
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
}

export async function POST(req) {
  await connectDB();

  try {
    const body = await req.json();

    const res = await Product.create(body);

    return NextResponse.json({
      message: "Product created successfully!",
      data: body,
    });
  } catch (error) {
    console.error("Error parsing request body:", error);
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }
}
