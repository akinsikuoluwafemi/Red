import React, { Component } from 'react'

 class Posts extends Component {
       
     state = {
            posts: []
        }
     
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({posts: data}));
    }
    render() {
        const postItems = state.posts.map(post => (
            <div>
                
           </div>
       ))

        return (
            <div>
                Posts
            </div>
        )
    }
}

export default Posts