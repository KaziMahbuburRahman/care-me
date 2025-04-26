import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#5E0523] flex items-center justify-center">
      <div className="flex md:flex-row flex-col justify-center md:justify-around items-center md:items-start pt-20 pb-10 w-[1300px] gap-5 md:gap-0">
        <div className="w-[250px] md:text-start text-center">
          <h2 className="text-white font-semibold text-[24px]">Care Me</h2>
          <p className="text-white text-[16px] my-3">
            Sell your products to crores of customers on Meesho at 0% commission
          </p>
          <Button className="px-2 py-2 bg-[#FF8001] text-white text-[16px] rounded-[5px] hover:bg-[#FF8001]/90">
            Start Selling
          </Button>
        </div>
        <div className="md:text-start text-center">
          <h3 className="text-white text-[18px] font-medium">
            Sell on Care Me
          </h3>
          <ul className="mt-3 flex flex-col gap-2 text-gray-300">
            <li>
              <Link href="#" className="hover:text-white">
                Sell Online
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Pricing & Commission
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                How it works
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Grow Your Business
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Learning Hub
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:text-start text-center">
          <h3 className="text-white text-[18px] font-medium">
            Sell on Care Me
          </h3>
          <div className="mt-5">
            <p className="text-white text-[16px] font-normal">
              Support@caremebd.com
            </p>
            <div className="flex gap-2 mt-2 md:items-start items-center justify-center md:justify-start">
              <Link
                href="#"
                className="px-3 py-1 font-bold text-[20px] rounded-[5px] bg-white text-[#5E0523] hover:bg-white/90"
              >
                F
              </Link>
              <Link
                href="#"
                className="px-3 py-1 font-bold text-[20px] rounded-[5px] bg-white text-[#5E0523] hover:bg-white/90"
              >
                I
              </Link>
              <Link
                href="#"
                className="px-3 py-1 font-bold text-[20px] rounded-[5px] bg-white text-[#5E0523] hover:bg-white/90"
              >
                Y
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
