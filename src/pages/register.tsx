import { Link } from "react-router-dom";


const Register = () => {
    return ( 
        <div className="w-screen h-screen bg-butter flex justify-center items-center">
            <div className="w-[350px] lg:w-[800px] h-[600px] rounded-2xl bg-white shadow-2xl flex justify-between">
                <div className="login-offset p-8">
                    <div className=""><img className="mx-auto object-cover" src="/images/logo.png" alt="logo" /></div>
                    <div className="space-y-3">
                        <div>
                            <label htmlFor="username">Username</label>
                            <div><input className="auth-input" type="text" name="username" id="username" /></div>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <div><input className="auth-input" type="text" name="email" id="email" /></div>
                        </div>
                        <div>
                            <label htmlFor="profile">Profile Picture</label>
                            <div><input className="auth-input" type="text" name="profile" id="profile" /></div>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <div><input className="auth-input" type="text" name="password" id="password" /></div>
                        </div>
                        <div>
                            <label htmlFor="re-password">Password Confirmation</label>
                            <div><input className="auth-input" type="text" name="re-password" id="re-pa</div>ssword" /></div>
                        </div>
                        <div>
                            <button className="auth-input border-none mt-4 mb-2 bg-carrot text-white">Sign Up</button>
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
     );
}
 
export default Register;