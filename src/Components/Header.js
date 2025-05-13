import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



export const Header = () => {


  const [btnNameReact, setBtnNameReact]=useState("Login");
  const onlineStatus =useOnlineStatus();
  console.log("Header render");
  const {loggedInUser}= useContext(UserContext);

  useEffect(()=>{
  console.log("useEffect render");

  } )

  const cartItems = useSelector((store)=> store.cart.items);
console.log(cartItems); 
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
        <div className="logo-container">
          <img
            className="w-40"
            src={LOGO_URL}
          />  

        </div>
        <div className="flex items-center">
          <ul className="flex p-5 m-5">
            <li className="px-2">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
            <li className="px-2"><Link to="/">Home</Link></li>
            <li className="px-2"><Link to="/about">About</Link></li>
            <li className="px-2"><Link to="/contact">Contact Us</Link></li>
            <li className="px-2"><Link to="/grocery">Grocery</Link></li>  
            <li className="px-2 font-bold"><Link to="/cart">Cart 🛒{cartItems.length}</Link></li>
            <button
            className="bg-green-200  px-4 rounded-lg"
            onClick={ ()=>{
              
               btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
            }
            }
            >{btnNameReact}</button>
            <li>{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;