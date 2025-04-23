import { MessageCircle } from "lucide-react";

export function Support() {
  return (
    <section className="py-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-[#6A0000] mb-2">
            Care Me Supplier Support
          </h2>
          <h3 className="text-xl font-semibold mb-6">Available 24/7</h3>
          <p className="text-gray-700 mb-4">
            Meesho supplier support is available to solve all your doubts and
            issues, before and after you start your online selling business.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3 p-4 border rounded-lg">
            <MessageCircle className="w-6 h-6 text-[#6A0000]" />
            <div>
              <p className="text-sm">You can reach out to</p>
              <p className="font-semibold">support@caremebd.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
