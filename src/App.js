import React, { useState, useEffect } from 'react';
import './App.sass';
import Loader from './components/Loader';
import Notfound from './components/Notfound';
import MoviesList from './components/MoviesList';
import Search from './components/Search';


const App = () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [prevSearch, setPrevSearch] = useState('');
  const [loader, setLoader] = useState(true);

  const apiKey = "c366f6e08f15726c78805ed2075d4d2e";

  const api = {
    popularity: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=1`,
    search: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`,
  }

  const getMovies = (data) => {
    fetch(data)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error
        }
      })
      .then(response => response.json())
      .then(moviesData => {
        setMovies(moviesData.results)
        setLoader(false)
      })
      .catch(e => {
        console.log('Error: ' + e.message);
        console.log(e.response);
        setLoader(false)
      });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (search && search.toLowerCase() !== prevSearch.toLowerCase()) {
      setLoader(true)
      getMovies(api.search + search)
      setSearch('')
      setPrevSearch(search)
    }
  }

  const handleOnChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    getMovies(api.popularity)
  }, [])

  return (
    <div className="main">
      <header className='main__header'>
        <Search handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} search={search} />
      </header>
      <main className='main__movies'>
        {
          loader
            ?
            <Loader />
            :
            (
              movies.length === 0
                ?
                <Notfound />
                :
                <MoviesList movies={movies} />
            )
        }
      </main>
    </div>
  );
}

export default App;
