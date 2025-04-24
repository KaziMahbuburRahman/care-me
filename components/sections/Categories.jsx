import Link from "next/link";

// Category data
const categories = [
  "Sell Sarees Online",
  "Sell Tshirts Online", // Corrected typo
  "Sell Watches Online",
  "Sell Jewellery Online",
  "Sell Shirts Online",
  "Sell Electronics Online",
  "Sell Clothes Online",
  "Sell Socks Online",
];

export function Categories() {
  return (
    // Section styling: white background, padding
    <section className="py-16 bg-card">
      {/* Container */}
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
          Popular Categories to Sell Online
        </h2>
        {/* Grid for category links - 2 columns on small, 3 on medium+ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 max-w-3xl mx-auto">
          {categories.map((category, index) => (
            <Link
              key={index}
              href="#" // Keep placeholder href
              className="text-muted-foreground hover:text-primary hover:underline text-center sm:text-left text-base"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
