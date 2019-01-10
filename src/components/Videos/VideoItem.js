import "./VideoItem.css";
import React from 'react';

const VideoItem = ({ video, handleVideoSelect }) => {

    const { snippet: { title, thumbnails: { medium: { url } } } } = video;

    return (
        <div className="video-item item" onClick={() => handleVideoSelect(video)}>
            <img className="ui image" src={url} alt={title} />
            <div className="content">
                <div className="header">{title}</div>
            </div>
        </div>
    )
}

export default VideoItem
