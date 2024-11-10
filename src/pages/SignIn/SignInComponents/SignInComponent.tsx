import { Link } from 'react-router-dom'
import AuthContext from '../../../context/authContext'
import FoodImage from '../../../assets/SignUp-SignIn/signUp-signIn.webp'
import Logo from '../../../assets/logo.png'
import { useState, useEffect, useContext } from 'react'

type UserData = {
    username: string,
    password: string
}

const SignInComponent = () =>{

    const authContext = useContext(AuthContext)
    console.log(authContext)

    const [username, setUsername] =useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [accessToken, setAccessToken] = useState<string | null>()
    const [err ,setErr] = useState<boolean>(false)

    const apiUrl:string = 'http://api.recipeapp.soroushsalari.com/auth/login'  

    function PostData (){

            const userData: UserData = {
                username,
                password
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
                    setErr(true)
                    return response.text().then(text => {
                        throw new Error('Network response was not ok: ' + response.statusText + '. Response: ' + text);
                    });
                }
                setErr(false)
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
    
                setAccessToken(data.access_token)
                    if (accessToken) {
                    localStorage.setItem('access-token', accessToken);
                    console.log('Access Token saved in local storage');
                } else {
                    console.log('Access Token not found in response');
                }

                authContext.login(data.user ,data.access_token)

                const refreshToken = data.refresh_token
                if(refreshToken){
                    localStorage.setItem('refresh-token', refreshToken)
                    console.log('Refresh token saved in local storage')
                    window.location.href = '/dashboard'
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
                   
                   <img src={Logo} alt="Logo" className="w-[80px] mx-auto mb-10"/>

                   
                    <label htmlFor="username" className="text-[14px] font-semibold">Username</label><br />
                    <input 
                    type="text"  
                    id="username" 
                    className="border-2 border-gray-400 rounded-lg w-full h-[35px] px-2 py-6  mb-5"
                    onChange={(e)=>setUsername((e.target as any).value)}
                    />
                    <br />

                    <label htmlFor="password" className="text-[14px] font-semibold ">Password</label><br />
                    <input 
                    type="password" 
                    id="password" 
                    className="border-2 border-gray-400 rounded-lg w-full h-[35px] px-2 py-6 mb-3"
                    onChange={(e)=>setPassword((e.target as any).value)}
                    />
                    <br />                   

                    {err? <p className='text-red-600'>Invalid username or password!</p>: null}

                    <button 
                    className="bg-carrot text-white w-full py-4 rounded-lg text-[14px] font-semibold mt-4"
                    onClick={(e)=>{
                        e.preventDefault()
                        PostData()
                    }}
                    >Login</button>
                    <p className="text-center text-[14px] font-medium mt-7 text-[#333]">Already have an account?<Link to={'/sign-up'} className="text-carrot underline ml-1">Login</Link></p>

                </form>
           

            <div className="w-6/12 max-lg:hidden">
             <img src={FoodImage} alt="Food-image" className=" h-full w-full object-fit rounded-tr-xl rounded-br-xl"/>
            </div>
            
        </div>
    )
}

export default SignInComponent