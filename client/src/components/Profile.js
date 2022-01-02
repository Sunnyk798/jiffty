import "./Profile.css";

export default function Profile({ user }) {
    console.log(user)
	return (
        <div>
            <img src={user.coverPicture} className="cover" alt={user.name} />
            <div className='profile'>
                <img className='avatar' src={user.profilePicture} alt={user.name}/>
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.tagline}</p>
                    <div className='subs'>
                        <span>{user.followers.length}</span> Followers 
                        <span> {user.following.length}</span> Following
                    </div>
                    <button>Follow</button>
                </div>
            </div>
        </div>
	);
}
