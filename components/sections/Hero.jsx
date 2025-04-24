import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative">
      <div className="container flex flex-col md:flex-row items-center py-12">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Sell online to 14 Cr+ customers at{" "}
            <span className="text-[#6A0000]">0% Commission</span>
          </h1>
          <p className="text-gray-700">
            Become a Care Me seller and grow your business across Bangladesh
          </p>
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="bg-[#6A0000] hover:bg-[#500000] text-white"
            >
              Start Selling
            </Button>
            <span className="text-sm text-gray-500">
              Don't have a GSTIN?{" "}
              <span className="text-[#6A0000]">
                You can still sell on Meesho.
              </span>{" "}
              Know more
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
          <div className="absolute top-0 right-0 w-full h-full bg-[#450100] rounded-[52%_0%_21%_0%_/_75%_25%_0%_25%] -z-10"></div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className="aspect-[3/2] object-fill lg:aspect-[4/3] lg:h-[450px] xl:aspect-[16/9]"
              src="img/delivery_man_with_boxes.png"
              alt=""
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
