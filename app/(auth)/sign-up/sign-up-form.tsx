"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signUpUser } from "@/lib/actions/user.actions";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";

export default function SignUpForm() {
  const [state, action] = useActionState(signUpUser, { success: false, message: "" });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignUpButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button type="submit" disabled={pending} variant="default">
        {pending ? "Signing up..." : "Sign up"}
      </Button>
    );
  };

  return (
    <form action={action}>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" type="text" placeholder="Name" required />
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="name@example.com" required />
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" placeholder="Password" required />
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
          />
          <input type="hidden" name="callbackUrl" value={callbackUrl} />
        </div>
        <SignUpButton />
      </div>
      {state && !state.success && <p className="text-red-500">{state.message}</p>}
      <div className="flex justify-center mt-8 text-sm">
        <Link href="/sign-in">Already have an account? Sign in</Link>
      </div>
    </form>
  );
}
