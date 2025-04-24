import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-card border-b sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-foreground">
            Care Me
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/sell-online"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Sell Online
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              How it works
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Pricing & Commission
            </Link>
            <Link
              href="/shipping"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Shipping & Returns
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex border-primary text-primary hover:bg-primary/10 hover:text-primary"
          >
            Login
          </Button>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Start Selling
          </Button>
        </div>
      </div>
    </header>
  );
}
