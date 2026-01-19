import Image from "next/image";
import { ShoppingCart, Star, Tag } from "lucide-react";

export default function Best_Deals() {
  const deals = [
    {
      id: 1,
      name: "Macbook Pro",
      originalPrice: 1299.99,
      dealPrice: 899.99,
      discount: 31,
      rating: 4.8,
      image: "/macbook Pro.jpg",
    },
    {
      id: 2,
      name: "Wireless Earbuds Max",
      originalPrice: 199.99,
      dealPrice: 129.99,
      discount: 35,
      rating: 4.6,
      image: "/earbuds.jpg",
    },
    {
      id: 3,
      name: "Samsung s22 Ultra",
      originalPrice: 899.99,
      dealPrice: 649.99,
      discount: 28,
      rating: 4.7,
      image: "/samsung s22 ultra.webp",
    },
    {
      id: 4,
      name: "Mechanical Gaming Keyboard",
      originalPrice: 159.99,
      dealPrice: 89.99,
      discount: 44,
      rating: 4.9,
      image: "/Gaming Mechanical Keyboard.jpg",
    },
    {
    id: 5,
    name: "4K Ultra HD Smart TV",
    originalPrice: 699.99,
    dealPrice: 599.99,
    discount: 15,
    rating: 4.8,
    image: "/4K Ultra HD Smart TV.jpg",
  },
  {
    id: 6,
    name: "USB-C Fast Charging Power Bank",
    originalPrice: 39.99,
    dealPrice: 25.99,
    discount: 35,
    rating: 4.8,
    image: "/USB-C Fast Charging Power Bank.jpg",
  },
  ];
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Tag className="w-8 h-8 text-orange-500" />
            <h2 className="text-4xl font-bold text-gray-900">Best Deals & Offers</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-linear-to-br from-orange-50 to-red-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src={deal.image.trim()}
                  alt={deal.name}
                  fill
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-white text-orange-600 px-2 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1">
                  <span>-{deal.discount}%</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <div className="flex items-center justify-between mb-3 h-6">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      Rating: {deal.rating}
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-lg text-gray-900 mb-4 leading-tight line-clamp-2 min-h-12">
                  {deal.name}
                </h3>

                <div className="flex items-center justify-between mb-6 h-8">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ${deal.dealPrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${deal.originalPrice}
                    </span>
                  </div>
                </div>

                <div className="mt-auto">
                  <button className="w-full bg-linear-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
