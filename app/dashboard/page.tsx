import {
  BookOpen,
  CircleCheck,
  Eye,
  FilePen,
  PackageX,
  Pencil,
  Trash,
} from "lucide-react";
import React from "react";
import { CreateBookForm } from "../components/CreateBookForm/CreateBookForm";
import { deleteBook, getAllBook } from "../actions/bookAction";
import { UpdateBookForm } from "../components/UpdateBookForm/UpdateBookForm";
import { ViewSingleBook } from "../components/ViewSingleBook/ViewSingleBook";

type Book = {
  id: string;
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
      {/* ================= MAIN ================= */}
      <div>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
            <a href="#" className="hover:text-indigo-600">
              Home
            </a>
            <i data-lucide="chevron-right" className="h-4 w-4" />
            <span className="font-medium text-gray-900">My Account</span>
          </div>
          {/* ================= DASHBOARD HEADER ================= */}
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                My Account
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage your books and product information.
              </p>
            </div>
            <CreateBookForm />
          </div>
          {/* ================= STATS ================= */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Total */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">মোট বই</p>
                  <h2 className="mt-2 text-2xl font-bold text-gray-900">248</h2>
                  <p className="mt-1 text-xs text-emerald-600">+12 এই মাসে</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <BookOpen />
                </div>
              </div>
            </div>
            {/* Published */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Published</p>
                  <h2 className="mt-2 text-2xl font-bold text-gray-900">215</h2>
                  <p className="mt-1 text-xs text-emerald-600">
                    Active products
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <CircleCheck />
                </div>
              </div>
            </div>
            {/* Draft */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Draft</p>
                  <h2 className="mt-2 text-2xl font-bold text-gray-900">24</h2>
                  <p className="mt-1 text-xs text-gray-500">
                    Waiting to publish
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                  <FilePen />
                </div>
              </div>
            </div>
            {/* Out of stock */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Out of Stock
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-gray-900">9</h2>
                  <p className="mt-1 text-xs text-red-500">Need attention</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-red-600">
                  <PackageX />
                </div>
              </div>
            </div>
          </div>
          {/* ================= PRODUCT TABLE ================= */}
          <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            {/* Table Header */}
            <div className="border-b border-gray-200 p-4 sm:p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">আমার বই</h2>
                  <p className="mt-1 text-sm text-gray-500">
                    আপনার সকল বই এখান থেকে পরিচালনা করুন।
                  </p>
                </div>
                {/* Search */}
                <div className="relative w-full lg:w-80">
                  <i
                    data-lucide="search"
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="বই খুঁজুন..."
                    className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
              </div>
            </div>
            {/* Filter */}
            <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 px-4 py-3 sm:px-5">
              <button className="rounded-lg bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-600">
                All
              </button>
              <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100">
                Published
              </button>
              <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100">
                Draft
              </button>
              <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100">
                Out of Stock
              </button>
            </div>
            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left">
                {/* Head */}
                <thead className="bg-gray-50">
                  <tr className="border-b border-gray-200">
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Book
                    </th>
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Category
                    </th>
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Price
                    </th>
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Stock
                    </th>
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Status
                    </th>
                    <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Action
                    </th>
                  </tr>
                </thead>
                {/* Body */}
                <tbody className="divide-y divide-gray-100">
                  {/* PRODUCT 1 */}

                  {books.reverse().map((item: Book) => {
                    return (
                      <tr key={item.id} className="transition hover:bg-gray-50">
                        {/* Book */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt="Book"
                              className="h-16 w-12 rounded-md object-cover shadow-sm"
                            />
                            <div>
                              <h3 className="max-w-xs truncate text-sm font-semibold text-gray-900">
                                {item.title}
                              </h3>
                              <p className="mt-1 text-xs text-gray-500">
                                {item.subtitle}
                              </p>
                              <p className="mt-1 text-xs text-gray-400">
                                ID: #{item.id}
                              </p>
                            </div>
                          </div>
                        </td>
                        {/* Category */}
                        <td className="px-5 py-4">
                          <span className="text-sm text-gray-600">
                            Marketing
                          </span>
                        </td>
                        {/* Price */}
                        <td className="px-5 py-4">
                          <div>
                            <p className="text-sm font-bold text-gray-900">
                              ৳{item.prc}
                            </p>
                            <p className="text-xs text-gray-400 line-through">
                              ৳{item.mrp}
                            </p>
                          </div>
                        </td>
                        {/* Stock */}
                        <td className="px-5 py-4">
                          <span className="text-sm font-medium text-gray-700">
                            25
                          </span>
                        </td>
                        {/* Status */}
                        <td className="px-5 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Published
                          </span>
                        </td>
                        {/* Actions */}
                        <td className="px-5 py-4">
                          <div className="flex justify-end gap-1">
                            {/* View */}
                            <ViewSingleBook singleBookId={item.id} />

                            {/* Edit */}
                            <UpdateBookForm singleBookId={item.id} />

                            {/* Delete */}
                            <form action={deleteBook}>
                              <input type="hidden" name="id" value={item.id} />
                              <button
                                type="submit"
                                title="Delete"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-red-50 hover:text-red-600 cursor-pointer"
                              >
                                <Trash />
                              </button>
                            </form>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* ================= PAGINATION ================= */}
            <div className="flex flex-col gap-3 border-t border-gray-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-500">
                Showing
                <span className="font-medium text-gray-900">1</span>
                to
                <span className="font-medium text-gray-900">10</span>
                of
                <span className="font-medium text-gray-900">248</span>
                products
              </p>
              <div className="flex items-center gap-1">
                <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50">
                  <i data-lucide="chevron-left" className="h-4 w-4" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-semibold text-white">
                  1
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
                  2
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
                  3
                </button>
                <span className="px-1 text-gray-400">...</span>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
                  25
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                  <i data-lucide="chevron-right" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default page;
