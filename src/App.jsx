import { useEffect, useState } from 'react'
import './App.css'
import { collection, getDocs } from 'firebase/firestore';
import SearchBar from './components/SearchBar';
import BookCard from './components/BookCard';
import { db } from '../utils/firebaseConfig';

function App() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      let bookCollection = [];
      const querySnapshot = await getDocs(collection(db, "Books"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
      setBooks(querySnapshot.docs.map(doc => doc.data()));
    };
    fetchBooks();
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="">
        <p>Hello</p>Hello
        {console.log('Books',books)}
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="grid grid-cols-1 gap-4 mt-4">
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App
