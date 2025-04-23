export function HowItWorks() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold text-center text-[#6A0000] mb-10">
          How it works
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#6A0000] text-white flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Create Account</h3>
              <p className="text-sm text-gray-600">
                All you need is:
                <br />- GSTIN (not mandatory)
                <br />- Bank Account
                <br />- ID Proof
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#6A0000] text-white flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">List Products</h3>
              <p className="text-sm text-gray-600">
                List the products you want to sell in your supplier panel
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#6A0000] text-white flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Get Orders</h3>
              <p className="text-sm text-gray-600">
                Start getting orders from crores of Indians actively shopping on
                our platform
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#6A0000] text-white flex items-center justify-center mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2">Lowest Cost Shipping</h3>
              <p className="text-sm text-gray-600">
                Products are shipped to customers at lowest costs
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#6A0000] text-white flex items-center justify-center mb-4">
                5
              </div>
              <h3 className="font-semibold mb-2">Receive Payments</h3>
              <p className="text-sm text-gray-600">
                Payments are deposited directly to your bank account following a
                7-day payment cycle from order delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
