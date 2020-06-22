import React from 'react';

const VideoPlayer = ({ video }) => {
    if (!video) {
        return <div>Loading video player...</div>;
    }
    const videoId = video.id.videoId;
    const url = `https://youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div className="detailTitle">
                    <h2>{video.snippet.title}</h2>
                </div>
                <hr/>
                <div>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </div>
    );
}

export default VideoPlayer;
