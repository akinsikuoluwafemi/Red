import { map } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchPosts from "../actions";

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
    console.log(state.posts);
     return {
       posts: state.posts,
     };
 }

export default connect(mapStateToProps, {})(Posts);