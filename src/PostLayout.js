import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <>
        <Link to="1">Post 1</Link><br/>
        <Link to="2">Post 2</Link><br/>
        <Link to="3">Post 3</Link><br/>
        <Link to="newpost">New Post</Link> 
        <Outlet />
    </>
  )
}

export default PostLayout
