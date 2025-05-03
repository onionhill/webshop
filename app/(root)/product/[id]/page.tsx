import React from "react";
import { getProductById } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import { ProductPrice } from "@/components/products/product-price";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductImages } from "@/components/products/product-images";

export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Image column */}
          <div className="col-span-2">
            <ProductImages images={product.images} />
          </div>
          {/* Details column */}
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p className="text-sm text-muted-foreground">
                {product.brand} {product.category}
              </p>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-sm text-muted-foreground">
                {product.rating} of {product.numReviews} reviews
              </p>
              <div className="flex flex-col sm:flex row sm:items-center gap-3">
                <ProductPrice
                  value={Number(product.price)}
                  className="px-5 py-2 w-24 rounded-full bg-green-100 text-green-700"
                />
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-lg font-medium">Description</h2>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </div>
          </div>
          {/* Sidebar */}
          <div>
            <Card>
              <CardContent className="p-5">
                <div className="mb-2 flex justify-between">
                  <p className="text-sm text-muted-foreground">Price</p>
                  <ProductPrice value={Number(product.price)} />
                </div>
                <div className="mb-2 flex justify-between">
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="text-sm text-muted-foreground">
                    {product.stock > 0 ? (
                      <Badge variant="outline">In Stock</Badge>
                    ) : (
                      <Badge variant="destructive">Out of Stock</Badge>
                    )}
                  </p>
                </div>
                {product.stock > 0 && <Button className="w-full">Add to Cart</Button>}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
