import { getSingleBook } from "@/app/actions/bookAction";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";

type SingleBookIdProps = {
  singleBookId: string;
};

export async function ViewSingleBook({ singleBookId }: SingleBookIdProps) {
  const book = await getSingleBook(singleBookId);

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="normalBtn"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer"
          >
            <Eye />
          </Button>
        }
      />
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader className="border-b-1 pb-4">
          <DialogTitle>বইয়ের বিস্তারিত</DialogTitle>
          <DialogDescription>Book Information</DialogDescription>
        </DialogHeader>
        <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
          <div className="max-h-[75vh] overflow-y-auto">
            <div className="grid grid-cols-1 gap-7 p-5 sm:p-6 md:grid-cols-[220px_1fr]">
              {/* =================================================
           BOOK IMAGE
      ================================================== */}
              <div>
                <div className="relative mx-auto w-full max-w-[200px]">
                  {/* Discount */}
                  <span className="absolute left-2 top-2 z-10 rounded-md bg-red-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                    -99%
                  </span>
                  <img
                    src={book.image}
                    alt="মার্কেটিং ম্যাজিক"
                    className="aspect-[3/4] w-full rounded-xl border border-gray-200 bg-gray-50 object-cover shadow-sm"
                  />
                </div>
                {/* Image caption */}
                <p className="mt-3 text-center text-xs text-gray-400">
                  Book Cover
                </p>
              </div>
              {/* =================================================
           BOOK INFORMATION
      ================================================== */}
              <div className="min-w-0">
                {/* Title */}
                <div>
                  <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                    {book.title}
                  </h1>
                  <p className="mt-2 text-sm text-gray-500">{book.subtitle}</p>
                </div>
                {/* Rating + ID */}
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {/* Rating */}
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1">
                      <i
                        data-lucide="star"
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                      <span className="text-sm font-semibold text-amber-700">
                        4.8
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">(124 Reviews)</span>
                  </div>
                  {/* Divider */}
                  <span className="hidden h-4 w-px bg-gray-200 sm:block" />
                  {/* Book ID */}
                  <span className="text-xs text-gray-500">
                    ID:
                    <strong className="font-semibold text-gray-700">
                      #{book.id}
                    </strong>
                  </span>
                </div>
                {/* =================================================
             PRICE
        ================================================== */}
                <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex flex-wrap items-end gap-3">
                    {/* Current Price */}
                    <div>
                      <p className="mb-1 text-xs font-medium text-gray-500">
                        বিক্রয় মূল্য
                      </p>
                      <p className="text-3xl font-bold tracking-tight text-indigo-600">
                        ৳{book.prc}
                      </p>
                    </div>
                    {/* MRP */}
                    <div className="pb-1">
                      <p className="text-sm text-gray-400 line-through">
                        ৳{book.mrp}
                      </p>
                      <p className="text-xs font-medium text-emerald-600">
                        Save ৳99,001
                      </p>
                    </div>
                    {/* Discount */}
                    <span className="mb-1 rounded-md bg-red-50 px-2.5 py-1 text-xs font-bold text-red-600">
                      {book.dis}% OFF
                    </span>
                  </div>
                </div>
                {/* =================================================
             META INFORMATION
        ================================================== */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {/* Stock */}
                  <div className="rounded-lg border border-gray-200 p-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                        <i data-lucide="package" className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-400">Stock</p>
                        <p className="text-sm font-semibold text-gray-900">
                          25
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Category */}
                  <div className="rounded-lg border border-gray-200 p-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-50 text-purple-600">
                        <i data-lucide="tag" className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-400">Category</p>
                        <p className="text-sm font-semibold text-gray-900">
                          Marketing
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Status */}
                  <div className="rounded-lg border border-gray-200 p-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                        <i data-lucide="circle-check" className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-400">Status</p>
                        <p className="text-sm font-semibold text-emerald-600">
                          Published
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* =================================================
             DESCRIPTION
        ================================================== */}
                <div className="mt-6 border-t border-gray-200 pt-5">
                  <h3 className="text-sm font-bold text-gray-900">
                    বই সম্পর্কে
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    মার্কেটিং ও ব্যবসার জগতে সফল হওয়ার জন্য প্রয়োজনীয়
                    গুরুত্বপূর্ণ কৌশল ও ধারণাগুলো এই বইটিতে সহজভাবে তুলে ধরা
                    হয়েছে। নতুন উদ্যোক্তা এবং মার্কেটিং পেশাজীবীদের জন্য এটি
                    একটি কার্যকর বই।
                  </p>
                </div>
                {/* =================================================
             ADDITIONAL INFO
        ================================================== */}
                <div className="mt-5 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                  <div className="flex justify-between rounded-lg bg-gray-50 px-3 py-2.5">
                    <span className="text-gray-500">Publisher</span>
                    <span className="font-medium text-gray-800">
                      XYZ Publications
                    </span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-gray-50 px-3 py-2.5">
                    <span className="text-gray-500">ISBN</span>
                    <span className="font-medium text-gray-800">
                      9789840000000
                    </span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-gray-50 px-3 py-2.5">
                    <span className="text-gray-500">Created</span>
                    <span className="font-medium text-gray-800">
                      06 Sep 2026
                    </span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-gray-50 px-3 py-2.5">
                    <span className="text-gray-500">Updated</span>
                    <span className="font-medium text-gray-800">
                      08 Sep 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
