import React from 'react';

import './CommentBox.scss';

export default class CommentBox extends React.Component {

    constructor(props) {
        super(props);

        this.messageInputRef = React.createRef();
    }

    addComment = () => {
        this.props.onAddComment(this.messageInputRef.current.value)
        this.messageInputRef.current.value = "";
    }

    render() {
        return (
            <div className="comment-box">
                <h3>Post A Comment</h3>
                <div>
                    <textarea ref={this.messageInputRef} rows="6"></textarea>
                </div>
                <div>
                    <button
                        type="button"
                        onClick={this.addComment}>
                        Post
                </button>
                </div>
            </div>
        )
    }
}
