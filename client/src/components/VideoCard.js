import { AiOutlinePlaySquare } from "react-icons/ai";
import "./VideoCard.css";

export default function VideoCard({ video, setVideo, playing }) {
	return (
		<div
			className={playing ? "playing" : "videoCard"}
			onClick={() => setVideo(video)}>
			<div className='poster'>
				{playing ? (
					<video src={"/media/" + video.videoPath} controls />
				) : (
					<div className='thumbnail'>
						<AiOutlinePlaySquare />
					</div>
				)}
			</div>
			<p className='title'>{video.title}</p>
			<small>{video.description}</small>
		</div>
	);
}
