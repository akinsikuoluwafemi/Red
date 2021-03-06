import React, { Component } from 'react'

 class Posts extends Component {
       
     state = {
            posts: []
        }
     
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                this.setState({ posts: data });
                console.log(data)
            })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{ post.body}</p>
           </div>
       ))

        return (
            <div>
                {postItems}
            </div>
        )
    }
}

export default Posts