import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import delivery_man_with_boxes from "@/public/img/delivery_man.png";
import Image from "next/image";
import { Badge } from "../ui/badge";
export function Hero() {
  return (
    <div className="bg-[#EAE3E3] gap-10 md:gap-0 flex md:flex-row flex-col-reverse w-full md:h-[400px]">
      {/* Left content section */}
      <div className="md:w-1/2 flex flex-col justify-center xl:pl-16 pl-8 pb-5 md:pb-0">
        <h2 className="text-[32px] flex flex-col font-extrabold text-[#000] px-2 md:px-0">
          Sell online to 14 Cr+ customers at{" "}
          <span className="text-[#450000] font-semibold">0% Commission</span>
        </h2>
        <p className="my-5 font-normal text-lg leading-[35px]">
          Become a Care Me seller and grow your business across Bangladesh{" "}
          <br />
          <Badge
          className="text-lg mx-1"
          >
            New!
          </Badge>
          Don't have a GSTIN? You can still sell on Meesho. Know more
        </p>
        <div className="bg-[#FFF]  inline-flex xl:w-[500px] w-3/4 md:w-[350px] rounded-l-lg">
          <Input
            type="number"
            placeholder="Enter your mobile number"
            className="bg-[#FFF] w-2/3 px-4 py-2 outline-none rounded-l-lg appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <Button className="bg-[#450000] sm:text-[18px] text-[12px] w-1/3 text-[#FFF] rounded-none">
            Start Selling
          </Button>
        </div>
      </div>

      {/* Right image section */}
      <div className="bg-[#450000] rounded-tl-[700px] md:w-1/2 flex items-center justify-center md:items-start md:justify-start">
        <Image
          alt="Banner Image"
          className="md:ml-7 lg:ml-14"
          src={delivery_man_with_boxes}
        />
      </div>
    </div>
  );
}
