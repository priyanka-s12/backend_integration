import Movies from './components/Movies';
import MovieByTitle from './components/MovieByTitle';
import AddMovieForm from './components/AddMovieForm';
function App() {
  // BE4.4CW
  return (
    <main>
      <AddMovieForm />
      <Movies />
      <MovieByTitle title="Gully Boy" />
    </main>
  );
}

export default App;
