import React, { createContext, useContext } from "react";
import pt_BR from "../lang/pt_BR.json";

const INITIAL_STATE = {
    lang: pt_BR
}
const LangContext = createContext(INITIAL_STATE);

interface LangProviderProps {
    children: React.ReactNode
}

export default function LangProvider({ children }: LangProviderProps) {
    return (
        <LangContext.Provider value={INITIAL_STATE}>
            {children}
        </LangContext.Provider>
    );
}

export const useLang = () => useContext(LangContext);
