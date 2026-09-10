import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
      {/* =========================
 Header
  ========================== */}
      <header className="bg-[#eaf1ff] border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-2xl font-bold text-indigo-600">
              BookStore
            </a>
            {/* Search */}
            {/* <div className="hidden md:flex w-full max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="বই খুঁজুন..."
                  className="w-full h-10 pl-4 pr-12 rounded-lg border border-gray-300
               focus:outline-none focus:ring-2 focus:ring-indigo-500
               focus:border-transparent"
                />
                <button
                  className="absolute right-0 top-0 h-10 w-11
               flex items-center justify-center
               text-gray-500 hover:text-indigo-600"
                >
                  🔍
                </button>
              </div>
            </div> */}
            <ul className="flex items-center gap-2">
              <li>
                <Link
                  href="/books"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black"
                >
                  Shop
                </Link>
                <Link
                  href="/dashboard"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black"
                >
                  Dashboard
                </Link>
              </li>
            </ul>

            {/* Cart */}
            <button className="relative text-gray-700 hover:text-indigo-600">
              🛒
              <span
                className="absolute -top-2 -right-2 w-5 h-5
             flex items-center justify-center
             text-xs font-semibold text-white
             bg-red-500 rounded-full"
              >
                2
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
