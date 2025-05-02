"use client";

import Link from "next/link";
import { MenuIcon, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart className="mr-2 h-4 w-4" /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/login">
            <User className="mr-2 h-4 w-4" /> Login
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-4">
              <ModeToggle />
              <Button asChild variant="ghost" className="justify-start">
                <Link href="/cart">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Cart
                </Link>
              </Button>
              <Button asChild variant="ghost" className="justify-start">
                <Link href="/login">
                  <User className="mr-2 h-4 w-4" /> Login
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
