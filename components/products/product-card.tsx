"use client";

import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ProductImageDialog } from "./product-image-dialog";
import { ProductPrice } from "./product-price";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader className="p-0">
        <ProductImageDialog
          image={product.images[0]}
          name={product.name}
          isOpen={isImageOpen}
          onOpenChange={setIsImageOpen}
          isFeatured={product.isFeatured}
        />
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <Link href={`/product/${product.id}`} className="hover:underline">
          <h3 className="text-lg font-semibold">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-2">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full">
          <div>
            {product.stock > 0 ? (
              <ProductPrice value={product.price} className="font-bold" />
            ) : (
              <p className="text-sm text-red-500">Out of stock</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {product.rating} ★ ({product.numReviews})
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
