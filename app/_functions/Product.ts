import prisma from "@/utils/connectDb";
import { Product } from "@prisma/client";

export default class ProductManager {
  private prisma;
  constructor() {
    this.prisma = prisma;
  }

  async addProduct(product: Product) {
    try {
      const data = await this.prisma.product.create({
        data: product,
      });
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      this.prisma.$disconnect();
    }
  }

  async getProduct(id: string) {
    const data = await this.prisma.product.findMany({
      where: {
        sellerId: id,
      },
      include: {
        orders: true,
      },
    });
    console.log(data);

    return data;
  }
}
