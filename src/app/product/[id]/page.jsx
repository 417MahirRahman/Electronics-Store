import { ShoppingCart, Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import Image from 'next/image';

async function getProducts() {
  const res = await fetch('http://localhost:3000/products.json', {
    cache: 'no-store'
  });
  return res.json();
}

export default async function ProductDetails({ params }) {
  const { id } = params;
  const products = await getProducts();
  const product = products.find((p) => p.id.toString() === id);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="bg-white rounded-2xl p-6 shadow-sm relative h-96">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              {product.category && (
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {product.category}
                </span>
              )}

              <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
                {product.name}
              </h1>

              
            </div>

            {/* Price + Features */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-4xl font-bold text-gray-900 mb-6">
                ${product.price}
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-lg text-gray-900">
                  Product Features:
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4 grow">
                  {product.description.split('\n').join(' ')}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>

                <button className="border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  Add to Wishlist
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 bg-white p-4 rounded-xl shadow-sm">
                <ShieldCheck className="w-6 h-6 text-green-500" />
                <div>
                  <div className="font-semibold text-sm">Secure</div>
                  <div className="text-xs text-gray-600">Shopping</div>
                </div>
              </div>

              <div className="flex items-center space-x-2 bg-white p-4 rounded-xl shadow-sm">
                <Truck className="w-6 h-6 text-blue-500" />
                <div>
                  <div className="font-semibold text-sm">Free</div>
                  <div className="text-xs text-gray-600">Shipping</div>
                </div>
              </div>

              <div className="flex items-center space-x-2 bg-white p-4 rounded-xl shadow-sm">
                <RotateCcw className="w-6 h-6 text-purple-500" />
                <div>
                  <div className="font-semibold text-sm">Easy</div>
                  <div className="text-xs text-gray-600">Returns</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
