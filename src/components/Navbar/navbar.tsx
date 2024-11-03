import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="flex justify-between px-12 h-24 w-full items-center mt-4">
            <div className="">
                <Link to={'/'}>
                    <img src={Logo} alt="Logo" className="h-full" />
                </Link>
            </div>
            <div className="flex gap-7 max-lg:hidden">
                <div className=" cursor-pointer hover:text-carrot border-b-2 border-carrot">Home</div>
                <div className="cursor-pointer hover:text-carrot">Recipes</div>
                <div className="cursor-pointer hover:text-carrot">Features</div>
                <div className="cursor-pointer hover:text-carrot">Testimonials</div>
                <div className="cursor-pointer hover:text-carrot">ContactUs</div>
            </div>
            <div className="flex gap-5">
                <div>
                    <Link className="underline hover:text-carrot" to={"/"} aria-label="Register">Register</Link>
                </div>

                <div>
                    <Link className="bg-carrot px-14 py-3 rounded-3xl shadow text-white" to={"/"} aria-label="Login">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;