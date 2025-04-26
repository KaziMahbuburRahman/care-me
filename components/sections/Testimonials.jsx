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
    image: "img/female_with_computer.jpeg", // Replace with actual image path
  },
  {
    name: "Mohit Rathi",
    location: "Meira Jewellery, Ahmedabad",
    quote:
      "Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days. We are now constantly bringing new products thanks to Meesho's insights.",

    image: "img/Three_man_with_laptop.jpeg", // Replace with actual image path
  },
];

export function Testimonials() {
  return (
    <section className="mt-20 mb-10 mx-5 md:mx-0">
      <h2 className="text-[#450000] font-bold text-[34px] text-center">
        Experiences suppliers love to talk about
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-[10px] mt-5">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-gray-400 p-4 max-w-[330px] rounded-[5px]"
          >
            <div className="relative">
              <img
                className="w-full h-[200px] object-cover"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div className="w-14 h-14 absolute -bottom-7 left-7 flex items-center justify-center bg-[#450000] border-4 border-[#FF8001] rounded-full cursor-pointer">
                <Play className="w-5 h-5 text-white fill-white ml-1" />
              </div>
            </div>
            <div className="mt-18">
              <h3 className="text-[#450000] font-bold text-[20px]">
                {testimonial.name}
              </h3>
              <p className="my-3 text-[16px] text-gray-600">
                {testimonial.location}
              </p>
              <p className="text-[13px] text-gray-500">{testimonial.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
