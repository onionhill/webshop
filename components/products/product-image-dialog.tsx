"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ProductImageDialogProps {
  image: string;
  name: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  isFeatured: boolean;
}

export function ProductImageDialog({
  image,
  name,
  isOpen,
  onOpenChange,
  isFeatured,
}: ProductImageDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <div className="aspect-square relative cursor-pointer">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={isFeatured}
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl h-auto [&>button]:hidden">
        <div className="relative aspect-square w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 70vw"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
