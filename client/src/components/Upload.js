import "./Upload.css";

export default function Upload() {
	return (
		<div className='upload'>
			<h3>Upload video</h3>
			<form>
				<label to='video-upload'>Video </label>
				<input type='file' className='file-upload' id='video-upload' />
				<br />

				<label to='title-upload'>Title </label>
				<input
					type='text'
					maxLength='200'
					className='title-upload'
					id='title-upload'
				/>
				<br />

				<label to='desc-upload'>Description </label>
				<textarea className='desc-upload'></textarea>
			</form>
		</div>
	);
}
