import ProductManager from "@/app/_functions/Product";
import { NextRequest, NextResponse } from "next/server";

const product = new ProductManager();

export async function GET(req: NextRequest) {
  try {
    const credentials = req.headers.get("credentials");
    if (!credentials) return NextResponse.json("Unauthorized");

    const data = await product.getProduct(credentials);

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}
