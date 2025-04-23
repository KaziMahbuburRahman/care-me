import Link from "next/link";

export function Categories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-10">
          Popular Categories to Sell Online
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="#"
            className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <p className="text-gray-700">Sell Sarees Online</p>
          </Link>
          <Link
            href="#"
            className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <p className="text-gray-700">Sell T-shirts Online</p>
          </Link>
          <Link
            href="#"
            className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <p className="text-gray-700">Sell Watches Online</p>
          </Link>
          <Link
            href="#"
            className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <p className="text-gray-700">Sell Clothes Online</p>
          </Link>
          <Link
            href="#"
            className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <p className="text-gray-700">Sell Jewellery Online</p>
          </Link>
          <Link
            href="#"
            className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <p className="text-gray-700">Sell Shirts Online</p>
          </Link>
          <Link
            href="#"
            className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <p className="text-gray-700">Sell Electronics Online</p>
          </Link>
          <Link
            href="#"
            className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <p className="text-gray-700">Sell Socks Online</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
