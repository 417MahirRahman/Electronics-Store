import Link from "next/link";


export default function Navbar() {

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <h1 className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TechNest
              </h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/product"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Products
              </Link>
              <Link
                href="/bestDeals"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Best Deals
              </Link>
              
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/login" className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
