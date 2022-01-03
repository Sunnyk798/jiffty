import { AiFillPlayCircle } from "react-icons/ai";
import "./VideoPage.css";
import { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';

function getUrl(name){
    return `https://firebasestorage.googleapis.com/v0/b/jiffty.appspot.com/o/${name}?alt=media`
}

export default function VideoPage() {
    const [currentVideo, setCurrentVideo] = useState(null);

    let params = useParams();
    useEffect(() => {
        async function fecthData(){
            try {
                const response = await fetch(`/api/videos/${params.id}`);
                const video = await response.json();
                if(video){
                    setCurrentVideo(video)
                }
            } catch(err){
                return <div>{err}</div>
            }
        }
        fecthData();
    },[params.id])

    const vidRef = useRef(null);

    const [playing, setPlaying] = useState(false)

    const handleVideoPlay = (e) => {
        e.preventDefault();
        if(playing){
            vidRef.current.pause();
            vidRef.current.controls = false;
            setPlaying(false);
        } else {
            vidRef.current.controls = true;
            vidRef.current.play();
            setPlaying(true);
        }
    }
    if(!currentVideo) return <div> Loading ... </div>

    return (
        <div className="player">
			<div className='poster' onClick={handleVideoPlay}>
                {!playing && <AiFillPlayCircle className="playicon" /> }
				<video ref={vidRef} src={getUrl(currentVideo.videoPath)}/>
			</div>
            <div className="desc">
                <p className='title'>{currentVideo.title}</p>
                <p>{currentVideo.description}</p>
                <small>{new Date(currentVideo.createdAt).toDateString()}  |  {currentVideo.views} views</small>
            </div>
            <div className="author">
                <div className="identity">
                    <img src={currentVideo.author.profilePicture} alt="avatar" className="avatar" />
                    <span>{currentVideo.author.name}</span>
                </div>
                <div className="stat">
                    <span>{currentVideo.author.followers.length}</span> Followers | 
                    <span> {currentVideo.author.following.length}</span> Following
                    <button className="follow-btn">Follow</button>
                </div>
            </div>
            <div className="sized-box"></div>
            <div className="sized-box"></div>
            <div className="sized-box"></div>
		</div>
    )
}
