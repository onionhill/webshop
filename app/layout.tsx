import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/constants";
import Footer from "@/components/shared/footer";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = siteConfig.metadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="antialiased min-h-screen flex flex-col items-center">
            <main className="flex-1 w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
