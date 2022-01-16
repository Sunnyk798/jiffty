import "./App.css";
import { useState } from "react";
import Topnav from "./components/Topnav";
import Sidenav from "./components/Sidenav";
import VideoList from "./components/VideoList";
import VideoPage from "./components/VideoPage";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Upload from "./components/Upload";
import { auth } from './config/firebase-config'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Search from "./components/Search";

function App() {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('jifftyAuth')));

	if (!authUser) return <Login auth={auth} setAuthUser={setAuthUser} />;
	
    return (
		<div className='App'>
            <BrowserRouter>
			<Topnav />
			<div className='container'>
				<Sidenav user={authUser} />
				<Routes>
                    <Route path='/' element={<VideoList token={authUser.token} title='Latest Videos' />} />
                    <Route path='/search/:term' element={<Search token={authUser.token} />} />
                    <Route path="/watch/:id" element={<VideoPage user={authUser} />} />
                    <Route path='/profile/:id' element={<Profile user={authUser} />} />
                    <Route path='/saved' element={<VideoList token={authUser.token} title='Saved Videos' />} />
                    <Route path='/upload' element={<Upload user={authUser._id} />} />
                </Routes>
			</div>
            </BrowserRouter>
		</div>
	);
}

export default App;
