import Header from "./header";
import BookCatalog from "./bookcatalog";
import Footer from "./footer";
import axios from "axios";

const initState = {
  books: [
    // Existing 10 books
    {
      id: 1,
      title: "مقدمة ابن خلدون",
      author: "ابن خلدون",
      isbn: "1289499030",
      publishedYear: 1377,
      genre: "History",
      language: "Arabic",
      pages: 480,
      publisher: "Dar Al-Kutub",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/80/Muqaddimah_Ibn_Khaldun_12.jpg",
      isDeleted: false,
    },
    {
      id: 2,
      title: "الحاوي في الطب",
      author: "ابو بكر الرازي",
      isbn: "893847239479",
      publishedYear: 925,
      genre: "Medicine",
      language: "Arabic",
      pages: 600,
      publisher: "Medical Press",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Kitab_al-Hawi_1.jpg",
      isDeleted: false,
    },
    {
      id: 3,
      title: "الكتاب المقدس",
      author: "Various Authors",
      isbn: "9780310436008",
      publishedYear: null, // Not applicable for ancient texts
      genre: "Religion",
      language: "Multiple",
      pages: 1500,
      publisher: "Bible Society",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Bible.malmesbury.arp.jpg/800px-Bible.malmesbury.arp.jpg",
      isDeleted: false,
    },
    {
      id: 4,
      title: "ألف ليلة وليلة",
      author: "Various Authors",
      isbn: "9780140442892",
      publishedYear: 800,
      genre: "Fiction",
      language: "Arabic",
      pages: 1200,
      publisher: "Penguin classNameics",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Arabian_Nights.jpg/800px-Arabian_Nights.jpg",
      isDeleted: false,
    },
    {
      id: 5,
      title: "الشعر الجاهلي",
      author: "طه حسين",
      isbn: "9789953446045",
      publishedYear: 1926,
      genre: "Literature",
      language: "Arabic",
      pages: 350,
      publisher: "Dar Al-Maaref",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Taha_Hussein.jpg/800px-Taha_Hussein.jpg",
      isDeleted: false,
    },
    {
      id: 6,
      title: "The Muqaddimah: An Introduction to History",
      author: "Ibn Khaldun",
      isbn: "9780691166826",
      publishedYear: 1377,
      genre: "History",
      language: "Arabic",
      pages: 512,
      publisher: "Princeton University Press",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Ibn_Khaldun_Muqaddimah.jpg",
      isDeleted: false,
    },
    {
      id: 7,
      title: "Canon of Medicine",
      author: "Avicenna",
      isbn: "9781599150055",
      publishedYear: 1025,
      genre: "Medicine",
      language: "Arabic",
      pages: 850,
      publisher: "Kazi Publications",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/Avicenna_Canon.jpg",
      isDeleted: false,
    },
    {
      id: 8,
      title: "القرآن الكريم",
      author: "Various",
      isbn: "9780192831934",
      publishedYear: 632,
      genre: "Religion",
      language: "Arabic",
      pages: 604,
      publisher: "Oxford University Press",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Quran_-_Tashkent_-_Uthman_Ibn_Affan_Mashaf_-_Katta_Langar.jpg/800px-Quran_-_Tashkent_-_Uthman_Ibn_Affan_Mashaf_-_Katta_Langar.jpg",
      isDeleted: false,
    },
    {
      id: 9,
      title: "The Arabian Nights: Tales of 1001 Nights",
      author: "Husain Haddawy",
      isbn: "9780393331660",
      publishedYear: 800,
      genre: "Fiction",
      language: "Arabic",
      pages: 400,
      publisher: "W.W. Norton & Company",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Arabian_Nights_illustration.jpg/800px-Arabian_Nights_illustration.jpg",
      isDeleted: false,
    },
    {
      id: 10,
      title: "ساق البامبو",
      author: "سعود السنعوسي",
      isbn: "9789992142716",
      publishedYear: 2012,
      genre: "Literature",
      language: "Arabic",
      pages: 396,
      publisher: "Arabic Scientific Publishers",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/fd/The_Bamboo_Stalk.jpg",
      isDeleted: false,
    },
    // New 15 books
    {
      id: 11,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      isbn: "9780141040349",
      publishedYear: 1813,
      genre: "Fiction",
      language: "English",
      pages: 432,
      publisher: "Penguin Books",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Title_page_of_Pride_and_Prejudice%2C_the_first_edition%2C_1813.jpg/800px-Title_page_of_Pride_and_Prejudice%2C_the_first_edition%2C_1813.jpg",
      isDeleted: false,
    },
    {
      id: 12,
      title: "Moby Dick",
      author: "Herman Melville",
      isbn: "9780142437246",
      publishedYear: 1851,
      genre: "Fiction",
      language: "English",
      pages: 720,
      publisher: "Penguin Books",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Moby-Dick_FE_title_page.jpg/800px-Moby-Dick_FE_title_page.jpg",
      isDeleted: false,
    },
    {
      id: 13,
      title: "1984",
      author: "George Orwell",
      isbn: "9780451524935",
      publishedYear: 1949,
      genre: "Dystopian",
      language: "English",
      pages: 328,
      publisher: "Signet Classics",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/1984first.jpg",
      isDeleted: false,
    },
    {
      id: 14,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "9780061120084",
      publishedYear: 1960,
      genre: "Fiction",
      language: "English",
      pages: 324,
      publisher: "J.B. Lippincott & Co.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/To_Kill_a_Mockingbird.JPG/800px-To_Kill_a_Mockingbird.JPG",
      isDeleted: false,
    },
    {
      id: 15,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "9780743273565",
      publishedYear: 1925,
      genre: "Fiction",
      language: "English",
      pages: 180,
      publisher: "Scribner",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/The_Great_Gatsby_%281st_ed._cover%29.jpg/800px-The_Great_Gatsby_%281st_ed._cover%29.jpg",
      isDeleted: false,
    },
    {
      id: 16,
      title: "War and Peace",
      author: "Leo Tolstoy",
      isbn: "9780143039990",
      publishedYear: 1869,
      genre: "Historical Fiction",
      language: "Russian",
      pages: 1296,
      publisher: "Penguin Books",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/War_and_Peace%2C_First_Edition%2C_1869.jpg/800px-War_and_Peace%2C_First_Edition%2C_1869.jpg",
      isDeleted: false,
    },
    {
      id: 17,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      isbn: "9780316769488",
      publishedYear: 1951,
      genre: "Fiction",
      language: "English",
      pages: 277,
      publisher: "Little, Brown and Company",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
      isDeleted: false,
    },
    {
      id: 18,
      title: "One Hundred Years of Solitude",
      author: "Gabriel Garcia Marquez",
      isbn: "9780060883287",
      publishedYear: 1967,
      genre: "Magic Realism",
      language: "Spanish",
      pages: 417,
      publisher: "Harper Perennial",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/Cien_a%C3%B1os_de_soledad_%28book%29.jpg",
      isDeleted: false,
    },
    {
      id: 19,
      title: "Brave New World",
      author: "Aldous Huxley",
      isbn: "9780060850524",
      publishedYear: 1932,
      genre: "Dystopian",
      language: "English",
      pages: 311,
      publisher: "Harper Perennial",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg",
      isDeleted: false,
    },
    {
      id: 20,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      isbn: "9780486415871",
      publishedYear: 1866,
      genre: "Philosophical Fiction",
      language: "Russian",
      pages: 671,
      publisher: "Penguin Books",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Crimeandpunishmentcover.png/800px-Crimeandpunishmentcover.png",
      isDeleted: false,
    },
    {
      id: 21,
      title: "Wuthering Heights",
      author: "Emily Brontë",
      isbn: "9780141439556",
      publishedYear: 1847,
      genre: "Gothic Fiction",
      language: "English",
      pages: 416,
      publisher: "Penguin Books",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Wuthering_Heights_1847.jpg/800px-Wuthering_Heights_1847.jpg",
      isDeleted: false,
    },
    {
      id: 22,
      title: "The Odyssey",
      author: "Homer",
      isbn: "9780140268867",
      publishedYear: -800,
      genre: "Epic",
      language: "Greek",
      pages: 541,
      publisher: "Penguin Books",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Odysseus_and_Polyphemus.jpg/800px-Odysseus_and_Polyphemus.jpg",
      isDeleted: false,
    },
    {
      id: 23,
      title: "The Divine Comedy",
      author: "Dante Alighieri",
      isbn: "9780142437222",
      publishedYear: 1320,
      genre: "Epic Poetry",
      language: "Italian",
      pages: 798,
      publisher: "Penguin Books",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Dante_Divine_Comedy.jpg/800px-Dante_Divine_Comedy.jpg",
      isDeleted: false,
    },
    {
      id: 24,
      title: "Great Expectations",
      author: "Charles Dickens",
      isbn: "9780141439563",
      publishedYear: 1861,
      genre: "Fiction",
      language: "English",
      pages: 505,
      publisher: "Penguin Books",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Greatexpectations_vol1.jpg/800px-Greatexpectations_vol1.jpg",
      isDeleted: false,
    },
    {
      id: 25,
      title: "The Brothers Karamazov",
      author: "Fyodor Dostoevsky",
      isbn: "9780374528379",
      publishedYear: 1880,
      genre: "Philosophical Fiction",
      language: "Russian",
      pages: 796,
      publisher: "Farrar, Straus and Giroux",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/The_Brothers_Karamazov.jpg/800px-The_Brothers_Karamazov.jpg",
      isDeleted: false,
    },
  ],
};



// async function postData() {
//   // Define the custom ID
//   const customId = 'Data';
  
//   try {
//     // Use the custom ID in the URL
//     const response = await axios.put(`https://booklibrary-a5b1e-default-rtdb.firebaseio.com/books.json`, initState.books);
//     console.log('Data posted successfully:', response.data);
//   } catch (error) {
//     console.error('Error posting data:', error);
//   }
// }
// postData();
function Home() {
  return (
    <>
      {sessionStorage.getItem("login") ? (
        <div
          id="alert-border-3"
          className="flex w-[80%] left-[50%] translate-x-[-50%] fixed top-4 z-[999] items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
          role="alert"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div className="ms-3 text-sm font-medium">
            {`Welcome ${JSON.parse(sessionStorage.getItem("data")).username}!`}
          </div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
            data-dismiss-target="#alert-border-3"
            aria-label="Close"
            onClick={() => {
              document.getElementById("alert-border-3").style.display = "none";
            }}
          >
            <span className="sr-only">Dismiss</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      ) : null}
      <Header />
      <BookCatalog />
      <Footer />
    </>
  );
}

export default Home;
