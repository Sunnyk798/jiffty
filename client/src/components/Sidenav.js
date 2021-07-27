import "./Sidenav.css";

export default function Sidenav({ setPage }) {
	return (
		<div className='sidenav'>
			<div>H</div>
			<div onClick={() => setPage("profile")}>P</div>
			<div>S</div>
			<div>L</div>
		</div>
	);
}
