import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext(null);
export const DUMMY_USER = {
    email: 'user@example.com',
    password: 'password123',
    name: 'Danis Zen',
};
export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(() => {
        const savedUser = localStorage.getItem('meeting_tracker_user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const login = (email, password) => {
        if(email === DUMMY_USER.email && password === DUMMY_USER.password){
            const userData = { name: DUMMY_USER.name, email: DUMMY_USER.email };
            setUser(userData);
            localStorage.setItem('meeting_tracker_user', JSON.stringify(userData));
            return{ success: true };
        }
        return { success: false, message: 'Invalid email or password' };
    };
    const logout = () => {
        setUser(null);
        localStorage.removeItem('meeting_tracker_user')
    };
    return(
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext)