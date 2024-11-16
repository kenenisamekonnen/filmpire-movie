import React from 'react'
import SideBar from './bigcomponents/SideBar'
import SearchBar from './bigcomponents/SearchBar'
import MovesBar from './bigcomponents/MovesBar'
import SearchProvider from './bigcomponents/SearchProvider'
import { Outlet } from 'react-router-dom'

const FullWeb = () => {
  return (
    <div className='fullweb'>
        <div className="side-bar">
            <SideBar />
        </div>
        <SearchProvider>
              <SearchBar  />
              <MovesBar />
        </SearchProvider>
    </div>
  )
}

export default FullWeb