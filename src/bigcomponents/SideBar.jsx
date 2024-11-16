import React from 'react'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='logo'>
        <h2>FILMPIRE</h2>
      </div>
      <br />
      <div className='side-bar'>
        <div className="side-bar-catagories">
          <h4>Catagories</h4>
          <ul>
            <li>Popular</li>
            <li>Top Rated</li>
            <li>Upcaming</li>
          </ul>
        </div>
        <br />
        <div className="side-bar-genres">
          <h4>Genres</h4>
          <ul>
            <li>Action</li>
            <li>Adivanture</li>
            <li>Animation</li>
            <li>Comedy</li>
            <li>Crime</li>
            <li>Documentary</li>
            <li>Drama</li>
            <li>Family</li>
            <li>fantasy</li>
            <li>History</li>
            <li>Horror</li>
            <li>Music</li>
            <li>Mystery</li>
            <li>Romance</li>
            <li>Science Fiction</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar