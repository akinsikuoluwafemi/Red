import { FETCH_POSTS, NEW_POSTS } from './types';

export function fetchPosts() => (dispatch)
            fetch("https://jsonplaceholder.typicode.com/posts")
              .then((res) => res.json())
              .then((posts) => {
                dispatch({type: FETCH_POSTS, payload: posts} )
              })
              .catch((error) => {
                console.log(error);
              });
    }
}