"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOutUser } from "@/lib/actions/user.actions";

export default function UserButton() {
  const { data: session, status } = useSession({
    required: false,
  });

  if (status === "loading") {
    return (
      <Button variant="ghost" disabled>
        <UserIcon className="mr-2 h-4 w-4" /> Loading...
      </Button>
    );
  }

  if (!session) {
    return (
      <Button asChild variant="ghost">
        <Link href="/sign-in">
          <UserIcon className="mr-2 h-4 w-4" /> Login
        </Link>
      </Button>
    );
  }

  const firstInitial = session.user?.name?.[0] || "A";

  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="relative w-8 h-8 rounded-full ml-2 flex items-center justify-center bg-gray-200 dark:bg-gray-700"
            >
              {firstInitial}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="flex flex-col space-y-1">
            <div className="text-sm font-medium">{session.user?.name}</div>
            <div className="text-xs text-gray-500">{session.user?.email}</div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="p-0 mb-1">
            <form action={signOutUser}>
              <Button type="submit" variant="ghost" className="w-full py-4 px-2 h-4 justify-start">
                <span>Sign out</span>
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
