import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const NewPost = ({}) => {
  const {handlesubmit, postTitle, setPostTitle, postBody, setPostBody} = useContext(DataContext);
  return (
    <main className='NewPost'>
        <h2>New Post</h2>
        <form className='newPostForm' onSubmit={handlesubmit}>
          <label htmlFor="postTitle">Title</label>
          <input type="text" name="postTitle" id="postTitle" required value={postTitle} onChange={(e) => setPostTitle(e.target.value)}/>
          <label htmlFor="postBody">Post :</label>
          <input type="text" name="postBody" id="postBody" required value={postBody} onChange={(e) => setPostBody(e.target.value)} />
          <button type="submit">Submit</button> 
        </form>
    </main>
  )
}

export default NewPost