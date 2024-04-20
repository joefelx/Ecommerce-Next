import ProductManager from "@/app/_functions/Product";
import { NextRequest, NextResponse } from "next/server";

const productManager = new ProductManager();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await productManager.addProduct(body);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}
