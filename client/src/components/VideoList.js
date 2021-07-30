import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import "./VideoList.css";

export default function VideoList({ title }) {
	const [videos, setVideos] = useState([]);

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
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
			</div>
		</div>
	);
}
