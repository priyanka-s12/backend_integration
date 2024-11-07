import { useState } from 'react';
import useFetch from '../useFetch';

const Books = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const { data, loading, error } = useFetch(
    'https://99c3yk-3000.csb.app/books'
  );
  //   console.log(data);

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(
        `https://99c3yk-3000.csb.app/books/deletebook/${bookId}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw 'Failed to delete book';
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage('Book deleted successfully');
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>All Books</h2>
      <ul>
        {data?.map((book) => (
          <li key={book._id}>
            {book.title}{' '}
            <button onClick={() => handleDelete(book._id)}>Delete</button>
          </li>
        ))}
      </ul>
      {successMessage}
    </div>
  );
};
export default Books;
