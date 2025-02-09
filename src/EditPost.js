import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './context/DataContext'


const EditPost = ({}) => {
  const {editTitle, setEditTitle, editBody, setEditBody, handleEdit, posts} = useContext(DataContext);
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id);
  useEffect(() => {
    if(post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  },[post, setEditBody, setEditTitle]);
  return (
    <main className='NewPost'>
      {editTitle && 
        <>
          <h2>Edit Post</h2>
          <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
             <label htmlFor="editTitle">Title</label>
             <input type="text" name="postTitle" id="postTitle" value={editTitle} onChange={e => setEditTitle(e.target.value)} />
             <label htmlFor="editBody">Post :</label>
             <input type="text" name="postBody" id="postBody" value={editBody} onChange={e => setEditBody(e.target.value)} />
             <button onClick={() => handleEdit(post.id)}>Submit</button>
          </form>
        </>
      }
    </main>    
  )
}

export default EditPost
