import React from 'react';
import Movie from '../components/Movie';

function MoviesList({ movies }) {
  return (
    <ul className='movies'>
      { 
        movies.map(movie => <Movie key={movie.id} {...movie} />)
      }
    </ul>
  )
}

export default MoviesList;
