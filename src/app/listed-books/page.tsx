"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useBooks } from "@/contex/BooksContex";
import { MapPin, Users, FileText } from "lucide-react"; // install lucide-react if not installed
import { IBook } from "@/types/books.type";

const ListedBooks = () => {
  const { readBooks, wishlist } = useBooks();

  const renderBookCard = (book:IBook) => (
    <div
      key={book.bookId}
      className="border border-gray-200 p-6 rounded-2xl shadow-sm bg-white flex flex-col md:flex-row gap-6 items-center md:items-start"
    >
      {/* Book Cover Image */}
      <div className="bg-gray-100 p-6 rounded-2xl flex items-center justify-center w-full md:w-56 h-56 shrink-0">
        <Image
          src={book.image}
          alt={book.bookName}
          width={120}
          height={160}
          className="object-contain h-40 w-auto shadow-md"
        />
      </div>

      {/* Book Information */}
      <div className="flex-1 w-full space-y-3">
        <h3 className="text-2xl font-bold text-gray-900">{book.bookName}</h3>
        <p className="text-gray-600 font-medium">By : {book.author}</p>

        {/* Tags & Year */}
        <div className="flex flex-wrap items-center gap-4 text-sm pt-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-800">Tag</span>
            {book.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="bg-emerald-50 text-emerald-600 font-medium px-3 py-1 rounded-full text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <MapPin className="w-4 h-4" />
            <span>Year of Publishing: {book.yearOfPublishing}</span>
          </div>
        </div>

        {/* Publisher & Pages */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pt-1 border-b border-gray-100 pb-4">
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span>Publisher: {book.publisher}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FileText className="w-4 h-4" />
            <span>Page {book.totalPages}</span>
          </div>
        </div>

        {/* Category, Rating, and Action Button */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <span className="bg-blue-50 text-blue-500 px-4 py-2 rounded-full text-xs font-medium">
            Category: {book.category}
          </span>
          <span className="bg-amber-50 text-amber-500 px-4 py-2 rounded-full text-xs font-medium">
            Rating: {book.rating}
          </span>
          <Link
            href={`/books/${book.bookId}`}
            className="bg-[#23BE0A] hover:bg-emerald-600 text-white font-medium px-5 py-2 rounded-full text-xs transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="tabs tabs-border">
        {/* Read Books Tab */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-base font-semibold"
          aria-label="Read Books"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 py-6">
          <div className="space-y-4">
            {readBooks.map((book) => renderBookCard(book))}
          </div>
        </div>

        {/* Wishlist Books Tab */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-base font-semibold"
          aria-label="Wishlist Books"
        />
        <div className="tab-content border-base-300 bg-base-100 py-6">
          <div className="space-y-4">
            {wishlist.map((book) => renderBookCard(book))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListedBooks;