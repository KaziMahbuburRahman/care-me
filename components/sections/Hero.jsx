
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Import Input component

export function Hero() {
  return (
    // Use bg-background for the section
    <section className="relative bg- overflow-hidden">
      {/* Increased py, added container and mx-auto */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center py-16 lg:py-24">
        {/* Text content area */}
        <div className="w-full lg:w-1/2 space-y-5 z-10 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Sell online to 14 Cr+ customers at <br />
            <span className="text-primary">0% Commission</span>
          </h1>
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <p className="text-muted-foreground text-lg">
              Become a Care Me seller and grow your business across Bangladesh
            </p>
            <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-2 py-0.5 rounded">
              New!
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            Don't have a GSTIN? You can still sell on Meesho. Know more
          </p>
          {/* Input group */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-4 max-w-md mx-auto lg:mx-0">
            <Input
              type="tel"
              placeholder="Enter your mobile number"
              className="flex-grow bg-card border-border"
            />
            <Button
              size="lg" // Larger button
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
            >
              Start Selling
            </Button>
          </div>
        </div>

        {/* Image area */} 
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
