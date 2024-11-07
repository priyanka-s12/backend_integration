import Books from './components/Books';
import BookByTitle from './components/BookByTitle';
import BookByAuthor from './components/BookByAuthor';
import AddNewBook from './components/AddNewBook';
export default function App() {
  return (
    <div>
      <AddNewBook />
      <Books />
      <BookByTitle bookTitle="Shoe Dog" />
      <BookByAuthor author="Harper Lee" />
    </div>
  );
}
