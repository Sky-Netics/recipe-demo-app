import { useEffect, useReducer, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    useEffect(()=>{

    },[])

    return ( 
        <div className="flex justify-between px-4 h-24 w-full items-center">
            <div className="sm:hidden md:block"><Link to={"/"} aria-label="logo"><img src="/images/logo.png" alt="logo"/></Link></div>
            <div className="hidden sm:flex gap-4 lg:gap-8">
                <div className="cursor-pointer hover:text-carrot border-b-2 border-carrot"><Link to={"/"}>Home</Link></div>
                <div className="cursor-pointer hover:text-carrot"><a href={"#recipes"}>Recipes</a></div>
                <div className="cursor-pointer hover:text-carrot"><Link to={"/#features"}>Features</Link></div>
                <div className="cursor-pointer hover:text-carrot"><Link to={"/#testimonials"}>Testimonials</Link></div>
                <div className="cursor-pointer hover:text-carrot"><Link to={"/#contactus"}>ContactUs</Link></div>
            </div>
            <div className="flex gap-5">
                <div><Link className="underline hover:text-carrot" to={"/"} aria-label="Register">Register</Link></div>
                <div><Link className="bg-carrot px-5 py-2 rounded-3xl text-zinc-50" to={"/"} aria-label="Login">Login</Link></div>
            </div>
        </div>
     );
}
 
export default Navbar;