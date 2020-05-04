import React from 'react';

import CommentList from './components/CommentList';
import CommentBox from './components/CommentBox/CommentBox';
import './App.scss';

class App extends React.Component {

  state = {
    messages: [
      "React is so popular nowdays!",
      "I love creating components.",
      "It makes frontend so easily"
    ]
  }

  onAddComment = (message) => {
    this.setState(prevState => {
      let messages = prevState.messages.concat();
      messages.push(message);
      return {
        messages: messages
      }
    })
  }

  onDeleteComment = (index) => {
    this.setState(prevState => {
      let messages = prevState.messages.concat();
      messages.splice(index, 1)
      return {
        messages: messages
      }
    })
  }

  render() {
    return (
      <div className="page-wrapper">
        <div className="content">
          <CommentList onDeleteComment={this.onDeleteComment} messages={this.state.messages} />
          <CommentBox onAddComment={this.onAddComment} />
        </div>
      </div>
    );
  }
}

export default App;
