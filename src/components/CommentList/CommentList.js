import React from 'react'
import Comment from '../Comment';

import './CommentList.scss';

export default class CommentList extends React.Component {

    render() {
        return (
            <div className="comments-main">
                <h3>Comments</h3>
                <div className="comments">
                    {
                        this.props.messages.map((message, index) => (
                            <Comment
                                key={index}
                                index={index}
                                message={message}
                                {...this.props} />
                        ))
                    }
                </div>
            </div>
        )
    }
}
