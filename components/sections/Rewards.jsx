import { Megaphone } from "lucide-react"; // Import icon

export function Rewards() {
  return (
    <section className="relative bg-[#F4F8FE] flex items-center justify-center lg:h-[300px] h-[600px] mt-20 mb-10">
      <div className="w-full md:px-10 xl:px-0 xl:w-[1050px] flex justify-between h-full items-center lg:flex-row flex-col">
        {/* Left Column: Title */}
        <div className="lg:w-1/2">
          <h3 className="text-[#450000] font-extrabold text-[32px] lg:text-start text-center">
            Exclusive Supplier+ Rewards <br /> for the first 30 days
          </h3>
        </div>

        {/* Right Column: Reward Cards */}
        <div className="flex w-full lg:w-1/2 max-w-[550px] relative h-[400px] lg:h-full items-center">
          {/* Card 1 */}
          <div className="w-[250px] p-5 bg-white rounded-[5px] absolute -top-10 border border-gray-300 md:left-0">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-primary/10">
                <Megaphone className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="text-[#000] text-[20px] font-semibold mb-2">
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
          <div className="w-[250px] p-5 bg-white rounded-[5px] absolute -bottom-10 right-1 border border-gray-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-primary/10">
                <Megaphone className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="text-[#000] text-[20px] font-semibold mb-2">
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
