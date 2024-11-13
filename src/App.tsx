import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import HomePage from './pages/homePage';
import Register from "./pages/register";
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import AllRecipes from './pages/allRecipes';
import MyRecipes from './pages/myRecipes';
import FavoriteRecipes from './pages/favoriteRecipes';
import Account from './pages/account';
import EditRecipes from './pages/editRecipes';
import CreateRecipes from './pages/createRecipes';
import ErrorPage from './pages/404';
import RecipesDetail from './pages/recipesDetail';
import MoreRecipes from './pages/moreRecipes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={HomePage} path='/' />
        <Route Component={MoreRecipes} path='/recipes' />
        <Route Component={Register} path='/register/' />
        <Route Component={Login} path='/login/' />
        <Route Component={Dashboard} path='/dashboard/' />
        <Route Component={AllRecipes} path='/dashboard/all-recipes/' />
        <Route Component={MyRecipes} path='/dashboard/my-recipes/' />
        <Route Component={FavoriteRecipes} path='/dashboard/favorite/' />
        <Route Component={Account} path='/dashboard/account/' />
        <Route Component={CreateRecipes} path='dashboard/recipe/create/'/>
        <Route Component={EditRecipes} path='/dashboard/recipe/edit/:id/' />
        <Route Component={RecipesDetail} path='/dashboard/recipe/:id'/>
        <Route Component={ErrorPage} path='*' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
