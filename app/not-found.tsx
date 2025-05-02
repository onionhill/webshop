import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex-center min-h-[calc(100vh-80px)] w-full flex-col gap-5">
      <img src="/images/logo.svg" alt="Logo" className="h-12 w-12" />
      <p className="text-muted-foreground">The page you&apos;re looking for does not exist.</p>
      <Button asChild>
        <Link href="/">Go to Home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
