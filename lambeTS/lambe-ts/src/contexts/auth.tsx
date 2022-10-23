import { useState, createContext, useContext } from "react";
import IUser from "../interfaces/User";

interface AuthContextData {
    signed: boolean;
    user: IUser | null;
    handleSignIn: (email: string, password: string) => void;
    handleSignOut: () => void;
}

interface AuthContextProps {
    children: React.ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default function AuthProvider({children}: AuthContextProps) {
    const [user, setUser] = useState<IUser | null>({ name: "Temporário", email: "temporario@gmail.com" });

    function handleSignIn(email: string, password: string) {
        setUser({ email, password, name: "Temporário" });
    }

    function handleSignOut() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, handleSignIn, handleSignOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
