import React, { Component } from 'react'

 class Posts extends Component {
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res =>)
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