import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () =>{

    //  let btnName = "Login";

    const [btnNameReact, setBtnNameReact] = useState("Login");

    //variable check onlineStatus
    const onlineStatus = useOnlineStatus();

    // context hook (assume global object)
    const {loggedInUser} = useContext(UserContext);

    // console.log("header rendered")

    useEffect(()=>{
    // console.log("useEffect is called");
    },[btnNameReact]);
    
    // console.log("re-render that whole header/component if state changes")

    // Subscribing to the store using a Selector
    const cartItems = useSelector((store)=> store.cart.items);
    // console.log(cartItems);

    return(
        <div className="flex justify-between shadow-lg
        bg-gray-300 sm:bg-yellow-200 md:bg-blue-300 lg:bg-orange-200">        
        <div className="logo-container">
            <Link to="/"><img className="w-36"
            src={LOGO_URL} alt="logo"/></Link>
            
        </div>
        <div className="flex items-center flex-wrap">
            <ul className="flex p-4 m-4">
                <li className="px-4">Online:{onlineStatus?"Yes":"No"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4 font-bold "><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <button className="login" onClick={()=>{
                    btnNameReact === "Login" ?
                    setBtnNameReact("Logout") :
                    setBtnNameReact("Login");
                    // console.log(btnNameReact);
                }}>{btnNameReact}</button>
                <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
        </div>
        </div>
    );
}

export default Header;