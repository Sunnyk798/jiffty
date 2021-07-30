import {
	AiOutlineHome,
	AiOutlineUser,
	AiOutlineHeart,
	AiOutlineLogout,
	AiOutlineUpload,
} from "react-icons/ai";
import "./Sidenav.css";

export default function Sidenav({ setPage }) {
	return (
		<div className='sidenav'>
			<div onClick={() => setPage("home")}>
				<AiOutlineHome className='icon' />
				<small>Home</small>
			</div>

			<div onClick={() => setPage("profile")}>
				<AiOutlineUser className='icon' />
				<small>Profile</small>
			</div>

			<div onClick={() => setPage("saved")}>
				<AiOutlineHeart className='icon' />
				<small>Saved</small>
			</div>

			<div>
				<AiOutlineLogout className='icon' />
				<small>Logout</small>
			</div>

			<div className='upload-icon' onClick={() => setPage("upload")}>
				<AiOutlineUpload className='icon' />
				<small>Upload</small>
			</div>
		</div>
	);
}
