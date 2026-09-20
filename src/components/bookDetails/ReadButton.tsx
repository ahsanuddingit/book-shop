"use client";

import { useBooks } from "@/contex/BooksContex";
import { IBook } from "@/types/books.type";
import { toast } from "react-toastify";

interface ReadButtonProps {
  book: IBook;
}

const ReadButton = ({ book }: ReadButtonProps) => {
  const { readBooks, setReadBooks } = useBooks();

  const handleReadBook = () => {
    // Avoid adding duplicates if needed
    const isAlreadyRead = readBooks.some((b) => b.bookId === book.bookId);
    if (!isAlreadyRead) {
      setReadBooks((prev) => [...prev, book]);
      toast.success(`You have added "${book.bookName}" to Read Books.`);
    } else {
      toast.success(`"${book.bookName}" is already in your read list.`);
    }
  };

  return (
    <button
      onClick={handleReadBook}
      className="px-7 py-3 bg-[#59C6D2] hover:bg-[#48b2be] text-white rounded-lg font-semibold transition-colors"
    >
      Read more
    </button>
  );
};

export default ReadButton;