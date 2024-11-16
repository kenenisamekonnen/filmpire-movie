import React, { useContext, useState } from 'react'
import image from '../assets/react.svg';
import serchIcon from '../assets/search_icon.png';
import formIcon from '../assets/user.png';
import  { SearchContext } from './SearchProvider';
import { NavLink } from 'react-router-dom';

const SearchBar = () => {

    const [inputTitle, setInputTitle] = useState('');
    const {searchTerm,handleSearchChange,setSearchTerm} = useContext(SearchContext);

    const handleInputChange = (e) =>{
      setInputTitle(e.target.value);
    }
    const handleSearchClick = () =>{
        setSearchTerm(searchTerm);
    }
    console.log( "setSearchTerm: ",  setSearchTerm);
  return (
    <div className='search-bar'>
        <img
          src={image} 
          alt="light-dark-image"
        />
        <div className="serch-find">
            <img 
              src={serchIcon} 
              alt="serch-icon" 
              width={25} 
              onClick={handleSearchClick}
            />
            <input 
              type="text"
              value={searchTerm}
              placeholder='search in filmpire'
              onChange={handleSearchChange}
            />
        </div>
        <div className="login-signup">
            <div className='login'>
              <NavLink to={'/login'}><button>LOGIN</button></NavLink>
              <NavLink to={'/login'}><img src={formIcon} alt="fotm-icon" width={30} /></NavLink>
            </div>
            <div className="signup">
            <NavLink to={'/signup'}><button>SIGN UP</button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default SearchBar