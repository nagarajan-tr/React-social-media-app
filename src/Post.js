import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
    
  return (
    <article className='post'>
      <Link to={`post/${post.id}`} className='postLink'>
        <h1 className='postTitle'>{post.title}</h1>
        <p className='postDate'>{post.datetime}</p>
        <p className='postBody'>
          {post.body.length <=25 ? post.body : `${post.body.slice(0,25)}...`} 
        </p>
      </Link>
    </article>
  )
}

export default Post
