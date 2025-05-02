import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert prisma object to plain object
export const toPlainObject = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

export const formatPrice = (price: number): string => {
  const [dollars, cents] = price.toFixed(2).split(".");
  return dollars ? `${dollars}.${cents.padEnd(2, "0")}` : `${dollars}.00`;
};
