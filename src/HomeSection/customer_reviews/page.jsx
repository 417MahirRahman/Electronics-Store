"ues client";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

export default function Customer_Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Developer",
      rating: 5,
      image: "https://placehold.co/80x80/667eea/ffffff?text=SJ",
      review:
        "TechNest exceeded my expectations! The laptop I ordered arrived faster than expected and the quality is outstanding. Their customer service team was incredibly helpful when I had questions about setup.",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Graphic Designer",
      rating: 5,
      image: "https://placehold.co/80x80/f093fb/ffffff?text=MC",
      review:
        "I've been shopping with TechNest for over a year now. Their product selection is fantastic and prices are always competitive. The wireless earbuds I bought last month have amazing sound quality!",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Student",
      rating: 4,
      image: "https://placehold.co/80x80/4ade80/ffffff?text=ER",
      review:
        "As a student on a budget, TechNest's deals section saved me so much money on my new tablet. The ordering process was smooth and delivery was right on time. Highly recommend!",
      date: "3 weeks ago",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Business Owner",
      rating: 5,
      image: "https://placehold.co/80x80/fb7185/ffffff?text=DK",
      review:
        "Purchased multiple networking devices for my office and couldn't be happier. Everything works perfectly together and the technical support was excellent. TechNest is now my go-to for all tech needs.",
      date: "5 days ago",
    },
  ];
  return (
    <section className="py-20 bg-linear-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Star className="w-8 h-8 text-yellow-500 fill-current" />
            <h2 className="text-4xl font-bold text-gray-900">
              Customer Reviews
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear what our amazing customers
            have to say about their TechNest experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="text-orange-400 mb-4">
                <Quote className="w-8 h-8 opacity-30" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                {review.review}
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/products/headphones.jpg"
                  alt={review.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
