import { createContext } from "react";

type AuthContextType ={
    isLoggedIn: boolean | null;
    accessToken: string | null;
    userData: any;
    login: (userData: object, token: string) => any;
    logout: () => any;
}

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    accessToken: null,
    userData: null,
    login: () => {},
    logout: () => {}
});

export default AuthContext;