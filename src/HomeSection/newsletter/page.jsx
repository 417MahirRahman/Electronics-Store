import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto my-20 py-20 bg-linear-to-r from-blue-600 to-purple-600 relative overflow-hidden rounded-4xl">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex items-center justify-center mb-6">
          <Mail className="w-12 h-12 text-white mr-3" />
          <h2 className="text-4xl font-bold text-white">
            Stay Updated with TechNest
          </h2>
        </div>

        <p className="text-white text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Get exclusive deals, new product announcements, tech tips, and special
          offers delivered straight to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          />
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:-translate-y-0.5 shadow-lg">
            Subscribe
          </button>
        </div>

        <p className="text-white text-sm mt-4">
          Join over 50,000+ tech enthusiasts. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
