import React, { createContext, useCallback, useContext, useState } from "react";

import api from "../services/api";

interface SignInProps {
    email: string;
    pass: string;
}

interface User {
    id: number;
    name: string;
    email: string;
}

interface AuthContextProps {
    user: User | null;
    signIn(object: SignInProps): Promise<boolean>;
}

interface UserProps {
    id: number;
    name: string;
    email: string;
    password: string;
    birthday: string;
    address: string;
    image: string;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<UserProps | null>(() => {
        const user = localStorage.getItem("@Americanas:user");
        if (user) {
            return JSON.parse(user);
        }
        return null;
    });

    const logout = useCallback(() => {
        localStorage.removeItem("@Americanas:user");
        setData(null);
    }, []);

    const signIn = useCallback(async ({ email, pass }): Promise<boolean> => {
        const response = await api.get<UserProps>(
            `users/email/${email}`,
            email,
        );
        if (!response) {
            alert("Email ou senha incorretos");
            return false;
        }
        if (response.data.password !== pass) {
            alert("Email ou senha incorretos");
            return false;
        }
        localStorage.setItem("@Americanas:user", JSON.stringify(response.data));
        setData(response.data);
        return true;
    }, []);
    return (
        <AuthContext.Provider value={{ user: data, signIn }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextProps {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Error of Context");
    }
    return context;
}

export { AuthProvider, useAuth };
