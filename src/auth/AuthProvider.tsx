import {useAuth} from "./hooks/useAuth";
import {AuthContext} from "./AuthContext";
import {ReactNode} from "react";

interface AuthProps {
    children: ReactNode;
    // other props...
}

export default function AuthProvider({children}: AuthProps) {

    const {user, login, logout} = useAuth();

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}