import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../actions/postActions";



 class Posts extends Component {
       componentDidMount() {
           this.props.fetchPosts()
       }
       
    
   
    render() {
          const postItems = this.props.posts.items.map(post => (
              <div key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{ post.body}</p>
             </div>
         ))
      console.log(this.props.posts.items);
      return <div>{ {postItems} }</div>;
    }
 }

 const mapStateToProps = (state) => {
     return {
       posts: state.posts,
     };
 }

export default connect(mapStateToProps, {fetchPosts})(Posts);