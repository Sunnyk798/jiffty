import "./VideoCard.css";

export default function VideoCard({ video }) {
	return (
		<div className='videoCard'>
			<div className='img'>NODE</div>
			<p className='title'>{video.title}</p>
			<small>{video.description}</small>
		</div>
	);
}
