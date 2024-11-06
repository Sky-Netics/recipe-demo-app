import SignUpComponent from "./SignUpComponents/signUpComponent";
import Navbar from "../../components/navbar";

const SignUp = ()=>{
    return(
        <>
        <Navbar/>
        <div className="flex items-center justify-center bg-[#ffea74] h-[calc(100vh-115px)]">
            <SignUpComponent/>
        </div>
        </>
    )
}

export default SignUp;