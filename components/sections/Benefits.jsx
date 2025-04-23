import {
  CheckCircle2,
  DollarSign,
  Package,
  Percent,
  TrendingUp,
} from "lucide-react";

export function Benefits() {
  return (
    <section className="py-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-[#6A0000] mb-6">
            Why Suppliers Love Care Me
          </h2>
          <p className="text-gray-700 mb-6">
            All the benefits that come with selling on Care Me are designed to
            help you focus on your products and grow your business.
          </p>
        </div>
        <div className="grid gap-6">
          <div className="flex gap-4 p-6 border rounded-lg">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#6A0000]/10">
              <Percent className="w-4 h-4 text-[#6A0000]" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">0% Commission Fee</h3>
              <p className="text-sm text-gray-600">
                Suppliers selling on Meesho keep 100% of their profit by not
                paying any commission.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-6 border rounded-lg">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#6A0000]/10">
              <DollarSign className="w-4 h-4 text-[#6A0000]" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">0 Penalty Charges</h3>
              <p className="text-sm text-gray-600">
                Suppliers selling on Meesho keep 100% of their profit by not
                paying any penalty charges.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-6 border rounded-lg">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#6A0000]/10">
              <TrendingUp className="w-4 h-4 text-[#6A0000]" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Growth for Every Supplier</h3>
              <p className="text-sm text-gray-600">
                From small to large and unbranded to branded, and new sellers to
                those who don't have a Physical GST/PAN, we help everyone grow.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-6 border rounded-lg">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#6A0000]/10">
              <Package className="w-4 h-4 text-[#6A0000]" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Ease of Doing Business</h3>
              <p className="text-sm text-gray-600">
                <span className="flex items-center gap-1 mb-1">
                  <CheckCircle2 className="w-3 h-3 text-[#6A0000]" /> Easy
                  Product Listing
                </span>
                <span className="flex items-center gap-1 mb-1">
                  <CheckCircle2 className="w-3 h-3 text-[#6A0000]" /> Lowest
                  Cost Shipping
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#6A0000]" /> 7-Day
                  Payment Cycle from the delivery date
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
