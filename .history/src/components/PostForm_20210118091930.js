import React, { Component } from 'react'

 class PostForm extends Component {
     state = {
       title
   }
   
    render() {
        return (
          <div>
            <h1>Add Post</h1>
            <form>
              <div>
                <label>Title</label> <br/>
                <input type="text" name="title"/>
              </div>
                <div>
                <br/>
                <label>Body</label> <br/>
                <textarea name="body" /> <br />
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        );
    }
}

export default PostForm