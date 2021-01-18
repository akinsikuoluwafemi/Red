import React, { Component } from 'react'

 class Posts extends Component {
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(da => da.json())
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