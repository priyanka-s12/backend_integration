import Books from './components/Books';
import BookByTitle from './components/BookByTitle';
import BookByAuthor from './components/BookByAuthor';
export default function App() {
  return (
    <div>
      <h2>All Books</h2>
      <Books />
      <BookByTitle bookTitle="Shoe Dog" />
      <BookByAuthor author="Harper Lee" />
    </div>
  );
}
