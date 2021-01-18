import React, { Component } from 'react'

 class PostForm extends Component {
     state = {
         title: '',
         body: ''
   }
    
    render() {
        return (
          <div>
            <h1>Add Post</h1>
            <form>
              <div>
                <label>Title</label> <br/>
                        <input type="text" name="title" value={ this.state.title}/>
              </div>
                <div>
                <br/>
                <label>Body</label> <br/>
                <textarea name="body"  /> <br />
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        );
    }
}

export default PostForm