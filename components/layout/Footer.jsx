import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#6A0000] text-white py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Care Me</h2>
          <p className="text-sm mb-4">
            Sell your products to crores of customers on Meesho at 0% commission
          </p>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white/10"
          >
            Start Selling
          </Button>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Sell on Care Me</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Sell Online
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Pricing & Commission
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                How it works
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Grow Your Business
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Learning Hub
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Sell on Care Me</h3>
          <p className="text-sm mb-2">Support@caremebd.com</p>
          <div className="flex gap-2">
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
            >
              <Twitter className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
            >
              <Instagram className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t border-white/20 text-center text-sm">
        © 2015 Care Me. All Rights Reserved.
      </div>
    </footer>
  );
}
