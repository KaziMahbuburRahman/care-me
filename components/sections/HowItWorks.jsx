export function HowItWorks() {
  // Array for step data to avoid repetition
  const steps = [
    {
      number: 1,
      title: "Create Account",
      description:
        "All you need is:\n• GSTIN (for GST sellers)\n• or Enrolment ID / UIN (for non-GST sellers)\n• Bank Account",
    },
    {
      number: 2,
      title: "List Products",
      description: "List the products you want to sell in your supplier panel",
    },
    {
      number: 3,
      title: "Get Orders",
      description:
        "Start getting orders from crores of Indians actively shopping on our platform",
    },
    {
      number: 4,
      title: "Lowest Cost Shipping",
      description: "Products are shipped to customers at lowest costs",
    },
    {
      number: 5,
      title: "Receive Payments",
      description:
        "Payments are deposited directly to your bank account following a 7-day payment cycle from order delivery.",
    },
  ];

  return (
    // Section styling: light gray background, padding
    <section className="py-16 bg-background">
      {/* Container */}
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-16">
          How it works
        </h2>
        {/* Steps container with relative positioning for the line */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line (visible on md screens and up) */}
          <div className="hidden md:block absolute top-5 left-0 right-0 h-1 bg-border -translate-y-1/2 z-0"></div>

          {/* Grid for steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Numbered circle */}
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                  {step.number}
                </div>
                {/* Step title */}
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                {/* Step description - using whitespace-pre-line to respect newlines */}
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
