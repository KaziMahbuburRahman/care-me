import commissionIcon from "@/public/icons/commission.png";
import growthIcon from "@/public/icons/growth.png";
import handshakeIcon from "@/public/icons/handshake.png";
import penaltyIcon from "@/public/icons/penalty.png";
import Image from "next/image";

export function Benefits() {
  return (
    <div className="flex max-w-[1000px] items-center mt-10 flex-col lg:flex-row gap-5 mx-auto">
      <div className="lg:w-1/2 md:w-2/3 px-4 md:px-0">
        <h2 className="text-[#450000] text-[34px] font-extrabold lg:text-start text-center">
          Why Suppliers Love Care Me
        </h2>
        <p className="text-[18px] lg:text-start text-center">
          All the benefits that come with selling on Care Me are designed to
          help you sell more, and make it easier to grow your business.
        </p>
      </div>
      <div className="border border-gray-300 p-5 lg:w-1/2 lg:mx-0 mx-5 rounded-[5px]">
        <div className="flex gap-3 border-b border-gray-300 py-5 items-start justify-start">
          <div className=" flex items-center justify-center">
            <Image className="max-w-12" src={commissionIcon} alt="Commission" />
          </div>
          <div>
            <h4 className="text-[#000] font-medium text-[24px]">
              0% Commission Fee
            </h4>
            <p className="text-gray-600 text-[14px]">
              Suppliers selling on Care Me keep 100% of their profit by not
              paying any commission
            </p>
          </div>
        </div>
        <div className="flex gap-3 border-b border-gray-300 my-10 pb-5 items-start justify-start">
          <div className="flex items-center justify-center">
            <Image className="max-w-10" src={penaltyIcon} alt="Penalty" />
          </div>
          <div>
            <h4 className="text-[#000] font-medium text-[24px]">
              0 Penalty Charges
            </h4>
            <p className="text-gray-600 text-[14px]">
              Suppliers selling on Care Me keep 100% of their profit by not
              paying any commission
            </p>
          </div>
        </div>
        <div className="flex gap-3 border-b border-gray-300 mb-10 pb-5 items-start justify-start">
          <div className=" flex items-center justify-center">
            <Image className="max-w-10" src={growthIcon} alt="Growth" />
          </div>
          <div>
            <h4 className="text-[#000] font-medium text-[24px]">
              Growth for Every Supplier
            </h4>
            <p className="text-gray-600 text-[14px]">
              From small to large and unbranded to branded, and now open for
              Sellers who don't have a Regular GSTIN too, Care Me fuels growth
              for all suppliers.
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-start justify-start pb-5">
          <div className="w-8 h-8 flex items-center justify-center">
            <Image className="max-w-12" src={handshakeIcon} alt="Handshake" />
          </div>
          <div>
            <h4 className="text-[#000] font-medium text-[24px]">
              Ease of Doing Business
            </h4>
            <p className="text-gray-600 text-[14px]">
              Easy Product Listing Lowest Cost Shipping 7-Day Payment Cycle from
              the delivery date
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
