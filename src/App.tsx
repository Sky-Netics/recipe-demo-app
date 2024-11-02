import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './pages/homePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={HomePage} path='/' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
