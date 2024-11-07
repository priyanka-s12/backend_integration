import useFetch from '../useFetch';

const MovieByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `https://txqzgx-3000.csb.app/movies/${title}`
  );
  // console.log(data);

  return data ? (
    <div>
      <h2>{data.title}</h2>
      <p>Director: {data.director}</p>
      <p>Country: {data.country}</p>
      <p>Release Year: {data.releaseYear}</p>
      <p>Rating: {data.rating}</p>
      <p>Actors: {data.actors.join(', ')}</p>
      <p>Plot: {data.plot}</p>
      <img src={data.posterUrl} alt="poster image" />
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
};
export default MovieByTitle;
