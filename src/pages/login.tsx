import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const redirect = useNavigate();

    const [info,setInfo] = useState({
        username:"",
        password:""
    });

    const submitForm = async ()=>{
        const response = await fetch("http://3.66.216.91/auth/login", { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info) 
        })
        if (response.status === 201){
            let result = await response.json()
            localStorage.setItem("id",result.user.id)
            localStorage.setItem("access_token",result.access_token)
            redirect("/dashboard")
        }
    }

    return (<>
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
                            <button onClick={submitForm} className="auth-input border-none mt-6 mb-6 bg-carrot text-white">Login</button>
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