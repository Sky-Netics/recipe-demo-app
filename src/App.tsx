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
import AllRecipesDetail from './pages/allRecipesDetail';
import CreateRecipes from './pages/createRecipes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={HomePage} path='/' />
        <Route Component={Register} path='/register/' />
        <Route Component={Login} path='/login/' />
        <Route Component={Dashboard} path='/dashboard/' />
        <Route Component={AllRecipes} path='/dashboard/all-recipes/' />
        <Route Component={AllRecipesDetail} path='/dashboard/all-recipes/:id' />
        <Route Component={MyRecipes} path='/dashboard/my-recipes/' />
        <Route Component={FavoriteRecipes} path='/dashboard/favorite/' />
        <Route Component={Account} path='/dashboard/account/' />
        <Route Component={CreateRecipes} path='/dashboard/my-recipes/create/' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
