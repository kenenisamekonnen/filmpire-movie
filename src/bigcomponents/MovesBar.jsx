
import { useContext, useEffect, useState } from 'react';
import Movie from '../componenets/Movie';
import { SearchContext } from './SearchProvider';

const MOVIE_API_URL = 'http://omdbapi.com?apikey=28d79d9b';

const MovesBar = () => {

  const { searchTerm } = useContext(SearchContext);
  const [movies, setMovies] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState(null);


  // const fetchMovies = async (title) => {
  //   // if (!searchTerm) return; // Exit if search term is empty
    
  //   //const query = searchTerm || 'popular';

  //   const apiUrl = searchTerm
  //     ? `https://www.omdbapi.com/?s=${title}&apikey=28d79d9b`
  //     : `https://www.omdbapi.com/?t=popular&apikey=28d79d9b`;
  //   setLoading(true); // Set loading state before fetching
  //   setError(null);    // Reset error state before fetching

  //   try {
  //     const response = await fetch(apiUrl);
      
  //     // Check if the response is ok (status 200)
  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.status}`);
  //     }
      
  //     const data = await response.json();
  //     console.log(data);
      
  //     if (data.Response === 'False') {
  //       throw new Error(data.Error);
  //     }
      
  //     setMovies(data.Search || []); // Update movies state
  //     console.log(data.Search);
  //   } catch (err) {
  //     setError(err.message); // Set error message in state
  //   } finally {
  //     setLoading(false); // Reset loading state after fetching
  //   }
  //   console.log(searchTerm);
  // };

  
  useEffect(() => {

    const fetchMovies = async () => {
      // if (!searchTerm) return; // Exit if search term is empty
      
      const query = searchTerm || 'popular';
  
      const apiUrl = searchTerm
        ? `https://www.omdbapi.com/?s=${query}&apikey=28d79d9b`
        : `https://www.omdbapi.com/?t=superman&apikey=28d79d9b`;


      setLoading(true); // Set loading state before fetching
      setError(null);    // Reset error state before fetching
  
      try {
        const response = await fetch(apiUrl);
        
        // Check if the response is ok (status 200)
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);
        
        if (data.Response === 'False') {
          throw new Error(data.Error);
        }
        
        setMovies(data.Search || []); // Update movies state
        console.log(data.Search);
      } catch (err) {
        setError(err.message); // Set error message in state
      } finally {
        setLoading(false); // Reset loading state after fetching
      }
      console.log(searchTerm);
    };


    if(searchTerm){
        fetchMovies(searchTerm);
    }
    console.log(searchTerm);
  }, [searchTerm]);

  

  return (
    <div>
      {loading && <p>Loading movies....</p>}
      {/* {error &&<p>{error}</p>} */}
      {
        movies.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => (
              <div className='movie' key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "path/to/placeholder.jpg"}
                alt={movie.Title}
                // style={{ width: '200px' }}
              />
              {/* <div>
                <span>type: {movie.type}</span>
                <h3> year: {movie.year}</h3>
              </div> */}
            </div>
            )
              // <div key={movie.imdbID}>
              // <Movie movie={movie}/>
              // </div>
              /* // <div key={movie.imdbID}>{movie.title} </div> */
            )}
          </div>
        ) : (
          !loading && !error &&
          <div className="empty">
            <div>
              <h2>MOVIE NOT FOUND</h2>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default MovesBar