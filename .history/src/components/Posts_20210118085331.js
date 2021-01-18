import React, { Component } from 'react'

 class Posts extends Component {
    constructor(props){
        super(props);
        state = {
            posts: []
        }
    }
     
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState(state.posts));
    }
    render() {
        return (
            <div>
                Posts
            </div>
        )
    }
}

export default Posts