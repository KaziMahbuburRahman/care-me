import { Play } from "lucide-react";

// Placeholder data (replace with actual data or props)
const testimonials = [
  {
    name: "Amit and Rajat Jain",
    location: "Smartees, Tiruppur",
    quote:
      "Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Meesho's insights.",
    image: "img/2_man_standing_with_hand_in_chest.jpeg", // Replace with actual image path
  },
  {
    name: "Suman",
    location: "Keshav Fashion, Hisar",
    quote:
      "Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Meesho's insights.",
    image: "img/Three_man_with_laptop.jpeg", // Replace with actual image path
  },
  {
    name: "Mohit Rathi",
    location: "Meira Jewellery, Ahmedabad",
    quote:
      "Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Meesho's insights.",
    image: "img/female_with_computer.jpeg", // Replace with actual image path
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
          Experiences suppliers love to talk about
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-border shadow-sm"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors duration-200">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer">
                    <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-foreground">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
