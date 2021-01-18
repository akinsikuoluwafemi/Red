import React, { Component } from 'react'

 class PostForm extends Component {
     state = {
       
   }
   
    render() {
        return (
          <div>
            <h1>Add Post</h1>
            <form>
              <div>
                <label>Title</label>
                <input type="text" name="title"/>
              </div>
              <div>
                <label>Body</label> <
                <textarea name="body"/>
              </div>
            </form>
          </div>
        );
    }
}

export default PostForm