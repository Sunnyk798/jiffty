import "./Topnav.css";

export default function Topnav() {
	return (
		<div className='navbar'>
			<div className='brand'>Jiffty</div>
			<input type='text' placeholder='Search' className='searchbar' />
			<div className='profile'>Gunjan</div>
		</div>
	);
}
