import HomePage from "../pages/Home/homePage";
import SignUp from "../pages/SignUP/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import DashboardPage from "../pages/Dashboard/dashboardPage";
import AllRecipesPage from "../pages/AllRecipes/AllRecipesPage";
import MyRecipesPage from "../pages/MyRecipes/myRecipesPage";
import FavouritesPage from "../pages/Favourites/favouritesPage";
import AccountPage from "../pages/Account/AcountPage";

let routes = [
    { path: '/', element: <HomePage /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/dashboard', element: <DashboardPage /> },
    { path: '/dashboard/all-recipes', element: < AllRecipesPage />},
    { path: '/dashboard/my-recipes', element: <MyRecipesPage />},
    { path: '/dashboard/favourites', element: <FavouritesPage />},
    { path: '/dashboard/account', element: <AccountPage />},
]

export default routes