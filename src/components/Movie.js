import React from 'react'

const Movie = ({ title, overview, poster_path, vote_average }) => {

  const imageApi = `${poster_path ? `https://image.tmdb.org/t/p/w1280${poster_path}` : 'https://moscowlegalcenter.ru/wp-content/themes/dt-armada/images/noimage.jpg'}`;

  const getClassAverage = (average) => {
    if(average >= 8) {
      return 'movies-card__vote-average--green';
    } else if (average >= 6) {
      return 'movies-card__vote-average--orange';
    } else {
      return 'movies-card__vote-average--red';
    }
  }

  return (
    <li className='movies__card movies-card smoothAppearance'>
      <img className='movies-card__img' src={imageApi} alt={title}/>
      <div className='movies-card__title'>
        <h3 className='movies-card__text'>{title}</h3>
        <span className={`movies-card__vote-average ${getClassAverage(vote_average)}`}>{vote_average}</span>
      </div>
      <div className='movies-card__overview'>
        <h4>Overview:</h4>
        <p>{overview}</p>
      </div>
    </li>
  )
}

export default Movie;
