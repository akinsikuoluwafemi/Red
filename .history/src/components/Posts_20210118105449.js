import React, { Component } from 'react';
import { connect } from 'react-redux';

 class Posts extends Component {
       
     state = {
            posts: []
        }
     
    componentDidMount() {
    
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

 const mapStateToProps = (state) => {
     
 }

export default connect()(Posts);