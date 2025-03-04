import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    //let's create the reaactive variables for the API calls
    const [posts, setPosts] = useState([]);

    const [post, setPost] = useState({
        id: 0,
        title: '',
        content: '',
        image: null,
        tags: []
    })

    //let's create the custom functions to associate the API calls 
    const getPosts = () => {
        axios.get('http://localhost:3000/posts').then((res) => setPosts(res.data));
    }

    const getPostById = (id) => {
        axios.get(`http://localhost:3000/posts/${id}`).then((res) => setPost(res.data));
    }

    const value = {
        posts,
        post,
        getPosts,
        getPostById
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };