import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import { FaRegStar } from 'react-icons/fa';

const BookCard = ({ book }: { book: IBook }) => {
    const { bookName, author, image, rating, category, tags } = book;

    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Image Container */}
            <div className="bg-gray-100 py-8 rounded-2xl flex justify-center items-center h-56">
                <Image
                    src={image}
                    alt={bookName}
                    width={200}
                    height={240}
                    className="h-40 object-contain drop-shadow-md"
                />
            </div>

            {/* Details Section */}
            <div className="pt-6">
                {/* Tags */}
                <div className="flex flex-wrap mb-3">
                    {tags?.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-green-50 text-emerald-600 font-medium px-4 py-1.5 rounded-full text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold font-serif text-gray-900 tracking-tight">
                    {bookName}
                </h2>

                {/* Author */}
                <p className="text-gray-600 text-sm font-medium mt-2">
                    By : {author}
                </p>

                {/* Dashed Separator */}
                <div className="border-b border-dashed border-gray-200 my-4"></div>

                {/* Category & Rating */}
                <div className="flex justify-between items-center text-gray-700 font-medium text-sm">
                    <span>{category}</span>
                    <div className="flex items-center gap-1.5">
                        <span>{Number(rating).toFixed(2)}</span>
                        {/* <FaRegStar className="text-lg text-gray-700" /> */}
                    </div>
                </div>
                    <Link href={`/books/${book.bookId}`}>
                        <button className='w-full bg-black text-white font-bold py-3 my-3 rounded-lg'>View Details &rarr;</button>
                    
                    </Link>
            </div>
        </div>
    );
};

export default BookCard;