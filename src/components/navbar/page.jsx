'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ isLoggedIn }) {
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <h1 className="text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TechNest
              </h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className={`font-medium transition-colors ${
                  isActive("/") 
                    ? "text-blue-600 border-b-2 border-blue-600" 
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Home
              </Link>
              <Link
                href="/product"
                className={`font-medium transition-colors ${
                  isActive("/product") 
                    ? "text-blue-600 border-b-2 border-blue-600" 
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Products
              </Link>
              <Link
                href="/bestDeals"
                className={`font-medium transition-colors ${
                  isActive("/bestDeals") 
                    ? "text-blue-600 border-b-2 border-blue-600" 
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Best Deals
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link 
                href="/login" 
                className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {isLoggedIn ? "" : "Login"}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
