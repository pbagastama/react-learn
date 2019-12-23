import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper"> 
            <div className="thumb-img">
                <img src={props.image} alt="thumbnail"/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    image: 'https://i.ytimg.com/vi/frwlr7uh0io/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBdjMGUlc5Cb2A4M2rgxAbqn2iYAQ',
    time: '00.00',
    title: 'Tutorial React Firebase -  Bagian 5',
    desc: '100K views. 1 month ago'
}
export default YoutubeComp;