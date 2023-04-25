import {User} from "./hooks/useUser";
import {createContext} from "react";
import {LogInForm} from "./hooks/useAuth";

interface AuthContextData {
    user: User | null;

    login: (form: LogInForm) => void;

    logout: () => void;
}

export const AuthContext = createContext<AuthContextData>({
    user: null,
    login: () => null,
    logout: () => null
} as AuthContextData);