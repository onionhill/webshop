import React from "react";
import { getProductById } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import { ProductImageDialog } from "@/components/products/product-image-dialog";
import { ProductPrice } from "@/components/products/product-price";

export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container max-w-5xl py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-2">
            <span className="text-lg">
              {product.rating} ★ ({product.numReviews} reviews)
            </span>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="flex items-center justify-between">
            <ProductPrice value={product.price} className="text-2xl font-bold" />
            <span className={`text-sm ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </span>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Brand: {product.brand}</p>
            <p className="text-sm text-muted-foreground">Category: {product.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
