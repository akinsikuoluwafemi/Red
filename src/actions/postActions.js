import { FETCH_POSTS, NEW_POSTS } from './types';

export const fetchPosts = () => dispatch => {
            fetch("https://jsonplaceholder.typicode.com/posts")
              .then((res) => res.json())
              .then((posts) => {
                dispatch({type: FETCH_POSTS, payload: posts} )
              })
              .catch((error) => {
                console.log(error);
              });
}

export const createPost = (postData)=> dispatch => {
       
         fetch(`https://jsonplaceholder.typicode.com/posts`, {
           method: "POST",
           headers: {
             "content-type": "application/json",
           },
           body: JSON.stringify(postData),
         })
           .then((res) => res.json())
           .then((data) => {
               dispatch({type: NEW_POSTS, payload: data})
           })
           .catch((error) => {
             console.log(error);
           });
}