import { useState, createContext, useContext } from "react";

interface AuthContextData {
    signed: boolean;
    user: object | null;
    handleSignIn: () => void;
    handleSignOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthContextProps {
    children: React.ReactNode
}

export default function AuthProvider({children}: AuthContextProps) {
    const [user, setUser] = useState<object | null>({ teste: "vasco" });

    function handleSignIn() {
        setUser({});
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
