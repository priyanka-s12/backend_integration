import useFetch from '../useFetch';

const BookByTitle = ({ bookTitle }) => {
  const { data, loading, error } = useFetch(
    `https://be-4-assignment1-chi.vercel.app/books/${bookTitle}`
  );
  //   console.log(data);

  return data ? (
    <div>
      <h2>{data.book.title}</h2>
      <p>
        <strong>Author: </strong>
        {data.book.author}
      </p>
      <p>
        <strong>Release Year: </strong>
        {data.book.publishedYear}
      </p>
      <p>
        <strong>Genre: </strong>
        {data.book.genre.join(', ')}
      </p>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
};

export default BookByTitle;
