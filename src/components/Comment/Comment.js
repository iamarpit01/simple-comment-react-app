import React from 'react';
import './Comment.scss';

export default class Comment extends React.Component {

    onDeleteComment = () => {
        this.props.onDeleteComment(this.props.index)
    }

    render() {
        return (
            <div key={this.props.message} className="comment">
                <div className="comment__details">
                    <div><img src="" /></div>
                    <div>{this.props.message}</div>
                </div>
                <div><button onClick={this.onDeleteComment} type="button">Delete</button></div>
            </div>
        )
    }
}