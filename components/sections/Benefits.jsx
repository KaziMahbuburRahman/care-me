import { CheckCircle2, DollarSign, Package, Percent, TrendingUp } from "lucide-react";

export function Benefits() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            Why Suppliers Love Care Me
          </h2>
          <p className="text-muted-foreground text-lg">
            All the benefits that come with selling on Care Me are designed to
            help you sell more, and make it easier to grow your business.
          </p>
        </div>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10">
              <Percent className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-1">
                0% Commission Fee
              </h3>
              <p className="text-sm text-muted-foreground">
                Suppliers selling on Meesho keep 100% of their profit by not
                paying any commission.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-1">
                0 Penalty Charges
              </h3>
              <p className="text-sm text-muted-foreground">
                Suppliers selling on Care Me keep 100% of their profit by not
                paying any commission.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-1">
                Growth for Every Supplier
              </h3>
              <p className="text-sm text-muted-foreground">
                From small to large and unbranded to branded, and now open for
                Sellers who don't have a Regular GSTIN too, Meesho fuels growth
                for all suppliers.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-1">
                Ease of Doing Business
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  Easy Product Listing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  Lowest Cost Shipping
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  7-Day Payment Cycle from the delivery date
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
