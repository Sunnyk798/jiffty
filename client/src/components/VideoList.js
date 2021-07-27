import VideoCard from "./VideoCard";
import "./VideoList.css";

export default function VideoList({ title }) {
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
