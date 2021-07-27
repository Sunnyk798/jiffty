import "./App.css";
import Topnav from "./components/Topnav";
import Sidenav from "./components/Sidenav";
import VideoList from "./components/VideoList";

function App() {
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
