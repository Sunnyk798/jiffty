import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import "./VideoList.css";

export default function VideoList({ title }) {
	const [videos, setVideos] = useState([]);
	const [playingVideo, setPlayingVideo] = useState(null);

	useEffect(() => {
		fetch("/videos")
			.then(res => res.json())
			.then(result => {
				console.log(result);
				setVideos(result);
			});
	}, []);

	return (
		<div className='video-list'>
			<div>{title}</div>
			<div className='list'>
				{videos.map(video => {
					return (
						<VideoCard
							key={video._id}
							video={video}
							setVideo={setPlayingVideo}
							playing={playingVideo?._id === video._id}
						/>
					);
				})}
			</div>
		</div>
	);
}
