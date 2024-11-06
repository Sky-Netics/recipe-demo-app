import './App.css';
import { useRoutes, BrowserRouter, Routes } from 'react-router-dom';
// import HomePage from './pages/homePage';
import Navbar from './components/navbar';
import routes from './Routes/Routes';

function App() {
  // useRoutes must be used within a BrowserRouter context
  const router = useRoutes(routes);

  return (
      <div className='App'>
        
        {router}
      </div>
  );
}

export default App;
