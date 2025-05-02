import { SITE_NAME } from "@/constants";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="wrapper py-8">
        <div className="flex-between flex-col gap-4 sm:flex-row">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-xl font-bold">
              {SITE_NAME}
            </Link>
            <p className="text-sm text-muted-foreground">
              © {currentYear} {SITE_NAME}. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
