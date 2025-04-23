import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative">
      <div className="container flex flex-col md:flex-row items-center py-12">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Sell online to 14 Cr+ customers at <span className="text-[#6A0000]">0% Commission</span>
          </h1>
          <p className="text-gray-700">Become a Care Me seller and grow your business across Bangladesh</p>
          <div className="flex items-center gap-3">
            <Button size="sm" className="bg-[#6A0000] hover:bg-[#500000] text-white">
              Start Selling
            </Button>
            <span className="text-sm text-gray-500">
              Don't have a GSTIN? <span className="text-[#6A0000]">You can still sell on Meesho.</span> Know more
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
          <div className="absolute top-0 right-0 w-full h-full bg-[#6A0000] rounded-lg -z-10"></div>
          <Image
            src="/placeholder.svg?height=400&width=500"
            alt="Seller with packages"
            width={500}
            height={400}
            className="relative z-10"
          />
        </div>
      </div>
    </section>
  )
}