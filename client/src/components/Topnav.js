import "./Topnav.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Topnav() {
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

	return (
		<div className='navbar'>
			<div className='brand'>Jiffty</div>
            <form onSubmit={searchHandler}>
                <input value={term} onChange={(e)=>{setTerm(e.target.value)}} type='text' placeholder='Search' className='searchbar' />
            </form>
		</div>
	);
}
