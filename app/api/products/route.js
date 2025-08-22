import connectDB from "@/lib/mongoDB";
import Product from "@/models/Product";

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
