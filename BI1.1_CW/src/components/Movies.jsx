import useFetch from '../useFetch';
const Movies = () => {
  const { data, loading, error } = useFetch(
    'https://movies-bk-api.vercel.app/movies'
  );
  console.log(data);

  return (
    <div>
      {/* {loading && <p>Loading...</p>}
      {data?.error && <p>{data?.error}</p>} */}
      {/* optional chaining - if data is present then run method map on it */}
      <ul>
        {data?.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Movies;
