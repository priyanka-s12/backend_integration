import useFetch from '../useFetch';

const Books = () => {
  const { data, loading, error } = useFetch(
    'https://99c3yk-3000.csb.app/books'
  );
  console.log(data);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {data?.error && <p>{data?.error}</p>}
      <ul>
        {data?.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Books;
