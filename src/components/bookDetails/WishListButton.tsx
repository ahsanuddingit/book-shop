"use client";

import { useBooks } from "@/contex/BooksContex";
import { IBook } from "@/types/books.type";
import { toast } from "react-toastify";

interface WishListButtonProps {
  book: IBook;
}

const WishListButton = ({ book }: WishListButtonProps) => {
  const { wishlist, setWishlist } = useBooks();

  const handleWishlist = () => {
    const isAlreadyInWishlist = wishlist.some((b) => b.bookId === book.bookId);
    if (!isAlreadyInWishlist) {
      setWishlist((prev) => [...prev, book]);
      toast.success(`Added "${book.bookName}" to your Wishlist.`);
    } else {
      toast.success(`"${book.bookName}" is already in your Wishlist.`);
    }
  };

  return (
    <button
      onClick={handleWishlist}
      className="px-7 py-3 bg-[#59C6D2] hover:bg-[#48b2be] text-white rounded-lg font-semibold transition-colors"
    >
      Add to Wishlist
    </button>
  );
};

export default WishListButton;