import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { handleSearch, query } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()} >
      <h2>search hacker news</h2>
      <input 
        type="text" 
        value={query} 
        className="form-input" 
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchForm
