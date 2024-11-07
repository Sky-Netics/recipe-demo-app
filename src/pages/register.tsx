import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { authValidator } from "../validators/authValidator";

const URL:string = "http://api.recipeapp.soroushsalari.com/auth/signup"; 

const Register = () => {
    const redirect = useNavigate();

    const message = useRef<HTMLDivElement|null>(null);
    const submit = useRef<HTMLButtonElement|null>(null);

    const [disable,setDisable] = useState(false)

    const [error,setError] = useState<string[]>([])
    const [info,setInfo] = useState<{ [key: string]: string }>({
        username:"",
        email:"",
        password:"",
        password_confirmation:"",
        image_url: "string"
    })

    const submitForm = async ()=>{
        if (info.password === info.password_confirmation){
            submit.current?.classList.add("opacity-50")
            setDisable(true)
            checkInfo()            
        }else{
            setError(["Two Password Field Does Not Match."]);
            message.current?.classList.remove("hidden");
        }
    }

    const closeMessage = ()=>{
        message.current?.classList.add("hidden");
    }

    const checkInfo = ()=>{
        const username:string = authValidator("username",info.username)
        const email:string = authValidator("email",info.email)
        const password:string = authValidator("password",info.password)

        const credentials:string[] = [username, email, password]; 
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
            submit.current?.classList.remove("opacity-50")
            setDisable(false)
        }
    }

    const sendData = async ()=>{
        const response = await fetch(URL, { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info) 
        })
        console.log(response)
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
                    <div className=""><img className="mx-auto object-cover" src="/images/logo.png" alt="logo" /></div>
                    <div className="space-y-3">
                        <div>
                            <label htmlFor="username">Username</label>
                            <div><input onChange={e=>{setInfo({...info,username:e.target.value})}} className="auth-input" type="text" name="username" id="username" /></div>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <div><input onChange={e=>{setInfo({...info,email:e.target.value})}} className="auth-input" type="email" name="email" id="email" /></div>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <div><input onChange={e=>{setInfo({...info,password:e.target.value})}} className="auth-input" type="text" name="password" id="password" /></div>
                        </div>
                        <div>
                            <label htmlFor="re-password">Password Confirmation</label>
                            <div><input onChange={e=>{setInfo({...info,password_confirmation:e.target.value})}} className="auth-input" type="text" name="re-password" id="re-pa</div>ssword" /></div>
                        </div>
                        <div>
                            <button ref={submit} onClick={submitForm} disabled={disable} className="auth-input border-none mt-4 mb-2 bg-carrot text-white">Sign Up</button>
                        </div>
                        <div className="flex gap-1 justify-center">
                            <p className="">Already have an account?</p>
                            <Link className="text-carrot" to="/login">Login</Link>
                        </div>
                    </div>
                </div>
                <div className="lg:login-offset hidden"><img className="login-offset" src="/images/Rectangle.png" alt="Rectangle" /></div>
            </div>
        </div>
     </>);
}
 
export default Register;