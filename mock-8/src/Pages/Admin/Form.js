import { useState } from "react";

const Form = ({ onAddMovie }) => {
  const [poster, setPoster] = useState("");
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [IMDBRating, setIMDBRating] = useState("");
  const [ticketCost, setTicketCost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      poster,
      title,
      director,
      year,
      genre,
      IMDBRating,
      ticketCost
    };

  
    const onAddMovie = (newMovie) => {
        fetch("https://odd-jade-cocoon-shoe.cyclic.app/movies", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMovie),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to add movie");
            }
            return response.json();
          })
          .then(() => {
            window.location.reload();
          })
          .catch((error) => {
            console.error(error);
          });
      };
      
      onAddMovie(newMovie)


    
    setPoster("");
    setTitle("");
    setDirector("");
    setYear("");
    setGenre("");
    setIMDBRating("");
    setTicketCost("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
       
       Poster Image :  <input
       style={{padding:"5px 5px", border:"1px solid black", marginBottom:"10px", borderRadius:"10px"}}
          type="text"
          id="poster"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          required
        />
      </div>
      <div>
       
      Movie Title :   <input
      style={{padding:"5px 5px", border:"1px solid black", marginBottom:"10px", borderRadius:"10px"}}
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
      Directer :   <input
      style={{padding:"5px 5px", border:"1px solid black", marginBottom:"10px", borderRadius:"10px"}}
          type="text"
          id="director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
        />
      </div>
      <div>
      Year :  <input
      style={{padding:"5px 5px", border:"1px solid black", marginBottom:"10px", borderRadius:"10px"}}
          type="number"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </div>
      <div>
     Genre :    <select id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
        </select>
      </div>
      <div>
     IMDB Rating :   <input
     style={{padding:"5px 5px", border:"1px solid black", marginBottom:"10px", borderRadius:"10px"}}
          type="number"
          id="IMDBRating"
          value={IMDBRating}
          onChange={(e) => setIMDBRating(e.target.value)}
          min="0"
          max="10"
          step="0.1"
          required
        />
      </div>
      <div>
     Ticket Price :   <input
     style={{padding:"5px 5px", border:"1px solid black", marginBottom:"10px", borderRadius:"10px"}}
          type="number"
          id="ticketCost"
          value={ticketCost}
          onChange={(e) => setTicketCost(e.target.value)}
          required
        />
      </div>
      <button style={{border:"1px solid red", padding:"5px 5px", borderRadius:"10px"}} type="submit">Create Show</button>
    </form>
  );
};

export default Form;
