import SignInComponent from "./SignInComponents/SignInComponent"
import Navbar from "../../components/navbar"

const SignIn = ()=> {


    return(
        <>
        <Navbar/>
        <div className="flex items-center justify-center bg-[#ffea74] h-[calc(100vh-115px)]">
            <SignInComponent/>
        </div>
        </>
    )
}

export default SignIn