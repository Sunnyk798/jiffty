import { useForm } from "react-hook-form";
import axios from "axios";
import "./Upload.css";

export default function Upload() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	async function submitHandler(data) {
		try {
			let url = "/videos/upload";
			let postData = new FormData();
			postData.append("title", data.title);
			postData.append("description", data.description);
			postData.append("video", data.video[0]);

			const response = await axios.post(url, postData);
			console.log(response);
			alert("Video uploaded successfully!");
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<div className='upload'>
			<h3>Upload video</h3>

			<form onSubmit={handleSubmit(submitHandler)}>
				<label htmlFor='video-upload'>Video </label>

				<input
					type='file'
					accept='video/mp4,video/*'
					className='file-upload'
					id='video-upload'
					{...register("video", {
						required: "This field is required.",
					})}
				/>

				{errors.video && <small>{errors.video.message}</small>}

				<br />

				<label htmlFor='title-upload'>Title </label>

				<input
					type='text'
					maxLength='200'
					className='title-upload'
					id='title-upload'
					{...register("title", {
						required: "This field is required.",
						maxLength: { value: 150, message: "Max length exceeded." },
					})}
				/>

				{errors.title && <small>{errors.title.message}</small>}

				<br />

				<label htmlFor='desc-upload'>Description </label>

				<textarea
					className='desc-upload'
					id='desc-upload'
					{...register("description", {
						required: "This field is required.",
					})}></textarea>

				{errors.description && <small>{errors.description.message}</small>}

				<br />

				<input className='upload-btn' value='UPLOAD' type='submit' />
			</form>
		</div>
	);
}
