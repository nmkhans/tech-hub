import connectDB from "@/lib/mongoDB";
import Product from "@/models/Product";

export async function GET(req, { params }) {
  const { id } = params;

  const product = await Product.findOne({ _id: id });

  if (!product) {
    return new Response(
      JSON.stringify({
        message: "No product was found!",
      }),
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }

  return new Response(
    JSON.stringify({
      message: `Detail for product ${id}`,
      data: product,
    }),
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );

  return new Response(id);

  console.log(id);
}
