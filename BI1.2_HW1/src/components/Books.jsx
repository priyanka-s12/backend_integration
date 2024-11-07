import useFetch from '../useFetch';

const Books = () => {
  const { data, loading, error } = useFetch(
    'https://99c3yk-3000.csb.app/books'
  );
  //   console.log(data);

  return (
    <div>
      <h2>All Books</h2>
      <ul>
        {data?.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Books;
