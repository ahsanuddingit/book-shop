import React from 'react';
import BookCard from '@/components/shared/BookCard';
import { IBook } from '@/types/books.type';

const getBooks = async ()=>{
    const responce = await fetch('https://book-shop-pi-ashen.vercel.app/booksData.json');

    const data = await responce.json()
    return data ;
}

const Books = async () => {
    const booksData = await getBooks()
    console.log(booksData)
    return (
        <section className='container mx-auto my-17.5'>
           <div className="text-center mb-12">
                <h1 className="text-4xl font-bold font-serif text-gray-900 mb-2">
                    Books
                </h1>
            </div>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 justify-items-center">
                {booksData.map((book:IBook) => (
                    <BookCard key={book.bookId} book={book} />
                ))}
            </div>
        </section>
    );
};

export default Books;