import React from 'react'
import { useContext } from 'react'
import DataContext from './context/DataContext'
import { Feed } from './Feed'

const Home = () => {
  const {searchResults, fetchError, isLoading} = useContext(DataContext);

  return (
    <main className='Home'>
      {isLoading ? (
          <p style={{ textAlign: "center", color: "black", marginTop: "60px", fontSize: "30px" }}>
            Posts Loading...
          </p>
        ) : fetchError ? (
          <p style={{ textAlign: "center", color: "red", marginTop: "20px" }}>
            {fetchError}
          </p>
        ) : searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p style={{ textAlign: "center", color: "red", marginTop: "20px" }}>
            No posts to display
    </p>
)}
       
    </main>
  )
}

export default Home