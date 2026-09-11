import React from "react";
import { getAllBook } from "../actions/bookAction";
import Link from "next/link";
import { CreateBookForm } from "../components/CreateBookForm/CreateBookForm";

type Book = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  mrp: number;
  dis: number;
  prc: number;
};

async function page() {
  const books = await getAllBook();

  return (
    <>
      {/* =========================
 Main Content
  ========================== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              সকল বই
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              আপনার পছন্দের বইগুলো খুঁজে নিন
            </p>
          </div>
          {/* Sort */}
          <CreateBookForm />
        </div>
        {/* =========================
   Product Grid
    ========================== */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
       xl:grid-cols-5 gap-4 sm:gap-5"
        >
          {books.reverse().map((item: Book) => {
            return (
              <div
                key={item.id}
                className="group bg-white rounded-xl border border-gray-200
         overflow-hidden hover:shadow-lg hover:-translate-y-1
         transition-all duration-300"
              >
                {/* Image */}
                <div className="relative bg-gray-100 aspect-[3/4] overflow-hidden">
                  <img
                    src={item?.image}
                    alt="মার্কেটিং ম্যাজিক"
                    className="w-full h-full object-cover
             group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-3 sm:p-4">
                  {/* Title */}
                  <h2
                    className="text-sm sm:text-base font-semibold
             text-gray-900 line-clamp-2
             min-h-[42px]
             group-hover:text-indigo-600
             transition-colors"
                  >
                    {item.title}
                  </h2>
                  {/* Author */}
                  <p
                    className="mt-1.5 text-xs sm:text-sm
             text-gray-500 line-clamp-1"
                  >
                    {item.subtitle}
                  </p>
                  {/* Price */}
                  <div className="mt-3 flex items-center gap-2 flex-wrap">
                    {/* Current Price */}
                    <span className="text-lg font-bold text-indigo-600">
                      ৳{item.prc}
                    </span>
                    {/* MRP */}
                    <span className="text-xs sm:text-sm text-gray-400 line-through">
                      ৳{item.mrp}
                    </span>
                  </div>
                  {/* Button */}
                  <Link
                    href={`${process.env.NEXT_PUBLIC_SITE_URL}/books/${item.id}`}
                    className="mt-4 flex items-center justify-center
             w-full h-9 sm:h-10
             rounded-lg
             bg-indigo-600 hover:bg-indigo-700
             text-white text-xs sm:text-sm
             font-medium
             transition-colors duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default page;
