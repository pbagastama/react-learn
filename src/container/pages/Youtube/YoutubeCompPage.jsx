import React, { Component, Fragment } from 'react';
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp';
import './YoutubeCompPage.css';

export default class YoutubeCompPage extends Component {
    render() {
        return (
            <div>
                <p>Playlist Youtube</p>
                <hr/>
                <Fragment>
                    <YoutubeComp
                        image="https://i.ytimg.com/vi/8T20v0HK7pM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAfmahg3-aUpLI3sVLRcbPQFWPlDg" 
                        time="7.12" 
                        title="Tutorial React Firebase - Bagian 1"
                        desc="3K views. 2 day ago"/>
                    <YoutubeComp
                        image="https://i.ytimg.com/vi/guIeDEND3F4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBzOirLbWoZxwDpqvjg4rGkTwIlvA" 
                        time="5.02" 
                        title="Tutorial React Firebase - Bagian 2"
                        desc="1K views. 1 day ago"/>
                    <YoutubeComp 
                        image="https://i.ytimg.com/vi/y6ye4QzK77c/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD0DjyvWcQa066EjxnmKpvEUpB77A"
                        time="12.12"
                        title="Tutorial React Firebase - Bagian 3"
                        desc="13K views. 1 week ago"/>
                    <YoutubeComp 
                        image="https://i.ytimg.com/vi/b0_q5U9YfpE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAwi1MvKj2zgJZgs8mI6KCQCuS9zw"
                        time="8.04" 
                        title="Tutorial React Firebase - Bagian 4"
                        desc="19K views. 2 week ago"/>
                    <YoutubeComp />
                </Fragment>
                <hr/>
            </div>
        )
    }
}
