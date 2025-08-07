import { useEffect, useState } from 'react';
import "../Styles/Movie.css";
import { FcSearch } from "react-icons/fc";

const Movie = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON"
    )
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const filteredData = data.filter(item =>
    item.Title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {/* Search Bar */}
      <div className="search-container">
        <input 
          type="text"
          placeholder="Search for a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <FcSearch size={24} />
      </div>

      {/* Movie Grid */}
      <div className="movie-grid">
        {filteredData.map((item, index) => (
          <div key={index} className="movie-card">
            <img 
              src={item.Images} 
              alt={`${item.Title} Poster`} 
              className="poster-image"
            />
            <h2>{item.Title}</h2>
            <p><strong>Released:</strong> {item.Released}</p>
            <p><strong>Genre:</strong> {item.Genre}</p>
            <p><strong>Director:</strong> {item.Director}</p>
            <p><strong>Language:</strong> {item.Language}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
