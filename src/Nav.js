import React from 'react'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'
import { useContext } from 'react'

const Nav = ({}) => {
  const {search, setSearch} = useContext(DataContext);
  return (
    <nav className="Nav">
        <form action="" className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search Posts</label>
            <input type="text" name="search"
            value={search} placeholder="Search Posts" id="search" 
            onChange={(e) => setSearch(e.target.value)} />
        </form>
        <ul>
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/post">Post</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </nav>
  )
}

export default Nav