import React, { Component } from 'react'

 class Posts extends Component {
    constructor(props){
        super(props);
        thstate = {
            posts: []
        }
    }
     
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({posts: data}));
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