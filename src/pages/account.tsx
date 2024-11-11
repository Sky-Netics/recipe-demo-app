import { useState } from "react";
import DashboardNavbar from "../components/dashboardNavbar";

const Account = () => {
    const [disable,setDisable] = useState(true);

    const [info,setInfo] = useState({
        username:'',
        email:""
    })

    return (<> 
            <DashboardNavbar />
            <div className="">
                <div className="mx-auto my-14 h-[500px] w-96 sm:w-[500px] md:w-[600px] bg-white px-16 sm:px-20 py-12 rounded-md shadow-2xl">
                    <div className="md:flex gap-8">
                        <div className="mt-3 w-full">
                            <div><label htmlFor="username">Username</label></div>
                            <div><input placeholder="Tony" className="placeholder:px-2 border border-black rounded w-full h-9" type="text" id="username" name="username" /></div>
                        </div>
                        <div className="mt-3 w-full">
                            <div><label htmlFor="email">Email</label></div>
                            <div><input placeholder="Tony@gmail.com" className="placeholder:px-2 border border-black rounded w-full h-9" type="text" id="email" name="email" /></div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div><label htmlFor="profile">Profile Picture</label></div>
                        <div className="mt-2"><input className="file:bg-blue-600 file:text-white file:border-none file:px-8 file:py-2 file:rounded-lg" type="file" accept="image/*" id="profile" name="profile" /></div>
                    </div>
                    <div className="mt-16 md:w-1/2">
                        <button disabled={disable} style={disable ? {opacity:0.5} : {opacity:1}} className="bg-carrot text-white w-full py-2 rounded-2xl">Save Changes</button>
                    </div>
                </div>
            </div>
     </>);
}
 
export default Account;