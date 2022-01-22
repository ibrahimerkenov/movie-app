import React from 'react'

function Search({ handleOnSubmit, handleOnChange, search }) {
  return (
    <form onSubmit={handleOnSubmit} className='search'>
      <input onChange={handleOnChange} className='search__input' type="search" value={search} placeholder='Enter movie name' />
    </form>
  )
}

export default Search;
