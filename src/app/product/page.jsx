import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const res = await fetch("http://localhost:3000/products.json", {
    cache: "no-store", // dev-safe
  });

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-900 text-center my-10">All Products</h1>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                
                {/* Description */}
                <p className="text-gray-600 text-sm line-clamp-3 mb-4 grow">
                  {product.description.split('\n').join(' ')}
                </p>

                {/* Price and Actions */}
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-bold text-xl text-gray-900">${product.price}</span>
                  
                  <div className="flex space-x-2">
                    <Link href={`/product/:${product.id}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
