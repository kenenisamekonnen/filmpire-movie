import React, { createContext, useState } from 'react'

export const SearchContext = createContext();

const SearchProvider = ({children}) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => setSearchTerm(e.target.value);
  return (
    <SearchContext.Provider value={{searchTerm, setSearchTerm, handleSearchChange}}>
      <div className='search-movie-bar'>
        {children}
      </div>
    </SearchContext.Provider>
  )
}

export default SearchProvider