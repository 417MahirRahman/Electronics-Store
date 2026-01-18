import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  Award,
  Star,
} from "lucide-react";

export default function Why_Choose_Us() {
  const features = [
    {
      id: 1,
      icon: ShieldCheck,
      title: "Secure Shopping",
      description:
        "Your data is protected with industry-leading security measures and encrypted transactions.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Get your orders delivered quickly with our reliable shipping partners across the country.",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      icon: RotateCcw,
      title: "Easy Returns",
      description:
        "30-day hassle-free returns policy. We make it easy to shop with complete confidence.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 4,
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Our dedicated support team is always ready to help you with any questions or issues.",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      icon: Award,
      title: "Quality Guaranteed",
      description:
        "All products are carefully selected and tested to ensure the highest quality standards.",
      color: "from-teal-500 to-blue-500",
    },
    {
      id: 6,
      icon: Star,
      title: "Trusted by Thousands",
      description:
        "Join thousands of satisfied customers who trust TechNest for their tech needs.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="py-20 bg-linear-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose TechNest?
          </h2>bg-linear-to-r
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to providing the best shopping experience with
            premium products, exceptional service, and unbeatable value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-linear-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="border-l border-gray-200 h-12"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div className="border-l border-gray-200 h-12"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
