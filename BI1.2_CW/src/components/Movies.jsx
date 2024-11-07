import useFetch from '../useFetch';
const Movies = () => {
  const { data, loading, error } = useFetch(
    'https://txqzgx-3000.csb.app/movies'
  );
  // console.log(data);

  return (
    <div>
      {/* {loading && <p>Loading...</p>}
      {data?.error && <p>{data?.error}</p>} */}
      {/* optional chaining - if data is present then run method map on it */}
      <ul>
        {data?.map((movie) => (
          <li key={movie._id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Movies;
