import "./Login.css";

export default function Login({ setLoggedIn }) {
	return (
		<div className='login-page'>
			<div className='large-logo'>Jiffty</div>
			<button onClick={() => setLoggedIn(true)} className='login-btn'>
				Login with Google
			</button>
		</div>
	);
}
