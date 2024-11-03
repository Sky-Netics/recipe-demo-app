import { useRef } from "react";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
    const rightBar = useRef<HTMLDivElement|null>(null);
    const placeHolder = useRef<HTMLDivElement|null>(null);

    const openBar = ()=>{
        if (rightBar.current !== null ){
            rightBar.current.style.left = "0px" ;
        }
        placeHolder.current?.classList.remove("hidden");
    }

    const closeBar = ()=>{
        if (rightBar.current !== null ){
            rightBar.current.style.left = "-240px" ;
        }
        placeHolder.current?.classList.add("hidden");
    }

    return (<>
            <div>
                <div ref={rightBar} className="xl:left-0 -left-60 absolute transition-all duration-300 w-60 h-screen bg-butter z-50 p-7">
                    <div className="flex justify-center"><img src="/images/logo.png" alt="logo" /></div>
                    <div className="text-center">
                        <p className="text-gray-500 my-6">DASHBOARD</p>
                        <div className="text-left ml-20"><Link className="active" to="/dashboard">Dashboard</Link></div>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-500 my-6">RECIPES</p>
                        <div className="text-left ml-20 mb-6"><Link to="">All Recipes</Link></div>
                        <div className="text-left ml-20"><Link to="">My Recipes</Link></div>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-500 my-6">BOOKMARKS</p>
                        <div className="text-left ml-20"><Link to="">Favourites</Link></div>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-500 my-6">PROFILE</p>
                        <div className="text-left ml-20"><Link to="">Account</Link></div>
                    </div>
                </div>
                <div onClick={closeBar} ref={placeHolder} className="hidden absolute w-screen h-screen right-0 top-0 z-40 back-blur"></div>
            </div>
            <div>
                <div className="h-16 w-full flex justify-between items-centerc px-5 xl:pl-64">
                    <div className="xl:hidden flex items-center">
                        <svg onClick={openBar} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer hover:text-carrot size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <div className="flex items-center">
                        <p className="font-extrabold">Welcome, User102102129</p>
                    </div>
                    <div className="flex items-center">
                        <button className="border border-black py-1.5 px-6 rounded-2xl">Logout</button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default DashboardNavbar;