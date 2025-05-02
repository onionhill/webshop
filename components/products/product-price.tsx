import { cn } from "@/lib/utils";

interface ProductPriceProps {
  value: number | string;
  className?: string;
}

export function ProductPrice({ value, className }: ProductPriceProps) {
  // Convert to number if string and ensure it's a valid number
  const numericValue = typeof value === "string" ? parseFloat(value) : value;

  // Check if it's a valid number
  if (isNaN(numericValue)) {
    return <span className={cn("text-2xl", className)}>Invalid Price</span>;
  }

  const formattedPrice = numericValue.toFixed(2);
  //split the price into dollars and cents
  const [dollars, cents] = formattedPrice.split(".");

  return (
    <span className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {dollars}
      <span className="text-xs align-super">{cents}</span>
    </span>
  );
}
