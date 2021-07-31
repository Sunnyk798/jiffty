import "./App.css";
import { useState } from "react";
import Topnav from "./components/Topnav";
import Sidenav from "./components/Sidenav";
import VideoList from "./components/VideoList";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Upload from "./components/Upload";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [page, setPage] = useState("home");
	if (!loggedIn) return <Login setLoggedIn={setLoggedIn} />;
	return (
		<div className='App'>
			<Topnav />
			<div className='container'>
				<Sidenav setPage={setPage} />
				<div>
					{page === "home" && <VideoList title='Latest Videos' />}
					{page === "profile" && <Profile name='Gunjan Raj Tiwari' />}
					{page === "saved" && <VideoList title='Saved Videos' />}
					{page === "upload" && <Upload />}
				</div>
			</div>
		</div>
	);
}

export default App;
