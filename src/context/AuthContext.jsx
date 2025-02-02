import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { auth } from "../../firebase.config";
import { createContext, useContext, useEffect, useState } from "react";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        console.log("Error creating auth context");
    }
    return context;
};

export function AuthProvider({ children }) {
    const [userLogged, setUserLogged] = useState("");

    useEffect(() => {
        const suscribed = onAuthStateChanged(auth, (currentUser) => {
            !currentUser ? setUserLogged("") : setUserLogged(currentUser);
        });
        return () => suscribed();
    }, []);

    const loginWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const res = await signInWithPopup(auth, provider);
            return { success: true, user: res.user };
        } catch (error) {
            return { success: false, error: error };
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            return { success: true };
        } catch (error) {
            return { success: false, error: error };
        }
    };

    return (
        <authContext.Provider value={{ loginWithGoogle, logout, userLogged }}>
            {children}
        </authContext.Provider>
    );
}
