import { ShoppingCart, Star, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto my-20 rounded-4xl relative overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                TechNest
                <span className="block bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Transforms Lives
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Discover the latest electronics with unbeatable prices,
                lightning-fast delivery, and premium quality that you can trust.
                Your tech journey starts here.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-linear-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Shop Now</span>
                </div>
              </button>
              <button className="border-2 border-white border-opacity-30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 backdrop-blur-sm">
                View Collection
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-white border-opacity-20">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span className="text-white text-sm">Secure Shopping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-purple-400" />
                <span className="text-white text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-white text-sm">Quality Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Product showcase */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/products/headphones.jpg"
                alt="Premium Tech Products"
                width={48}
                height={48}
                className="rounded-3xl shadow-2xl ring-1 ring-white ring-opacity-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
