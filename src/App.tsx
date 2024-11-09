import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './Routes/Routes';
import AuthContext from './context/authContext';
import { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<object | null>({});

  const login = (userData: object, token: string) => {
    setAccessToken(token);
    setIsLoggedIn(true);
    setUserData(userData);
    localStorage.setItem('access-token', JSON.stringify({ token }));
    localStorage.setItem('user-data', JSON.stringify(userData));
  };

  const logout = () => {
    setAccessToken(null);
    setUserData({});
    localStorage.removeItem('access-token');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const localStorageData: any = localStorage.getItem('access-token');

    let token;

    if (localStorageData) {
      try {
        token = JSON.parse(localStorageData).token;
      } catch (error) {
        console.error('Error parsing token:', error);
      }

      if (token) {
        setAccessToken(token);
        setIsLoggedIn(true);
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        accessToken,
        userData,
        login,
        logout,
      }}
    >
      <RoutesWrapper isLoggedIn={isLoggedIn} />
    </AuthContext.Provider>
  );
}

type RoutesWrapperProps = {
  isLoggedIn: boolean | null;
};

const RoutesWrapper: React.FC<RoutesWrapperProps> = ({ isLoggedIn }) => {
  const router = useRoutes(routes);
  return <>{router}</>;
};

export default App;
