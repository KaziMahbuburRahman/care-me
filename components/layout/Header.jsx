import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-card border-b sticky top-0 z-50 py-4">
      <div className="container mx-auto flex items-center justify-between py-3">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-primary">
            Care Me
          </Link>
        </div>
        <nav className="hidden md:flex items-center justify-center gap-8">
          <Link
            href="/sell-online"
            className="text-sm hover:text-primary transition-colors"
          >
            Sell Online
          </Link>
          <Link
            href="/how-it-works"
            className="text-sm hover:text-primary transition-colors"
          >
            How it works
          </Link>
          <Link
            href="/pricing"
            className="text-sm hover:text-primary transition-colors"
          >
            Pricing & Commission
          </Link>
          <Link
            href="/shipping"
            className="text-sm hover:text-primary transition-colors"
          >
            Shipping & Returns
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="lg"
            className="hidden sm:flex border-primary border-2 text-primary hover:bg-primary/10 hover:text-primary cursor-pointer w-32"
          >
            Login
          </Button>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer w-32"
          >
            Start Selling
          </Button>
        </div>
      </div>
    </header>
  );
}
