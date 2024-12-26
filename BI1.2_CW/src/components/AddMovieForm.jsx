import { useState } from 'react';

const AddMovieForm = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    releaseYear: '',
    genre: '',
    director: '',
    actors: '',
    language: '',
    country: '',
    rating: '',
    plot: '',
    awards: '',
    posterUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === 'releaseYear' || name === 'rating' ? parseInt(value) : value,
    }));
  };

  //   post data - fetch call
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://movies-bk-api.vercel.app/movies', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      //creating object as its formData, sending formData object to server

      //check if response is proper or not, such as status, boolean value ok, using boolean value ok
      if (!response.ok) {
        throw 'Failed to add movie';
      }

      const data = await response.json();
      console.log('Added movie', data);
      setSuccessMessage(true);

      let emptyValues = {
        title: '',
        releaseYear: '',
        genre: '',
        director: '',
        actors: '',
        language: '',
        country: '',
        rating: '',
        plot: '',
        awards: '',
        posterUrl: '',
      };

      setFormData(emptyValues);
  
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <br />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Release Year: </label>
        <br />
        <input
          type="number"
          name="releaseYear"
          value={formData.releaseYear}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="genre">Genre: </label>
        <br />
        <input
          type="text"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="director">Director: </label>
        <br />
        <input
          type="text"
          id="director"
          name="director"
          value={formData.director}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="actors">Actors: </label>
        <br />
        <input
          type="text"
          id="actors"
          name="actors"
          value={formData.actors}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="language">Language: </label>
        <br />
        <input
          type="text"
          id="language"
          name="language"
          value={formData.language}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="country">Country: </label>
        <br />
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="rating">Rating: </label>
        <br />
        <input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="plot">Plot: </label>
        <br />
        <input
          type="text"
          id="plot"
          name="plot"
          value={formData.plot}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="awards">Awards: </label>
        <br />
        <input
          type="text"
          id="awards"
          name="awards"
          value={formData.awards}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="posterUrl">Poster URL: </label>
        <br />
        <input
          type="text"
          id="posterUrl"
          name="posterUrl"
          value={formData.posterUrl}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
      {successMessage && <p>Date added successfully...!!!</p>}
    </div>
  );
};

export default AddMovieForm;
