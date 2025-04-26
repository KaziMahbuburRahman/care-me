import Image from "next/image";

export function Rewards() {
  return (
    <section className="relative bg-[#F4F8FE] flex px-4 lg:pl-24 lg:h-[300px] h-auto py-10 lg:py-0 mt-20 mb-10">
      <div className="w-full px-4 md:px-10 xl:px-0 flex gap-10 justify-between h-full items-center lg:flex-row flex-col">
        {/* Left Column: Title */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h3 className="text-primary font-extrabold text-[24px] lg:text-[32px] lg:text-start text-center px-4 lg:px-0">
            Exclusive Supplier+ Rewards <br /> for the first 30 days
          </h3>
        </div>

        {/* Right Column: Reward Cards */}
        <div className="flex w-full lg:w-1/2 max-w-[550px] relative h-auto lg:h-full items-center px-4 lg:px-0 lg:mr-36">
          {/* Card 1 */}
          <div className="w-full lg:w-[250px] p-5 bg-white rounded-[5px] lg:absolute lg:-top-10 border border-gray-300 lg:left-0 shadow-sm mb-4 lg:mb-0">
            <div className="flex flex-col items-start gap-4 lg:gap-10">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center relative">
                <Image
                  src="/icons/no_money.png"
                  alt="No Money Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-[#000] text-[18px] lg:text-[20px] font-semibold mb-2">
                  Free catalog visibility of ₹600
                </h4>
                <p className="text-gray-400 text-sm">
                  Run advertisements for your catalogs to increase the
                  visibility of your products and get more orders. Currently,
                  not available for sellers who don't have a Regular GSTIN.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full lg:w-[250px] p-5 bg-white rounded-[5px] lg:absolute lg:-bottom-10 lg:right-1 border border-gray-300 shadow-sm">
            <div className="flex flex-col items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center relative">
                <Image
                  src="/icons/mike.png"
                  alt="Mike Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-[#000] text-[18px] lg:text-[20px] font-semibold mb-2">
                  Free catalog visibility of ₹600
                </h4>
                <p className="text-gray-400 text-sm">
                  Run advertisements for your catalogs to increase the
                  visibility of your products and get more orders. Currently,
                  not available for sellers who don't have a Regular GSTIN.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
