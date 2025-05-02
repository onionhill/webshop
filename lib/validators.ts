import { z } from "zod";
import { formatPrice } from "./utils";

const currency = z.string().refine((value) => /^\d+(\.\d{2})?$/.test(formatPrice(Number(value))), {
  message: "Price must be a valid number",
});

export const insertProductSchema = z.object({
  name: z.string().min(4, { message: "Name must be at least 4 characters long" }),
  slug: z.string().min(4, { message: "Slug must be at least 4 characters long" }),
  category: z.string().min(1, { message: "Category is required" }),
  brand: z.string().min(1, { message: "Brand is required" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters long" }),
  stock: z.coerce.number().min(0, { message: "Stock must be greater than 0" }),
  images: z.array(z.string()).min(1, { message: "At least one image is required" }),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  rating: z.number().min(0, { message: "Rating must be greater than 0" }),
  price: currency,
  numReviews: z.number(),
});

export const updateProductSchema = z.object({
  name: z.string().min(4, { message: "Name must be at least 4 characters long" }),
  price: currency,
});

export const deleteProductSchema = z.object({
  id: z.string().min(1, { message: "Id is required" }),
});
