"use client";
import Image from "next/image";
import { ShoppingCart, Star, Timer, Tag } from "lucide-react";

export default function Best_Deals() {
  const deals = [
    {
      id: 1,
      name: "Gaming Laptop Pro",
      originalPrice: 1299.99,
      dealPrice: 899.99,
      discount: 31,
      rating: 4.8,
      image: "https://placehold.co/300x300/667eea/ffffff?text=Gaming+Laptop",
      category: "Laptop",
      timeLeft: "2h 34m",
    },
    {
      id: 2,
      name: "Wireless Earbuds Max",
      originalPrice: 199.99,
      dealPrice: 129.99,
      discount: 35,
      rating: 4.6,
      image: "https://placehold.co/300x300/f093fb/ffffff?text=Wireless+Earbuds",
      category: "Earphone",
      timeLeft: "5h 12m",
    },
    {
      id: 3,
      name: "Smartphone X Pro",
      originalPrice: 899.99,
      dealPrice: 649.99,
      discount: 28,
      rating: 4.7,
      image: "https://placehold.co/300x300/4ade80/ffffff?text=Smartphone+X",
      category: "Mobile",
      timeLeft: "1h 45m",
    },
    {
      id: 4,
      name: "Mechanical Gaming Keyboard",
      originalPrice: 159.99,
      dealPrice: 89.99,
      discount: 44,
      rating: 4.9,
      image: "https://placehold.co/300x300/fb7185/ffffff?text=Gaming+Keyboard",
      category: "Mouse & Keyboard",
      timeLeft: "8h 22m",
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Tag className="w-8 h-8 text-orange-500" />
            <h2 className="text-4xl font-bold text-gray-900">Best Deals</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t miss out on these amazing limited-time offers! Grab your
            favorite tech at unbeatable prices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-linear-to-br from-orange-50 to-red-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 bg-linear-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                -{deal.discount}%
              </div>

              {/* Image */}
              <div className="relative">
                <Image
                  src="/products/headphones.jpg"
                  alt="Headphones"
                  width={400}
                  height={192}
                  className="object-cover w-full h-48 rounded-lg"
                />
                <div className="absolute top-4 right-4 bg-white text-orange-600 px-2 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1">
                  <Timer className="w-3 h-3" />
                  <span>{deal.timeLeft}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded">
                    {deal.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {deal.rating}
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-lg text-gray-900 mb-3 leading-tight">
                  {deal.name}
                </h3>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ${deal.dealPrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${deal.originalPrice}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-linear-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 bg-linear-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <span>View All Deals</span>
            <Timer className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
