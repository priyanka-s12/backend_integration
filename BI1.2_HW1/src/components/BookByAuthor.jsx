import useFetch from '../useFetch';

const BookByAuthor = ({ author }) => {
  const { data, loading, error } = useFetch(
    `https://be-4-assignment1-chi.vercel.app/books/author/${author}`
  );
  // console.log(data);

  return data ? (
    <div>
      <h2>Books by {data.book.author}</h2>
      <ul>
        <li>{data.book.title}</li>
      </ul>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
};

export default BookByAuthor;
