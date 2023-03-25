// Dashboard.js

import { useState, useEffect } from 'react';
import Form from './Form';
import { Modal } from '@chakra-ui/react';
import Modals from './Modals';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate()

    let token = localStorage.getItem("token")
    if(!token){
        navigate("/login")
    }
  const [movies, setMovies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    poster: '',
    title: '',
    director: '',
    year: '',
    genre: '',
    imdbRating: '',
    ticketCost: ''
  });

  useEffect(() => {
    fetch('https://odd-jade-cocoon-shoe.cyclic.app/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.log(error));
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch('https://odd-jade-cocoon-shoe.cyclic.app/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        setMovies([...movies, data]);
        setFormData({
          poster: '',
          title: '',
          director: '',
          year: '',
          genre: '',
          imdbRating: '',
          ticketCost: ''
        });
        setShowForm(false);
      })
      .catch(error => console.log(error));
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleEditClick = (id) => {
    // <Modals isOpen={true}/>
    console.log(id)
  };

  const handleDeleteClick = (id) => {
    fetch(`https://odd-jade-cocoon-shoe.cyclic.app/movies/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const update = movies.filter((movie) => movie.id !== id);
        setMovies(update);
      })
      .catch((error) => {
        console.error('Error deleting movie: ', error);
      });
  };
  

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => setShowForm(!showForm)}>Add Movie/Show</button>
      {showForm && (
        <Form
          formData={formData}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
      )}
      <table style={{marginTop:"20px",marginLeft:"200px"}}>
        <thead style={{marginLeft:"20px"}}>
          <tr style={{border:"2px solid black" , gap:"20px"}}>
            <th style={{marginLeft:"10px"}}>Id</th>
            <th style={{marginLeft:"10px"}}>Title</th>
            <th style={{marginLeft:"10px"}}>Director</th>
            <th style={{marginLeft:"10px"}}>Year</th>
            <th style={{marginLeft:"10px"}}>Genre</th>
            <th style={{marginLeft:"10px"}}>IMDB Rating</th>
            <th style={{marginLeft:"30px"}}>Edit</th>
            <th style={{marginLeft:"10px"}}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.director}</td>
              <td>{movie.year}</td>
              <td>{movie.genre}</td>
              <td>{movie.IMDB_Rating}</td>
              <td><button onClick={() => handleEditClick(movie.id)}>Edit</button></td>
              <td><button onClick={() => handleDeleteClick(movie.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
