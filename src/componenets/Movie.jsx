import React, { useEffect, useState } from 'react'


const Movie = ({movie}) => {
  return (
    <div className='movie'>
        <div>
          title: {movie.title}
        </div>
        <div><p>plot: {movie.plot}</p></div>
        <div>
            <img src={movie.poster !== 'N/A' ? movie.poster : 'https://via.placeholder.com/400'} alt={movie.title} />
        </div>
        <div>
            <span>type: {movie.type}</span>
            <h3> year: {movie.year}</h3>
        </div>
    </div>
  )
}

export default Movie



// const fetchMovie = async () = {
//     if(!searchTerm) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const respose = await fetch(`http://omdbapi.com?s=${searchTerm}&apikey=28d79d9b`);

//       if(!respose.ok){
//         throw new Error(`Error: ${respose.status}`);
//       }

//       const data = respose.json();

//       if(data.respose === 'False'){
//         throw new Error (data.Error);
//       }

//       setMovies(data.search || []);
//     } catch(err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }