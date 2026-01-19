import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const res = await fetch("http://localhost:3000/products.json", {
    cache: "no-store",
  });

  const products = await res.json();

  return products.slice(0, 8);
}

export default async function FeaturedProducts() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 my-10">
      <h1 className="text-4xl my-5 font-bold text-gray-900 text-center mb-10">
        Featured Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full flex flex-col"
          >
            {/* Image Section */}
            <div className="h-48 bg-gray-100 relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col grow">
              {/* Product Name */}
              <h2 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2 min-h-12">
                {product.name}
              </h2>

              {/* Price and Actions */}
              <div className="flex justify-between items-center mt-auto">
                <span className="font-bold text-xl text-gray-900">
                  Price:${product.price}
                </span>

                <div className="flex space-x-2">
                  <Link
                    href={`/product/${product.id}`}
                    className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-2 px-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
          <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Link href={"/product"}>View All Products</Link>
          </button>
        </div>
    </div>
  );
}
