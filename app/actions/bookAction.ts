"use server";

import { revalidatePath } from "next/cache";

const API = "https://book-store-1-mhhy.onrender.com/books!";

//Create Book
export async function createBook(formData: FormData) {
  const title = formData.get("title");
  const subtitle = formData.get("subtitle");
  const mrp = formData.get("mrp");
  const dis = formData.get("dis");
  const prc = formData.get("prc");
  const image = formData.get("image");

  // validations
  // if (!title || !subtitle || !mrp || !dis || !prc || !image) {
  //   return {
  //     message: "All field is requird",
  //   };
  // }

  //send data to API
  const response = await fetch(API, {
    method: "POST",
    body: JSON.stringify({ title, subtitle, mrp, dis, prc, image }),
  });

  revalidatePath("/books");
}

//Get All Users
export async function getAllBook() {
  //fetch users
  const response = await fetch(API, {
    cache: "no-store",
  });
  const books = await response.json();

  return books;
}

//Delete Single Book
export async function deleteBook(formData: FormData) {
  //get id
  const id = formData.get("id");
  //fetch users
  const response = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  const book = await response.json();
  revalidatePath("/dashboard");

  return book;
}

//Get Single Book
export async function getSingleBook(id: string) {
  const res = await fetch(`${API}/${id}`, {
    cache: "no-cache",
  });

  return res.json();
}

//update Single Book
export async function updateBook(formData: FormData) {
  //get id
  const id = formData.get("id");

  //get form data
  const title = formData.get("title");
  const subtitle = formData.get("subtitle");
  const mrp = formData.get("mrp");
  const dis = formData.get("dis");
  const prc = formData.get("prc");
  const image = formData.get("image");

  //Send data to API
  const response = await fetch(`${API}/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ title, subtitle, mrp, dis, prc, image }),
  });
  const book = await response.json();
  revalidatePath("/dashboard");

  return book;
}
