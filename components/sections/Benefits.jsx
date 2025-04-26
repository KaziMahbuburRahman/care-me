import commissionIcon from "@/public/icons/commission.png";
import growthIcon from "@/public/icons/growth.png";
import handshakeIcon from "@/public/icons/handshake.png";
import penaltyIcon from "@/public/icons/penalty.png";
import Image from "next/image";

export function Benefits() {
  return (
    <section className="py-6 px-4 sm:py-8 sm:px-6 md:py-12 md:px-10 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-28">
          <div className="w-full lg:w-[40%] text-center lg:text-left">
            <h2 className="text-primary text-2xl sm:text-3xl md:text-[34px] font-extrabold">
              Why Suppliers Love Care Me
            </h2>
            <p className="text-base sm:text-lg md:text-[18px] mt-4">
              All the benefits that come with selling on Care Me are designed to
              help you sell more, and make it easier to grow your business.
            </p>
          </div>
          <div className="w-full lg:w-[55%] max-w-[600px] border border-gray-300 p-4 sm:p-5 rounded-[5px]">
            <div className="flex gap-3 border-b border-gray-300 py-4 sm:py-5 items-start justify-start">
              <div className="min-w-[40px] flex items-center justify-center">
                <Image
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  src={commissionIcon}
                  alt="Commission"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-[#000] font-medium text-lg sm:text-[20px]">
                  0% Commission Fee
                </h4>
                <p className="text-gray-600 text-sm sm:text-[14px]">
                  Suppliers selling on Care Me keep 100% of their profit by not
                  paying any commission
                </p>
              </div>
            </div>
            <div className="flex gap-3 border-b border-gray-300 my-4 sm:my-5 pb-4 sm:pb-5 items-start justify-start">
              <div className="min-w-[40px] flex items-center justify-center">
                <Image
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  src={penaltyIcon}
                  alt="Penalty"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-[#000] font-medium text-lg sm:text-[20px]">
                  0 Penalty Charges
                </h4>
                <p className="text-gray-600 text-sm sm:text-[14px]">
                  Suppliers selling on Care Me keep 100% of their profit by not
                  paying any commission
                </p>
              </div>
            </div>
            <div className="flex gap-3 border-b border-gray-300 mb-4 sm:mb-5 pb-4 sm:pb-5 items-start justify-start">
              <div className="min-w-[40px] flex items-center justify-center">
                <Image
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  src={growthIcon}
                  alt="Growth"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-[#000] font-medium text-lg sm:text-[20px]">
                  Growth for Every Supplier
                </h4>
                <p className="text-gray-600 text-sm sm:text-[14px]">
                  From small to large and unbranded to branded, and now open for
                  Sellers who don't have a Regular GSTIN too, Care Me fuels
                  growth for all suppliers.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start justify-start pb-4 sm:pb-5">
              <div className="min-w-[40px] flex items-center justify-center">
                <Image
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  src={handshakeIcon}
                  alt="Handshake"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-[#000] font-medium text-lg sm:text-[20px]">
                  Ease of Doing Business
                </h4>
                <p className="text-gray-600 text-sm sm:text-[14px]">
                  Easy Product Listing Lowest Cost Shipping 7-Day Payment Cycle
                  from the delivery date
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
