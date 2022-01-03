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

function App() {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('jifftyAuth')));

	if (!authUser) return <Login auth={auth} setAuthUser={setAuthUser} />;
	
    return (
		<div className='App'>
            <BrowserRouter>
			<Topnav />
			<div className='container'>
				<Sidenav />
				<Routes>
                    <Route path='/' element={<VideoList title='Latest Videos' />} />
                    <Route path="/watch/:id" element={<VideoPage />} />
                    <Route path='/profile' element={<Profile user={authUser} />} />
                    <Route path='/saved' element={<VideoList title='Saved Videos' />} />
                    <Route path='/upload' element={<Upload user={authUser._id} />} />
                    {/* <Route path='/logout' element={<VideoList title='Latest Videos' />} /> */}
                </Routes>
			</div>
            </BrowserRouter>
		</div>
	);
}

export default App;
