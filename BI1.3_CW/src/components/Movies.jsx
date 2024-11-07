import { useState } from 'react';
import useFetch from '../useFetch';
const Movies = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const { data, loading, error } = useFetch(
    'https://txqzgx-3000.csb.app/movies'
  );
  console.log(data);
  const handleDelete = async (movieId) => {
    try {
      const response = await fetch(
        `https://txqzgx-3000.csb.app/movies/${movieId}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw 'Failed to delete movie.';
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage('Movie deleted successfully');
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* {loading && <p>Loading...</p>} */}
      {/* {data?.error && <p>{data?.error}</p>} */}
      {/* optional chaining - if data is present then run method map on it */}
      <ul>
        {data?.map((movie) => (
          <li key={movie._id}>
            {movie.title}{' '}
            <button onClick={() => handleDelete(movie._id)}>Delete</button>
          </li>
        ))}
      </ul>
      {successMessage}
    </div>
  );
};
export default Movies;
