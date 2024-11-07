import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { authValidator } from "../validators/authValidator";

const Login = () => {
    const redirect = useNavigate();
    
    const message = useRef<HTMLDivElement|null>(null);
    const submit = useRef<HTMLButtonElement|null>(null);
    
    const [disable,setDisable] = useState(false);
    const [error,setError] = useState<string[]>([])
    const [info,setInfo] = useState({
        username:"",
        password:""
    });

    const submitForm = async ()=>{
        submit.current?.classList.add("opacity-50")
        setDisable(true)

        const username:string = authValidator("username",info.username)
        const password:string = authValidator("password",info.password)
        const credentials = [username,password]; 

        let arr:string[] = [];
        credentials.forEach(cred => { 
            if (cred !== "valid") arr.push(cred);
        });
        if (arr.length === 0){
            message.current?.classList.add("hidden");
            sendData()
        }else{
            setError(arr)
            message.current?.classList.remove("hidden");
            submit.current?.classList.remove("opacity-50");
            setDisable(false);
        }
    }

    const closeMessage = ()=>{
        message.current?.classList.add("hidden")
    }

    const sendData = async ()=>{
        const response = await fetch("http://api.recipeapp.soroushsalari.com/auth/login", { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info) 
        })
        if (response.status === 201){
            let result = await response.json()
            localStorage.setItem("access_token",result.access_token)
            localStorage.setItem("refresh_token",result.refresh_token)
            redirect("/dashboard?dashboard")
        }
    }


    return (<>
        <div ref={message} className="hidden w-96 sm:w-[550px] bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute top-3 left-1/2 -translate-x-1/2" role="alert">
            <div className="flex gap-14 justify-between">
                <div className="text-sm sm:text-base space-y-1">
                {error.map((err,i)=>{
                    return <p key={i}>{i+1}_{err}</p>
                })}
                </div>
                <div className="text-red-700 cursor-pointer" onClick={closeMessage} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="w-screen h-screen bg-butter flex justify-center items-center">
            <div className="w-[350px] lg:w-[800px] h-[600px] rounded-2xl bg-white shadow-2xl flex justify-between">
                <div className="login-offset p-8">
                    <div className="mb-14"><img className="mx-auto object-cover" src="/images/logo.png" alt="logo" /></div>
                    <div className="space-y-3">
                        <div>
                            <label htmlFor="username">Username</label>
                            <div><input onChange={e=>setInfo({...info,username:e.target.value})} className="auth-input h-11" type="text" name="username" id="username" /></div>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <div><input onChange={e=>setInfo({...info,password:e.target.value})} className="auth-input h-11" type="text" name="password" id="password" /></div>
                        </div>
                        <div>
                            <button ref={submit} onClick={submitForm} disabled={disable} className="auth-input border-none mt-6 mb-6 bg-carrot text-white">Login</button>
                        </div>
                        <div className="flex gap-1 justify-center">
                            <p className="">Don’t have an account?</p>
                            <Link className="text-carrot" to="/register">Sign up</Link>
                        </div>
                    </div>
                </div>
                <div className="lg:login-offset hidden"><img className="login-offset" src="/images/Rectangle.png" alt="Rectangle" /></div>
            </div>
        </div>
     </>);
}
 
export default Login;