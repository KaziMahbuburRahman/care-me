import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold text-[#6A0000]">
            Care Me
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/sell-online" className="text-gray-600 hover:text-gray-900">
              Sell Online
            </Link>
            <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900">
              How it works
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing & Commission
            </Link>
            <Link href="/shipping" className="text-gray-600 hover:text-gray-900">
              Shipping & Returns
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            Login
          </Button>
          <Button size="sm" className="bg-[#6A0000] hover:bg-[#500000] text-white">
            Start Selling
          </Button>
        </div>
      </div>
    </header>
  )
}