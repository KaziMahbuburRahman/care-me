import Image from "next/image";

export function Testimonials() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-10">
          Experiences suppliers love to talk about
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Supplier testimonial"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#6A0000]/80 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Amit and Rajat Jain</h3>
              <p className="text-sm text-gray-500">Saree seller, Delhi</p>
              <p className="text-xs text-gray-600 mt-2">
                Our business has grown beyond our imagination, selling over
                10,000 orders consistently during peak season, all thanks to
                Meesho's insights.
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Supplier testimonial"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#6A0000]/80 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Suman</h3>
              <p className="text-sm text-gray-500">Western Fashion, Hisar</p>
              <p className="text-xs text-gray-600 mt-2">
                Our business has grown beyond our imagination, selling over
                10,000 orders consistently during peak season, all thanks to
                Meesho's insights.
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Supplier testimonial"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#6A0000]/80 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Mohit Rathi</h3>
              <p className="text-sm text-gray-500">
                Metal Jewellery, Ahmedabad
              </p>
              <p className="text-xs text-gray-600 mt-2">
                Our business has grown beyond our imagination, selling over
                10,000 orders consistently during peak season, all thanks to
                Meesho's insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
