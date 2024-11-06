import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const DashboardNavbar = () => {
    const redirect = useNavigate();

    const route:string = window.location.href.split("?")[1]
    const domain:string = 'http://api.recipeapp.soroushsalari.com'
    
    const [username,setUsername] = useState("");

    const rightBar = useRef<HTMLDivElement|null>(null);
    const placeHolder = useRef<HTMLDivElement|null>(null);


    useEffect(()=>{
        document.querySelector(`[data-name=${route}]`)?.classList.add("active");

        const fecthUser = async ()=>{
            const response = await fetch(`${domain}/users/me`,{
                method:"GET",
                headers:{
                'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem('access_token')}`
            }
            })
            if (response.status === 200){
                const result = await response.json();
                setUsername(result.username)
            }
        }
        if (localStorage.getItem("id") !== null){
            fecthUser();
        }else{
            redirect("/login")
        }
    },[])


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

    const logout = ()=>{
        localStorage.removeItem("id")
        localStorage.removeItem("auth_token")
        redirect('/')
    }

    return (<>
            <div>
                <div ref={rightBar} className="xl:left-0 -left-60 fixed transition-all duration-300 w-60 h-screen bg-butter z-50 p-7">
                    <div className="flex justify-center"><img src="/images/logo.png" alt="logo" /></div>
                    <div className="text-center">
                        <p className="text-gray-500 my-6">DASHBOARD</p>
                        <div className="text-left ml-20"><Link data-name="dashboard" to="/dashboard?dashboard">Dashboard</Link></div>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-500 my-6">RECIPES</p>
                        <div className="text-left ml-20 mb-6 w-36"><Link data-name="all-recipes" to="/dashboard/all-recipes?all-recipes">All Recipes</Link></div>
                        <div className="text-left ml-20 w-36"><Link data-name="my-recipes" to="/dashboard/my-recipes?my-recipes">My Recipes</Link></div>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-500 my-6">BOOKMARKS</p>
                        <div className="text-left ml-20"><Link data-name="favorite" to="/dashboard/favorite?favorite">favorites</Link></div>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-500 my-6">PROFILE</p>
                        <div className="text-left ml-20"><Link data-name="account" to="/dashboard/account?account">Account</Link></div>
                    </div>
                </div>
                <div onClick={closeBar} ref={placeHolder} className="hidden fixed w-screen h-screen right-0 top-0 z-40 back-blur"></div>
            </div>
            <div>
                <div className="h-16 w-full flex justify-between items-centerc px-5 xl:pl-64">
                    <div className="xl:hidden flex items-center">
                        <svg onClick={openBar} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer hover:text-carrot size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <div className="flex items-center">
                        <p className="font-extrabold">Welcome, {username}</p>
                    </div>
                    <div className="flex items-center">
                        <button onClick={logout} className="border border-black py-1.5 px-6 rounded-2xl">Logout</button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default DashboardNavbar;