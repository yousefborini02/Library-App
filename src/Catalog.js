
import React, {  useState } from 'react';
import axios from 'axios';

function Catalog() {
    const [books, setBooks] = useState([]);
    
    axios.get("https://orangecoding-test-default-rtdb.europe-west1.firebasedatabase.app/books.json")
        .then((response) => setBooks(response.data.filter(el => el.deleted === false)))
        .catch((err) => console.log(err));

    async function addBook() {
        const title = prompt("title");
        const author = prompt("author");
        const isbn=prompt("ispn");
        await axios.put(`https://orangecoding-test-default-rtdb.europe-west1.firebasedatabase.app/books/${books.length}.json`, {
          title: title,
          author:author,
          id: books.length + 1,
          deleted: false,
          isbn:isbn,
        });
      }
    
    async function deleteBook(id){
        const confirm=window.confirm("Are you sure to delete this book ? ");
        if(confirm)
        await axios.patch(`https://orangecoding-test-default-rtdb.europe-west1.firebasedatabase.app/books/${id}.json`, {
            deleted : true
        })
    }

    async function editBook(id)
    {
        const title = prompt("title");
        const author = prompt("author");
        const isbn=prompt("isbn");
        await axios.put(`https://orangecoding-test-default-rtdb.europe-west1.firebasedatabase.app/books/${id}.json`,{
            title: title,
            author:author,
            deleted: false,
            isbn:isbn,
        })
    }

    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold">Book List</h1>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={addBook}
                >
                    Add Book
                </button>
            </div>
            <div className="flex flex-wrap justify-center">
                {books.map((book, index) => (
                    <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg m-4">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{book.title}</div>
                            <p className="text-gray-700 text-base mb-2">Author: {book.author}</p>
                            <p className="text-gray-700 text-base mb-2">ISBN: {book.isbn}</p>
                            <button   className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => deleteBook(book.id - 1)}>Delete</button>
                            <button   className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => editBook(book.id - 1)}>Edit</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalog;