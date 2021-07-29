import "./Sidenav.css";

export default function Sidenav({ setPage }) {
	return (
		<div className='sidenav'>
			<div onClick={() => setPage("home")}>H</div>
			<div onClick={() => setPage("profile")}>P</div>
			<div onClick={() => setPage("saved")}>S</div>
			<div>L</div>
			<div onClick={() => setPage("upload")}>+</div>
		</div>
	);
}
