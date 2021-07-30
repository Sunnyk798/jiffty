import "./Login.css";

export default function Login({ setLoggedIn }) {
	function google_login(){
		fetch("http://localhost:5050/auth/google",{
			method: "GET",
			headers: {
				"Content-type": "application/json",
				'Accept': 'application/json',
				
			}
		})
		.then(res=>res.json())
		.then(result=>{
			setLoggedIn(true);
			console.log(JSON.stringify(result));
		})
	}

	return (
		<div className='login-page'>
			<div className='large-logo'>Jiffty</div>
			<button onClick={google_login} className='login-btn'>
				Login with Google
			</button>
		</div>
	);
}
