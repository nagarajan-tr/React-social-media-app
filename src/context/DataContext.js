import { createContext, useEffect, useState, use } from "react";
import Post from '../Post';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import PostLayout from '../PostLayout';
import { format, set } from 'date-fns';
import { Navigate } from 'react-router-dom';
import  api from '../Api/Posts';
import EditPost from '../EditPost';
import useWindowSize from '../hooks/useWindowSize';  
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({children}) => {

    
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const navigate = useNavigate();
  const {width} = useWindowSize();
  // const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');
  const {data, fetchError, isLoading} = useAxiosFetch('https://e29c-115-97-253-94.ngrok-free.app/posts');

  useEffect(() => {
    setPosts(data);
  },[data]);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (error) {
        if(error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error: ${error.message}`);
        } 
      }
    }

    fetchPosts();
  },[]);

  useEffect(() => {
    const filterResult = posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()) || 
    post.body.toLowerCase().includes(search.toLowerCase()));
    setSearchResults(filterResult.reverse());
  }, [search, posts]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id+1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title: postTitle, datetime, body: postBody};
    try {
      const response = await api.post('/posts', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      navigate('/'); 
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    
    try {
        // const numericId = Number(id);
        // console.log(`/posts/${numericId}`);
        
        const response = await api.put(`/posts/${id}`, updatedPost);
        
        // Check if response data is what you expect
        setPosts(posts.map((post) => post.id === id ? { ...response.data } : post));
        setEditTitle('');
        setEditBody('');
        navigate('/');
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

const handleDelete = async (id) => {
    try {

        await api.delete(`/posts/${id}`);
        
        const postlist = posts.filter((post) => post.id !== id);
        setPosts(postlist);
        navigate('/');
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};


    return (
        <DataContext.Provider value = {{ 
            width, 
            search, setSearch,
            searchResults, fetchError, isLoading, 
            handlesubmit, postTitle, setPostTitle, postBody, setPostBody,
            editTitle, setEditTitle, editBody, setEditBody, handleEdit, posts,
            handleDelete

        }}>
            {children}
        </DataContext.Provider>
    
    )
}

export default DataContext;

