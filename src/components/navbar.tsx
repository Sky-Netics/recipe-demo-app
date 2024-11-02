import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="flex justify-between px-4 h-24 w-full items-center">
            <div className="sm:hidden md:block"><Link to={"/"}>L O G O</Link></div>
            <div className="hidden sm:flex gap-4 lg:gap-8">
                <div className="cursor-pointer hover:text-carrot border-b-2 border-carrot">Home</div>
                <div className="cursor-pointer hover:text-carrot">Recipes</div>
                <div className="cursor-pointer hover:text-carrot">Features</div>
                <div className="cursor-pointer hover:text-carrot">Testimonials</div>
                <div className="cursor-pointer hover:text-carrot">ContactUs</div>
            </div>
            <div className="flex gap-5">
                <div><Link className="underline" to={"/"} aria-label="Register">Register</Link></div>
                <div><Link className="bg-carrot px-5 py-2 rounded-3xl" to={"/"} aria-label="Login">Login</Link></div>
            </div>
        </div>
     );
}
 
export default Navbar;