import { Megaphone } from "lucide-react"; // Import icon

export function Rewards() {
  return (
    // Section styling
    <section className="py-16 bg-background">
      {/* Container and two-column grid layout */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Left Column: Title */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            Exclusive Supplier+ Rewards for the first 30 days
          </h2>
          {/* Optional: Add a short description here if needed */}
        </div>

        {/* Right Column: Reward Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10">
                <Megaphone className="w-5 h-5 text-primary" />
              </div>
              {/* Text content */}
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  Free catalog visibility of ₹600
                </h3>
                <p className="text-sm text-muted-foreground">
                  Run advertisements for your catalogs to increase the
                  visibility of your products and get more orders. Currently,
                  not available for sellers who don't have a Regular GSTIN.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 (Identical content based on image) */}
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10">
                <Megaphone className="w-5 h-5 text-primary" />
              </div>
              {/* Text content */}
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  Free catalog visibility of ₹600
                </h3>
                <p className="text-sm text-muted-foreground">
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
