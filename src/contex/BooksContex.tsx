"use client";

import { IBook } from "@/types/books.type";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface IBooksContext {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishlist: IBook[];
  setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<IBooksContext | undefined>(undefined);

export const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);

  return (
    <BooksContext.Provider
      value={{
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooks must be used within a BooksProvider");
  }
  return context;
};

export default BooksProvider;