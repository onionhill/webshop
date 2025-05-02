import { cn } from "@/lib/utils";

interface ProductPriceProps {
  value: number;
  className?: string;
}

export function ProductPrice({ value, className }: ProductPriceProps) {
  const formattedPrice = value.toFixed(2);
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
