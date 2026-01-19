import {
  Headphones,
  Smartphone,
  Laptop,
  Tablet,
  Wifi,
  Volume2,
  Apple,
  MousePointer,
} from "lucide-react";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Headphone",
      icon: Headphones,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Mobile",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      name: "Laptop",
      icon: Laptop,
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 4,
      name: "Tablet",
      icon: Tablet,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      name: "Router",
      icon: Wifi,
      color: "from-teal-500 to-blue-500",
    },
    {
      id: 6,
      name: "Earphone",
      icon: Volume2,
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 7,
      name: "Macbook",
      icon: Apple,
      color: "from-gray-500 to-slate-600",
    },
    {
      id: 8,
      name: "Mouse & Keyboard",
      icon: MousePointer,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of electronics across different categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id} className="group cursor-pointer">
                <div
                  className={`bg-linear-to-br ${category.color} rounded-2xl p-6 flex flex-col items-center justify-center h-32 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl`}
                >
                  <IconComponent className="w-8 h-8 text-white mb-2" />
                  <span className="text-white font-semibold text-sm text-center leading-tight">
                    {category.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
