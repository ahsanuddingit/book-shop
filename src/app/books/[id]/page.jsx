import Image from 'next/image';
import ReadButton from '@/components/bookDetails/ReadButton';
import WishListButton from '@/components/bookDetails/WishListButton';
const getBooks = async () => {
    const response = await fetch('https://book-shop-pi-ashen.vercel.app/booksData.json');
    const data = await response.json();
    return data;
};

const BookDetailsPage = async ({ params }) => {
    const booksData = await getBooks();
    const { id } = await params;

    // Fixed key matching: book.bookId instead of book.booksData
    const book = booksData.find((book) => String(book.bookId) === String(id));

    if (!book) {
        return <div className="p-10 text-center">Book not found!</div>;
    }

    const {
        bookName,
        author,
        // image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing,
    } = book;

    return (
        <div className="max-w-6xl mx-auto p-6 my-10 bg-white rounded-2xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Side: Book Image Container */}
                <div className="bg-gray-100 p-12 rounded-2xl flex items-center justify-center">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={450}
                        height={450}
                        className="h-112.5 object-contain drop-shadow-md rounded-md"
                    />
                </div>

                {/* Right Side: Book Details */}
                <div className="flex flex-col space-y-4">
                    <h1 className="text-4xl font-bold font-serif text-gray-900">
                        {bookName}
                    </h1>
                    <p className="text-gray-600 font-medium">By : {author}</p>

                    <div className="border-t border-b border-gray-200 py-3 text-gray-600 font-medium">
                        {category}
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        <span className="font-bold text-gray-900">Review : </span>
                        {review}
                    </p>

                    {/* Tags Section */}
                    <div className="flex items-center gap-3 py-2 border-b border-gray-200">
                        <span className="font-bold text-gray-900">Tag</span>
                        <div className="flex gap-2">
                            {tags?.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-green-50 text-green-500 font-medium px-3 py-1 rounded-full text-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Specs Table List */}
                    <div className="space-y-3 py-2 text-sm text-gray-600">
                        <div className="grid grid-cols-2 max-w-xs">
                            <span>Number of Pages:</span>
                            <span className="font-bold text-gray-900">{totalPages}</span>
                        </div>
                        <div className="grid grid-cols-2 max-w-xs">
                            <span>Publisher:</span>
                            <span className="font-bold text-gray-900">{publisher}</span>
                        </div>
                        <div className="grid grid-cols-2 max-w-xs">
                            <span>Year of Publishing:</span>
                            <span className="font-bold text-gray-900">{yearOfPublishing}</span>
                        </div>
                        <div className="grid grid-cols-2 max-w-xs">
                            <span>Rating:</span>
                            <span className="font-bold text-gray-900">{rating}</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                            <ReadButton book={book}></ReadButton>
                            <WishListButton book ={book}></WishListButton>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;