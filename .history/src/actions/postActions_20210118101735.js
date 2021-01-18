import { FETCH_POSTS, NEW_POSTS } from './types';

export function fetchPosts(){
    return function (dispatch){
            fetch("https://jsonplaceholder.typicode.com/posts")
              .then((res) => res.json())
              .then((data) => {
                this.setState({ posts: data });
              })
              .catch((error) => {
                console.log(error);
              });
    }
}