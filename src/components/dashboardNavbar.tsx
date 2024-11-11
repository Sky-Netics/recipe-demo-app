import { useState,useEffect,useRef } from "react";
import { useNavigate,Link } from "react-router-dom";

import AllRecipes from "../pages/allRecipes";
import MyRecipes from "../pages/myRecipes";
import FavoriteRecipes from "../pages/favoriteRecipes";
import Account from "../pages/account";

const DashboardNavbar = () => {
    const redirect = useNavigate();

    let route:string = window.location.href.split("?")[1]
    const domain:string = 'http://api.recipeapp.soroushsalari.com'
    
    const [username,setUsername] = useState("");
    const [component,setComponent] = useState<React.ReactNode>();

    const rightBar = useRef<HTMLDivElement|null>(null);
    const placeHolder = useRef<HTMLDivElement|null>(null);

    const dashboard = useRef<HTMLAnchorElement|null>(null)
    const allRecipes = useRef<HTMLAnchorElement|null>(null)
    const myRecipes = useRef<HTMLAnchorElement|null>(null)
    const favorite = useRef<HTMLAnchorElement|null>(null)
    const account = useRef<HTMLAnchorElement|null>(null)
    const buttons = [dashboard,allRecipes,myRecipes,favorite,account]

    useEffect(()=>{
        if (route === undefined)
            route = "dashboard"

        document.querySelector(`[data-name=${route}]`)?.classList.add("active");

        if (localStorage.getItem("access_token") !== null){
            const user = getUser();
            if(!user)
                refreshToken();
        }else{
            redirect("/login")
        }
    },[])

    const getUser = async ()=>{
        const response = await fetch(`${domain}/users/me`,{
            method:"GET",
            headers:{
            'Content-Type': 'application/json',
            "Authorization":`Bearer ${localStorage.getItem('access_token')}`
        }})
        if (response.status === 200){
            const result = await response.json();
            setUsername(result.username)
            return true
        }else {
            console.log(response.status)
            return false}
    }
    const refreshToken = async ()=>{
        const response = await fetch(`${domain}/auth/refresh`,{
            method:"POST",
            headers:{
            'Content-Type': 'application/json',
            },
            body : JSON.stringify({"refresh_token":localStorage.getItem("refresh_token")})
        })
        if(response.status === 200){
            let result = await response.json()
            localStorage.setItem("access_token",result.access_token);
            localStorage.setItem("refresh_token",result.refresh_token);
            getUser()
        }else redirect("/login")
    }

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
        localStorage.removeItem("access_token")
        redirect('/')
    }

    
    return (<>
        <div>
            <div ref={rightBar} className="xl:left-0 -left-60 fixed transition-all duration-300 w-60 h-screen bg-butter z-50 p-7">
                <div className="flex justify-center"><Link to={"/"}><img src="/images/logo.png" alt="logo" /></Link></div>
                <div className="text-center">
                    <p className="text-gray-500 my-6">DASHBOARD</p>
                    <div className="text-left ml-20"><Link ref={dashboard} data-name="dashboard" to="/dashboard?dashboard">Dashboard</Link></div>
                </div>
                <div className="text-center">
                    <p className="text-gray-500 my-6">RECIPES</p>
                    <div className="text-left ml-20 mb-6 w-36"><Link ref={allRecipes} data-name="all-recipes" to="/dashboard/all-recipes?all-recipes">All Recipes</Link></div>
                    <div className="text-left ml-20 w-36"><Link ref={myRecipes} data-name="my-recipes" to="/dashboard/my-recipes?my-recipes">My Recipes</Link></div>
                </div>
                <div className="text-center">
                    <p className="text-gray-500 my-6">BOOKMARKS</p>
                    <div className="text-left ml-20"><Link ref={favorite} data-name="favorite" to="/dashboard/favorite?favorite">favorites</Link></div>
                </div>
                <div className="text-center">
                    <p className="text-gray-500 my-6">PROFILE</p>
                    <div className="text-left ml-20"><Link ref={account} data-name="account" to="/dashboard/account?account">Account</Link></div>
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
    </>);
}
 
export default DashboardNavbar;