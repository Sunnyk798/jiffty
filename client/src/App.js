import "./App.css";
import Topnav from "./components/Topnav";
import Sidenav from "./components/Sidenav";
import VideoList from "./components/VideoList";
import Login from "./components/Login";

function App() {
	var loggedIn = false;
	if (!loggedIn) return <Login />;
	return (
		<div className='App'>
			<Topnav />
			<div className='container'>
				<Sidenav />
				<VideoList title='Latest Videos' />
			</div>
		</div>
	);
}

export default App;
