import React from 'react';

const Post = (props) => {
    return(
        <div className="post">
            <div className="img-thumbnail">
                <img src="http://placeimg.com/200/150/people" alt="dummy" />
            </div>
            <div className="content-post">
                <div className="title-post" onClick={() => props.goDetail(props.data.id)}>{props.data.title}</div>
                <div className="desc-post">{props.data.body}</div>
                <button className="update" onClick={() => props.update(props.data)}>Update</button>
                <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
            </div>
        </div>
    )
}

export default Post;