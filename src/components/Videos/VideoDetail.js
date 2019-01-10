import React from 'react'
import { VIDEO_SRC } from '../constants';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }
    const { snippet: { title, description }, id: { videoId } } = video;
    const videoSrc = `${VIDEO_SRC}/${videoId}`

    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title={title} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default VideoDetail
