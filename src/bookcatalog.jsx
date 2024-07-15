import axios from "axios";
import {useState} from "react";
function BookCatalog() {
  const [books, setBooks] = useState([]);
  
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openAddMOdal, setOpenAddModal] = useState(false);
  const [editBookData, setEditBookData] = useState({});
  const [addBookData, setAddBookData] = useState({});
  const [deleteBookId, setDeleteBookId] = useState(0);
  const [allBooks, setAllBooks] = useState([]);
  const getData = async () => {
    try{
      const response = await axios.get(`https://books-22051-default-rtdb.firebaseio.com/books.json`);
            setAllBooks(response.data);
      const notDeleted = response.data.filter(el => el.deleted === false)
      setBooks(notDeleted);
    }
    catch(error){
      console.log(error);
    }
  }
  getData();


  const addBook = async () => {
    try{
      const response = await axios.put(`https://books-22051-default-rtdb.firebaseio.com/books/${allBooks.length}.json`, {id:allBooks.length+1, author : addBookData.authorName, isbn : addBookData.genre,  title : addBookData.bookName, deleted : false});
    }
    catch(error){
      console.log(error);
    }
  }
  const editBook = async id => {
    try{
      const response = await axios.patch(`https://books-22051-default-rtdb.firebaseio.com/books/${id}.json`, {author : editBookData.authorName, isbn : editBookData.genre,  title : editBookData.bookName, deleted : false});
    }
    catch(error){
      console.log(error);
    }
  }

  const deleteBook = async id => {
    try{
      const response = await axios.patch(`https://books-22051-default-rtdb.firebaseio.com/books/${id}.json`, {deleted : true});
    }
    catch(error){
      console.log(error);
    }
  }

  const restoreALlBooks = async () => {
    try{
      for(let i = 0; i < allBooks.length; i++){
      const response = await axios.patch(`https://books-22051-default-rtdb.firebaseio.com/books/${i}.json`, {deleted : false});
    }
  }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[85rem] mx-auto my-32 justify-center">
    <div id="crud-modal" tabIndex="-1" aria-hidden="true" className={`${openEditModal ? "block" : "hidden"} overflow-y-auto  overflow-x-hidden fixed top-0 left-0 right-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
    <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 sm:left-[120%] sm:top-20">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Edit Book
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal" onClick={() => setOpenEditModal(false)}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">title</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Book name" required="" onChange={(e) => setEditBookData({...editBookData, bookName: e.target.value})}/>
                    </div>
                    <div className="col-span-2">
                        <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author name</label>
                        <input type="text" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Author name" required="" onChange={(e) => setEditBookData({...editBookData, authorName: e.target.value})} />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">isbn</label>
                        <input type="text" name="price" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="isbn" required="" onChange={(e) => setEditBookData({...editBookData, genre: e.target.value})} />

                    </div>
                
                </div>
                <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => {editBook(editBookData.id); e.preventDefault(); setOpenEditModal(false)}}>
                    Confirm
                </button>
            </form>
        </div>
    </div>
</div>


<div id="popup-modal" tabIndex="-1" className={`${openDeleteModal ? "block" : "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
    <div className="relative top-[10%] left-[30%] p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal" onClick={() => setOpenDeleteModal(false)}>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
                <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this book?</h3>
                <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center" onClick={() => {deleteBook(deleteBookId); setOpenDeleteModal(false)}}>
                    Yes, I'm sure
                </button>
                <button data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => setOpenDeleteModal(false)}>No, cancel</button>
            </div>
        </div>
    </div>
</div>

<div id="crud-modal" tabIndex="-1" aria-hidden="true" className={`${openAddMOdal ? "block" : "hidden"} overflow-y-auto  overflow-x-hidden fixed top-0 left-0 right-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
    <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 sm:left-[120%] sm:top-20">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Add Book
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal" onClick={() => setOpenAddModal(false)}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Book name" required="" onChange={(e) => setAddBookData({...addBookData, bookName: e.target.value})}/>
                    </div>
                    <div className="col-span-2">
                        <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author name</label>
                        <input type="text" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Author name" required="" onChange={(e) => setAddBookData({...addBookData, authorName: e.target.value})} />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">isbn</label>
                        <input type="text" name="price" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="isbn" required="" onChange={(e) => setAddBookData({...addBookData, genre: e.target.value})} />

                    </div>
                  
                </div>
                <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => {addBook(allBooks.length); e.preventDefault(); setOpenAddModal(false)}}>
                    Confirm
                </button>
            </form>
        </div>
    </div>
</div>


    {books.map(el => {
      return(
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-96 hover:scale-105 transition-all duration-500">
      <h1 className="bg-red-500 text-white text-3xl font-bold p-4 rounded">
        {el.title}
      </h1>
      <div className="mt-4 text-lg ">
        <p>
          <span className="font-semibold">Author:</span> {el.author}
        </p>
        <p>
          <span className="font-semibold">title:</span> {el.title}
        </p>
        <p>
          <span className="font-semibold">isbn:</span> {el.isbn}
        </p>
      </div>
      <button className="bg-gray-600 text-white px-4 py-2 mt-4 rounded-md" onClick={() => {setOpenEditModal(true); setEditBookData({...editBookData, id:el.id - 1})}}>Edit</button>
      <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md ml-4" onClick={() => {setOpenDeleteModal(true); setDeleteBookId(el.id - 1)}}>Delete</button>
    </div>
      );
    })}
    <button className=" fixed right-3 bottom-56 z-50 bg-green-500 p-1 w-16 h-16  block text-white hover:bg-green-600 transition-all" onClick={() => setOpenAddModal(true)}>add</button>
    </div>
  );
}

export default BookCatalog;
