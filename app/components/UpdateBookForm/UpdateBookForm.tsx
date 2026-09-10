import { getSingleBook, updateBook } from "@/app/actions/bookAction";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FieldGroup } from "@/components/ui/field";
import { SquarePen } from "lucide-react";

type UpdateBookFormProps = {
  singleBookId: string;
};

export async function UpdateBookForm({ singleBookId }: UpdateBookFormProps) {
  const book = await getSingleBook(singleBookId);

  return (
    <Dialog>
      {/* <form action={createBook} className="p-5 sm:p-7"> */}
      <DialogTrigger
        render={
          <Button
            variant="normalBtn"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-amber-50 hover:text-amber-600 cursor-pointer"
          >
            <SquarePen />
          </Button>
        }
      />
      <DialogContent className="sm:max-w-3xl">
        <form action={updateBook} className="p-5 sm:p-7">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-gray-900 mb-4">
              বইয়ের তথ্য
            </DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <div className="mb-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Book Title */}

                <input type="hidden" name="id" value={book.id} />
                <div className="sm:col-span-2">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    বইয়ের নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="title"
                    type="text"
                    placeholder="যেমন: মার্কেটিং ম্যাজিক"
                    className="w-full h-11 px-4 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    name="title"
                    defaultValue={book.title}
                  />
                </div>
                {/* Author */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="author"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    লেখকের নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="author"
                    type="text"
                    placeholder="যেমন: মুহাম্মদ ইলিয়াস কাঞ্চন"
                    className="w-full h-11 px-4 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                    name="subtitle"
                    defaultValue={book.subtitle}
                  />
                </div>
              </div>{" "}
            </div>
            <div className="border-t border-gray-200 pt-7 mb-7">
              <h2 className="text-base font-semibold text-gray-900 mb-4">
                মূল্য ও ডিসকাউন্ট
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* MRP */}
                <div>
                  <label
                    htmlFor="mrp"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    MRP <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      ৳
                    </span>{" "}
                    <input
                      id="mrp"
                      type="number"
                      placeholder="1000"
                      className="w-full h-11 pl-8 pr-4 rounded-lg border border-gray-300 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                      name="mrp"
                      defaultValue={book.mrp}
                    />
                  </div>
                </div>
                {/* Discount */}
                <div>
                  <label
                    htmlFor="discount"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    ডিসকাউন্ট
                  </label>
                  <div className="relative">
                    <input
                      id="discount"
                      type="number"
                      placeholder="20"
                      className="w-full h-11 px-4 pr-10 rounded-lg border border-gray-300 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                      name="dis"
                      defaultValue={book.dis}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                      %
                    </span>{" "}
                  </div>
                </div>
                {/* Price */}
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    বিক্রয় মূল্য <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      ৳
                    </span>{" "}
                    <input
                      id="price"
                      type="number"
                      placeholder="800"
                      className="w-full h-11 pl-8 pr-4 rounded-lg border border-gray-300 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                      name="prc"
                      defaultValue={book.prc}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* ================================ BOOK IMAGE ================================= */}
            <div className="border-t border-gray-200 pt-7 mb-7">
              <h2 className="text-base font-semibold text-gray-900 mb-4">
                বইয়ের ছবি
              </h2>
              <label
                htmlFor="image"
                className="group flex flex-col items-center justify-center w-full min-h-40 px-5 py-7 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 cursor-pointer hover:border-indigo-400 hover:bg-indigo-50/50 transition"
              >
                <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xl group-hover:border-indigo-300">
                  📷
                </div>{" "}
                <p className="mt-3 text-sm font-medium text-gray-700">
                  বইয়ের ছবি লিঙ্ক যুক্ত করুন
                </p>
                <input
                  className="w-full h-11 pl-8 pr-4 rounded-lg border border-gray-300 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  id="image"
                  type="text"
                  name="image"
                  defaultValue={book.image}
                />
              </label>{" "}
            </div>
          </FieldGroup>
          <DialogFooter>
            <Button className="px-6 py-5 cursor-pointer" type="submit">
              বই যোগ করুন
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
      {/* </form> */}
    </Dialog>
  );
}
