import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

async function getProducts() {
  const res = await fetch('https://electronics-store-six.vercel.app/products.json', { cache: 'no-store' });
  return res.json();
}

export default async function ProductDetails({ params }) {
  const { id } = await params;
  const products = await getProducts();
  const product = products.find(
    (p) => String(p.id) === String(id)
  );

  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Image Section */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm relative h-80 sm:h-96 lg:h-100">
            <Image
              src={product.image.trim()}
              alt={product.name}
              fill
              className="object-fit rounded-2xl"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6 flex flex-col justify-center">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Price: ${product.price}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                {product.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>

                <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
