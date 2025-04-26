export function HowItWorks() {
  // Array for step data to avoid repetition
  const steps = [
    {
      number: 1,
      title: "Create Account",
      description: "All you need is:",
      listItems: [
        "GSTIN (for GST sellers) or Enrolment ID / UIN for non GST sellers",
        "Bank Account",
      ],
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
        "Payments are deposited directly to your bank account following a 7 day payment cycle from order delivery.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-[#450000] font-extrabold text-[32px] text-center mb-5">
          How it works
        </h2>

        <div className="bg-[#F4F8FE] min-h-[250px] mt-5 rounded-[5px] max-w-[1040px] mx-auto">
          <div className="flex gap-4 py-10 px-10 flex-wrap xl:flex-nowrap">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-start">
                <div className="flex items-center justify-center gap-5">
                  <div className="text-white text-[30px] font-bold bg-[#450000] px-6 rounded-full py-[10px]">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <span className="h-[1px] w-[100px] bg-[#450000]"></span>
                  )}
                </div>

                <div className="mt-5 flex flex-col gap-2">
                  <h4 className="text-[#450000] font-semibold text-[18px]">
                    {step.title}
                  </h4>
                  <p className="text-[14px]">{step.description}</p>
                  {step.listItems && (
                    <ul className="ml-5 text-[14px]">
                      {step.listItems.map((item, i) => (
                        <li key={i} className="list-disc">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
