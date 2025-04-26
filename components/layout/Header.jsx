"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-card border-b sticky top-0 z-50 py-4">
      <div className="container mx-auto flex items-center justify-between py-3">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-primary">
            Care Me
          </Link>
        </div>
        <nav className="hidden font-semibold md:flex items-center justify-center gap-8">
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
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t">
          <nav className="container mx-auto py-4 flex flex-col gap-4 px-6">
            <Link
              href="/sell-online"
              className="text-sm hover:text-primary transition-colors py-3 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sell Online
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm hover:text-primary transition-colors py-3 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it works
            </Link>
            <Link
              href="/pricing"
              className="text-sm hover:text-primary transition-colors py-3 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing & Commission
            </Link>
            <Link
              href="/shipping"
              className="text-sm hover:text-primary transition-colors py-3 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shipping & Returns
            </Link>
            <div className="flex flex-col gap-3 mt-4">
              <Button
                variant="outline"
                size="lg"
                className="border-primary border-2 text-primary hover:bg-primary/10 hover:text-primary cursor-pointer w-full"
              >
                Login
              </Button>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer w-full"
              >
                Start Selling
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
