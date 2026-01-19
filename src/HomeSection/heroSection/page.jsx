import { ShoppingCart, Star, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto my-20 rounded-4xl relative overflow-hidden">     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                TechNest
                <span className="block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Transforms Lives
                </span>
              </h1>

              <p className="text-xl text-gray-900 leading-relaxed max-w-2xl">
                Discover the latest electronics with unbeatable prices,
                lightning-fast delivery, and premium quality that you can trust.
                Your tech journey starts here.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Shop Now</span>
                </div>
              </button>
              <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                View Collection
              </button>
            </div>
          </div>

          {/* Product showcase */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/banner.jpg"
                alt="Premium Tech Products"
                width={600}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
