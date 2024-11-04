import HomePage from "../pages/Home/homePage";
import SignUp from "../pages/SignUP/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Dashbord from "../pages/Dashbord/dashbord";

let routes = [
    { path: '/', element: <HomePage /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/dashbord', element: <Dashbord /> },
]

export default routes