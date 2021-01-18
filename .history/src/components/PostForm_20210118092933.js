import React, { Component } from 'react'

 class PostForm extends Component {
     constructor(props){
         super(props);
        this.state = {
          title: "",
          body: "",
        };
         this.onChange = this.onChange.bind(this);
     }

     onChange(e) {
         this.setState({[]})
     }
  
    
    render() {
        
        return (
          <div>
            <h1>Add Post</h1>
            <form>
              <div>
                <label>Title</label> <br />
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <br />
                <label>Body</label> <br />
                <textarea
                  name="body"
                  value={this.state.body}
                  onChange={this.onChange}
                />{" "}
                <br />
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        );
    }
}

export default PostForm