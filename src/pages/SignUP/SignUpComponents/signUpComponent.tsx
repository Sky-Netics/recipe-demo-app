import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import FoodImage from "../../../assets/SignUp-SignIn/signUp-signIn.webp"
import Logo from '../../../assets/logo.png'
import AuthContext from "../../../context/authContext"


type UserData = {
    username: string, 
    email: string, 
    password: string, 
    password_confirmation: string, 
    image_url: string,
    role: string
}

const SignUpComponent = ()=>{

    const authContext = useContext(AuthContext)
    console.log(authContext)

    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('')
    const [imageUrl, setImageUrl] = useState<string>('string')
  
    

    function postData(){

        const apiUrl = 'http://api.recipeapp.soroushsalari.com/auth/signup'

        const userData: UserData={
            username,
            email,
            password,
            password_confirmation: passwordConfirmation,
            image_url: imageUrl || '',
            role: 'user'
        }

        console.log(userData)

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then((response) => {
            if (!response.ok) {
                return response.text().then(text => {
                    throw new Error('Network response was not ok: ' + response.statusText + '. Response: ' + text);
                });
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);

            const accessToken = data.access_token;
                if (accessToken) {
                localStorage.setItem('access-token', accessToken);
                console.log('Access Token saved in local storage');
                window.location.href = '/dashboard'
            } else {
                console.log('Access Token not found in response');
            }

            authContext.login(data.user ,data.access_token)

            const refreshToken = data.refresh_token
                if(refreshToken){
                    localStorage.setItem('refresh-token', refreshToken)
                    console.log('Refresh token saved in local storage')
                }else{
                    console.log('Refresh Token not found in response');
                }

            const id = data.user.id
            if(id){
                localStorage.setItem('id', id)
                console.log('Id saved in local storage')
            }else{
                console.log('Id not found in response')
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });    

    }
    

    return(
        <div className="flex w-6/12 h-[500px] rounded-xl fixed max-lg:flex-col  max-lg:w-10/12">
            
                <form className="w-6/12 gap-10  bg-white rounded-tl-xl rounded-bl-xl px-10 py-7 max-lg:w-full max-lg:rounded-tr-xl max-lg:rounded-br-xl">
                   
                   <img src={Logo} alt="Logo" className="w-[80px] mx-auto"/>

                    <label htmlFor="username" className="text-[14px] font-semibold">Username</label><br />
                    <input 
                    type="text"  
                    id="username" 
                    className="border-2 border-gray-400 rounded-lg w-full h-[35px] px-2  mb-3"
                    onChange={(e)=>setUsername((e.target as any).value)}
                    />
                    <br />

                    <label htmlFor="email" className="text-[14px] font-semibold">Email</label><br />
                    <input 
                    type="email" 
                    id="email" 
                    className="border-2 border-gray-400 rounded-lg w-full h-[35px] px-2 mb-3"
                    onChange={(e)=>setEmail((e.target as any).value)}
                    />
                    <br />

                    <label htmlFor="password" className="text-[14px] font-semibold">Password</label><br />
                    <input 
                    type="password" 
                    id="password" 
                    className="border-2 border-gray-400 rounded-lg w-full h-[35px] px-2 mb-3"
                    onChange={(e)=>setPassword((e.target as any).value)}
                    />
                    <br />

                    <label htmlFor="password-confirmation" className="text-[14px] font-semibold">Password Confirmation</label><br />
                    <input 
                    type="password" 
                    id="password-confirmation" 
                    className="border-2 border-gray-400 rounded-lg w-full h-[35px] px-2 mb-6" 
                    onChange={(e)=>setPasswordConfirmation((e.target as any).value)}
                    />
                    <br />
                   

                    <button onClick={(e)=>{
                        e.preventDefault()
                        postData()
                        }} className="bg-carrot text-white w-full py-1.5 rounded-lg text-[14px] font-semibold">Sign Up</button>
                    <p className="text-center text-[14px] font-medium mt-5 text-[#333]">Already have an account?<Link to={'/sign-in'} className="text-carrot underline ml-1">Login</Link></p>

                </form>
           

            <div className="w-6/12 max-lg:hidden">
             <img src={FoodImage} alt="Food-image" className=" h-full w-full object-fit rounded-tr-xl rounded-br-xl"/>
            </div>
            
        </div>
    )
}

export default SignUpComponent