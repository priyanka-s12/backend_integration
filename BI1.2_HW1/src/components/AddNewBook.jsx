import { useState } from 'react';

const AddNewBook = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publishedYear: '',
    genre: '',
    language: '',
    country: '',
    rating: '',
    summary: '',
    coverImageUrl: '',
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === 'publishedYear' || name === 'rating' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        'https://be-4-assignment1-chi.vercel.app/books',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw 'Failed to add a book';
      }

      const data = response.json();
      console.log('Added book', data);
      setSuccessMessage(true);

      let emptyValues = {
        title: '',
        author: '',
        publishedYear: '',
        genre: '',
        language: '',
        country: '',
        rating: '',
        summary: '',
        coverImageUrl: '',
      };

      setFormData(emptyValues);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Add new book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputs}
        />
        <br />
        <br />
        <label htmlFor="author">Author</label>
        <br />
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleInputs}
        />
        <br />
        <br />
        <label htmlFor="publishedYear">Published Year</label>
        <br />
        <input
          type="number"
          id="publishedYear"
          name="publishedYear"
          value={formData.publishedYear}
          onChange={handleInputs}
        />
        <br />
        <br />
        <label htmlFor="genre">Gnere</label>
        <br />
        <input
          type="text"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleInputs}
        />
        <br />
        <br />
        <label htmlFor="language">Language</label>
        <br />
        <input
          type="text"
          id="language"
          name="language"
          value={formData.language}
          onChange={handleInputs}
        />
        <br />
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleInputs}
        />
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <br />
        <input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleInputs}
        />
        <br />
        <br />
        <label htmlFor="summary">Summary</label>
        <br />
        <input
          type="text"
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleInputs}
        />
        <br />
        <br />
        <label htmlFor="coverImageUrl">Cover Image URL</label>
        <br />
        <input
          type="text"
          id="coverImageUrl"
          name="coverImageUrl"
          value={formData.coverImageUrl}
          onChange={handleInputs}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {successMessage && <p>Date added successfully...!!!</p>}
    </div>
  );
};

export default AddNewBook;
