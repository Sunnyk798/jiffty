import {
	AiOutlineHome,
	AiOutlineUser,
	AiOutlineHeart,
	AiOutlineLogout,
	AiOutlineUpload,
} from "react-icons/ai";
import "./Sidenav.css";
import { Link } from "react-router-dom";

export default function Sidenav() {
	return (
		<div className='sidenav'>
			<Link to="/">
				<AiOutlineHome className='icon' />
				<small>Home</small>
			</Link>

			<Link to="/profile">
				<AiOutlineUser className='icon' />
				<small>Profile</small>
			</Link>

			<Link to="/saved">
				<AiOutlineHeart className='icon' />
				<small>Saved</small>
			</Link>

			<a href="/">
				<AiOutlineLogout className='icon' />
				<small>Logout</small>
			</a>

			<Link to="/upload" className="upload-icon">
				<AiOutlineUpload className='icon' />
				<small>Upload</small>
			</Link>
		</div>
	);
}
