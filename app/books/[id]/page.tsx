import { getAllBook } from "@/app/actions/bookAction";
import Link from "next/link";
import React from "react";

async function SinglePage({ params }) {
  const { id } = await params;
  const books = await getAllBook();
  const book = books.find((data) => data.id == id);

  return (
    <>
      {/* =====================================================
 BREADCRUMB
  ====================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-5 text-sm text-gray-500">
          <Link href="http://localhost:3000/" className="hover:text-indigo-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="http://localhost:3000/books/"
            className="hover:text-indigo-600"
          >
            Books
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{book.title}</span>
        </div>
      </div>
      {/* =====================================================
 PRODUCT DETAILS
  ====================================================== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div
          className="bg-white
       rounded-2xl
       border border-gray-200
       overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-5 sm:p-8 lg:p-10">
            {/* =================================================
       LEFT : PRODUCT IMAGE
  ================================================== */}
            <div>
              <div
                className="relative
             bg-gray-100
             rounded-xl
             overflow-hidden
             max-w-md
             mx-auto
             aspect-[3/4]"
              >
                {/* Discount */}
                <span
                  className="absolute
               top-4
               left-4
               z-10
               px-3 py-1.5
               rounded-lg
               bg-red-500
               text-white
               text-sm
               font-bold"
                >
                  99% OFF
                </span>
                {/* Product Image */}
                <img
                  src={book.image}
                  alt="মার্কেটিং ম্যাজিক"
                  className="w-full h-full
               object-contain
               p-8
               sm:p-12
               hover:scale-105
               transition-transform
               duration-500"
                />
              </div>
              {/* Small Image */}
              <div className="flex justify-center gap-3 mt-4">
                <button
                  className="w-16 h-20
               rounded-lg
               border-2
               border-indigo-600
               bg-gray-50
               overflow-hidden"
                >
                  <img
                    src={book.image}
                    alt="Book thumbnail"
                    className="w-full h-full object-contain p-1"
                  />
                </button>
              </div>
            </div>
            {/* =================================================
       RIGHT : PRODUCT INFORMATION
  ================================================== */}
            <div className="flex flex-col">
              {/* Category */}
              <p
                className="text-sm
             font-medium
             text-indigo-600
             mb-2"
              >
                Business &amp; Marketing
              </p>
              {/* Title */}
              <h1
                className="text-2xl
             sm:text-3xl
             lg:text-4xl
             font-bold
             leading-tight
             text-gray-900"
              >
                {book.title}
              </h1>
              {/* Author */}
              <p
                className="mt-3
             text-sm
             sm:text-base
             text-gray-500"
              >
                লেখক:
                <span className="font-medium text-gray-800">
                  {book.subtitle}
                </span>
              </p>
              {/* Rating */}
              <div
                className="flex
             items-center
             gap-3
             mt-5"
              >
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
                <span className="text-sm text-gray-500">4.8 (125 Reviews)</span>
              </div>
              {/* Divider */}
              <div className="border-t border-gray-200 my-6" />
              {/* PRICE */}
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  {/* Current Price */}
                  <span
                    className="text-3xl
                 sm:text-4xl
                 font-bold
                 text-indigo-600"
                  >
                    ৳{book.prc}
                  </span>
                  {/* MRP */}
                  <span
                    className="text-base
                 sm:text-lg
                 text-gray-400
                 line-through"
                  >
                    ৳{book.mrp}
                  </span>
                  {/* Discount */}
                  <span
                    className="px-2.5 py-1
                 rounded-md
                 bg-red-50
                 text-red-600
                 text-sm
                 font-semibold"
                  >
                    {book.dic}% OFF
                  </span>
                </div>
                <p
                  className="mt-2
               text-sm
               text-green-600
               font-medium"
                >
                  ✓ In Stock
                </p>
              </div>
              {/* Description */}
              <div className="mt-6">
                <h2
                  className="text-lg
               font-semibold
               text-gray-900
               mb-2"
                >
                  বইটি সম্পর্কে
                </h2>
                <p
                  className="text-sm
               sm:text-base
               leading-7
               text-gray-600"
                >
                  মার্কেটিং সম্পর্কে সহজ ও বাস্তবভিত্তিক ধারণা পেতে এই বইটি একটি
                  চমৎকার সংগ্রহ। ব্যবসা, ব্র্যান্ডিং এবং মার্কেটিংয়ের বিভিন্ন
                  গুরুত্বপূর্ণ বিষয় সহজ ভাষায় তুলে ধরা হয়েছে।
                </p>
              </div>
              {/* Quantity */}
              <div className="mt-6">
                <p
                  className="text-sm
               font-semibold
               text-gray-900
               mb-2"
                >
                  Quantity
                </p>
                <div
                  className="flex
               items-center
               w-fit
               border
               border-gray-300
               rounded-lg
               overflow-hidden"
                >
                  <button
                    className="w-10 h-10
                 flex items-center justify-center
                 text-lg
                 text-gray-600
                 hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span
                    className="w-12 h-10
                 flex items-center justify-center
                 border-x
                 border-gray-300
                 font-semibold"
                  >
                    1
                  </span>
                  <button
                    className="w-10 h-10
                 flex items-center justify-center
                 text-lg
                 text-gray-600
                 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
              {/* ACTION BUTTONS */}
              <div
                className="grid
             grid-cols-1
             sm:grid-cols-2
             gap-3
             mt-7"
              >
                {/* Add Cart */}
                <button
                  className="h-12
               rounded-lg
               border-2
               border-indigo-600
               text-indigo-600
               font-semibold
               hover:bg-indigo-50
               transition-colors"
                >
                  🛒 Add to Cart
                </button>
                {/* Buy Now */}
                <button
                  className="h-12
               rounded-lg
               bg-indigo-600
               hover:bg-indigo-700
               text-white
               font-semibold
               transition-colors"
                >
                  Buy Now
                </button>
              </div>
              {/* DELIVERY INFO */}
              <div
                className="mt-7
             p-4
             rounded-xl
             bg-gray-50
             border
             border-gray-200"
              >
                <div className="flex gap-3">
                  <div className="text-xl">🚚</div>
                  <div>
                    <h3
                      className="font-semibold
                   text-gray-900"
                    >
                      Fast Delivery
                    </h3>
                    <p
                      className="mt-1
                   text-sm
                   text-gray-500"
                    >
                      সারা বাংলাদেশে দ্রুত ডেলিভারি সুবিধা।
                    </p>
                  </div>
                </div>
                <div
                  className="border-t
               border-gray-200
               my-4"
                />
                <div className="flex gap-3">
                  <div className="text-xl">🔒</div>
                  <div>
                    <h3
                      className="font-semibold
                   text-gray-900"
                    >
                      Secure Payment
                    </h3>
                    <p
                      className="mt-1
                   text-sm
                   text-gray-500"
                    >
                      নিরাপদ ও সহজ পেমেন্ট ব্যবস্থা।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =====================================================
   BOOK INFORMATION
    ====================================================== */}
        <div
          className="mt-6
       bg-white
       rounded-2xl
       border border-gray-200
       overflow-hidden"
        >
          {/* Tabs */}
          <div
            className="flex
         overflow-x-auto
         border-b
         border-gray-200"
          >
            <button
              className="px-5
           sm:px-7
           py-4
           text-sm
           font-semibold
           text-indigo-600
           border-b-2
           border-indigo-600
           whitespace-nowrap"
            >
              Description
            </button>
            <button
              className="px-5
           sm:px-7
           py-4
           text-sm
           font-medium
           text-gray-500
           hover:text-gray-900
           whitespace-nowrap"
            >
              Book Information
            </button>
            <button
              className="px-5
           sm:px-7
           py-4
           text-sm
           font-medium
           text-gray-500
           hover:text-gray-900
           whitespace-nowrap"
            >
              Reviews
            </button>
          </div>
          {/* Description Content */}
          <div className="p-5 sm:p-7 lg:p-8">
            <h2
              className="text-xl
           font-bold
           text-gray-900"
            >
              {book.title}
            </h2>
            <p
              className="mt-4
           text-sm
           sm:text-base
           leading-8
           text-gray-600
           max-w-4xl"
            >
              মার্কেটিং হলো একটি ব্যবসার অন্যতম গুরুত্বপূর্ণ অংশ। সঠিক মার্কেটিং
              কৌশল একটি ব্যবসাকে দ্রুত বৃদ্ধি করতে সাহায্য করে। এই বইয়ে
              মার্কেটিংয়ের বিভিন্ন কৌশল, গ্রাহক বোঝা, ব্র্যান্ড তৈরি এবং
              ব্যবসায়িক প্রচারণার গুরুত্বপূর্ণ বিষয়গুলো সহজভাবে আলোচনা করা
              হয়েছে।
            </p>
            {/* Book Information */}
            <div
              className="grid
           grid-cols-1
           sm:grid-cols-2
           gap-x-10
           gap-y-4
           mt-7
           max-w-3xl"
            >
              <div
                className="flex
             justify-between
             gap-4
             py-3
             border-b
             border-gray-100"
              >
                <span className="text-sm text-gray-500">Title</span>
                <span className="text-sm font-medium text-gray-900">
                  মার্কেটিং ম্যাজিক
                </span>
              </div>
              <div
                className="flex
             justify-between
             gap-4
             py-3
             border-b
             border-gray-100"
              >
                <span className="text-sm text-gray-500">Author</span>
                <span className="text-sm font-medium text-gray-900">
                  কোচ কাঞ্চন
                </span>
              </div>
              <div
                className="flex
             justify-between
             gap-4
             py-3
             border-b
             border-gray-100"
              >
                <span className="text-sm text-gray-500">Category</span>
                <span className="text-sm font-medium text-gray-900">
                  Marketing
                </span>
              </div>
              <div
                className="flex
             justify-between
             gap-4
             py-3
             border-b
             border-gray-100"
              >
                <span className="text-sm text-gray-500">Product ID</span>
                <span className="text-sm font-medium text-gray-900">
                  488897
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SinglePage;
