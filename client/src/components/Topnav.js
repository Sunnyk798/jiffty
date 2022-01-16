import "./Topnav.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai'

export default function Topnav({navShow, setNavShow}) {
    const navigate = useNavigate();
    const [term, setTerm] = useState("")

    const searchHandler = (e) => {
        e.preventDefault();
        if(term === ""){
            alert("Type Something!");
            return;
        }
        navigate('/search/'+term);
    }

    function handleSidenav(){
        setNavShow(!navShow);
    }

	return (
		<div className='navbar'>
            <div onClick={handleSidenav} className='hamburger'><AiOutlineMenu /></div>
			<div className='brand'>Jiffty</div>
            <form onSubmit={searchHandler}>
                <input value={term} onChange={(e)=>{setTerm(e.target.value)}} type='text' placeholder='Search' className='searchbar' />
            </form>
		</div>
	);
}
