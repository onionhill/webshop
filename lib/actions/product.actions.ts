"use server";

import { PrismaClient } from "@prisma/client";
import { toPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "@/constants";
import { insertProductSchema } from "@/lib/validators";
import type { Product } from "@/types";

const prisma = new PrismaClient();

export async function getNewestProducts(): Promise<Product[]> {
  try {
    const products = await prisma.product.findMany({
      take: LATEST_PRODUCTS_LIMIT,
      orderBy: {
        createdAt: "desc",
      },
    });

    const plainProducts = toPlainObject(products);
    // Validate and transform each product
    return plainProducts.map((product) => {
      const validated = insertProductSchema.parse(product);
      return {
        ...validated,
        id: product.id,
        createdAt: product.createdAt,
        rating: product.rating,
      } as Product;
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!product) return null;

    const plainProduct = toPlainObject(product);
    // Validate and transform the product
    const validated = insertProductSchema.parse(plainProduct);
    return {
      ...validated,
      id: plainProduct.id,
      createdAt: plainProduct.createdAt,
      rating: plainProduct.rating,
    } as Product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("Failed to fetch product");
  }
}
