import "./Profile.css";

export default function Profile({ name }) {
	return (
		<div className='profile'>
			<div className='avatar'>Avatar</div>
			<div>
				<h2>{name}</h2>
				<div className='subs'>
					<span>1.8M</span> Subscribers
				</div>
				<button>SUBSCRIBE</button>
			</div>
		</div>
	);
}
